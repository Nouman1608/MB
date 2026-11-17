import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-theory-in-human-rights';
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
  th: '## Theories of rights: where do rights come from?',
  lib: '## Rights contrasted with liberties',
  scope: '## The scope of "fundamental human" rights',
  plan: '## Annotated plan: "Discuss the view that human rights are no more than liberties granted by law."',
};

// 01 Where do rights come from
F('01-where-rights-come-from', 'Where do rights come from?', '', [
  (y) => row(y, [
    { kicker: 'NATURAL RIGHTS', title: 'Because we are human', body: ['**Locke** (1689): life, liberty, property; social contract', '**Paine** (1791): each generation’s rights', 'UDHR 1948: “inherent dignity”'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'POSITIVISM', title: 'Because the law says so', body: ['**Bentham:** natural rights are “nonsense upon stilts”; test is happiness', '**Hart** (1961): a “minimum content of natural law”'], bullets: true, fill: C.cream, edge: C.olive },
    { kicker: 'RIGHTS AS TRUMPS', title: 'Override collective goals', body: ['**Dworkin** (1977): no override just to make the majority better off', 'Protects minorities'], bullets: true },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink, gap: 5 } }),
  (y) => table(y, [{ w: 0.6, head: '' }, { w: 1, head: 'Natural rights', hfill: C.teal }, { w: 1, head: 'Positivism', hfill: C.cream }, { w: 1, head: 'Trumps', hfill: C.panelEdge }], [
    ['Strength', 'A standard to criticise unjust laws, such as Nazi laws', 'Explains how rights work in practice: HRA rights can be enforced', 'Explains why some rights cannot be balanced away'],
    ['Weakness', 'No agreed method; different thinkers, different lists', 'A state can remove rights that depend wholly on law', 'Gives judges too large a role'],
  ], { size: 16, hsize: 17 }),
],
'Three theories of where rights come from. Natural rights exist because people are human (Locke, Paine, the UDHR’s inherent dignity): a standard to criticise unjust law, but with no agreed list. Positivism says rights come from law (Bentham; Hart’s minimum content of natural law): enforceable, but removable by the state. Dworkin’s rights as trumps override collective goals and protect minorities, but give judges a large role.',
'Natural rights, positivism and trumps each answer the source question differently.', H2.th);

// 02 Will vs interest
F('02-will-interest', 'What does having a right mean?', '', [
  (y) => row(y, [
    { kicker: 'WILL (CHOICE) THEORY: HART', title: 'Control over another’s duty', body: ['The holder can enforce or waive it', '**Problem:** young children and people lacking capacity cannot choose; some rights cannot be waived'], bullets: true, fill: C.cream, edge: C.olive },
    { kicker: 'INTEREST (BENEFIT) THEORY: RAZ', title: 'Well-being is reason enough for a duty', body: ['An aspect of well-being justifies holding others under a duty', '**Problem:** risks treating every protected interest as a right'], bullets: true, fill: C.tealLight, edge: C.tealDark },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, pad: 18, bfill: C.ink, gap: 6 } }),
  (y) => {
    const H = 130; let s = `<rect x="30" y="${y}" width="840" height="${H}" rx="14" fill="${C.panel}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
    s += T(450, y + 34, 'THE CONVENTION FITS THE INTEREST THEORY BETTER', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += row(y + 52, [{ body: '**Article 2** protects the life of a person who cannot choose' }, { body: '**Freedom from torture** cannot be waived' }], { x: 50, w: 800, gap: 16, card: { size: 16, pad: 14, bfill: C.ink, align: 'middle', fill: C.tealLight, edge: C.tealDark } }).s;
    return { s, h: H };
  },
],
'Will theory (Hart): a right gives control to enforce or waive another’s duty, but struggles with young children, people lacking capacity and unwaivable rights. Interest theory (Raz): well-being is sufficient reason to impose a duty, but risks treating every interest as a right. The Convention fits the interest theory: Article 2 protects those who cannot choose, and freedom from torture cannot be waived.',
'The Convention protects people who cannot choose, so interest theory fits it better.', H2.th);

// 03 Hohfeld
F('03-hohfeld', 'Hohfeld’s legal relations', 'Each position is matched by a correlative held by another person', [
  (y) => {
    const P = [
      ['Claim-right', 'Duty', 'A has a right to be paid; B has a duty to pay', C.mustard],
      ['Liberty (privilege)', 'No-right', 'A is free to walk on public land; B has no right to stop A', C.cream],
      ['Power', 'Liability', 'A can make a will; others’ legal positions are changed', C.panel],
      ['Immunity', 'Disability', 'A cannot be stripped of a protected status; the state lacks the power', C.panel],
    ];
    let s = T(170, y + 14, 'A HOLDS', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(470, y + 14, 'B HOLDS', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    const h = 76, gap = 12, y0 = y + 28;
    P.forEach(([a, b, ex, f], i) => {
      const yy = y0 + i * (h + gap);
      s += `<rect x="40" y="${yy}" width="260" height="${h}" rx="12" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(170, yy + 45, a, { size: 19, weight: 700, anchor: 'middle' });
      s += `<line x1="306" y1="${yy + h / 2}" x2="374" y2="${yy + h / 2}" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)" marker-start="url(#ah)"/>`;
      s += `<rect x="380" y="${yy}" width="180" height="${h}" rx="12" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(470, yy + 45, b, { size: 19, weight: 700, anchor: 'middle' });
      s += para(585, yy + 30, ex, 285, { size: 15, fill: C.ink, lh: 19 }).s;
    });
    return { s, h: 28 + 4 * (h + gap) - gap };
  },
  (y) => note(y, 'The key contrast', 'A **claim-right** puts a **duty** on someone else. A **liberty** only means the holder has **no duty not to act**: nobody is obliged to help.', { size: 16, align: 'middle' }),
],
'Hohfeld’s four positions and their correlatives: claim-right and duty (a right to be paid, a duty to pay); liberty and no-right (free to walk on public land, no right to stop it); power and liability (making a will); immunity and disability (the state lacks power to remove a protected status). A claim-right imposes a duty on another; a liberty does not.',
'A right puts a duty on someone else; a liberty does not.', H2.lib);

// 04 Residual liberties vs rights
F('04-liberty-vs-right', 'Residual liberties and rights in the UK', '', [
  (y) => row(y, [
    { kicker: 'BEFORE 1998: RESIDUAL LIBERTIES', title: 'Do anything the law does not forbid', body: ['Dicey (1885): liberties protected by the ordinary courts applying ordinary law', '**Weakness:** the state too may do anything not forbidden'], bullets: true, fill: C.cream, edge: C.olive },
    { kicker: 'A RIGHT', title: 'Places a duty on the state', body: ['The state must justify any interference'], bullets: true, fill: C.tealLight, edge: C.tealDark },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, pad: 18, bfill: C.ink, gap: 5 } }),
  (y) => card(30, y, 840, { kicker: 'MALONE v METROPOLITAN POLICE COMMISSIONER (1979)', kfill: C.rust, title: 'Telephone tapping lawful because no law forbade it', body: 'Mr Malone had no right of privacy to assert.', size: 16, tsize: 18, pad: 18, bfill: C.ink, edge: C.rust }),
  (y) => {
    const lab = T(450, y + 18, 'BERLIN, TWO CONCEPTS OF LIBERTY (1958)', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    const r = row(y + 32, [
      { title: 'Negative liberty', body: 'Freedom from interference. Mostly protected by civil and political rights such as Article 10' },
      { title: 'Positive liberty', body: 'Capacity to act and control one’s life. Positive obligations and social rights move towards it' },
    ], { gap: 16, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } });
    return { s: lab + r.s, h: 32 + r.h };
  },
],
'Before 1998 the UK relied on residual liberties: anything not forbidden was allowed, which Dicey thought the ordinary courts protected well. But the state could also do anything not forbidden: in Malone, telephone tapping was lawful and Mr Malone had no right of privacy. A right places a duty on the state to justify interference. Berlin contrasted negative liberty (freedom from interference) with positive liberty (capacity to act).',
'A liberty gave Malone nothing to assert; a right makes the state justify itself.', H2.lib);

// 05 Generations and scope
F('05-generations-scope', 'The scope of fundamental human rights', '', [
  (y) => {
    const G = [
      ['1st generation', 'Civil and political', 'Life, liberty, expression', C.mustard, 'The ECHR is mainly here: easier to enforce in court'],
      ['2nd generation', 'Economic, social and cultural', 'Work, health, education', C.cream, ''],
      ['3rd generation', 'Collective', 'Development, a healthy environment', C.tealLight, ''],
    ];
    let s = T(450, y + 14, 'KAREL VASAK’S GENERATIONS OF RIGHTS', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    const h = 74, gap = 10, y0 = y + 28;
    G.forEach(([a, b, c, f, note2], i) => {
      const yy = y0 + i * (h + gap);
      s += `<rect x="30" y="${yy}" width="${note2 ? 560 : 840}" height="${h}" rx="12" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(50, yy + 31, a, { size: 15, weight: 700, fill: C.tealDark }) + T(50, yy + 56, b, { size: 19, weight: 700 }) + T(i === 0 ? 570 : 850, yy + 56, c, { size: 16, anchor: 'end' });
      if (note2) s += `<rect x="606" y="${yy}" width="264" height="${h}" rx="12" fill="${C.panel}" stroke="${C.olive}" stroke-width="2.5"/>` + para(738, yy + 30, note2, 240, { size: 15, anchor: 'middle', fill: C.ink, weight: 600 }).s;
    });
    return { s, h: 28 + 3 * (h + gap) - gap };
  },
  (y) => row(y, [
    { kicker: 'UNIVERSALITY', title: 'Rights belong to everyone', body: 'Vienna Declaration 1993: “universal, indivisible and interdependent and interrelated”', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'CULTURAL RELATIVISM', title: 'Rights reflect Western values', body: 'Apply with regard to local cultures. The margin of appreciation is a limited concession', fill: C.cream, edge: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 18, pad: 18, bfill: C.ink } }),
  (y) => grid(y, [
    { kicker: 'HIERARCHY', body: 'Absolute, limited and qualified rights: torture cannot be balanced; expression can be restricted' },
    { kicker: 'CONFLICTS', body: 'Privacy v expression; assembly v others’ freedom of movement: not all rights can be trumps' },
    { kicker: 'RESPONSIBILITIES', body: 'Article 10.2: expression “carries with it duties and responsibilities”' },
    { kicker: 'WHO HOLDS THEM', body: 'Individuals, and some claims by companies, groups and NGOs (*Sunday Times v UK*, 1979); mainly against the state' },
  ], 2, { gap: 16, vgap: 12, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'Vasak’s three generations: civil and political rights (life, liberty, expression), where the ECHR mainly sits; economic, social and cultural rights (work, health, education); and collective rights (development, environment). Universality (Vienna Declaration 1993) is set against cultural relativism. Below: the hierarchy of rights, conflicts between rights, responsibilities in Article 10.2, and who holds rights (Sunday Times v UK).',
'The ECHR covers mainly first-generation rights, held mainly against the state.', H2.scope);

// 06 Essay plan
F('06-essay-plan', 'Essay plan: rights or liberties?', 'Discuss the view that human rights are no more than liberties granted by law', [
  (y) => steps(y, [
    { kicker: 'INTRODUCTION', title: 'Define right (claim + duty, Hohfeld) and liberty (no duty not to act)' },
    { kicker: 'FOR', title: 'Positivist support', body: 'Bentham: rights come only from law; HRA 1998 rights exist because Parliament enacted them' },
    { kicker: 'AGAINST', title: 'Natural rights', body: 'Locke; the UDHR’s “inherent dignity”: some rights exist whatever the law says' },
    { kicker: 'UK EXPERIENCE', title: 'Residual liberties failed in Malone (1979)', body: 'A right imposes a duty that a liberty does not' },
    { kicker: 'AGAINST', title: 'Dworkin: rights as trumps', body: 'Resist majority override; statute can remove liberties' },
    { kicker: 'SCOPE', title: 'Absolute rights like Article 3 are not mere liberties', body: 'Qualified rights look closer to liberties' },
    { kicker: 'CONCLUSION', title: 'Legal recognition enforces rights; their justification is moral', fill: C.cream },
  ], { size: 16, tsize: 17, highlight: 6, gap: 8, pad: 12 }),
],
'Seven steps in the essay plan: define right and liberty using Hohfeld; positivist support from Bentham and the HRA; natural rights against (Locke, UDHR); the failure of residual liberties in Malone; Dworkin’s trumps; absolute rights such as Article 3; and a conclusion that legal recognition enforces rights but their justification is moral.',
'Define, argue both ways with theorists and cases, then judge.', H2.plan);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
