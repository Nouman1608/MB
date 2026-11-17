import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-ib-dp-world-history-dp-history-ib-dp-world-history-prescribed-subjects-2';

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
  cov: '## What the subject covers',
  ctx: '### Context and motives',
  ke: '### Key events',
  imp: '### Impact',
  mx: '### Key events: Mexico',
  we: '## Worked example: a Question 3 comparison',
  int: '## Interpretations',
};
const yr = (a, b, x0, x1) => (v) => x0 + ((v - a) * (x1 - x0)) / (b - a);

// 01 Two conquests in one lifetime (to scale)
{
  const X0 = 60, X1 = 840, s = yr(1460, 1560, X0, X1);
  const ev = [[1469, 'Marriage of Isabella and Ferdinand', 0], [1478, 'Inquisition in Castile', 1], [1492, 'Jan: Granada entered · Apr: Santa Fe terms with Columbus', 2], [1519, 'Cortés sails from Cuba', 0], [1521, 'Tenochtitlan taken', 1], [1532, 'Atahualpa captured', 2], [1542, 'New Laws', 0], [1550, 'Valladolid debate, 1550-51', 1]];
  F('01-two-conquests-one-lifetime', 'Two conquests in one lifetime', 'Drawn to a time scale, 1460-1560', [
    (y) => {
      let g = '';
      for (let v = 1460; v <= 1560; v += 20) g += `<line x1="${s(v)}" y1="${y + 70}" x2="${s(v)}" y2="${y + 90}" stroke="${C.ink}" stroke-width="2"/>` + T(s(v), y + 112, String(v), { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
      g += `<line x1="${X0}" y1="${y + 80}" x2="${X1}" y2="${y + 80}" stroke="${C.ink}" stroke-width="3"/>`;
      g += `<rect x="${s(1482)}" y="${y + 6}" width="${s(1492) - s(1482)}" height="56" rx="8" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(s(1482) - 10, y + 30, 'Granada', { size: 17, weight: 700, anchor: 'end', fill: C.tealDark }) + T(s(1482) - 10, y + 52, '1482-1492', { size: 16, anchor: 'end', fill: C.tealDark });
      g += `<rect x="${s(1519)}" y="${y + 6}" width="${s(1551) - s(1519)}" height="56" rx="8" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + T((s(1519) + s(1551)) / 2, y + 30, 'Mexico and Peru', { size: 17, weight: 700, anchor: 'middle', fill: C.olive }) + T((s(1519) + s(1551)) / 2, y + 52, '1519-1551', { size: 16, anchor: 'middle', fill: C.olive });
      return { s: g, h: 118 };
    },
    (y) => {
      let g = '';
      ev.forEach(([v], i) => { g += `<line x1="${s(v)}" y1="${y - 40}" x2="${s(v)}" y2="${y + i * 42 + 12}" stroke="${C.panelEdge}" stroke-width="2"/>`; });
      ev.forEach(([v, l], i) => {
        const yy = y + i * 42, x = s(v), lab = `${v}  ${l}`, lw = tw(lab, 16), right = x + 16 + lw < 870;
        g += `<circle cx="${x}" cy="${yy + 12}" r="7" fill="${v === 1492 ? C.mustard : C.ink}" stroke="${C.ink}" stroke-width="2"/>`;
        g += `<rect x="${right ? x + 12 : x - 20 - lw}" y="${yy}" width="${lw + 8}" height="24" fill="${C.bg}"/>` + T(right ? x + 16 : x - 16, yy + 18, lab, { size: 16, anchor: right ? 'start' : 'end', weight: v === 1492 ? 700 : 400 });
      });
      return { s: g, h: ev.length * 42 };
    },
    (y) => note(y, 'The link', ['Many conquistadors grew up in a Castile shaped by the Granada war; justifications of conquest drew on the language of crusade.'], { size: 17 }),
  ],
  'A time scale from 1460 to 1560 with two bands: Granada (1482-1492) and Mexico and Peru (1519-1551). Dated events below run from the marriage of Isabella and Ferdinand in 1469 and the Inquisition in 1478 to 1492, when Granada was entered in January and terms were agreed with Columbus in April, then Cortés in 1519, Tenochtitlan in 1521, Atahualpa\'s capture in 1532, the New Laws of 1542 and the Valladolid debate of 1550-51.',
  '1492 links the two case studies: Granada in January, Columbus in April.', H2.cov, { gap: 24 });
}

// 02 Why the balance broke
F('02-granada-balance-breaks', 'Why Granada\'s survival ended', 'Two centuries of balance, broken by two changes', [
  (y) => card(30, y, 840, { kicker: 'BEFORE THE 1480s', title: 'Granada survives', body: 'It pays tribute to Castile, and Castile is often divided', align: 'middle', size: 17, tsize: 20 }),
  (y) => {
    const a = card(30, y, 410, { kicker: 'CHANGE 1', title: 'Christian kingdoms united', body: ['Isabella of Castile marries Ferdinand of Aragon (1469)', 'Castilian succession war won (1475-1479)'], bullets: true, size: 16, tsize: 19, fill: C.tealLight, edge: C.tealDark, gap: 6 });
    const b = card(460, y, 410, { kicker: 'CHANGE 2', title: 'Granada divided', body: ["Dynastic struggle: emir Abu'l-Hasan Ali, his son Boabdil and his brother al-Zaghal"], bullets: true, size: 16, tsize: 19, fill: C.panel, edge: C.rust, gap: 6, minH: a.h });
    return { s: a.s + b.s + arrow(235, y - 16, 235, y - 2) + arrow(665, y - 16, 665, y - 2), h: Math.max(a.h, b.h) };
  },
  (y) => {
    const c = card(150, y + 40, 600, { kicker: '1482-1492', title: 'War on Granada', body: 'Motives: religious crusade, backed by papal crusade taxes, and royal authority strengthened by directing the nobility against an external enemy', align: 'middle', fill: C.mustard, edge: C.ink, size: 16, tsize: 20, kfill: C.ink });
    return { s: arrow(235, y, 330, y + 34) + arrow(665, y, 570, y + 34) + c.s, h: 40 + c.h };
  },
],
'Before the 1480s Granada survived by paying tribute to a Castile that was often divided. Two changes broke the balance: the Christian kingdoms were united by the marriage of Isabella and Ferdinand (1469) and the succession war (1475-1479), and Granada was divided by a dynastic struggle among Abu\'l-Hasan Ali, Boabdil and al-Zaghal. Both lead to the war of 1482-1492, driven by crusade and royal authority.',
'Christian unity and Granadan division ended two centuries of balance.', H2.ctx);

// 03 Granada war
F('03-granada-war-events', 'The war for Granada, 1482-1492', null, [
  (y) => vtimeline(y, [
    { d: '1482', title: 'Alhama seized after a Granadan raid on Zahara', body: 'Open war begins' },
    { d: '1483', title: 'Boabdil captured at Lucena', body: 'Released as a Castilian vassal, deepening Granada\'s civil war', fill: C.panel, edge: C.rust },
    { d: '1485-1487', title: 'Ronda falls; Málaga taken (1487)', body: 'Much of Málaga\'s population enslaved; artillery made long sieges decisive' },
    { d: '1489', title: 'Baza falls; al-Zaghal surrenders his lands', fill: C.panel, edge: C.rust },
    { d: '1490-1491', title: 'Granada besieged from the camp of Santa Fe' },
    { d: 'Nov 1491', title: 'Treaty (Capitulations) of Granada', key: true },
    { d: '2 Jan 1492', title: 'The city surrenders', key: true },
  ], { lx: 160, size: 16, tsize: 18, gap: 11 }),
  (y) => ({ s: chip(30, y, 'red edge: Granada\'s divisions exploited', { size: 15, fill: C.panel, edge: C.rust }).s, h: 30 }),
],
'A vertical timeline: Alhama seized in 1482, Boabdil captured at Lucena in 1483 and released as a vassal, Ronda and Málaga taken in 1485-1487 with artillery, Baza and al-Zaghal\'s surrender in 1489, the siege from Santa Fe in 1490-1491, the Capitulations in November 1491 and the city\'s surrender on 2 January 1492.',
'Artillery sieges and Granada\'s civil war brought the city down in ten years.', H2.ke, { top: 96, gap: 14 });

// 04 Promises eroded
F('04-granada-promises-eroded', 'From promises to forced conversion', 'Impact on Muslims and Jews in Castile', [
  (y) => stack(y, [
    { kicker: 'NOV 1491', title: 'The Capitulations promise', body: 'Religion, mosques, property and law kept', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'AFTER 1492', title: 'Talavera, first archbishop', body: 'Conversion by persuasion', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'FROM 1499', title: 'Cisneros presses mass baptisms', body: 'Revolts in the Albaicín and the Alpujarras (1499-1501)', fill: C.cream, edge: C.olive },
    { kicker: '1502', title: 'Muslims in Castile: convert or leave', body: 'Those who stayed became moriscos', fill: C.panel, edge: C.rust },
  ], { arrows: true, x: 30, w: 560, gap: 34, card: { size: 16, tsize: 19, pad: 15 } }),
  (y) => ({ s: '', h: 0 }),
],
'A downward chain: the Capitulations of November 1491 promise Muslims their religion, mosques, property and law; Archbishop Talavera seeks conversion by persuasion; from 1499 Cisneros presses mass baptisms, provoking revolts in 1499-1501; in 1502 Muslims in Castile must convert or leave. A side column adds the Inquisition in Castile from 1478 and the Alhambra Decree of March 1492 expelling Jews who would not convert.',
'Persuasion gave way to compulsion within ten years of the Capitulations.', H2.imp);
{
  // side column for figure 04
  const f = figures[figures.length - 1];
  const side = card(620, 110, 250, { kicker: 'FROM 1478', title: 'Inquisition in Castile', body: 'Policed converts', size: 16, tsize: 18, pad: 15 }).s +
    card(620, 300, 250, { kicker: 'MARCH 1492', title: 'Alhambra Decree', body: 'Expelled Jews who would not convert', size: 16, tsize: 18, pad: 15, fill: C.panel, edge: C.rust }).s +
    card(620, 490, 250, { title: 'Also', body: 'The conquest freed Castilian resources and confidence for expansion overseas', size: 16, tsize: 18, pad: 15, fill: C.cream, edge: C.olive }).s;
  f.svg = f.svg.replace('</svg>', side + '</svg>');
}

// 05 Why the conquests succeeded
F('05-why-conquests-succeeded', 'Why did Mexico and Peru fall?', 'Not "guns and horses" alone: rank the factors and show how they interacted', [
  (y) => hub(y, ['Spanish', 'conquest'], [
    { kicker: 'ALLIES', title: 'Indigenous allies', body: 'Totonacs and Tlaxcalans; peoples who resented Mexica tribute', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'DISEASE', title: 'Epidemics', body: 'Smallpox in Tenochtitlan; disease reached the Andes ahead of the Spanish', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'INTERPRETERS', title: 'Malinche and Aguilar', body: 'Between Nahuatl, Maya and Spanish' },
  ], [
    { kicker: 'INDIGENOUS POLITICS', title: 'Inca civil war', body: 'Huáscar against Atahualpa decided who met Pizarro at Cajamarca', fill: C.cream, edge: C.olive },
    { kicker: 'SPANISH ACTIONS', title: 'Seizing rulers; brigantines', body: 'Moctezuma and Atahualpa taken; a fleet on the lake for the siege' },
  ], { cardW: 290, r: 80 }),
  (y) => note(y, 'Restall, Seven Myths of the Spanish Conquest (2003)', ['A few hundred Spaniards conquering empires is a myth: indigenous allies supplied most of the fighting forces, and disease and indigenous politics shaped the outcome.'], { size: 17 }),
],
'A central circle, the Spanish conquest, linked to five factors: indigenous allies such as the Totonacs and Tlaxcalans, epidemics including smallpox, the interpreters Malinche and Aguilar, the Inca civil war between Huáscar and Atahualpa, and Spanish actions such as seizing rulers and building brigantines. A note summarises Restall\'s argument that indigenous allies, disease and politics shaped the outcome.',
'Allies, disease and indigenous politics matter as much as Spanish arms.', H2.mx);

// 06 Mexico and Peru parallel
F('06-mexico-peru-events', 'Mexico and Peru: key events', null, [
  (y) => {
    const col = (x, head, fill, edge, items, hi) => {
      let s = T(x + 205, y + 18, head, { size: 20, weight: 700, anchor: 'middle', fill: edge }), cy = y + 34;
      items.forEach(([d, ti, b], i) => {
        const c = card(x, cy, 410, { kicker: d, title: ti, body: b, size: 15, tsize: 18, pad: 14, fill: i === hi ? C.mustard : fill, edge: i === hi ? C.ink : edge, kfill: i === hi ? C.ink : undefined });
        s += c.s; cy += c.h;
        if (i < items.length - 1) { s += arrow(x + 205, cy + 3, x + 205, cy + 25, { w: 3 }); cy += 28; }
      });
      return { s, h: cy - y };
    };
    const A = col(30, 'MEXICO', C.tealLight, C.tealDark, [
      ['1519', 'Cortés sails from Cuba', 'Against the governor\'s orders; alliances with Totonacs and Tlaxcala'],
      ['NOV 1519', 'Enters Tenochtitlan', 'Moctezuma II taken hostage'],
      ['1520', "Alvarado's massacre; the city rises", 'Moctezuma dies; Spanish flight on the Noche Triste'],
      ['', 'Smallpox strikes the city', 'Besiegers rebuild with Tlaxcalan support and brigantines'],
      ['AUG 1521', 'Tenochtitlan taken', ''],
    ], 4);
    const B = col(460, 'PERU', C.cream, C.olive, [
      ['BEFORE', 'Inca civil war', 'Huáscar against Atahualpa after Huayna Capac dies'],
      ['NOV 1532', 'Atahualpa captured at Cajamarca', 'A vast ransom in gold and silver'],
      ['1533', 'Atahualpa executed; Cusco taken', ''],
      ['1536', 'Manco Inca rebels', 'Later rules a neo-Inca state from Vilcabamba'],
      ['1538-1541', 'Conquerors fight each other', 'Almagro executed (1538); Pizarro assassinated (1541)'],
    ], 2);
    return { s: A.s + B.s, h: Math.max(A.h, B.h) };
  },
],
'Two columns of events. Mexico: Cortés sails from Cuba in 1519, enters Tenochtitlan in November 1519 and takes Moctezuma hostage; after Alvarado\'s massacre in 1520 the city rises and the Spanish flee; smallpox strikes; Tenochtitlan is taken in August 1521. Peru: the Inca civil war; Atahualpa captured at Cajamarca in November 1532 and executed in 1533; Manco Inca rebels in 1536; Almagro is executed in 1538 and Pizarro assassinated in 1541.',
'Mexico fell in two years; Peru was taken quickly but fought over for a decade.', H2.mx, { top: 96 });

// 07 Q3 point by point
F('07-q3-point-by-point', 'Question 3: compare point by point', 'Two sources on the fall of Tenochtitlan', [
  (y) => row(y, [
    { kicker: 'SOURCE 1', title: 'Letter from Cortés to Charles V', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'SOURCE 2', title: 'Indigenous account compiled decades later', body: 'Under a Franciscan friar, like the Florentine Codex', fill: C.cream, edge: C.olive },
  ], { gap: 120, card: { size: 15, tsize: 18, align: 'middle' } }),
  (y) => {
    const rows = [
      ['SIMILARITY', 'The siege ended in the destruction of the city', 'The siege ended in the destruction of the city', true],
      ['DIFFERENCE', 'Victory from Spanish courage and divine favour', 'Emphasises disease and the hunger of the besieged'],
      ['DIFFERENCE', 'Allies treated as auxiliaries', 'Allies named as fighting their old overlords'],
    ];
    let s = '', cy = y;
    rows.forEach(([tag, a, b, same]) => {
      const ca = card(30, cy, 360, { body: a, size: 16, pad: 14, bfill: C.ink, minH: 70, vcenter: true });
      const cb = card(510, cy, 360, { body: b, size: 16, pad: 14, bfill: C.ink, minH: ca.h, vcenter: true });
      const h = Math.max(ca.h, cb.h);
      s += card(30, cy, 360, { body: a, size: 16, pad: 14, bfill: C.ink, minH: h, vcenter: true }).s + card(510, cy, 360, { body: b, size: 16, pad: 14, bfill: C.ink, minH: h, vcenter: true }).s;
      s += `<line x1="396" y1="${cy + h / 2}" x2="504" y2="${cy + h / 2}" stroke="${same ? C.tealDark : C.rust}" stroke-width="4" marker-start="url(#${same ? 'ahT' : 'ahR'})" marker-end="url(#${same ? 'ahT' : 'ahR'})"/>`;
      s += T(450, cy + h / 2 - 12, tag, { size: 15, weight: 700, anchor: 'middle', fill: same ? C.tealDark : C.rust });
      cy += h + 14;
    });
    return { s, h: cy - y - 14 };
  },
  (y) => note(y, 'Aim for', ['Two or three similarities and three or four differences, each sentence linking the two sources directly ("whereas", "similarly", "yet").'], { size: 17 }),
],
'Two sources on the fall of Tenochtitlan, a letter from Cortés to Charles V and a later indigenous account, are compared row by row with two-way arrows. Similarity: both say the siege destroyed the city. Differences: the letter credits Spanish courage and divine favour while the indigenous account stresses disease and hunger; the letter treats allies as auxiliaries while the indigenous account names them as fighting their old overlords.',
'Link the two sources in every sentence: similarities and differences side by side.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
