import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-theory-of-contract-law';
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
  vol: '## The voluntary nature of contract',
  i1: '## Issue 1: freedom of contract and consumer protection',
  i2: '## Issue 2: offers, invitations to treat and the postal rule',
  i3: '## Issue 3: consideration, privity and economic duress',
  i4: '## Issue 4: the nature and effectiveness of exemption clauses',
  i5: '## Issue 5: the nature and effectiveness of remedies',
};

// 01 Voluntary nature
F('01-voluntary-nature', 'Contract: an obligation the parties choose', '', [
  (y) => row(y, [
    { kicker: 'CONTRACT', title: 'Obligations chosen by the parties', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'TORT', title: 'Duties imposed by law', fill: C.panel },
  ], { gap: 16, card: { tsize: 19, pad: 18, align: 'middle' } }),
  (y) => {
    const r = row(y, [
      { kicker: 'FREEDOM OF CONTRACT', title: 'Before the contract', body: 'Free to decide whether to contract, with whom, and on what terms', fill: C.cream, edge: C.olive },
      { kicker: 'SANCTITY OF CONTRACT', title: 'After the contract', body: 'Agreements must be kept; courts enforce them as made, not rewrite them', fill: C.cream, edge: C.olive },
    ], { gap: 46, arrows: true, vcenter: false, card: { size: 16, tsize: 18, pad: 18, bfill: C.ink } });
    return r;
  },
  (y) => note(y, 'Printing and Numerical Registering Co v Sampson (1875), Jessel MR', 'People of full age and competent understanding shall have the utmost liberty of contracting, and contracts freely entered into shall be held sacred and enforced.', { size: 16, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'Contract obligations are chosen by the parties, unlike tort duties imposed by law. Freedom of contract governs the decision whether, with whom and on what terms to contract; sanctity of contract means agreements must then be kept and enforced as made. Jessel MR in Printing and Numerical Registering Co v Sampson gave the classic statement.',
'Freedom to choose the terms, then the duty to keep them.', H2.vol);

// 02 Freedom v protection
F('02-freedom-v-protection', 'Freedom of contract or consumer protection?', '', [
  (y) => row(y, [
    { kicker: 'FOR FREEDOM', body: ['Respects autonomy; certainty for commerce', 'Businesses allocate and price risk', '*Photo Production v Securicor* (1980): exclusion clause enforced between equals'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'AGAINST', kfill: C.rust, body: ['Assumes equal bargaining power', 'Consumers sign standard terms they cannot negotiate or do not read', 'Atiyah (1979): the classical model declined as the state regulated'], bullets: true, edge: C.rust },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink, gap: 5 } }),
  (y) => {
    const H = 170; let s = panel(30, y, 840, H) + T(50, y + 32, 'WHERE THE LAW NOW DRAWS THE LINE', { size: 15, weight: 700, fill: C.tealDark });
    s += `<defs><linearGradient id="fp" x1="0" x2="1"><stop offset="0" stop-color="${C.teal}"/><stop offset="1" stop-color="${C.cream}"/></linearGradient></defs>`;
    s += `<rect x="60" y="${y + 50}" width="780" height="44" rx="22" fill="url(#fp)" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += T(80, y + 79, 'Business to business: near-complete freedom', { size: 17, weight: 700 }) + T(820, y + 79, 'Consumers: strong protection', { size: 17, weight: 700, anchor: 'end' });
    s += para(70, y + 122, 'UCTA 1977 reasonableness test', 330, { size: 16, fill: C.ink }).s + para(830, y + 122, 'CRA 2015: implied terms cannot be excluded (ss9–11, 31); fairness test (s62); no exclusion of death or injury by negligence (s65)', 400, { size: 16, fill: C.ink, anchor: 'end' }).s;
    return { s, h: H + 20 };
  },
  (y) => note(y, 'Evaluation', 'Defensible, but more complex; small businesses can be as weak as consumers without the same protection.', { size: 16, align: 'middle' }),
],
'Arguments for freedom of contract (autonomy, certainty, risk allocation, Photo Production v Securicor) and against it (unequal bargaining power, standard terms, Atiyah). The law now gives near-complete freedom between businesses, controlled by UCTA’s reasonableness test, and strong protection for consumers under the Consumer Rights Act 2015. Small businesses can fall in the gap.',
'Freedom between businesses, protection for consumers.', H2.i1);

// 03 Offers and invitations to treat
F('03-offer-or-invitation', 'Who has the power to conclude the contract?', '', [
  (y) => {
    const H = 200; let s = panel(30, y, 840, H);
    const bx = (x, yy, w, a, b, fill) => `<rect x="${x}" y="${yy}" width="${w}" height="64" rx="12" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + w / 2, yy + 28, a, { size: 18, weight: 700, anchor: 'middle' }) + T(x + w / 2, yy + 50, b, { size: 15, anchor: 'middle' });
    s += bx(50, y + 30, 220, 'Display or advert', 'invitation to treat', C.panel) + bx(340, y + 30, 220, 'Customer', 'makes the offer', C.tealLight) + bx(630, y + 30, 220, 'Seller', 'free to accept or not', C.mustard);
    s += arrow(274, y + 62, 336, y + 62) + arrow(564, y + 62, 626, y + 62);
    s += para(450, y + 130, 'If adverts were offers, a seller could receive more acceptances than they had stock (Lord Parker, *Partridge*)', 760, { size: 16, anchor: 'middle', fill: C.ink }).s;
    return { s, h: H };
  },
  (y) => row(y, [
    { kicker: 'INVITATIONS TO TREAT', body: '*Pharmaceutical Society v Boots* (1953); *Partridge v Crittenden* (1968): suits the realities of trade' },
    { kicker: 'EXCEPTION: UNILATERAL OFFER', body: '*Carlill* (1893): payment promised, money deposited to show sincerity, only performance required. An offer to the world.', fill: C.cream, edge: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink } }),
  (y) => note(y, '', 'Sensible but can look artificial: it depends on how clearly the advert shows an intention to be bound.', { size: 16, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'A display or advert is an invitation to treat, the customer makes the offer, and the seller is free to accept, so the seller cannot be bound to sell more than it has (Lord Parker in Partridge v Crittenden; Boots). Carlill v Carbolic Smoke Ball is the exception: a unilateral offer to the world. The line can look artificial.',
'Treating displays as invitations leaves the seller in control.', H2.i2);

// 04 Postal rule
F('04-postal-rule', 'The postal rule and electronic communications', '', [
  (y) => {
    const H = 250; let s = panel(30, y, 840, H);
    const tl = (yy, lab, sub, at, col) => {
      let o = T(50, yy - 4, lab, { size: 19, weight: 700 }) + T(50, yy + 20, sub, { size: 15, fill: C.muted });
      o += `<line x1="330" y1="${yy}" x2="840" y2="${yy}" stroke="${C.ink}" stroke-width="3"/>`;
      o += `<circle cx="400" cy="${yy}" r="9" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(400, yy + 32, 'sent', { size: 15, anchor: 'middle' });
      o += `<circle cx="780" cy="${yy}" r="9" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + T(780, yy + 32, 'received', { size: 15, anchor: 'middle' });
      o += `<circle cx="${at}" cy="${yy}" r="16" fill="${col}" stroke="${C.ink}" stroke-width="3"/>` + T(at, yy - 26, 'contract formed', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
      return o;
    };
    s += tl(y + 70, 'By post', 'Adams v Lindsell (1818)', 400, C.mustard);
    s += tl(y + 190, 'Instantaneous', 'Entores (1955); Brinkibon (1983)', 780, C.teal);
    s += T(590, y + 128, 'even if lost: Household Fire Insurance v Grant (1879)', { size: 15, anchor: 'middle', fill: C.olive, italic: true });
    return { s, h: H };
  },
  (y) => row(y, [
    { kicker: 'RATIONALE', body: ['Offeror chose the post, so bears the risk', 'Offeree gets certainty at a known moment', 'Offeror can require receipt: *Holwell Securities v Hughes* (1974)'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'EMAIL AND WEBSITES', body: ['Not truly instantaneous, but delivery can usually be checked', 'Most commentators: a receipt rule fits better', '**No binding appellate decision** settles when email acceptance takes effect'], bullets: true, fill: C.cream, edge: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink, gap: 5 } }),
],
'Two timelines. By post, the contract is formed when the acceptance is posted (Adams v Lindsell), even if lost (Household Fire Insurance v Grant). By instantaneous methods, it is formed on receipt (Entores; Brinkibon). The rationale: the offeror chose the post and can require receipt (Holwell v Hughes). For email, most commentators favour a receipt rule, but no binding appellate decision settles it.',
'Posting completes a postal acceptance; receipt completes an instant one.', H2.i2);

// 05 Consideration, privity, duress
F('05-consideration-links', 'Consideration and its two neighbours', '', [
  (y) => hub(y, ['Consideration', 'the price of', 'the promise'], [
    { kicker: 'PRIVITY', title: 'Only those who gave consideration can sue', body: '*Tweddle v Atkinson* (1861); *Dunlop v Selfridge* (1915)', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'INJUSTICE AND REFORM', title: 'Beswick v Beswick (1968)', body: 'Widow could not sue in her own right. Now: Contracts (Rights of Third Parties) Act 1999', fill: C.tealLight, edge: C.tealDark },
  ], [
    { kicker: 'EXISTING DUTY', title: 'Stilk v Myrick (1809)', body: 'Not consideration for extra pay. *Williams v Roffey* (1991): a practical benefit can be', fill: C.cream, edge: C.olive },
    { kicker: 'ECONOMIC DURESS', title: 'Atlas Express v Kafco (1989)', body: 'Promise to pay more, under threat not to deliver: unenforceable', fill: C.cream, edge: C.olive },
  ], { cardW: 300, r: 86, csize: 17, card: { size: 16, tsize: 17, pad: 16, bfill: C.ink } }),
  (y) => row(y, [
    { kicker: 'WHY CONSIDERATION?', body: 'Separates bargains from gratuitous promises; evidence of intention. Sufficient, not adequate (*Chappell v Nestlé*, 1960)' },
    { kicker: 'EVALUATION', body: '*Roffey* fits commercial renegotiation but weakens the doctrine and sits awkwardly with *Foakes v Beer* (1884)' },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink } }),
],
'Consideration, the price of the promise, links to privity on one side (Tweddle v Atkinson, Dunlop v Selfridge, Beswick v Beswick and the 1999 Act) and to economic duress on the other (Stilk v Myrick, Williams v Roffey’s practical benefit, Atlas Express v Kafco). Consideration separates bargains from gifts and need only be sufficient (Chappell v Nestlé); Roffey sits awkwardly with Foakes v Beer.',
'Privity follows from consideration; duress now does much of its protective work.', H2.i3);

// 06 Exemption clauses: three layers
F('06-exemption-layers', 'Controlling exemption clauses: three layers', 'An exemption clause allocates risk', [
  (y) => steps(y, [
    { kicker: 'INCORPORATION', title: 'Was it part of the contract?', body: '*Olley v Marlborough Court* (1949); *Thornton v Shoe Lane Parking* (1971): the more unusual the clause, the clearer the notice' },
    { kicker: 'CONSTRUCTION', title: 'Does it cover the breach?', body: 'Ambiguity read against the party relying on it' },
    { kicker: 'STATUTE', title: 'Is it allowed?', body: 'UCTA 1977 ss2–3; CRA 2015 ss31, 57, 65. Death or personal injury by negligence: ineffective (UCTA s2(1); CRA s65)' },
  ], { size: 16, tsize: 19, highlight: 2, gap: 12 }),
  (y) => row(y, [
    { kicker: 'EFFECTIVE', title: 'Between businesses', body: 'Often upheld if reasonable: efficient, the party best placed to insure takes the risk', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'WEAKNESS', kfill: C.rust, title: 'Against consumers', body: 'May not know their rights; deterred by a clause that is in fact unenforceable', edge: C.rust },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 18, pad: 18, bfill: C.ink } }),
],
'Three layers of control: incorporation (Olley; Thornton, where unusual clauses need clearer notice), construction (ambiguity read against the party relying on it), and statute (UCTA 1977 and CRA 2015, which make exclusion of liability for death or injury by negligence ineffective). Clauses are often upheld between businesses, but consumers may be deterred by unenforceable clauses.',
'Incorporation, construction, then statute.', H2.i4);

// 07 Remedies
F('07-remedies-effectiveness', 'How effective are contract remedies?', '', [
  (y) => card(30, y, 840, { kicker: 'DAMAGES: THE NORMAL REMEDY', title: 'The position if the contract had been performed', body: ['Limits: remoteness (*Hadley v Baxendale*, 1854); mitigation', 'No damages for disappointment (*Addis*, 1909), except where the purpose is enjoyment (*Jarvis v Swans Tours*, 1973)', '*Ruxley v Forsyth* (1996): a shallower pool of equal value: modest loss of amenity, not rebuilding cost'], bullets: true, gap: 4, size: 16, tsize: 18, pad: 18, bfill: C.ink }),
  (y) => {
    const lab = T(450, y + 16, 'CONSUMER RIGHTS ACT 2015: GOODS', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    const r = row(y + 30, [
      { title: 'Short-term right to reject', body: 's20, within 30 days', fill: C.tealLight, edge: C.tealDark },
      { title: 'Repair or replacement', body: 's23' },
      { title: 'Price reduction or final right to reject', body: 's24' },
    ], { gap: 46, arrows: true, card: { size: 16, tsize: 17, pad: 14, bfill: C.ink, align: 'middle' } });
    return { s: lab + r.s, h: 30 + r.h };
  },
  (y) => {
    const lab = T(450, y + 16, 'SERVICES', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    const r = row(y + 30, [
      { title: 'Repeat performance', body: 's55' },
      { title: 'Price reduction', body: 's56' },
    ], { x: 180, w: 540, gap: 46, arrows: true, card: { size: 16, tsize: 17, pad: 14, bfill: C.ink, align: 'middle' } });
    return { s: lab + r.s, h: 30 + r.h };
  },
  (y) => note(y, 'More useful than court damages', 'Usable without litigation, but only if consumers know them and traders honour them. Equitable remedies: flexible but less certain.', { size: 16, align: 'middle' }),
],
'Damages put the claimant where performance would have, limited by remoteness and mitigation; disappointment damages are only for enjoyment contracts (Addis; Jarvis), and Ruxley v Forsyth gave modest loss of amenity. Consumer remedies under the CRA 2015 run from the short-term right to reject within 30 days, to repair or replacement, to a price reduction or final rejection; services get repeat performance or a price reduction.',
'Consumer remedies work without court, if people know and use them.', H2.i5);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
