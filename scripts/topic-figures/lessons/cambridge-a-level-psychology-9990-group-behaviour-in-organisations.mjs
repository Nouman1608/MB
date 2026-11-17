import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-psychology-9990-group-behaviour-in-organisations';
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
  stages: '## 4.3.1 Stages of group development',
  belbin: '## Belbin\'s nine team roles',
  faulty: '## Faulty decision-making',
  sf: '## 4.3.2 Social facilitation and social loafing',
  cs: '## Key study: Claypoole and Szalma (2019), experiment 1',
  conflict: '## 4.3.3 Conflict at work',
};

// 01 Tuckman stages
{
  const st = [
    ['Forming', 'polite, uncertain, dependent on the leader'],
    ['Storming', 'conflict over roles, goals and leadership'],
    ['Norming', 'agreed rules and roles; cohesion grows'],
    ['Performing', 'works effectively towards its goal'],
    ['Adjourning', 'task ends; the group disbands'],
  ];
  F('01-tuckman-stages', 'Stages of group development', 'Tuckman; adjourning added later with Jensen', [
    (y) => {
      const w = 150, gap = 22.5; let s = '';
      st.forEach(([n, d], i) => {
        const x = 30 + i * (w + gap);
        s += card(x, y, w, { kicker: `STAGE ${i + 1}`, title: n, body: d, size: 15, tsize: 18, pad: 14, minH: 170, fill: i === 3 ? C.cream : C.panel, edge: i === 3 ? C.olive : C.panelEdge }).s;
        if (i < 4) s += arrow(x + w + 2, y + 85, x + w + gap - 2, y + 85, { w: 3 });
      });
      // loop back from performing to storming
      const xs = 30 + 1 * (w + gap) + w / 2, xp = 30 + 3 * (w + gap) + w / 2;
      s += path(`M${xp},${y + 172} L${xp},${y + 216} L${xs},${y + 216} L${xs},${y + 180}`, { stroke: C.rust, w: 3.5, extra: 'stroke-dasharray="9 7" marker-end="url(#ahR)"' });
      s += T((xs + xp) / 2, y + 242, 'groups may return to storming, e.g. when membership changes', { size: 16, weight: 600, anchor: 'middle', fill: C.rust });
      return { s, h: 250 };
    },
    (y) => card(30, y, 840, { kicker: 'EXAMPLE: A NEW PROJECT TEAM', body: 'first meeting, roles unclear → disagreement about who leads the design → weekly meeting routine agreed → product delivered on time → team celebrates and members move on', size: 16, bfill: C.ink }),
  ],
  'Five stages in sequence: forming, storming, norming, performing and adjourning, each with what happens. A dashed arrow shows that groups may return from performing to storming when membership changes. A project-team example runs along the bottom.',
  'Groups form, storm, norm, perform and adjourn, but not always in order.', H2.stages);
}

// 02 Belbin roles
F('02-belbin-roles', 'Belbin\'s nine team roles', 'Balanced teams outperformed teams of similarly able individuals', [
  (y) => row(y, [
    { kicker: 'THINKING ROLES', body: ['**Plant**: creative ideas', '**Monitor evaluator**: judges options logically', '**Specialist**: expert knowledge'], fill: C.tealLight, edge: C.tealDark },
    { kicker: 'PEOPLE ROLES', body: ['**Co-ordinator**: clarifies goals, delegates', '**Teamworker**: supports, resolves friction', '**Resource investigator**: explores outside contacts'], fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'ACTION ROLES', body: ['**Shaper**: drives the team forward', '**Implementer**: turns ideas into practical plans', '**Completer finisher**: checks details and deadlines'], fill: C.panel },
  ], { gap: 14, vcenter: false, card: { size: 16, gap: 12, bfill: C.ink } }),
  (y) => row(y, [
    { kicker: '+ STRENGTH', body: 'Widely used in team building.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− WEAKNESSES', kfill: C.rust, body: 'Roles are measured by self-report; people may play different roles in different teams.' },
  ], { gap: 14, fr: [1, 2], vcenter: false, card: { size: 16, bfill: C.ink } }),
],
'Belbin\'s nine roles in three groups: thinking (plant, monitor evaluator, specialist), people (co-ordinator, teamworker, resource investigator) and action (shaper, implementer, completer finisher), each with its contribution. A strength and weaknesses follow.',
'A balanced team covers thinking, people and action roles.', H2.belbin);

// 03 Groupthink
F('03-groupthink', 'Groupthink and how to avoid it', 'Janis: in a cohesive group, the desire for agreement overrides realistic appraisal', [
  (y) => grid(y, [
    { title: 'Illusion of invulnerability', body: '"Our product can\'t fail."' },
    { title: 'Collective rationalisation', body: 'customer warning signs explained away' },
    { title: 'Belief in the group\'s morality', body: '"We\'re the good guys, so this is right."' },
    { title: 'Stereotyping outsiders', body: 'competitors dismissed as incompetent' },
    { title: 'Pressure on dissenters', body: 'a doubter told to be a team player' },
    { title: 'Self-censorship', body: 'members keep doubts to themselves' },
    { title: 'Illusion of unanimity', body: 'silence taken as agreement' },
    { title: 'Mindguards', body: 'shield the leader from bad news' },
  ], 4, { gap: 12, vgap: 12, card: { size: 15, tsize: 17, pad: 14, fill: '#f6e3d8', edge: C.rust } }),
  vArrows([450], 26, { label: '' }),
  (y) => card(30, y, 840, { kicker: 'STRATEGIES TO AVOID IT', body: ['the leader stays impartial and **speaks last**', 'appoint a **devil\'s advocate**', 'invite **outside experts**', 'split the group into **subgroups**', 'hold a **"second-chance" meeting** before the final decision'], bullets: true, size: 16, fill: C.tealLight, edge: C.tealDark, bfill: C.ink, gap: 4 }),
],
'Eight features of groupthink, each with a workplace example, from illusion of invulnerability to mindguards. An arrow leads to five strategies: an impartial leader who speaks last, a devil\'s advocate, outside experts, subgroups and a second-chance meeting.',
'Eight warning signs of groupthink, and five ways to break it.', H2.faulty);

// 04 Drive theory
F('04-drive-theory', 'Social facilitation: drive theory', 'Zajonc', [
  (y) => card(250, y, 400, { title: 'Presence of others', align: 'middle', tsize: 20 }),
  vArrows([450], 22),
  (y) => card(250, y, 400, { title: 'Arousal rises', align: 'middle', tsize: 20, fill: C.cream, edge: C.olive }),
  vArrows([450], 22),
  (y) => card(250, y, 400, { title: 'Dominant response more likely', align: 'middle', tsize: 20, fill: C.cream, edge: C.olive }),
  (y) => ({ s: arrow(370, y - 16, 240, y + 26, { w: 3 }) + arrow(530, y - 16, 660, y + 26, { w: 3 }), h: 24 }),
  (y) => row(y, [
    { kicker: 'SIMPLE OR WELL-LEARNED TASK', title: 'Dominant response is correct', body: '→ performance improves', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'COMPLEX OR NEW TASK', kfill: C.rust, title: 'Dominant response is often wrong', body: '→ performance gets worse', fill: '#f6e3d8', edge: C.rust },
  ], { gap: 40, card: { size: 17, tsize: 19, align: 'middle', bfill: C.ink } }),
  (y) => note(y, 'Evaluation apprehension (Cottrell)', 'It is concern about **being judged**, not mere presence, that raises arousal.', { align: 'middle', size: 17, fill: C.panel, edge: C.panelEdge }),
],
'A flow from the presence of others to raised arousal to a more likely dominant response. On simple or well-learned tasks the dominant response is correct and performance improves; on complex or new tasks it is often wrong and performance worsens. A note gives Cottrell\'s evaluation apprehension alternative.',
'Others raise arousal: good for easy tasks, bad for hard ones.', H2.sf);

// 05 Social impact theory and Earley
F('05-social-loafing', 'Social loafing', 'Reduced individual effort when working collectively', [
  (y) => row(y, [
    { kicker: 'STRENGTH', title: 'status or importance' },
    { kicker: 'IMMEDIACY', title: 'closeness' },
    { kicker: 'NUMBER', title: 'how many' },
  ], { gap: 14, card: { size: 16, tsize: 19, align: 'middle', fill: C.cream, edge: C.olive, kfill: C.olive } }),
  (y) => {
    let s = panel(30, y, 840, 170) + T(50, y + 32, 'SOCIAL IMPACT THEORY (LATANÉ): AN INSTRUCTION AIMED AT A GROUP', { size: 15, weight: 700, fill: C.tealDark });
    const person = (cx, cy, f) => `<circle cx="${cx}" cy="${cy}" r="13" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/><path d="M${cx - 19},${cy + 36} Q${cx - 19},${cy + 16} ${cx},${cy + 16} Q${cx + 19},${cy + 16} ${cx + 19},${cy + 36} Z" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += person(140, y + 82, C.mustard) + T(140, y + 150, 'alone: full impact', { size: 16, anchor: 'middle', weight: 600 });
    for (let i = 0; i < 3; i++) s += person(300 + i * 52, y + 82, C.cream);
    s += T(352, y + 150, '3 people: shared', { size: 16, anchor: 'middle', weight: 600 });
    for (let i = 0; i < 10; i++) s += person(500 + i * 37, y + 82, C.panel);
    s += T(667, y + 150, '10 people: each feels less responsible', { size: 16, anchor: 'middle', weight: 600 });
    return { s, h: 170 };
  },
  (y) => table(y, [{ w: 1.2, head: 'Earley (1993): managers' }, { w: 1, head: 'Alone' }, { w: 1, head: 'With an in-group' }, { w: 1, head: 'With an out-group' }], [
    ['USA (individualist)', '**performed best**', '', ''],
    ['China and Israel (collectivist)', '', '**performed best**', 'loafed'],
  ], { size: 16, cellFill: (ri, ci) => (ri === 0 && ci === 1) || (ri === 1 && ci === 2) ? C.cream : ri === 1 && ci === 3 ? '#f6e3d8' : null }),
  (y) => P('Loafing is not universal: it depends on cultural values and who the group is.', { anchor: 'middle', size: 17, fill: C.ink })(y),
],
'The three factors of social impact theory (strength, immediacy, number), and a picture of an instruction\'s impact divided among one, three and ten people. A table of Earley (1993) shows American managers performing best alone, while Chinese and Israeli managers performed best with an in-group and loafed with an out-group.',
'Impact is divided among the group; culture changes who loafs.', H2.sf);

// 06 Claypoole and Szalma
F('06-claypoole-szalma', 'Key study: Claypoole and Szalma (2019)', 'Experiment 1: does social facilitation apply to being monitored?', [
  (y) => study(y, { name: 'Electronic performance monitoring and vigilance', tag: 'laboratory experiment', cols: [
    ['AIM', 'To investigate how different forms of monitoring affect sustained attention (vigilance).'],
    ['TASK', 'Detect infrequent critical signals over a long period.'],
    ['MEASURE', 'Vigilance performance, such as correct detections of critical signals.'],
  ], hiLast: false }),
  KL('MONITORING CONDITIONS, SUCH AS', { anchor: 'middle' }),
  (y) => row(y, [
    { title: 'Working alone', body: 'unmonitored' }, { title: 'Observer present', body: 'physical presence', fill: C.tealLight, edge: C.tealDark }, { title: 'Electronic monitoring', body: 'software records activity', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, card: { size: 16, tsize: 19, align: 'middle' } }),
  (y) => note(y, 'Findings', 'Being monitored, including electronically, affected vigilance compared with working unmonitored: social facilitation through monitoring as well as physical presence.', { size: 16 }),
  (y) => row(y, [
    { kicker: '+ STRENGTHS', body: 'Laboratory control allows causal conclusions; the task resembles some monitoring jobs, such as security screening.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− WEAKNESSES', kfill: C.rust, body: 'One session is not a working day; participants were not employees whose jobs depended on the data; ethics of monitoring workers.' },
  ], { gap: 14, vcenter: false, card: { size: 16, bfill: C.ink } }),
],
'Study card for Claypoole and Szalma (2019), experiment 1: aim, vigilance task and measure; conditions such as working alone, with an observer or under electronic monitoring; the finding that monitoring affected vigilance compared with working unmonitored; strengths and weaknesses.',
'Being watched electronically can act like being watched in person.', H2.cs);

// 07 Thomas-Kilmann grid
{
  const P0 = { x: 175, y: 0, w: 660, h: 420 };
  F('07-thomas-kilmann', 'Thomas–Kilmann conflict-handling modes', 'Five modes on two dimensions', [
    (y) => {
      const X0 = P0.x, Y0 = y + 10, W = P0.w, Hh = P0.h;
      const px = (v) => X0 + v * W, py = (v) => Y0 + Hh - v * Hh;
      let s = `<rect x="${X0}" y="${Y0}" width="${W}" height="${Hh}" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>`;
      s += arrow(X0, Y0 + Hh, X0 + W + 20, Y0 + Hh, { w: 3 }) + arrow(X0, Y0 + Hh, X0, Y0 - 16, { w: 3 });
      s += T(X0 + W / 2, Y0 + Hh + 36, 'Cooperativeness: meeting others\' concerns →', { size: 17, weight: 700, anchor: 'middle' });
      s += `<text x="${X0 - 26}" y="${Y0 + Hh / 2}" font-size="17" font-weight="700" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${X0 - 26} ${Y0 + Hh / 2})">Assertiveness: meeting own concerns →</text>`;
      const mode = (u, v, name, use, f) => card(px(u) - 115, py(v) - 46, 230, { title: name, body: use, size: 15, tsize: 19, align: 'middle', pad: 12, fill: f, edge: C.ink, minH: 92, vcenter: true }).s;
      s += mode(0.2, 0.84, 'Competing', 'emergencies; unpopular but necessary decisions', '#f6e3d8');
      s += mode(0.8, 0.84, 'Collaborating', 'important issues needing a solution both accept', C.tealLight);
      s += mode(0.5, 0.5, 'Compromising', 'time pressure; equal power', C.cream);
      s += mode(0.2, 0.16, 'Avoiding', 'trivial issues; cooling-off', C.bg);
      s += mode(0.8, 0.16, 'Accommodating', 'preserving a relationship', C.cream);
      return { s, h: Hh + 56 };
    },
    (y) => note(y, '', '**Collaborating**: both win. **Compromising**: both give up something.', { align: 'middle', size: 17, fill: C.panel, edge: C.panelEdge }),
  ],
  'A grid with cooperativeness across and assertiveness up. Competing is high assertive, low cooperative; collaborating is high on both; compromising sits in the middle; avoiding is low on both; accommodating is low assertive, high cooperative. Each mode lists when it is useful.',
  'Five modes set by how assertive and how cooperative you are.', H2.conflict);
}

// 08 Bullying types and phases
F('08-bullying', 'Bullying at work', 'Einarsen (1999)', [
  (y) => P('Repeated negative acts over time against someone who finds it hard to defend themselves.', { anchor: 'middle', size: 18, fill: C.ink })(y),
  (y) => row(y, [
    { kicker: 'WORK-RELATED', body: 'unreasonable deadlines, withholding information' },
    { kicker: 'PERSON-RELATED', body: 'insults, spreading rumours' },
    { kicker: 'PREDATORY', body: 'target singled out without provoking it', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'DISPUTE-RELATED', body: 'arises from an escalating conflict', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 12, vcenter: false, card: { size: 16, bfill: C.ink, pad: 16 } }),
  KL('PHASES', { anchor: 'middle' }),
  (y) => row(y, [
    { title: 'Aggressive behaviour' }, { title: 'Bullying' }, { title: 'Stigmatisation of the target' }, { title: 'Severe trauma', fill: '#f6e3d8', edge: C.rust },
  ], { arrows: true, gap: 34, card: { tsize: 18, align: 'middle', pad: 14 } }),
  (y) => note(y, 'Causes', 'the bully\'s personality · the target\'s position · organisational factors such as poor leadership and high stress', { align: 'middle', size: 17, fill: C.panel, edge: C.panelEdge }),
],
'Four types of bullying in two pairs: work-related and person-related, predatory and dispute-related, with examples. Four phases follow in sequence: aggressive behaviour, bullying, stigmatisation of the target and severe trauma. A note lists causes.',
'Bullying escalates from aggressive acts to severe trauma.', H2.conflict);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
