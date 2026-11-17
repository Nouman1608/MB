import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-world-history-9245-paper-1-section-b';
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
  q: '## The four questions',
  o1: '## Option 1: The origins of the First World War, c1890-1915',
  o2: "## Option 2: Hitler's foreign policy and the origins of the Second World War, 1933-1941",
  o3: '## Option 3: The origins and development of the Cold War, 1945-1960',
  o4: '## Option 4: Détente and the collapse of communism, c1969-1991',
  w9: '## Worked example: a 9-mark answer',
  w12: '## Worked example: planning a 12-mark answer',
};

function vtimeline(y, items, o = {}) {
  const LX = o.lx ?? 150, W = 870 - LX - 40;
  let s = '', cy = y;
  const mk = (it, yy) => card(LX + 40, yy, W, { title: it.title, body: it.body, size: 16, tsize: 18, pad: 12, fill: it.fill, edge: it.edge, tgap: 3 });
  const total = items.reduce((a, it) => a + mk(it, 0).h + 9, -9);
  s += `<line x1="${LX}" y1="${y + 8}" x2="${LX}" y2="${y + total - 8}" stroke="${C.ink}" stroke-width="4"/>`;
  items.forEach((it) => {
    const c = mk(it, cy);
    s += c.s + `<circle cx="${LX}" cy="${cy + c.h / 2}" r="${it.d ? 10 : 6}" fill="${it.dot || (it.d ? C.mustard : C.panel)}" stroke="${C.ink}" stroke-width="3"/>`;
    if (it.d) s += T(LX - 20, cy + c.h / 2 + 6, it.d, { size: 17, weight: 700, anchor: 'end' });
    cy += c.h + 9;
  });
  return { s, h: total };
}
const RED = { fill: '#f6e3d8', edge: C.rust, dot: C.rust };

// 01 The four questions
F('01-four-questions', 'Section B: four questions, rising demands', 'One option studied; 30 marks', [
  (y) => {
    const qs = [
      ['Q1', 3, 'AO1', 'Show knowledge', 'Three relevant points; no explanation needed', C.panel, C.panelEdge],
      ['Q2', 6, 'AO1 + AO2', 'Explain one way', 'One cause or consequence, with precise knowledge and a clear link', C.tealLight, C.tealDark],
      ['Q3', 9, 'AO1 + AO2', 'Explain two ways or reasons', 'Keep the two separate; each linked to how it caused the development', C.cream, C.olive],
      ['Q4', 12, 'AO1 + AO2', 'Given factor + at least one other', 'A line of reasoning and a judgement on relative importance', C.mustard, C.ink],
    ];
    let s = '', cy = y;
    qs.forEach(([q, m, ao, t1, t2, f, e]) => {
      const bw = m * 23;
      const c = card(330, cy, 540, { kicker: ao, title: t1, body: t2, size: 16, tsize: 18, pad: 12, minH: 78, vcenter: true, tgap: 2 });
      const hh = c.h;
      s += `<rect x="30" y="${cy}" width="${bw}" height="${hh}" rx="12" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + T(30 + bw / 2, cy + hh / 2 - 4, q, { size: 19, weight: 700, anchor: 'middle' }) + T(30 + bw / 2, cy + hh / 2 + 20, m + ' marks', { size: 16, anchor: 'middle' });
      s += c.s;
      cy += hh + 12;
    });
    return { s: s + T(30, cy + 6, 'Bar lengths show marks, to scale', { size: 15, fill: C.muted }), h: cy - y + 8 };
  },
  (y) => note(y, '', 'Allow about 50 minutes for Section B, with roughly 18 for the 12-mark question. Plan it first.', { align: 'middle', size: 17 }),
],
'Four questions with bars sized by marks: Question 1 (3 marks, AO1) shows knowledge; Question 2 (6) explains one way; Question 3 (9) explains two ways or reasons; Question 4 (12) explains a given factor and at least one other and judges their relative importance. Allow about 50 minutes, about 18 for the 12-mark question.',
'From knowledge to explanation to judgement as the marks rise.', H2.q);

// 02 Alliances
F('02-alliances-1882-1907', 'The alliance system, 1882-1907', 'Schematic, not a map', [
  (y) => {
    let s = '';
    const nodeB = (cx, cy, name, f, e) => { const w = tw(name, 18, 700) + 40; return { s: `<rect x="${cx - w / 2}" y="${cy - 24}" width="${w}" height="48" rx="24" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + T(cx, cy + 6, name, { size: 18, weight: 700, anchor: 'middle' }), cx, cy, w }; };
    const G = nodeB(170, y + 80, 'Germany', C.cream, C.olive), A = nodeB(170, y + 180, 'Austria-Hungary', C.cream, C.olive), I = nodeB(170, y + 280, 'Italy', C.cream, C.olive);
    const F = nodeB(700, y + 80, 'France', C.tealLight, C.tealDark), R = nodeB(700, y + 280, 'Russia', C.tealLight, C.tealDark), B = nodeB(520, y + 180, 'Britain', C.tealLight, C.tealDark);
    s += `<rect x="40" y="${y + 30}" width="260" height="300" rx="16" fill="none" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="8 6"/>` + T(170, y + 22, 'Triple Alliance (1882)', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
    const ln = (a, b, lab, lx, ly) => `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${C.tealDark}" stroke-width="4"/>` + T(lx, ly, lab, { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += ln([700, y + 104], [700, y + 256], '', 0, 0) + T(712, y + 176, 'Franco-Russian', { size: 16, weight: 700, fill: C.tealDark }) + T(712, y + 196, 'Alliance (1894)', { size: 16, weight: 700, fill: C.tealDark });
    s += ln([548, y + 160], [660, y + 100], '', 0, 0) + T(560, y + 112, 'Entente Cordiale', { size: 16, weight: 700, anchor: 'end', fill: C.tealDark }).replace(`x="560"`, `x="590"`).replace('text-anchor="end"', 'text-anchor="end"') + T(590, y + 132, '(1904)', { size: 16, weight: 700, anchor: 'end', fill: C.tealDark });
    s += ln([548, y + 200], [660, y + 260], '', 0, 0) + T(590, y + 254, 'Anglo-Russian', { size: 16, weight: 700, anchor: 'end', fill: C.tealDark }) + T(590, y + 274, 'Agreement (1907)', { size: 16, weight: 700, anchor: 'end', fill: C.tealDark });
    s += G.s + A.s + I.s + F.s + R.s + B.s;
    return { s, h: 330 };
  },
  (y) => note(y, '', 'Britain left "Splendid Isolation" as rivalry with Germany grew. In 1914 Italy did **not** join its partners; it joined the Allies in 1915.', { size: 17 }),
],
'A schematic of alliances. Germany, Austria-Hungary and Italy form the Triple Alliance of 1882. France and Russia are linked by the Franco-Russian Alliance of 1894, Britain and France by the Entente Cordiale of 1904, and Britain and Russia by the Anglo-Russian Agreement of 1907. A note says Britain left Splendid Isolation and Italy did not join its partners in 1914.',
'Two groupings formed by 1907; Britain ended its isolation as rivalry with Germany grew.', H2.o1);

// 03 July Crisis
F('03-july-crisis-1914', 'From Sarajevo to world war, 1914', 'How a regional conflict escalated', [
  (y) => vtimeline(y, [
    { d: '28 June', title: 'Franz Ferdinand assassinated in Sarajevo', body: 'By Gavrilo Princip, linked to the Black Hand', ...RED },
    { d: '', title: "Austria-Hungary's ultimatum to Serbia", body: 'Only partly accepted' },
    { d: '28 July', title: 'Austria-Hungary declares war on Serbia' },
    { d: '', title: 'Russia mobilises' },
    { d: '', title: 'Germany declares war on Russia and France' },
    { d: '', title: 'Schlieffen Plan: German troops through Belgium', fill: C.cream, edge: C.olive },
    { d: '4 Aug', title: 'Britain declares war', body: 'A guarantor of Belgian neutrality under the 1839 Treaty of London', fill: C.tealLight, edge: C.tealDark, dot: C.teal },
    { d: 'later', title: 'Ottoman Empire joins Germany (1914); Italy joins the Allies (1915)' },
  ], { lx: 130 }),
],
'A sequence: Franz Ferdinand assassinated on 28 June 1914; Austria-Hungary\'s ultimatum only partly accepted; war on Serbia on 28 July; Russia mobilises; Germany declares war on Russia and France; the Schlieffen Plan sends troops through Belgium; Britain declares war on 4 August as a guarantor of Belgian neutrality; the Ottoman Empire and Italy join later.',
'Each step drew in another power: alliances and the Schlieffen Plan turned a Balkan war into a world war.', H2.o1);

// 04 Hitler's steps
F('04-hitler-steps-to-war', "Hitler's foreign policy, 1933-1941", 'Aims: overturn Versailles, unite German-speakers, Lebensraum in the east', [
  (y) => vtimeline(y, [
    { d: '1933', title: 'Leaves the Disarmament Conference and the League' },
    { d: '1934', title: 'Non-aggression pact with Poland' },
    { d: '1935', title: 'Saar returns; conscription reintroduced', body: 'Stresa Front formed, then the Anglo-German Naval Agreement' },
    { d: 'Mar 1936', title: 'Rhineland remilitarised', body: 'Rome-Berlin Axis and Anti-Comintern Pact (1936); aid to Franco', fill: C.cream, edge: C.olive },
    { d: 'Mar 1938', title: 'Anschluss', fill: C.cream, edge: C.olive },
    { d: 'Sep 1938', title: 'Munich Agreement over the Sudetenland', fill: C.cream, edge: C.olive },
    { d: 'Mar 1939', title: 'Rest of Czechoslovakia occupied: appeasement ends', body: 'Britain and France guarantee Poland; Pact of Steel (May)', ...RED },
    { d: '23 Aug 1939', title: 'Nazi-Soviet Pact', ...RED },
    { d: '1 Sep 1939', title: 'Invasion of Poland; Britain and France declare war (3 Sep)', ...RED },
    { d: '1941', title: 'Invasion of the USSR (June); Pearl Harbor (December)', fill: C.tealLight, edge: C.tealDark, dot: C.teal },
  ], { lx: 150 }),
],
'A timeline of Hitler\'s foreign policy: leaving the League (1933), the pact with Poland (1934), the Saar and conscription (1935), the Rhineland (March 1936), the Anschluss (March 1938), Munich (September 1938), the occupation of Czechoslovakia (March 1939), the Nazi-Soviet Pact (23 August 1939), the invasion of Poland and declarations of war (September 1939), and the widening of the war in 1941.',
'Step by step from leaving the League to war, with March 1939 ending appeasement.', H2.o2);

// 05 Cold War action and reaction
F('05-cold-war-action-reaction', 'Action and reaction, 1947-1949', 'Each move by one side brought a response from the other', [
  (y) => {
    const pairs = [
      ['1947', 'Truman Doctrine', 'Support for Greece and Turkey; containment', 'Cominform', 'Soviet response'],
      ['1947', 'Marshall Aid', 'Money to rebuild Europe', 'Rejected; Comecon', 'Seen as spreading US influence'],
      ['1948', 'New currency in the Western zones', '', 'Berlin Blockade', 'Answered by the Airlift (1948-49)'],
      ['1949', 'NATO formed', '', 'Federal Republic and GDR; first Soviet atomic test', ''],
    ];
    let s = T(250, y + 14, 'WEST', { size: 15, weight: 700, anchor: 'middle', fill: C.blue }) + T(680, y + 14, 'SOVIET UNION', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
    let cy = y + 28;
    pairs.forEach(([d, a, ab, b, bb]) => {
      const l = card(110, cy, 300, { title: a, body: ab || undefined, size: 15, tsize: 18, pad: 12, fill: C.tealLight, edge: C.tealDark, minH: 84, vcenter: true });
      const r = card(530, cy, 340, { title: b, body: bb || undefined, size: 15, tsize: 18, pad: 12, fill: '#f6e3d8', edge: C.rust, minH: 84, vcenter: true });
      const h = Math.max(l.h, r.h);
      s += card(110, cy, 300, { title: a, body: ab || undefined, size: 15, tsize: 18, pad: 12, fill: C.tealLight, edge: C.tealDark, minH: h, vcenter: true }).s + card(530, cy, 340, { title: b, body: bb || undefined, size: 15, tsize: 18, pad: 12, fill: '#f6e3d8', edge: C.rust, minH: h, vcenter: true }).s;
      s += arrow(416, cy + h / 2, 522, cy + h / 2, { w: 3.5 }) + T(30, cy + h / 2 + 6, d, { size: 18, weight: 700 });
      cy += h + 12;
    });
    return { s, h: cy - y - 12 };
  },
  (y) => note(y, '', 'Europe was now divided **economically** as well as politically.', { align: 'middle', size: 17 }),
],
'Four action-and-reaction rows: the Truman Doctrine (1947) and the Soviet creation of Cominform; Marshall Aid (1947), rejected by the USSR, which set up Comecon; the new currency in the Western zones (1948) and the Berlin Blockade, answered by the Airlift; and NATO (1949) alongside two German states and the first Soviet atomic test.',
'Each Western move met a Soviet response, deepening the division of Europe.', H2.o3);

// 06 Detente phases
F('06-detente-to-collapse', 'Détente, renewed tension and collapse, c1969-1991', '', [
  (y) => {
    const ph = [
      ['Détente', 'Motives: cost of the arms race, Sino-Soviet split, Ostpolitik', ['ABM Treaty and SALT I (1972)', 'Nixon-Brezhnev summits', 'Helsinki Accords (1975)'], C.tealLight, C.tealDark],
      ['Collapse of détente', 'From the invasion of Afghanistan (Dec 1979)', ['SALT II not ratified', 'Olympic boycotts (1980, 1984)', 'Reagan: SDI (1983), new missiles in Europe'], '#f6e3d8', C.rust],
      ['Second détente', 'Gorbachev, from 1985', ['Reykjavik Summit (1986)', 'START treaty (1991)'], C.tealLight, C.tealDark],
      ['Collapse of communism', 'To December 1991', ['Afghanistan withdrawal complete (1989)', 'Solidarity wins elections (1989)', 'Berlin Wall opened (Nov 1989)', 'USSR collapses (Dec 1991)'], C.cream, C.olive],
    ];
    const r = row(y, ph.map(([t1, sub, list, f, e]) => ({ title: t1, body: ['*' + sub + '*', ...list], fill: f, edge: e })), { arrows: true, gap: 26, vcenter: false, card: { size: 15, tsize: 18, pad: 13, gap: 6 } });
    return r;
  },
  (y) => note(y, 'Also part of the collapse', 'Glasnost and perestroika; the Velvet Revolution in Czechoslovakia; the end of communist rule in East Germany and Hungary.', { size: 16, fill: C.panel, edge: C.olive }),
],
'Four phases left to right: détente, with SALT I and the Helsinki Accords; the collapse of détente after the invasion of Afghanistan, with boycotts and SDI; a second détente under Gorbachev, with Reykjavik and START; and the collapse of communism, with the opening of the Berlin Wall in 1989 and the end of the USSR in December 1991.',
'Détente, renewed tension, a second détente, then collapse.', H2.o4);

// 07 9-mark structure
F('07-nine-mark-structure', 'Structure of a 9-mark answer', 'Two reasons why tension increased, 1945-49: keep them separate', [
  (y) => {
    const col = (x, n, name, detail, link, f, e) => {
      let s = panel(x, y, 405, 380, f, e) + T(x + 22, y + 36, 'REASON ' + n, { size: 15, weight: 700, fill: C.muted }) + para(x + 22, y + 64, name, 360, { size: 19, weight: 700 }).s;
      const d = card(x + 18, y + 120, 369, { kicker: 'PRECISE DETAIL', body: detail, size: 15, bfill: C.ink, pad: 12 });
      const l = card(x + 18, y + 136 + d.h, 369, { kicker: 'LINK: WHY TENSION ROSE', kfill: C.rust, body: link, size: 15, bfill: C.ink, pad: 12, fill: C.cream, edge: C.olive });
      return s + d.s + arrow(x + 202, y + 120 + d.h + 2, x + 202, y + 134 + d.h, { w: 3 }) + l.s;
    };
    return { s: col(30, 1, 'The division of Germany and the Berlin Blockade', 'New Western currency (1948); Stalin blockaded West Berlin; supplied by air until 1949', 'Germany became a test of strength; led to NATO (1949) and two German states', C.panel, C.panelEdge) +
      col(465, 2, 'The Truman Doctrine and Marshall Aid', 'Support for Greece and Turkey (1947); aid to rebuild Europe; Stalin refused it and set up Cominform and Comecon', 'Europe divided economically as well as politically', C.panel, C.panelEdge), h: 380 };
  },
],
'Two panels, one per reason. Reason 1: the division of Germany and the Berlin Blockade, with precise detail (the 1948 currency, the blockade and airlift) and a link (Germany as a test of strength, leading to NATO and two German states). Reason 2: the Truman Doctrine and Marshall Aid, with detail and a link (Europe divided economically as well as politically).',
'Name each reason, support it with precise detail, then link it to why tension rose.', H2.w9);

// 08 12-mark planning
F('08-twelve-mark-plan', 'Planning a 12-mark judgement', '"The alliance system was the main reason…" How far do you agree?', [
  (y) => {
    let s = card(30, y, 840, { kicker: 'GIVEN FACTOR', title: 'Alliances', body: 'Turned the Austro-Serbian war into a European war as Russia, Germany and France were drawn in', size: 16, tsize: 19, fill: C.cream, edge: C.olive }).s;
    return { s, h: card(30, y, 840, { kicker: 'GIVEN FACTOR', title: 'Alliances', body: 'Turned the Austro-Serbian war into a European war as Russia, Germany and France were drawn in', size: 16, tsize: 19 }).h };
  },
  (y) => grid(y, [
    { kicker: 'OTHER FACTOR', title: 'The Schlieffen Plan', body: 'Attack on France through Belgium brought Britain in' },
    { kicker: 'OTHER FACTOR', title: 'Naval race and imperial rivalry', body: 'Britain saw Germany as a threat' },
    { kicker: 'OTHER FACTOR', title: 'Nationalism in the Balkans' },
    { kicker: 'OTHER FACTOR', title: "Leaders' decisions", body: "e.g. Germany's support for Austria-Hungary" },
  ], 2, { gap: 14, vgap: 12, card: { size: 16, tsize: 18, fill: C.tealLight, edge: C.tealDark } }),
  (y) => note(y, 'Judgement: weigh, do not list', 'Alliances created the framework, military planning made escalation rapid, and the invasion of Belgium decided Britain\'s entry. Alliances alone did not make war inevitable: Italy did not join its partners.', { size: 16, fill: C.panel, edge: C.ink }),
],
'A plan for a 12-mark answer: the given factor, alliances, drew Russia, Germany and France into the Austro-Serbian war. Four other factors: the Schlieffen Plan, the naval race and imperial rivalry, Balkan nationalism, and leaders\' decisions. The judgement weighs them: alliances were the framework, but planning made escalation rapid and Belgium decided Britain\'s entry.',
'Explain the given factor and at least one other, then judge which mattered more and why.', H2.w12);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
