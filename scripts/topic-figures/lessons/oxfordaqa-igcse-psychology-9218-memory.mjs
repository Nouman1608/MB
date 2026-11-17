import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-psychology-9218-memory';
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

const H2 = {
  proc: '## Processes and types of memory',
  msm: '## The multi-store model in more depth',
  wmm: '## The working memory model',
  rec: '## Reconstructive memory',
  acc: '## Factors affecting the accuracy of memory',
  ans: '## Annotated model answer: an evaluation point',
};

// 01 Processes and types
F('01-processes-and-types', 'Processes and types of memory', '', [
  (y) => row(y, [
    { kicker: '1', title: 'Encoding', body: 'Changing information into a form the brain can hold', fill: C.cream, edge: C.olive },
    { kicker: '2', title: 'Storage', body: 'Holding the information over time' },
    { kicker: '3', title: 'Retrieval', body: 'Finding it and bringing it back when needed', fill: C.tealLight, edge: C.tealDark },
  ], { arrows: true, gap: 46, card: { size: 16, tsize: 20, align: 'middle', minH: 130 } }),
  (y) => {
    const c = chips(y, ['acoustic: by sound', 'visual: by image', 'semantic: by meaning'], { x: 200, w: 670, size: 16, align: 'start', fill: C.cream, edge: C.olive });
    return { s: T(30, y + 21, 'Encoding can be:', { size: 17, weight: 700, fill: C.olive }) + c.s, h: c.h };
  },
  (y) => note(y, '', 'A failure at **any one stage** produces forgetting, so name the stage that went wrong.', { align: 'middle', size: 17, fill: C.panel, edge: C.rust }),
  10,
  (y) => ({ s: T(450, y + 16, 'THREE TYPES OF LONG-TERM MEMORY', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }), h: 16 }),
  (y) => row(y, [
    { title: 'Episodic', body: ['Personal experiences tied to a time and place', '*e.g. your first day at secondary school*'] },
    { title: 'Semantic', body: ['Facts and meanings, no longer linked to when you learned them', '*e.g. Paris is the capital of France*'] },
    { title: 'Procedural', body: ['Skills and how to do things', '*e.g. riding a bicycle*'], fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 20, gap: 8 } }),
  (y) => {
    const a = card(30, y, 548, { body: 'Episodic and semantic: can be put into words; recalled **consciously**', size: 16, bfill: C.ink, fill: C.cream, edge: C.olive, align: 'middle', minH: 70, vcenter: true });
    const b = card(592, y, 278, { body: 'Procedural: hard to describe; used **without conscious effort**', size: 16, bfill: C.ink, fill: C.cream, edge: C.olive, align: 'middle', minH: 70, vcenter: true });
    return { s: a.s + b.s, h: Math.max(a.h, b.h) };
  },
],
'Encoding, storage and retrieval in sequence, with encoding by sound, image or meaning, and a note that failure at any stage causes forgetting. Three cards show the types of long-term memory: episodic (personal experiences), semantic (facts) and procedural (skills); the first two are recalled consciously, procedural memories without conscious effort.',
'Forgetting can happen at any of the three stages; long-term memory holds three types.', H2.proc);

// 02 Multi-store model
F('02-multi-store-model', 'The multi-store model', 'Atkinson and Shiffrin: three separate stores', [
  (y) => {
    const W = 210, xs = [30, 345, 660], hh = 270;
    const stores = [
      ['Sensory register', [['Coding', 'in the form of the sense that received it'], ['Holds', 'a brief, unprocessed trace']], C.panel, C.panelEdge],
      ['Short-term memory', [['Coding', 'mainly acoustic'], ['Capacity', 'small (around 5-9 items)'], ['Duration', 'brief: seconds']], C.cream, C.olive],
      ['Long-term memory', [['Coding', 'mainly semantic'], ['Capacity', 'no known limit']], C.tealLight, C.tealDark],
    ];
    let s = '';
    stores.forEach(([name, rows, f, e], i) => {
      const x = xs[i];
      s += panel(x, y, W, hh, f, e) + T(x + W / 2, y + 38, name, { size: 20, weight: 700, anchor: 'middle' });
      let cy = y + 74;
      rows.forEach(([k, v]) => { s += T(x + 18, cy, k.toUpperCase(), { size: 15, weight: 700, fill: C.muted }); const p = para(x + 18, cy + 22, v, W - 36, { size: 16 }); s += p.s; cy += 30 + p.h; });
      if (i < 2) {
        s += arrow(x + W + 6, y + 110, xs[i + 1] - 6, y + 110, { w: 4 });
        s += T((x + W + xs[i + 1]) / 2, y + 96, i === 0 ? 'attention' : 'rehearsal', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
      }
    });
    // losses
    const loss = (x, l1, l2) => arrow(x, y + hh + 6, x, y + hh + 50, { w: 3, color: C.rust, marker: 'ahR' }) + T(x, y + hh + 74, l1, { size: 16, weight: 700, anchor: 'middle', fill: C.rust }) + T(x, y + hh + 96, l2, { size: 15, anchor: 'middle', fill: C.muted });
    s += loss(135, 'decays', 'if not attended to') + loss(450, 'displaced or decays', 'if not rehearsed');
    return { s, h: hh + 100 };
  },
],
'Three boxes in a row: the sensory register holds a brief trace in the form of the sense; attention passes information to short-term memory, which is mainly acoustic, small and lasts seconds; rehearsal transfers it to long-term memory, which is mainly semantic with no known limit. Unattended information decays from the sensory register; unrehearsed information is displaced or decays from short-term memory.',
'Attention moves information into short-term memory; rehearsal moves it into long-term memory.', H2.msm);

// 03 Serial position curve
F('03-serial-position-curve', "Murdock's serial position curve", 'Free recall of a list of words. Illustrative shape, not real data', [
  (y) => {
    const x0 = 110, x1 = 820, yb = y + 300, yt = y + 30;
    let s = `<line x1="${x0}" y1="${yb}" x2="${x1}" y2="${yb}" stroke="${C.ink}" stroke-width="3"/><line x1="${x0}" y1="${yb}" x2="${x0}" y2="${yt}" stroke="${C.ink}" stroke-width="3"/>`;
    s += T(465, yb + 34, 'Position of the word in the list →', { size: 17, anchor: 'middle', weight: 600 }) + T(x0 - 14, yb + 22, 'first', { size: 15, anchor: 'middle', fill: C.muted }) + T(x1, yb + 22, 'last', { size: 15, anchor: 'middle', fill: C.muted });
    s += `<text x="${x0 - 24}" y="${(yb + yt) / 2}" font-size="17" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${x0 - 24} ${(yb + yt) / 2})">Recall →</text>`;
    s += `<rect x="${x0 + 4}" y="${yt}" width="150" height="${yb - yt}" fill="${C.cream}" opacity="0.7"/><rect x="${x1 - 150}" y="${yt}" width="150" height="${yb - yt}" fill="${C.tealLight}" opacity="0.8"/>`;
    s += path(`M${x0 + 20},${yt + 30} C${x0 + 120},${yt + 60} ${x0 + 160},${yb - 70} ${x0 + 260},${yb - 70} L${x1 - 250},${yb - 70} C${x1 - 150},${yb - 70} ${x1 - 110},${yt + 50} ${x1 - 10},${yt + 10}`, { w: 5, stroke: C.ink });
    s += T(x0 + 80, yb - 20, 'PRIMACY', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
    s += T(x1 - 75, yb - 20, 'RECENCY', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += T(465, yb - 90, 'middle words recalled worst', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
    return { s, h: 350 };
  },
  (y) => row(y, [
    { kicker: 'PRIMACY: EARLY WORDS', title: 'Time to rehearse them into long-term memory', fill: C.cream, edge: C.olive },
    { kicker: 'MIDDLE WORDS', title: 'Pushed out of short-term memory without enough rehearsal' },
    { kicker: 'RECENCY: LAST WORDS', title: 'Still in short-term memory at the moment of recall', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 12, card: { size: 16, tsize: 17 } }),
  (y) => note(y, '', 'Two distinct effects explained by two stores: the main evidence for the multi-store model.', { align: 'middle', size: 17 }),
],
'An illustrative U-shaped curve of recall against position in a list. Early words show a primacy effect because there was time to rehearse them into long-term memory; the last words show a recency effect because they were still in short-term memory; middle words are recalled worst because they were pushed out of short-term memory.',
'Primacy from long-term memory, recency from short-term memory: evidence for separate stores.', H2.msm);

// 04 Working memory model
F('04-working-memory-model', 'The working memory model', 'Baddeley and Hitch: an active workspace that replaces the short-term store', [
  (y) => {
    let s = '';
    const ce = card(190, y, 520, { title: 'Central executive', body: ['**Coding:** modality-free, handles any kind of information', '**Capacity:** very limited; directs attention rather than storing'], size: 16, tsize: 21, fill: C.mustard, edge: C.ink, bfill: C.ink, gap: 4 });
    s += ce.s;
    const yy = y + ce.h + 70;
    const subs = row(yy, [
      { title: 'Phonological loop', body: ['**Coding:** acoustic (sound-based)', '**Capacity:** about as much as you can say in roughly two seconds'], fill: C.tealLight, edge: C.tealDark },
      { title: 'Episodic buffer', body: ['**Coding:** combines information from all components', '**Capacity:** limited; links to long-term memory'], fill: C.panel },
      { title: 'Visuo-spatial sketchpad', body: ['**Coding:** visual and spatial', '**Capacity:** a small number of objects or locations'], fill: C.cream, edge: C.olive },
    ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, gap: 6 } });
    subs.xs.forEach((x, i) => { const cx = x + subs.ws[i] / 2; s += path(`M${450 + (i - 1) * 120},${y + ce.h} L${cx},${yy - 4}`, { w: 3, extra: 'marker-end="url(#ah)" marker-start="url(#ah)"' }); });
    s += subs.s;
    const ltm = card(240, yy + subs.h + 60, 420, { title: 'Long-term memory', align: 'middle', tsize: 19, fill: '#eef1f0' });
    const bx = subs.xs[1] + subs.ws[1] / 2;
    s += path(`M${bx},${yy + subs.h + 4} L${bx},${yy + subs.h + 56}`, { w: 3, extra: 'marker-end="url(#ah)" marker-start="url(#ah)"' }) + ltm.s;
    return { s, h: yy + subs.h + 60 + ltm.h - y };
  },
],
'The central executive, modality-free with very limited capacity, sits above three components: the phonological loop (acoustic, about two seconds of speech), the episodic buffer (combines information, limited, links to long-term memory) and the visuo-spatial sketchpad (visual and spatial, a few objects or locations).',
'Four components, each with its own coding and its own limited capacity.', H2.wmm);

// 05 Dual processing tasks
F('05-dual-processing-tasks', 'Baddeley and Hitch: dual processing tasks', 'Two tasks carried out at the same time', [
  (y) => {
    const col = (x, kick, kf, title, a, b, comp, res, fill, edge) => {
      let s = panel(x, y, 405, 330, C.panel, C.panelEdge) + T(x + 24, y + 36, kick, { size: 15, weight: 700, fill: kf }) + T(x + 24, y + 64, title, { size: 20, weight: 700 });
      s += chip(x + 24, y + 90, a, { size: 16, fill: C.tealLight, edge: C.tealDark }).s + chip(x + 24, y + 136, b, { size: 16, fill: comp === 'same' ? C.tealLight : C.cream, edge: comp === 'same' ? C.tealDark : C.olive }).s;
      s += para(x + 24, y + 206, comp === 'same' ? 'Both compete for **one component** with one limit' : 'Each uses a **different component** with its own limit', 360, { size: 17 }).s;
      s += card(x + 20, y + 252, 365, { title: res, size: 16, tsize: 18, fill, edge, align: 'middle', minH: 60, vcenter: true }).s;
      return s;
    };
    return { s: col(30, 'SAME COMPONENT', C.rust, 'e.g. two spoken tasks', 'verbal task', 'verbal task', 'same', 'Performance falls sharply', '#f6e3d8', C.rust) +
      col(465, 'DIFFERENT COMPONENTS', C.tealDark, 'e.g. verbal + visual', 'verbal task', 'visual task', 'diff', 'Both done almost as well', C.tealLight, C.tealDark), h: 330 };
  },
  (y) => note(y, 'Conclusion', 'Hard to explain if short-term memory is one store; easy to explain if it has **separate parts with separate limits**.', { size: 17 }),
],
'Two panels. When two tasks both rely on spoken information they use the same component and performance falls sharply. When one task is verbal and one visual they use different components and both are done almost as well together as separately. Conclusion: short-term memory has separate parts with separate limits.',
'Same component: interference. Different components: no clash. So short-term memory has parts.', H2.wmm);

// 06 War of the Ghosts
F('06-war-of-the-ghosts', "Bartlett's War of the Ghosts", 'English participants reproduced an unfamiliar Native American folk story several times', [
  (y) => {
    let s = '';
    const pages = [[60, 230, 'Original story', 'unfamiliar style and content'], [330, 180, 'Reproduction', 'details lost'], [580, 130, 'Later reproduction', 'shorter, fits English culture']];
    pages.forEach(([x, h, a, b], i) => {
      const top = y + 240 - h;
      s += `<rect x="${x}" y="${top}" width="200" height="${h}" rx="6" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`;
      const n = Math.floor((h - 30) / 22);
      for (let k = 0; k < n; k++) {
        const lw = 160 - ((k * 37) % 50);
        const colr = i > 0 && k === 1 ? C.mustard : C.panelEdge;
        s += `<line x1="${x + 20}" y1="${top + 26 + k * 22}" x2="${x + 20 + lw}" y2="${top + 26 + k * 22}" stroke="${colr}" stroke-width="7" stroke-linecap="round"/>`;
      }
      s += T(x + 100, y + 268, a, { size: 17, weight: 700, anchor: 'middle' }) + T(x + 100, y + 292, b, { size: 16, anchor: 'middle', fill: C.muted });
      if (i < 2) s += arrow(x + 208, y + 180, pages[i + 1][0] - 10, y + 180, { w: 3.5 });
    });
    return { s, h: 300 };
  },
  (y) => row(y, [
    { kicker: 'CHANGE 1', title: 'Shorter' },
    { kicker: 'CHANGE 2', title: 'Lost details', body: 'that made no sense to them, such as the supernatural elements' },
    { kicker: 'CHANGE 3', title: 'Changed to fit English culture', body: 'canoes became boats', fill: C.cream, edge: C.olive },
  ], { gap: 14, card: { size: 16, tsize: 19, align: 'middle' } }),
  (y) => row(y, [
    { kicker: 'SCHEMAS', title: 'Rebuild from fragments', body: 'Mental frameworks of knowledge built from experience fill in the rest.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'EFFORT AFTER MEANING', title: 'Make it fit', body: 'Unfamiliar or confusing details are changed or dropped to fit what we understand.', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, card: { size: 16, tsize: 19 } }),
  (y) => row(y, [
    { kicker: 'STRENGTH', title: 'Clear qualitative examples', body: 'Influenced later research on eyewitness memory.' },
    { kicker: 'LIMITATION', kfill: C.rust, title: 'Not standardised', body: 'No strict instructions or set intervals; changes may be guesses. The story was deliberately strange.' },
  ], { gap: 14, card: { size: 16, tsize: 18 } }),
],
'Three pages shrink as the story is reproduced again and again. Changes: the story became shorter, lost details that made no sense such as the supernatural elements, and changed to fit English culture, so canoes became boats. Schemas and effort after meaning explain the changes. Evaluation: clear qualitative examples, but the procedure was not standardised and the story was deliberately strange.',
'Recall is a reconstruction: each version became shorter and more familiar.', H2.rec);

// 07 Interference, context, false memories
F('07-accuracy-factors', 'Why memory can be inaccurate', '', [
  (y) => {
    const band = (yy, kick, kf, old, nw, dir, ex) => {
      let s = panel(30, yy, 840, 150) + T(54, yy + 36, kick, { size: 17, weight: 700, fill: kf });
      s += card(54, yy + 56, 220, { title: old, align: 'middle', size: 16, tsize: 17, fill: '#eef1f0', minH: 60, vcenter: true }).s;
      s += card(384, yy + 56, 200, { title: nw, align: 'middle', size: 16, tsize: 17, fill: C.cream, edge: C.olive, minH: 60, vcenter: true }).s;
      s += dir > 0 ? arrow(282, yy + 86, 376, yy + 86, { w: 4, color: C.rust, marker: 'ahR' }) : arrow(376, yy + 86, 282, yy + 86, { w: 4, color: C.rust, marker: 'ahR' });
      s += T(329, yy + 74, 'disrupts', { size: 15, anchor: 'middle', fill: C.rust, weight: 600 });
      s += para(600, yy + 76, ex, 250, { size: 16, fill: C.muted }).s;
      return s;
    };
    return { s: band(y, 'PROACTIVE: old affects new', C.rust, 'Older learning', 'Newer learning', 1, '*Calling a new teacher by your old teacher\'s name*') +
      band(y + 166, 'RETROACTIVE: new affects old', C.rust, 'Older learning', 'Newer learning', -1, '*A new phone number makes the old one hard to recall*'), h: 316 };
  },
  (y) => P('Interference is greatest when the two sets of information are **similar**.', { anchor: 'middle', size: 17, fill: C.ink })(y),
  (y) => row(y, [
    { kicker: 'CONTEXT', title: 'Cues from the setting', body: 'Recall is better when the context at retrieval matches the context at encoding. Revising in a quiet room but sitting the exam in a noisy hall removes the cues.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'FALSE MEMORIES', kfill: C.olive, title: 'Confident but wrong', body: 'Remembering an event or detail that did not happen. Caused by misleading questions, suggestion by others and schemas.', fill: C.cream, edge: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19 } }),
],
'Two interference rows: proactive, where older learning disrupts newer learning (calling a new teacher by the old teacher\'s name), and retroactive, where newer learning disrupts older learning (a new phone number blocks the old one). Cards explain context-dependent recall and false memories created by misleading questions, suggestion and schemas.',
'Proactive works forwards, retroactive works backwards; context and suggestion also shape recall.', H2.acc);

// 08 Developed evaluation point
F('08-developed-evaluation', 'Building a developed evaluation point', 'Evaluate the working memory model', [
  (y) => steps(y, [
    { title: 'Name the evidence', body: '"A strength of the model is support from dual processing tasks."' },
    { title: 'Explain the evidence', body: '"Two tasks using the same component interfered with each other, but tasks using different components did not."' },
    { title: 'Link it back to the model', body: '"This supports the idea that short-term memory has separate parts rather than being one store."' },
  ], { size: 17, tsize: 19, gap: 14, highlight: 2 }),
  (y) => note(y, '', 'Name it, explain it, link it back: one comment becomes a developed evaluation.', { align: 'middle', size: 18 }),
],
'Three numbered steps for one evaluation point on the working memory model: name the evidence (dual processing tasks), explain it (same-component tasks interfere, different-component tasks do not), then link it back (short-term memory has separate parts). The final link step is highlighted.',
'Name it, explain it, link it back.', H2.ans);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
