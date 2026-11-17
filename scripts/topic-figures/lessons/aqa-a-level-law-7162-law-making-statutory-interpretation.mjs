import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-law-making-statutory-interpretation';
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
  why: '## Why interpretation is needed',
  golden: '## The golden rule',
  mischief: '## The mischief rule',
  aids: '## Intrinsic and extrinsic aids',
  imp: '## Impact of EU law and the Human Rights Act 1998',
  we: '## Worked example: applying the rules to an unseen statute',
};

// 01 Spectrum of approaches
F('01-approaches-spectrum', 'Four approaches: from the words to the purpose', '', [
  (y) => {
    const ar = `<defs><linearGradient id="spg" x1="0" x2="1"><stop offset="0" stop-color="${C.tealLight}"/><stop offset="1" stop-color="${C.mustard}"/></linearGradient></defs>` +
      `<path d="M30,${y} L830,${y} L830,${y - 12} L870,${y + 22} L830,${y + 56} L830,${y + 44} L30,${y + 44} Z" fill="url(#spg)" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>` +
      T(50, y + 29, 'THE WORDS', { size: 17, weight: 700 }) + T(810, y + 29, 'THE PURPOSE', { size: 17, weight: 700, anchor: 'end' });
    return { s: ar, h: 44 };
  },
  (y) => row(y, [
    { kicker: 'LITERAL', title: 'Plain, ordinary meaning', body: 'Even if absurd. *Whiteley v Chappell*: a dead man is not “entitled to vote”' },
    { kicker: 'GOLDEN', title: 'Literal, unless absurd or repugnant', body: '*Adler v George*: “in the vicinity of” read as “in or in the vicinity of”' },
    { kicker: 'MISCHIEF', title: 'Suppress the defect Parliament targeted', body: '*Heydon’s Case* (1584); *Elliott v Grey*' },
    { kicker: 'PURPOSIVE', title: 'Purpose of the Act as a whole', body: '*Quintavalle* (2003): cloned embryos regulated', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 12, vcenter: false, card: { size: 15, tsize: 17, pad: 14, bfill: C.ink } }),
  (y) => note(y, '', 'The purposive approach is now **dominant**; it is wider than the mischief rule because it is not limited to a defect in the earlier law.', { size: 17, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'Four approaches on a scale from the words to the purpose: the literal rule (plain meaning, Whiteley v Chappell), the golden rule (literal unless absurd, Adler v George), the mischief rule (Heydon’s Case, Elliott v Grey) and the purposive approach (Quintavalle), which is now dominant.',
'The further right, the more the judge looks past the words to what Parliament was trying to do.', H2.why, { gap: 20 });

// 02 Golden rule: narrow and broad
F('02-golden-rule', 'The golden rule: narrow and broad approaches', 'Start with the literal meaning; modify it only to avoid absurdity', [
  (y) => row(y, [
    { kicker: 'NARROW APPROACH', title: 'Word has more than one meaning', body: 'Choose the meaning that avoids absurdity', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'BROAD APPROACH', title: 'Word has only one meaning', body: 'Modify it anyway to avoid a repugnant result', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 20, vcenter: false, card: { size: 16, tsize: 19, pad: 18, bfill: C.ink } }),
  (y) => {
    const a = card(30, y, 410, { kicker: 'R v ALLEN (1872)', body: 'Bigamy: a married person who “shall marry” another. Read as **“go through a ceremony of marriage”**, since a second valid marriage is impossible.', size: 16, pad: 16, bfill: C.ink });
    const b = stack(y, [
      { kicker: 'RE SIGSWORTH (1935)', body: 'A son who murdered his mother could not inherit as her “issue”.' },
      { kicker: 'R v REGISTRAR GENERAL, ex p SMITH (1991)', body: 'Statutory right to a birth certificate refused: real risk he would harm his birth mother.' },
    ], { x: 460, w: 410, gap: 10, card: { size: 16, pad: 16, bfill: C.ink } });
    return { s: a.s + b.s, h: Math.max(a.h, b.h) };
  },
  (y) => card(30, y, 840, { kicker: 'ADLER v GEORGE (1964)', body: 'Obstructing armed forces “in the vicinity of” a prohibited place; the defendant was inside the base. Read as **“in or in the vicinity of”**.', size: 16, pad: 16, bfill: C.ink }),
],
'The golden rule has a narrow approach, choosing between meanings to avoid absurdity, as in R v Allen (“shall marry” meaning a ceremony), and a broad approach, modifying a single meaning to avoid repugnance, as in Re Sigsworth and ex p Smith. In Adler v George “in the vicinity of” was read as “in or in the vicinity of”.',
'Narrow: pick the sensible meaning. Broad: change the only meaning to avoid a repugnant result.', H2.golden, { gap: 18 });

// 03 Mischief rule
F('03-mischief-rule', 'The mischief rule: Heydon’s four questions', 'Heydon’s Case (1584)', [
  (y) => row(y, [
    { kicker: '1', title: 'What was the common law before the Act?' },
    { kicker: '2', title: 'What was the mischief or defect?', fill: C.cream, edge: C.olive },
    { kicker: '3', title: 'What remedy did Parliament choose?' },
    { kicker: '4', title: 'What was the true reason for the remedy?' },
  ], { arrows: true, gap: 30, card: { tsize: 17, pad: 14, kfill: C.tealDark } }),
  (y) => ({ s: arrow(450, y - 16, 450, y + 4), h: 0 }),
  (y) => card(170, y, 560, { title: 'Interpret the Act to suppress the mischief', align: 'middle', fill: C.tealLight, edge: C.tealDark, tsize: 19, pad: 16 }),
  (y) => row(y, [
    { kicker: 'RCN v DHSS (1981)', body: 'Abortion Act 1967: “registered medical practitioner”. Nurses under a doctor’s supervision acted lawfully, because the mischief was **unsafe backstreet abortions**. A majority decision.' },
    { kicker: 'ELLIOTT v GREY (1960)', body: 'A car on a road with wheels off the ground and no battery was “used on a road”: the Act aimed to protect people from **uninsured vehicles** that could cause a hazard.' },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink } }),
],
'Heydon’s Case asks four questions: the common law before the Act, the mischief or defect, the remedy Parliament chose, and the true reason for it; the court then interprets the Act to suppress the mischief. In RCN v DHSS nurses’ involvement was lawful because the mischief was backstreet abortions; in Elliott v Grey a car with no battery was “used on a road”.',
'Find the defect the Act was passed to cure, then read the words to cure it.', H2.mischief, { gap: 22 });

// 04 Intrinsic and extrinsic aids
F('04-intrinsic-extrinsic-aids', 'Aids inside and outside the Act', '', [
  (y) => {
    const H = 380;
    let s = `<rect x="30" y="${y}" width="840" height="${H}" rx="14" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
    s += T(50, y + 32, 'EXTRINSIC: outside the Act', { size: 16, weight: 700, fill: C.tealDark });
    // Act document
    const ax = 300, aw = 300, ay = y + 52, ah = 300;
    s += `<rect x="${ax}" y="${ay}" width="${aw}" height="${ah}" rx="8" fill="${C.panel}" stroke="${C.ink}" stroke-width="3"/>`;
    s += T(ax + aw / 2, ay + 32, 'THE ACT: intrinsic aids', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
    ['Long title and short title', 'Preamble (older Acts)', 'Headings and section titles', 'Interpretation sections', 'Schedules'].forEach((l, i) => {
      s += `<rect x="${ax + 20}" y="${ay + 50 + i * 48}" width="${aw - 40}" height="38" rx="6" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + T(ax + aw / 2, ay + 75 + i * 48, l, { size: 16, weight: 600, anchor: 'middle' });
    });
    const L = ['Dictionaries of the time', 'Earlier Acts and historical setting', '*Hansard*, within *Pepper v Hart*'];
    const R = ['Law Commission and committee reports (*Black-Clawson*)', 'Explanatory notes (*Westminster v NASS*)', 'Treaties the Act gives effect to'];
    L.forEach((l, i) => { s += card(46, y + 62 + i * 102, 236, { body: l, size: 16, pad: 12, bfill: C.ink, minH: 86, vcenter: true }).s; });
    R.forEach((l, i) => { s += card(618, y + 62 + i * 102, 236, { body: l, size: 16, pad: 12, bfill: C.ink, minH: 86, vcenter: true }).s; });
    return { s, h: H };
  },
  (y) => {
    const head = T(30, y + 20, 'Hansard may be used only if (Pepper v Hart, 1993):', { size: 19, weight: 700 });
    const r = row(y + 36, [{ title: 'The Act is ambiguous' }, { title: 'The statement is by a minister or promoter' }, { title: 'The statement is clear' }], { gap: 14, card: { tsize: 17, pad: 14, align: 'middle', fill: C.cream, edge: C.olive } });
    return { s: head + r.s, h: 36 + r.h };
  },
],
'The Act in the centre holds the intrinsic aids: long and short titles, preamble, headings, interpretation sections and schedules. Around it are extrinsic aids: dictionaries of the time, earlier Acts, Hansard, Law Commission reports (Black-Clawson), explanatory notes (Westminster v NASS) and treaties. Hansard is limited by Pepper v Hart to ambiguous Acts and clear statements by a minister or promoter.',
'Intrinsic aids are in the Act; extrinsic aids come from outside it, Hansard only on the Pepper v Hart conditions.', H2.aids, { gap: 22 });

// 05 Rules of language
{
  const list = (x, y, words, hl) => { let s = '', cx = x; words.forEach((w, i) => { const c = chip(cx, y, w, { size: 16, fill: hl.includes(i) ? C.mustard : C.panel, edge: C.ink }); s += c.s; cx += c.w + 8; }); return s; };
  const blk = (y, kicker, latin, gloss, words, hl, verdict, kase) => {
    const H = 146;
    let s = panel(30, y, 840, H) + T(50, y + 38, latin, { size: 20, weight: 700, italic: true }) + T(50 + tw(latin, 20, 700) + 12, y + 38, '(' + gloss + ')', { size: 17, fill: C.muted });
    s += list(50, y + 56, words, hl);
    s += para(50, y + 122, `${kase}: ${verdict}`, 800, { size: 16, fill: C.ink }).s;
    return { s, h: H };
  };
  F('05-rules-of-language', 'Rules of language: read the words around the word', '', [
    (y) => blk(y, 'EJUSDEM GENERIS', 'Ejusdem generis', 'general words take the kind of the list', ['house', 'office', 'room', 'or other place'], [3], 'indoor places only, so an outdoor enclosure was not covered', '*Powell v Kempton Park Racecourse* (1899)'),
    (y) => blk(y, 'EXPRESSIO UNIUS EST EXCLUSIO ALTERIUS', 'Expressio unius est exclusio alterius', 'expressing one thing excludes others', ['lands', 'houses', 'coal mines'], [2], 'the rate did not apply to other kinds of mine', '*R v Inhabitants of Sedgley* (1831)'),
    (y) => blk(y, 'NOSCITUR A SOCIIS', 'Noscitur a sociis', 'a word is known by the company it keeps', ['interest', 'annuities', 'or other annual payments'], [0], 'meant annual interest only', '*IRC v Frere* (1965)'),
  ],
  'Three rules of language. Ejusdem generis: “house, office, room or other place” covered indoor places only (Powell v Kempton Park). Expressio unius: “lands, houses and coal mines” excluded other mines (R v Inhabitants of Sedgley). Noscitur a sociis: “interest” among annual payments meant annual interest only (IRC v Frere).',
  'The surrounding words limit the meaning of the word in question.', H2.aids, { gap: 14 });
}

// 06 EU law and HRA s3
F('06-eu-hra-impact', 'Interpretation under EU law and the Human Rights Act', '', [
  (y) => card(30, y, 840, { kicker: 'EU LAW (WHILE A MEMBER)', body: 'Interpret national law so far as possible to give effect to EU law: pushed judges towards **purposive** reasoning, even reading words in. Since withdrawal the duty has largely gone for new law; the legacy is comfort with purpose over literal wording.', size: 16, pad: 18, bfill: C.ink }),
  (y) => card(30, y, 840, { kicker: 'HUMAN RIGHTS ACT 1998, SECTION 3', title: 'Read compatibly with Convention rights “so far as it is possible to do so”', body: 'Goes further than the ordinary rules: applies even where the words are not ambiguous', size: 16, tsize: 19, pad: 18, bfill: C.ink, fill: C.tealLight, edge: C.tealDark }),
  (y) => ({ s: arrow(450, y - 18, 450, y + 2) + T(462, y - 3, 'impossible?', { size: 15, weight: 700, fill: C.rust }), h: 0 }),
  (y) => row(y, [
    { kicker: 'SECTION 4', title: 'Declaration of incompatibility', body: 'by the higher courts', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'COMMON MISTAKE', title: 'Courts cannot strike down the Act', body: 'Section 3 is not a power to set Acts aside', edge: C.rust, kfill: C.rust },
  ], { gap: 20, vcenter: false, card: { size: 16, tsize: 19, pad: 18, bfill: C.ink, align: 'middle' } }),
],
'EU law, while the UK was a member, required national law to be read so far as possible to give effect to EU law, encouraging purposive reasoning. Section 3 of the Human Rights Act requires a Convention-compatible reading so far as possible, even without ambiguity; where impossible, higher courts may make a section 4 declaration of incompatibility, but cannot strike the Act down.',
'Section 3 reaches further than the ordinary rules; section 4 is the fallback, not a strike-down power.', H2.imp, { gap: 24 });

// 07 Worked example Mia
F('07-mia-wheelchair', 'Applying the rules: Mia’s electric wheelchair', '“It is an offence to ride a bicycle, scooter or other vehicle on a footpath.”', [
  (y) => {
    const rows = [
      ['Literal', '“Vehicle” in its ordinary meaning could include a wheelchair', 'Guilty?', C.rust],
      ['Ejusdem generis', 'Bicycle, scooter: recreational ridden devices. A mobility aid may not be of the same kind', 'Likely not guilty', C.tealDark],
      ['Golden', 'Convicting disabled people for using footpaths would be absurd', 'Likely not guilty', C.tealDark],
      ['Mischief / purposive', 'Aim: protect pedestrians from cyclists and scooter riders, not mobility aids', 'Likely not guilty', C.tealDark],
    ];
    let s = '', cy = y;
    rows.forEach(([rule, app, res, col]) => {
      const cc = card(30, cy, 640, { title: rule, body: app, size: 16, tsize: 18, pad: 14, bfill: C.ink, minH: 70 });
      s += cc.s + `<rect x="690" y="${cy}" width="180" height="${cc.h}" rx="14" fill="${col === C.rust ? C.panel : C.tealLight}" stroke="${col}" stroke-width="2.5"/>` + T(780, cy + cc.h / 2 + 7, res, { size: 18, weight: 700, anchor: 'middle', fill: col });
      s += arrow(674, cy + cc.h / 2, 686, cy + cc.h / 2, { w: 3 });
      cy += cc.h + 10;
    });
    return { s, h: cy - y - 10 };
  },
  (y) => note(y, 'Conclusion', 'Most approaches suggest not guilty; the literal rule is the outlier. Each rule is **named, defined, applied and given a result**.', { size: 17 }),
],
'Four rules applied to Mia riding an electric wheelchair on a footpath under a fictional Act. Literal: “vehicle” could include a wheelchair, so possibly guilty. Ejusdem generis: a mobility aid is not of the same kind as a bicycle or scooter. Golden: convicting her would be absurd. Mischief or purposive: the Act protects pedestrians from cyclists and scooter riders. Most approaches point to not guilty.',
'Take each rule in turn: state it, apply it, give a result.', H2.we, { gap: 20 });

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
