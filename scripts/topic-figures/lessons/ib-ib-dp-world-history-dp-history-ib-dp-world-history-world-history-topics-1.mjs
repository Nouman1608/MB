import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-ib-dp-world-history-dp-history-ib-dp-world-history-world-history-topics-1';

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
  t1: '## Theme 1: population and economic change',
  t2: '## Theme 2: trade and exchange',
  t3: '## Theme 3: intellectual, cultural and artistic developments',
  t4: '## Theme 4: religion and society',
  we: '## Worked example: planning a comparative essay',
  int: '## Interpretations',
};
const yr = (a, b, x0, x1) => (v) => x0 + ((v - a) * (x1 - x0)) / (b - a);

// 01 Four themes
F('01-four-themes', 'Four themes, many regions', 'Choose examples that let you write across themes', [
  (y) => grid(y, [
    { kicker: 'THEME 1', title: 'Population and economic change', body: 'Farming methods; growth and decline; epidemic disease', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'THEME 2', title: 'Trade and exchange', body: 'Routes, goods, institutions and money', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'THEME 3', title: 'Intellectual, cultural and artistic', body: 'Learning, technology, the arts; how ideas travelled', fill: C.cream, edge: C.olive },
    { kicker: 'THEME 4', title: 'Religion and society', body: 'Religious institutions in social order, economic life and ordinary lives', fill: C.cream, edge: C.olive },
  ], 2, { gap: 16, vgap: 16, card: { size: 16, tsize: 19, minH: 120 } }),
  (y) => ({ s: T(450, y + 14, 'Common example societies', { size: 17, weight: 700, anchor: 'middle' }), h: 16 }),
  (y) => chips(y, ['Song China', 'the Abbasid caliphate', 'medieval England or France', 'the Mali empire'], { size: 17, fill: C.panel }),
  (y) => note(y, 'Questions compare', ['"The impact of trade on **two** societies", "the reasons for economic growth in **one** society": write across regions, not one region in isolation.'], { size: 17, align: 'middle' }),
],
'Four theme cards: population and economic change, trade and exchange, intellectual and cultural developments, and religion and society. Below, common example societies: Song China, the Abbasid caliphate, medieval England or France, and the Mali empire, with a note that questions usually ask for comparison across regions.',
'Pick societies from different regions that work across all four themes.', H2.cov);

// 02 Growth then shock
F('02-growth-then-shock', 'Growth, then the Black Death', 'Two engines of agricultural growth', [
  (y) => {
    const a = stack(y, [
      { kicker: 'SONG CHINA, 960-1279', title: 'Champa rice', body: 'Fast-ripening; spread from the early eleventh century', fill: C.tealLight, edge: C.tealDark },
      { title: 'Double cropping in the south' },
      { title: 'Rapid population growth', body: "China's economic centre shifts to the Yangzi region", fill: C.mustard, edge: C.ink },
    ], { arrows: true, x: 30, w: 410, gap: 36, card: { size: 16, tsize: 18 } });
    const b = stack(y, [
      { kicker: 'WESTERN EUROPE, c.1000-1300', title: 'New methods and new land', body: 'Heavy plough; three-field rotation; forests and marshes cleared', fill: C.cream, edge: C.olive },
      { title: 'Growth within the manorial economy', body: 'Peasants held land for labour services and dues; markets and money grew' },
      { title: 'Growth to around 1300', fill: C.mustard, edge: C.ink },
    ], { arrows: true, x: 460, w: 410, gap: 36, card: { size: 16, tsize: 18 } });
    return { s: a.s + b.s, h: Math.max(a.h, b.h) };
  },
  (y) => card(30, y, 840, { kicker: '1346-1351', title: 'The Black Death', body: 'Black Sea (1346), then the Mediterranean, the Middle East and Europe (1347-1351): an enormous death toll, with consequences that differed by region', fill: C.panel, edge: C.rust, tfill: C.rust, size: 16, tsize: 20, align: 'middle' }),
],
'Two growth chains. Song China (960-1279): fast-ripening Champa rice allowed double cropping in the south, supporting rapid population growth and shifting the economic centre to the Yangzi. Western Europe (c.1000-1300): the heavy plough, three-field rotation and land clearance supported growth within the manorial economy. Below, the Black Death of 1346-1351, whose consequences differed by region.',
'New farming methods drove growth in both regions before the plague.', H2.t1);

// 03 Trade networks schematic
{
  const N = {
    eu: [190, 175, 'Western Europe', 'Venice, Genoa; Hanseatic League;|Champagne fairs'],
    na: [175, 330, 'North Africa', 'salt and goods'],
    wa: [150, 470, 'Mali (West Africa)', 'gold'],
    me: [395, 265, 'Middle East', 'Cairo; Baghdad'],
    ca: [560, 165, 'Persia and Central Asia', ''],
    cn: [770, 195, 'China', ''],
    ar: [420, 400, 'Arabia', ''],
    ea: [345, 520, 'East Africa', 'Kilwa'],
    in: [590, 430, 'India', ''],
    se: [770, 470, 'South-East Asia', ''],
  };
  const e = (a, b, kind) => {
    const [x1, y1] = N[a], [x2, y2] = N[b];
    const st = kind === 'silk' ? `stroke="${C.olive}" stroke-width="6"` : kind === 'sea' ? `stroke="${C.blue}" stroke-width="5" stroke-dasharray="12 8"` : `stroke="${C.rust}" stroke-width="5" stroke-dasharray="3 7" stroke-linecap="round"`;
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" ${st}/>`;
  };
  F('03-trade-networks', 'Trade networks, 750-1400', 'Labelled schematic: not to scale and not a map', [
    (y) => {
      const dy = y - 120;
      let s = panel(30, y, 840, 480);
      let g = e('eu', 'me', 'silk') + e('me', 'ca', 'silk') + e('ca', 'cn', 'silk') + e('wa', 'na', 'sahara') +
        e('ea', 'ar', 'sea') + e('ar', 'in', 'sea') + e('in', 'se', 'sea') + e('se', 'cn', 'sea') + e('ea', 'in', 'sea');
      s += `<g transform="translate(0 ${dy})">${g}`;
      Object.values(N).forEach(([x, yy, n, sub]) => {
        const sl = sub ? sub.split('|') : [];
        const w = Math.max(tw(n, 17, 700), ...sl.map((l) => tw(l, 15))) + 24, h = 34 + sl.length * 18;
        s += `<rect x="${x - w / 2}" y="${yy - h / 2}" width="${w}" height="${h}" rx="10" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x, yy - h / 2 + 23, n, { size: 17, weight: 700, anchor: 'middle' });
        sl.forEach((l, k) => { s += T(x, yy - h / 2 + 42 + k * 18, l, { size: 15, anchor: 'middle', fill: C.muted }); });
      });
      s += '</g>';
      return { s, h: 480 };
    },
    (y) => {
      const items = [[C.olive, '', 'Silk Roads: overland to the Mediterranean, safer under the Pax Mongolica'], [C.blue, '12 8', 'Indian Ocean: monsoon winds, Muslim merchants'], [C.rust, '3 7', 'Trans-Saharan: West African gold for salt']];
      let s = '';
      items.forEach(([c, d, l], i) => { const yy = y + 12 + i * 30; s += `<line x1="60" y1="${yy}" x2="120" y2="${yy}" stroke="${c}" stroke-width="5"${d ? ` stroke-dasharray="${d}"` : ''} stroke-linecap="round"/>` + T(136, yy + 6, l, { size: 16 }); });
      return { s, h: 84 };
    },
    (y) => row(y, [
      { kicker: 'SONG CHINA', title: 'Paper money', body: 'The jiaozi, first issued by the state in Sichuan in the 1020s' },
      { kicker: 'ISLAMIC MERCHANTS', title: 'Suftaja', body: 'Bill of exchange' },
      { kicker: 'ITALIAN MERCHANTS', title: 'Partnerships', body: 'And bills of exchange' },
    ], { gap: 14, card: { size: 15, tsize: 18, pad: 15, fill: C.cream, edge: C.olive } }),
  ],
  'A labelled schematic, not to scale. Silk Roads link Western Europe, the Middle East, Persia and Central Asia, and China; Indian Ocean sea routes link East Africa (Kilwa), Arabia, India, South-East Asia and China; a trans-Saharan route links Mali\'s gold with North African salt. Below, three money and credit tools: Song paper money, the Islamic suftaja and Italian partnerships and bills of exchange.',
  'Three linked networks, each with its own tools of money and credit.', H2.t2, { gap: 18 });
}

// 04 How ideas travelled
F('04-how-ideas-travelled', 'How ideas travelled', 'From China and Baghdad to European universities', [
  (y) => row(y, [
    { kicker: 'CHINA', title: 'Papermaking', body: 'Spread west through the Islamic world' },
    { kicker: 'ABBASID BAGHDAD (FOUNDED 762)', title: 'House of Wisdom', body: 'Greek, Persian and Indian works translated into Arabic' },
  ], { arrows: true, gap: 60, card: { size: 16, tsize: 19, fill: C.tealLight, edge: C.tealDark } }),
  (y) => ({ s: arrow(650, y - 16, 650, y + 20), h: 6 }),
  (y) => row(y, [
    { kicker: 'EUROPE', title: 'Universities', body: 'Bologna, Paris and Oxford, from the late eleventh and twelfth centuries', fill: C.mustard, edge: C.ink },
    { kicker: 'SPAIN AND SICILY', title: 'Latin translations', body: "Ibn Sina's Canon of Medicine; Ibn Rushd on Aristotle", fill: C.cream, edge: C.olive },
  ], { gap: 60, card: { size: 16, tsize: 19 } }),
  (y) => ({ s: arrow(474, y - 70, 420, y - 70), h: 0 }),
  (y) => card(30, y, 840, { kicker: 'MEANWHILE IN SONG CHINA', title: 'Printing spread learning', body: 'Supported the civil service examination system; Neo-Confucian thinkers such as Zhu Xi reshaped the classical tradition', size: 16, tsize: 19 }),
],
'A flow of ideas: papermaking spread west from China through the Islamic world; in Abbasid Baghdad, founded in 762, the House of Wisdom translated Greek, Persian and Indian works into Arabic; Latin translations made in Spain and Sicily carried Ibn Sina and Ibn Rushd to the universities of Bologna, Paris and Oxford. Below, printing in Song China supported the examinations and Neo-Confucian thought.',
'Ideas moved from China and Baghdad, through Spain and Sicily, to Europe.', H2.t3);

// 05 Religion and society
F('05-religion-and-society', 'Religion and society compared', null, [
  (y) => table(y, [
    { w: 1, head: 'Latin Christendom', hfill: C.teal }, { w: 1, head: 'Islamic societies', hfill: C.tealLight }, { w: 1, head: 'Song China', hfill: C.cream },
  ], [
    ['Church a major landowner; collected tithes', 'Charitable endowments (waqf) funded mosques, schools, hospitals', 'Buddhism and Daoism alongside a Confucian state ideology'],
    ['Ran most education; defined the ritual calendar', 'Religious scholars (ulama) interpreted law', 'Neo-Confucian thinkers reshaped the classical tradition'],
    ['Monasteries: centres of agriculture and record-keeping', '', ''],
  ], { size: 16, hsize: 19, firstBold: false, firstFill: false }),
  (y) => note(y, 'Religion could also unsettle order', ['Preachers in the Peasants\' Revolt (1381) asked why lords should rule over equals created by God.'], { size: 17 }),
],
'A three-column comparison. Latin Christendom: the Church owned land, collected tithes, ran education, defined the calendar, and monasteries were centres of agriculture and records. Islamic societies: waqf endowments funded mosques, schools and hospitals, and the ulama interpreted law. Song China: Buddhism and Daoism coexisted with Confucian state ideology. A note adds that preachers in the Peasants\' Revolt used religion to question lordship.',
'Religion underpinned social order everywhere, and could also challenge it.', H2.t4, { top: 100 });

// 06 Worked comparison
F('06-black-death-comparison', 'Comparing the Black Death in two societies', '"Compare and contrast the economic impact of the Black Death on two societies"', [
  (y) => note(y, 'Thesis', ["Same shock in both; England's economy **adapted** while Egypt's **declined**, because their systems of landholding responded differently."], { size: 17, align: 'middle' }),
  (y) => table(y, [
    { w: 0.75, head: 'Point' }, { w: 1.5, head: 'England (Europe)', hfill: C.teal }, { w: 1.5, head: 'Mamluk Egypt (Africa and the Middle East)', hfill: C.cream },
  ], [
    ['1 Demographic shock', 'Very large share lost within a few years; recurrences', 'Very large share lost within a few years; recurrences'],
    ['2 Labour and wages', 'Wages rose despite the Ordinance and Statute of Labourers (1349, 1351)', 'Irrigation canals and dykes left unmaintained'],
    ['3 Landholding and elite', 'Lords leased land and commuted labour services', 'Mamluk elite, living on assigned land, raised demands on fewer peasants'],
    ['4 Long-term outcome', 'Higher living standards for many; decline of serfdom', 'Prolonged agricultural decline; slow recovery'],
  ], { size: 16, hsize: 17, cellFill: (r, c) => (r === 0 && c > 0 ? C.tealLight : null) }),
  (y) => card(30, y, 840, { title: 'Conclusion', body: 'The plague was the same; its economic impact depended on institutions. About 45 minutes: five to plan, four comparative paragraphs of about eight minutes each.', fill: C.cream, edge: C.olive, size: 17, tsize: 19 }),
],
'A comparison grid for England and Mamluk Egypt with four points. Demographic shock: similar in both. Labour and wages: English wages rose despite the labour laws of 1349 and 1351, while Egyptian irrigation went unmaintained. Landholding: English lords leased land and commuted services; the Mamluk elite raised demands. Outcome: rising living standards and the decline of serfdom in England; prolonged decline in Egypt.',
'Same plague, different institutions, different outcomes.', H2.we);

// 07 Interpretations on a time scale
{
  const X0 = 210, X1 = 850, s = yr(750, 1400, X0, X1);
  F('07-interpretations-timescale', 'Three interpretations of medieval growth', 'Drawn to a time scale, 750-1400', [
    (y) => {
      let g = '';
      const H = 400;
      for (let v = 750; v <= 1400; v += 50) g += `<line x1="${s(v)}" y1="${y + 26}" x2="${s(v)}" y2="${y + H - 40}" stroke="${C.panelEdge}" stroke-width="1.5"/>` + (v % 100 === 0 || v === 750 ? T(s(v), y + 16, String(v), { size: 15, weight: 700, anchor: 'middle', fill: C.muted }) : '');
      g += `<rect x="${s(1346)}" y="${y + 30}" width="${Math.max(6, s(1351) - s(1346))}" height="${H - 70}" fill="${C.rust}" opacity="0.85"/>`;
      const bar = (yy, a, b, title, sub, fill, edge) => {
        let r = `<rect x="${s(a)}" y="${yy}" width="${s(b) - s(a)}" height="34" rx="8" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>`;
        r += T(30, yy + 24, title, { size: 18, weight: 700 });
        const p = para(30, yy + 60, sub, 780, { size: 15, fill: C.muted, lh: 19 });
        r += `<rect x="26" y="${yy + 44}" width="${p.w + 8}" height="${p.h + 6}" fill="${C.bg}"/>` + p.s;
        return r;
      };
      g += bar(y + 40, 950, 1350, 'Lopez', '"Commercial revolution": growth of European trade and credit, about 950 to 1350', C.tealLight, C.tealDark);
      g += bar(y + 140, 960, 1279, 'Elvin', 'Song China (960-1279): a medieval economic revolution in farming, transport, money and technology', C.cream, C.olive);
      g += bar(y + 240, 1200, 1300, 'Abu-Lughod (1989)', 'A thirteenth-century "world system" of linked trading circuits from northern Europe to China; Europe marginal', C.teal, C.tealDark);
      const bl = 'Black Death, 1346-1351: helped break the world system apart';
      g += `<rect x="${s(1346) - 12 - tw(bl, 15, 700) - 4}" y="${y + H - 62}" width="${tw(bl, 15, 700) + 8}" height="24" fill="${C.bg}"/>` + T(s(1346) - 12, y + H - 44, bl, { size: 15, weight: 700, fill: C.rust, anchor: 'end' });
      return { s: g, h: H - 30 };
    },
    (y) => note(y, 'Use them to frame comparison', ['Was growth in your two societies driven by similar forces? Was either region more advanced? Test the view against evidence; do not quote it as a conclusion.'], { size: 17 }),
  ],
  'A time scale from 750 to 1400 with three bars: Lopez\'s commercial revolution in Europe, about 950 to 1350; Elvin\'s medieval economic revolution in Song China, 960-1279; and Abu-Lughod\'s thirteenth-century world system, in which Europe was marginal. A red band at 1346-1351 marks the Black Death, which helped break the system apart.',
  'Three historians describe economic revolutions; test their views against your evidence.', H2.int, { gap: 20 });
}

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
