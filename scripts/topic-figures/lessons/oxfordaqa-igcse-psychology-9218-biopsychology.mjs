import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-psychology-9218-biopsychology';
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
  ns: '## The nervous system',
  endo: '## The endocrine system and fight or flight',
  neu: '## Neurons and synaptic transmission',
  hebb: "## Hebb's theory of learning and neuronal growth",
  brain: '## Brain structure and localisation of function',
  scan: '## Cognitive neuroscience and scanning',
  dmg: '## Neurological damage',
};

// Brain schematic (side view, front on the left)
function brain(x0, y0, sc, o = {}) {
  const P2 = (pts) => pts.map(([a, b]) => `${x0 + a * sc},${y0 + b * sc}`).join(' ');
  const id = `bc${Math.round(x0)}${Math.round(y0)}`;
  const E = { cx: x0 + 260 * sc, cy: y0 + 165 * sc, rx: 250 * sc, ry: 165 * sc };
  const f = o.fills || {};
  let s = `<clipPath id="${id}"><ellipse cx="${E.cx}" cy="${E.cy}" rx="${E.rx}" ry="${E.ry}"/></clipPath><g clip-path="url(#${id})">`;
  s += `<polygon points="${P2([[0, 0], [290, 0], [262, 190], [70, 222], [0, 222]])}" fill="${f.frontal || C.tealLight}"/>`;
  s += `<polygon points="${P2([[290, 0], [440, 0], [418, 180], [262, 190]])}" fill="${f.parietal || C.cream}"/>`;
  s += `<polygon points="${P2([[440, 0], [520, 0], [520, 340], [400, 340], [418, 180]])}" fill="${f.occipital || '#e4e9f2'}"/>`;
  s += `<polygon points="${P2([[0, 222], [70, 222], [262, 190], [418, 180], [400, 340], [0, 340]])}" fill="${f.temporal || C.teal}"/>`;
  s += `<polyline points="${P2([[290, 0], [262, 190]])}" fill="none" stroke="${C.ink}" stroke-width="2.5"/><polyline points="${P2([[440, 0], [418, 180], [400, 340]])}" fill="none" stroke="${C.ink}" stroke-width="2.5"/><polyline points="${P2([[0, 222], [70, 222], [262, 190], [418, 180]])}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += (o.inner || '') + `</g><ellipse cx="${E.cx}" cy="${E.cy}" rx="${E.rx}" ry="${E.ry}" fill="none" stroke="${C.ink}" stroke-width="3"/>`;
  if (o.cerebellum !== false) s += `<ellipse cx="${x0 + 420 * sc}" cy="${y0 + 320 * sc}" rx="${85 * sc}" ry="${40 * sc}" fill="${f.cerebellum || C.sand}" stroke="${C.ink}" stroke-width="3"/>`;
  return { s, pt: (a, b) => [x0 + a * sc, y0 + b * sc] };
}

// 01 Nervous system tree
F('01-nervous-system-divisions', 'Divisions of the nervous system', '', [
  (y) => {
    const ns = node(450, y, 300, 'Nervous system', '', { fill: C.mustard, edge: C.ink });
    const cns = node(235, y + 100, 390, 'Central nervous system', 'Brain and spinal cord. Processes information and makes decisions; the spinal cord relays messages to and from the brain', { fill: C.tealLight, edge: C.tealDark, minH: 150 });
    const pns = node(665, y + 100, 390, 'Peripheral nervous system', 'All nerves outside the brain and spinal cord. Carries messages between the CNS and the body', { fill: C.tealLight, edge: C.tealDark, minH: 150 });
    const br = node(125, y + 320, 170, 'Brain', '', { minH: 60 });
    const sp = node(320, y + 320, 170, 'Spinal cord', '', { minH: 60 });
    const so = node(555, y + 320, 210, 'Somatic', 'Sensory and motor nerves to skin and skeletal muscles', { minH: 150, fill: C.cream, edge: C.olive });
    const au = node(775, y + 320, 190, 'Autonomic', 'Nerves to internal organs and glands', { minH: 150, fill: C.cream, edge: C.olive });
    const f1 = card(450, y + 490, 210, { body: '**Voluntary** movement and sensation', size: 16, align: 'middle', nobox: true });
    const f2 = card(680, y + 490, 190, { body: '**Involuntary:** heart rate, breathing, digestion', size: 16, align: 'middle', nobox: true });
    const s = link(ns, cns) + link(ns, pns) + link(cns, br) + link(cns, sp) + link(pns, so) + link(pns, au) + [ns, cns, pns, br, sp, so, au].map((n) => n.s).join('') + f1.s + f2.s;
    return { s, h: 490 + Math.max(f1.h, f2.h) - 10 };
  },
],
'A tree diagram. The nervous system divides into the central nervous system (brain and spinal cord), which processes information and makes decisions, and the peripheral nervous system (all other nerves), which carries messages to and from the body. The peripheral system divides into the somatic system for voluntary movement and sensation and the autonomic system for involuntary functions such as heart rate, breathing and digestion.',
'The CNS decides; the PNS carries messages. Somatic is voluntary, autonomic is involuntary.', H2.ns);

// 02 Endocrine system and fight or flight
F('02-endocrine-fight-or-flight', 'Hormones and the fight-or-flight response', '', [
  (y) => row(y, [
    { kicker: 'NERVOUS SYSTEM', title: 'Messages along nerves', body: 'Electrical impulses' },
    { kicker: 'ENDOCRINE SYSTEM', kfill: C.olive, title: 'Hormones in the bloodstream', body: 'Glands release hormones that travel to target organs. Slower than nerves, but the effects last longer.', fill: C.cream, edge: C.olive },
  ], { gap: 18, fr: [1, 1.6], card: { size: 16, tsize: 19 } }),
  (y) => row(y, [
    { title: 'Pituitary gland', body: 'In the brain; controls many other glands' },
    { title: 'Adrenal glands', body: 'Above the kidneys; release **adrenaline**' },
  ], { gap: 18, card: { size: 16, tsize: 18, fill: C.panel } }),
  (y) => ({ s: T(30, y + 16, 'FIGHT OR FLIGHT', { size: 16, weight: 700, fill: C.rust }), h: 16 }),
  -10,
  (y) => row(y, [
    { kicker: '1', title: 'Threat perceived' },
    { kicker: '2', title: 'Autonomic nervous system activates the body' },
    { kicker: '3', title: 'Adrenal glands release adrenaline', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 44, card: { size: 16, tsize: 18, align: 'middle', minH: 0 } }),
  (y) => {
    const a = arrow(726, y - 18, 726, y + 6, { w: 3.5 });
    const c = card(30, y + 12, 840, { kicker: 'BODY READY TO FIGHT OR RUN', kfill: C.rust, body: ['Heart rate and breathing rate rise · pupils widen · muscles tense', 'sweating increases · digestion slows'], size: 18, bfill: C.ink, edge: C.rust, align: 'middle', gap: 2 });
    return { s: a + c.s, h: c.h + 12 };
  },
  (y) => {
    const a = arrow(450, y - 18, 450, y + 6, { w: 3.5, color: C.tealDark, marker: 'ahT' });
    const c = card(30, y + 12, 840, { title: 'Threat passes: the autonomic nervous system returns the body to a resting state', size: 16, tsize: 18, fill: C.tealLight, edge: C.tealDark, align: 'middle' });
    return { s: a + c.s, h: c.h + 12 };
  },
],
'The nervous system sends electrical messages along nerves; the endocrine system releases hormones into the blood, which is slower but longer lasting. The pituitary gland controls many glands and the adrenal glands release adrenaline. In fight or flight, a perceived threat activates the autonomic nervous system and adrenaline is released, raising heart and breathing rate, widening pupils, tensing muscles, increasing sweating and slowing digestion, until the threat passes.',
'Adrenaline and the autonomic nervous system ready the body to fight or run.', H2.endo);

// 03 James-Lange
F('03-james-lange', 'The James-Lange theory of emotion', '"We feel afraid because we tremble."', [
  (y) => row(y, [
    { kicker: '1', title: 'Event' },
    { kicker: '2', title: 'Physiological arousal', body: 'the body reacts', fill: C.cream, edge: C.olive },
    { kicker: '3', title: 'Interpretation of the arousal', body: '= the emotion', fill: C.tealLight, edge: C.tealDark },
  ], { arrows: true, gap: 50, card: { size: 17, tsize: 20, align: 'middle', minH: 120 } }),
  (y) => P('Arousal comes **before** the emotion, not after it.', { anchor: 'middle', size: 19, fill: C.ink })(y),
  (y) => row(y, [
    { kicker: 'SUPPORTS', title: 'Panic after a racing heart', body: 'Fits cases where people feel panic after noticing a racing heart.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'CHALLENGES (CANNON)', kfill: C.rust, title: 'Too slow', body: 'Bodily changes are too slow to explain how quickly emotions appear.' },
    { kicker: 'CHALLENGES (CANNON)', kfill: C.rust, title: 'Same arousal', body: 'The same arousal occurs in different emotions, such as fear and excitement.' },
  ], { gap: 14, card: { size: 16, tsize: 18 } }),
],
'Three steps in order: an event, then physiological arousal, then the brain\'s interpretation of that arousal, which is the emotion. Evaluation cards: panic after noticing a racing heart supports the theory; Cannon argued that bodily changes are too slow and that the same arousal occurs in different emotions such as fear and excitement.',
'James-Lange: the body reacts first, and the emotion is our interpretation of that reaction.', H2.endo);

// 04 Three types of neuron (reflex from the worked example)
F('04-sensory-relay-motor', 'Sensory, relay and motor neurons', 'Jun touches a hot pan. Schematic, not to scale', [
  (y) => {
    let s = '';
    const neuron = (x1, x2, cell, yy, col) => {
      let g = `<line x1="${x1}" y1="${yy}" x2="${x2}" y2="${yy}" stroke="${col}" stroke-width="5" stroke-linecap="round"/>`;
      [-14, 0, 14].forEach((d) => { g += `<line x1="${x1}" y1="${yy}" x2="${x1 - 16}" y2="${yy + d}" stroke="${col}" stroke-width="3" stroke-linecap="round"/>`; });
      [-10, 10].forEach((d) => { g += `<line x1="${x2}" y1="${yy}" x2="${x2 + 12}" y2="${yy + d}" stroke="${col}" stroke-width="3" stroke-linecap="round"/><circle cx="${x2 + 13}" cy="${yy + d}" r="4" fill="${col}"/>`; });
      g += `<circle cx="${cell}" cy="${yy}" r="15" fill="${C.panel}" stroke="${col}" stroke-width="4"/>`;
      return g;
    };
    // receptor, spinal cord, muscle
    s += card(30, y + 40, 150, { title: 'Heat receptors', body: 'in the hand', align: 'middle', size: 16, tsize: 17, fill: C.cream, edge: C.olive, minH: 90, vcenter: true }).s;
    s += `<rect x="340" y="${y}" width="220" height="170" rx="16" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5" stroke-dasharray="8 6"/>`;
    s += T(450, y + 28, 'Spinal cord (CNS)', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += card(720, y + 40, 150, { title: 'Arm muscles', body: 'contract', align: 'middle', size: 16, tsize: 17, fill: C.cream, edge: C.olive, minH: 90, vcenter: true }).s;
    const yy = y + 85;
    s += neuron(200, 352, 320, yy, C.blue) + neuron(386, 468, 427, yy, C.tealDark) + neuron(500, 698, 522, yy, C.rust);
    s += T(262, yy + 50, 'sensory', { size: 17, weight: 700, anchor: 'middle', fill: C.blue });
    s += T(427, yy + 50, 'relay', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += T(628, yy + 50, 'motor', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
    s += arrow(230, y + 196, 680, y + 196, { w: 3 }) + T(455, y + 224, 'direction of the message', { size: 16, anchor: 'middle', fill: C.muted });
    return { s, h: 232 };
  },
  (y) => row(y, [
    { kicker: 'SENSORY', kfill: C.blue, title: 'Receptors to the CNS', body: ['Carries messages from the senses', '**Long dendrites, short axon**'] },
    { kicker: 'RELAY', title: 'Within the CNS', body: ['Connects sensory and motor neurons', '**Short dendrites, short axon**'], fill: C.tealLight, edge: C.tealDark },
    { kicker: 'MOTOR', kfill: C.rust, title: 'CNS to muscles and glands', body: ['Carries messages that cause action', '**Short dendrites, long axon**'] },
  ], { gap: 14, card: { size: 16, tsize: 18, gap: 8 } }),
],
'A message passes from heat receptors in the hand along a sensory neuron to the spinal cord, through a relay neuron, and along a motor neuron to the arm muscles, which contract. Cards give each neuron\'s location, job and structure: sensory has long dendrites and a short axon, relay has both short, motor has short dendrites and a long axon.',
'Sensory neurons carry messages in, relay neurons connect, motor neurons carry messages out to act.', H2.neu);

// 05 Synaptic transmission
F('05-synaptic-transmission', 'Synaptic transmission: electrical to chemical', 'Schematic, not to scale', [
  (y) => {
    let s = '';
    s += `<path d="M30,${y + 30} L250,${y + 30} C340,${y + 30} 380,${y + 80} 380,${y + 140} C380,${y + 200} 340,${y + 250} 250,${y + 250} L30,${y + 250}" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>`;
    s += arrow(50, y + 200, 160, y + 200, { w: 6, color: C.rust, marker: 'ahR' }) + T(50, y + 176, 'electrical impulse', { size: 16, weight: 700, fill: C.rust });
    [[270, 80], [320, 145], [255, 205], [205, 115]].forEach(([vx, vy]) => {
      s += `<circle cx="${vx}" cy="${y + vy}" r="24" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
      [[-8, -6], [7, -8], [0, 8], [-9, 9], [9, 6]].forEach(([dx, dy]) => { s += `<circle cx="${vx + dx}" cy="${y + vy + dy}" r="3.5" fill="${C.olive}"/>`; });
    });
    [[410, 100], [425, 130], [405, 155], [432, 180], [415, 205], [440, 115]].forEach(([dx, dy]) => { s += `<circle cx="${dx}" cy="${y + dy}" r="4.5" fill="${C.olive}"/>`; });
    // reuptake arrow
    s += path(`M440,${y + 238} C420,${y + 262} 380,${y + 262} 362,${y + 228}`, { stroke: C.tealDark, w: 3, extra: 'marker-end="url(#ahT)"' });
    s += T(420, y + 284, 'reuptake', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += `<rect x="480" y="${y + 10}" width="390" height="260" fill="${C.cream}" fill-opacity="0.5"/>`;
    s += `<path d="M480,${y + 10} L480,${y + 270}" stroke="${C.ink}" stroke-width="3"/>`;
    [80, 140, 200].forEach((ry) => { s += `<path d="M480,${y + ry - 14} l-14,0 l0,6 l8,0 l0,16 l-8,0 l0,6 l14,0 Z" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>`; });
    s += T(458, y + 2, 'synaptic gap', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
    s += T(150, y + 280, 'sending neuron (axon terminal)', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += T(675, y + 296, 'next neuron', { size: 16, weight: 700, anchor: 'middle' });
    s += `<line x1="494" y1="${y + 126}" x2="560" y2="${y + 100}" stroke="${C.ink}" stroke-width="1.5"/>` + T(566, y + 104, 'receptors', { size: 16 });
    s += `<line x1="185" y1="${y + 102}" x2="140" y2="${y + 76}" stroke="${C.ink}" stroke-width="1.5"/>` + T(70, y + 70, 'vesicles', { size: 16 });
    s += badge(190, y + 198, 17, '1', C.cream) + badge(425, y + 62, 17, '2', C.cream) + badge(510, y + 240, 17, '3', C.cream) + badge(330, y + 270, 17, '5', C.cream);
    s += para(590, y + 160, '**4** Excitatory: next neuron **more** likely to fire. Inhibitory: **less** likely.', 260, { size: 16 }).s;
    return { s, h: 300 };
  },
  (y) => steps(y, [
    { title: 'The impulse reaches the axon terminal, where vesicles hold neurotransmitters' },
    { title: 'Neurotransmitters are released into the synaptic gap' },
    { title: 'They bind to receptors on the next neuron' },
    { title: 'The effect is excitatory or inhibitory' },
    { title: 'Reuptake: leftover neurotransmitter is taken back into the first neuron, or broken down, so the signal stops' },
  ], { size: 16, tsize: 17, gap: 8, pad: 12 }),
  (y) => note(y, 'Whether the next neuron fires', 'It receives inputs from many neurons at once. If excitation outweighs inhibition overall, it fires; if not, it does not.', { size: 16, tsize: 18 }),
],
'A sending neuron\'s axon terminal holds vesicles of neurotransmitter. Five steps: the impulse arrives, neurotransmitters are released into the gap, they bind to receptors on the next neuron, the effect is excitatory or inhibitory, and leftover neurotransmitter is taken back by reuptake or broken down. The next neuron fires only if excitation outweighs inhibition overall.',
'Electrical along the neuron, chemical across the gap; reuptake by the sending neuron ends the signal.', H2.neu);

// 06 Hebb
F('06-hebb-cell-assemblies', "Hebb's theory of learning", 'When one neuron repeatedly helps to fire another', [
  (y) => {
    const pair = (x, w, lab, sub, f) => {
      const n1 = `<circle cx="${x + 60}" cy="${y + 70}" r="26" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>`;
      const n2 = `<circle cx="${x + 320}" cy="${y + 70}" r="26" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>`;
      const l = `<line x1="${x + 88}" y1="${y + 70}" x2="${x + 292}" y2="${y + 70}" stroke="${f}" stroke-width="${w}" stroke-linecap="round"/>`;
      return panel(x, y, 380, 180) + l + n1 + n2 + T(x + 190, y + 130, lab, { size: 19, weight: 700, anchor: 'middle' }) + T(x + 190, y + 158, sub, { size: 16, anchor: 'middle', fill: C.muted });
    };
    let s = pair(30, 3, 'Before', 'a weak connection', C.panelEdge) + pair(490, 14, 'After repeated firing', 'stronger and more efficient', C.tealDark);
    s += arrow(418, y + 70, 482, y + 70, { w: 4 }) + T(450, y + 54, 'repeat', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
    return { s, h: 180 };
  },
  (y) => row(y, [
    { kicker: 'CELL ASSEMBLIES', title: 'Groups active together', body: 'Neurons repeatedly active together form cell assemblies that represent a memory or skill.' },
    { kicker: 'LEARNING CHANGES THE BRAIN', title: 'Practice speeds pathways', body: 'Practice makes pathways quicker to activate.', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'LINK TO MEMORY', title: 'Rehearsal', body: 'Rehearsal strengthens synaptic connections.', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, card: { size: 16, tsize: 18 } }),
],
'Two pairs of neurons: before, a thin weak connection; after one repeatedly helps to fire the other, a thick, stronger and more efficient connection. Cards explain cell assemblies that represent a memory or skill, that practice makes pathways quicker to activate, and that rehearsal strengthens synaptic connections.',
'Learning physically changes the brain: repeated firing strengthens connections.', H2.hebb);

// 07 Localisation of function
F('07-localisation-of-function', 'Lobes and localised areas', 'Schematic side view, front on the left. Not to scale', [
  (y) => {
    const x0 = 40, sc = 1.05;
    const strip = (a0, b0, a1, b1, col) => `<line x1="${x0 + a0 * sc}" y1="${y + b0 * sc}" x2="${x0 + a1 * sc}" y2="${y + b1 * sc}" stroke="${col}" stroke-width="${13 * sc}" stroke-linecap="butt"/>`;
    const inner = strip(278, 8, 252, 186, C.tealDark) + strip(302, 8, 276, 186, C.olive) +
      `<ellipse cx="${x0 + 175 * sc}" cy="${y + 150 * sc}" rx="${34 * sc}" ry="${18 * sc}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` +
      `<ellipse cx="${x0 + 345 * sc}" cy="${y + 215 * sc}" rx="${34 * sc}" ry="${18 * sc}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` +
      `<ellipse cx="${x0 + 250 * sc}" cy="${y + 235 * sc}" rx="${36 * sc}" ry="${15 * sc}" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>` +
      `<ellipse cx="${x0 + 478 * sc}" cy="${y + 165 * sc}" rx="${26 * sc}" ry="${40 * sc}" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>`;
    const b = brain(x0, y, sc, { inner });
    let s = b.s;
    const lob = (a, bb, l) => T(x0 + a * sc, y + bb * sc, l, { size: 18, weight: 700, anchor: 'middle' });
    s += lob(130, 90, 'Frontal') + lob(365, 85, 'Parietal') + lob(335, 262, 'Temporal') + T(x0 + 420 * sc, y + 326 * sc, 'Cerebellum', { size: 16, weight: 700, anchor: 'middle' });
    const labs = [
      [[290, 40], 'Somatosensory area', 'touch, temperature, body position (parietal)', C.olive],
      [[265, 60], 'Motor area', 'voluntary movement (frontal)', C.tealDark],
      [[478, 150], 'Visual area', 'vision (occipital lobe)', C.ink],
      [[345, 215], "Wernicke's area", 'understanding language (temporal, usually left)', C.olive],
    ];
    const LX = 612;
    labs.forEach(([[a, bb], t1, t2, col], i) => {
      const ly = y + 6 + i * 84, [px, py] = b.pt(a, bb);
      s += `<path d="M${px},${py} C${(px + LX) / 2 + 40},${py} ${LX - 60},${ly + 14} ${LX - 8},${ly + 14}" fill="none" stroke="${C.ink}" stroke-width="1.6"/><circle cx="${px}" cy="${py}" r="4" fill="${C.ink}"/>`;
      s += T(LX, ly + 18, t1, { size: 17, weight: 700, fill: col }) + para(LX, ly + 40, t2, 258, { size: 15, fill: C.muted, lh: 18 }).s;
    });
    const bot = [[[175, 150], "Broca's area", 'speech production (frontal, usually left)', 40], [[250, 235], 'Auditory area', 'hearing (temporal)', 400]];
    bot.forEach(([[a, bb], t1, t2, lx]) => {
      const [px, py] = b.pt(a, bb), ly = y + 400;
      s += `<path d="M${px},${py} C${px},${ly - 20} ${lx + 40},${ly - 40} ${lx + 40},${ly - 2}" fill="none" stroke="${C.ink}" stroke-width="1.6"/><circle cx="${px}" cy="${py}" r="4" fill="${C.ink}"/>`;
      s += T(lx, ly + 16, t1, { size: 17, weight: 700, fill: t1.startsWith('Broca') ? C.olive : C.ink }) + T(lx, ly + 38, t2, { size: 15, fill: C.muted });
    });
    return { s, h: 444 };
  },
  (y) => row(y, [
    { title: 'Opposite side', body: 'Each side of the motor area controls movement on the opposite side of the body.' },
    { title: 'Cerebellum', body: 'Balance, posture and coordination of movement.' },
  ], { gap: 18, card: { size: 16, tsize: 18, fill: C.cream, edge: C.olive } }),
],
'A schematic side view of the brain showing the frontal, parietal, temporal and occipital lobes and the cerebellum. The motor area is at the back of the frontal lobe with Broca\'s area lower in the frontal lobe; the somatosensory area is at the front of the parietal lobe; the auditory area and Wernicke\'s area are in the temporal lobe; the visual area is in the occipital lobe.',
'Specific areas carry out specific functions: Broca\'s is frontal, Wernicke\'s is temporal.', H2.brain);

// 08 Two studies
F('08-penfield-and-tulving', 'Two studies of the brain', '', [
  (y) => {
    const study = (x, w, head, fill, edge, items) => {
      let s = '', cy = y + 56;
      const parts = items.map(([k, b, kf]) => card(x + 16, 0, w - 32, { kicker: k, kfill: kf || C.tealDark, body: b, size: 16, bfill: C.ink, nobox: true, pad: 4 }));
      const H = 56 + parts.reduce((a, p) => a + p.h + 12, 0) + 6;
      s += panel(x, y, w, H, fill, edge) + T(x + 20, y + 36, head, { size: 21, weight: 700 });
      items.forEach(([k, b, kf], i) => {
        const c = card(x + 16, cy, w - 32, { kicker: k, kfill: kf || C.tealDark, body: b, size: 16, bfill: C.ink, nobox: true, pad: 4 });
        s += c.s; cy += c.h + 12;
        if (i < items.length - 1) s += `<line x1="${x + 20}" y1="${cy - 7}" x2="${x + w - 20}" y2="${cy - 7}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
      });
      return { s, h: H };
    };
    const a = study(30, 410, "Penfield: interpretive cortex", C.panel, C.panelEdge, [
      ['PARTICIPANTS', 'Patients with epilepsy, **awake** during surgery'],
      ['PROCEDURE', 'Stimulated points on the brain\'s surface with a weak electric current; recorded what patients reported'],
      ['FINDING', 'Stimulating parts of the **temporal lobe** sometimes produced vivid experiences, such as hearing music or reliving past events'],
      ['EVALUATION', 'Direct evidence linking areas to experiences, but brains not typical (epilepsy) and only a minority reported such experiences', C.rust],
    ]);
    const b = study(460, 410, "Tulving: 'gold' memory study", C.panel, C.panelEdge, [
      ['PARTICIPANTS', 'A small group, including Tulving'],
      ['PROCEDURE', 'Injected with a small dose of radioactive gold so active areas could be detected; thought about personal experiences or general facts'],
      ['FINDING', '**Episodic** thinking: more activity towards the **front** of the cortex. **Semantic**: towards the **back**'],
      ['EVALUATION', 'Supports localisation and separate memory types, but the sample was tiny and the pattern was not clear for every participant', C.rust],
    ]);
    return { s: a.s + b.s, h: Math.max(a.h, b.h) };
  },
  (y) => {
    const b = brain(150, y + 6, 0.42, { fills: { frontal: C.mustard, parietal: C.panel, occipital: C.teal, temporal: C.panel }, cerebellum: false });
    const c = card(500, y, 370, { title: 'Scans used in this field', body: ['**CT:** structure only', '**PET** and **fMRI:** activity during a task'], size: 16, tsize: 18, gap: 4 });
    const lab = T(140, y + 66, 'episodic:', { size: 16, weight: 700, fill: C.olive, anchor: 'end' }) + T(140, y + 88, 'front', { size: 16, weight: 700, fill: C.olive, anchor: 'end' }) +
      T(380, y + 66, 'semantic:', { size: 16, weight: 700, fill: C.tealDark }) + T(380, y + 88, 'back', { size: 16, weight: 700, fill: C.tealDark });
    return { s: b.s + lab + c.s, h: Math.max(150, c.h) };
  },
],
'Two study cards. Penfield stimulated the brain surface of awake epilepsy patients with a weak current; stimulating parts of the temporal lobe sometimes produced vivid experiences, though the patients were not typical. Tulving\'s small group was injected with radioactive gold; episodic thinking was linked to the front of the cortex and semantic thinking to the back, though the sample was tiny.',
'Both studies support localisation, but both used small or unusual samples.', H2.scan);

// 09 Neurological damage
F('09-neurological-damage', 'Where the damage is decides the effect', 'Stroke cuts off blood to part of the brain; injury damages tissue directly', [
  (y) => {
    const rows = [
      ['Motor area (one side)', 'Weakness or paralysis on the **opposite** side of the body'],
      ["Broca's area", '**Slow, effortful** speech; understanding remains'],
      ["Wernicke's area", '**Fluent but meaningless** speech; poor understanding'],
      ['Frontal lobe', 'Changes to **personality** and **self-control**'],
    ];
    let s = '', cy = y;
    rows.forEach(([a, b], i) => {
      const l = card(30, cy, 330, { title: a, size: 16, tsize: 19, fill: i % 2 ? C.tealLight : C.cream, edge: i % 2 ? C.tealDark : C.olive, minH: 76, vcenter: true });
      const r = card(420, cy, 450, { body: b, size: 17, bfill: C.ink, minH: 76, vcenter: true });
      s += l.s + r.s + arrow(366, cy + 38, 412, cy + 38, { w: 3.5 });
      cy += 76 + 14;
    });
    s = T(195, y - 8, 'DAMAGED AREA', { size: 15, weight: 700, anchor: 'middle', fill: C.muted }) + T(645, y - 8, 'EFFECT', { size: 15, weight: 700, anchor: 'middle', fill: C.muted }) + s;
    return { s, h: cy - y - 14 };
  },
],
'Four rows linking damaged areas to effects: the motor area on one side causes weakness or paralysis on the opposite side; Broca\'s area causes slow, effortful speech with understanding intact; Wernicke\'s area causes fluent but meaningless speech and poor understanding; the frontal lobe can change personality and self-control.',
'Damage effects follow localisation: the area hit predicts the ability lost.', H2.dmg, { top: 140 });

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
