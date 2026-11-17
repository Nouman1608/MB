import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-law-9084-the-tort-of-negligence';
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
  who: '## 4.1.1 Who is liable?',
  duty: '## 4.1.2 Duty of care',
  breach: '## 4.1.3 Breach of duty',
  caus: '## 4.1.4 Causation and remoteness',
  novel: '## 4.1.5 Novel duty situations',
  we: '## Worked example',
};

// 01 Personal, vicarious, joint
{
  const fig = (x, y, c) => `<circle cx="${x}" cy="${y}" r="9" fill="${c}" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M${x},${y + 9} L${x},${y + 34} M${x - 13},${y + 18} L${x + 13},${y + 18} M${x},${y + 34} L${x - 11},${y + 52} M${x},${y + 34} L${x + 11},${y + 52}`, { w: 2.5 });
  F('01-who-is-liable', 'Who is liable in negligence?', '', [
    (y) => {
      const W = 270, xs = [30, 315, 600], H = 170; let s = '';
      xs.forEach((x) => { s += panel(x, y, W, H); });
      // personal
      s += T(xs[0] + W / 2, y + 34, 'Personal', { size: 20, weight: 700, anchor: 'middle' }) + fig(xs[0] + 80, y + 70, C.cream) + arrow(xs[0] + 105, y + 95, xs[0] + 165, y + 95, { color: C.rust, marker: 'ahR', w: 3 }) + fig(xs[0] + 190, y + 70, C.tealLight) + T(xs[0] + 80, y + 150, 'defendant', { size: 15, anchor: 'middle', fill: C.muted }) + T(xs[0] + 190, y + 150, 'claimant', { size: 15, anchor: 'middle', fill: C.muted });
      // vicarious
      const v = xs[1];
      s += T(v + W / 2, y + 34, 'Vicarious (outline)', { size: 20, weight: 700, anchor: 'middle' }) + `<rect x="${v + 30}" y="${y + 64}" width="80" height="40" rx="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(v + 70, y + 90, 'employer', { size: 15, weight: 700, anchor: 'middle' }) + fig(v + 70, y + 112, C.cream) + T(v + 70, y + 184 - 16, '', {}) + arrow(v + 95, y + 140, v + 175, y + 140, { color: C.rust, marker: 'ahR', w: 3 }) + fig(v + 210, y + 100, C.tealLight) + T(v + 210, y + 75, 'claimant', { size: 15, anchor: 'middle', fill: C.muted }) + path(`M${v + 110},${y + 84} Q${v + 170},${y + 70} ${v + 196},${y + 92}`, { stroke: C.olive, w: 2.5, extra: 'stroke-dasharray="6 5"' });
      // joint
      const j = xs[2];
      s += T(j + W / 2, y + 34, 'Joint', { size: 20, weight: 700, anchor: 'middle' }) + fig(j + 45, y + 70, C.cream) + fig(j + 95, y + 70, C.cream) + arrow(j + 110, y + 82, j + 185, y + 92, { color: C.rust, marker: 'ahR', w: 3 }) + arrow(j + 60, y + 128, j + 185, y + 108, { color: C.rust, marker: 'ahR', w: 3 }) + fig(j + 215, y + 70, C.tealLight) + T(j + 215, y + 150, 'same damage', { size: 15, anchor: 'middle', fill: C.muted });
      const r = row(y + H + 14, [
        { body: 'The defendant’s own liability for their own negligence' },
        { body: ['Relationship of employment or akin to it (*Various Claimants*, 2012)', 'Tort closely connected with the job (*Lister*, 2001; *Mohamud*, 2016)'], bullets: true, gap: 4 },
        { body: ['Each liable for the whole loss', 'Contribution between them: Civil Liability (Contribution) Act 1978'], bullets: true, gap: 4 },
      ], { gap: 15, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } });
      return { s: s + r.s, h: H + 14 + r.h };
    },
    (y) => note(y, '', '**Why vicarious liability?** The employer profits from the activity, is better able to pay and can insure.', { size: 17, align: 'middle' }),
  ],
  'Three kinds of liability. Personal: the defendant answers for their own negligence. Vicarious, in outline: an employer is liable for an employee’s tort where the relationship is employment or akin to it (Various Claimants) and the tort is closely connected with the job (Lister; Mohamud). Joint: two or more defendants causing the same damage are each liable for the whole, with contribution under the 1978 Act.',
  'One wrongdoer, an employer standing behind one, or several sharing the same damage.', H2.who);
}

// 02 Duty of care
F('02-duty-of-care', 'Is a duty of care owed?', '', [
  (y) => card(30, y, 840, { kicker: 'DONOGHUE v STEVENSON (1932)', title: 'The neighbour principle', body: 'Those so closely and directly affected that you ought reasonably to have them in contemplation. Not a distant hearer of a crash: *Bourhill v Young* (1943).', size: 16, tsize: 19, bfill: C.ink, pad: 18 }),
  (y) => {
    const q = card(230, y + 30, 440, { title: 'Established category? (Robinson, 2018)', align: 'middle', fill: C.cream, edge: C.olive, tsize: 19, pad: 16 });
    const ya = y + 30 + q.h + 46;
    const a = card(30, ya, 300, { title: 'YES: apply the duty', body: 'No need for Caparo', align: 'middle', fill: C.tealLight, edge: C.tealDark, size: 16, tsize: 18, bfill: C.ink });
    const b = card(380, ya, 490, { title: 'NO: genuinely new duty', body: 'Caparo (1990) guides the court, by analogy with existing cases', align: 'middle', size: 16, tsize: 18, bfill: C.ink });
    const ar = arrow(450, y + 4, 450, y + 26) + arrow(360, y + 30 + q.h + 4, 200, ya - 4) + arrow(560, y + 30 + q.h + 4, 625, ya - 4) + T(300, ya - 30, 'yes', { size: 16, weight: 700, fill: C.tealDark, anchor: 'end' }) + T(602, ya - 30, 'no', { size: 16, weight: 700, fill: C.rust });
    const yc = ya + Math.max(a.h, b.h) + 16;
    const c = stack(yc, [
      { title: '1  Damage reasonably foreseeable' }, { title: '2  Sufficient proximity' }, { title: '3  Fair, just and reasonable', fill: C.cream, edge: C.olive },
    ], { x: 380, w: 490, gap: 8, card: { tsize: 17, pad: 12 } });
    return { s: q.s + a.s + b.s + ar + c.s + arrow(625, ya + b.h + 2, 625, yc - 2, { w: 3 }), h: yc + c.h - y };
  },
  (y) => card(30, y, 840, { kicker: 'POLICY AT STAGE 3: REASONS TO REFUSE A DUTY', body: ['**Floodgates:** fear of unlimited claims', '**Defensive practices:** *Hill v CC of West Yorkshire* (1989), police and a serial killer’s potential victim', '**Public interest and combat:** *Mulcahy v MoD* (1996), soldiers in battle'], bullets: true, gap: 4, size: 16, pad: 18, bfill: C.ink, fill: C.panel }),
],
'Duty starts with the neighbour principle in Donoghue v Stevenson (Bourhill v Young: not a foreseeable victim). Following Robinson, an established category is simply applied; a genuinely new duty is tested by Caparo’s three stages: foreseeability, proximity, and fair, just and reasonable. Policy at stage three includes floodgates, defensive practices (Hill) and combat (Mulcahy).',
'Established categories apply directly; Caparo is for genuinely new duties.', H2.duty, { gap: 26 });

// 03 Standard of care by class
F('03-standard-of-care', 'The standard of care, by class of defendant', 'Objective: what would a reasonable person have done? (Vaughan v Menlove, 1837)', [
  (y) => table(y, [
    { w: 0.8, head: 'Defendant' },
    { w: 1.2, head: 'Judged against', hfill: C.teal },
    { w: 1.5, head: 'Case', hfill: C.teal },
  ], [
    ['Child', 'A reasonable child of the same age', '*Mullin v Richards* (1998): fifteen-year-olds fencing with rulers, not negligent'],
    ['Learner', 'The competent standard', '*Nettleship v Weston* (1971)'],
    ['Amateur, skilled task', 'A reasonably competent amateur', '*Wells v Cooper* (1958): householder fitting a door handle'],
    ['Expert', 'The skill they profess', '*Philips v William Whiteley* (1938): jeweller piercing ears, not a surgeon'],
    ['Professional', 'A practice accepted by a responsible body of opinion that withstands logical analysis', '*Bolam* (1957); *Bolitho* (1997). Knowledge at the time: *Roe v Minister of Health* (1954)'],
  ], { size: 16, hsize: 17, cellFill: (ri, ci) => (ri === 4 && ci > 0 ? C.cream : null) }),
  (y) => note(y, '', '**Common mistake:** ignoring the class of defendant when setting the standard of care.', { size: 17, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'A table of the objective standard for each class of defendant: children (Mullin v Richards), learners (Nettleship v Weston), amateurs (Wells v Cooper), experts (Philips v William Whiteley) and professionals (Bolam, Bolitho, Roe v Minister of Health).',
'Same objective test, but the reasonable person is matched to the defendant’s class.', H2.breach);

// 04 Causation and remoteness
F('04-causation-remoteness', 'Causation and remoteness', '', [
  (y) => card(30, y, 840, { kicker: 'FACTUAL CAUSATION', title: 'But for the breach, would the harm have occurred?', body: ['**Multiple causes:** one of five possible causes failed (*Wilsher*, 1988); a material contribution was enough (*Bonnington Castings*, 1956)', '**Narrow exception:** mesothelioma and several employers (*Fairchild*, 2002)'], bullets: true, gap: 4, size: 16, tsize: 19, pad: 18, bfill: C.ink, fill: C.tealLight, edge: C.tealDark }),
  (y) => ({ s: arrow(450, y - 18, 450, y + 2), h: 0 }),
  (y) => row(y, [
    { kicker: 'NOVUS ACTUS: THIRD PARTY', body: '*Knightley v Johns* (1982): negligent order to ride against the traffic' },
    { kicker: 'NOVUS ACTUS: CLAIMANT', body: '*McKew v Holland* (1969): steep stairs, no handrail, weakened leg' },
    { kicker: 'NOVUS ACTUS: NATURE', body: 'A natural event independent of the breach' },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink, fill: C.panel, kfill: C.rust } }),
  (y) => ({ s: arrow(450, y - 18, 450, y + 2), h: 0 }),
  (y) => card(30, y, 840, { kicker: 'REMOTENESS: THE WAGON MOUND (No 1) (1961)', title: 'Was the KIND of damage reasonably foreseeable?', body: ['Precise manner need not be foreseen: *Hughes v Lord Advocate* (1963)', 'A different kind is too remote: *Doughty v Turner* (1964), molten eruption', 'Thin skull: take the claimant as you find them, *Smith v Leech Brain* (1962)'], bullets: true, gap: 4, size: 16, tsize: 19, pad: 18, bfill: C.ink, fill: C.cream, edge: C.olive }),
],
'Factual causation by the but for test, with multiple causes (Wilsher; Bonnington Castings) and the Fairchild exception. Then intervening acts that break the chain: a third party (Knightley v Johns), the claimant (McKew v Holland) or a natural event. Finally remoteness: the kind of damage must be foreseeable (Wagon Mound), though not the manner (Hughes); a different kind is too remote (Doughty); the thin skull rule applies (Smith v Leech Brain).',
'But for, then no intervening act, then a foreseeable kind of damage.', H2.caus, { gap: 26 });

// 05 Economic loss and misstatement
F('05-economic-loss', 'Pure economic loss and negligent misstatement', '', [
  (y) => card(30, y, 840, { kicker: 'GENERAL RULE', title: 'Financial loss not resulting from physical damage is not recoverable', body: '*Spartan Steel v Martin* (1973); *Murphy v Brentwood DC* (1990)', size: 16, tsize: 19, pad: 18, bfill: C.ink, fill: C.panel, edge: C.rust, kfill: C.rust }),
  (y) => ({ s: arrow(450, y - 18, 450, y + 2) + T(462, y - 4, 'exception', { size: 15, weight: 700, fill: C.tealDark }), h: 0 }),
  (y) => {
    const lab = card(30, y, 840, { kicker: 'HEDLEY BYRNE v HELLER (1964): A SPECIAL RELATIONSHIP', body: '', pad: 16, fill: C.tealLight, edge: C.tealDark });
    const r = row(y + 50, [{ title: 'Defendant has special skill' }, { title: 'Knows the claimant will rely on the statement' }, { title: 'Reliance is reasonable' }], { x: 50, w: 800, gap: 14, vcenter: true, card: { tsize: 17, pad: 14, align: 'middle' } });
    const box = `<rect x="30" y="${y}" width="840" height="${50 + r.h + 18}" rx="14" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(50, y + 32, 'HEDLEY BYRNE v HELLER (1964): A SPECIAL RELATIONSHIP', { size: 15, weight: 700, fill: C.tealDark });
    return { s: box + r.s, h: 50 + r.h + 18 };
  },
  (y) => row(y, [
    { kicker: 'NO DUTY', kfill: C.rust, body: '*Caparo* (1990): auditors and investors in general' },
    { kicker: 'DUTY', body: '*Chaudhry v Prabhakar* (1989): a friend who claimed knowledge of cars' },
    { kicker: 'DUTY', body: '*Smith v Eric S Bush* (1990): surveyor’s valuation relied on by a buyer' },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'The general rule bars pure economic loss (Spartan Steel; Murphy). The exception is negligent misstatement under Hedley Byrne v Heller, which needs special skill, knowledge that the claimant will rely, and reasonable reliance. Caparo found no duty to investors generally; Chaudhry v Prabhakar and Smith v Eric S Bush found a duty.',
'Economic loss is recoverable mainly through a special relationship of reliance.', H2.novel);

// 06 Nervous shock
F('06-nervous-shock', 'Nervous shock: who can recover?', 'A recognised psychiatric illness, not ordinary grief or distress', [
  (y) => row(y, [
    { kicker: 'PRIMARY VICTIM', title: 'Within the range of foreseeable physical injury', body: 'Psychiatric harm recoverable even if not itself foreseeable: *Page v Smith* (1996)', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'SECONDARY VICTIM', title: 'Witnesses harm to another', body: 'Must pass all three *Alcock* (1992) controls below', fill: C.cream, edge: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 18, pad: 18, bfill: C.ink } }),
  (y) => {
    const r = row(y, [
      { title: 'Close tie of love and affection', body: 'Kept by the Law Commission (1998)', fill: C.cream, edge: C.olive },
      { title: 'Proximity in time and space', body: 'Event or immediate aftermath: *McLoughlin v O’Brian* (1983), about two hours', fill: C.panel },
      { title: 'Own unaided senses', body: 'Perceived the event or aftermath directly', fill: C.panel },
    ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } });
    const strike = [1, 2].map((i) => T(r.xs[i] + r.ws[i] - 14, y + r.h + 22, 'reform would remove', { size: 15, weight: 700, anchor: 'end', fill: C.rust })).join('');
    return { s: r.s + strike, h: r.h + 26 };
  },
  (y) => row(y, [
    { kicker: 'RESCUERS AND EMPLOYEES', body: 'No special duty: *White v CC of South Yorkshire* (1998), Hillsborough police officers' },
    { kicker: 'MEDICAL NEGLIGENCE', body: '*Paul v Royal Wolverhampton NHS Trust* (2024): relatives witnessing a death from earlier negligence could not recover' },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'Primary victims, within the range of physical injury, recover for psychiatric illness (Page v Smith). Secondary victims must pass the three Alcock controls: a close tie, proximity in time and space including the immediate aftermath (McLoughlin v O’Brian), and their own unaided senses; the Law Commission would keep only the close tie. White and Paul show rescuers and relatives in medical cases get no special treatment.',
'Primary victims need foreseeable physical danger; secondary victims face three controls.', H2.novel);

// 07 Kai worked example
F('07-kai-worked-example', 'Worked example: Kai’s rewiring', 'A fire injures Ben, 9; his mother Lucy arrives an hour later', [
  (y) => steps(y, [
    { kicker: 'DUTY TO BEN', title: 'Established category: electrician to occupants', body: 'Caparo is not needed (*Robinson*).' },
    { kicker: 'BREACH', title: 'Judged as a reasonably competent electrician', body: 'Not as newly qualified. A minority method can satisfy *Bolam* if responsible and logical (*Bolitho*).' },
    { kicker: 'CAUSATION AND REMOTENESS', title: 'But for the wiring, no fire', body: 'Burn injury is a foreseeable kind of harm.' },
    { kicker: 'LUCY: SECONDARY VICTIM', title: 'Likely to satisfy Alcock', body: 'Close tie; saw the immediate aftermath within an hour (compare *McLoughlin*); recognised illness (PTSD).' },
  ], { size: 16, highlight: 3 }),
],
'The Kai scenario in four steps: an established duty to occupants (Robinson); breach judged as a competent electrician, with a minority practice possibly satisfying Bolam and Bolitho; but for causation and a foreseeable kind of harm; and Lucy as a secondary victim likely to satisfy Alcock, comparable to McLoughlin.',
'Duty, breach, causation and remoteness in order; then each Alcock control for Lucy.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
