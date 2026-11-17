import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-igcse-world-history-9245-paper-1-section-a';
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
  how: '## How Section A works',
  pre: '## Using the pre-release well',
  meth: '## Method for each question',
  o1: '## Option 1: Peacemaking and the League of Nations, c1919-1939',
  o2: '## Option 2: Crises of the Cold War, 1960-1975',
  we: '## Worked example: Question 3',
};

// Timeline helper: vertical, years on the left
function vtimeline(y, items, o = {}) {
  const LX = o.lx ?? 150, W = 870 - LX - 40;
  let s = '', cy = y;
  const cards = items.map((it) => card(LX + 40, 0, W, { title: it.title, body: it.body, size: 16, tsize: 18, pad: 13, fill: it.fill, edge: it.edge, tgap: 3 }));
  const total = cards.reduce((a, c) => a + c.h + 10, -10);
  s += `<line x1="${LX}" y1="${y + 8}" x2="${LX}" y2="${y + total - 8}" stroke="${C.ink}" stroke-width="4"/>`;
  items.forEach((it, i) => {
    const c = card(LX + 40, cy, W, { title: it.title, body: it.body, size: 16, tsize: 18, pad: 13, fill: it.fill, edge: it.edge, tgap: 3 });
    s += c.s + `<circle cx="${LX}" cy="${cy + c.h / 2}" r="${it.d ? 10 : 6}" fill="${it.dot || (it.d ? C.mustard : C.panel)}" stroke="${C.ink}" stroke-width="3"/>`;
    if (it.d) s += T(LX - 20, cy + c.h / 2 + 6, it.d, { size: 17, weight: 700, anchor: 'end' });
    cy += c.h + 10;
  });
  return { s, h: total };
}

// 01 Section A structure
F('01-section-a-structure', 'Section A at a glance', 'Five sources, four questions, 30 marks', [
  (y) => {
    let s = T(30, y + 16, 'THE FIVE SOURCES', { size: 15, weight: 700, fill: C.muted });
    for (let i = 0; i < 5; i++) {
      const x = 30 + i * 172, pre = i < 3;
      s += `<rect x="${x}" y="${y + 30}" width="154" height="96" rx="10" fill="${pre ? C.tealLight : C.cream}" stroke="${pre ? C.tealDark : C.olive}" stroke-width="2.5"/>`;
      s += T(x + 77, y + 70, `Source ${String.fromCharCode(65 + i)}`, { size: 18, weight: 700, anchor: 'middle' }) + T(x + 77, y + 98, pre ? 'pre-released' : 'unseen', { size: 16, anchor: 'middle', fill: pre ? C.tealDark : C.olive, weight: 600 });
    }
    s += para(30, y + 156, 'Three in an advance booklet (1 February for May/June; 1 July for October/November); two appear only in the exam. **No notes or annotations** may be taken in.', 840, { size: 16, fill: C.ink }).s;
    return { s, h: 186 };
  },
  (y) => {
    const b = segbar(y + 24, [
      { label: 'Q1 · 4', frac: 4, fill: C.tealLight },
      { label: 'Q2 · 6', frac: 6, fill: C.teal },
      { label: 'Q3 · 8', frac: 8, fill: C.cream },
      { label: 'Q4 · 12', frac: 12, fill: C.mustard },
    ], { size: 18, h: 76 });
    return { s: T(30, y + 14, 'MARKS PER QUESTION (bar widths to scale)', { size: 15, weight: 700, fill: C.muted }) + b.s, h: 24 + b.h };
  },
  (y) => row(y, [
    { title: 'About 50 minutes', body: 'for Section A: roughly a minute a mark' },
    { title: 'Question 4', body: 'leave a full fifteen to eighteen minutes', fill: C.cream, edge: C.olive },
  ], { gap: 16, card: { size: 16, tsize: 18 } }),
],
'Five source cards: Sources A to C are pre-released and D and E are unseen. A bar to scale shows the marks for the four questions: 4, 6, 8 and 12, with Question 4 using a range of sources and knowledge. Spend about 50 minutes, leaving fifteen to eighteen for Question 4.',
'Marks rise from 4 to 12: give Question 4 the most time.', H2.how);

// 02 Pre-release preparation
F('02-pre-release-four-checks', 'Preparing each pre-released source', 'You cannot take notes in, so prepare to understand, not to memorise', [
  (y) => grid(y, [
    { kicker: '1', title: 'Provenance', body: 'Who produced it, when, for whom, and why', fill: C.tealLight, edge: C.tealDark },
    { kicker: '2', title: 'Content', body: 'What it says or shows; the message of a cartoon or poster', fill: C.cream, edge: C.olive },
    { kicker: '3', title: 'Context', body: 'Which events in the specification it relates to; what was happening at that date', fill: C.cream, edge: C.olive },
    { kicker: '4', title: 'Links', body: 'Other topics it could be used for: questions may target either part of the option', fill: C.tealLight, edge: C.tealDark },
  ], 2, { gap: 16, vgap: 16, card: { size: 17, tsize: 21, minH: 130 } }),
],
'Four checks for each pre-released source: provenance (who, when, for whom, why), content (what it says or shows), context (the events it relates to) and links (other topics it could serve).',
'Provenance, content, context and links for every pre-released source.', H2.pre);

// 03 Method for each question
F('03-method-per-question', 'A method for each question', '', [
  (y) => {
    const rowsQ = [
      ['Q1', '4 marks', 'Support a claim', ['Detail from the source that supports it', '+ one precise piece of contextual knowledge', 'Provenance can help'], C.tealLight, C.tealDark],
      ['Q2', '6 marks', 'Explain a difference', ['State the difference in one sentence', 'Show it with content from both sources', 'Explain why: dates, authors, audiences, purposes'], C.teal, C.tealDark],
      ['Q3', '8 marks', 'How useful', ['What the content shows, confirmed by knowledge', 'How the provenance makes it useful', 'Limitations are not required'], C.cream, C.olive],
      ['Q4', '12 marks', 'Range of sources', ['Plan both sides', 'Use and link several sources, unseen and pre-released', 'Own knowledge, then a supported judgement'], C.mustard, C.ink],
    ];
    let s = '', cy = y;
    rowsQ.forEach(([q, m, t1, list, f, e]) => {
      const c = card(220, cy, 650, { body: list, size: 16, bfill: C.ink, bullets: true, gap: 4, pad: 14 });
      const h = Math.max(c.h, 96);
      s += `<rect x="30" y="${cy}" width="176" height="${h}" rx="14" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + T(118, cy + h / 2 - 12, q + ' · ' + m, { size: 16, weight: 700, anchor: 'middle' }) + T(118, cy + h / 2 + 14, t1, { size: 17, weight: 700, anchor: 'middle' });
      s += card(220, cy, 650, { body: list, size: 16, bfill: C.ink, bullets: true, gap: 4, pad: 14, minH: h, vcenter: true }).s;
      cy += h + 12;
    });
    return { s, h: cy - y - 12 };
  },
],
'Four rows. Question 1: a supporting detail from the source plus one piece of contextual knowledge. Question 2: state the difference, show it from both sources, explain why they differ. Question 3: what the content shows, confirmed by knowledge, and how provenance makes it useful; limitations are not required. Question 4: plan both sides, link several sources with own knowledge and reach a judgement.',
'Each question has its own job: support, difference, usefulness, then a judgement.', H2.meth);

// 04 The peace settlement
F('04-peace-settlement', 'Peacemaking, 1919-23', '', [
  (y) => row(y, [
    { kicker: 'CLEMENCEAU', title: 'Security', body: 'Weaken Germany' },
    { kicker: 'LLOYD GEORGE', title: 'Punish, but allow trade', body: 'Punish Germany but let trade recover' },
    { kicker: 'WILSON', title: 'Fourteen Points', body: 'Self-determination and a League of Nations' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 19, fill: C.tealLight, edge: C.tealDark } }),
  (y) => note(y, 'Versailles: a "Diktat"', 'Germany was not allowed to negotiate. Terms: war guilt, reparations, military limits, territorial losses.', { size: 16 }),
  (y) => {
    const tr = [['1919', 'Saint-Germain', 'Austria: union with Germany forbidden'], ['1919', 'Neuilly', 'Bulgaria'], ['1920', 'Trianon', 'Hungary'], ['1920', 'Sèvres', 'Ottoman Empire: rejected by Turkish nationalists under Mustafa Kemal']];
    let s = T(30, y + 14, 'THE WIDER SETTLEMENT', { size: 15, weight: 700, fill: C.muted });
    const r = row(y + 26, tr.map(([d, n, b]) => ({ kicker: d, title: n, body: b })), { gap: 12, vcenter: false, card: { size: 15, tsize: 18, pad: 14 } });
    s += r.s;
    const sx = r.xs[3] + r.ws[3] / 2, by = y + 26 + r.h;
    const l = card(r.xs[3] - 150, by + 40, r.ws[3] + 150, { kicker: '1923', title: 'Treaty of Lausanne', body: 'replaced Sèvres', size: 15, tsize: 18, pad: 14, fill: C.cream, edge: C.olive });
    s += arrow(sx, by + 6, sx, by + 34, { w: 3.5 }) + l.s;
    return { s, h: 26 + r.h + 40 + l.h };
  },
],
'Three cards give the aims of the Big Three: Clemenceau wanted security and a weaker Germany; Lloyd George wanted to punish Germany but let trade recover; Wilson\'s Fourteen Points included self-determination and a League. Germany called Versailles a Diktat. The wider settlement: Saint-Germain and Neuilly (1919), Trianon and Sèvres (1920), with Sèvres replaced by Lausanne (1923).',
'Different aims among the Big Three, and five treaties beyond Versailles.', H2.o1);

// 05 League timeline
F('05-league-record', 'The League\'s record, 1920-1937', 'Disputes and membership changes in order', [
  (y) => {
    const ok = { fill: C.tealLight, edge: C.tealDark, dot: C.teal }, bad = { fill: '#f6e3d8', edge: C.rust, dot: C.rust }, mem = { fill: C.panel, edge: C.panelEdge }, out = { fill: C.cream, edge: C.olive };
    return vtimeline(y, [
      { d: '1920', title: 'Vilna: failure', body: 'Poland kept it', ...bad },
      { d: '1921', title: 'Aaland Islands and Upper Silesia: settled', body: 'Aaland to Finland; Upper Silesia divided after a plebiscite', ...ok },
      { d: '1923', title: 'Corfu: bypassed', body: 'Mussolini occupied it; the Conference of Ambassadors made Greece pay', ...bad },
      { d: '1925', title: 'Bulgaria: settled', body: 'Greece made to withdraw its invading troops', ...ok },
      { d: '', title: 'Outside the League: Locarno (1925) and the Kellogg-Briand Pact (1928)', body: 'Kellogg-Briand renounced war but had no means of enforcement', fill: C.panel, edge: C.panelEdge },
      { d: '1926', title: 'Germany joins', ...mem },
      { d: '1931', title: 'Manchuria: Japan invades', body: 'The Lytton Report condemned Japan', ...bad },
      { d: '1933', title: 'Germany and Japan leave', body: 'Germany walks out of the Disarmament Conference (1932-34)', ...mem },
      { d: '1934', title: 'USSR joins', ...mem },
      { d: '1935', title: 'Abyssinia: Italy invades', body: 'Sanctions without oil; the secret Hoare-Laval Pact', ...bad },
      { d: '1937', title: 'Italy leaves', ...mem },
    ], { lx: 110 });
  },
  (y) => {
    const c = chips(y, ['settled', 'failure or bypassed', 'membership change'], { size: 16 });
    return { s: c.s.replace(/fill="#f2e7b8"/, `fill="${C.tealLight}"`).replace(/fill="#f2e7b8"/, 'fill="#f6e3d8"').replace(/fill="#f2e7b8"/, `fill="${C.panel}"`), h: c.h };
  },
],
'A timeline of the League: Vilna (1920) a failure; the Aaland Islands and Upper Silesia (1921) settled; Corfu (1923) bypassed by the Conference of Ambassadors; Bulgaria (1925) settled; Locarno and Kellogg-Briand outside the League; Germany joins (1926); Japan invades Manchuria (1931); Germany and Japan leave (1933); the USSR joins (1934); Italy invades Abyssinia (1935); Italy leaves (1937).',
'Some successes in the 1920s; great powers bypassed or defied the League, above all in the 1930s.', H2.o1);

// 06 Cuban Missile Crisis
F('06-cuban-missile-crisis', 'Cuba: from revolution to the hotline', '1959-1963', [
  (y) => vtimeline(y, [
    { d: '1959', title: 'Castro takes power' },
    { d: 'Apr 1961', title: 'Bay of Pigs', body: 'CIA-backed invasion fails' },
    { d: 'Oct 1962', title: 'U2 photographs reveal Soviet missile sites', fill: '#f6e3d8', edge: C.rust, dot: C.rust },
    { d: '', title: 'Kennedy announces a naval "quarantine"', fill: '#f6e3d8', edge: C.rust },
    { d: '', title: 'After thirteen days: a deal', body: 'Khrushchev removes the missiles; the USA pledges not to invade Cuba and secretly agrees to remove its missiles from Turkey', fill: C.cream, edge: C.olive },
    { d: '1963', title: 'Hotline; Partial Test Ban Treaty', fill: C.tealLight, edge: C.tealDark, dot: C.teal },
  ], { lx: 140 }),
],
'A timeline: Castro takes power in 1959; the Bay of Pigs invasion fails in April 1961; in October 1962 U2 photographs reveal Soviet missile sites and Kennedy announces a quarantine; after thirteen days Khrushchev removes the missiles in return for a no-invasion pledge and the secret removal of US missiles from Turkey; a hotline and the Partial Test Ban Treaty follow in 1963.',
'Thirteen days of crisis ended in a trade, then new steps to manage the risk.', H2.o2);

// 07 Vietnam
F('07-vietnam-escalation-withdrawal', 'Vietnam: escalation and withdrawal', 'Domino Theory: if one state fell to communism, its neighbours would follow', [
  (y) => vtimeline(y, [
    { d: 'Kennedy', title: 'More US advisers; Strategic Hamlets' },
    { d: '1964', title: 'Gulf of Tonkin incident', body: 'Congress gives Johnson wide powers', fill: '#f6e3d8', edge: C.rust, dot: C.rust },
    { d: '1965', title: 'Operation Rolling Thunder; ground troops', body: 'Search and destroy, napalm and Agent Orange against Viet Cong guerrilla tactics', fill: '#f6e3d8', edge: C.rust, dot: C.rust },
    { d: '1968', title: 'Tet Offensive; news of My Lai', body: 'More Americans turn against the war', fill: C.cream, edge: C.olive },
    { d: 'Nixon', title: 'Vietnamisation', body: 'Fighting handed to South Vietnamese forces; war widened into Cambodia and Laos', fill: C.tealLight, edge: C.tealDark },
    { d: '1970', title: 'Kent State University: four students killed' },
    { d: '1972', title: 'Nixon visits China' },
    { d: '1973', title: 'Paris Peace Accords end direct US involvement', fill: C.tealLight, edge: C.tealDark, dot: C.teal },
    { d: 'Apr 1975', title: 'Saigon falls' },
  ], { lx: 140 }),
],
'A timeline of US involvement in Vietnam: Kennedy increases advisers and backs Strategic Hamlets; the Gulf of Tonkin incident (1964); bombing and ground troops from 1965; the Tet Offensive and My Lai (1968); Nixon\'s Vietnamisation; Kent State (1970); Nixon in China (1972); the Paris Peace Accords (1973); and the fall of Saigon in April 1975.',
'Escalation to 1968, then a turn against the war and a staged withdrawal.', H2.o2);

// 08 Usefulness frame
F('08-usefulness-frame', 'Building a Question 3 answer', 'How useful is a source to a historian studying a given issue?', [
  (y) => row(y, [
    { kicker: '1 · CONTENT', title: 'What it shows about the issue', body: 'e.g. a dispute passed to the Conference of Ambassadors', fill: C.tealLight, edge: C.tealDark },
    { kicker: '2 · KNOWLEDGE', title: 'Confirm with your own knowledge', body: 'e.g. Corfu, 1923: Greece made to pay', fill: C.cream, edge: C.olive },
    { kicker: '3 · PROVENANCE', title: 'Why its origin adds value', body: 'e.g. written at the time, close to the League\'s meetings', fill: C.tealLight, edge: C.tealDark },
  ], { arrows: true, gap: 40, vcenter: false, card: { size: 16, tsize: 18 } }),
  (y) => row(y, [
    { kicker: 'DO', title: 'Stay on what the source can show', body: 'Limitations are not required for Question 3' },
    { kicker: "DON'T", kfill: C.rust, title: 'Judge by type alone', body: '"It is a cartoon, so it is biased" earns little', edge: C.rust },
  ], { gap: 16, card: { size: 16, tsize: 18 } }),
],
'Three linked steps for a usefulness answer, using the guide\'s invented Corfu example: what the content shows about the issue, confirmation from own knowledge, and why the provenance adds value. Below: stay on what the source can show, and do not judge usefulness by source type alone.',
'Content, knowledge, provenance: three reasons a source is useful.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
