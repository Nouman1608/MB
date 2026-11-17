import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-law-9084-offences-against-property';
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
  theft: '## 2.2.1 Theft – s1 Theft Act 1968',
  rob: '## 2.2.2 Robbery – s8 Theft Act 1968',
  black: '## 2.2.4 Blackmail – s21 Theft Act 1968',
  cd: '## 2.2.7 Criminal damage – Criminal Damage Act 1971',
  we: '## Worked example',
};

// 01 Maximum sentences, to scale
{
  const items = [
    ['Robbery', 's8 TA 1968', 99],
    ['Aggravated burglary', 's10 TA 1968', 99],
    ['Arson; damage endangering life', 's1(3), s1(2) CDA 1971', 99],
    ['Burglary of a dwelling', 's9 TA 1968', 14],
    ['Blackmail', 's21 TA 1968', 14],
    ['Handling stolen goods', 's22 TA 1968', 14],
    ['Burglary, other building', 's9 TA 1968', 10],
    ['Criminal damage', 'CDA 1971', 10],
    ['Fraud', 'ss2–4 FA 2006', 10],
    ['Theft', 's1 TA 1968', 7],
    ['Obtaining services dishonestly', 's11 FA 2006', 5],
    ['Making off without payment', 's3 TA 1978', 2],
  ];
  F('01-maximum-sentences', 'Maximum sentences compared', 'Bars to scale in years; life shown as an open-ended bar', [
    (y) => {
      const lx = 330, bx = 340, k = 26; let s = '';
      items.forEach(([n, sec, v], i) => {
        const yy = y + i * 46;
        s += T(lx, yy + 20, n, { size: 17, weight: 700, anchor: 'end' }) + T(lx, yy + 38, sec, { size: 15, anchor: 'end', fill: C.muted });
        if (v === 99) {
          s += `<rect x="${bx}" y="${yy + 6}" width="420" height="30" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + `<path d="M${bx + 420},${yy + 6} l30,15 l-30,15 z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + T(bx + 14, yy + 27, 'Life', { size: 17, weight: 700 });
        } else {
          s += `<rect x="${bx}" y="${yy + 6}" width="${v * k}" height="30" fill="${v >= 14 ? C.teal : v >= 10 ? C.tealLight : C.cream}" stroke="${C.ink}" stroke-width="2"/>` + T(bx + v * k + 10, yy + 28, `${v} years`, { size: 17, weight: 700 });
        }
      });
      return { s, h: items.length * 46 };
    },
  ],
  'A bar chart of maximum sentences. Life for robbery, aggravated burglary, arson and criminal damage endangering life; 14 years for burglary of a dwelling, blackmail and handling; 10 years for burglary of another building, criminal damage and fraud; 7 years for theft; 5 years for obtaining services dishonestly; 2 years for making off without payment.',
  'Force, weapons and danger to life push the maximum to life; making off is the lowest at two years.', H2.theft);
}

// 02 Robbery checklist
F('02-robbery-checklist', 'Is it robbery? s8 Theft Act 1968', 'Stealing + force, immediately before or at the time, in order to steal', [
  (y) => steps(y, [
    { title: 'A completed theft?', body: 'No theft, no robbery: *R v Robinson* (1977), belief in a legal right.' },
    { title: 'Force on any person, or fear of force then and there?', body: 'A matter for the jury: a nudge can suffice (*Dawson and James*, 1976); wrenching a bag from a hand is force (*Clouden*, 1987); snatching a cigarette without touching the victim was not (*P v DPP*, 2012).' },
    { title: 'Immediately before or at the time of stealing?', body: 'Appropriation is a continuing act, so force while making off can be “at the time” (*R v Hale*, 1979).' },
    { title: 'In order to steal, with the mens rea of theft?', body: 'Plus intention to use force or put in fear in order to steal.' },
  ], { size: 16, highlight: 2 }),
  (y) => note(y, '', 'All four “yes”: robbery, maximum **life** (s8(2)). **Common mistake:** finding robbery where force came after the theft was over, or there was no theft.', { size: 17 }),
],
'Four questions for robbery: a completed theft (Robinson); force or fear of force (Dawson and James, Clouden, but not P v DPP); at the time, with appropriation continuing while making off (Hale); and in order to steal with the mens rea of theft. All four give robbery, with a maximum of life.',
'No theft, no robbery; and the force must be used in order to steal.', H2.rob);

// 03 Blackmail
F('03-blackmail-elements', 'Blackmail: s21 Theft Act 1968', 'Maximum 14 years', [
  (y) => row(y, [
    { kicker: 'ACTUS REUS', title: 'A demand', body: 'A posted demand is made on posting: *Treacy v DPP* (1971)', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'ACTUS REUS', title: 'With menaces', body: 'Would influence an ordinary person of normal stability (*R v Clear*), or known to affect a timid victim (*R v Garwood*)', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'MENS REA', title: 'View to gain, or intent to cause loss', body: 'In money or other property', fill: C.cream, edge: C.olive },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } }),
  (y) => {
    const lab = T(450, y + 14, 'IS THE DEMAND UNWARRANTED?', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
    const r = row(y + 28, [
      { title: 'Believes there are reasonable grounds for making it?' },
      { title: 'Believes the menaces are a proper way of reinforcing it?' },
    ], { gap: 50, vcenter: true, card: { size: 16, tsize: 18, pad: 16, align: 'middle' } });
    const plus = T(450, y + 28 + r.h / 2 + 10, '+', { size: 30, weight: 700, anchor: 'middle' });
    return { s: lab + r.s + plus, h: 28 + r.h };
  },
  (y) => row(y, [
    { kicker: 'BOTH BELIEFS', body: 'Demand is warranted: not blackmail', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'EITHER MISSING', kfill: C.rust, body: 'Demand is unwarranted. A threat to commit a serious crime cannot be believed proper: *R v Harvey* (1981)', fill: C.cream, edge: C.olive },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'Blackmail needs a demand (made on posting, Treacy v DPP) with menaces (R v Clear; R v Garwood) and a view to gain or intent to cause loss. The demand is unwarranted unless the defendant believes both that there are reasonable grounds for it and that the menaces are a proper way to reinforce it; a threat of serious crime can never be believed proper (R v Harvey).',
'Demand, menaces, gain or loss, and no belief that both the demand and the menaces were proper.', H2.black);

// 04 Criminal damage and lawful excuse
F('04-criminal-damage', 'Criminal Damage Act 1971: offences and lawful excuse', '', [
  (y) => grid(y, [
    { kicker: 's1(1) DAMAGE', body: 'Destroying or damaging property of another; intention or recklessness (*R v G*). Temporary impairment counts (*Hardman*); spit easily wiped off does not (*A v R*). Belief it is one’s own negates mens rea (*R v Smith*)' },
    { kicker: 's1(2) AND s1(3)', body: '**s1(2):** intends or is reckless as to endangering life. **s1(3):** damage by fire (arson). Maximum life (s4)', fill: C.cream, edge: C.olive },
    { kicker: 's2 THREATS', body: 'Threat to destroy or damage property, intending the other to fear it would be carried out' },
    { kicker: 's3 POSSESSION', body: 'Anything in custody or control, intending it to be used to destroy or damage property' },
  ], 2, { gap: 14, vgap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
  (y) => ({ s: T(450, y + 12, 's5 “WITHOUT LAWFUL EXCUSE”: the defendant believed…', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }), h: 12 }),
  (y) => row(y, [
    { kicker: 's5(2)(a) CONSENT', title: 'The owner had or would have consented', body: 'Even a drunken belief: *Jaggard v Dickinson* (1981)', fill: C.tealLight, edge: C.tealDark },
    { kicker: 's5(2)(b) PROTECTING PROPERTY', title: 'Property in immediate need of protection, by reasonable means', body: 'Whether the act was done to protect property is judged objectively: *R v Hill and Hall* (1989)', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } }),
  (y) => note(y, '', 'The belief need only be honest, not justified (s5(3)). The s5 defence does **not** apply to offences involving danger to life.', { size: 17 }),
],
'Four criminal damage offences: s1(1) damage, with Hardman, A v R and R v Smith; s1(2) endangering life and s1(3) arson, with a maximum of life; s2 threats; s3 possession. The s5 lawful excuse covers an honest belief in the owner’s consent (Jaggard v Dickinson) or in protecting property by reasonable means (Hill and Hall), but not offences endangering life.',
'An honest belief in consent or in protecting property is a lawful excuse, except where life is endangered.', H2.cd);

// 05 Mo worked example: timeline
F('05-mo-worked-example', 'Worked example: Mo in the jewellery shop', 'Three offences along one timeline', [
  (y) => {
    const ly = y + 70, cw = (840 - 28) / 3, xs = [0, 1, 2].map((i) => 30 + cw / 2 + i * (cw + 14));
    let s = `<line x1="60" y1="${ly}" x2="840" y2="${ly}" stroke="${C.ink}" stroke-width="4" marker-end="url(#ah)"/>`;
    const ev = [['Enters with intent to steal', '1'], ['Pockets the ring', '2'], ['Pushes the assistant, runs out', '3']];
    ev.forEach(([e, n], i) => { s += badge(xs[i], ly, 22, n, i === 2 ? C.mustard : C.cream) + para(xs[i], y + 22, e, 260, { size: 17, weight: 700, anchor: 'middle', fill: C.ink }).s; });
    const yc = ly + 50;
    const r = row(yc, [
      { kicker: 'BURGLARY s9(1)(a)', title: 'Complete on entry', body: 'Permission as a customer is exceeded by entering with intent to steal (*Jones and Smith*), so he enters as a trespasser' },
      { kicker: 'THEFT s1', title: 'Appropriation of the ring', body: 'Appropriates (s3) property (s4) belonging to the shop (s5), intending to keep it (s6), dishonestly (*Ivey*)' },
      { kicker: 'ROBBERY s8', title: 'Force “at the time”', body: 'Appropriation continues while he makes off (*Hale*), so the push is force at the time of the theft: robbery likely', fill: C.cream, edge: C.olive },
    ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } });
    return { s: s + r.s + r.xs.map((x, i) => `<line x1="${xs[i]}" y1="${ly + 24}" x2="${xs[i]}" y2="${yc}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="5 4"/>`).join(''), h: yc + r.h - y };
  },
],
'A timeline of Mo’s actions. Entering with intent to steal completes burglary under s9(1)(a), because intent to steal exceeds his permission as a customer (Jones and Smith). Pocketing the ring is theft under ss1 to 6 (Ivey). Pushing the assistant while running out is force at the time of the theft because appropriation continues (Hale), so robbery is likely.',
'Burglary on entry, theft on pocketing, robbery when he pushes past.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
