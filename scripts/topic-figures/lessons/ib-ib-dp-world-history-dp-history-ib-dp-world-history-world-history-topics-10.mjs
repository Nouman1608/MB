import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-ib-dp-world-history-dp-history-ib-dp-world-history-world-history-topics-10';

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
        const p = para(tx, cy + bs * 0.8, it, iw, { size: bs, anchor, fill: o.bfill || (o.fill === C.mustard ? C.ink : C.muted), bullet: o.bullets, weight: o.bweight, bfill: o.bbfill || C.ink, mfill: o.mfill });
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

// ---- history helpers (hist1) ----
// Vertical timeline: date on the left of a spine, card on the right. items [{d, title, body, fill, edge, key}]
function vtimeline(y, items, o = {}) {
  const LX = o.lx ?? 170, W = 870 - LX - 34, sz = o.size ?? 16, ts = o.tsize ?? 18;
  const mk = (it, yy) => card(LX + 34, yy, W, { title: it.title, body: it.body, size: sz, tsize: ts, pad: 13, fill: it.fill || (it.key ? C.cream : C.panel), edge: it.edge || (it.key ? C.olive : C.panelEdge), tgap: 3 });
  const hs = items.map((it) => mk(it, 0).h), gap = o.gap ?? 10;
  const total = hs.reduce((a, h) => a + h + gap, -gap);
  let s = `<line x1="${LX}" y1="${y + 10}" x2="${LX}" y2="${y + total - 10}" stroke="${C.ink}" stroke-width="4"/>`, cy = y;
  items.forEach((it, i) => {
    s += mk(it, cy).s + `<line x1="${LX}" y1="${cy + hs[i] / 2}" x2="${LX + 34}" y2="${cy + hs[i] / 2}" stroke="${C.ink}" stroke-width="2.5"/>` +
      `<circle cx="${LX}" cy="${cy + hs[i] / 2}" r="9" fill="${it.key ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="3"/>`;
    if (it.d) {
      const dl = Array.isArray(it.d) ? it.d : [it.d];
      dl.forEach((d, k) => { s += T(LX - 20, cy + hs[i] / 2 + 6 + (k - (dl.length - 1) / 2) * 21, d, { size: o.dsize ?? 17, weight: 700, anchor: 'end' }); });
    }
    cy += hs[i] + gap;
  });
  return { s, h: total };
}
// Interpretation spectrum: a double-headed bar with end labels, then cards hanging from points along it.
// pts [{at (0..1), title, body}] laid out as a row of cards beneath; connector from card top to the bar position.
function spectrum(y, left, right, pts, o = {}) {
  const x0 = 60, x1 = 840, by = y + 58;
  let s = T(x0 - 20, y + 16, left, { size: 17, weight: 700, fill: C.tealDark }) + T(x1 + 20, y + 16, right, { size: 17, weight: 700, fill: C.rust, anchor: 'end' });
  s += `<defs><linearGradient id="sg${y}" x1="0" x2="1"><stop offset="0" stop-color="${C.teal}"/><stop offset="1" stop-color="${C.cream}"/></linearGradient></defs>`;
  s += `<rect x="${x0}" y="${by - 13}" width="${x1 - x0}" height="26" rx="13" fill="url(#sg${y})" stroke="${C.ink}" stroke-width="2.5"/>`;
  const r = row(by + 70, pts.map((p) => ({ title: p.title, body: p.body, fill: p.fill, edge: p.edge })), { gap: o.gap ?? 14, card: { size: o.size ?? 16, tsize: o.tsize ?? 18, pad: 14, align: 'middle' } });
  pts.forEach((p, i) => {
    const px = x0 + p.at * (x1 - x0), cx = r.xs[i] + r.ws[i] / 2;
    s += path(`M${px},${by + 13} L${px},${by + 36} L${cx},${by + 50} L${cx},${by + 70}`, { w: 2.5 });
    s += `<circle cx="${px}" cy="${by}" r="10" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
  });
  return { s: s + r.s, h: 70 + 58 + r.h };
}
// Label above a block (small caps-style kicker). Returns block fn.
const K = (label, o = {}) => (y) => ({ s: T(o.x ?? 30, y + 14, label, { size: 15, weight: 700, fill: o.fill || C.muted }), h: 14 });
// Essay plan: numbered paragraph cards with a minutes label and a tag chip; first is the named factor.
function planList(y, items, o = {}) {
  let s = '', cy = y;
  items.forEach((it, i) => {
    const hl = it.hl ?? i === 0;
    const c = card(130, cy, 740, { title: it.title, body: it.body, size: 16, tsize: 19, pad: 15, fill: hl ? C.tealLight : C.panel, edge: hl ? C.tealDark : C.panelEdge });
    s += c.s + badge(62, cy + c.h / 2 - (it.min ? 8 : 0), 24, it.n ?? String(i + 1), hl ? C.mustard : C.cream);
    if (it.min) s += T(62, cy + c.h / 2 + 36, it.min, { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
    if (it.tag) s += chip(855, cy + 12, it.tag, { size: 15, anchor: 'end', fill: hl ? C.mustard : C.panel, edge: hl ? C.ink : C.panelEdge }).s;
    cy += c.h + (o.gap ?? 12);
  });
  return { s, h: cy - y - (o.gap ?? 12) };
}
// Balance scale: heavier side drops. left/right: {title, items[]}; tilt: 'right' or 'left'.
function balance(y, left, right, o = {}) {
  const tilt = o.tilt === 'left' ? -1 : 1, cx = 450, py = y + 40, dy = 34 * tilt;
  const lx = 210, rx = 690, ly = py - dy, ry = py + dy;
  let s = `<polygon points="${cx},${py} ${cx - 34},${py + 70} ${cx + 34},${py + 70}" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  s += `<line x1="${lx}" y1="${ly}" x2="${rx}" y2="${ry}" stroke="${C.ink}" stroke-width="7" stroke-linecap="round"/><circle cx="${cx}" cy="${py}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
  const side = (x, yy, d, fill, edge) => {
    const top = yy + 40;
    const c = card(x - 180, top, 360, { title: d.title, body: d.items, bullets: true, size: 16, tsize: 19, pad: 16, fill, edge, gap: 4 });
    return { s: `<line x1="${x}" y1="${yy}" x2="${x}" y2="${top}" stroke="${C.ink}" stroke-width="3"/>` + c.s, bot: top + c.h };
  };
  const L = side(lx, ly, left, o.lfill || C.panel, o.ledge || C.panelEdge), R = side(rx, ry, right, o.rfill || C.cream, o.redge || C.olive);
  return { s: s + L.s + R.s, h: Math.max(L.bot, R.bot) - y };
}
// Converging factors: cards in a grid, arrows down into one outcome box.
function converge(y, items, outcome, o = {}) {
  const cols = o.cols ?? items.length;
  const g = grid(y, items, cols, { gap: 16, vgap: 16, card: { size: o.size ?? 16, tsize: o.tsize ?? 18, pad: 16, ...(o.card || {}) } });
  const oy = y + g.h + 64;
  const oc = card(150, oy, 600, { title: outcome.title, body: outcome.body, kicker: outcome.kicker, fill: C.mustard, edge: C.ink, kfill: C.ink, align: 'middle', size: 17, tsize: 21 });
  let s = g.s + oc.s;
  const n = Math.min(cols, items.length), w = (840 - 16 * (n - 1)) / n;
  for (let i = 0; i < n; i++) { const cx = 30 + i * (w + 16) + w / 2; s += arrow(cx, y + g.h + 6, n === 1 ? 450 : 300 + (i * 300) / (n - 1), oy - 6, { w: 3.5 }); }
  return { s, h: g.h + 64 + oc.h };
}
// Paired rows: left card, date pill in the middle, right card. rows [{d, l:{title,body}, r:{title,body}|null, key}]
function pairs(y, rows, o = {}) {
  const lw = o.lw ?? 360, mid = 450, pw = o.pw ?? 108;
  let s = T(30 + lw / 2, y + 16, o.lh || '', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) + T(870 - lw / 2, y + 16, o.rh || '', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  let cy = y + 30;
  const hs = rows.map((r) => Math.max(r.l ? card(0, 0, lw, { ...r.l, size: 15, tsize: 17, pad: 13 }).h : 0, r.r ? card(0, 0, lw, { ...r.r, size: 15, tsize: 17, pad: 13 }).h : 0, 50));
  const total = hs.reduce((a, h) => a + h + 12, -12);
  s += `<line x1="${mid}" y1="${cy}" x2="${mid}" y2="${cy + total}" stroke="${C.ink}" stroke-width="3"/>`;
  rows.forEach((r, i) => {
    const h = hs[i];
    if (r.l) s += card(30, cy, lw, { ...r.l, size: 15, tsize: 17, pad: 13, minH: h, vcenter: true, fill: r.key ? C.cream : r.l.fill || C.panel, edge: r.key ? C.olive : r.l.edge || C.rust }).s + `<line x1="${30 + lw}" y1="${cy + h / 2}" x2="${mid - pw / 2}" y2="${cy + h / 2}" stroke="${C.ink}" stroke-width="2"/>`;
    if (r.r) s += card(870 - lw, cy, lw, { ...r.r, size: 15, tsize: 17, pad: 13, minH: h, vcenter: true, fill: r.r.fill || C.tealLight, edge: r.r.edge || C.tealDark }).s + `<line x1="${mid + pw / 2}" y1="${cy + h / 2}" x2="${870 - lw}" y2="${cy + h / 2}" stroke="${C.ink}" stroke-width="2"/>`;
    s += `<rect x="${mid - pw / 2}" y="${cy + h / 2 - 17}" width="${pw}" height="34" rx="17" fill="${r.key ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(mid, cy + h / 2 + 6, r.d, { size: 15, weight: 700, anchor: 'middle' });
    cy += h + 12;
  });
  return { s, h: 30 + total };
}
// ---- end hist1 helpers ----

const H2 = {
  cov: '## What the topic covers',
  em: '### Emergence: conditions and methods are different questions',
  con: '### Consolidation: legal methods and force together',
  pol: '### Policies: aims against results',
  tot: '### How total was control?',
  we: '## Worked example: a comparative plan',
};

// 01 Three parts
F('01-three-parts', 'Authoritarian states: three parts', 'Emergence, consolidation, then policies and how far control was achieved', [
  (y) => stack(y, [
    { kicker: 'PART 1', title: 'Emergence', body: '**Conditions:** economic factors, social division, war, weak political systems. **Methods:** persuasion and coercion, leaders, ideology, force, propaganda', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'PART 2', title: 'Consolidation and maintenance', body: 'Legal methods, force, charisma, propaganda, treatment of opposition, foreign policy success or failure', fill: C.teal, edge: C.tealDark },
    { kicker: 'PART 3', title: 'Aims and results of policies', body: 'Economic, political, cultural and social policies; women and minorities', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 36, card: { size: 16, tsize: 20 } }),
  (y) => note(y, 'The question examiners like', ['To what extent was authoritarian control **really** achieved, not only how leaders tried?'], { size: 17, align: 'middle', fill: C.mustard, edge: C.ink }),
],
'Three stacked parts. Emergence: conditions such as economic factors, social division, war and weak political systems, and methods such as persuasion, coercion, ideology, force and propaganda. Consolidation: legal methods, force, charisma, propaganda, treatment of opposition and foreign policy. Aims and results of policies, including women and minorities. A final box asks how far control was really achieved.',
'Learn the topic by theme: emergence, consolidation, policies and results.', H2.cov);

// 02 Conditions vs methods
F('02-conditions-vs-methods', 'Conditions open the door; methods walk through it', 'Keep the two apart in emergence questions', [
  (y) => {
    const rows = [
      ["Stalin's USSR", 'Civil war legacy; single-party rule in place; economic backwardness', 'Party machine as General Secretary (from 1922); alliances against Trotsky, then Zinoviev and Kamenev, then Bukharin'],
      ["Hitler's Germany", 'Defeat, Versailles, hyperinflation, the Depression, weak coalitions', 'Mass party, elections, propaganda; SA violence; deal with conservative elites: chancellor, 30 January 1933'],
      ["Mao's China", 'Civil war, Japanese invasion, Guomindang corruption and inflation', 'Peasant mobilization, land reform, the PLA; civil war victory; PRC, 1 October 1949'],
      ["Castro's Cuba", "Batista's corrupt dictatorship, US economic dominance, rural poverty", 'Guerrilla war from the Sierra Maestra after the Granma landing (1956); Batista fled, 1 January 1959'],
    ];
    let s = T(320, y + 16, 'CONDITIONS: why the society was open', { size: 15, weight: 700, anchor: 'middle', fill: C.olive }) + T(680, y + 16, 'METHODS: how the leader seized it', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    let cy = y + 30;
    rows.forEach(([st, c, m]) => {
      const a = card(170, cy, 300, { body: c, size: 15, pad: 13, bfill: C.ink });
      const b = card(530, cy, 340, { body: m, size: 15, pad: 13, bfill: C.ink });
      const h = Math.max(a.h, b.h);
      s += para(30, cy + h / 2 - (wrapRich(st, 130, 17, 700).length - 1) * 10 + 6, st, 130, { size: 17, weight: 700, fill: C.ink, lh: 20 }).s;
      s += card(170, cy, 300, { body: c, size: 15, pad: 13, bfill: C.ink, minH: h, vcenter: true, fill: C.cream, edge: C.olive }).s + card(530, cy, 340, { body: m, size: 15, pad: 13, bfill: C.ink, minH: h, vcenter: true, fill: C.tealLight, edge: C.tealDark }).s;
      s += arrow(476, cy + h / 2, 524, cy + h / 2, { w: 3.5 });
      cy += h + 12;
    });
    return { s, h: cy - y - 12 };
  },
],
'Four rows, one per state, each with conditions on the left and methods on the right. Stalin: civil war legacy and single-party rule, then control of the party machine and alliances against rivals. Hitler: defeat, Versailles, hyperinflation and the Depression, then a mass party, SA violence and a deal with elites leading to the chancellorship on 30 January 1933. Mao: civil war, invasion and Guomindang corruption, then peasant mobilization and victory in 1949. Castro: Batista\'s dictatorship and rural poverty, then guerrilla war from 1956 to Batista\'s flight on 1 January 1959.',
'Conditions explain why; methods explain how a particular leader took power.', H2.em);

// 03 Consolidation toolkit
F('03-consolidation-toolkit', 'How power was consolidated', 'Leaders rarely relied on force alone', [
  (y) => hub(y, ['Holding', 'power'], [
    { kicker: 'LEGAL METHODS', title: 'Decrees and constitutions', body: 'Reichstag fire decree; Enabling Act; the 1936 Soviet constitution as a façade', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'FORCE', title: 'Purges and terror', body: 'Night of the Long Knives (1934); Great Terror (1936-38); Mao\'s campaigns of the early 1950s', fill: C.panel, edge: C.rust },
    { kicker: 'CHARISMA AND PROPAGANDA', title: 'Personality cults', body: "Hitler, Stalin, Mao; Castro's televised speeches", fill: C.cream, edge: C.olive },
  ], [
    { kicker: 'OPPOSITION', title: 'Co-opt, exile, imprison', body: 'Concordat (July 1933); Trotsky expelled (1929); camps and execution' },
    { kicker: 'FOREIGN POLICY', title: 'Success abroad', body: "Hitler's bloodless gains (1936-38); Castro's Bay of Pigs victory (April 1961)", fill: C.cream, edge: C.olive },
  ], { cardW: 300, r: 74 }),
],
'A central circle, holding power, linked to five methods: legal methods such as the Reichstag fire decree and Enabling Act; force such as the Night of the Long Knives and the Great Terror; charisma and propaganda in personality cults; treatment of opposition from co-option to exile and imprisonment; and foreign policy success such as Hitler\'s bloodless gains and Castro\'s Bay of Pigs victory.',
'Weigh force against legal methods, propaganda and popularity.', H2.con);

// 04 Hitler consolidation timeline
F('04-hitler-consolidation', 'Germany, 1933-1938: legal methods and force together', null, [
  (y) => {
    const L = [['coming to power', C.mustard, C.ink], ['legal method and co-option', C.tealLight, C.tealDark], ['force', C.panel, C.rust], ['foreign policy success', C.cream, C.olive]];
    const ws = L.map(([l]) => chip(0, 0, l, { size: 15 }).w), tot = ws.reduce((a, b) => a + b, 0) + 10 * 3;
    let x = 450 - tot / 2, s = '';
    L.forEach(([l, f, e], i) => { s += chip(x, y, l, { size: 15, fill: f, edge: e }).s; x += ws[i] + 10; });
    return { s, h: 30 };
  },
  (y) => vtimeline(y, [
    { d: '30 Jan 1933', title: 'Appointed chancellor', body: 'After a deal with conservative elites', key: true, fill: C.mustard, edge: C.ink },
    { d: '28 Feb 1933', title: 'Reichstag fire decree', fill: C.tealLight, edge: C.tealDark },
    { d: '23 Mar 1933', title: 'Enabling Act', fill: C.tealLight, edge: C.tealDark },
    { d: 'Jul 1933', title: 'Other parties banned; Concordat with the Catholic Church', body: 'Legal ban and co-option of a rival institution', fill: C.tealLight, edge: C.tealDark },
    { d: '30 Jun 1934', title: 'Night of the Long Knives', body: 'SA leadership removed', fill: C.panel, edge: C.rust },
    { d: '1936', title: 'Rhineland', body: 'A bloodless success', fill: C.cream, edge: C.olive },
    { d: '1938', title: 'Austria and the Sudetenland', body: 'Popularity boosted', fill: C.cream, edge: C.olive },
  ], { lx: 160, size: 16, tsize: 18 }),
],
'A vertical timeline: Hitler appointed chancellor on 30 January 1933; the Reichstag fire decree (28 February 1933) and the Enabling Act (23 March 1933); other parties banned and the Concordat in July 1933; the Night of the Long Knives on 30 June 1934; and foreign successes in the Rhineland (1936) and Austria and the Sudetenland (1938). Colours separate legal methods, force and foreign policy.',
'Legal steps came first, force followed, and foreign success added popularity.', H2.con, { top: 96, gap: 16 });

// 05 Aims against results
F('05-policies-results', 'Policies: results and limits', 'Set the aim, then measure the result', [
  (y) => table(y, [
    { w: 1, head: 'Policy' }, { w: 1.25, head: 'What it did', hfill: C.teal }, { w: 1.25, head: 'Cost or limit', hfill: C.cream },
  ], [
    ["Stalin's first Five-Year Plan and collectivization (from 1928)", 'Rapid heavy-industrial growth', 'Famine, 1932-33'],
    ["Mao's Great Leap Forward (1958-62)", '', 'Catastrophic famine'],
    ['Nazi rearmament and public works', 'Unemployment reduced', 'Economy strained by 1939'],
    ['Nazi policy on women: motherhood', 'Marriage loans (1933); Mother\'s Cross (late 1938)', "Women's employment rose again with rearmament"],
    ["Mao's Marriage Law (1950)", 'Arranged marriages banned; divorce allowed', ''],
    ['Castro: Federation of Cuban Women (1960)', 'Gains in education and health', 'Traditional roles in the home persisted'],
  ], { size: 15, hsize: 17 }),
],
'A table of six policies with results and limits. Stalin\'s Five-Year Plan brought rapid industrial growth but famine in 1932-33; the Great Leap Forward ended in catastrophic famine; Nazi rearmament cut unemployment but strained the economy; Nazi motherhood policy was undercut as women\'s employment rose; Mao\'s Marriage Law banned arranged marriages; Castro\'s regime made gains for women in education and health while traditional roles persisted.',
'Measure results against aims, and look for the limits.', H2.pol, { top: 116 });

// 06 Totalitarianism debate
F('06-how-total-control', 'How total was control?', 'Use the debate to evaluate, not to label', [
  (y) => spectrum(y, 'Control from above', 'Limits from below', [
    { at: 0.08, title: 'Terror and ideology', body: 'What set these states apart', fill: C.tealLight, edge: C.tealDark },
    { at: 0.92, title: "Ordinary people's role", body: 'Co-operation, denunciation or indifference; the limits of the state\'s reach', fill: C.cream, edge: C.olive },
  ], { size: 16, gap: 140 }),
  (y) => K('EVIDENCE OF LIMITS TO LOOK FOR')(y),
  (y) => chips(y - 6, ['resistance', 'inefficiency', 'survival of churches', 'private attitudes'], { size: 17, fill: C.panel }),
],
'A spectrum from control from above, stressing terror and ideology, to limits from below, stressing ordinary people\'s co-operation, denunciation or indifference and the limits of the state\'s reach. Below, evidence of limits to look for: resistance, inefficiency, the survival of churches and private attitudes.',
'Test "totalitarian" against the evidence of what the state could not control.', H2.tot);

// 07 Worked example grid
F('07-stalin-castro-grid', 'Comparing consolidation: Stalin and Castro', 'Europe and the Americas: one theme per paragraph, both leaders in each', [
  (y) => note(y, 'Thesis', ['Both combined coercion and persuasion, but Stalin **captured** institutions inside an existing single-party state, while Castro **built** new ones on nationalism and US hostility.'], { size: 17, align: 'middle' }),
  (y) => table(y, [
    { w: 0.7, head: 'Theme' }, { w: 1.2, head: 'Stalin', hfill: C.teal }, { w: 1.3, head: 'Castro', hfill: C.cream }, { w: 1, head: 'Judgement', hfill: C.mustard },
  ], [
    ['Institutions', 'Party machine; rivals defeated 1924-29', 'Agrarian Reform Law (1959); CDRs (1960); Communist Party of Cuba (1965)', 'Stalin captured institutions; Castro created them'],
    ['Force', 'Purges; Great Terror (1936-38)', 'Trials and executions of Batista officials; opponents imprisoned or emigrated', 'Far greater scale under Stalin'],
    ['Persuasion', 'Personality cult; Five-Year Plan propaganda', 'Charisma; literacy campaign (1961); nationalism against the USA', 'Castro relied more on popularity'],
    ['Foreign policy', 'Limited role before 1939', 'Bay of Pigs (1961) rallied support', 'More important for Castro'],
  ], { size: 15, hsize: 17, cellFill: (r, c) => (c === 3 ? C.cream : null) }),
  (y) => card(30, y, 840, { title: 'Conclusion', body: 'A mix of methods in both; the balance differed: terror central for Stalin, nationalism and mobilization for Castro.', fill: C.cream, edge: C.olive, size: 17, tsize: 19 }),
],
'A thesis, then a grid comparing Stalin and Castro on four themes with a judgement for each: institutions (Stalin captured them, Castro created them), force (far greater scale under Stalin), persuasion (Castro relied more on popularity) and foreign policy (more important for Castro, after the Bay of Pigs). The conclusion: terror was central for Stalin, nationalism and mobilization for Castro.',
'Organize by theme and end each row with a judgement.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
