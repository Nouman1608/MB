import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-psychology-9990-obsessive-compulsive-disorder-ocd';
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
  diag: '## 1.5.1 Diagnosis and measurement',
  psy: '### Psychological',
  treat: '## 1.5.3 Treatment and management',
  lov: '### Key study: Lovell et al. (2006)',
};

// 01 Obsessions and compulsions
{
  const pairs = [
    ['Contamination by germs or dirt', 'Washing, cleaning, avoiding touching things'],
    ['Harm: an accident, fire or injury', 'Checking locks, switches, the route driven'],
    ['Symmetry and exactness', 'Ordering, arranging, repeating until "just right"'],
    ['Unwanted aggressive, sexual or religious thoughts', 'Mental rituals, praying, seeking reassurance'],
  ];
  F('01-obsessions-compulsions', 'Obsessions and the compulsions they drive', 'ICD-11: obsessions, compulsions, or usually both', [
    (y) => row(y, [
      { kicker: 'OBSESSIONS', title: 'Thoughts, images or urges', body: 'repetitive, intrusive, unwanted; usually cause anxiety', fill: '#f6e3d8', edge: C.rust, kfill: C.rust },
      { kicker: 'COMPULSIONS', title: 'Behaviours or mental acts', body: 'performed in response to an obsession, by rigid rules, or for "completeness"', fill: C.tealLight, edge: C.tealDark },
    ], { arrows: true, gap: 50, vcenter: false, card: { size: 16, tsize: 19, bfill: C.ink } }),
    ...pairs.map(([o, c]) => (y) => {
      const a = card(30, y, 395, { body: o, size: 16, bfill: C.ink, minH: 60, vcenter: true });
      const b = card(475, y, 395, { body: c, size: 16, bfill: C.ink, minH: 60, vcenter: true });
      const h = Math.max(a.h, b.h);
      return { s: card(30, y, 395, { body: o, size: 16, bfill: C.ink, minH: h, vcenter: true }).s + card(475, y, 395, { body: c, size: 16, bfill: C.ink, minH: h, vcenter: true }).s + arrow(431, y + h / 2, 469, y + h / 2, { w: 3 }), h };
    }),
    (y) => row(y, [
      { kicker: 'SEVERITY', body: 'Time-consuming (e.g. more than an hour a day), or significant distress or impairment.' },
      { kicker: 'INSIGHT', body: '**Fair to good**: recognises beliefs may not be true. **Poor to absent**: convinced they are.', fill: C.cream, edge: C.olive, kfill: C.olive },
    ], { gap: 14, vcenter: false, card: { size: 16, bfill: C.ink } }),
  ],
  'Obsessions (intrusive thoughts, images or urges) drive compulsions (behaviours or mental acts). Four pairs follow: contamination leads to washing; harm to checking; symmetry to ordering; unwanted aggressive, sexual or religious thoughts to mental rituals, praying or reassurance-seeking. Cards cover severity and the insight specifier.',
  'Each type of obsession has its typical compulsion.', H2.diag, { gap: 12 });
}

// 02 MOCI vs Y-BOCS
F('02-moci-ybocs', 'Two measures of OCD', '', [
  (y) => row(y, [
    { kicker: 'SELF-REPORT', title: 'MOCI', body: ['Maudsley Obsessive-Compulsive Inventory', '**30 true/false** items', 'subscales: checking, cleaning, slowness, doubting'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'CLINICIAN-RATED', title: 'Y-BOCS', body: ['Yale-Brown Obsessive-Compulsive Scale', 'semi-structured interview: **10 items**, 5 obsessions + 5 compulsions', 'each 0–4: time, interference, distress, resistance, control', 'total **0–40**; higher = more severe'], bullets: true, fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 20, vcenter: false, card: { size: 16, tsize: 22, gap: 5, bfill: C.ink } }),
  (y) => {
    let s = '';
    for (let i = 0; i < 30; i++) s += `<rect x="${30 + (i % 10) * 39}" y="${y + Math.floor(i / 10) * 30}" width="32" height="24" rx="4" fill="${C.panel}" stroke="${C.tealDark}" stroke-width="2"/>` + T(46 + (i % 10) * 39, y + 17 + Math.floor(i / 10) * 30, 'T/F', { size: 11, anchor: 'middle', fill: C.tealDark });
    for (let i = 0; i < 10; i++) s += `<rect x="${475 + (i % 5) * 79}" y="${y + Math.floor(i / 5) * 46}" width="72" height="38" rx="5" fill="${i < 5 ? C.cream : C.sand}" stroke="${C.olive}" stroke-width="2"/>` + T(511 + (i % 5) * 79, y + 25 + Math.floor(i / 5) * 46, '0–4', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
    s += T(225, y + 112, 'one box per item', { size: 15, anchor: 'middle', fill: C.muted }) + T(672, y + 112, 'top row obsessions, bottom row compulsions', { size: 15, anchor: 'middle', fill: C.muted });
    return { s, h: 118 };
  },
  (y) => row(y, [
    { kicker: 'EVALUATION', body: 'Quick and cheap, but true/false answers give little detail about severity.' },
    { kicker: 'EVALUATION', body: 'Rates severity whatever the symptom type; used to measure change in trials. Needs training; depends on inter-rater reliability.' },
  ], { gap: 20, vcenter: false, card: { size: 16, bfill: C.ink } }),
],
'The MOCI is a self-report of 30 true or false items with checking, cleaning, slowness and doubting subscales. The Y-BOCS is a clinician-rated interview of 10 items, five on obsessions and five on compulsions, each scored 0 to 4 for a total of 0 to 40. Evaluation points for each follow.',
'MOCI: 30 quick true/false items. Y-BOCS: 10 clinician-rated items, 0 to 40.', H2.diag);

// 03 Cognitive explanation
F('03-cognitive-explanation', 'The cognitive explanation of OCD', 'Why a normal intrusive thought becomes an obsession', [
  (y) => card(170, y, 560, { title: 'An intrusive thought', body: 'most people experience these occasionally', align: 'middle', size: 16, tsize: 20 }),
  vArrows([450], 22),
  (y) => card(170, y, 560, { title: 'Interpreted as meaningful and dangerous', align: 'middle', tsize: 20, fill: '#f6e3d8', edge: C.rust }),
  (y) => row(y, [
    { kicker: 'INFLATED RESPONSIBILITY', body: '"If I don\'t check, any fire will be my fault."' },
    { kicker: 'OVERESTIMATION OF THREAT', body: 'the danger is judged far greater than it is' },
    { kicker: 'THOUGHT-ACTION FUSION', body: 'thinking it makes it more likely, or is as bad as doing it' },
  ], { gap: 14, card: { size: 16, bfill: C.ink, fill: C.cream, edge: C.olive, kfill: C.olive } }),
  vArrows([450], 22),
  (y) => card(170, y, 560, { title: 'Compulsion', body: 'an attempt to prevent harm and reduce responsibility', align: 'middle', size: 16, tsize: 20, fill: C.tealLight, edge: C.tealDark }),
  (y) => P('Evaluation: explains why normal intrusions become distressing and supports CBT, but faulty thinking may be a **consequence** of anxiety rather than its cause.', { anchor: 'middle', size: 16, w: 800, x: 50 })(y),
],
'An intrusive thought, which most people have, is interpreted as meaningful and dangerous through thinking errors: inflated responsibility, overestimation of threat and thought-action fusion. The compulsion is an attempt to prevent harm and reduce responsibility. An evaluation line follows.',
'Thinking errors turn ordinary intrusive thoughts into obsessions.', H2.psy);

// 04 Psychodynamic explanation
F('04-psychodynamic', 'The psychodynamic explanation (Freud)', '', [
  (y) => row(y, [
    { kicker: 'ID', title: 'Unacceptable impulses', fill: '#f6e3d8', edge: C.rust, kfill: C.rust },
    { kicker: 'EGO', title: 'Attempts to control them', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 90, card: { tsize: 19, align: 'middle' } }),
  (y) => ({ s: T(450, y - 34, '⟷', { size: 30, weight: 700, anchor: 'middle' }) + T(450, y - 10, 'conflict', { size: 15, weight: 700, anchor: 'middle', fill: C.muted }), h: 0 }),
  (y) => note(y, 'Anal-stage fixation', 'e.g. through very strict toilet training, producing a preoccupation with **order and cleanliness**.', { size: 16, fill: C.cream, edge: C.olive, align: 'middle' }),
  KL('DEFENCE MECHANISMS', { anchor: 'middle' }),
  (y) => row(y, [
    { title: 'Undoing', body: 'a compulsion symbolically cancels an unacceptable thought' },
    { title: 'Isolation', body: 'a thought is separated from its emotion' },
    { title: 'Reaction formation', body: 'acting in the opposite way to an unacceptable impulse' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 19 } }),
  (y) => row(y, [
    { kicker: '+ STRENGTH', body: 'Considers the meaning of symptoms.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− WEAKNESSES', kfill: C.rust, body: 'Unfalsifiable; little empirical support.' },
  ], { gap: 14, card: { size: 16, bfill: C.ink } }),
],
'Conflict between the id\'s unacceptable impulses and the ego\'s attempts to control them, with anal-stage fixation producing a preoccupation with order and cleanliness. Three defence mechanisms are shown: undoing, isolation and reaction formation. A strength and weaknesses follow.',
'Freud saw compulsions as defences against unacceptable impulses.', H2.psy);

// 05 ERP habituation (illustrative)
F('05-erp-habituation', 'Exposure and response prevention', 'What happens to anxiety after facing a trigger (illustrative)', [
  (y) => {
    const a = axes(130, y + 40, 700, 260, 'time after exposure to the trigger', 'anxiety');
    let s = panel(30, y, 840, 360) + a.s;
    s += arrow(160, a.Y(0.15), 160, a.Y(0.35), { w: 3 }) + T(170, a.Y(0.2), 'trigger', { size: 15, weight: 700 });
    s += path(`M160,${a.Y(0.4)} C200,${a.Y(0.6)} 230,${a.Y(0.85)} 270,${a.Y(0.86)} L300,${a.Y(0.86)} C310,${a.Y(0.6)} 320,${a.Y(0.3)} 360,${a.Y(0.25)}`, { stroke: C.rust, w: 5, extra: 'stroke-dasharray="10 7"' });
    s += T(372, a.Y(0.25) + 6, 'compulsion: quick relief', { size: 15, weight: 700, fill: C.rust, anchor: 'start' });
    s += path(`M160,${a.Y(0.4)} C220,${a.Y(0.65)} 260,${a.Y(0.92)} 340,${a.Y(0.92)} C480,${a.Y(0.92)} 560,${a.Y(0.3)} 820,${a.Y(0.2)}`, { stroke: C.tealDark, w: 5 });
    s += T(620, a.Y(0.78), 'response prevented: anxiety', { size: 16, weight: 700, fill: C.tealDark }) + T(620, a.Y(0.78) + 20, 'rises, then falls on its own', { size: 16, weight: 700, fill: C.tealDark }) + T(620, a.Y(0.78) + 40, '(habituation)', { size: 16, weight: 700, fill: C.tealDark });
    return { s, h: 360 };
  },
  (y) => row(y, [
    { kicker: 'WITH THE COMPULSION', body: 'Relief **negatively reinforces** the compulsion, and the person never discovers the feared outcome would not have happened.', fill: '#f6e3d8', edge: C.rust, kfill: C.rust },
    { kicker: 'WITH ERP', body: 'Work up a hierarchy of triggers while the compulsion is prevented: the person learns the feared outcome does **not** occur.', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 16, bfill: C.ink } }),
],
'An illustrative graph of anxiety after a trigger. If the compulsion is performed, anxiety drops quickly, which negatively reinforces it. If the response is prevented, anxiety rises and then falls on its own through habituation, so the person learns the feared outcome does not occur.',
'Preventing the ritual lets anxiety fall on its own and breaks the reinforcement.', H2.treat);

// 06 Lovell et al.
F('06-lovell-2006', 'Key study: Lovell et al. (2006)', 'Is telephone CBT as effective as face-to-face CBT?', [
  (y) => card(170, y, 560, { title: '72 patients with OCD', body: 'two UK outpatient departments · randomised controlled non-inferiority trial', align: 'middle', size: 16, tsize: 20 }),
  (y) => ({ s: arrow(370, y - 16, 240, y + 26, { w: 3 }) + arrow(530, y - 16, 660, y + 26, { w: 3 }) + T(450, y + 16, 'random allocation', { size: 15, weight: 700, anchor: 'middle', fill: C.olive }), h: 24 }),
  (y) => row(y, [
    { kicker: 'TELEPHONE', title: '10 weekly sessions', body: 'ERP-based CBT', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'FACE TO FACE', title: '10 weekly sessions', body: 'ERP-based CBT', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 120, card: { size: 16, tsize: 19, align: 'middle' } }),
  vArrows([240, 660], 22),
  (y) => card(30, y, 840, { kicker: 'MEASURES', body: 'Y-BOCS (main outcome) · Beck Depression Inventory · client satisfaction questionnaire', align: 'middle', size: 16, bfill: C.ink }),
  (y) => note(y, 'Result at six months', 'Y-BOCS scores in the two groups were **almost identical**, and both groups were highly satisfied: telephone CBT is as effective, and more accessible.', { align: 'middle', size: 17 }),
  (y) => row(y, [
    { kicker: '+ STRENGTHS', body: 'Random allocation and standard measures: strong internal validity.', fill: C.tealLight, edge: C.tealDark },
    { kicker: '− WEAKNESSES', kfill: C.rust, body: 'No blinding to delivery mode; patients already referred to clinics in one country.' },
  ], { gap: 14, vcenter: false, card: { size: 16, bfill: C.ink } }),
],
'Seventy-two patients with OCD were randomly allocated to ten weekly sessions of ERP-based CBT by telephone or face to face, measured with the Y-BOCS, the Beck Depression Inventory and a satisfaction questionnaire. At six months Y-BOCS scores were almost identical and both groups were satisfied. Strengths and weaknesses follow.',
'Telephone CBT matched face-to-face CBT at six months.', H2.lov);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
