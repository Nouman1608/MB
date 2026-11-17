import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-the-rule-of-law';
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
  three: '## Three accounts of the rule of law',
  apply: '## Applying the three elements: fresh authorities',
  area: '## Applying the doctrine to each area',
  we: '## Worked example: annotated answer',
};

// 01 Three accounts: formal to thick
F('01-three-accounts', 'Three accounts of the rule of law', '', [
  (y) => row(y, [
    { kicker: 'A. V. DICEY (1885)', body: ['No punishment except for a breach of law before the ordinary courts', 'Everyone subject to the ordinary law and courts', 'Rights secured by judicial decisions, not a written constitution'], bullets: true },
    { kicker: 'JOSEPH RAZ (1977): FORMAL', body: ['Law should be able to guide behaviour', 'Prospective, open, clear, relatively stable', 'Applied by independent courts', 'A system could comply and still be unjust in content'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'LORD BINGHAM (2010): THICKER', body: ['Eight principles', 'Includes protection of **fundamental human rights**', 'and compliance with international law'], bullets: true, fill: C.cream, edge: C.olive },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink, gap: 5 } }),
  (y) => {
    const H = 56; let s = `<line x1="40" y1="${y + 20}" x2="860" y2="${y + 20}" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)"/>`;
    s += T(450, y + 48, 'thicker: more content counts as part of the rule of law', { size: 16, anchor: 'middle', fill: C.muted });
    return { s, h: H };
  },
  (y) => {
    const c = card(30, y, 840, { kicker: 'EVALUATION TEST CASE', title: 'A law that is clear and prospective but violates rights', size: 16, tsize: 19, pad: 18, nobox: true });
    const r = row(y + c.h + 2, [
      { title: 'Raz: rule of law satisfied', fill: C.tealLight, edge: C.tealDark },
      { title: 'Bingham: not satisfied', fill: C.panel, edge: C.rust },
    ], { x: 50, w: 800, gap: 16, card: { tsize: 18, pad: 14, align: 'middle' } });
    const H = c.h + 2 + r.h + 18;
    return { s: `<rect x="30" y="${y}" width="840" height="${H}" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + c.s + r.s, h: H };
  },
],
'Three theorists from formal to thicker. Dicey (1885): no punishment except for breach of law before the ordinary courts, everyone subject to the ordinary law, rights secured by judicial decisions. Raz (1977): a formal account in which law must be able to guide behaviour, so a system could comply and still be unjust. Bingham (2010): eight principles including human rights. A clear, prospective law that violates rights satisfies Raz but not Bingham.',
'Raz and Bingham disagree about whether human rights belong in the rule of law.', H2.three);

// 02 Bingham's eight principles
F('02-bingham-eight', 'Lord Bingham’s eight principles', 'The Rule of Law (2010)', [
  (y) => {
    const P = [
      'Law accessible and, so far as possible, intelligible, clear and predictable',
      'Legal rights resolved by applying the law, not by discretion',
      'Law applies equally to all, except where objective differences justify it',
      'Ministers and officials act in good faith, fairly, for the proper purpose, within limits',
      'Adequate protection of fundamental human rights',
      'Civil disputes resolved without prohibitive cost or inordinate delay',
      'Adjudicative procedures must be fair',
      'The state complies with its obligations in international law',
    ];
    const items = P.map((p, i) => ({ title: p, fill: i === 4 ? C.cream : C.panel, edge: i === 4 ? C.olive : C.panelEdge }));
    const w = 412, gap = 16; let s = '', cy = [y, y];
    // two columns, numbered
    const hs = items.map((it) => card(0, 0, w - 54, { title: it.title, tsize: 17, pad: 14 }).h);
    const rowsH = [0, 1, 2, 3].map((r) => Math.max(hs[r * 2], hs[r * 2 + 1]));
    let yy = y;
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 2; c++) {
        const i = r * 2 + c, x = 30 + c * (w + gap);
        s += card(x + 54, yy, w - 54, { title: items[i].title, tsize: 17, pad: 14, fill: items[i].fill, edge: items[i].edge, minH: rowsH[r], vcenter: true }).s + badge(x + 24, yy + rowsH[r] / 2, 22, String(i + 1), i === 4 ? C.mustard : C.cream);
      }
      yy += rowsH[r] + 12;
    }
    return { s, h: yy - 12 - y };
  },
  (y) => note(y, '', 'Principle 5 is the one Raz would leave out. Principle 6 links the doctrine to access to justice.', { size: 17, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'Lord Bingham’s eight principles: accessible and clear law; rights decided by law not discretion; equality except where objectively justified; officials acting in good faith and within limits; protection of fundamental human rights; civil disputes resolved without prohibitive cost or delay; fair procedures; compliance with international law. Principle 5, human rights, is highlighted.',
'Bingham’s account goes beyond form to include rights and access to justice.', H2.three);

// 03 Three elements with authorities
F('03-three-elements-cases', 'The three elements and fresh authorities', '', [
  (y) => {
    const cols = [
      { head: 'No sanction except in accordance with the law', fill: C.tealLight, edge: C.tealDark, items: [['*Laporte* (2006)', 'Protesters’ coaches turned back with no imminent breach of the peace: unlawful'], ['*Liversidge v Anderson* (1942)', 'Lord Atkin’s dissent now seen as correct'], ['Article 7 ECHR', 'No punishment for conduct not an offence when committed']] },
      { head: 'Equality before the law', fill: C.cream, edge: C.olive, items: [['*M v Home Office* (1993)', 'Home Secretary in contempt for disobeying a court order'], ['*R v Chaytor* (2010)', 'MPs’ expenses: no privilege from ordinary criminal law'], ['Exceptions', 'Diplomatic immunity (1964 Act); the monarch']] },
      { head: 'Fairness and clarity', fill: C.panel, edge: C.panelEdge, items: [['*R (Evans) v AG* (2015)', 'Minister could not override a tribunal just by disagreeing'], ['*Miller; Cherry* (2019)', 'Five-week prorogation unlawful'], ['*Anisminic* (1969); *Privacy International* (2019)', 'Ouster clauses read narrowly']] },
    ];
    const w = 270, gap = 15; let s = '', H = 0;
    const parts = cols.map((c, i) => {
      const x = 30 + i * (w + gap);
      const head = card(x, y, w, { title: c.head, tsize: 17, pad: 14, align: 'middle', fill: c.fill, edge: c.edge });
      return { x, head };
    });
    const hh = Math.max(...parts.map((p) => p.head.h));
    const bodies = cols.map((c, i) => {
      let cy = y + hh + 12, out = '';
      c.items.forEach(([a, b]) => { const k = card(parts[i].x, cy, w, { title: a, body: b, tsize: 16, size: 15, pad: 12, bfill: C.ink }); out += k.s; cy += k.h + 10; });
      return { out, h: cy - 10 - y };
    });
    H = Math.max(...bodies.map((b) => b.h));
    cols.forEach((c, i) => { s += card(parts[i].x, y, w, { title: c.head, tsize: 17, pad: 14, align: 'middle', fill: c.fill, edge: c.edge, minH: hh, vcenter: true }).s + bodies[i].out; });
    return { s, h: H };
  },
],
'Three columns of authorities. No sanction except in accordance with the law: Laporte (coaches turned back unlawfully), Lord Atkin’s dissent in Liversidge v Anderson, Article 7 ECHR. Equality before the law: M v Home Office (minister in contempt), R v Chaytor (MPs not protected by privilege), with exceptions for diplomats and the monarch. Fairness and clarity: Evans v Attorney General, Miller and Cherry (prorogation), Anisminic and Privacy International (ouster clauses read narrowly).',
'Each element is backed by modern cases where the courts held power to account.', H2.apply);

// 04 Applying to each area
F('04-three-areas', 'Applying the doctrine to each area', '', [
  (y) => table(y, [
    { w: 0.7, head: 'Area' },
    { w: 1.3, head: 'Rule of law respected', hfill: C.teal },
    { w: 1.3, head: 'Rule of law under strain', hfill: C.cream },
  ], [
    ['Law making', 'Statutes published and generally prospective; HRA 1998 s19 statement of compatibility', 'Retrospective legislation; Henry VIII powers; wide ouster clauses'],
    ['The legal system', 'Independent judges; open courts; appeals; judicial review; jury trial', 'Cost of litigation; reduced legal aid; delay'],
    ['Substantive law', 'Offences defined in advance; presumption of mens rea; Article 7', 'Vague common law offences (conspiracy to corrupt public morals); strict liability; retrospective judicial change'],
  ], { size: 16, hsize: 18, cellFill: (ri, ci) => (ci === 2 ? '#fbf6e2' : null) }),
  (y) => note(y, '', '**Common mistake:** describing the elements without applying them to law making, the legal system **and** substantive law.', { size: 16, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'A table for the three areas. Law making: published, prospective statutes and section 19 HRA statements, against retrospective legislation, Henry VIII powers and ouster clauses. The legal system: independent judges, open courts, appeals and juries, against cost, reduced legal aid and delay. Substantive law: offences defined in advance and the presumption of mens rea, against vague common law offences, strict liability and retrospective judicial change.',
'In each area, show where the doctrine is respected and where it is under strain.', H2.area);

// 05 R v R and SW v UK
F('05-r-v-r-balance', 'Retrospective judicial change: R v R', '', [
  (y) => {
    const H = 260; let s = panel(30, y, 840, H);
    const cx = 450, by = y + 80;
    s += `<polygon points="${cx},${by + 10} ${cx - 34},${by + 150} ${cx + 34},${by + 150}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
    s += `<line x1="${cx - 290}" y1="${by + 30}" x2="${cx + 290}" y2="${by - 10}" stroke="${C.ink}" stroke-width="5"/>`;
    const pan = (x, yy, lab, fill) => path(`M${x},${yy} L${x - 70},${yy + 50} M${x},${yy} L${x + 70},${yy + 50}`, { w: 2.5 }) + `<path d="M${x - 105},${yy + 50} L${x + 105},${yy + 50} Q${x},${yy + 120} ${x - 105},${yy + 50} Z" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + para(x, yy + 112, lab, 220, { size: 17, weight: 700, anchor: 'middle', fill: C.ink, lh: 20 }).s;
    s += pan(cx - 260, by + 32, 'Respect for human dignity', C.cream) + pan(cx + 260, by - 8, 'No retrospective liability', C.tealLight);
    s += T(cx, y + 38, 'Change was a foreseeable development of the law', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
    return { s, h: H };
  },
  (y) => row(y, [
    { kicker: 'R v R (1991)', body: 'House of Lords: a husband could be guilty of raping his wife.' },
    { kicker: 'SW v UNITED KINGDOM (1995)', body: 'ECtHR: no breach of Article 7; the change was foreseeable and removing marital immunity respected human dignity.', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink } }),
],
'A balance tipped towards respect for human dignity over the principle of no retrospective liability. In R v R (1991) the House of Lords held a husband could be guilty of raping his wife; in SW v UK (1995) the European Court found no breach of Article 7 because the change was a foreseeable development consistent with human dignity.',
'One rule of law principle can be outweighed by another value.', H2.area);

// 06 Answer frame
F('06-answer-frame', 'Building a 5-mark “explain” answer', 'Explain how the rule of law applies to the legal system', [
  (y) => steps(y, [
    { kicker: 'CORE PRINCIPLE', title: 'Disputes decided by independent courts applying the law fairly' },
    { kicker: 'ELEMENT + CASE', title: 'Equality: the government is subject to the courts', body: '*M v Home Office* (1993): Home Secretary in contempt' },
    { kicker: 'SECOND ELEMENT + CASE', title: 'Fairness: people must be able to reach the courts', body: 'Employment tribunal fees quashed in *UNISON* (2017)' },
    { kicker: 'THEORY LINKED', title: 'Bingham’s sixth principle', body: 'No prohibitive cost or inordinate delay' },
    { kicker: 'EVALUATIVE POINT', title: 'Legal aid reductions mean some cannot enforce their rights' },
  ], { size: 16, tsize: 18, highlight: 4, gap: 10, pad: 14 }),
],
'Five building blocks of the annotated answer: the core principle of independent courts; equality with M v Home Office; fairness and access to courts with UNISON; Bingham’s sixth principle; and an evaluative point that legal aid cuts leave some unable to enforce rights.',
'Principle, element and case, second element and case, theory, then evaluation.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
