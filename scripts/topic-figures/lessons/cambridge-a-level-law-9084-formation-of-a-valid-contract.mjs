import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-law-9084-formation-of-a-valid-contract';
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
  nat: '## 3.1.1 Nature of a contract',
  oa: '## 3.1.2 Offer and acceptance',
  itcl: '## 3.1.3 Intention to create legal relations',
  cons: '## 3.1.4 Consideration',
  cap: '## 3.1.5 Capacity (minors only)',
};

// 01 Bilateral, unilateral, collateral
{
  const party = (x, y, label, fill = C.panel) => `<rect x="${x - 70}" y="${y}" width="140" height="50" rx="12" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x, y + 32, label, { size: 17, weight: 700, anchor: 'middle' });
  F('01-types-of-contract', 'Three kinds of contract', 'A contract is an agreement the law will enforce', [
    (y) => {
      const ph = 300, ws = [230, 250, 330], gap = 15; let s = '';
      const xs = [30, 30 + ws[0] + gap, 30 + ws[0] + ws[1] + 2 * gap];
      xs.forEach((x, i) => { s += panel(x, y, ws[i], ph); });
      // bilateral
      let cx = xs[0] + ws[0] / 2;
      s += T(cx, y + 36, 'Bilateral', { size: 21, weight: 700, anchor: 'middle' }) + T(cx, y + 60, 'promise for a promise', { size: 16, anchor: 'middle', fill: C.muted });
      s += party(cx, y + 80, 'Seller', C.tealLight) + party(cx, y + 200, 'Buyer', C.tealLight);
      s += arrow(cx - 30, y + 136, cx - 30, y + 194, { color: C.tealDark, marker: 'ahT' }) + arrow(cx + 30, y + 194, cx + 30, y + 136, { color: C.tealDark, marker: 'ahT' });
      s += T(cx - 40, y + 172, 'promise', { size: 15, anchor: 'end', fill: C.tealDark, weight: 600 }) + T(cx + 40, y + 172, 'promise', { size: 15, fill: C.tealDark, weight: 600 });
      s += T(cx, y + 282, 'Most sales', { size: 16, anchor: 'middle', fill: C.muted });
      // unilateral
      cx = xs[1] + ws[1] / 2;
      s += T(cx, y + 36, 'Unilateral', { size: 21, weight: 700, anchor: 'middle' }) + T(cx, y + 60, 'promise for an act', { size: 16, anchor: 'middle', fill: C.muted });
      s += party(cx, y + 80, 'Promisor', C.cream) + party(cx, y + 200, 'Anyone', C.panel);
      s += arrow(cx - 30, y + 136, cx - 30, y + 194, { color: C.olive, marker: 'ahO' }) + arrow(cx + 30, y + 194, cx + 30, y + 136, { color: C.tealDark, marker: 'ahT', dash: '8 6' });
      s += T(cx - 40, y + 172, 'promise', { size: 15, anchor: 'end', fill: C.olive, weight: 600 }) + T(cx + 40, y + 164, 'does', { size: 15, fill: C.tealDark, weight: 600 }) + T(cx + 40, y + 182, 'the act', { size: 15, fill: C.tealDark, weight: 600 });
      s += para(cx, y + 266, 'Only the promisor is bound: *Carlill* (1893)', ws[1] - 30, { size: 15, anchor: 'middle', fill: C.muted }).s;
      // collateral
      const x0 = xs[2], w = ws[2];
      s += T(x0 + w / 2, y + 36, 'Collateral', { size: 21, weight: 700, anchor: 'middle' }) + T(x0 + w / 2, y + 60, 'a separate contract alongside', { size: 16, anchor: 'middle', fill: C.muted });
      const box = (cx0, y0, w0, l1, l2, fill) => `<rect x="${cx0 - w0 / 2}" y="${y0}" width="${w0}" height="50" rx="12" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + (l2 ? T(cx0, y0 + 22, l1, { size: 15, weight: 700, anchor: 'middle' }) + T(cx0, y0 + 40, l2, { size: 15, weight: 700, anchor: 'middle' }) : T(cx0, y0 + 31, l1, { size: 15, weight: 700, anchor: 'middle' }));
      const pa = x0 + 70, pb = x0 + w - 70, by = y + 88, pc = x0 + w / 2, cyy = y + 196;
      s += box(pa, by, 112, 'Paint', 'maker', C.cream) + box(pb, by, 112, 'Pier', 'owners', C.tealLight) + box(pc, cyy, 130, 'Contractors', '', C.panel);
      s += arrow(pa + 58, by + 25, pb - 60, by + 25, { color: C.olive, marker: 'ahO', w: 3 }) + T(x0 + w / 2, by + 70, 'promise: lasts', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 }) + T(x0 + w / 2, by + 88, '7 years', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 });
      s += arrow(pb + 10, by + 52, pc + 50, cyy - 4, { w: 3 }) + T(x0 + w - 14, cyy + 16, 'told to', { size: 15, anchor: 'end' }) + T(x0 + w - 14, cyy + 34, 'buy it', { size: 15, anchor: 'end' });
      s += arrow(pc - 50, cyy - 2, pa - 10, by + 54, { color: C.muted, w: 2.5, dash: '6 5' }) + T(x0 + 14, cyy + 16, 'buy', { size: 15, fill: C.muted }) + T(x0 + 14, cyy + 34, 'paint', { size: 15, fill: C.muted });
      s += T(x0 + w / 2, y + 280, 'Shanklin Pier v Detel (1951)', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
      return { s, h: ph };
    },
  ],
  'Three panels. Bilateral: a promise is exchanged for a promise, as in most sales. Unilateral: a promise is exchanged for an act, and only the promisor is bound (Carlill). Collateral: in Shanklin Pier v Detel the paint maker promised the pier owners the paint would last seven years, and the owners told their contractors to buy it.',
  'Promise for promise, promise for act, or a separate promise alongside the main contract.', H2.nat);
}

// 02 Applying offer and acceptance: forms, auctions, tenders
{
  const flow = (y, label, items, foot) => {
    const lab = T(30, y + 16, label, { size: 16, weight: 700, fill: C.tealDark });
    const r = row(y + 28, items, { arrows: true, gap: 40, vcenter: true, card: { size: 16, tsize: 17, pad: 14, bfill: C.ink, align: 'middle' } });
    const f = foot ? para(30, y + 28 + r.h + 24, foot, 840, { size: 16, fill: C.muted }) : { s: '', h: 0 };
    return { s: lab + r.s + f.s, h: 28 + r.h + (foot ? 12 + f.h : 0) };
  };
  F('02-forms-auctions-tenders', 'Offer and acceptance in practice', '', [
    (y) => flow(y, 'BATTLE OF THE FORMS: Butler Machine Tool v Ex-Cell-O (1979)', [
      { title: 'Seller’s terms', body: 'printed terms' },
      { title: 'Buyer’s order form', body: 'own terms = counter offer', fill: C.cream, edge: C.olive },
      { title: 'Tear-off slip returned', body: 'acceptance of the buyer’s terms', fill: C.tealLight, edge: C.tealDark },
    ], 'Usually won by the last set of terms sent before performance.'),
    (y) => flow(y, 'AUCTION SALES', [
      { title: 'Request for bids', body: 'invitation to treat' },
      { title: 'Each bid', body: 'an offer; can be withdrawn until the hammer falls (*Payne v Cave*)', fill: C.cream, edge: C.olive },
      { title: 'Fall of the hammer', body: 'acceptance (Sale of Goods Act 1979 s57)', fill: C.tealLight, edge: C.tealDark },
    ], '“Without reserve”: a collateral contract to sell to the highest genuine bidder (*Barry v Davies*, 2000).'),
    (y) => flow(y, 'CONTRACTS BY TENDER', [
      { title: 'Invitation to tender', body: 'normally an invitation to treat' },
      { title: 'Each tender', body: 'an offer (*Spencer v Harding*)', fill: C.cream, edge: C.olive },
      { title: 'Acceptance', body: 'of a chosen tender', fill: C.tealLight, edge: C.tealDark },
    ], 'But the invitation can bind: promise to accept the highest bid (*Harvela*); duty to consider a tender on time (*Blackpool and Fylde Aero Club*). A standing offer is accepted with each order (*Great Northern Railway v Witham*).'),
  ], 'Three flows. Battle of the forms: the buyer’s order form is a counter offer accepted when the seller returns the tear-off slip (Butler v Ex-Cell-O). Auctions: the request for bids is an invitation to treat, each bid is an offer withdrawable until the hammer falls (Payne v Cave), and the hammer is acceptance; without reserve creates a collateral contract (Barry v Davies). Tenders: the invitation is normally an invitation to treat and each tender an offer, with exceptions in Harvela, Blackpool and Witham.',
  'In each setting, find the invitation, the offer and the acceptance.', H2.oa, { gap: 30 });
}

// 03 Intention presumptions
{
  const side = (x, w, head, fill, pres, rebut, notR) => (y) => {
    const h = card(x, y, w, { kicker: head, title: pres.t, body: pres.b, fill, edge: C.ink, size: 16, tsize: 19, bfill: C.ink, align: 'middle' });
    const ya = y + h.h + 50;
    const ar = arrow(x + w / 2, y + h.h + 6, x + w / 2, ya - 6) + T(x + w / 2 + 12, y + h.h + 32, 'rebutted by', { size: 15, weight: 700, fill: C.rust });
    const st = stack(ya, rebut.map((r) => ({ body: r, size: 16, bfill: C.ink, pad: 14 })), { x, w, gap: 10 });
    let s = h.s + ar + st.s, hh = h.h + 50 + st.h;
    if (notR) { const n = card(x, ya + st.h + 14, w, { body: notR, size: 15, bfill: C.muted, pad: 14, fill: C.bg, edge: C.panelEdge }); s += n.s; hh += 14 + n.h; }
    return { s, h: hh };
  };
  F('03-intention-presumptions', 'Intention to create legal relations', 'Two presumptions, each rebuttable', [
    (y) => {
      const a = side(30, 410, 'SOCIAL AND DOMESTIC', C.tealLight, { t: 'Presumed NOT binding', b: '*Balfour v Balfour* (1919): a husband’s promised allowance' }, [
        'Spouses have separated: *Merritt v Merritt* (1970)',
        'Something substantial given up in reliance: *Parker v Clark* (1960)',
        'A clear financial basis: *Simpkins v Pays* (1955), shared competition entry',
      ], 'Not rebutted in *Jones v Padavatton* (1969)')(y);
      const b = side(460, 410, 'COMMERCIAL', C.cream, { t: 'Presumed binding', b: '*Edwards v Skyways* (1964)' }, [
        'Clear words such as an “honour clause”: *Rose and Frank v Crompton* (1925)',
        'A letter of comfort may be only a statement of present policy: *Kleinwort Benson v Malaysia Mining* (1989)',
      ])(y);
      return { s: a.s + b.s, h: Math.max(a.h, b.h) };
    },
  ],
  'Two columns. Social and domestic agreements are presumed not binding (Balfour v Balfour), rebutted by separation (Merritt), substantial reliance (Parker v Clark) or a clear financial basis (Simpkins v Pays), but not in Jones v Padavatton. Commercial agreements are presumed binding (Edwards v Skyways), rebutted by an honour clause (Rose and Frank) or a letter of comfort (Kleinwort Benson).',
  'Start from the presumption, then look for evidence that rebuts it.', H2.itcl);
}

// 04 Existing duties as consideration
F('04-existing-duties', 'Is performing an existing duty consideration?', '', [
  (y) => table(y, [
    { w: 0.95, head: 'Duty already owed' },
    { w: 1.15, head: 'General rule', hfill: C.teal },
    { w: 1.5, head: 'Unless…', hfill: C.mustard },
  ], [
    ['Public duty', 'No consideration: *Collins v Godefroy* (1831)', 'The claimant goes beyond it: *Glasbrook Brothers v Glamorgan CC* (1925)'],
    ['Contractual duty to the promisor', 'No consideration: *Stilk v Myrick* (1809)', 'Extra is done: *Hartley v Ponsonby* (1857); or a **practical benefit** without duress: *Williams v Roffey* (1990)'],
    ['Contractual duty to a third party', 'Good consideration: *Scotson v Pegg* (1861)', ''],
  ], { size: 16, hsize: 17 }),
  (y) => row(y, [
    { kicker: 'SUFFICIENT, NOT ADEQUATE', body: 'Some legal value is enough: £1 a year rent (*Thomas v Thomas*); chocolate wrappers (*Chappell v Nestlé*). Ceasing to complain was not (*White v Bluett*).' },
    { kicker: 'PAST CONSIDERATION', body: 'Not good (*Re McArdle*), unless done at the promisor’s request with payment understood (*Lampleigh v Brathwait*; *Pao On v Lau Yiu Long*).' },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
  (y) => note(y, '', '**Common mistake:** *Williams v Roffey* did not overrule *Stilk v Myrick* or *Foakes v Beer*.', { size: 17, align: 'middle' }),
],
'A table of existing duties: a public duty is no consideration (Collins v Godefroy) unless exceeded (Glasbrook); a contractual duty to the promisor is none (Stilk v Myrick) unless extra is done (Hartley v Ponsonby) or there is a practical benefit (Williams v Roffey); a duty owed to a third party is good consideration (Scotson v Pegg). Below, sufficiency and past consideration with their cases.',
'Doing what you already must is usually not consideration, with three named exceptions.', H2.cons);

// 05 Part payment and promissory estoppel
F('05-part-payment-estoppel', 'Part payment and promissory estoppel', '', [
  (y) => card(30, y, 840, { kicker: 'THE RULE', title: 'Paying less does not discharge the full debt', body: '*Pinnel’s Case* (1602); *Foakes v Beer* (1884). *Re Selectmove* (1995) refused to extend the *Williams v Roffey* practical benefit idea to part payment.', fill: C.cream, edge: C.olive, size: 16, tsize: 20, bfill: C.ink }),
  (y) => row(y, [
    { kicker: 'EXCEPTION 1: SOMETHING NEW', title: 'Earlier, at a different place, or with an item' },
    { kicker: 'EXCEPTION 2: PROMISSORY ESTOPPEL', title: 'Creditor promised to accept less; debtor relied on it', body: '*High Trees* (1947), developing *Hughes v Metropolitan Railway* (1877)', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 16, fr: [1, 1.3], vcenter: true, card: { size: 16, tsize: 18, bfill: C.ink } }),
  (y) => ({ s: T(450, y + 10, 'LIMITS ON PROMISSORY ESTOPPEL', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }), h: 10 }),
  (y) => row(y, [
    { title: 'A shield, not a sword', body: '*Combe v Combe* (1951)' },
    { title: 'Not if the debtor acted inequitably', body: '*D & C Builders v Rees* (1966)' },
    { title: 'Often only suspends rights', body: '*Tool Metal v Tungsten Electric* (1955)' },
  ], { gap: 14, vcenter: true, card: { size: 16, tsize: 17, pad: 16, bfill: C.ink, align: 'middle' } }),
],
'The rule that part payment does not discharge a debt (Pinnel’s Case; Foakes v Beer; Re Selectmove), with two exceptions: something new is given, or promissory estoppel (High Trees, from Hughes). Three limits on estoppel: a shield not a sword (Combe v Combe), not for a debtor who acted inequitably (D & C Builders v Rees), and it often only suspends rights (Tool Metal).',
'Part payment rarely discharges a debt; estoppel protects a relying debtor but cannot found a claim.', H2.cons);

// 06 Minors
F('06-minors-contracts', 'Minors’ contracts: three categories', 'A minor is a person under 18', [
  (y) => row(y, [
    { kicker: 'NECESSARIES', title: 'Binding; a reasonable price', body: ['Sale of Goods Act 1979 s3. Must suit the minor’s condition in life and actual needs.', '*Nash v Inman* (1908): eleven waistcoats not necessaries'], fill: C.tealLight, edge: C.tealDark },
    { kicker: 'BENEFICIAL SERVICE', title: 'Binding if, as a whole, for the minor’s benefit', body: ['Education, training, employment.', '*Doyle v White City Stadium* (1935); oppressive terms not binding: *De Francesco v Barnum* (1890)'], fill: C.tealLight, edge: C.tealDark },
    { kicker: 'VOIDABLE', title: 'Binding unless repudiated', body: ['Leases, shares, partnership: before 18 or a reasonable time after.', '*Steinberg v Scala* (1923): money for shares not recoverable'], fill: C.cream, edge: C.olive },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink, gap: 8 } }),
  (y) => note(y, '', '*Proform Sports Management v Proactive Sports Management* (2006): a football agency contract was neither service nor necessaries, so not binding on the teenage player.', { size: 16, fill: C.panel, edge: C.panelEdge }),
  (y) => row(y, [
    { kicker: 'MINORS’ CONTRACTS ACT 1987', body: ['**s2:** a guarantee of a minor’s debt is enforceable against the adult guarantor', '**s3:** court may order return of property acquired, or property representing it, where just and equitable'], gap: 6 },
    { kicker: 'EQUITY', body: ['Restitution where goods were obtained by fraud, but money cannot be recovered as such (*Leslie v Sheill*, 1914)', '**Limit:** no remedy if the goods or money are spent and nothing represents them'], gap: 6 },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'Three categories of minors’ contracts: necessaries are binding at a reasonable price (Nash v Inman); beneficial contracts of service bind if for the minor’s benefit (Doyle; De Francesco); voidable contracts bind unless repudiated (Steinberg v Scala). Proform is noted. Remedies: Minors’ Contracts Act 1987 s2 and s3, and restitution in equity for fraud (Leslie v Sheill), with no remedy once nothing represents the goods or money.',
'Not all minors’ contracts are void: three categories bind, and the 1987 Act adds remedies.', H2.cap);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
