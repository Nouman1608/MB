import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-psychology-9990-mood-affective-disorders-depressive-disorder-unipolar-and-bipolar-disorder';
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
// Study summary card: name band, then aim/procedure/findings/conclusion columns, then evaluation (+/-).
function study(y, o) {
  const band = `<rect x="30" y="${y}" width="840" height="52" rx="14" fill="${o.bandFill || C.tealDark}"/><rect x="30" y="${y + 30}" width="840" height="22" fill="${o.bandFill || C.tealDark}"/>` + T(50, y + 34, o.name, { size: 21, weight: 700, fill: '#ffffff' }) + (o.tag ? T(850, y + 34, o.tag, { size: 16, weight: 600, fill: '#ffffff', anchor: 'end' }) : '');
  const cols = o.cols || [['PROCEDURE', o.procedure], ['FINDINGS', o.findings], ['CONCLUSION', o.conclusion]].filter((c) => c[1]);
  const r = row(y + 52, cols.map(([k, b], i) => ({ kicker: k, body: b, fill: i === cols.length - 1 && o.hiLast !== false ? C.cream : C.panel, edge: i === cols.length - 1 && o.hiLast !== false ? C.olive : C.panelEdge })), { gap: 0, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink, gap: 6 } });
  let s = band + r.s, h = 52 + r.h;
  if (o.plus || o.minus) {
    const e = row(y + h + 10, [
      ...(o.plus ? [{ kicker: '+ STRENGTH', body: o.plus, fill: C.tealLight, edge: C.tealDark }] : []),
      ...(o.minus ? [{ kicker: '− WEAKNESS', kfill: C.rust, body: o.minus, fill: C.panel }] : []),
    ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink, gap: 6 } });
    s += e.s; h += 10 + e.h;
  }
  return { s, h };
}

// ---- Extra helpers for Cambridge 9990 psychology figures ----
// Vertical arrows between two stacked blocks, at the given x positions (F gap 22 assumed).
const vArrows = (xs, h = 30, o = {}) => (y) => ({ s: xs.map((x) => arrow(x, y - 16, x, y + h + 14, { w: 3.5, ...o })).join('') + (o.label ? T(o.lx ?? 450, y + h / 2 + 6, o.label, { size: 16, weight: 700, anchor: 'middle', fill: o.lfill || C.muted }) : ''), h });
// Section label (small caps style kicker across the figure).
const KL = (s, o = {}) => (y) => ({ s: T(o.anchor === 'middle' ? 450 : o.x ?? 30, y + 14, s, { size: 15, weight: 700, fill: o.fill || C.muted, anchor: o.anchor || 'start' }), h: 18 });
// Evaluation grid: rows of [issue, point, + / − / ±].
function evalGrid(y, rows, o = {}) {
  const mark = (m) => (m === '+' ? C.tealLight : m === '−' ? '#f6e3d8' : C.cream);
  return table(y, [{ w: o.w1 ?? 1.1, head: o.h1 || 'Issue' }, { w: o.w2 ?? 3.4, head: o.h2 || 'Point' }, { w: 0.55, head: '+/−' }],
    rows.map((r) => [r[0], r[1], `**${r[2]}**`]), { size: o.size ?? 16, cellFill: (ri, ci) => (ci === 2 ? mark(rows[ri][2]) : null) });
}
// Simple two-axis schematic plot frame. Returns {s, X(v), Y(v)} for v in 0..1.
function axes(x, y, w, h, xl, yl, o = {}) {
  const s = `<line x1="${x}" y1="${y + h}" x2="${x + w}" y2="${y + h}" stroke="${C.ink}" stroke-width="3"/>` +
    `<line x1="${x}" y1="${y + h}" x2="${x}" y2="${y}" stroke="${C.ink}" stroke-width="3"/>` +
    T(x + w / 2, y + h + 34, xl, { size: 17, weight: 600, anchor: 'middle' }) +
    `<text x="${x - 22}" y="${y + h / 2}" font-size="17" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${x - 22} ${y + h / 2})">${X(yl)}</text>` +
    (o.illus !== false ? T(x + w, y - 8, 'illustrative: no data in the lesson', { size: 15, fill: C.muted, anchor: 'end', italic: true }) : '');
  return { s, X: (v) => x + v * w, Y: (v) => y + h - v * h };
}

const H2 = {
  diag: '## 1.2.1 Diagnosis and measurement',
  bio: '### Biochemical',
  gen: '### Genetic: key study Oruč et al. (1997)',
  beck: '### Beck\'s cognitive theory',
  lh: '### Learned helplessness and attributional style',
  treat: '## 1.2.3 Treatment and management',
};

// 01 Unipolar vs bipolar patterns
F('01-mood-patterns', 'Unipolar and bipolar patterns', 'Schematic mood over time (illustrative)', [
  (y) => {
    const ph = 150;
    const plot = (yy, title, sub, d, labels = '') => {
      let s = panel(30, yy, 840, ph) + T(50, yy + 36, title, { size: 19, weight: 700 }) + para(50, yy + 62, sub, 230, { size: 15, fill: C.muted }).s;
      const mid = yy + ph / 2;
      s += `<line x1="300" y1="${mid}" x2="850" y2="${mid}" stroke="${C.panelEdge}" stroke-width="2" stroke-dasharray="6 5"/>` + T(850, mid - 8, 'usual mood', { size: 15, fill: C.muted, anchor: 'end' });
      return s + path(d(mid), { w: 4.5, stroke: C.tealDark }) + labels;
    };
    const m = (yy) => yy + ph / 2;
    let s = plot(y, 'Depressive disorder', 'unipolar: mood moves in one direction; single or recurrent episodes', (c) => `M300,${c} L360,${c} C390,${c} 400,${c + 46} 430,${c + 46} L560,${c + 46} C590,${c + 46} 600,${c} 630,${c} L850,${c}`,
      T(495, m(y) + 68, 'depressive episode ≥ 2 weeks', { size: 15, weight: 700, anchor: 'middle', fill: C.rust }));
    const y2 = y + ph + 12;
    s += plot(y2, 'Bipolar type I', 'at least one manic or mixed episode', (c) => `M300,${c} C340,${c} 350,${c - 46} 390,${c - 46} L500,${c - 46} C540,${c - 46} 550,${c + 40} 590,${c + 40} L700,${c + 40} C740,${c + 40} 750,${c} 790,${c} L850,${c}`,
      T(445, m(y2) - 54, 'mania ≥ 1 week', { size: 15, weight: 700, anchor: 'middle', fill: C.olive }) + T(645, m(y2) + 62, 'depression (usually)', { size: 15, weight: 700, anchor: 'middle', fill: C.rust }));
    const y3 = y + 2 * (ph + 12);
    s += plot(y3, 'Bipolar type II', 'at least one hypomanic and one depressive episode; no mania', (c) => `M300,${c} C340,${c} 350,${c - 24} 390,${c - 24} L480,${c - 24} C520,${c - 24} 530,${c + 44} 570,${c + 44} L690,${c + 44} C730,${c + 44} 740,${c} 780,${c} L850,${c}`,
      T(435, m(y3) - 34, 'hypomania (milder)', { size: 15, weight: 700, anchor: 'middle', fill: C.olive }) + T(630, m(y3) + 66, 'depressive episode', { size: 15, weight: 700, anchor: 'middle', fill: C.rust }));
    return { s, h: 3 * ph + 24 };
  },
  (y) => card(30, y, 840, { kicker: 'MANIC EPISODE', body: 'euphoria, irritability or expansiveness · increased activity or energy · rapid speech · racing thoughts · reduced need for sleep · distractibility · reckless behaviour · inflated self-esteem. **Hypomania** is milder, without marked impairment.', size: 16, bfill: C.ink, fill: C.cream, edge: C.olive, kfill: C.olive }),
],
'Three schematic mood lines. Depressive disorder dips below usual mood for an episode of at least two weeks. Bipolar type I rises into mania lasting at least a week and usually falls into depression. Bipolar type II rises only into milder hypomania and falls into a depressive episode. A card lists signs of a manic episode.',
'Unipolar moves one way; bipolar I includes mania; bipolar II hypomania and depression.', H2.diag);

// 02 BDI scoring
{
  const x0 = 60, u = 780 / 63;
  F('02-bdi-scoring', 'The Beck Depression Inventory', '21 self-report items, each scored 0 to 3', [
    (y) => {
      let s = '';
      for (let i = 0; i < 21; i++) s += `<rect x="${60 + i * 37.2}" y="${y}" width="32" height="32" rx="4" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>`;
      s += T(450, y + 58, '21 items × 3 = maximum total of 63', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
      return { s, h: 64 };
    },
    (y) => {
      const bands = [[0, 13, 'minimal', C.panel], [14, 19, 'mild', C.tealLight], [20, 28, 'moderate', C.teal], [29, 63, 'severe', C.mustard]];
      let s = T(450, y + 14, 'BDI-II: USUAL INTERPRETATION OF TOTALS', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
      bands.forEach(([a, b, l, f]) => { const xa = x0 + a * u, xb = x0 + (b + 1) * u; s += `<rect x="${xa}" y="${y + 28}" width="${xb - xa}" height="64" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T((xa + xb) / 2, y + 66, l, { size: 17, weight: 700, anchor: 'middle' }); });
      [[0, '0'], [14, '14'], [20, '20'], [29, '29'], [63, '63']].forEach(([v, l]) => { const xx = v === 63 ? x0 + 64 * u : x0 + v * u; s += `<line x1="${xx}" y1="${y + 92}" x2="${xx}" y2="${y + 104}" stroke="${C.ink}" stroke-width="2.5"/>` + T(xx, y + 126, l, { size: 17, weight: 700, anchor: 'middle' }); });
      return { s, h: 132 };
    },
    (y) => row(y, [
      { kicker: '+ STRENGTHS', body: 'Quick and standardised; quantitative data that track change; good reliability.', fill: C.tealLight, edge: C.tealDark },
      { kicker: '− PSYCHOMETRIC LIMITS', kfill: C.rust, body: 'Self-report: social desirability and insight on the day. In some cultures distress shows as physical complaints, so it may **underestimate** depression.' },
    ], { gap: 14, vcenter: false, card: { size: 16, bfill: C.ink } }),
  ],
  'Twenty-one item boxes, each scored 0 to 3, give a total of 0 to 63. A bar shows the usual BDI-II bands: 0 to 13 minimal, 14 to 19 mild, 20 to 28 moderate and 29 to 63 severe. Strengths and psychometric limits, including cultural differences, follow.',
  'Totals run 0 to 63; 29 or more is usually read as severe.', H2.diag);
}

// 03 Monoamine timing problem
F('03-monoamine-timing', 'The monoamine hypothesis: a timing problem', 'Low serotonin and noradrenaline (and possibly dopamine) linked to depression', [
  (y) => {
    const a = axes(140, y + 40, 690, 250, 'time after starting an antidepressant', 'level');
    let s = panel(30, y, 840, 350) + a.s;
    s += path(`M140,${a.Y(0.15)} C170,${a.Y(0.15)} 175,${a.Y(0.85)} 220,${a.Y(0.85)} L830,${a.Y(0.85)}`, { stroke: C.tealDark, w: 5 });
    s += path(`M140,${a.Y(0.1)} L520,${a.Y(0.14)} C600,${a.Y(0.16)} 640,${a.Y(0.6)} 830,${a.Y(0.68)}`, { stroke: C.rust, w: 5 });
    s += T(240, a.Y(0.85) - 14, 'monoamine levels rise within hours', { size: 16, weight: 700, fill: C.tealDark });
    s += T(330, a.Y(0.12) - 16, 'mood improves only after several weeks', { size: 16, weight: 700, fill: C.rust, anchor: 'middle' });
    return { s, h: 350 };
  },
  (y) => row(y, [
    { kicker: 'SUPPORT', body: 'Antidepressants increase monoamine availability and reduce symptoms for many people.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'CRITICISM', kfill: C.rust, body: 'The delay means low monoamines are unlikely to be the whole story; the explanation is also reductionist.' },
  ], { gap: 14, vcenter: false, card: { size: 16, bfill: C.ink } }),
],
'An illustrative graph: after starting an antidepressant, monoamine levels rise within hours, but mood improves only after several weeks. Cards give the supporting evidence from antidepressants and the criticism that the delay means low monoamines cannot be the whole story.',
'Drugs raise monoamines in hours but lift mood only after weeks.', H2.bio);

// 04 Oruč et al.
F('04-oruc-1997', 'Key study: Oruč et al. (1997)', 'Serotonin-related genes and bipolar disorder', [
  (y) => study(y, { name: 'An association study', tag: 'DNA comparison', cols: [
    ['AIM', 'Test for an association between bipolar disorder and polymorphisms in two genes: the **5-HT2C receptor** gene and the **serotonin transporter (5-HTT)** gene.'],
    ['SAMPLE', '**42** patients with bipolar I disorder and **40** healthy controls.'],
    ['RESULTS', 'No significant association for either gene overall. Female patients showed **trends** towards association with both genes.'],
  ], hiLast: false }),
  (y) => note(y, 'Conclusion', 'Variation in these genes may cause only a **minor** increase in susceptibility to bipolar disorder, possibly in women.', { align: 'middle', size: 17 }),
  (y) => evalGrid(y, [
    ['Objectivity', 'Comparing patients with controls on specific genes is objective and replicable.', '+'],
    ['Sample', 'Small for detecting small genetic effects.', '−'],
    ['Scope', 'Bipolar disorder, not unipolar depression.', '−'],
    ['Results', 'A trend is not a significant result.', '−'],
    ['Nature–nurture', 'Genes contribute a small part of the risk, supporting a combined view.', '±'],
  ], { size: 16 }),
],
'Study card for Oruč et al. (1997): an association study of the 5-HT2C receptor and serotonin transporter genes in 42 bipolar I patients and 40 controls. No significant association overall, with trends in women. The conclusion and an evaluation grid follow.',
'No significant link overall; only trends in women, suggesting a minor genetic effect.', H2.gen);

// 05 Beck's cognitive model
F('05-beck-model', 'Beck\'s cognitive theory of depression', '', [
  (y) => row(y, [
    { kicker: 'CHILDHOOD', title: 'Negative schemas form', body: 'e.g. through criticism or loss' },
    { kicker: 'LATER', title: 'A stressful event', body: 'triggers the schemas' },
    { kicker: 'RESULT', title: 'Automatic negative thoughts', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { arrows: true, gap: 40, card: { size: 16, tsize: 18, align: 'middle' } }),
  vArrows([735], 22),
  (y) => {
    const tri = [[450, y + 40], [230, y + 230], [670, y + 230]];
    let s = panel(30, y, 840, 300);
    s += path(`M${tri[0][0]},${tri[0][1] + 30} L${tri[1][0] + 40},${tri[1][1] - 20} L${tri[2][0] - 40},${tri[2][1] - 20} Z`, { stroke: C.rust, w: 3, fill: '#fbf1eb' });
    const nd = (x, yy, t2) => card(x - 110, yy - 30, 220, { title: t2, align: 'middle', tsize: 18, fill: C.cream, edge: C.olive, minH: 60, vcenter: true }).s;
    s += nd(tri[0][0], tri[0][1], 'View of the self') + nd(tri[1][0], tri[1][1], 'View of the world') + nd(tri[2][0], tri[2][1], 'View of the future');
    s += T(450, y + 170, 'NEGATIVE TRIAD', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
    return { s, h: 300 };
  },
  KL('KEPT IN PLACE BY COGNITIVE ERRORS', { anchor: 'middle' }),
  (y) => grid(y, [
    { title: 'Overgeneralisation', body: 'one failure becomes "I always fail"' },
    { title: 'Selective abstraction', body: 'one negative detail, positives ignored' },
    { title: 'Magnification and minimisation', body: 'bad events exaggerated, good ones shrunk' },
    { title: 'Personalisation', body: 'responsibility for unrelated events' },
  ], 2, { gap: 14, vgap: 12, card: { size: 16, tsize: 18 } }),
],
'A sequence: negative schemas form in childhood through criticism or loss, are triggered by a later stressful event and produce automatic negative thoughts. These form the negative triad of views of the self, the world and the future, kept in place by four cognitive errors: overgeneralisation, selective abstraction, magnification and minimisation, and personalisation.',
'Schemas, triggered by stress, produce the triad; cognitive errors keep it going.', H2.beck);

// 06 Learned helplessness and attributions
F('06-helplessness-attributions', 'Learned helplessness and attributional style', 'Seligman', [
  (y) => row(y, [
    { kicker: 'DOGS', title: 'Shocks they could not escape', body: 'later failed to escape even when they could' },
    { kicker: 'HUMANS', title: 'Repeated uncontrollable bad events', body: 'may lead to passivity and hopelessness', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { arrows: true, gap: 50, card: { size: 16, tsize: 19, bfill: C.ink } }),
  KL('REFORMULATED: HOW DEPRESSED PEOPLE EXPLAIN BAD EVENTS', { anchor: 'middle' }),
  (y) => row(y, [
    { kicker: 'INTERNAL', title: '"It\'s me"' },
    { kicker: 'STABLE', title: '"It will always be this way"' },
    { kicker: 'GLOBAL', title: '"It ruins everything"' },
  ], { gap: 14, card: { tsize: 20, align: 'middle', fill: '#f6e3d8', edge: C.rust, kfill: C.rust } }),
  (y) => note(y, 'Seligman et al. (1988)', 'Depressed patients in cognitive therapy: explanatory style became **more optimistic as depression lifted**. A link, but it does not show which comes first. Animal research raises ethical and generalisation concerns.', { size: 16 }),
],
'Dogs exposed to inescapable shocks later failed to escape when they could; applied to humans, uncontrollable bad events may lead to passivity and hopelessness. The reformulated theory adds an internal, stable and global attributional style. A note summarises Seligman et al. (1988).',
'Uncontrollable events teach helplessness; internal, stable, global explanations sustain it.', H2.lh);

// 07 Antidepressant mechanisms
F('07-antidepressants', 'How the three antidepressants work', 'Schematic synapse', [
  (y) => {
    let s = panel(30, y, 840, 330);
    // presynaptic terminal (top) and postsynaptic (bottom)
    s += `<path d="M260,${y + 30} L640,${y + 30} L640,${y + 110} Q450,${y + 150} 260,${y + 110} Z" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3"/>` + T(450, y + 70, 'sending neuron', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += `<path d="M260,${y + 300} L640,${y + 300} L640,${y + 240} Q450,${y + 210} 260,${y + 240} Z" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>` + T(450, y + 280, 'receiving neuron', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
    [[360, 170], [410, 190], [470, 175], [520, 195], [440, 205]].forEach(([cx, cy]) => { s += `<circle cx="${cx}" cy="${y + cy}" r="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`; });
    s += path(`M560,${y + 180} Q610,${y + 160} 600,${y + 118}`, { w: 3.5, extra: 'marker-end="url(#ah)"' }) + T(612, y + 182, 'reuptake', { size: 15, weight: 700 });
    s += `<line x1="575" y1="${y + 130}" x2="625" y2="${y + 160}" stroke="${C.rust}" stroke-width="6"/><line x1="625" y1="${y + 130}" x2="575" y2="${y + 160}" stroke="${C.rust}" stroke-width="6"/>`;
    s += `<rect x="290" y="${y + 166}" width="50" height="34" rx="8" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>` + T(315, y + 189, 'MAO', { size: 14, weight: 700, anchor: 'middle' }) + T(230, y + 182, 'enzyme breaks', { size: 15, anchor: 'end', fill: C.muted }) + T(230, y + 200, 'down monoamines', { size: 15, anchor: 'end', fill: C.muted });
    s += `<line x1="700" y1="${y + 214}" x2="530" y2="${y + 198}" stroke="${C.olive}" stroke-width="2"/>` + T(706, y + 220, 'monoamines', { size: 15, fill: C.olive, weight: 700 });
    return { s, h: 330 };
  },
  (y) => row(y, [
    { kicker: 'TRICYCLICS', title: 'Block reuptake', body: 'of serotonin and noradrenaline. Dry mouth, drowsiness; dangerous in overdose.' },
    { kicker: 'MAOIs', title: 'Inhibit monoamine oxidase', body: 'the enzyme that breaks down monoamines. Strict diet: tyramine-rich foods can raise blood pressure dangerously.' },
    { kicker: 'SSRIs', title: 'Block serotonin reuptake', body: 'selectively. Usually better tolerated; nausea; take weeks to work.', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 15, tsize: 18, bfill: C.ink } }),
  (y) => P('All three: easy to administer, little effort from the patient; but relapse is common when they stop, and they treat symptoms, not causes.', { anchor: 'middle', size: 16 })(y),
],
'A schematic synapse shows monoamines released into the gap, a reuptake route back into the sending neuron marked as blocked, and the MAO enzyme that breaks monoamines down. Cards explain that tricyclics block reuptake of serotonin and noradrenaline, MAOIs inhibit monoamine oxidase, and SSRIs selectively block serotonin reuptake, with side effects.',
'Tricyclics and SSRIs block reuptake; MAOIs stop the enzyme breaking monoamines down.', H2.treat);

// 08 REBT ABCDE
F('08-rebt-abcde', 'Ellis\'s REBT: from ABC to DE', '', [
  (y) => row(y, [
    { kicker: 'A', title: 'Activating event' },
    { kicker: 'B', title: 'Belief', body: 'e.g. "I must be liked by everyone"', fill: '#f6e3d8', edge: C.rust, kfill: C.rust },
    { kicker: 'C', title: 'Consequence' },
  ], { arrows: true, gap: 46, card: { size: 16, tsize: 19, align: 'middle' } }),
  vArrows([450], 24),
  (y) => card(30, y, 840, { kicker: 'D: DISPUTING THE IRRATIONAL BELIEF', body: ['**Logical**: "Does it follow that…?"', '**Empirical**: "Where is the evidence?"', '**Pragmatic**: "Does believing this help you?"'], bullets: true, size: 16, fill: C.cream, edge: C.olive, kfill: C.olive, bfill: C.ink, gap: 4 }),
  vArrows([450], 24),
  (y) => card(250, y, 400, { kicker: 'E', title: 'Effective new beliefs', align: 'middle', tsize: 20, fill: C.tealLight, edge: C.tealDark }),
  (y) => row(y, [
    { kicker: 'BECK', body: 'Tests thoughts **collaboratively** (collaborative empiricism) with a thought diary.' },
    { kicker: 'ELLIS', body: 'More **direct and confrontational** disputing.' },
    { kicker: 'BOTH', body: 'Need motivation and time; assume problems lie in thinking, not circumstances.', fill: C.panel },
  ], { gap: 14, vcenter: false, card: { size: 16, bfill: C.ink } }),
],
'An activating event leads to a belief, such as "I must be liked by everyone", which produces a consequence. Disputing challenges the belief logically, empirically or pragmatically, leading to effective new beliefs. A final row compares Beck\'s collaborative approach with Ellis\'s more direct one.',
'Dispute the irrational belief to reach an effective new one.', H2.treat);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
