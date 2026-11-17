import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-vicarious-liability';
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
  nat: '## Nature and purpose',
  two: '## The two-stage test',
  s1: '## Stage 1: testing employment status',
  s2: '## Stage 2: course of employment and close connection',
  other: '## Other areas of vicarious liability',
  we: '## Worked problem',
};
const person = (x, yy, c) => `<circle cx="${x}" cy="${yy}" r="12" fill="${c}" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M${x},${yy + 12} L${x},${yy + 44} M${x - 15},${yy + 24} L${x + 15},${yy + 24} M${x},${yy + 44} L${x - 12},${yy + 66} M${x},${yy + 44} L${x + 12},${yy + 66}`, { w: 2.5 });

// 01 Nature
F('01-nature', 'Vicarious liability: liable for another’s tort', 'Not a separate tort', [
  (y) => {
    const H = 290; let s = panel(30, y, 840, H);
    s += `<rect x="80" y="${y + 40}" width="210" height="70" rx="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(185, y + 70, 'Employer', { size: 20, weight: 700, anchor: 'middle' }) + T(185, y + 94, 'not personally at fault', { size: 15, anchor: 'middle' });
    s += person(185, y + 170, C.cream) + T(185, y + 262, 'Employee (wrongdoer)', { size: 16, weight: 700, anchor: 'middle' });
    s += `<line x1="185" y1="${y + 114}" x2="185" y2="${y + 152}" stroke="${C.ink}" stroke-width="3"/>` + T(200, y + 140, 'relationship', { size: 15, fill: C.muted });
    s += person(690, y + 170, C.tealLight) + T(690, y + 262, 'Claimant', { size: 16, weight: 700, anchor: 'middle' });
    s += arrow(215, y + 200, 660, y + 200, { color: C.rust, marker: 'ahR', w: 3.5 }) + T(440, y + 190, 'commits a tort', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
    s += path(`M660,${y + 160} Q500,${y + 50} 296,${y + 72}`, { stroke: C.tealDark, w: 3, extra: 'stroke-dasharray="9 7" marker-end="url(#ahT)"' }) + T(540, y + 80, 'usually sues the employer', { size: 16, weight: 600, fill: C.tealDark });
    s += T(440, y + 240, 'wrongdoer remains liable too', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
    return { s, h: H };
  },
  (y) => row(y, [
    { title: 'Strict', body: 'The employer’s own care in recruiting or supervising is irrelevant' },
    { title: 'Needs a tort', body: 'No tort by the employee, nothing for the employer to be liable for' },
    { title: 'Secondary', body: 'Depends on the relationship and its link to the tort' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink, fill: C.tealLight, edge: C.tealDark } }),
  (y) => note(y, 'Purposes', 'Compensation by a party able to pay and insure; enterprise risk; deterrence through better supervision (*Catholic Child Welfare Society*, 2012; *Cox*, 2016).', { size: 16, align: 'middle' }),
],
'An employee commits a tort against a claimant; the employer, though not personally at fault, is liable because of its relationship with the employee, and is usually the party sued, though the wrongdoer remains liable too. Vicarious liability is strict, needs a tort by the wrongdoer, and is secondary. Its purposes are compensation, enterprise risk and deterrence.',
'The employer answers for the employee’s tort without any fault of its own.', H2.nat);

// 02 Two-stage test
F('02-two-stage-test', 'The two-stage test', 'Various Claimants v Barclays Bank (2020)', [
  (y) => {
    const r = row(y, [
      { kicker: 'STAGE 1: RELATIONSHIP', title: 'Employee, or akin to employment?', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'STAGE 2: CONNECTION', title: 'In the course of employment: closely connected with what they were authorised to do?', fill: C.cream, edge: C.olive },
      { title: 'Employer vicariously liable', fill: C.mustard, edge: C.ink },
    ], { gap: 46, arrows: true, fr: [1, 1.3, 0.8], card: { tsize: 18, pad: 18, align: 'middle' } });
    const ny = y + r.h + 40;
    const no = (i, txt) => arrow(r.xs[i] + r.ws[i] / 2, y + r.h + 4, r.xs[i] + r.ws[i] / 2, ny - 4, { color: C.rust, marker: 'ahR', w: 3 }) + card(r.xs[i], ny, r.ws[i], { title: txt, tsize: 16, pad: 12, align: 'middle', edge: C.rust }).s;
    const n1 = card(0, 0, r.ws[0], { title: 'No: e.g. independent contractor', tsize: 16, pad: 12 }).h;
    return { s: r.s + no(0, 'No: e.g. independent contractor') + no(1, 'No: e.g. a frolic or personal vendetta') + T(r.xs[0] + r.ws[0] / 2 + 12, y + r.h + 26, 'no', { size: 15, weight: 700, fill: C.rust }) + T(r.xs[1] + r.ws[1] / 2 + 12, y + r.h + 26, 'no', { size: 15, weight: 700, fill: C.rust }), h: ny - y + n1 + 10 };
  },
],
'Two stages. Stage 1: is the wrongdoer an employee or in a relationship akin to employment? If not, for example an independent contractor, there is no vicarious liability. Stage 2: was the tort closely connected with what the wrongdoer was authorised to do? If not, for example a frolic or personal vendetta, there is no liability. If both are met, the employer is vicariously liable.',
'Relationship first, then connection: both are needed.', H2.two);

// 03 Employment tests
F('03-employment-tests', 'Testing employment status', 'No single test is decisive: courts look at the whole relationship', [
  (y) => {
    const H = 266; let s = panel(30, y, 840, H);
    const ly = y + 60;
    s += `<line x1="70" y1="${ly}" x2="830" y2="${ly}" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)"/>`;
    const T4 = [
      [150, '1880', 'Control', 'Controls what is done and how?', '*Yewens v Noakes*'],
      [350, '1952', 'Integration', 'Integral part of the business, or accessory?', '*Stevenson Jordan*, Denning LJ'],
      [550, '1968', 'Economic reality', 'Wage for work; sufficient control; consistent terms', '*Ready Mixed Concrete*'],
      [750, '1969', 'Own account?', 'Who takes the financial risk and chance of profit?', '*Market Investigations*'],
    ];
    T4.forEach(([x, yr, n, q, c], i) => {
      s += `<circle cx="${x}" cy="${ly}" r="11" fill="${i === 2 ? C.mustard : C.cream}" stroke="${C.ink}" stroke-width="3"/>` + T(x, ly - 20, yr, { size: 17, weight: 700, anchor: 'middle' });
      s += `<rect x="${x - 92}" y="${ly + 26}" width="184" height="168" rx="12" fill="${i === 2 ? C.cream : C.panel}" stroke="${i === 2 ? C.olive : C.panelEdge}" stroke-width="2"/>`;
      s += T(x, ly + 56, n, { size: 18, weight: 700, anchor: 'middle' }) + para(x, ly + 84, q, 160, { size: 16, anchor: 'middle', fill: C.ink, lh: 20 }).s + para(x, ly + 160, c, 160, { size: 15, anchor: 'middle', fill: C.tealDark, lh: 19 }).s;
    });
    return { s, h: H };
  },
  (y) => row(y, [
    { kicker: 'LABELS DO NOT DECIDE', title: 'Ferguson v John Dawson (1976)', body: 'A labourer called self-employed was an employee in reality' },
    { kicker: 'CONTROL IS ONLY ONE FACTOR', title: 'Skilled employees', body: 'Surgeons are not told how to work, but are still employees' },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink, fill: C.tealLight, edge: C.tealDark } }),
],
'Four tests of employment status on a timeline: control (Yewens v Noakes, 1880), integration (Stevenson Jordan, 1952), economic reality (Ready Mixed Concrete, 1968) and whether the worker is in business on their own account (Market Investigations, 1969). Labels do not decide status (Ferguson v John Dawson), and control is only one factor.',
'Courts weigh the whole relationship, not a label or a single test.', H2.s1);

// 04 Akin to employment
F('04-akin-to-employment', 'Relationships akin to employment', 'Stage 1 extended since 2012, and then limited', [
  (y) => {
    const H = 110; let s = panel(30, y, 840, H);
    s += `<defs><linearGradient id="ak" x1="0" x2="1"><stop offset="0" stop-color="${C.teal}"/><stop offset="0.65" stop-color="${C.cream}"/><stop offset="1" stop-color="${C.panel}"/></linearGradient></defs>`;
    s += `<rect x="60" y="${y + 30}" width="780" height="48" rx="24" fill="url(#ak)" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += T(80, y + 61, 'Employee', { size: 18, weight: 700 }) + T(450, y + 61, 'Akin to employment', { size: 18, weight: 700, anchor: 'middle' }) + T(820, y + 61, 'Independent contractor', { size: 18, weight: 700, anchor: 'end' });
    s += T(260, y + 100, 'vicariously liable', { size: 15, weight: 600, anchor: 'middle', fill: C.tealDark }) + T(740, y + 100, 'not liable', { size: 15, weight: 600, anchor: 'middle', fill: C.rust });
    return { s, h: H + 6 };
  },
  (y) => grid(y, [
    { kicker: 'E v ENGLISH PROVINCE (2012)', body: 'Diocese could be liable for a priest with no contract of employment', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'CATHOLIC CHILD WELFARE SOCIETY (2012)', body: 'Religious institute liable for abuse by brothers teaching at a school', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'COX v MINISTRY OF JUSTICE (2016)', body: 'Prisoner in the kitchen dropped a sack of rice on a catering manager: work integrated and for the prison’s benefit', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'ARMES v NOTTINGHAMSHIRE CC (2017)', body: 'Local authority liable for abuse by foster parents it had placed a child with', fill: C.tealLight, edge: C.tealDark },
  ], 2, { gap: 16, vgap: 12, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
  (y) => card(30, y, 840, { kicker: 'THE LIMIT: VARIOUS CLAIMANTS v BARCLAYS BANK (2020)', kfill: C.rust, body: 'A doctor examining job applicants ran his own practice with many clients: an independent contractor, so the bank was not liable for his assaults.', size: 16, pad: 18, bfill: C.ink, edge: C.rust }),
],
'A spectrum from employee through relationships akin to employment to independent contractor. Akin-to-employment cases: E v English Province (a priest), Catholic Child Welfare Society (teaching brothers), Cox v MoJ (a prisoner working in the kitchen) and Armes v Nottinghamshire (foster parents). The limit is Barclays Bank: a doctor running his own practice was an independent contractor.',
'Akin to employment extends liability; independent contractors fall outside it.', H2.s1);

// 05 Course of employment: traditional
F('05-course-of-employment', 'In the course of employment?', 'An authorised act, or an authorised act done in an unauthorised way', [
  (y) => row(y, [
    { kicker: 'INSIDE: EMPLOYER LIABLE', body: ['**Limpus v London General Omnibus** (1862): racing a rival bus against instructions', '**Rose v Plenty** (1976): milkman’s boy helper, against orders, helping the business', '**Century Insurance** (1942): tanker driver’s match while delivering petrol'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'OUTSIDE: NOT LIABLE', kfill: C.rust, body: ['**Twine v Bean’s Express** (1946): unauthorised lift did nothing for the business', '**Beard v London General Omnibus** (1900): conductor drove the bus himself', '**Hilton v Thomas Burton** (1961): drove off for tea, “a frolic of their own”'], bullets: true, edge: C.rust },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink, gap: 8 } }),
  (y) => note(y, 'Rose v Plenty and Twine compared', 'Both involved forbidden passengers; the difference is whether the passenger was helping the employer’s business.', { size: 16, align: 'middle' }),
],
'Inside the course of employment: Limpus (racing a bus against instructions), Rose v Plenty (a forbidden helper assisting the business) and Century Insurance (careless match while delivering petrol). Outside: Twine v Bean’s Express (an unauthorised lift that did nothing for the business), Beard (a conductor driving the bus) and Hilton v Thomas Burton (a frolic of their own).',
'Prohibited or careless ways of doing the job are inside; doing a different thing is outside.', H2.s2);

// 06 Close connection
F('06-close-connection', 'Deliberate wrongdoing: the close connection test', 'Is the tort so closely connected with the job that liability is fair and just?', [
  (y) => row(y, [
    { kicker: 'CLOSE CONNECTION: LIABLE', body: ['**Lister v Hesley Hall** (2001): warden’s duties of care for boys connected with the abuse', '**Mattis v Pollock** (2003): doorman encouraged to be aggressive stabbed a customer', '**Mohamud v WM Morrison** (2016): kiosk attack an unbroken sequence from serving customers'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'NO CLOSE CONNECTION: NOT LIABLE', kfill: C.rust, body: ['**WM Morrison v Various Claimants** (2020): payroll leak was a personal vendetta', '**Barry Congregation v BXB** (2023): an elder’s rape not closely connected with his role'], bullets: true, edge: C.rust },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink, gap: 8 } }),
  (y) => note(y, '', '**Common mistake:** using close connection for every case. For ordinary negligence while working, the traditional cases are enough.', { size: 16, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'For deliberate wrongdoing, liability turns on close connection. Liable: Lister v Hesley Hall (warden’s abuse), Mattis v Pollock (aggressive doorman) and Mohamud v Morrison (kiosk attack). Not liable: Morrison v Various Claimants (data leak as a personal vendetta) and Barry Congregation v BXB (an elder’s rape). Close connection is not needed for ordinary negligence at work.',
'Deliberate torts need a close connection to the job; a personal vendetta breaks it.', H2.s2);

// 07 Other areas
F('07-other-areas', 'Other areas of vicarious liability', '', [
  (y) => {
    const H = 220; let s = panel(30, y, 840, H) + T(50, y + 32, 'LENT EMPLOYEES', { size: 15, weight: 700, fill: C.tealDark });
    s += `<rect x="60" y="${y + 60}" width="230" height="64" rx="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(175, y + 88, 'General employer', { size: 18, weight: 700, anchor: 'middle' }) + T(175, y + 110, 'usually remains liable', { size: 15, anchor: 'middle' });
    s += person(450, y + 66, C.cream) + T(450, y + 160, 'crane driver', { size: 15, anchor: 'middle', fill: C.muted });
    s += `<rect x="610" y="${y + 60}" width="230" height="64" rx="12" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(725, y + 88, 'Hirer', { size: 18, weight: 700, anchor: 'middle' }) + T(725, y + 110, 'borrows him', { size: 15, anchor: 'middle' });
    s += arrow(294, y + 92, 420, y + 92, { w: 3 }) + arrow(480, y + 92, 606, y + 92, { w: 3, dash: '7 6' });
    s += para(450, y + 186, '*Mersey Docks v Coggins & Griffith* (1947): the board kept the power to control how he operated the crane. *Viasystems* (2005): two employers can both be liable.', 780, { size: 15, anchor: 'middle', fill: C.ink }).s;
    return { s, h: H + 6 };
  },
  (y) => row(y, [
    { kicker: 'INDEPENDENT CONTRACTORS', title: 'Generally no vicarious liability', body: '*Barclays Bank* (2020). But a **non-delegable duty** is a personal duty: *Woodland v Swimming Teachers Association* (2013)', fill: C.cream, edge: C.olive },
    { kicker: 'EMPLOYER’S INDEMNITY', title: 'Recover from the employee', body: '*Lister v Romford Ice* (1957): possible in principle; insurers rarely pursue it' },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 18, pad: 18, bfill: C.ink } }),
],
'Lent employees: the general employer usually remains liable, as in Mersey Docks v Coggins & Griffith where the board kept control over how the crane driver worked; Viasystems allows two employers to be liable. Independent contractors generally create no vicarious liability (Barclays), though a non-delegable duty is a separate personal duty (Woodland). An employer can in principle recover from the employee (Lister v Romford Ice).',
'Lent employees usually stay with the original employer; contractors are outside the doctrine.', H2.other);

// 08 Zed
F('08-worked-problem-zed', 'Worked problem: Zed the courier', 'Called self-employed; FastBox forbids passengers; he crashes', [
  (y) => card(30, y, 840, { kicker: 'STAGE 1: RELATIONSHIP', title: 'Likely employee or akin to employment', body: 'Label not decisive (*Ferguson*). Uniform, jobs controlled through the app, work integral to FastBox, no other clients (*Ready Mixed*; *Cox*). Unlike *Barclays*, Zed is not running his own business with many clients.', size: 16, tsize: 18, pad: 18, bfill: C.ink, fill: C.tealLight, edge: C.tealDark }),
  (y) => {
    const lab = T(450, y + 16, 'STAGE 2: DEAL WITH EACH CLAIMANT SEPARATELY', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    const r = row(y + 30, [
      { kicker: 'LU, A PEDESTRIAN', title: 'FastBox liable', body: 'Driving to deliver parcels: an authorised act done carelessly (*Century Insurance*)', fill: C.cream, edge: C.olive },
      { kicker: 'ZED’S FRIEND, A PASSENGER', kfill: C.rust, title: 'FastBox probably not liable', body: 'Unauthorised passenger not benefiting the business (*Twine*; contrast *Rose v Plenty*). Friend sues Zed personally.', edge: C.rust },
    ], { gap: 16, vcenter: false, card: { size: 16, tsize: 18, pad: 18, bfill: C.ink } });
    return { s: lab + r.s, h: 30 + r.h };
  },
],
'Zed’s case. Stage 1: despite the self-employed label (Ferguson), the uniform, app control, integration and lack of other clients suggest employment or a relationship akin to it (Ready Mixed; Cox), unlike Barclays. Stage 2: for Lu, careless driving while delivering is within the course of employment (Century Insurance); for the friend, an unauthorised passenger not helping the business is outside it (Twine; contrast Rose v Plenty).',
'One crash can be inside the course of employment for one victim and outside it for another.', H2.we, { gap: 30 });

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
