import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-world-history-9489-the-usa-1974-93';

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

// ---- history helpers (hist9489) ----
// Horizontal timeline drawn to scale. a..b years; ticks every `step`. events [{v, d, label, side:'up'|'down', key}]
// sit in one label row above and one below the axis, spread apart with angled leaders; spans [{a,b,label}] form a
// strip of period bars under everything, on the same scale. Returns {s,h,sc}.
function htl(y, a, b, o = {}) {
  const x0 = o.x0 ?? 70, x1 = o.x1 ?? 830, sc = (v) => x0 + ((v - a) * (x1 - x0)) / (b - a);
  const spans = o.spans || [], step = o.step ?? 10, lsz = o.lsize ?? 16, EL = 20, LG = o.lg ?? 56;
  const evs = (o.events || []).map((e) => ({ ...e, lines: Array.isArray(e.label) ? e.label : [e.label] })).sort((p, q) => p.v - q.v);
  evs.forEach((e, i) => { e.side = e.side || (i % 2 ? 'down' : 'up'); e.w = Math.max(tw(e.d, 16, 700), ...e.lines.map((l) => tw(l, lsz))) + 12; e.h = (e.lines.length + 1) * EL + 4; });
  const place = (list) => {
    const g = o.hgap ?? 8, L = 30, R = 870;
    list.forEach((e) => { e.cx = Math.min(Math.max(sc(e.v), L + e.w / 2), R - e.w / 2); });
    for (let it = 0; it < 60; it++) {
      for (let i = 1; i < list.length; i++) { const need = list[i - 1].cx + (list[i - 1].w + list[i].w) / 2 + g; if (list[i].cx < need) list[i].cx = need; }
      if (list.length && list[list.length - 1].cx > R - list[list.length - 1].w / 2) list[list.length - 1].cx = R - list[list.length - 1].w / 2;
      for (let i = list.length - 2; i >= 0; i--) { const need = list[i + 1].cx - (list[i + 1].w + list[i].w) / 2 - g; if (list[i].cx > need) list[i].cx = need; }
      if (list.length && list[0].cx < L + list[0].w / 2) list[0].cx = L + list[0].w / 2;
    }
    const tot = list.reduce((s2, e) => s2 + e.w + g, -g); if (tot > 840) WARN.push(`htl: labels too wide (${tot.toFixed(0)})`);
  };
  const up = evs.filter((e) => e.side === 'up'), dn = evs.filter((e) => e.side === 'down');
  place(up); place(dn);
  const upH = up.length ? Math.max(...up.map((e) => e.h)) : 0;
  const axisY = y + 26 + (up.length ? upH + LG : 14);
  let s = '', g2 = '';
  const dnH = dn.length ? Math.max(...dn.map((e) => e.h)) : 0;
  const dnTop = axisY + LG, stripTop = dn.length ? dnTop + dnH + 18 : axisY + 24;
  const SH = 34, SG = 8, sl = [];
  const spanLane = spans.map((sp) => { const L2 = sp.lane ?? (() => { let k = 0; while ((sl[k] || []).some(([p, q]) => !(sc(sp.b) + 4 < p || sc(sp.a) - 4 > q))) k++; return k; })(); (sl[L2] = sl[L2] || []).push([sc(sp.a), sc(sp.b)]); return L2; });
  const nS = spans.length ? Math.max(...spanLane) + 1 : 0, bottom = nS ? stripTop + nS * (SH + SG) - SG : (dn.length ? dnTop + dnH : axisY + 14);
  const tks = o.ticks || (() => { const r = []; for (let v = Math.ceil(a / step) * step; v <= b; v += step) r.push({ v, label: String(v) }); return r; })();
  for (const { v, label: tlab } of tks) {
    g2 += `<line x1="${sc(v)}" y1="${y + 24}" x2="${sc(v)}" y2="${bottom}" stroke="${C.panelEdge}" stroke-width="1.5"/>` + T(sc(v), y + 14, tlab, { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
  }
  if (o.bands) o.bands.forEach((bd) => { g2 += `<rect x="${sc(bd.a)}" y="${y + 24}" width="${Math.max(4, sc(bd.b) - sc(bd.a))}" height="${bottom - y - 24}" fill="${bd.fill || C.cream}" opacity="${bd.op ?? 0.6}"/>`; });
  spans.forEach((sp, i) => {
    const yy = stripTop + spanLane[i] * (SH + SG), w = Math.max(8, sc(sp.b) - sc(sp.a));
    s += `<rect x="${sc(sp.a)}" y="${yy}" width="${w}" height="${SH}" rx="8" fill="${sp.fill || C.tealLight}" stroke="${sp.edge || C.tealDark}" stroke-width="2.5"/>`;
    const lw = tw(sp.label, lsz, 700);
    if (lw + 16 <= w) s += T(sc(sp.a) + w / 2, yy + SH / 2 + lsz * 0.36, sp.label, { size: lsz, weight: 700, anchor: 'middle', fill: sp.ink || C.ink });
    else { const right = sc(sp.b) + 8 + lw < 870; if (!right && sc(sp.a) - 8 - lw < 30) WARN.push(`htl span label too wide: ${sp.label}`); s += T(right ? sc(sp.b) + 8 : sc(sp.a) - 8, yy + SH / 2 + lsz * 0.36, sp.label, { size: lsz, weight: 700, anchor: right ? 'start' : 'end', fill: sp.ink || C.ink }); }
  });
  s += `<line x1="${x0 - 20}" y1="${axisY}" x2="${x1 + 20}" y2="${axisY}" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/>`;
  const lab = (e, top) => {
    let r = '';
    const dir = e.side === 'up' ? -1 : 1, px = sc(e.v), elbow = axisY + dir * 16, end = e.side === 'up' ? top + e.h + 2 : top - 2;
    r += path(`M${px},${axisY} L${px},${elbow} L${e.cx},${end}`, { w: 2 });
    const ty = top;
    r += `<rect x="${e.cx - e.w / 2}" y="${top}" width="${e.w}" height="${e.h}" fill="${C.bg}"/>`;
    r += T(e.cx, ty + 15, e.d, { size: 16, weight: 700, anchor: 'middle', fill: e.key ? C.rust : C.ink });
    e.lines.forEach((l, k) => { r += T(e.cx, ty + 15 + (k + 1) * EL, l, { size: lsz, anchor: 'middle', fill: C.ink }); });
    return r;
  };
  up.forEach((e) => { s += lab(e, axisY - LG - e.h); });
  dn.forEach((e) => { s += lab(e, dnTop); });
  evs.forEach((e) => { s += `<circle cx="${sc(e.v)}" cy="${axisY}" r="8" fill="${e.key ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="3"/>`; });
  return { s: g2 + s, h: bottom - y + 4, sc, axisY };
}
// Vertical timeline drawn to scale with a central spine: events [{v, d, label, side:'left'|'right', key}].
// Year labels sit in the left margin with faint gridlines; labels are relaxed vertically to avoid overlap. Returns {s,h}.
function vscale(y, a, b, o = {}) {
  const ppy = o.ppy ?? 60, top = y + 14 + (o.lh || o.rh ? 30 : 0), sc = (v) => top + (v - a) * ppy, AX = o.ax ?? 470, sz = o.size ?? 16, step = o.step ?? 1;
  const LW = o.lw ?? AX - 140 - 30, RW = o.rw ?? 870 - AX - 40, EL = Math.round(sz * 1.3);
  const evs = (o.events || []).map((e) => {
    const w = e.side === 'left' ? LW : RW;
    const p = para(0, 0, e.label, w, { size: sz });
    return { ...e, h: EL + p.h + 2, w };
  }).sort((p, q) => p.v - q.v);
  const relax = (list) => {
    const g = o.vgap ?? 8;
    list.forEach((e) => { e.top = sc(e.v) - EL * 0.6; });
    for (let it = 0; it < 60; it++) {
      for (let i = 1; i < list.length; i++) { const need = list[i - 1].top + list[i - 1].h + g; if (list[i].top < need) list[i].top = need; }
      for (let i = list.length - 2; i >= 0; i--) { const need = list[i + 1].top - list[i].h - g; if (list[i].top > need) list[i].top = Math.max(need, top - EL); }
    }
  };
  const L = evs.filter((e) => e.side === 'left'), R = evs.filter((e) => e.side !== 'left');
  relax(L); relax(R);
  const bottom = Math.max(sc(b), ...evs.map((e) => e.top + e.h));
  let g = '', s = '';
  const ticks = o.ticks || (() => { const r = []; for (let v = a; v <= b + 1e-9; v += step) r.push({ v, label: String(v) }); return r; })();
  ticks.forEach((k) => { g += `<line x1="${o.gx ?? 96}" y1="${sc(k.v)}" x2="870" y2="${sc(k.v)}" stroke="${C.panelEdge}" stroke-width="1.2"/>` + T(30, sc(k.v) + 6, k.label, { size: 15, weight: 700, fill: C.muted }); });
  if (o.bands) o.bands.forEach((bd) => { g += `<rect x="${AX - 10}" y="${sc(bd.a)}" width="20" height="${sc(bd.b) - sc(bd.a)}" rx="6" fill="${bd.fill || C.mustard}" stroke="${C.ink}" stroke-width="2"/>`; });
  s += `<line x1="${AX}" y1="${sc(a)}" x2="${AX}" y2="${sc(b)}" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/>`;
  if (o.lh) s += T(AX - 40, y + 14, o.lh, { size: 15, weight: 700, anchor: 'end', fill: o.lfill || C.rust });
  if (o.rh) s += T(AX + 40, y + 14, o.rh, { size: 15, weight: 700, fill: o.rfill || C.tealDark });
  evs.forEach((e) => {
    const left = e.side === 'left', py = sc(e.v), my = e.top + EL * 0.6, ex = left ? AX - 34 : AX + 34;
    s += path(`M${AX},${py} L${left ? AX - 16 : AX + 16},${py} L${ex},${my}`, { w: 2 });
    const tx = left ? AX - 40 : AX + 40, anchor = left ? 'end' : 'start';
    const p = para(left ? tx - e.w : tx, e.top + EL * 0.8 + EL, e.label, e.w, { size: sz });
    const bw = Math.max(p.w, tw(e.d, sz, 700)) + 10;
    s += `<rect x="${left ? tx - bw + 5 : tx - 5}" y="${e.top - 2}" width="${bw}" height="${e.h + 2}" fill="${C.bg}"/>`;
    s += T(tx, e.top + EL * 0.8, e.d, { size: sz, weight: 700, anchor, fill: e.key ? C.rust : C.ink });
    s += left ? para(tx, e.top + EL * 0.8 + EL, e.label, e.w, { size: sz, anchor: 'end' }).s : p.s;
  });
  evs.forEach((e) => { s += `<circle cx="${AX}" cy="${sc(e.v)}" r="7" fill="${e.key ? C.mustard : C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`; });
  return { s: g + s, h: bottom - y + 6 };
}
// Clip the segment between two box centres to the box edges (boxes {x,y,w,h}); returns [x1,y1,x2,y2].
function edgeLine(A, B, pad = 8) {
  const ca = [A.x + A.w / 2, A.y + A.h / 2], cb = [B.x + B.w / 2, B.y + B.h / 2], dx = cb[0] - ca[0], dy = cb[1] - ca[1];
  const k = (bx) => { const tx = dx ? (bx.w / 2 + pad) / Math.abs(dx) : Infinity, ty = dy ? (bx.h / 2 + pad) / Math.abs(dy) : Infinity; return Math.min(tx, ty); };
  const ka = k(A), kb = k(B);
  return [ca[0] + dx * ka, ca[1] + dy * ka, cb[0] - dx * kb, cb[1] - dy * kb];
}
// Cycle: cards placed at given centres [{cx, cy, w, title, body, fill, edge}], arrows i -> i+1 (closed unless o.open).
// o.labels: optional text on each arrow; o.broken: index of an arrow drawn dashed rust with a break mark. Returns {s,h}.
function cycle(y, nodes, o = {}) {
  const boxes = nodes.map((n) => { const c = card(0, 0, n.w ?? 240, { size: 16, tsize: 18, pad: 14, align: 'middle', ...n }); return { x: n.cx - (n.w ?? 240) / 2, y: y + n.cy - c.h / 2, w: n.w ?? 240, h: c.h, n }; });
  let s = '', lab = '';
  const N = nodes.length, M = o.open ? N - 1 : N;
  for (let i = 0; i < M; i++) {
    const A = boxes[i], B = boxes[(i + 1) % N], [x1, y1, x2, y2] = edgeLine(A, B, 10);
    const br = o.broken === i;
    s += arrow(x1, y1, x2, y2, { w: 4, color: br ? C.rust : C.ink, marker: br ? 'ahR' : 'ah', dash: br ? '12 8' : '' });
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    if (br) s += `<circle cx="${mx}" cy="${my}" r="17" fill="${C.panel}" stroke="${C.rust}" stroke-width="3"/>` + path(`M${mx - 8},${my - 8} L${mx + 8},${my + 8} M${mx + 8},${my - 8} L${mx - 8},${my + 8}`, { stroke: C.rust, w: 3.5 });
    const L = (o.labels || [])[i];
    if (L) {
      const [lx, ly, anc] = L.at ? [L.at[0], y + L.at[1], L.at[2] || 'middle'] : [mx + (L.dx ?? 0), my + (L.dy ?? 0), L.anchor || 'middle'];
      const lines = Array.isArray(L.text) ? L.text : [L.text];
      lines.forEach((t2, k) => { const w2 = tw(t2, 16, 700); const bx = anc === 'middle' ? lx - w2 / 2 : anc === 'end' ? lx - w2 : lx; lab += `<rect x="${bx - 4}" y="${ly - 16 + k * 21}" width="${w2 + 8}" height="21" fill="${C.bg}"/>` + T(lx, ly + k * 21, t2, { size: 16, weight: 700, anchor: anc, fill: br ? C.rust : C.tealDark }); });
    }
  }
  boxes.forEach((b) => { s += card(b.x, b.y, b.w, { size: 16, tsize: 18, pad: 14, align: 'middle', ...b.n }).s; });
  const H = Math.max(...boxes.map((b) => b.y + b.h)) - y;
  return { s: s + lab, h: o.h ?? H };
}
// Fractional year from year, month, day.
const md = (yy, m, d = 1) => yy + (m - 1 + (d - 1) / 30.5) / 12;
// Chain of cards (cause -> event -> consequence) left to right; items [{kicker,title,body,fill,edge}]
const chain = (y, items, o = {}) => row(y, items, { arrows: true, gap: o.gap ?? 40, card: { size: o.size ?? 16, tsize: o.tsize ?? 18, pad: o.pad ?? 15, ...(o.card || {}) }, ...o });
// Two-column header labels block
const heads = (labels, o = {}) => (y) => { const n = labels.length, w = (840 - (n - 1) * (o.gap ?? 18)) / n; return { s: labels.map((l, i) => T(30 + i * (w + (o.gap ?? 18)) + w / 2, y + 16, l, { size: 18, weight: 700, anchor: 'middle', fill: (o.fills || [])[i] || C.ink })).join(''), h: 18 }; };
// ---- end hist9489 helpers ----

const H2 = {
  s61: '## 6.1 A troubled decade',
  s62: '## 6.2 The New Conservatism, 1981-92',
  s63: '## 6.3 Carter\'s foreign policy',
  s64: '## 6.4 From détente to the end of the Cold War',
  we: '## Worked example: a judgement paragraph',
};

// 01 Presidents to scale
F('01-presidents-timeline', 'Four presidents, 1974-93', 'Drawn to scale', [
  (y) => htl(y, 1974, 1993.2, {
    step: 2, x0: 70, x1: 830, lg: 50,
    spans: [
      { a: md(1974, 8), b: 1977.05, label: 'Ford', fill: C.panel, edge: C.ink },
      { a: 1977.05, b: 1981.05, label: 'Carter (D)', fill: C.tealLight, edge: C.tealDark },
      { a: 1981.05, b: 1989.05, label: 'Reagan (R)', fill: C.cream, edge: C.olive },
      { a: 1989.05, b: 1993.05, label: 'Bush (R)', fill: C.cream, edge: C.olive },
    ],
    events: [
      { v: md(1974, 9), d: 'Sep 1974', label: ['Nixon', 'pardoned'], side: 'up' },
      { v: 1976, d: '1976', label: ['Carter beats', 'Ford'], side: 'down' },
      { v: 1979.5, d: '1979', label: ['Second oil shock;', 'inflation over 13%'], side: 'up', key: true },
      { v: 1980.8, d: '1980', label: ['Reagan: 489', 'votes to 49'], side: 'down', key: true },
      { v: 1984, d: '1984', label: ['Reagan carries', '49 states'], side: 'up' },
      { v: 1990, d: '1990', label: ['Budget deal', 'raises taxes'], side: 'down' },
      { v: 1992.8, d: '1992', label: ['Clinton beats Bush;', 'Perot about 19%'], side: 'up', key: true },
    ],
  }),
  (y) => row(y, [
    { kicker: '1974-80', title: 'A troubled decade', body: 'Stagflation, energy crises, lost trust after Watergate', fill: C.tealLight, edge: C.tealDark },
    { kicker: '1981-92', title: 'The New Conservatism', body: 'Tax cuts, deregulation, the New Right', fill: C.cream, edge: C.olive },
  ], { gap: 18, card: { size: 16, tsize: 19 } }),
],
'A timeline from 1974 to 1993 drawn to scale with bars for Ford, Carter, Reagan and Bush. Events: Nixon pardoned (September 1974), Carter beats Ford (1976), the second oil shock and inflation over 13 per cent (1979), Reagan\'s 489-49 win (1980), Reagan carrying 49 states (1984), the 1990 tax deal and Clinton\'s 1992 win with Perot at about 19 per cent.',
'Two Democrats\' troubles, then twelve years of Republican conservatism.', H2.s61);

// 02 Why Reagan won 1980
F('02-why-reagan-won', 'Why Reagan won in 1980', 'Four reasons for a landslide', [
  (y) => converge(y, [
    { title: 'Reagan\'s appeal', body: 'Optimism and television skill: "Are you better off than you were four years ago?"' },
    { title: 'Supply-side promise', body: 'Tax cuts would increase growth and revenue' },
    { title: 'Carter\'s failures', body: 'At home: inflation, energy. Abroad: Iran, Afghanistan' },
    { title: 'The New Right', body: 'Moral Majority (1979); Proposition 13 (1978); free-market think tanks' },
  ], { kicker: 'ELECTORAL COLLEGE, 1980', title: 'Reagan 489, Carter 49' }, { cols: 4, size: 15, tsize: 17 }),
  (y) => segbar(y, [{ label: 'Reagan', sub: '489', frac: 489, fill: C.mustard }, { label: 'Carter', sub: '49', frac: 49, fill: C.teal }], { h: 66, size: 17 }),
],
'Four reasons converge on Reagan\'s 1980 victory: his optimism and television skill, the supply-side promise, Carter\'s failures at home and abroad, and the energy of the New Right. A bar shows the electoral college result, 489 to 49.',
'Reagan\'s appeal met Carter\'s weakness and a rising New Right.', H2.s61);

// 03 Reaganomics theory vs practice
F('03-reaganomics', 'Reaganomics: theory and practice', 'Taxes fell; spending did not', [
  (y) => pairs(y, [
    { d: 'Taxes', l: { title: 'Cut taxes', body: 'Growth would follow' }, r: { title: 'Done', body: 'ERTA (1981): top rate 70 to 50%; Tax Reform Act (1986): 28%' } },
    { d: 'Spending', l: { title: 'Cut domestic spending', body: '' }, r: { title: 'Total did not fall', body: 'Housing and welfare cut, but defence soared and Social Security protected', fill: C.panel, edge: C.rust }, key: true },
    { d: 'Regulation', l: { title: 'Deregulate', body: '' }, r: { title: 'Airlines, banking, savings and loans', body: 'Contributed to the later savings-and-loan crisis' } },
    { d: 'Money', l: { title: 'Tight money', body: 'Curb inflation' }, r: { title: 'Recession, then growth', body: 'Unemployment above 10% (1981-82); strong growth from 1983' } },
  ], { lh: 'THEORY', rh: 'PRACTICE', pw: 112 }),
  (y) => note(y, 'Result', ['Deficits grew and the national debt roughly **tripled**; the richest gained most.'], { size: 17, align: 'middle' }),
],
'Four paired rows of theory and practice. Taxes were cut: the top rate fell from 70 to 50 per cent in 1981 and to 28 per cent in 1986. Domestic spending was cut but total spending did not fall because defence soared. Deregulation contributed to the savings-and-loan crisis. Tight money brought recession in 1981-82, then growth. Deficits grew and the debt roughly tripled.',
'Tax cuts plus higher defence spending meant deficits, not a smaller state.', H2.s62);

// 04 Why Bush lost 1992
F('04-bush-1992', 'Why Bush lost in 1992', 'Five pressures on an incumbent', [
  (y) => hub(y, ['Bush', 'defeated'], [
    { title: 'Recession', body: 'The economy dominated' },
    { title: 'Broken promise', body: '"Read my lips: no new taxes"; the 1990 budget deal' },
    { title: 'Doubts about Quayle', body: 'The Vice-President' },
  ], [
    { title: 'Ross Perot', body: 'Independent: about 19 per cent of the vote' },
    { title: 'Bill Clinton', body: 'A centrist "New Democrat" focused on the economy' },
    { title: 'His record', body: 'ADA and Clean Air Act (1990), but many vetoes' },
  ], { cardW: 280, r: 86, csize: 21, cfill: C.panel }),
],
'A hub with Bush\'s defeat at the centre. Around it: recession, the broken "no new taxes" pledge, doubts about Quayle, Perot\'s 19 per cent, Clinton\'s centrist appeal, and a record of the Americans with Disabilities Act and Clean Air Act alongside many vetoes.',
'Recession and a broken tax pledge cost Bush; Perot and Clinton took the votes.', H2.s62);

// 05 Carter foreign policy balance
F('05-carter-foreign', 'Carter\'s foreign policy', 'One lasting success, one damaging crisis', [
  (y) => {
    const a = card(30, y, 410, { kicker: 'SUCCESS', title: 'Camp David', body: ['Sadat visits Jerusalem (November 1977)', 'Thirteen days of talks with Sadat and Begin (September 1978)', 'Egyptian-Israeli peace treaty (March 1979)', 'But: Palestinian question unresolved'], bullets: true, size: 16, tsize: 20, gap: 4, fill: C.tealLight, edge: C.tealDark });
    const b = card(460, y, 410, { kicker: 'CRISIS', kfill: C.rust, title: 'Iran hostages', body: ['Embassy seized (November 1979)', '52 Americans held for 444 days', 'Rescue mission fails (April 1980): eight dead; Vance resigns', 'Released minutes after Reagan\'s inauguration (January 1981)'], bullets: true, size: 16, tsize: 20, gap: 4, fill: C.panel, edge: C.rust, minH: a.h });
    return { s: a.s + b.s, h: Math.max(a.h, b.h) };
  },
  (y) => card(30, y, 840, { kicker: 'HUMAN RIGHTS', title: 'A principle hard to apply consistently', body: 'Aid cut to Argentina and Pinochet\'s Chile; support withdrawn from Somoza (fell to the Sandinistas, 1979); allies such as Iran and the USSR were harder cases', fill: C.cream, edge: C.olive, size: 16, tsize: 18 }),
],
'Two columns. Camp David: Sadat\'s visit to Jerusalem (November 1977), thirteen days of talks (September 1978) and the March 1979 peace treaty, with the Palestinian question unresolved. Iran: the embassy seized in November 1979, 52 Americans held for 444 days, the failed April 1980 rescue and release in January 1981. Below, human rights policy towards Argentina, Chile and Nicaragua.',
'Camp David lasted; the hostage crisis defined Carter for voters.', H2.s63);

// 06 Détente to end of Cold War
F('06-detente-to-end', 'Détente, Second Cold War, negotiation', 'Drawn to scale, 1972-87', [
  (y) => htl(y, 1972, 1988, {
    step: 2, x0: 70, x1: 830, lg: 50,
    spans: [
      { a: 1972, b: 1979.9, label: 'Détente', fill: C.tealLight, edge: C.tealDark },
      { a: 1979.95, b: 1985, label: 'Second Cold War', fill: C.panel, edge: C.rust },
      { a: 1985.05, b: 1988, label: 'Summits', fill: C.cream, edge: C.olive },
    ],
    events: [
      { v: 1972, d: '1972', label: ['SALT I'], side: 'up', key: true },
      { v: 1975.5, d: '1975', label: ['Helsinki;', 'Apollo-Soyuz'], side: 'down' },
      { v: md(1979, 12), d: 'Dec 1979', label: ['Afghanistan', 'invaded'], side: 'up', key: true },
      { v: 1983, d: '1983', label: ['"Evil empire";', 'SDI'], side: 'down' },
      { v: 1985, d: '1985', label: ['Geneva'], side: 'up' },
      { v: 1986, d: '1986', label: ['Reykjavik;', 'Iran-Contra'], side: 'down' },
      { v: 1987, d: '1987', label: ['Washington:', 'INF Treaty'], side: 'up', key: true },
    ],
  }),
  (y) => row(y, [
    { kicker: 'REAGAN DOCTRINE: ROLLBACK', title: 'Arm anti-communist insurgents', body: 'Contras in Nicaragua; mujahideen in Afghanistan (Stingers from 1986); UNITA in Angola', fill: C.panel, edge: C.rust },
    { kicker: 'THE DEBATE', title: 'Reagan\'s pressure or Gorbachev\'s reforms?', body: 'Weigh both, and note Reagan\'s own shift from confrontation to negotiation', fill: C.cream, edge: C.olive },
  ], { gap: 18, card: { size: 16, tsize: 18 } }),
],
'A timeline from 1972 to 1988 drawn to scale with three phases: détente (SALT I in 1972, Helsinki and Apollo-Soyuz in 1975), the Second Cold War from the invasion of Afghanistan (December 1979) with "evil empire" and SDI (1983), and summits at Geneva (1985), Reykjavik (1986) and Washington with the INF Treaty (1987). Below, the Reagan Doctrine and the debate over who ended the Cold War.',
'Détente collapsed in 1979; confrontation gave way to summits after 1985.', H2.s64);

// 07 Worked example criteria grid
F('07-carter-judgement', 'Carter: foreign or domestic success?', 'Measure both sides against the same criteria', [
  (y) => table(y, [{ w: 0.7, head: 'Criterion' }, { w: 1.4, head: 'Foreign policy', hfill: C.tealLight }, { w: 1.4, head: 'Domestic policy', hfill: C.cream }], [
    ['Aims', 'Peace and human rights: Camp David a clear success', 'Energy: Department of Energy, energy laws'],
    ['Lasting results', 'The first Israel-Arab peace treaty has lasted', 'Real achievements, but inflation over 13 per cent'],
    ['Political standing', 'Hostage crisis, failed rescue, end of détente: looked weak in 1980', 'Poor relations with a Democratic Congress; Kennedy\'s challenge'],
  ], { size: 16, hsize: 18 }),
  (y) => note(y, 'Why it works', ['Each side is measured against the **same criteria**, so the final judgement compares like with like.'], { size: 17, align: 'middle' }),
],
'A grid comparing Carter\'s foreign and domestic policy on three criteria: aims (Camp David against energy reform), lasting results (a lasting peace treaty against inflation over 13 per cent) and political standing (the hostage crisis against poor relations with Congress).',
'Use the same criteria for both sides so the judgement compares like with like.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
