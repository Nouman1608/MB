import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-law-making-judicial-precedent';
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
    if (lines[lines.length - 1].length && cur + sp + ww > width) {
      // keep tokens joined without a space (e.g. "(" + italic word) on the same line
      const prev = lines[lines.length - 1], carry = [];
      if (!pendingSp) { while (prev.length > 1) { const last = prev.pop(); carry.unshift(last); if (last.sp) break; } if (carry.length && carry[0].sp === false && prev.length === 0) { prev.push(...carry); carry.length = 0; } }
      lines.push([]); cur = 0;
      carry.forEach((c, ci) => { const cw = tw(c.w, size, c.b) + (ci && c.sp ? tw(' ', size, weight) : 0); lines[lines.length - 1].push({ ...c, sp: ci ? c.sp : false }); cur += cw; });
      lines[lines.length - 1].push({ ...k, sp: false }); cur += ww;
    }
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
    if (o.kicker && tw(o.kicker, 15, 700) > iw) WARN.push(`kicker too wide: ${o.kicker}`);
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


const H2 = {
  doc: '## The doctrine',
  ratio: '## Ratio decidendi and obiter dicta',
  hier: '## The hierarchy of the courts',
  rep: '## Law reporting: outline and reasons',
  we: '## Worked example: answering an application question',
};
const AR = (y) => ({ s: arrow(450, y - 18, 450, y + 2), h: 0 });
// Timeline with year pills on the left. list: [{yr, title, body, hl}]
function ysteps(y, list, o = {}) {
  const gap = o.gap ?? 10, pw = 100; let s = '', cy = y; const mids = [];
  list.forEach((st) => {
    const c = card(30 + pw + 22, cy, 840 - pw - 22, { title: st.title, body: st.body, kicker: st.kicker, size: o.size ?? 16, tsize: o.tsize ?? 19, pad: o.pad ?? 14, fill: st.hl ? C.cream : C.panel, edge: st.hl ? C.olive : C.panelEdge, bfill: C.ink });
    const m = cy + c.h / 2; mids.push(m);
    s += c.s + `<rect x="30" y="${m - 20}" width="${pw}" height="40" rx="20" fill="${st.hl ? C.mustard : C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + T(30 + pw / 2, m + 7, st.yr, { size: 19, weight: 700, anchor: 'middle' });
    cy += c.h + gap;
  });
  const line = `<line x1="80" y1="${mids[0]}" x2="80" y2="${mids[mids.length - 1]}" stroke="${C.panelEdge}" stroke-width="4"/>`;
  return { s: line + s, h: cy - y - gap };
}

// 01 Binding, persuasive, original
F('01-binding-persuasive-original', 'Three kinds of precedent', 'Stare decisis, “stand by what has been decided”: like cases alike', [
  (y) => row(y, [
    { kicker: 'BINDING', title: 'Must follow', body: ['Made by a court above (or, for some courts, the same court)', 'Material facts sufficiently similar'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'PERSUASIVE', title: 'May follow, need not', body: ['Lower courts', 'Obiter dicta', 'Dissenting judgments', 'Privy Council', 'Other common law countries'], bullets: true },
    { kicker: 'ORIGINAL', title: 'No earlier decision', body: 'The judge decides the point, creating a new precedent', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, pad: 18, bfill: C.ink, gap: 4 } }),
],
'Three kinds of precedent. Binding precedent must be followed when it comes from a court above (or sometimes the same court) and the material facts are sufficiently similar. Persuasive precedent, from lower courts, obiter dicta, dissents, the Privy Council or other common law countries, may be followed. Original precedent is made where no earlier decision exists.',
'Binding must be followed, persuasive may be, and original precedent fills a gap.', H2.doc);

// 02 Ratio and obiter: Howe to Gotts
F('02-howe-gotts-obiter', 'How obiter dicta can become law', '', [
  (y) => row(y, [
    { kicker: 'RATIO DECIDENDI', title: '“Reason for deciding”', body: 'The legal principle applied to the material facts. **Only the ratio binds.**', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'OBITER DICTA', title: '“Things said by the way”', body: 'Other remarks, such as comments on hypothetical facts. Persuasive only.', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, pad: 18, bfill: C.ink } }),
  (y) => {
    const W = 380, h = 180;
    const a = card(30, y, W, { kicker: 'R v HOWE (1987), HOUSE OF LORDS', body: ['**Ratio:** duress is not a defence to murder', '**Obiter:** it should not be a defence to attempted murder either'], bullets: true, gap: 8, size: 17, pad: 18, bfill: C.ink, minH: h });
    const b = card(490, y, W, { kicker: 'R v GOTTS (1992), HOUSE OF LORDS', body: 'Followed the *Howe* obiter statement: duress was **not available for attempted murder**', size: 17, pad: 18, bfill: C.ink, fill: C.cream, edge: C.olive, minH: h, vcenter: true });
    const ar = arrow(416, y + h / 2, 484, y + h / 2, { w: 4, color: C.olive, marker: 'ahO' }) + T(450, y + h / 2 - 14, 'later', { size: 15, weight: 700, anchor: 'middle', fill: C.olive }) + T(450, y + h / 2 + 30, 'followed', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
    return { s: a.s + b.s + ar, h };
  },
  (y) => note(y, '', '**Finding the ratio** is not always easy: judgments do not label it, and appeal judges may give different reasons.', { size: 17, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'The ratio decidendi is the binding legal principle; obiter dicta are other remarks and only persuasive. In R v Howe (1987) the ratio was that duress is no defence to murder, with an obiter remark that it should not cover attempted murder either; in R v Gotts (1992) the House of Lords followed that obiter remark.',
'An obiter remark in Howe became the rule in Gotts.', H2.ratio, { gap: 24 });

// 03 Court hierarchy
{
  const AR2 = (y) => ({ s: arrow(400, y - 18, 400, y + 2), h: 0 });
  const cardO = { size: 16, tsize: 19, pad: 16, bfill: C.ink };
  F('03-court-hierarchy', 'The hierarchy of the courts', 'Who binds whom, and is each court bound by itself?', [
    (y) => card(70, y, 660, { ...cardO, title: 'Supreme Court', body: 'Binds all courts below. May depart from its own decisions (Practice Statement 1966). From 2009, replacing the House of Lords.', fill: C.cream, edge: C.olive, align: 'middle' }),
    AR2,
    (y) => row(y, [
      { title: 'Court of Appeal (Civil Division)', body: 'Binds all courts below. Bound by itself, subject to the *Young v Bristol Aeroplane* exceptions.' },
      { title: 'Court of Appeal (Criminal Division)', body: 'Binds all criminal courts below. Generally bound by itself; extra flexibility where liberty is at stake.' },
    ], { x: 30, w: 740, gap: 16, vcenter: false, card: { ...cardO, align: 'middle', fill: C.tealLight, edge: C.tealDark } }),
    AR2,
    (y) => card(70, y, 660, { ...cardO, title: 'Divisional Courts of the High Court', body: 'Bind the High Court and lower courts. Generally bound by themselves, with similar exceptions.', align: 'middle' }),
    AR2,
    (y) => card(70, y, 660, { ...cardO, title: 'High Court', body: 'Binds the County Court and magistrates’ courts. Not binding on other High Court judges, but persuasive.', align: 'middle' }),
    AR2,
    (y) => card(70, y, 660, { ...cardO, title: 'Crown Court, County Court, magistrates’ courts', body: 'Create no binding precedent. Not bound by their own decisions.', align: 'middle', fill: '#f8faf9' }),
    (y) => ({ s: arrow(812, 150, 812, y - 40, { w: 5, color: C.tealDark, marker: 'ahT' }) + `<text x="848" y="${(150 + y - 40) / 2}" font-size="17" font-weight="700" fill="${C.tealDark}" text-anchor="middle" transform="rotate(90 848 ${(150 + y - 40) / 2})">binding force runs downwards</text>`, h: 0 }),
  ],
  'The courts from top to bottom: the Supreme Court binds all below and may depart from its own decisions; the Court of Appeal Civil Division is bound by itself subject to Young v Bristol Aeroplane, the Criminal Division generally so; the Divisional Courts; the High Court, which binds lower courts but not other High Court judges; and the Crown Court, County Court and magistrates’ courts, which create no binding precedent.',
  'Each court binds those below it; only the Supreme Court may freely depart from its own decisions.', H2.hier, { gap: 22 });
}

// 04 Practice Statement in use
F('04-practice-statement-uses', 'The Practice Statement 1966 in use', 'Own decisions normally binding, but may depart “when it appears right to do so”', [
  (y) => ysteps(y, [
    { yr: '1968', title: '*Conway v Rimmer*', body: 'First major use, on a technical point of evidence' },
    { yr: '1972', title: '*British Railways Board v Herrington*', body: 'Overruled *Addie v Dumbreck* (1929): occupiers could owe a duty of care to child trespassers' },
    { yr: '1972', hl: true, title: '*Knuller v DPP*: refused to overrule', body: 'Kept *Shaw v DPP* (1962) even though some judges disagreed with it, to preserve certainty' },
    { yr: '1986', title: '*R v Shivpuri*', body: 'Overruled *Anderton v Ryan* (1985) within a year, on attempting the impossible' },
    { yr: '2003', title: '*R v G*', body: 'Overruled *R v Caldwell* (1981): subjective test replaced objective recklessness' },
    { yr: '2010', title: '*Austin v Southwark LBC*', body: 'Confirmed that the Practice Statement continues to apply to the Supreme Court' },
  ], { gap: 10 }),
],
'A timeline of Practice Statement cases: Conway v Rimmer (1968); Herrington (1972) overruling Addie v Dumbreck; Knuller v DPP (1972) refusing to overrule Shaw v DPP; R v Shivpuri (1986) overruling Anderton v Ryan; R v G (2003) overruling R v Caldwell; and Austin v Southwark (2010) confirming the Statement applies to the Supreme Court.',
'The power is real but used sparingly, as Knuller shows.', H2.hier);

// 05 Court of Appeal and Young
F('05-court-of-appeal-young', 'When can the Court of Appeal depart from itself?', '', [
  (y) => card(30, y, 840, { title: 'Civil Division follows its own previous decisions, except where (*Young v Bristol Aeroplane Co*, 1944):', align: 'middle', tsize: 19, pad: 16, fill: C.tealLight, edge: C.tealDark }),
  (y) => row(y, [
    { kicker: 'EXCEPTION 1', title: 'Two conflicting decisions', body: 'It chooses which of its own decisions to follow' },
    { kicker: 'EXCEPTION 2', title: 'Conflict with a later HL or SC decision', body: 'Its earlier decision gives way to the House of Lords or Supreme Court' },
    { kicker: 'EXCEPTION 3', title: 'Per incuriam', body: 'Made in error, e.g. by overlooking a relevant statute or binding authority' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } }),
  (y) => row(y, [
    { kicker: 'DAVIS v JOHNSON (1979)', body: 'Lord Denning argued the Court of Appeal should be free to depart from its own decisions. **The House of Lords rejected this.**', kfill: C.rust },
    { kicker: 'CRIMINAL DIVISION', body: '*R v Taylor* (1950) and *R v Gould* (1968): may depart where the law was misapplied and **a person’s liberty is at stake**.', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink } }),
],
'The Court of Appeal Civil Division follows its own decisions except, under Young v Bristol Aeroplane, where its own decisions conflict, where a later House of Lords or Supreme Court decision conflicts, or where the earlier decision was per incuriam. Lord Denning’s call for freedom in Davis v Johnson was rejected; the Criminal Division may depart where liberty is at stake (Taylor; Gould).',
'Three Young exceptions for the Civil Division; extra flexibility for the Criminal Division.', H2.hier);

// 06 Law reporting
F('06-law-reporting', 'Law reporting: from Year Books to neutral citations', '', [
  (y) => row(y, [
    { kicker: 'LATE 13TH C.', title: 'Year Books', body: 'Mainly for lawyers’ training' },
    { kicker: 'THEN', title: 'Private reports', body: 'By named reporters, of varying reliability' },
    { kicker: '1865', title: 'The Law Reports', body: 'Incorporated Council of Law Reporting; checked by the judges; most authoritative', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'SINCE 2001', title: 'Neutral citations', body: 'Court-based reference, independent of any publisher; judgments online' },
  ], { arrows: true, gap: 34, vcenter: false, card: { size: 15, tsize: 18, pad: 14, bfill: C.ink } }),
  (y) => {
    const head = T(450, y + 22, 'Why report cases?', { size: 21, weight: 700, anchor: 'middle' });
    const r = grid(y + 44, [
      { title: 'Accurate record', body: 'of the ratio and reasoning' },
      { title: 'Advice', body: 'lawyers can predict likely outcomes for clients' },
      { title: 'Authority', body: 'judges can identify binding precedent' },
      { title: 'Consistency', body: 'and certainty in the law' },
      { title: 'Accessibility', body: 'supports the rule of law' },
    ], 5, { gap: 12, vcenter: false, card: { size: 15, tsize: 17, pad: 14, align: 'middle', fill: C.tealLight, edge: C.tealDark, bfill: C.ink } });
    return { s: head + r.s, h: 44 + r.h };
  },
  (y) => note(y, '', 'Precedent cannot work unless judges and lawyers can find exactly what earlier courts decided.', { size: 17, align: 'middle' }),
],
'Four stages of law reporting: Year Books from the late thirteenth century, private reports, The Law Reports of the Incorporated Council of Law Reporting from 1865, and neutral citations since 2001. Five reasons for reporting: an accurate record, advice to clients, identifying binding authority, consistency and certainty, and accessibility supporting the rule of law.',
'Reliable reports are what make a system of binding precedent workable.', H2.rep);

// 07 Worked example: High Court judge
F('07-high-court-judge-options', 'A High Court judge and a Court of Appeal decision', 'She thinks the earlier decision is wrong. What can she do?', [
  (y) => card(170, y, 560, { title: 'High Court is bound by the Court of Appeal', body: 'Must follow if the material facts are sufficiently similar', align: 'middle', fill: C.tealLight, edge: C.tealDark, size: 16, tsize: 19, pad: 16, bfill: C.ink }),
  (y) => ({ s: arrow(330, y - 18, 190, y + 2) + arrow(570, y - 18, 710, y + 2) + arrow(450, y - 18, 450, y + 2, { color: C.rust, marker: 'ahR' }), h: 0 }),
  (y) => row(y, [
    { kicker: 'OPTION 1', title: 'Distinguish', body: 'on the material facts: any court can distinguish', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'NOT AVAILABLE', title: 'Overrule', body: 'only a higher court can overrule', kfill: C.rust, edge: C.rust },
    { kicker: 'OPTION 2', title: 'Follow, but criticise', body: 'in her judgment, inviting an appeal', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, pad: 16, align: 'middle', bfill: C.ink } }),
  (y) => card(30, y, 840, { kicker: 'LONG TERM', body: 'The **Court of Appeal** (via the *Young* exceptions) or the **Supreme Court** (Practice Statement or overruling) can change the rule.', size: 17, pad: 18, bfill: C.ink }),
],
'The High Court judge is bound by the Court of Appeal if the material facts are sufficiently similar. She may distinguish on the material facts, or follow while criticising the decision to invite an appeal; she cannot overrule it. In the long term the Court of Appeal or the Supreme Court can change the rule.',
'Distinguish or follow and criticise; only a higher court can overrule.', H2.we, { gap: 26 });

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
