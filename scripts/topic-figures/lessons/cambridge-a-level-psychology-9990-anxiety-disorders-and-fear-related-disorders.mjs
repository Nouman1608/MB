import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-psychology-9990-anxiety-disorders-and-fear-related-disorders';
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
  diag: '## 1.4.1 Diagnosis and measurement',
  expl: '## 1.4.2 Explanations of fear-related disorders',
  cc: '### Behavioural: classical conditioning',
  hans: '### Psychodynamic: Little Hans',
  treat: '## 1.4.3 Treatment and management',
  cd: '### Key study: Chapman and DeLapp (2013)',
};

// 01 Three conditions compared
F('01-three-conditions', 'Three anxiety and fear-related disorders', '', [
  (y) => row(y, [
    { kicker: 'GAD', title: 'Generalised anxiety disorder', body: ['no specific feared object', 'free-floating apprehension or excessive worry about everyday matters: family, health, money, work', 'muscle tension, restlessness, poor concentration, irritability, disturbed sleep', 'at least several months, more days than not'] },
    { kicker: 'AGORAPHOBIA', title: 'Situations where escape is hard', body: ['public transport, crowds, shops, outside the home alone', 'fear of panic or embarrassing physical symptoms', 'avoided, entered only with a companion, or endured with intense fear'] },
    { kicker: 'BII PHOBIA', title: 'Blood, injury, injections', body: ['fear on seeing or anticipating them, out of proportion to the danger', 'vasovagal response can cause fainting', 'may avoid medical and dental care'], fill: C.cream, edge: C.olive },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 19, bullets: true, gap: 7, bfill: C.ink } }),
  (y) => note(y, '', 'GAD is **not** a phobia: there is no specific feared object. BII phobia differs from other phobias in its **physical response**.', { align: 'middle', size: 17, fill: C.panel, edge: C.panelEdge }),
],
'Three columns compare generalised anxiety disorder (worry with no specific object, lasting months), agoraphobia (fear of situations where escape is hard, avoided or endured) and blood-injection-injury phobia (fear of blood, injury or injections, with a vasovagal response that can cause fainting).',
'GAD has no feared object; agoraphobia centres on escape; BII phobia can cause fainting.', H2.diag);

// 02 Vasovagal response (illustrative)
F('02-vasovagal-response', 'Why people with BII phobia may faint', 'The vasovagal response', [
  (y) => {
    const a = axes(110, y + 20, 740, 300, 'time after seeing blood or a needle', 'heart rate and blood pressure');
    const base = a.Y(0.45);
    let s = panel(30, y - 6, 840, 400) + a.s + `<line x1="110" y1="${base}" x2="850" y2="${base}" stroke="${C.panelEdge}" stroke-width="2" stroke-dasharray="7 6"/>` + T(118, base - 8, 'usual level', { size: 15, fill: C.muted });
    s += path(`M110,${base} L240,${base} C300,${base} 320,${a.Y(0.85)} 380,${a.Y(0.85)} C440,${a.Y(0.85)} 470,${a.Y(0.82)} 500,${a.Y(0.6)} C530,${a.Y(0.3)} 545,${a.Y(0.12)} 600,${a.Y(0.1)} L840,${a.Y(0.12)}`, { stroke: C.rust, w: 5 });
    s += badge(380, a.Y(0.85) - 34, 18, '1') + T(410, a.Y(0.85) - 28, 'first rise', { size: 17, weight: 700 });
    s += badge(470, a.Y(0.3), 18, '2') + T(442, a.Y(0.3) + 6, 'sharp drop', { size: 17, weight: 700, anchor: 'end' });
    s += `<rect x="620" y="${a.Y(0.1) - 74}" width="210" height="50" rx="10" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + T(725, a.Y(0.1) - 43, 'fainting possible', { size: 18, weight: 700, anchor: 'middle' });
    return { s, h: 394 };
  },
  (y) => note(y, '', 'Other phobias do not show this drop, which is why BII phobia needs a different treatment: **applied tension**.', { align: 'middle', size: 17 }),
],
'A schematic line for heart rate and blood pressure rises at first after seeing blood or a needle, then drops sharply below the usual level, when fainting is possible. The curve is illustrative, with no data from the lesson.',
'Heart rate and blood pressure rise, then drop sharply: the vasovagal response.', H2.diag);

// 03 Measures
{
  const W = 780, x0 = 60, u = W / 21;
  F('03-gad7-and-bipi', 'Measuring anxiety', 'Two self-report scales', [
    (y) => card(30, y, 840, { kicker: 'GAD-7', title: '7 items about the last two weeks, each scored 0 to 3', body: '0 = not at all … 3 = nearly every day', size: 16, tsize: 19 }),
    (y) => {
      const bands = [[0, 5, 'below mild', C.panel], [5, 10, 'mild', C.tealLight], [10, 15, 'moderate', C.teal], [15, 21, 'severe', C.mustard]];
      let s = '';
      bands.forEach(([a, b, l, f]) => { s += `<rect x="${x0 + a * u}" y="${y + 10}" width="${(b - a) * u}" height="60" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 + ((a + b) / 2) * u, y + 47, l, { size: 18, weight: 700, anchor: 'middle' }); });
      [0, 5, 10, 15, 21].forEach((v) => { s += `<line x1="${x0 + v * u}" y1="${y + 70}" x2="${x0 + v * u}" y2="${y + 82}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 + v * u, y + 104, String(v), { size: 18, weight: 700, anchor: 'middle' }); });
      s += T(450, y + 134, 'total score 0 to 21; thresholds of 5, 10 and 15 are commonly used', { size: 16, anchor: 'middle', fill: C.muted });
      return { s, h: 140 };
    },
    (y) => card(30, y, 840, { kicker: 'BLOOD INJECTION PHOBIA INVENTORY (BIPI)', title: 'Situations involving blood and injections', body: 'Records **cognitive, physiological and behavioural** responses to each situation. Mas et al. (2010) examined it as a psychometric measure.', size: 16, tsize: 19 }),
    (y) => row(y, [
      { kicker: '+ STRENGTHS', body: 'Quick; quantitative data that can track change.', fill: C.tealLight, edge: C.tealDark },
      { kicker: '− WEAKNESSES', kfill: C.rust, body: 'Subjective: people may under-report; imagined situations may not match behaviour in a real clinic.' },
    ], { gap: 14, vcenter: false, card: { size: 16, bfill: C.ink } }),
  ],
  'The GAD-7 has seven items scored 0 to 3, giving a total of 0 to 21; a bar marks thresholds at 5, 10 and 15 for mild, moderate and severe anxiety. The BIPI records cognitive, physiological and behavioural responses to blood and injection situations. Strengths and weaknesses of both follow.',
  'GAD-7 totals 0 to 21, with cut-offs at 5, 10 and 15.', H2.diag);
}

// 04 Little Albert and two-process theory
{
  const box = (x, y, w, label, sub, fill = C.panel, edge = C.panelEdge) => card(x, y, w, { title: label, body: sub, align: 'middle', size: 15, tsize: 18, pad: 12, fill, edge, minH: 74, vcenter: true }).s;
  const stage = (y, n, title, inner) => panel(30, y, 840, 126) + badge(64, y + 70, 20, n, C.cream) + T(110, y + 28, title, { size: 15, weight: 700, fill: C.tealDark }) + inner;
  F('04-little-albert', 'Little Albert: learning a fear', 'Watson and Rayner (1920)', [
    (y) => ({ s: stage(y, '1', 'BEFORE (about 9 months)', box(110, y + 40, 210, 'White rat', 'neutral: no fear') + box(370, y + 40, 210, 'Loud noise', 'steel bar struck') + arrow(586, y + 77, 630, y + 77) + box(636, y + 40, 210, 'Startled', 'unconditioned response', C.cream, C.olive)), h: 126 }),
    (y) => ({ s: stage(y, '2', 'DURING (about 11 months)', box(110, y + 40, 470, 'Rat + loud noise together', 'twice, then five more times a week later') + arrow(586, y + 77, 630, y + 77) + box(636, y + 40, 210, 'Startled', '', C.cream, C.olive)), h: 126 }),
    (y) => ({ s: stage(y, '3', 'AFTER', box(110, y + 40, 470, 'Rat alone', 'now a conditioned stimulus') + arrow(586, y + 77, 630, y + 77) + box(636, y + 40, 210, 'Cried, crawled away', 'conditioned fear', C.cream, C.olive)), h: 126 }),
    (y) => ({ s: stage(y, '4', 'DAYS LATER: GENERALISATION', box(110, y + 40, 470, 'Rabbit, dog, fur coat, mask', 'similar objects') + arrow(586, y + 77, 630, y + 77) + box(636, y + 40, 210, 'Fear', '', C.cream, C.olive)), h: 126 }),
    (y) => row(y, [
      { kicker: 'TWO-PROCESS THEORY: STEP 1', title: 'Acquired', body: 'by classical conditioning' },
      { kicker: 'STEP 2', title: 'Maintained', body: 'by operant conditioning: avoiding the object reduces anxiety (negative reinforcement), so the person never learns it is safe', fill: C.tealLight, edge: C.tealDark },
    ], { arrows: true, gap: 50, fr: [1, 1.6], card: { size: 16, tsize: 19, bfill: C.ink } }),
  ],
  'Four stages of the Little Albert study: a white rat caused no fear while a loud noise caused startle; the rat was paired with the noise; the rat alone then caused crying and crawling away; the fear generalised to a rabbit, dog, fur coat and mask. Two-process theory adds that avoidance maintains the fear through negative reinforcement.',
  'Fear is learned by pairing, spreads by generalisation and is kept by avoidance.', H2.cc, { gap: 12 });
}

// 05 Little Hans: two readings
F('05-little-hans', 'Little Hans: two explanations of one phobia', 'Freud (1909): a five-year-old boy\'s fear of horses', [
  (y) => card(170, y, 560, { title: 'Fear that a horse would bite him or fall down', body: 'began after he saw a horse pulling a bus collapse in the street', align: 'middle', size: 16, tsize: 19 }),
  (y) => ({ s: arrow(370, y - 16, 240, y + 26, { w: 3 }) + arrow(530, y - 16, 660, y + 26, { w: 3 }), h: 24 }),
  (y) => {
    const L = card(30, y, 410, { kicker: 'FREUD\'S INTERPRETATION', title: 'Displaced anxiety about his father', body: ['part of the **Oedipus complex**', 'black around horses\' mouths → father\'s **moustache**', 'blinkers → father\'s **glasses**', 'phobia resolved as Hans worked through fantasies'], bullets: true, size: 16, tsize: 19, bfill: C.ink, fill: C.cream, edge: C.olive, kfill: C.olive, gap: 6 });
    const R = card(460, y, 410, { kicker: 'SIMPLER ALTERNATIVE', title: 'Classical conditioning', body: ['fear learned after seeing the horse accident', 'fits the facts more simply'], bullets: true, size: 16, tsize: 19, bfill: C.ink, fill: C.tealLight, edge: C.tealDark, gap: 6 });
    const h = Math.max(L.h, R.h);
    return { s: card(30, y, 410, { kicker: 'FREUD\'S INTERPRETATION', title: 'Displaced anxiety about his father', body: ['part of the **Oedipus complex**', 'black around horses\' mouths → father\'s **moustache**', 'blinkers → father\'s **glasses**', 'phobia resolved as Hans worked through fantasies'], bullets: true, size: 16, tsize: 19, bfill: C.ink, fill: C.cream, edge: C.olive, kfill: C.olive, gap: 6, minH: h }).s + card(460, y, 410, { kicker: 'SIMPLER ALTERNATIVE', title: 'Classical conditioning', body: ['fear learned after seeing the horse accident', 'fits the facts more simply'], bullets: true, size: 16, tsize: 19, bfill: C.ink, fill: C.tealLight, edge: C.tealDark, gap: 6, minH: h }).s, h };
  },
  (y) => row(y, [
    { kicker: '+ STRENGTH', body: 'Rich, idiographic detail.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− WEAKNESSES', kfill: C.rust, body: 'Subjective, unfalsifiable interpretations; Freud worked mostly from the father\'s letters, and the father, a supporter of Freud, may have led the answers.' },
  ], { gap: 14, fr: [1, 2], vcenter: false, card: { size: 16, bfill: C.ink } }),
],
'Little Hans feared horses after seeing a bus horse collapse. Freud read the fear as displaced anxiety about his father in the Oedipus complex, linking horses\' black mouths and blinkers to the father\'s moustache and glasses; a simpler explanation is classical conditioning after the accident. Strength and weaknesses follow.',
'Freud saw a hidden fear of father; conditioning after the accident fits more simply.', H2.hans);

// 06 Systematic desensitisation versus applied tension
F('06-sd-vs-applied-tension', 'Relax or tense?', 'Why BII phobia needs a different treatment', [
  (y) => row(y, [
    { kicker: 'SYSTEMATIC DESENSITISATION', title: 'Reciprocal inhibition', body: 'Relaxation and fear cannot be felt at the same time.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'APPLIED TENSION (BII PHOBIA)', title: 'Raise blood pressure', body: 'Tension counteracts the drop in blood pressure that causes fainting.', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 20, vcenter: false, card: { size: 17, tsize: 20, bfill: C.ink } }),
  (y) => {
    const L = steps(y, [
      { title: 'Learn relaxation' },
      { title: 'Build a hierarchy', body: 'of feared situations' },
      { title: 'Work up step by step', body: 'while relaxed, in imagination or real life' },
    ], { x: 30, w: 410, size: 16, tsize: 18, pad: 14 });
    const R = steps(y, [
      { title: 'Tense large muscles', body: 'arms, legs and torso' },
      { title: 'Hold several seconds', body: 'until the face feels warm' },
      { title: 'Release, then repeat' },
    ], { x: 460, w: 410, size: 16, tsize: 18, pad: 14 });
    return { s: L.s + R.s, h: Math.max(L.h, R.h) };
  },
  (y) => note(y, 'For BII phobia, relaxation can be counter-productive', 'Relaxation lowers blood pressure further, adding to the drop that causes fainting. CBT adds psychoeducation, challenging catastrophic beliefs ("I will faint and die") and graded exposure.', { size: 17 }),
],
'Two columns contrast systematic desensitisation (learn relaxation, build a hierarchy, work up it while relaxed, based on reciprocal inhibition) with applied tension (tense large muscles until the face feels warm, release, repeat) which raises blood pressure. A note explains that relaxation can worsen fainting in BII phobia.',
'Relaxation suits most phobias; tension stops the fainting in BII phobia.', H2.treat);

// 07 Chapman and DeLapp study card
F('07-chapman-delapp', 'Key study: Chapman and DeLapp (2013)', 'Case study of "T", a 42-year-old man who fainted during blood tests', [
  (y) => row(y, [
    { kicker: 'METHOD', body: 'Diagnostic interview; questionnaires including the **Beck Anxiety Inventory (BAI)**; SUDS ratings (0–100).' },
    { kicker: 'TREATMENT', body: 'Nine sessions of manualised CBT: psychoeducation, cognitive restructuring, a fear hierarchy; **applied tension from session 5**, used during graded exposure.' },
  ], { gap: 14, vcenter: false, card: { size: 16, bfill: C.ink } }),
  KL('EXPOSURE STEPS, EASIEST TO HARDEST'),
  (y) => row(y, [
    { body: 'Tourniquet on the arm' }, { body: 'Videos of blood draws' }, { body: 'Finger-prick with a glucometer' }, { body: 'Watching blood donation' }, { body: '**Own blood drawn in session 9**', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 26, card: { size: 15, align: 'middle', bfill: C.ink, pad: 12 } }),
  (y) => {
    const x0 = 230, sc = 12;
    let s = panel(30, y, 840, 182) + T(50, y + 34, 'RESULTS: BAI SCORE', { size: 15, weight: 700, fill: C.tealDark });
    s += T(210, y + 76, 'before', { size: 17, anchor: 'end' }) + `<rect x="${x0}" y="${y + 56}" width="${41 * sc}" height="30" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 + 41 * sc + 12, y + 79, '41', { size: 20, weight: 700 });
    s += T(210, y + 120, 'after', { size: 17, anchor: 'end' }) + `<rect x="${x0}" y="${y + 100}" width="${7 * sc}" height="30" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 + 7 * sc + 12, y + 123, '7', { size: 20, weight: 700 });
    s += T(450, y + 164, 'SUDS fell within and across sessions; less need for applied tension; gains kept at follow-ups up to 12 months', { size: 15, fill: C.muted, anchor: 'middle' });
    return { s, h: 182 };
  },
  (y) => row(y, [
    { kicker: '+ STRENGTHS', body: 'Rich detail; a replicable, manualised approach.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− WEAKNESSES', kfill: C.rust, body: 'One participant; self-report measures; no control comparison.' },
  ], { gap: 14, vcenter: false, card: { size: 16, bfill: C.ink } }),
],
'Study card for Chapman and DeLapp (2013): method and nine-session CBT treatment with applied tension from session 5; five exposure steps from a tourniquet to having his own blood drawn; Beck Anxiety Inventory falling from 41 to 7 with gains kept up to 12 months; strengths and weaknesses.',
'Graded exposure with applied tension cut T\'s BAI score from 41 to 7.', H2.cd);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
