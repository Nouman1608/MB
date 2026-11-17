import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-theory-of-tort-law';
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
  aims: '## What tort law is trying to do',
  i1: '## Issue 1: policy and the Caparo test',
  i2: '## Issue 2: policy and pure economic loss and psychiatric injury',
  i3: '## Issue 3: the objective standard of care',
  i4: '## Issue 4: injunctions and conflicting interests',
  i5: '## Issue 5: the nature and purpose of vicarious liability',
};

// 01 Aims
F('01-aims-of-tort', 'What tort law is trying to do', 'Name the aim before you judge the rule against it', [
  (y) => hub(y, ['Aims of', 'tort'], [
    { title: 'Compensation', body: 'Restore the position before the tort: compensatory damages', fill: C.tealLight, edge: C.tealDark },
    { title: 'Corrective justice', body: 'The wrongdoer, not the victim, bears loss caused by fault', fill: C.cream, edge: C.olive },
    { title: 'Deterrence', body: 'Threat of liability encourages care: breach factors; employers' },
  ], [
    { title: 'Loss spreading', body: 'Insurers spread losses: vicarious liability; compulsory motor insurance' },
    { title: 'Protecting interests in land', body: 'Neighbours tolerate each other within limits: nuisance and injunctions' },
  ], { cardW: 300, r: 76, csize: 20, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } }),
  (y) => {
    const lab = T(450, y + 18, 'THE AIMS PULL AGAINST EACH OTHER', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
    const r = row(y + 32, [
      { title: 'Compensation', body: 'favours wide liability', fill: C.tealLight, edge: C.tealDark },
      { title: 'Corrective justice', body: 'liability only for real fault', fill: C.cream, edge: C.olive },
      { title: 'Fear of over-burdening', body: 'defendants and courts: narrow liability' },
    ], { gap: 14, card: { size: 16, tsize: 18, pad: 14, bfill: C.ink, align: 'middle' } });
    return { s: lab + r.s, h: 32 + r.h };
  },
],
'Five aims of tort law around a hub: compensation, corrective justice, deterrence, loss spreading and protecting interests in land, each with where it shows in the rules. They pull against each other: compensation favours wide liability, corrective justice requires real fault, and fear of over-burdening defendants and courts favours narrow liability.',
'The five specification issues are each a balance between competing aims.', H2.aims);

// 02 Caparo third limb
F('02-caparo-policy', 'Caparo’s third limb: fair, just and reasonable?', 'Caparo Industries v Dickman (1990): openly a policy question', [
  (y) => grid(y, [
    { kicker: 'DEFENSIVE PRACTICE; DIVERTED RESOURCES', kfill: C.rust, title: 'Hill v CC of West Yorkshire (1989)', body: 'No duty to a future victim of a serial killer police had failed to catch', edge: C.rust },
    { kicker: 'WHO SHOULD CARRY THE LOSS', kfill: C.rust, title: 'Marc Rich v Bishop Rock (1995)', body: 'No duty from a classification society to cargo owners: shipowner and insurers carried the risk', edge: C.rust },
    { kicker: 'OMISSIONS STILL LIMITED', kfill: C.rust, title: 'Michael v CC of South Wales (2015)', body: 'No negligence duty for a mishandled emergency call; a human rights claim could continue', edge: C.rust },
    { kicker: 'LIMITS ON THE LIMIT', title: 'Robinson v CC of West Yorkshire (2018)', body: 'No general police immunity: officers who knocked over a pedestrian in an arrest were liable. Established duties applied directly', fill: C.tealLight, edge: C.tealDark },
  ], 2, { gap: 16, vgap: 14, vcenter: false, card: { size: 16, tsize: 17, pad: 16, bfill: C.ink } }),
  (y) => row(y, [
    { kicker: 'SUPPORTERS', body: 'A policy filter keeps the law workable and stops liability spreading to every careless public service' },
    { kicker: 'CRITICS', body: '“Policy” is vague; no evidence defensive practice follows liability; the claimant in *Hill* had no remedy' },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink, fill: C.cream, edge: C.olive } }),
],
'Policy cases at Caparo’s third stage: Hill (no duty, fear of defensive policing), Marc Rich (no duty, the loss already carried by others) and Michael (no duty for a mishandled call, though a human rights claim continued). Robinson limits this: no general police immunity where police positively cause injury. Supporters say the filter keeps the law workable; critics say policy is vague and unevidenced.',
'Policy can deny a duty even where harm was foreseeable and the parties close.', H2.i1);

// 03 Economic loss ripple
F('03-economic-loss-ripple', 'Pure economic loss: why the courts hold back', '', [
  (y) => {
    const H = 300; let s = panel(30, y, 840, H);
    const cx = 230, cy = y + 168;
    [118, 88, 56].forEach((r, i) => { s += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${C.tealDark}" stroke-width="2.5" stroke-dasharray="${i === 0 ? '8 7' : '0'}" opacity="${0.5 + i * 0.2}"/>`; });
    s += `<circle cx="${cx}" cy="${cy}" r="26" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + path(`M${cx - 12},${cy - 4} l8,-6 l4,10 l8,-6`, { stroke: C.rust, w: 3 });
    s += `<rect x="${cx - 56}" y="${cy + 33}" width="112" height="24" rx="6" fill="${C.panel}"/>` + T(cx, cy + 51, 'one cut cable', { size: 15, weight: 700, anchor: 'middle' });
    const fac = (x, yy) => `<path d="M${x - 14},${yy + 10} L${x - 14},${yy - 6} L${x - 4},${yy - 12} L${x - 4},${yy - 6} L${x + 6},${yy - 12} L${x + 6},${yy - 6} L${x + 14},${yy - 10} L${x + 14},${yy + 10} Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>`;
    for (let k = 0; k < 9; k++) { const a = (k / 9) * Math.PI * 2 + 0.35, r = 103; s += fac(cx + Math.cos(a) * r, cy + Math.sin(a) * r); }
    s += T(cx, y + 26, 'production stops in factory after factory', { size: 15, anchor: 'middle', fill: C.muted });
    s += para(400, y + 50, '“Liability in an indeterminate amount for an indeterminate time to an indeterminate class”', 440, { size: 18, weight: 700, italic: true, fill: C.ink, lh: 24 }).s;
    s += T(400, y + 136, 'Cardozo J, Ultramares v Touche (1931, United States)', { size: 15, fill: C.muted });
    s += para(400, y + 176, '**Spartan Steel v Martin** (1973): businesses can insure against interruptions; the loss is spread thinly across many claimants.', 440, { size: 16, fill: C.ink }).s;
    return { s, h: H };
  },
  (y) => row(y, [
    { kicker: 'RECOVERY ALLOWED', title: 'A special relationship', body: '*Hedley Byrne v Heller* (1964)', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'REFUSED', kfill: C.rust, title: 'Negligent acts', body: 'Loss not following physical damage', edge: C.rust },
    { kicker: 'EVALUATION', title: 'Clear and predictable', body: 'but can be arbitrary: depends on whether the loss followed physical damage', fill: C.cream, edge: C.olive },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 17, pad: 16, bfill: C.ink } }),
],
'Ripples spread from one cut power cable to many factories, illustrating Cardozo J’s fear of liability to an indeterminate class (Ultramares v Touche). Spartan Steel adds that businesses can insure and the loss is spread thinly. Recovery is allowed within a Hedley Byrne special relationship but refused for negligent acts; the line is predictable but can be arbitrary.',
'Financial loss ripples outward without limit, so the courts draw a firm line.', H2.i2);

// 04 Psychiatric injury
F('04-psychiatric-policy', 'Psychiatric injury: why the controls exist', '', [
  (y) => row(y, [
    { title: 'Vast numbers', body: 'Many can witness an accident, especially on television' },
    { title: 'Fraud and exaggeration', body: 'Fear of false or inflated claims' },
    { title: 'Proportion', body: 'Burden on defendants out of proportion to fault' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink, fill: C.cream, edge: C.olive } }),
  (y) => {
    const H = 250; let s = panel(30, y, 840, H);
    const ly = y + 70;
    s += `<line x1="70" y1="${ly}" x2="830" y2="${ly}" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)"/>`;
    const ev = (x, yr, nm, txt, fill) => `<circle cx="${x}" cy="${ly}" r="11" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + T(x, ly - 22, yr, { size: 18, weight: 700, anchor: 'middle' }) + para(x, ly + 38, nm, 180, { size: 16, weight: 700, anchor: 'middle', fill: C.ink, lh: 19 }).s + para(x, ly + 100, txt, 180, { size: 15, anchor: 'middle', fill: C.ink, lh: 19 }).s;
    s += ev(140, '1992', '*Alcock*', 'Control mechanisms for secondary victims', C.cream);
    s += ev(345, '1998', '*White*', 'Police officers failed: unfair if relatives in Alcock had not', C.panel);
    s += ev(555, '1998', 'Law Commission', 'Relax proximity for close ties; not enacted', C.tealLight);
    s += ev(760, '2024', '*Paul v Royal Wolverhampton*', 'Courts will not widen the categories', C.mustard);
    return { s, h: H };
  },
  (y) => note(y, 'Evaluation', 'Fair in its predictability, but not in individual results: a brother may fail where a fiancée succeeds, depending on proof of a close tie.', { size: 16, align: 'middle' }),
],
'Three policy reasons for limiting psychiatric injury claims: the vast numbers who can witness an event, fear of fraudulent claims, and disproportionate burdens on defendants. A timeline: Alcock (1992) set the controls; White (1998) refused police officers’ claims; the Law Commission (1998) recommended relaxing proximity but nothing was enacted; Paul (2024) confirmed the courts will not widen the categories.',
'The controls give certainty at the cost of some arbitrary results.', H2.i2);

// 05 Standard of care as cost-benefit
F('05-standard-of-care', 'The objective standard as a cost-benefit judgement', 'Would a reasonable person have taken the precaution?', [
  (y) => {
    const H = 250; let s = panel(30, y, 840, H);
    const cx = 450, by = y + 80;
    s += `<polygon points="${cx},${by + 10} ${cx - 34},${by + 150} ${cx + 34},${by + 150}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
    s += `<line x1="${cx - 290}" y1="${by + 10}" x2="${cx + 290}" y2="${by + 10}" stroke="${C.ink}" stroke-width="5"/>`;
    const pan = (x, lab, items, fill) => path(`M${x},${by + 10} L${x - 70},${by + 60} M${x},${by + 10} L${x + 70},${by + 60}`, { w: 2.5 }) + `<path d="M${x - 105},${by + 60} L${x + 105},${by + 60} Q${x},${by + 130} ${x - 105},${by + 60} Z" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + T(x, by - 34, lab, { size: 18, weight: 700, anchor: 'middle' }) + T(x, by + 128 + 22, items.join('  ·  '), { size: 16, anchor: 'middle' });
    s += pan(cx - 250, 'Risk: take the precaution', ['Probability', 'Seriousness'], C.cream) + pan(cx + 250, 'Against the precaution', ['Cost', 'Social utility'], C.tealLight);
    return { s, h: H };
  },
  (y) => grid(y, [
    { kicker: 'CERTAINTY AND EQUALITY', body: 'Everyone knows the standard; claimants protected equally' },
    { kicker: 'INSURANCE', body: '*Nettleship v Weston* (1971): learner judged as competent; motor insurance is compulsory' },
    { kicker: 'ADJUSTED WHERE JUSTIFIED', body: 'Children (*Mullin v Richards*, 1998); professionals (*Bolam*, 1957; *Bolitho*, 1997)' },
    { kicker: 'SOCIAL UTILITY', body: '*Daborn v Bath Tramways* (1946): wartime ambulance. Compensation Act 2006 s1; the 2015 Act' },
  ], 2, { gap: 16, vgap: 12, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
  (y) => note(y, 'Evaluation', 'Harsh on the inexperienced doing their honest best: better seen as allocating risk than moral blame. The 2006 and 2015 Acts may only restate what courts already did.', { size: 16, align: 'middle' }),
],
'A balance: probability and seriousness of harm weigh towards taking a precaution; cost and social utility weigh against. The objective standard gives certainty and equal protection, reflects insurance (Nettleship v Weston), is adjusted for children and professionals (Mullin; Bolam; Bolitho), and allows for social utility (Daborn; Compensation Act 2006; the 2015 Act). It can be harsh on the inexperienced.',
'Breach weighs the risk against the cost and value of the activity.', H2.i3);

// 06 Injunction balance
F('06-injunction-interests', 'Injunctions: weighing conflicting interests', 'An equitable, discretionary remedy', [
  (y) => row(y, [
    { kicker: 'CLAIMANT', title: 'Use and enjoyment of land', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'DEFENDANT', title: 'Their activity', fill: C.cream, edge: C.olive },
    { kicker: 'SOMETIMES', title: 'The wider community', fill: C.panel },
  ], { gap: 14, card: { tsize: 18, pad: 16, align: 'middle' } }),
  (y) => {
    const H = 140; let s = panel(30, y, 840, H) + T(50, y + 32, 'POSSIBLE OUTCOMES ONCE A NUISANCE IS PROVED', { size: 15, weight: 700, fill: C.tealDark });
    const segs = [['Full injunction', C.tealLight], ['Limited injunction', C.teal], ['Damages instead', C.cream]];
    segs.forEach(([l, f], i) => { const x = 60 + i * 260; s += `<rect x="${x}" y="${y + 52}" width="250" height="56" rx="10" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + 125, y + 87, l, { size: 18, weight: 700, anchor: 'middle' }); });
    s += T(445, y + 130, 'Kennaway', { size: 15, anchor: 'middle', fill: C.muted, italic: true }) + T(705, y + 130, 'Miller', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
    return { s, h: H };
  },
  (y) => grid(y, [
    { kicker: 'MILLER v JACKSON (1977)', body: 'Nuisance from cricket balls, but injunction refused: weight given to the village’s cricket ground' },
    { kicker: 'KENNAWAY v THOMPSON (1981)', body: 'Limited injunction on the number and type of powerboat events: claimant protected, club kept open' },
    { kicker: 'COVENTRY v LAWRENCE (2014)', body: '*Shelfer* (1895) not applied mechanically; public benefit and planning permission can be relevant', fill: C.cream, edge: C.olive },
    { kicker: 'EVALUATION', body: 'Flexible compromise, but can look like the defendant buying a right to commit a wrong', fill: C.panel, edge: C.rust },
  ], 2, { gap: 16, vgap: 12, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'An injunction weighs the claimant’s enjoyment of land, the defendant’s activity and sometimes the community. Outcomes range from a full injunction, to a limited one (Kennaway v Thompson, powerboat events), to damages instead (Miller v Jackson, cricket). Coventry v Lawrence says Shelfer must not be applied mechanically. Flexibility can look like the defendant buying a right to commit a wrong.',
'Discretion lets courts compromise, at the price of some claimants’ rights.', H2.i4);

// 07 Vicarious liability reasons
F('07-vicarious-reasons', 'Why make an employer liable without fault?', 'Lord Phillips, Various Claimants v Catholic Child Welfare Society (2012)', [
  (y) => steps(y, [
    { title: 'More likely to be able to pay, and to be insured' },
    { title: 'The tort arose from an activity carried out on the employer’s behalf' },
    { title: 'That activity is part of the employer’s business' },
    { title: 'By employing the person, the employer created the risk', body: '*Cox v Ministry of Justice* (2016), Lord Reed: “enterprise risk” is central' },
    { title: 'The employee was under the employer’s control to some degree' },
  ], { size: 16, tsize: 18, highlight: 3, gap: 8, pad: 13 }),
  (y) => row(y, [
    { kicker: 'FOR', body: 'Secures compensation; encourages careful recruitment and supervision', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'AGAINST', kfill: C.rust, body: 'Liability for a party who did nothing wrong; uncertain boundaries, limited in *Barclays Bank* (2020)', edge: C.rust },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'Lord Phillips’ five policy reasons in Various Claimants: the employer can pay and is insured; the tort arose from an activity on its behalf; the activity is part of its business; it created the risk, the enterprise risk idea Lord Reed made central in Cox v MoJ; and it controlled the employee. For: compensation and careful supervision. Against: liability without fault and uncertain boundaries, limited in Barclays Bank.',
'Whoever benefits from the activity should bear the risks it creates.', H2.i5);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
