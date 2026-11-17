import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-islamiyat-2058-history-importance-hadiths';
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
  s1: "## Stage 1: the Prophet's lifetime",
  s5: '## Stage 5: musnad collections',
  s6: '## Stage 6: the sahih and sunan collections',
  test: '## How scholars tested Hadiths',
  law: '## Hadiths in legal thinking',
  we: '## Worked example',
};

// 01 Six stages
F('01-six-stages-of-compilation', 'From memory to the great collections', 'Six stages in the history of the Hadiths', [
  (y) => steps(y, [
    { title: "The Prophet's (pbuh) lifetime", body: 'Companions heard, watched and noted what he approved; mainly memory, with some writing such as al-Sahifa al-Sadiqa' },
    { title: 'The Companions (after 632)', body: 'Became teachers and spread to Kufa, Basra, Damascus, Egypt and beyond; Umar asked for a witness' },
    { title: "The Successors (tabi'un)", body: 'Travelled to collect Hadiths; notebooks (sahifas) such as that of Hammam ibn Munabbih' },
    { title: 'First official collection: Umar ibn Abd al-Aziz (717–720)', body: 'Ordered Hadiths written down before scholars died; Ibn Shihab al-Zuhri of Madinah took part' },
    { title: 'Musannaf, then musnad collections', body: 'By subject (al-Muwatta of Malik); by narrator (the Musnad of Ahmad ibn Hanbal)' },
    { title: 'Sahih and sunan collections (third Islamic century)', body: 'Chosen strictly for reliability: the six Sunni books, including al-Bukhari and Muslim' },
  ], { size: 16, tsize: 18, gap: 8, pad: 12, highlight: 3 }),
],
'Six stages: Companions learning in the Prophet\'s lifetime, mainly by memory; Companions teaching across new cities after 632; Successors travelling and keeping notebooks; the first official collection ordered by Umar ibn Abd al-Aziz (717–720); musannaf and musnad collections; and the sahih and sunan collections of the third Islamic century.',
'Six stages, from memory to strictly selected collections; the official order of 717–720 is the turning point.', H2.s1);

// 02 Musannaf vs musnad
F('02-musannaf-and-musnad', 'Musannaf or musnad?', 'Two ways of arranging a collection', [
  (y) => {
    const col = (x, title, sub, f, e, items, ex, plus, minus) => {
      let s = panel(x, y, 405, 450, C.panel, C.panelEdge) + T(x + 24, y + 40, title, { size: 24, weight: 700 }) + T(x + 24, y + 66, sub, { size: 17, weight: 700, fill: e });
      items.forEach((it, i) => { s += `<rect x="${x + 24}" y="${y + 86 + i * 52}" width="357" height="42" rx="10" fill="${f}" stroke="${e}" stroke-width="2"/>` + T(x + 40, y + 113 + i * 52, it, { size: 17, weight: 600 }); });
      s += T(x + 24, y + 264, 'EXAMPLE', { size: 15, weight: 700, fill: C.muted }) + para(x + 24, y + 288, ex, 357, { size: 17 }).s;
      s += para(x + 24, y + 360, plus, 357, { size: 16 }).s + para(x + 24, y + 408, minus, 357, { size: 16 }).s;
      return s;
    };
    return { s: col(30, 'Musannaf', 'arranged by subject', C.cream, C.olive, ['Purification', 'Prayer', 'Zakat'], '**al-Muwatta** of Imam Malik ibn Anas of Madinah', '**+** A judge or student can find the rulings on one topic', 'Also includes Companion reports and the practice of the people of Madinah') +
      col(465, 'Musnad', 'arranged by narrating Companion', C.tealLight, C.tealDark, ["Abu Bakr's narrations", "Umar's narrations", 'and so on…'], 'the **Musnad** of Ahmad ibn Hanbal, a very large collection', "**+** Easier to study each Companion's reports and check chains", '**−** Harder to find rulings on a subject'), h: 450 };
  },
],
'Two panels. A musannaf arranges Hadiths by subject, such as purification, prayer and zakat; al-Muwatta of Imam Malik is the example, useful for finding rulings. A musnad arranges them by the narrating Companion, such as all of Abu Bakr\'s narrations; the Musnad of Ahmad ibn Hanbal is the example, easier for checking chains but harder for finding rulings.',
'Musannaf: by subject. Musnad: by narrator.', H2.s5);

// 03 Six Sunni collections
F('03-six-sunni-collections', 'The six Sunni collections (al-Kutub al-Sitta)', '', [
  (y) => {
    const top = row(y, [
      { kicker: 'SAHIH · d. 870', title: 'al-Bukhari', body: 'Strictest conditions: narrators must be proven to have met; chapter headings show his legal reasoning' },
      { kicker: 'SAHIH · d. 875', title: 'Muslim ibn al-Hajjaj', body: 'Strict conditions; all versions of a Hadith in one place; introduction on method' },
    ], { gap: 16, vcenter: false, card: { size: 16, tsize: 20, fill: C.cream, edge: C.olive } });
    const s = `<rect x="18" y="${y - 12}" width="864" height="${top.h + 54}" rx="18" fill="none" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="8 6"/>` + T(450, y + top.h + 30, 'al-Sahihayn: regarded by Sunni scholars as the most reliable books after the Qur\'an', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
    return { s: s + top.s, h: top.h + 42 };
  },
  (y) => grid(y, [
    { kicker: 'SUNAN', title: 'Abu Dawud al-Sijistani', body: 'Focus on Hadiths used for legal rulings' },
    { kicker: "JAMI'", title: 'al-Tirmidhi', body: 'Comments on the grade of Hadiths and on scholars\' legal views' },
    { kicker: 'SUNAN', title: "al-Nasa'i", body: 'Careful about narrators; legal arrangement' },
    { kicker: 'SUNAN', title: 'Ibn Majah', body: 'Includes Hadiths not found in the other five' },
  ], 2, { gap: 16, vgap: 14, vcenter: false, card: { size: 16, tsize: 19 } }),
  (y) => note(y, '', 'A **sunan** work concentrates on Hadiths about legal practice. "Main features" means arrangement, conditions and purpose.', { align: 'middle', size: 17, fill: C.tealLight, edge: C.tealDark }),
],
'The six Sunni collections. Highlighted together as al-Sahihayn: al-Bukhari (d. 870), with the strictest conditions, and Muslim (d. 875), which gathers all versions of a Hadith in one place. Below: Abu Dawud, focused on legal rulings; al-Tirmidhi, commenting on grades and legal views; al-Nasa\'i, careful about narrators; and Ibn Majah, with Hadiths not in the other five.',
'Know one main feature for each of the six books; al-Bukhari and Muslim rank highest.', H2.s6);

// 04 Testing reliability
F('04-testing-reliability', 'How scholars tested a Hadith', 'A response to fabrication', [
  (y) => row(y, [
    { kicker: 'ISNAD TESTS: THE CHAIN', title: 'Every narrator and every link', body: ["**'adala:** good character and practice", '**dabt:** accurate memory', 'Unbroken chain: each narrator able to have met the one before', "Checked in biographical dictionaries (**'ilm al-rijal**)"], fill: C.tealLight, edge: C.tealDark },
    { kicker: 'MATN TESTS: THE TEXT', kfill: C.olive, title: 'What the report says', body: ['Does not contradict the Qur\'an or well-established Sunna', 'Not contrary to reason or known history', 'Sounds like the Prophet\'s (pbuh) way of speaking, not exaggerated promises'], fill: C.cream, edge: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, bullets: true, gap: 6 } }),
  (y) => {
    const a = arrow(240, y - 16, 240, y + 22, { w: 3.5 }) + arrow(660, y - 16, 660, y + 22, { w: 3.5 });
    const g = row(y + 30, [
      { title: 'Sahih', body: 'sound', fill: C.teal, edge: C.tealDark },
      { title: 'Hasan', body: 'good', fill: C.tealLight, edge: C.tealDark },
      { title: "Da'if", body: 'weak', fill: C.panel, edge: C.panelEdge },
      { title: "Mawdu'", body: 'fabricated', fill: '#f6e3d8', edge: C.rust },
    ], { gap: 14, card: { size: 16, tsize: 20, align: 'middle', bfill: C.ink } });
    const br = path(`M30,${y + 30 + g.h + 14} L30,${y + 30 + g.h + 26} L${30 + 2 * g.ws[0] + 14},${y + 30 + g.h + 26} L${30 + 2 * g.ws[0] + 14},${y + 30 + g.h + 14}`, { w: 2.5, stroke: C.tealDark });
    const lab = T(30 + g.ws[0] + 7, y + 30 + g.h + 50, 'only these establish rulings', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
    return { s: a + T(450, y + 10, 'GRADED', { size: 15, weight: 700, anchor: 'middle', fill: C.muted }) + g.s + br + lab, h: 30 + g.h + 56 };
  },
],
'Two checklists. Isnad tests: good character (\'adala), accurate memory (dabt) and an unbroken chain, checked in biographical dictionaries. Matn tests: no contradiction of the Qur\'an or established Sunna, nothing against reason or known history, and the Prophet\'s way of speaking. Hadiths are graded sahih, hasan, da\'if or mawdu\'; only sahih and hasan establish rulings.',
'Chain and text are both tested; only sahih and hasan Hadiths are used for rulings.', H2.test);

// 05 Hadiths in legal thinking
F('05-hadiths-in-law', 'The Qur\'an gives principles; the Hadiths apply them', '', [
  (y) => {
    const rows = [
      ['Prayer is commanded', 'Times, units and actions come from the Sunna'],
      ['Zakat is commanded', 'The Hadiths give the rates and the minimum amounts'],
      ['The Qur\'an is silent', 'A Hadith can give a ruling, e.g. forbidding gold and silk clothing for men'],
    ];
    let s = T(195, y + 14, "THE QUR'AN", { size: 15, weight: 700, anchor: 'middle', fill: C.olive }) + T(645, y + 14, 'THE HADITHS', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    let cy = y + 30;
    rows.forEach(([a, b]) => {
      const l = card(30, cy, 330, { title: a, size: 16, tsize: 18, fill: C.cream, edge: C.olive, minH: 78, vcenter: true });
      const r = card(420, cy, 450, { body: b, size: 17, bfill: C.ink, fill: C.tealLight, edge: C.tealDark, minH: 78, vcenter: true });
      s += l.s + r.s + arrow(366, cy + 39, 412, cy + 39, { w: 3.5 });
      cy += 78 + 12;
    });
    return { s, h: cy - y - 12 };
  },
  (y) => row(y, [
    { kicker: "IJMA'", title: 'Consensus', body: 'Must agree with both sources' },
    { kicker: 'QIYAS', title: 'Analogy', body: 'Extends their rulings to new cases' },
    { kicker: 'SURA 59.7', title: '"Take what the Messenger gives you"', body: 'The basis for treating the Sunna as binding', fill: C.cream, edge: C.olive },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18 } }),
],
'Three rows link a Qur\'anic command to the detail supplied by the Hadiths: prayer, whose times, units and actions come from the Sunna; zakat, whose rates and minimum amounts come from the Hadiths; and cases where the Qur\'an is silent, such as the ban on gold and silk clothing for men. Cards add ijma\', qiyas and Sura 59.7.',
'Without the Hadiths, Qur\'anic commands such as prayer and zakat could not be carried out.', H2.law);

// 06 Worked example outline
F('06-isnad-matn-answer-plan', 'Answer plan: testing isnad and matn', 'Explain how the isnad and matn of a Hadith were examined [10]', [
  (y) => steps(y, [
    { title: 'Define isnad and matn', body: 'Give an example of a chain' },
    { title: 'Why tests were needed', body: 'Fabrication after political disputes' },
    { title: 'Isnad: character, memory, continuity, meeting', body: 'al-Bukhari: narrators had actually met. Muslim: lived at the same time and could have met' },
    { title: 'Biographical dictionaries', body: 'Teachers, students, dates and reliability of narrators' },
    { title: 'Matn: Qur\'an and Sunna, reason, the Prophet\'s style' },
    { title: "Grades from sahih to mawdu'" },
  ], { size: 16, tsize: 18, gap: 8, pad: 12, highlight: 2 }),
  (y) => note(y, 'Why it reaches Level 4', 'Technical terms explained, examples given, and the reason for the tests included.', { size: 17 }),
],
'Six steps for a 10-mark answer: define isnad and matn with an example chain; explain why tests were needed; describe the isnad tests, contrasting al-Bukhari\'s and Muslim\'s conditions; mention biographical dictionaries; describe the matn tests; and finish with the grades from sahih to mawdu\'.',
'Define, explain why, test the chain, test the text, then grade.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
