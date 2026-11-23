import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-world-history-hl-options-depth-studies-1';

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
  cover: '## What the option covers',
  c1: '## Content area 1: imperialism and resistance',
  c2: '## Content area 2: South Africa, 1880s to 1994',
  c3: '## Content area 3: the Middle East after 1945',
  we: '## Worked example: a Paper 3 plan',
};

// Year-scale helper for bar charts
const yr = (a, b, x0, x1) => (v) => x0 + ((v - a) * (x1 - x0)) / (b - a);

// 01 Why Europeans partitioned Africa
F('01-partition-motives', 'Why Europeans partitioned Africa', 'Four kinds of explanation, then rules for claiming land', [
  (y) => hub(y, ['Partition', 'of Africa'], [
    { title: 'Economic motives', body: 'Raw materials, markets and investment' },
    { title: 'Strategic rivalry', body: "Britain's route to India through Egypt and the Suez Canal" },
  ], [
    { title: 'Nationalism and prestige', body: 'Colonies as a sign of national standing' },
    { title: 'Technology', body: 'Quinine against malaria, steamships and the machine gun made conquest cheaper', fill: C.tealLight, edge: C.tealDark },
  ], { cardW: 280, r: 86 }),
  (y) => row(y, [
    { kicker: '1884-85', title: 'Berlin Conference', body: 'Set rules for claims, including "effective occupation"', fill: C.cream, edge: C.olive },
    { kicker: 'BY 1914', title: 'Only two states left', body: 'Ethiopia and Liberia remained independent', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 60, card: { size: 17, tsize: 20 } }),
],
'Four explanations surround the partition of Africa: economic motives, strategic rivalry over the route to India, nationalism and prestige, and technology such as quinine, steamships and the machine gun. They lead to the Berlin Conference of 1884-85, which set the rule of effective occupation; by 1914 only Ethiopia and Liberia were independent.',
'Explanations combine motive and means; the Berlin Conference set the rules for claims.', H2.c1);

// 02 African responses on a time scale
{
  const X0 = 320, X1 = 660, s = yr(1880, 1910, X0, X1);
  const cases = [
    { n: 'Mahdist state (Sudan)', r: 'Islamic state', a: 1885, b: 1898, end: 'defeated at Omdurman, 1898' },
    { n: 'Ethiopia (Menelik II)', r: 'army and diplomacy', a: 1896, b: 1896, end: 'Adwa, 1 March 1896: independence preserved', win: true },
    { n: 'Samori Touré', r: 'mobile resistance to France', a: null, b: 1898, end: 'captured 1898' },
    { n: 'Herero and Nama', r: 'rising from 1904', a: 1904, b: 1908, end: 'destroyed, 1904-08' },
    { n: 'Maji Maji', r: 'multi-ethnic rising', a: 1905, b: 1907, end: 'suppressed, with famine' },
  ];
  F('02-african-responses', 'African responses to conquest', 'Five cases on a time scale, 1880-1910', [
    (y) => chips(y, ['armed resistance', 'diplomacy', 'collaboration', 'adaptation'], { size: 17 }),
    (y) => {
      let g = panel(30, y, 840, 70 + cases.length * 92);
      [1880, 1890, 1900, 1910].forEach((v) => { g += `<line x1="${s(v)}" y1="${y + 46}" x2="${s(v)}" y2="${y + 52 + cases.length * 92}" stroke="${C.panelEdge}" stroke-width="2" stroke-dasharray="5 6"/>` + T(s(v), y + 34, String(v), { size: 16, weight: 700, anchor: 'middle', fill: C.muted }); });
      cases.forEach((c, i) => {
        const cy = y + 62 + i * 92;
        g += T(50, cy + 24, c.n, { size: 18, weight: 700 }) + T(50, cy + 48, c.r, { size: 16, fill: C.muted });
        if (c.win) {
          g += `<line x1="${s(1896)}" y1="${cy + 22}" x2="${X1}" y2="${cy + 22}" stroke="${C.tealDark}" stroke-width="6" marker-end="url(#ahT)"/>` + `<circle cx="${s(1896)}" cy="${cy + 22}" r="11" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
          g += `<rect x="${s(1896) - 2 - tw(c.end, 16, 600) / 2 - 4}" y="${cy + 38}" width="${tw(c.end, 16, 600) + 8}" height="22" fill="${C.panel}"/>` + T(s(1896) - 2, cy + 54, c.end, { size: 16, weight: 600, fill: C.tealDark, anchor: 'middle' });
        } else {
          const a = c.a ? s(c.a) : s(1885);
          g += c.a ? `<rect x="${a}" y="${cy + 10}" width="${s(c.b) - a}" height="24" rx="6" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`
            : `<defs><linearGradient id="fade${i}" x1="0" x2="1"><stop offset="0" stop-color="${C.cream}" stop-opacity="0"/><stop offset="0.6" stop-color="${C.cream}"/></linearGradient></defs><rect x="${a}" y="${cy + 10}" width="${s(c.b) - a}" height="24" fill="url(#fade${i})"/>` + T(s(c.b) - 8, cy + 28, 'prolonged', { size: 15, anchor: 'end', fill: C.olive, weight: 600 });
          g += `<rect x="${s(c.b) + 14}" y="${cy + 10}" width="${tw(c.end, 16, 600) + 34}" height="24" fill="${C.panel}"/>`;
          g += T(s(c.b) + 18, cy + 28, '✗', { size: 19, weight: 700, fill: C.rust }) + T(s(c.b) + 40, cy + 28, c.end, { size: 16, fill: C.rust, weight: 600 });
        }
      });
      return { s: g, h: 70 + cases.length * 92 };
    },
    (y) => note(y, 'Why did some resistance succeed while most failed? Weigh:', ['firepower · African unity or division · leadership · terrain · the resources of the European power'], { size: 17 }),
  ],
  'Five cases of African response on a time scale from 1880 to 1910. The Mahdist state lasted from 1885 until defeat at Omdurman in 1898; Samori Touré resisted France until captured in 1898; the Herero and Nama were destroyed in 1904-08; Maji Maji in 1905-07 was suppressed. Only Ethiopia, after victory at Adwa on 1 March 1896, preserved its independence.',
  'Most resistance was crushed; Ethiopia at Adwa is the exception to explain.', H2.c1, { gap: 20 });
}

// 03 South Africa phases to scale
{
  const X0 = 50, X1 = 850, s = yr(1899, 1994, X0, X1);
  const segs = [[1899, 1910, 'War and Union', C.tealLight], [1910, 1948, 'Before apartheid', C.teal], [1948, 1960, 'Apartheid laws', C.cream], [1960, 1976, 'Bans and armed struggle', C.sand], [1976, 1994, 'Crisis to elections', C.mustard]];
  const ev = [[1902, 'South African War ends', 0], [1912, 'SANNC founded (later ANC)', 1], [1913, 'Natives Land Act', 2], [1948, 'National Party victory', 0], [1950, 'Population Registration and Group Areas Acts', 1], [1953, 'Bantu Education Act', 2], [1955, 'Freedom Charter', 3], [1960, 'Sharpeville, 21 March', 0], [1964, 'Rivonia Trial', 1], [1976, 'Soweto, 16 June', 2], [1977, 'Death of Steve Biko', 3], [1983, 'United Democratic Front', 0], [1990, 'De Klerk speech; Mandela released', 1], [1994, 'Elections, 27 April', 2]];
  F('03-south-africa-phases', 'South Africa, 1899-1994: five phases', 'Period widths drawn to scale; each dot is a dated event', [
    (y) => {
      let g = '';
      segs.forEach(([a, b, l, f]) => {
        g += `<rect x="${s(a)}" y="${y}" width="${s(b) - s(a)}" height="50" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
        g += T((s(a) + s(b)) / 2, y + 31, `${a}-${String(b).slice(2)}`, { size: 16, weight: 700, anchor: 'middle' });
      });
      return { s: g, h: 50 };
    },
    (y) => {
      let g = '';
      const rowH = 44;
      ev.forEach(([v], i) => { g += `<line x1="${s(v)}" y1="${y - 12}" x2="${s(v)}" y2="${y + i * rowH + 14}" stroke="${C.panelEdge}" stroke-width="2"/>`; });
      ev.forEach(([v, l, lane], i) => {
        const yy = y + i * rowH;
        const x = s(v), right = x < 470;
        g += `<circle cx="${x}" cy="${yy + 14}" r="7" fill="${C.ink}"/>`;
        const lw = tw(`${v}  ${l}`, 16);
        g += `<rect x="${right ? x + 12 : x - 16 - lw - 4}" y="${yy + 2}" width="${lw + 8}" height="24" fill="${C.bg}"/>`;
        g += T(right ? x + 16 : x - 16, yy + 20, `${v}  ${l}`, { size: 16, anchor: right ? 'start' : 'end', weight: 400 });
      });
      return { s: g, h: ev.length * rowH };
    },
  ],
  'A bar from 1899 to 1994 split to scale into the five periods 1899-1910, 1910-48, 1948-60, 1960-76 and 1976-94. Key dates hang below, from the Natives Land Act of 1913 and the National Party victory of 1948 to Sharpeville in 1960, Soweto in 1976, Mandela\'s release in 1990 and the elections of 27 April 1994.',
  'Apartheid had phases: learn which laws and protests belong to which.', H2.c2, { gap: 30 });
}

// 04 Why apartheid ended
F('04-why-apartheid-ended', 'Why did apartheid end?', 'Four factors to balance in a Paper 3 answer', [
  (y) => converge(y, [
    { kicker: 'INTERNAL', title: 'Resistance', body: 'Township uprisings, unions, the United Democratic Front', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'ECONOMIC', title: 'Pressure', body: 'Sanctions, disinvestment, recession', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'INTERNATIONAL', title: 'End of the Cold War', body: 'Removed the "communist threat" argument', fill: C.cream, edge: C.olive },
    { kicker: 'LEADERSHIP', title: 'Decisions', body: 'Of de Klerk and Mandela', fill: C.cream, edge: C.olive },
  ], { title: 'Apartheid ends', body: 'Mandela released 11 February 1990; elections 27 April 1994' }, { cols: 4, size: 16, tsize: 18 }),
],
'Four factor cards, internal resistance, economic pressure, the end of the Cold War and the decisions of de Klerk and Mandela, each with an arrow into one box: apartheid ends, from Mandela\'s release on 11 February 1990 to the elections of 27 April 1994.',
'No single factor ended apartheid: weigh all four.', H2.c2);

// 05 Egypt and the Arab-Israeli conflict
F('05-egypt-arab-israeli-wars', 'Egypt and the Arab-Israeli conflict', 'Gold dots mark the four wars: learn each separately', [
  (y) => vtimeline(y, [
    { d: '1948', title: 'State of Israel declared, 14 May', body: 'British mandate ends; war of 1948-49; several hundred thousand Palestinians become refugees', key: true },
    { d: '1952', title: 'Free Officers\' coup, July', body: 'Monarchy overthrown; Nasser becomes the dominant figure' },
    { d: '1956', title: 'Suez Canal Company nationalized, July', body: 'Political victory for Nasser in the Suez crisis that followed', key: true },
    { d: '1958-61', title: 'United Arab Republic with Syria' },
    { d: '1967', title: 'Six-Day War, June', body: 'Defeat for Egypt', key: true },
    { d: '1973', title: 'October war', body: 'Followed by the Arab oil embargo', key: true },
    { d: ['1978', '1979'], title: 'Camp David Accords; Egypt-Israel peace treaty', body: "Sadat's diplomacy" },
    { d: '1981', title: 'Sadat assassinated, October' },
  ], { lx: 150, size: 16, tsize: 18 }),
],
'A vertical timeline from 1948 to 1981. Gold dots mark the four wars: 1948 (after Israel was declared on 14 May), 1956 (the Suez crisis after Nasser nationalized the canal company), the Six-Day War of June 1967 and the October 1973 war followed by the oil embargo. Other entries: the Free Officers\' coup of 1952, the United Arab Republic of 1958-61, Camp David in 1978, the peace treaty of 1979 and Sadat\'s assassination in 1981.',
'Four wars, four sets of causes and results: 1948, 1956, 1967, 1973.', H2.c3);

// 06 Iran
F('06-iran-road-to-1979', 'Iran: from oil nationalization to revolution', null, [
  (y) => vtimeline(y, [
    { d: '1951', title: 'Mosaddegh nationalizes the oil industry' },
    { d: '1953', title: 'Coup backed by Britain and the USA', body: 'Mosaddegh overthrown' },
    { d: 'from 1963', title: "Shah's White Revolution", body: 'Land reform and modernization, alongside repression by the SAVAK secret police', fill: C.tealLight, edge: C.tealDark },
    { d: '1975', title: 'Single-party Rastakhiz system', body: 'No legal outlet for liberals, the left or the clergy' },
    { d: 'after 1975', title: 'Economic crisis', body: 'Inflation after the oil boom; austerity from 1976' },
    { d: '1978', title: 'Mass protest', body: 'Cycle of mourning protests through the year', key: true },
    { d: 'Jan 1979', title: 'The Shah leaves Iran', key: true },
    { d: '1 Feb 1979', title: 'Khomeini returns', key: true },
    { d: 'spring 1979', title: 'Islamic Republic established after a referendum', key: true },
  ], { lx: 170, size: 16, tsize: 18, gap: 9 }),
],
'A vertical timeline of Iran: Mosaddegh nationalizes oil in 1951 and is overthrown in a coup backed by Britain and the USA in 1953; the White Revolution from 1963; the single-party Rastakhiz system of 1975; economic crisis after 1975; mass protest in 1978; the Shah leaves in January 1979, Khomeini returns on 1 February and the Islamic Republic is established after a referendum that spring.',
'Modernization, repression and economic crisis came before the revolution of 1978-79.', H2.c3, { top: 96 });

// 07 Worked plan
F('07-iran-essay-plan', 'A Paper 3 plan: the Iranian Revolution', '"To what extent was the Shah\'s modernization programme responsible?"', [
  (y) => note(y, 'Thesis', ['Modernization was a **necessary but not sufficient** cause: repression, economic crisis and Khomeini\'s leadership turned discontent into revolution.'], { size: 17, align: 'middle' }),
  (y) => {
    const items = [
      ['Modernization\'s effects', 'Land reform drove migration to Tehran; secularizing measures alienated the clergy; inequality widened', 'named factor'],
      ['Repression and exclusion', 'SAVAK; the Rastakhiz system (1975); no legal outlet for opposition', 'alternative'],
      ['Economic crisis', 'Inflation after the oil boom; austerity from 1976; anger of bazaar merchants', 'alternative'],
      ['Leadership and ideology', 'Khomeini from exile; the mosque network; mourning protests through 1978', 'alternative'],
    ];
    let s = '', cy = y;
    items.forEach(([ti, b, tag], i) => {
      const c = card(130, cy, 740, { title: ti, body: b, size: 16, tsize: 19, pad: 15, fill: i === 0 ? C.tealLight : C.panel, edge: i === 0 ? C.tealDark : C.panelEdge });
      s += c.s + badge(62, cy + c.h / 2 - 8, 24, String(i + 1), i === 0 ? C.mustard : C.cream) + T(62, cy + c.h / 2 + 36, '10 min', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
      const ch = chip(855, cy + 12, tag, { size: 15, anchor: 'end', fill: i === 0 ? C.mustard : C.panel, edge: i === 0 ? C.ink : C.panelEdge });
      s += ch.s;
      cy += c.h + 12;
    });
    return { s, h: cy - y - 12 };
  },
  (y) => card(30, y, 840, { title: 'Conclusion', body: 'Return to "necessary but not sufficient"; the coalition of opposition groups made 1978-79 different from earlier protests.', fill: C.cream, edge: C.olive, size: 17, tsize: 19 }),
],
'An essay plan. A thesis banner says modernization was a necessary but not sufficient cause. Four numbered paragraphs of about 10 minutes each follow: modernization\'s effects (the named factor), then repression and exclusion, economic crisis, and leadership and ideology. The conclusion returns to the thesis and names the coalition of opposition groups as what made 1978-79 different.',
'Test the named factor first, then weigh the alternatives against it.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
