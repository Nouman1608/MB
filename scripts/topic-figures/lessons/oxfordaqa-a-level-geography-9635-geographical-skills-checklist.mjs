// Topic figures for oxfordaqa-a-level-geography-9635-geographical-skills-checklist
import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

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

// Timeline helper: vertical, years on the left
function vtimeline(y, items, o = {}) {
  const LX = o.lx ?? 150, W = 870 - LX - 40, sz = o.size ?? 16, ts = o.tsize ?? 18;
  let s = '', cy = y;
  const mk = (it, yy) => card(LX + 40, yy, W, { title: it.title, body: it.body, size: sz, tsize: ts, pad: 13, fill: it.fill, edge: it.edge, tgap: 3 });
  const total = items.map((it) => mk(it, 0)).reduce((a, c) => a + c.h + 10, -10);
  s += `<line x1="${LX}" y1="${y + 8}" x2="${LX}" y2="${y + total - 8}" stroke="${C.ink}" stroke-width="4"/>`;
  items.forEach((it) => {
    const c = mk(it, cy);
    s += c.s + `<circle cx="${LX}" cy="${cy + c.h / 2}" r="${it.d ? 10 : 6}" fill="${it.dot || (it.d ? C.mustard : C.panel)}" stroke="${C.ink}" stroke-width="3"/>`;
    if (it.d) s += para(LX - 20, cy + c.h / 2 + 6 - (tw(it.d, 17, 700) > LX - 50 ? 10 : 0), it.d, LX - 40, { size: 17, weight: 700, anchor: 'end', fill: C.ink, lh: 20 }).s;
    cy += c.h + 10;
  });
  return { s, h: total };
}
// Horizontal arrow chain of cards (wraps to rows of `per`), returns {s,h}
function chain(y, items, o = {}) { return row(y, items, { arrows: true, ...o }); }
// Section label
const LBL = (s, o = {}) => (y) => ({ s: T(o.x ?? 30, y + 14, s, { size: 15, weight: 700, fill: o.fill || C.muted, anchor: o.anchor || 'start' }), h: 16 });
// Spectrum: horizontal axis with labelled positions. items [{pos 0..1, title, body, fill}], ends [left,right]
function spectrum(y, ends, items, o = {}) {
  const x0 = 60, x1 = 840, ay = y + 40;
  let s = `<line x1="${x0}" y1="${ay}" x2="${x1}" y2="${ay}" stroke="${C.ink}" stroke-width="4" marker-start="url(#ah)" marker-end="url(#ah)"/>`;
  s += T(x0 - 10, y + 12, ends[0], { size: 17, weight: 700, fill: C.tealDark }) + T(x1 + 10, y + 12, ends[1], { size: 17, weight: 700, anchor: 'end', fill: C.rust });
  const cw = o.cw ?? 250; let maxH = 0; const cards = [];
  items.forEach((it, i) => {
    const px = x0 + it.pos * (x1 - x0);
    const cx = Math.min(Math.max(px - cw / 2, 30), 870 - cw);
    const c = card(cx, ay + 40 + (it.lane || 0) * (o.laneH ?? 0), cw, { title: it.title, body: it.body, size: 16, tsize: 18, pad: 14, fill: it.fill || C.panel, edge: it.edge || C.panelEdge, align: 'middle' });
    cards.push(c); maxH = Math.max(maxH, (it.lane || 0) * (o.laneH ?? 0) + c.h);
    s += `<line x1="${px}" y1="${ay}" x2="${px}" y2="${ay + 40 + (it.lane || 0) * (o.laneH ?? 0)}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="5 5"/>` + `<circle cx="${px}" cy="${ay}" r="10" fill="${it.dot || C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
    s += c.s;
  });
  return { s, h: 80 + maxH };
}
// ---- end of local helpers ----

export const slug = 'oxfordaqa-a-level-geography-9635-geographical-skills-checklist';
const H = {
  choose: '## Choosing the right technique',
  core: '## Core skills: annotation, literacy and numeracy',
  carto: '## Cartographic skills: constructing to scale',
  graph: '## Graphical skills: reading and judging',
  stats: '## Statistical skills: interpreting spread and testing relationships',
};
const MM = 5; // px per mm in scale drawings

// 01 Choosing the technique
F('01-choosing-a-technique', 'Start from the type of data', 'Matching presentation and statistics to data (from the lesson\'s table)', [
  (y) => table(y, [{ w: 1.25, head: 'Data' }, { w: 1.6, head: 'Presentation', hfill: C.teal }, { w: 1.05, head: 'Statistic', hfill: C.cream }], [
    ['Values at named points', 'Located proportional symbols or bar graphs', 'Mean, median, dispersion'],
    ['Values for areas', 'Choropleth (rates or densities only)', 'Median and IQR across areas'],
    ['Continuous surfaces', 'Isoline map', ''],
    ['Movements between places', 'Flow, desire or trip lines', ''],
    ['Change over time', 'Line graph', 'Percentage change, rate of change'],
    ['Two continuous variables', 'Scatter graph with best fit line', 'Spearman\'s rank'],
    ['Counts in categories', 'Bar graph, pie chart, divided circle', 'Chi-square'],
    ['Three parts summing to 100%', 'Triangular graph', ''],
    ['Several orders of magnitude', 'Logarithmic scale', ''],
    ['Spread of one data set', 'Dispersion diagram', 'Range, IQR, standard deviation'],
  ], { size: 15, hsize: 17, pad: 11 }),
  (y) => note(y, 'A justification has two parts', 'What the technique shows, and why that suits these data: "a scatter graph, because it shows whether two continuous variables are related and reveals anomalies".', { size: 16 }),
], 'Table matching ten types of data to suitable presentation and statistics, from located proportional symbols for values at points to dispersion diagrams and standard deviation for the spread of one data set. A note says a justification needs what the technique shows and why it suits the data.',
'Choose the technique from the type of data, then justify it in two parts.', H.choose, { gap: 16 });

// 02 Percentage change and rate
F('02-percentage-and-rate-of-change', 'Percentage change and rate of change', 'An invented town growing over 12 years', [
  (y) => {
    const x0 = 230, sc = 0.0095; let s = '';
    const bar = (yy, v, lab, fill) => `<rect x="${x0}" y="${yy}" width="${v * sc}" height="56" rx="6" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 - 16, yy + 35, lab, { size: 18, weight: 700, anchor: 'end' }) + T(x0 + v * sc + 12, yy + 35, v.toLocaleString('en-GB'), { size: 18, weight: 700 });
    s += bar(y, 48000, 'Old population', C.tealLight) + bar(y + 76, 61200, 'New population', C.teal);
    s += `<rect x="${x0 + 48000 * sc}" y="${y + 76}" width="${13200 * sc}" height="56" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x0 + 48000 * sc + 13200 * sc / 2, y + 111, '+13,200', { size: 17, weight: 700, anchor: 'middle' });
    s += `<line x1="${x0}" y1="${y - 8}" x2="${x0}" y2="${y + 140}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += T(450, y + 166, 'Bars to scale, starting from zero', { size: 15, anchor: 'middle', fill: C.muted });
    return { s, h: 172 };
  },
  (y) => row(y, [
    { kicker: 'PERCENTAGE CHANGE', title: '(new - old) / old x 100', body: '13,200 / 48,000 x 100 = **27.5%**', fill: C.tealLight, edge: C.tealDark, bfill: C.ink },
    { kicker: 'MEAN RATE OF CHANGE', title: 'change / time', body: '13,200 / 12 = **1,100 people a year**', fill: C.cream, edge: C.olive, kfill: C.olive, bfill: C.ink },
  ], { card: { size: 18, tsize: 20 } }),
  (y) => note(y, null, 'Give units, and round to the precision of the original data.', { size: 16, align: 'middle', fill: C.panel, edge: C.panelEdge }),
], 'Two bars to scale: a town of 48,000 grows to 61,200, an increase of 13,200 shown in gold. Formulas below: percentage change = 13,200 / 48,000 x 100 = 27.5%, and mean rate of change over 12 years = 1,100 people a year.',
'Percentage change compares with the starting value; rate of change divides by time.', H.core, { gap: 16 });

// 03 Isoline interpolation
F('03-isoline-interpolation', 'Interpolating an isoline', 'Where does the 160 line cross between A and B?', [
  (y) => {
    const ax = 150, bx = ax + 25 * MM * 4.4, yy = y + 90; // 25 mm drawn at 22 px/mm
    const pxmm = (bx - ax) / 25, ix = ax + 10 * pxmm;
    let s = panel(30, y, 840, 250);
    s += `<line x1="${ax}" y1="${yy}" x2="${bx}" y2="${yy}" stroke="${C.ink}" stroke-width="3"/>`;
    for (let m = 0; m <= 25; m += 5) s += `<line x1="${ax + m * pxmm}" y1="${yy + 10}" x2="${ax + m * pxmm}" y2="${yy + 22}" stroke="${C.muted}" stroke-width="2"/>` + (m === 10 ? '' : T(ax + m * pxmm, yy + 42, `${m}`, { size: 15, anchor: 'middle', fill: C.muted }));
    s += T(bx + 16, yy + 42, 'mm', { size: 15, fill: C.muted });
    s += `<circle cx="${ax}" cy="${yy}" r="12" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>` + T(ax, yy - 24, 'A = 140', { size: 19, weight: 700, anchor: 'middle' });
    s += `<circle cx="${bx}" cy="${yy}" r="12" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>` + T(bx, yy - 24, 'B = 190', { size: 19, weight: 700, anchor: 'middle' });
    s += path(`M${ix - 30},${y + 20} C${ix - 10},${yy - 30} ${ix + 10},${yy + 30} ${ix - 20},${y + 230}`, { stroke: C.rust, w: 4 });
    s += `<circle cx="${ix}" cy="${yy}" r="7" fill="${C.rust}"/>` + T(ix + 14, y + 40, '160 isoline', { size: 18, weight: 700, fill: C.rust });
    s += `<path d="M${ax},${yy + 64} L${ax},${yy + 74} L${ix},${yy + 74} L${ix},${yy + 64}" fill="none" stroke="${C.olive}" stroke-width="2.5"/>` + T((ax + ix) / 2, yy + 98, '10 mm', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
    s += T(860, y + 240, 'Drawn to scale (enlarged)', { size: 15, anchor: 'end', fill: C.muted, italic: true });
    return { s, h: 250 };
  },
  (y) => steps(y, [
    { title: 'Fraction of the way from A', body: '(160 - 140) / (190 - 140) = 20 / 50 = 0.4' },
    { title: 'Convert to distance', body: '0.4 x 25 mm = **10 mm from A**' },
    { title: 'Know the assumption', body: 'The value changes evenly between points, so isoline maps need dense data.', fill: C.cream },
  ], { size: 16, tsize: 18, highlight: 2 }),
], 'Points A (140) and B (190) lie 25 mm apart on a scale bar. The 160 isoline crosses 10 mm from A, because 160 is 0.4 of the way from 140 to 190. Steps show the calculation and the assumption that values change evenly between points.',
'Find the fraction of the value gap, then take that fraction of the distance.', H.carto, { gap: 16 });

// 04 Proportional symbols and flow lines to scale
F('04-symbols-and-flow-lines', 'Constructing symbols to scale', 'Circle area, not radius, is proportional to the value', [
  (y) => {
    let s = panel(30, y, 840, 330);
    const k = 5.5; // px per mm
    const circ = (cx, r, val, rl) => `<circle cx="${cx}" cy="${y + 200 - r * k}" r="${r * k}" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3"/>` + `<line x1="${cx}" y1="${y + 200 - r * k}" x2="${cx + r * k}" y2="${y + 200 - r * k}" stroke="${C.ink}" stroke-width="2"/>` + T(cx, y + 236, val, { size: 18, weight: 700, anchor: 'middle' }) + T(cx, y + 260, rl, { size: 16, anchor: 'middle', fill: C.muted });
    s += circ(150, 8, '2,500 visitors', 'radius 8 mm');
    s += circ(390, 12.8, '6,400 visitors', '8 x √(6,400/2,500) = 12.8 mm');
    s += circ(700, 16, '10,000 visitors', '8 x √4 = 16 mm');
    s += `<line x1="50" y1="${y + 200}" x2="850" y2="${y + 200}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    s += T(450, y + 300, 'Four times the value gives twice the radius (four times the area)', { size: 16, weight: 600, anchor: 'middle', fill: C.tealDark });
    s += T(860, y + 322, 'Drawn to scale', { size: 15, anchor: 'end', fill: C.muted, italic: true });
    return { s, h: 330 };
  },
  (y) => {
    let s = panel(30, y, 840, 120);
    s += T(50, y + 34, 'Flow line: 1 mm = 500 vehicles a day', { size: 18, weight: 700 });
    s += `<rect x="50" y="${y + 60}" width="560" height="${7.5 * 5}" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>`;
    s += path(`M610,${y + 60} l40,${7.5 * 5 / 2} l-40,${7.5 * 5 / 2} z`, { fill: C.cream, stroke: C.olive, w: 2 });
    s += T(670, y + 78, '3,750 / 500 =', { size: 17 }) + T(670, y + 100, '7.5 mm wide', { size: 17, weight: 700 });
    return { s, h: 120 };
  },
], 'Three circles drawn to scale: 2,500 visitors with a radius of 8 mm, 6,400 visitors with 12.8 mm and 10,000 visitors with 16 mm, showing that four times the value doubles the radius. Below, a flow line 7.5 mm wide for 3,750 vehicles a day at 1 mm per 500 vehicles.',
'Scale circle area, not radius, to the value; scale flow-line width to volume.', H.carto, { gap: 16 });

// 05 Triangular graph
{
  const blocks = [(y) => {
    const L = 420, h = L * Math.sqrt(3) / 2, ox = 70, oy = y + 30 + h; // sand bottom-left, silt bottom-right, clay top
    const Vs = [ox, oy], Vt = [ox + L, oy], Vc = [ox + L / 2, oy - h];
    const pt = (c, si, sa) => [c * Vc[0] + si * Vt[0] + sa * Vs[0], c * Vc[1] + si * Vt[1] + sa * Vs[1]];
    let s = panel(30, y, 840, h + 100);
    for (let i = 1; i < 10; i++) {
      const f = i / 10;
      const ln = (a, b) => `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${C.panelEdge}" stroke-width="1.3"/>`;
      s += ln(pt(f, 1 - f, 0), pt(f, 0, 1 - f)) + ln(pt(0, f, 1 - f), pt(1 - f, f, 0)) + ln(pt(1 - f, 0, f), pt(0, 1 - f, f));
    }
    s += `<path d="M${Vs[0]},${Vs[1]} L${Vt[0]},${Vt[1]} L${Vc[0]},${Vc[1]} Z" fill="none" stroke="${C.ink}" stroke-width="3"/>`;
    const P = pt(0.2, 0.3, 0.5);
    const dash = (a, b, col) => `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${col}" stroke-width="3" stroke-dasharray="7 5"/>`;
    s += dash(pt(0.2, 0.8, 0), pt(0.2, 0, 0.8), C.rust) + dash(pt(0, 0.3, 0.7), pt(0.7, 0.3, 0), C.tealDark) + dash(pt(0.5, 0, 0.5), pt(0, 0.5, 0.5), C.olive);
    s += `<circle cx="${P[0]}" cy="${P[1]}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
    s += T(Vc[0], Vc[1] - 12, '100% clay', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) + T(Vs[0] - 4, Vs[1] + 28, '100% sand', { size: 17, weight: 700, fill: C.olive }) + T(Vt[0] + 4, Vt[1] + 28, '100% silt', { size: 17, weight: 700, anchor: 'end', fill: C.tealDark });
    const tx = 560;
    s += T(tx, y + 70, 'Sample: 20% clay', { size: 18, weight: 700, fill: C.rust }) + T(tx, y + 98, '+ 30% silt', { size: 18, weight: 700, fill: C.tealDark }) + T(tx, y + 126, '+ 50% sand', { size: 18, weight: 700, fill: C.olive }) + T(tx, y + 156, '= 100% ✓', { size: 18, weight: 700 });
    s += para(tx, y + 200, 'Plot the point where the three gridlines meet. Each dashed line joins all points with the same share of one component.', 280, { size: 16, fill: C.ink }).s;
    s += para(tx, y + 310, 'Points that cluster show samples of similar composition.', 280, { size: 16, fill: C.muted }).s;
    s += T(tx, y + h + 80, 'Gridlines every 10%', { size: 15, fill: C.muted, italic: true });
    return { s, h: h + 100 };
  }];
  F('05-triangular-graph', 'Reading a triangular graph', 'Three components that add to 100%', blocks,
    'A triangular graph with corners at 100% clay, 100% silt and 100% sand and gridlines every 10%. Dashed lines at 20% clay, 30% silt and 50% sand meet at a single plotted point. Notes say to check the three values add to 100% and that clustered points show similar samples.',
    'Check the three values total 100%, then plot where the three gridlines meet.', H.graph);
}

// 06 Standard deviation dispersion
F('06-same-mean-different-spread', 'Same mean, different spread', 'Seven infiltration times in each set (seconds)', [
  (y) => {
    const x0 = 120, x1 = 840, v = (t) => x0 + ((t - 5) * (x1 - x0)) / 35;
    let s = panel(30, y, 840, 300);
    const rowp = (yy, vals, lab, sd, fill) => {
      let o = T(50, yy + 6, lab, { size: 18, weight: 700 });
      o += `<rect x="${v(22 - sd)}" y="${yy - 22}" width="${v(22 + sd) - v(22 - sd)}" height="44" fill="${fill}" opacity="0.55"/>`;
      vals.forEach((t) => { o += `<circle cx="${v(t)}" cy="${yy}" r="8" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>`; });
      o += T(v(22 + sd) + 8, yy - 26, `SD ${sd} s`, { size: 16, weight: 700 });
      return o;
    };
    s += rowp(y + 80, [18, 20, 21, 22, 23, 24, 26], 'Set A', 2.4, C.teal) + rowp(y + 180, [8, 12, 17, 22, 27, 32, 36], 'Set B', 9.6, C.cream);
    s += `<line x1="${v(22)}" y1="${y + 30}" x2="${v(22)}" y2="${y + 230}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="7 5"/>` + T(v(22), y + 26, 'mean 22 s', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
    s += `<line x1="${x0}" y1="${y + 245}" x2="${x1}" y2="${y + 245}" stroke="${C.ink}" stroke-width="2.5"/>`;
    for (let t = 5; t <= 40; t += 5) s += `<line x1="${v(t)}" y1="${y + 245}" x2="${v(t)}" y2="${y + 253}" stroke="${C.ink}" stroke-width="2"/>` + T(v(t), y + 274, String(t), { size: 15, anchor: 'middle', fill: C.muted });
    s += T(x1, y + 292, 'seconds', { size: 15, anchor: 'end', fill: C.muted });
    return { s, h: 300 };
  },
  (y) => row(y, [
    { title: 'Set A: uniform ground', body: 'Values close to the mean: small standard deviation.', fill: C.tealLight, edge: C.tealDark },
    { title: 'Set B: very variable', body: 'Perhaps compacted paths and loose soil: large standard deviation.', fill: C.cream, edge: C.olive },
  ], { card: { size: 16, tsize: 18 } }),
  (y) => note(y, null, 'Always report a measure of spread alongside an average. (SD here uses division by n; shaded band = mean ± 1 SD.)', { size: 16, align: 'middle', fill: C.panel, edge: C.panelEdge }),
], 'Dispersion diagram of two sets of seven infiltration times with the same mean of 22 seconds. Set A clusters between 18 and 26 seconds with a standard deviation of 2.4 s; set B spreads from 8 to 36 seconds with 9.6 s. Shaded bands show one standard deviation either side of the mean.',
'The same mean can hide very different spread: report both.', H.stats, { gap: 16 });

// 07 Spearman negative
F('07-spearman-negative', 'A negative Spearman\'s rank', 'Distance from the town centre and recorded crimes (invented)', [
  (y) => {
    const data = [['A', 0.2, 42], ['B', 0.5, 38], ['C', 0.9, 40], ['D', 1.3, 29], ['E', 1.8, 25], ['F', 2.4, 27], ['G', 3.0, 18], ['H', 3.7, 15]];
    const x0 = 110, x1 = 470, y0 = y + 300, y1 = y + 30, X = (d) => x0 + (d / 4) * (x1 - x0), Y = (c) => y0 - ((c - 10) / 35) * (y0 - y1);
    let s = panel(30, y, 840, 360);
    s += `<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" stroke="${C.ink}" stroke-width="2.5"/><line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y1}" stroke="${C.ink}" stroke-width="2.5"/>`;
    for (let d = 0; d <= 4; d++) s += T(X(d), y0 + 22, String(d), { size: 15, anchor: 'middle', fill: C.muted });
    for (let c = 10; c <= 45; c += 10) s += T(x0 - 10, Y(c) + 5, String(c), { size: 15, anchor: 'end', fill: C.muted });
    s += T((x0 + x1) / 2, y0 + 46, 'Distance from centre (km)', { size: 16, weight: 600, anchor: 'middle' });
    s += `<text transform="translate(58,${(y0 + y1) / 2}) rotate(-90)" text-anchor="middle" font-size="16" font-weight="600" fill="${C.ink}">Recorded crimes</text>`;
    data.forEach(([n, d, c]) => { s += `<circle cx="${X(d)}" cy="${Y(c)}" r="8" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + T(X(d) + 12, Y(c) - 8, n, { size: 15, weight: 700 }); });
    const tx = 510;
    s += T(tx, y + 50, 'Σd² = 164, n = 8', { size: 18, weight: 700 });
    s += T(tx, y + 84, 'rs = 1 - (6 x 164) / (8³ - 8)', { size: 17 }) + T(tx, y + 110, '    = 1 - 984 / 504 = -0.952', { size: 17, weight: 700 });
    s += T(tx, y + 150, 'Sign: direction (negative)', { size: 16, fill: C.tealDark, weight: 600 }) + T(tx, y + 174, 'Size: strength (ignore the sign', { size: 16, fill: C.tealDark, weight: 600 }) + T(tx, y + 196, 'when comparing)', { size: 16, fill: C.tealDark, weight: 600 });
    // critical value bar
    const bx0 = tx, bx1 = 840, B = (r) => bx0 + r * (bx1 - bx0);
    s += `<line x1="${bx0}" y1="${y + 270}" x2="${bx1}" y2="${y + 270}" stroke="${C.ink}" stroke-width="3"/>` + T(bx0, y + 294, '0', { size: 15, anchor: 'middle', fill: C.muted }) + T(bx1, y + 294, '1', { size: 15, anchor: 'middle', fill: C.muted });
    [[0.738, '0.05'], [0.881, '0.01']].forEach(([r, l], i) => { s += `<line x1="${B(r)}" y1="${y + 256}" x2="${B(r)}" y2="${y + 284}" stroke="${C.olive}" stroke-width="3"/>` + T(B(r) + 4, y + 250 - (i ? 22 : 0), `${r} (${l})`, { size: 15, weight: 600, anchor: 'end', fill: C.olive }); });
    s += `<circle cx="${B(0.952)}" cy="${y + 270}" r="9" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>` + T(B(0.952) + 12, y + 318, '|rs| = 0.952', { size: 16, weight: 700, anchor: 'end', fill: C.rust });
    s += T(tx, y + 344, 'Critical values, n = 8, two-tailed', { size: 15, fill: C.muted, italic: true });
    return { s, h: 360 };
  },
  (y) => note(y, 'Reject the null hypothesis at the 0.01 level', 'Crime falls significantly with distance from the centre, but correlation does not show why: land use, footfall and reporting rates could all be involved.', { size: 16 }),
], 'Scatter graph of eight invented sites: recorded crimes fall from 42 at 0.2 km to 15 at 3.7 km from the centre. The calculation gives rs = -0.952; on a scale from 0 to 1 its size lies beyond the critical values 0.738 (0.05) and 0.881 (0.01), so the null hypothesis is rejected at the 0.01 level.',
'A strong negative correlation, significant at 0.01, but it does not prove cause.', H.stats, { gap: 16 });

// 08 Chi-square
F('08-chi-square-two-by-two', 'A two-by-two chi-square', 'Flood-risk awareness near and far from the river (invented)', [
  (y) => {
    let s = panel(30, y, 840, 300);
    const cells = [['Within 200 m', 34, 27.5, 16, 22.5], ['Over 200 m', 21, 27.5, 29, 22.5]];
    const k = 4.2, base = y + 230;
    cells.forEach(([lab, oa, ea, on, en], i) => {
      const gx = 90 + i * 400;
      const pair = (x, o, e, lab2) => `<rect x="${x}" y="${base - o * k}" width="56" height="${o * k}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + T(x + 28, base - o * k - 8, String(o), { size: 16, weight: 700, anchor: 'middle' }) +
        `<rect x="${x + 62}" y="${base - e * k}" width="56" height="${e * k}" fill="${C.panel}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="6 4"/>` + T(x + 90, base - e * k - 8, String(e), { size: 16, weight: 600, anchor: 'middle', fill: C.muted }) + T(x + 59, base + 24, lab2, { size: 16, weight: 600, anchor: 'middle' });
      s += pair(gx, oa, ea, 'Aware') + pair(gx + 150, on, en, 'Not aware') + T(gx + 134, base + 54, lab, { size: 17, weight: 700, anchor: 'middle' });
    });
    s += `<line x1="50" y1="${base}" x2="850" y2="${base}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += `<rect x="300" y="${y + 18}" width="20" height="16" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + T(328, y + 32, 'observed (O)', { size: 15 }) + `<rect x="470" y="${y + 18}" width="20" height="16" fill="${C.panel}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="4 3"/>` + T(498, y + 32, 'expected (E)', { size: 15 });
    return { s, h: 300 };
  },
  (y) => row(y, [
    { kicker: 'EXPECTED', title: 'row total x column total / grand total', body: '50 x 55 / 100 = 27.5; 50 x 45 / 100 = 22.5 (counts, not percentages)' },
    { kicker: 'CHI-SQUARE', title: 'Σ (O - E)² / E', body: '1.54 + 1.88 + 1.54 + 1.88 = **6.83**. Degrees of freedom: (2 - 1) x (2 - 1) = 1', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { card: { size: 16, tsize: 18 } }),
  (y) => {
    const bx0 = 60, bx1 = 840, B = (v) => bx0 + (v / 8) * (bx1 - bx0);
    let s = `<line x1="${bx0}" y1="${y + 40}" x2="${bx1}" y2="${y + 40}" stroke="${C.ink}" stroke-width="3"/>`;
    for (let v = 0; v <= 8; v += 2) s += T(B(v), y + 66, String(v), { size: 15, anchor: 'middle', fill: C.muted });
    [[3.84, '3.84 (0.05)'], [6.63, '6.63 (0.01)']].forEach(([v, l]) => { s += `<line x1="${B(v)}" y1="${y + 26}" x2="${B(v)}" y2="${y + 54}" stroke="${C.olive}" stroke-width="3"/>` + T(B(v), y + 18, l, { size: 15, weight: 600, anchor: v > 5 ? 'end' : 'middle', fill: C.olive }); });
    s += `<circle cx="${B(6.83)}" cy="${y + 40}" r="9" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>` + T(B(6.83) + 14, y + 22, '6.83', { size: 16, weight: 700, fill: C.rust });
    s += T(450, y + 92, 'Significant at the 0.01 level (df = 1). Explaining why needs geography, e.g. experience of past floods.', { size: 16, weight: 600, anchor: 'middle' });
    return { s, h: 100 };
  },
], 'Paired bars compare observed and expected counts: within 200 m of the river 34 aware and 16 not aware against expected 27.5 and 22.5; over 200 m 21 and 29 against the same expected values. Chi-square = 6.83 with 1 degree of freedom, beyond the critical values 3.84 and 6.63, so the difference is significant at the 0.01 level.',
'Observed counts differ from expected enough to be significant at 0.01.', H.stats, { gap: 16 });

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
