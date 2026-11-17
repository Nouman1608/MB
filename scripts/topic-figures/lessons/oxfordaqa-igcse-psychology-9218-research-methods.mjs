import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-psychology-9218-research-methods';
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
  hyp: '## Hypotheses',
  vars: '## Variables',
  types: '## Types of experiment',
  des: '## Experimental designs',
  samp: '## Sampling',
};

// 01 Hypotheses
F('01-hypotheses', 'Alternative and null hypotheses', 'Both must be operationalised: variables stated in measurable terms', [
  (y) => {
    const box = (yy, kick, kf, fill, edge, lines) => {
      let s = panel(30, yy, 840, 134, fill, edge) + T(54, yy + 36, kick, { size: 16, weight: 700, fill: kf });
      s += passage(54, yy + 46, lines, { size: 19, lh: 34 }).s;
      return s;
    };
    const a = box(y, 'ALTERNATIVE: predicts an effect', C.tealDark, C.tealLight, C.tealDark, [
      [['Participants who learn a list of 20 words'], ['  in silence', 'key'], ['  will'], ['  recall more words', 'hl']],
      [['than participants who learn the same list'], ['  while music plays', 'key'], ['.']],
    ]);
    const b = box(y + 150, 'NULL: predicts no effect', C.rust, C.panel, C.panelEdge, [
      [['There will be no difference in the'], ['  number of words recalled', 'hl'], ['  between']],
      [['participants who learn'], ['  in silence', 'key'], ['  and those who learn'], ['  while music plays', 'key'], ['.']],
    ]);
    const k1 = chip(30, y + 300, 'IV: silence or music', { size: 16, fill: C.teal, edge: C.tealDark });
    const k2 = chip(30 + k1.w + 14, y + 300, 'DV: number of words recalled', { size: 16, fill: C.cream, edge: C.olive });
    return { s: a + b + k1.s + k2.s, h: 300 + k1.h };
  },
],
'Two boxes. The alternative hypothesis predicts that participants who learn 20 words in silence will recall more words than those who learn while music plays. The null hypothesis predicts no difference in words recalled. The independent variable (silence or music) and the dependent variable (number of words recalled) are highlighted in both.',
'The alternative predicts an effect, the null predicts none; both name measurable variables.', H2.hyp);

// 02 Variables
F('02-iv-dv-extraneous', 'Independent, dependent and extraneous variables', '', [
  (y) => {
    const iv = card(30, y + 110, 280, { kicker: 'INDEPENDENT VARIABLE', title: 'What the researcher changes', body: 'silence versus music', size: 16, tsize: 19, fill: C.tealLight, edge: C.tealDark, minH: 150 });
    const dv = card(590, y + 110, 280, { kicker: 'DEPENDENT VARIABLE', kfill: C.olive, title: 'What is measured', body: 'number of words recalled', size: 16, tsize: 19, fill: C.cream, edge: C.olive, minH: 150 });
    let s = iv.s + dv.s + arrow(318, y + 185, 582, y + 185, { w: 5 }) + T(450, y + 172, 'causes?', { size: 17, weight: 700, anchor: 'middle' });
    const ex = ['time of day', 'noise outside', 'familiarity of words'];
    ex.forEach((e, i) => { const x = 330 + i * 0; void x; });
    const c = chips(y, ex, { x: 200, w: 500, size: 16, fill: C.panel, edge: C.rust });
    s += T(450, y - 8, 'EXTRANEOUS VARIABLES', { size: 15, weight: 700, anchor: 'middle', fill: C.rust }) + c.s;
    s += arrow(640, y + c.h + 8, 700, y + 102, { w: 3, color: C.rust, marker: 'ahR', dash: '8 6' }) + T(690, y + 76, 'may also affect the DV', { size: 15, fill: C.rust, weight: 600 });
    return { s, h: 110 + Math.max(iv.h, dv.h) };
  },
  (y) => note(y, 'Confounding variable', 'If an extraneous variable changes **along with** the IV, the researcher can no longer be sure the IV caused the result.', { size: 17, fill: C.panel, edge: C.rust }),
],
'The independent variable (silence versus music) is linked by an arrow to the dependent variable (number of words recalled). Extraneous variables such as time of day, noise outside and familiarity of the words can also affect the dependent variable; one that changes along with the IV becomes a confounding variable.',
'Change the IV, measure the DV, and keep everything else from interfering.', H2.vars, { top: 120 });

// 03 Types of experiment
F('03-types-of-experiment', 'Laboratory, field and natural experiments', '', [
  (y) => row(y, [
    { kicker: 'LABORATORY', title: 'Controlled setting', body: ['IV manipulated by the researcher', '*e.g. testing short-term memory capacity with digit strings*'], fill: C.tealLight, edge: C.tealDark },
    { kicker: 'FIELD', title: 'Natural setting', body: ['IV still manipulated by the researcher', '*e.g. changing a supermarket sign to test perceptual set*'] },
    { kicker: 'NATURAL', kfill: C.olive, title: 'IV varies naturally', body: ['Researcher only measures the DV', '*e.g. comparing perception across cultures*'], fill: C.cream, edge: C.olive },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 19, gap: 8 } }),
  (y) => {
    let s = `<defs><linearGradient id="gctl" x1="0" x2="1"><stop offset="0" stop-color="${C.teal}"/><stop offset="1" stop-color="${C.cream}"/></linearGradient></defs>`;
    s += `<rect x="30" y="${y}" width="840" height="44" rx="22" fill="url(#gctl)" stroke="${C.ink}" stroke-width="2"/>`;
    s += T(54, y + 29, '◀ more control', { size: 17, weight: 700, fill: C.tealDark }) + T(846, y + 29, 'more true to life ▶', { size: 17, weight: 700, anchor: 'end', fill: C.olive });
    return { s, h: 44 };
  },
  (y) => row(y, [
    { kicker: 'WEAKNESS', kfill: C.rust, body: 'Artificial; participants may change behaviour because they know they are studied' },
    { kicker: 'WEAKNESS', kfill: C.rust, body: 'Less control over extraneous variables; consent may be difficult' },
    { kicker: 'WEAKNESS', kfill: C.rust, body: 'No random allocation, so other differences between groups may explain results' },
  ], { gap: 14, vcenter: false, card: { size: 16, bfill: C.ink } }),
],
'Three cards: a laboratory experiment has a controlled setting with the IV manipulated; a field experiment has a natural setting with the IV still manipulated; a natural experiment has an IV that varies naturally. A bar runs from more control to more true to life, and each card has a matching weakness.',
'Moving from laboratory to natural experiments trades control for realism.', H2.types);

// 04 Experimental designs
F('04-experimental-designs', 'Three experimental designs', 'Who takes part in condition A and condition B?', [
  (y) => {
    const dot = (cx, cy, f, lab) => `<circle cx="${cx}" cy="${cy}" r="17" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + (lab ? T(cx, cy + 6, lab, { size: 15, weight: 700, anchor: 'middle' }) : '');
    const rowD = (yy, name, how, ctrl, art) => {
      let s = panel(30, yy, 840, 170) + T(54, yy + 36, name, { size: 21, weight: 700 }) + para(54, yy + 64, how, 290, { size: 16, fill: C.muted }).s;
      s += chip(54, yy + 120, ctrl, { size: 15, fill: C.cream, edge: C.olive }).s;
      s += `<rect x="380" y="${yy + 22}" width="210" height="126" rx="10" fill="${C.tealLight}"/><rect x="636" y="${yy + 22}" width="210" height="126" rx="10" fill="${C.cream}"/>`;
      s += T(485, yy + 44, 'Condition A', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(741, yy + 44, 'Condition B', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
      return s + art(yy);
    };
    const ig = (yy) => [0, 1, 2, 3].map((i) => dot(420 + i * 44, yy + 95, C.teal, 'P' + (i + 1)) + dot(676 + i * 44, yy + 95, C.mustard, 'P' + (i + 5))).join('');
    const rm = (yy) => [0, 1, 2, 3].map((i) => dot(420 + i * 44, yy + 95, C.teal, 'P' + (i + 1)) + dot(676 + i * 44, yy + 95, C.teal, 'P' + (i + 1))).join('') + T(613, yy + 100, '=', { size: 22, weight: 700, anchor: 'middle' });
    const mp = (yy) => [0, 1, 2, 3].map((i) => dot(420 + i * 44, yy + 95, [C.teal, C.mustard, C.rock, C.panel][i], String.fromCharCode(65 + i) + '1') + dot(676 + i * 44, yy + 95, [C.teal, C.mustard, C.rock, C.panel][i], String.fromCharCode(65 + i) + '2')).join('') + T(613, yy + 100, '≈', { size: 22, weight: 700, anchor: 'middle' });
    let s = rowD(y, 'Independent groups', 'Different participants in each condition. **+** no order effects. **−** participant variables', 'control: random allocation', ig);
    s += rowD(y + 184, 'Repeated measures', 'Same participants do every condition. **+** no participant variables. **−** order effects', 'control: counterbalancing', rm);
    s += rowD(y + 368, 'Matched pairs', 'Pairs matched on a key variable, one of each pair per condition. **−** matching is slow, never perfect', 'control: pre-testing to match', mp);
    return { s, h: 368 + 170 };
  },
],
'Three rows. Independent groups: different participants in conditions A and B, controlled by random allocation. Repeated measures: the same participants in both conditions, controlled by counterbalancing. Matched pairs: matched participants split one per condition, using pre-testing to match. Each row gives a strength or weakness.',
'Different people, the same people, or matched pairs: each design has its own control.', H2.des);

// 05 Counterbalancing and random allocation
F('05-counterbalancing-allocation', 'Counterbalancing and random allocation', '', [
  (y) => {
    let s = panel(30, y, 840, 190) + T(54, y + 36, 'COUNTERBALANCING (repeated measures)', { size: 16, weight: 700, fill: C.tealDark });
    const seq = (yy, a, b, lab) => {
      const box = (x, l, f, e) => `<rect x="${x}" y="${yy}" width="150" height="48" rx="10" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + T(x + 75, yy + 31, l, { size: 18, weight: 700, anchor: 'middle' });
      return T(54, yy + 31, lab, { size: 17, weight: 600 }) + box(300, a, a.endsWith('A') ? C.tealLight : C.cream, a.endsWith('A') ? C.tealDark : C.olive) + arrow(456, yy + 24, 512, yy + 24, { w: 3.5 }) + box(518, b, b.endsWith('A') ? C.tealLight : C.cream, b.endsWith('A') ? C.tealDark : C.olive);
    };
    s += seq(y + 56, 'Condition A', 'Condition B', 'Half the participants') + seq(y + 120, 'Condition B', 'Condition A', 'The other half');
    s += para(700, y + 82, 'Practice and fatigue effects are **spread evenly**', 150, { size: 16 }).s;
    return { s, h: 190 };
  },
  (y) => {
    let s = panel(30, y, 840, 170) + T(54, y + 36, 'RANDOM ALLOCATION (independent groups)', { size: 16, weight: 700, fill: C.olive });
    s += `<path d="M90,${y + 70} L190,${y + 70} L178,${y + 140} L102,${y + 140} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3"/>` + T(140, y + 112, 'names', { size: 16, anchor: 'middle', weight: 700 });
    s += arrow(198, y + 100, 300, y + 82, { w: 3.5 }) + arrow(198, y + 110, 300, y + 128, { w: 3.5 });
    s += chip(310, y + 62, 'Condition A', { size: 16, fill: C.tealLight, edge: C.tealDark }).s + chip(310, y + 110, 'Condition B', { size: 16, fill: C.cream, edge: C.olive }).s;
    s += para(520, y + 82, 'Each participant has an **equal chance** of either condition, so participant variables should balance out.', 330, { size: 16 }).s;
    return { s, h: 170 };
  },
  (y) => note(y, 'Do not confuse', '**Random allocation** puts participants into conditions. **Random sampling** selects people from a population.', { size: 17, fill: C.panel, edge: C.rust }),
],
'Counterbalancing: half the participants do condition A then B and half do B then A, spreading practice and fatigue effects evenly. Random allocation: names drawn from a hat give each participant an equal chance of either condition so participant variables balance out. A note warns not to confuse random allocation with random sampling.',
'Counterbalancing fixes order effects; random allocation balances participant variables.', H2.des);

// 06 Sampling methods
F('06-sampling-methods', 'Four ways to choose a sample', 'Selected people highlighted; schematic', [
  (y) => {
    const W = 410, H = 300;
    const cell = (x, yy, name, how, plus, minus, pick, fill) => {
      let s = panel(x, yy, W, H) + T(x + 20, yy + 34, name, { size: 20, weight: 700 }) + T(x + 20, yy + 58, how, { size: 15, fill: C.muted });
      for (let r = 0; r < 4; r++) for (let c = 0; c < 10; c++) {
        const i = r * 10 + c, on = pick(i, r, c);
        s += `<circle cx="${x + 40 + c * 37}" cy="${yy + 88 + r * 34}" r="11" fill="${on ? fill(i, r, c) : (name === 'Stratified' ? (r < 2 ? C.tealLight : '#f7f0d4') : C.panel)}" stroke="${on ? C.ink : C.panelEdge}" stroke-width="${on ? 2.5 : 2}"/>`;
      }
      s += para(x + 20, yy + 236, '**+** ' + plus, W - 40, { size: 15 }).s + para(x + 20, yy + 262, '**−** ' + minus, W - 40, { size: 15 }).s;
      return s;
    };
    const rnd = new Set([3, 8, 12, 17, 21, 26, 34, 38]);
    const stratFill = (i, r) => (r < 2 ? C.teal : C.mustard);
    let s = cell(30, y, 'Random', 'equal chance, e.g. names from a hat', 'unbiased; likely representative', 'needs a full list; people may refuse', (i) => rnd.has(i), () => C.teal);
    s += cell(460, y, 'Opportunity', 'whoever is available and willing', 'quick and easy', 'often unrepresentative', (i, r, c) => r < 2 && c < 4, () => C.teal);
    s += cell(30, y + H + 16, 'Systematic', 'every nth person from a list', 'removes researcher choice', 'unrepresentative if the list has a pattern', (i) => i % 5 === 4, () => C.teal);
    s += cell(460, y + H + 16, 'Stratified', 'subgroups in proportion to their size', 'highly representative', 'time-consuming; needs detailed information', (i, r, c) => (r < 2 && (c === 1 || c === 6)) || (r >= 2 && (c === 3 || c === 8)), stratFill);
    return { s, h: 2 * H + 16 };
  },
],
'Four grids of people, each showing a different selection: random picks scattered across the population; opportunity picks a cluster of whoever is available; systematic picks every nth person; stratified picks from each subgroup in proportion. Each panel lists a strength and a weakness.',
'Only random and stratified sampling aim for a representative sample; opportunity is quickest.', H2.samp);

// 07 Stratified worked example
F('07-stratified-sample', 'Working out a stratified sample', 'A school of 600 students; a sample of 50', [
  (y) => {
    const s1 = segbar(y + 24, [{ label: 'Girls 360', sub: '60%', frac: 360, fill: C.teal }, { label: 'Boys 240', sub: '40%', frac: 240, fill: C.cream }], { size: 19 });
    const s2 = segbar(y + 200, [{ label: '30 girls', frac: 30, fill: C.teal }, { label: '20 boys', frac: 20, fill: C.cream }], { size: 19 });
    let s = T(30, y + 14, 'POPULATION (600)', { size: 15, weight: 700, fill: C.muted }) + s1.s + T(30, y + 190, 'SAMPLE (50)', { size: 15, weight: 700, fill: C.muted }) + s2.s;
    s += path(`M534,${y + 100} L534,${y + 196}`, { w: 2.5, extra: 'stroke-dasharray="6 5"' });
    s += T(450, y + 150, 'same proportions', { size: 16, weight: 700, anchor: 'middle', fill: C.ink, italic: true }).replace('x="450"', 'x="520"').replace('text-anchor="middle"', 'text-anchor="end"');
    return { s, h: 200 + s2.h };
  },
  (y) => steps(y, [
    { title: 'Girls are 360 ÷ 600 = 60% of the population' },
    { title: '60% of 50 = 30 girls, leaving 20 boys' },
    { title: 'Choose each group at random' },
  ], { size: 16, tsize: 18, gap: 8, pad: 12 }),
],
'Two proportion bars. The population of 600 is 360 girls (60%) and 240 boys (40%); the sample of 50 keeps the same proportions, 30 girls and 20 boys. Steps: girls are 360 ÷ 600 = 60%, 60% of 50 is 30, then choose each group at random.',
'A stratified sample copies the population\'s proportions: 30 girls and 20 boys out of 50.', H2.samp);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
