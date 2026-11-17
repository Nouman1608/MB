import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-ib-dp-world-history-dp-history-ib-dp-world-history-hl-options-depth-studies-4';

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
  fr: '## Content area 1: the French Revolution and Napoleon',
  un: '## Content area 2: Italian and German unification',
  ee: '## Content area 3: Central and Eastern Europe, 1945-1991',
  we: '## Worked example: a model introduction',
};

// 01 Long-term causes
F('01-french-revolution-causes', 'Long-term causes of the French Revolution', null, [
  (y) => hub(y, ['Crisis', 'of 1789'], [
    { kicker: 'FINANCE', title: 'Royal debt', body: 'Made worse by support for the American War of Independence', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'FINANCE', title: 'Unfair taxation', body: 'Much of the nobility and clergy exempt', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'IDEAS', title: 'Enlightenment criticism', body: 'Of absolute monarchy and privilege', fill: C.cream, edge: C.olive },
  ], [
    { kicker: 'SOCIETY', title: 'The bourgeoisie', body: 'Growing wealth and frustration', fill: C.cream, edge: C.olive },
    { kicker: 'ECONOMY', title: 'Bad harvests, 1788-89', body: 'High bread prices' },
  ], { cardW: 290, r: 82 }),
  (y) => card(200, y, 500, { kicker: '5 MAY 1789', title: 'Estates-General meets', body: 'First meeting since 1614', align: 'middle', fill: C.mustard, edge: C.ink, size: 17, tsize: 20, kfill: C.ink }),
],
'Five long-term causes surround the crisis of 1789: royal debt worsened by the American War of Independence, a tax system that exempted much of the nobility and clergy, Enlightenment criticism of absolute monarchy, the frustrated bourgeoisie, and bad harvests and high bread prices in 1788-89. Below, the Estates-General meets on 5 May 1789 for the first time since 1614.',
'Debt, privilege, ideas, social frustration and hunger met in 1789.', H2.fr, { top: 96 });

// 02 1789-1792
F('02-reform-to-revolution', 'From reform to revolution, 1789-1792', 'Gold: steps that radicalized the Revolution', [
  (y) => vtimeline(y, [
    { d: '17-20 Jun 1789', title: 'National Assembly; Tennis Court Oath', body: 'The Third Estate claims sovereignty' },
    { d: '14 Jul 1789', title: 'Fall of the Bastille', body: 'Popular intervention protects the Assembly' },
    { d: '4 Aug 1789', title: 'August Decrees abolish feudal privileges', body: 'End of the old social order in law' },
    { d: '26 Aug 1789', title: 'Declaration of the Rights of Man and of the Citizen', body: 'Principles of the new order' },
    { d: 'Jul 1790', title: 'Civil Constitution of the Clergy', body: 'Divides the Church and the country', key: true },
    { d: 'Jun 1791', title: 'Flight to Varennes', body: 'Destroys trust in the king', key: true },
    { d: 'Apr 1792', title: 'War with Austria', body: 'Radicalizes the Revolution', key: true },
    { d: 'Sep 1792', title: 'Monarchy abolished; Republic proclaimed', body: 'Louis executed in January 1793', key: true },
  ], { lx: 170, size: 16, tsize: 18, gap: 9 }),
],
'A vertical timeline from June 1789 to September 1792. The 1789 steps, the National Assembly, the Bastille, the August Decrees and the Declaration of the Rights of Man, set up a new order. Four later steps radicalized it: the Civil Constitution of the Clergy (July 1790), the flight to Varennes (June 1791), war with Austria (April 1792) and the Republic (September 1792), with Louis executed in January 1793.',
'The Church, the king\'s flight and war turned reform into revolution.', H2.fr);

// 03 The Terror
F('03-terror-pressures-responses', 'The Terror, 1793-94', 'Pressures, responses, and the question to weigh', [
  (y) => row(y, [{ title: 'Foreign war' }, { title: 'Vendée rising' }, { title: 'Economic crisis' }], { gap: 16, card: { tsize: 19, align: 'middle', fill: C.panel, edge: C.rust, pad: 16 } }),
  30,
  (y) => ({ s: arrow(170, y - 48, 330, y + 18) + arrow(450, y - 48, 450, y + 18) + arrow(730, y - 48, 570, y + 18), h: 0 }),
  (y) => card(180, y, 540, { title: 'Committee of Public Safety', body: 'Dominated by Robespierre from July 1793', align: 'middle', fill: C.mustard, edge: C.ink, size: 17, tsize: 20 }),
  30,
  (y) => ({ s: arrow(330, y - 48, 170, y + 18) + arrow(450, y - 48, 450, y + 18) + arrow(570, y - 48, 730, y + 18), h: 0 }),
  (y) => row(y, [{ title: 'Levée en masse', body: 'August 1793' }, { title: 'Price controls' }, { title: 'Law of Suspects' }], { gap: 16, card: { tsize: 19, size: 16, align: 'middle', fill: C.tealLight, edge: C.tealDark, pad: 16 } }),
  (y) => card(30, y, 840, { kicker: '9 THERMIDOR (27 JULY 1794)', title: 'Robespierre falls', align: 'middle', size: 17, tsize: 19 }),
  (y) => note(y, 'Response to circumstances or product of revolutionary ideology?', ['Historians divide; the best essays weigh both.'], { size: 17, align: 'middle' }),
],
'Three pressures, foreign war, the Vendée rising and economic crisis, point to the Committee of Public Safety, dominated by Robespierre from July 1793. It points to three responses: the levée en masse of August 1793, price controls and the Law of Suspects. Robespierre falls on 9 Thermidor (27 July 1794). A note asks whether the Terror was a response to circumstances or a product of ideology.',
'Map the pressures and responses, then weigh circumstance against ideology.', H2.fr);

// 04 Napoleon
F('04-napoleon-preserve-betray', 'Napoleon: preserve or betray the Revolution?', null, [
  (y) => {
    const ev = [['Nov 1799', '18 Brumaire coup'], ['1804', 'Emperor'], ['1805', 'Austerlitz'], ['1812', 'Invasion of Russia'], ['1813', 'Leipzig'], ['18 Jun 1815', 'Waterloo']];
    let s = `<line x1="80" y1="${y + 40}" x2="820" y2="${y + 40}" stroke="${C.ink}" stroke-width="4"/>`;
    ev.forEach(([d, l], i) => {
      const x = 80 + i * 148, rise = i <= 2, fill = i === 2 ? C.mustard : rise ? C.teal : C.cream;
      s += `<circle cx="${x}" cy="${y + 40}" r="11" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + T(x, y + 18, d, { size: 16, weight: 700, anchor: 'middle' }) + T(x, y + 74, l, { size: 16, anchor: 'middle' });
    });
    s += T(80, y + 104, 'Rise', { size: 15, weight: 700, fill: C.tealDark }) + T(820, y + 104, 'Collapse after the Peninsular War, Russia and Leipzig', { size: 15, weight: 700, fill: C.olive, anchor: 'end' });
    return { s, h: 108 };
  },
  (y) => {
    const a = { title: 'Reform: preserved?', body: ['Concordat with the papacy (1801)', 'Civil Code (1804)', 'The prefects', 'The Bank of France'], bullets: true, size: 17, tsize: 20, fill: C.tealLight, edge: C.tealDark, gap: 6 };
    const b = { title: 'Authoritarian rule: betrayed?', body: ['Censorship', 'Police', 'Plebiscites'], bullets: true, size: 17, tsize: 20, fill: C.panel, edge: C.rust, tfill: C.rust, gap: 6 };
    const h = Math.max(card(30, y, 410, a).h, card(460, y, 410, b).h);
    return { s: card(30, y, 410, { ...a, minH: h }).s + card(460, y, 410, { ...b, minH: h }).s, h };
  },
],
'A timeline of Napoleon\'s career: the coup of 18 Brumaire in November 1799, emperor in 1804, Austerlitz in 1805, the invasion of Russia in 1812, Leipzig in 1813 and Waterloo on 18 June 1815. Below, two columns: reforms (the Concordat of 1801, the Civil Code of 1804, the prefects, the Bank of France) against authoritarian rule (censorship, police, plebiscites).',
'Reform and authoritarian rule: the evidence for both sides of the question.', H2.fr, { top: 100 });

// 05 Parallel unification timeline
{
  const rows = [
    ['1834', '', 'Zollverein under Prussian leadership'],
    ['1848-49', 'Revolutions fail; Piedmont keeps the Statuto', 'Frankfurt Parliament; crown refused'],
    ['1852', 'Cavour prime minister of Piedmont', ''],
    ['1855', 'Piedmont joins the Crimean War', ''],
    ['1858', 'Plombières agreement with Napoleon III', ''],
    ['1859', 'War with Austria; Lombardy gained', ''],
    ['1860', 'Central states join; Garibaldi takes Sicily and Naples', ''],
    ['1861', 'Kingdom of Italy proclaimed (March)', ''],
    ['1862', '', 'Bismarck minister-president; "blood and iron"'],
    ['1864', '', 'War with Denmark over Schleswig-Holstein'],
    ['1866', 'Venetia gained after Prussia defeats Austria', 'Austro-Prussian War; Königgrätz'],
    ['1867', '', 'North German Confederation'],
    ['1870', 'Rome taken after French troops withdraw', 'Ems Telegram; Franco-Prussian War; Sedan'],
    ['1871', '', 'German Empire proclaimed, 18 January', true],
  ];
  F('05-unification-parallel', 'Italian and German unification side by side', 'Year by year, 1834-1871', [
    (y) => {
      let s = T(225, y + 18, 'ITALY', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(675, y + 18, 'GERMANY', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
      let cy = y + 34;
      s += `<line x1="450" y1="${cy}" x2="450" y2="${cy + rows.length * 54 - 8}" stroke="${C.ink}" stroke-width="4"/>`;
      rows.forEach(([d, it, ge, end]) => {
        const h = 46;
        s += `<rect x="408" y="${cy + 6}" width="84" height="34" rx="17" fill="${end || d === '1861' ? C.mustard : C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(450, cy + 29, d, { size: 16, weight: 700, anchor: 'middle' });
        if (it) { const _a = 0; s += `<rect x="30" y="${cy}" width="368" height="${h}" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>`; const n = wrapRich(it, 344, 15).length; s += para(42, cy + (n > 1 ? 20 : 29), it, 344, { size: 15, fill: C.ink, lh: 18 }).s; }
        if (ge) { s += `<rect x="502" y="${cy}" width="368" height="${h}" rx="10" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>`; const n = wrapRich(ge, 344, 15).length; s += para(514, cy + (n > 1 ? 20 : 29), ge, 344, { size: 15, fill: C.ink, lh: 18 }).s; }
        cy += 54;
      });
      return { s, h: cy - y - 8 };
    },
  ],
  'A two-column timeline with years down the centre. Italy, left: revolutions fail in 1848-49, Cavour in 1852, the Crimean War in 1855, Plombières in 1858, war with Austria in 1859, Garibaldi in 1860, the Kingdom of Italy in March 1861, Venetia in 1866 and Rome in 1870. Germany, right: the Zollverein in 1834, the Frankfurt Parliament in 1848-49, Bismarck in 1862, war with Denmark in 1864, Königgrätz in 1866, the North German Confederation in 1867, the Franco-Prussian War in 1870 and the German Empire on 18 January 1871.',
  'Italy was proclaimed in 1861 and completed in 1870; Germany followed in three wars, 1864-71.', H2.un);
}

// 06 1956, 1968, 1989
F('06-eastern-europe-1989', 'Why did Soviet control collapse in 1989?', 'It survived earlier revolts, so explain what was different', [
  (y) => K('SOVIET CONTROL SURVIVED')(y),
  (y) => row(y - 6, [
    { kicker: 'JUNE 1953', title: 'East Germany', body: 'Revolt' },
    { kicker: 'NOV 1956', title: 'Hungary', body: 'Nagy announces leaving the Warsaw Pact; Soviet forces crush the revolution' },
    { kicker: '1956', title: 'Poland', body: "Gomułka's return: limited concessions, no invasion" },
    { kicker: '20-21 AUG 1968', title: 'Prague Spring', body: 'Ended by Warsaw Pact invasion' },
  ], { gap: 12, card: { size: 15, tsize: 18, pad: 14, fill: C.panel, edge: C.rust } }),
  (y) => K('POLAND: THE BRIDGE')(y),
  (y) => row(y - 6, [
    { kicker: 'AUG 1980', title: 'Solidarity', body: 'From the Gdańsk shipyard strikes' },
    { kicker: 'DEC 1981', title: 'Martial law', body: 'Imposed by Jaruzelski' },
    { kicker: 'JUN 1989', title: 'Partly free elections', body: 'Solidarity-led government' },
  ], { arrows: true, gap: 44, card: { size: 15, tsize: 18, pad: 14, fill: C.cream, edge: C.olive } }),
  (y) => K('1989: COLLAPSE')(y),
  (y) => card(30, y - 6, 840, { body: 'Hungary opens its border with Austria · Berlin Wall opens (9 November) · Velvet Revolution in Czechoslovakia · Ceaușescu executed (25 December)', fill: C.mustard, edge: C.ink, size: 17, bfill: C.ink, align: 'middle' }),
  (y) => K('FACTORS TO WEIGH')(y),
  (y) => chips(y - 6, ["Gorbachev's refusal to use force", 'economic failure', 'debt', 'the Church in Poland', 'the example of each revolution to the next'], { size: 16 }),
],
'Four earlier revolts in which Soviet control survived: East Germany in June 1953, Hungary crushed in November 1956, Poland in 1956 with concessions but no invasion, and the Prague Spring ended by invasion on 20-21 August 1968. Poland forms a bridge: Solidarity in August 1980, martial law in December 1981 and partly free elections in June 1989. Then the collapse of 1989 and the factors to weigh: Gorbachev\'s refusal to use force, economic failure, debt, the Church in Poland and the example of each revolution to the next.',
'Gorbachev\'s refusal to use force is central, but not the only factor.', H2.ee, { gap: 18 });

// 07 Form and timing vs underlying causes
F('07-bismarck-responsibility', 'Two kinds of responsibility', '"To what extent was Bismarck responsible for the unification of Germany?"', [
  (y) => {
    const top = card(130, y, 640, { kicker: "BISMARCK'S DIPLOMACY: FORM AND TIMING", title: 'Isolated Austria (1866) and France (1870)', body: 'Unification under Prussian leadership and without liberal control, 1864-1871', align: 'middle', fill: C.mustard, edge: C.ink, size: 17, tsize: 20, kfill: C.ink });
    const tri = `<polygon points="450,${y - 4} 110,${y + top.h / 2} 790,${y + top.h / 2}" fill="none"/>`;
    return { s: tri + top.s, h: top.h };
  },
  (y) => ({ s: arrow(450, y + 30, 450, y - 12, { w: 4 }) + T(470, y + 18, 'made possible by', { size: 16, fill: C.muted, italic: true }), h: 30 }),
  (y) => {
    const g = grid(y, [
      { title: 'Zollverein', body: "Prussia's economic leadership" },
      { title: 'Industry and railways', body: 'Industrial and railway growth' },
      { title: 'Army reforms', body: 'Of Roon and Moltke' },
      { title: 'European balance', body: 'Russia and Britain stood aside' },
    ], 4, { gap: 12, card: { size: 15, tsize: 18, pad: 14, fill: C.tealLight, edge: C.tealDark, align: 'middle' } });
    return { s: g.s + `<rect x="30" y="${y + g.h + 10}" width="840" height="34" rx="8" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(450, y + g.h + 33, 'UNDERLYING CAUSES: predated or lay outside his control', { size: 16, weight: 700, anchor: 'middle', fill: C.ink }), h: g.h + 44 };
  },
  (y) => note(y, 'Thesis', ['Bismarck was responsible for the **form and timing** of unification; its **underlying causes** lay in Prussian power and the European balance.'], { size: 17, align: 'middle' }),
],
'A two-level diagram. The upper level is Bismarck\'s diplomacy: isolating Austria in 1866 and France in 1870 and securing unification under Prussian leadership without liberal control. It rests on a foundation of underlying causes outside his control: the Zollverein, industrial and railway growth, the army reforms of Roon and Moltke, and Russia and Britain standing aside. The thesis separates form and timing from underlying causes.',
'Distinguish kinds of responsibility: form and timing versus underlying causes.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
