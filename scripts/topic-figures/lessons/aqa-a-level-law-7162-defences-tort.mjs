import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-defences-tort';
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
  fit: '## How defences fit into an answer',
  cn: '## Contributory negligence',
  vol: '## Consent: volenti non fit injuria',
  nui: '## Defences specific to private nuisance',
  ryl: '## Defences to Rylands v Fletcher',
};

// 01 Where defences fit
F('01-defences-in-an-answer', 'Where defences fit in an answer', 'The defendant proves it, on the balance of probabilities', [
  (y) => row(y, [
    { kicker: 'FIRST', title: 'Claimant establishes the tort' },
    { kicker: 'THEN', title: 'Defendant proves a defence', fill: C.cream, edge: C.olive },
    { kicker: 'RESULT', title: 'Damages: full, reduced or none', fill: C.tealLight, edge: C.tealDark },
  ], { arrows: true, gap: 44, card: { size: 16, tsize: 19, align: 'middle' } }),
  (y) => table(y, [{ w: 1.3, head: 'Defence' }, { w: 1.3, head: 'Effect' }, { w: 1, head: 'Usual outcome' }], [
    ['Contributory negligence', 'Partial: damages reduced', 'Common'],
    ['Consent (volenti)', 'Complete: no damages', 'Rare'],
    ['Nuisance and *Rylands* defences', 'Complete', 'Depend on facts'],
  ], { size: 17 }),
  (y) => note(y, 'If both are arguable', 'Discuss **consent first** and explain why it is likely to fail, then apply **contributory negligence**.', { size: 17 }),
],
'The claimant first establishes the tort, then the defendant proves a defence on the balance of probabilities. Contributory negligence is partial and common; consent is complete but rare; the nuisance and Rylands defences are complete and depend on the facts. If both consent and contributory negligence are arguable, discuss consent first.',
'Tort first, then the defence; consent is complete but rare, contributory negligence partial and common.', H2.fit);

// 02 CN test and adjustments
F('02-contributory-negligence-test', 'Contributory negligence: what must be shown', '1945 Act, s1(1): damages reduced, claim not defeated', [
  (y) => row(y, [
    { kicker: '1', title: 'Claimant failed to take reasonable care for their own safety', body: 'An objective standard' },
    { kicker: '2', title: 'The failure contributed to the damage', body: 'Not necessarily to the accident. *Froom v Butcher* (1976): no seat belt did not cause the crash but made the injuries worse' },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, fill: C.tealLight, edge: C.tealDark, bfill: C.ink } }),
  (y) => ({ s: T(450, y + 16, 'The standard is adjusted for', { size: 18, weight: 700, anchor: 'middle' }), h: 20 }),
  (y) => row(y, [
    { kicker: 'CHILDREN', title: 'A reasonable child of the same age', body: ['*Gough v Thorne* (1966): 13-year-old waved across by a lorry driver, not at fault', '*Yachuk v Oliver Blais* (1949): nine-year-old could not appreciate petrol’s danger'] },
    { kicker: 'EMERGENCIES', title: 'A reasonable choice in the agony of the moment', body: ['*Jones v Boyce* (1816): passenger jumped from a coach he feared would overturn; it stayed upright, but he was not at fault'] },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 18, bullets: true, gap: 6 } }),
],
'Under the Law Reform (Contributory Negligence) Act 1945 damages are reduced, not defeated. The defendant shows the claimant failed to take reasonable care for their own safety, judged objectively, and that this contributed to the damage, not necessarily the accident (Froom v Butcher). The standard is adjusted for children (Gough v Thorne; Yachuk v Oliver Blais) and emergencies (Jones v Boyce).',
'Careless for their own safety, and that carelessness added to the damage.', H2.cn);

// 03 Apportionment chart
{
  const chart = (y) => {
    const rows = [
      ['Froom v Butcher: belt would have prevented injury', 25],
      ['Froom v Butcher: belt would have made it less severe', 15],
      ['O’Connell v Jackson: no crash helmet', 15],
      ['Owens v Brimmell: knew the driver had been drinking', 20],
      ['Sayers v Harlow UDC: climbed out of a locked cubicle', 25],
      ['Jones v Livox Quarries: rode on the vehicle against instructions', 20],
    ];
    const x0 = 30, bx = 40, W = 820, sc = W / 30;
    let s = '', cy = y;
    rows.forEach(([lab, p], i) => {
      s += T(bx, cy + 18, lab, { size: 16, weight: 600 });
      s += `<rect x="${bx}" y="${cy + 28}" width="${W}" height="26" rx="6" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
      s += `<rect x="${bx}" y="${cy + 28}" width="${p * sc}" height="26" rx="6" fill="${i < 2 ? C.cream : C.teal}" stroke="${C.ink}" stroke-width="2"/>`;
      s += T(bx + p * sc + 10, cy + 47, i === 5 ? 'one fifth' : `${p}%`, { size: 17, weight: 700 });
      cy += 66;
    });
    [0, 10, 20, 30].forEach((v) => { s += `<line x1="${bx + v * sc}" y1="${cy - 4}" x2="${bx + v * sc}" y2="${cy + 4}" stroke="${C.ink}" stroke-width="2"/>` + T(bx + v * sc, cy + 24, `${v}%`, { size: 15, anchor: v === 0 ? 'start' : 'middle', fill: C.muted }); });
    s += `<line x1="${bx}" y1="${cy}" x2="${bx + W}" y2="${cy}" stroke="${C.ink}" stroke-width="2"/>`;
    return { s, h: cy + 28 - y };
  };
  F('03-apportionment-reductions', 'How much are damages reduced?', 'Reductions in decided cases, by the claimant’s share of responsibility', [chart,
    (y) => note(y, '', 'Froom guidance: no reduction if a seat belt would have made no difference. A **100%** reduction is impossible: both parties share responsibility (*Pitts v Hunt*, 1990).', { size: 16 })],
  'A bar chart of reductions: Froom v Butcher guidance of 25% if a seat belt would have prevented the injury and 15% if it would have made it less severe; O’Connell v Jackson 15%; Owens v Brimmell 20%; Sayers v Harlow UDC 25%; Jones v Livox Quarries one fifth. A 100% reduction is impossible (Pitts v Hunt).',
  'Use a decided case to suggest a realistic percentage.', H2.cn);
}

// 04 Naz worked apportionment
{
  const bar = (y) => {
    const bx = 40, W = 820;
    let s = '';
    s += T(bx, y + 18, 'Full damages assessed: £40,000 (invented figure)', { size: 17, weight: 700 });
    s += `<rect x="${bx}" y="${y + 30}" width="${W}" height="60" rx="8" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += `<rect x="${bx + W * 0.8}" y="${y + 30}" width="${W * 0.2}" height="60" rx="8" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="7 5"/>`;
    s += T(bx + W * 0.4, y + 67, 'Damages awarded: £32,000', { size: 19, weight: 700, anchor: 'middle' });
    s += T(bx + W * 0.9, y + 58, 'Naz’s 20%', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
    s += T(bx + W * 0.9, y + 78, '£8,000', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
    return { s, h: 96 };
  };
  F('04-naz-apportionment', 'Worked apportionment: Naz', 'Hit by a speeding driver while cycling without lights at dusk', [bar,
    (y) => row(y, [
      { kicker: 'STEP 1', title: 'Full damages', body: '£40,000' },
      { kicker: 'STEP 2', title: 'Claimant’s share', body: '20% of £40,000 = £8,000' },
      { kicker: 'STEP 3', title: 'Damages awarded', body: '£40,000 − £8,000 = £32,000', fill: C.tealLight, edge: C.tealDark },
    ], { arrows: true, gap: 40, card: { size: 17, tsize: 18, bfill: C.ink } })],
  'A bar of £40,000 full damages for Naz, an invented figure. The court finds her 20% responsible for cycling without lights, so £8,000 is deducted and £32,000 is awarded.',
  'Deduct the claimant’s share from the full damages.', H2.cn);
}

// 05 Volenti
F('05-volenti', 'Consent (volenti): why it usually fails', 'Needs full knowledge of the risk and a voluntary agreement to it', [
  (y) => grid(y, [
    { kicker: 'KNOWLEDGE IS NOT CONSENT', title: 'Smith v Baker (1891)', body: 'Quarry worker knew of the crane but had no real choice' },
    { kicker: 'PASSENGERS', title: 'Dann v Hamilton (1939)', body: 'Not volenti; s149 Road Traffic Act 1988 now bars the defence where insurance is compulsory' },
    { kicker: 'INSTRUCTORS', title: 'Nettleship v Weston (1971)', body: 'Asked about insurance: no waiver of his claim' },
    { kicker: 'RESCUERS', title: 'Haynes v Harwood; Baker v TE Hopkins', body: 'Acting under a moral or legal duty: no consent' },
    { kicker: 'CUSTODY', title: 'Reeves v Commissioner of Police (2000)', body: 'Duty to prevent the very act that occurred' },
    { kicker: 'NOTICES', title: 'UCTA 1977 s2(3)', body: 'Awareness of a notice is not of itself acceptance of the risk' },
  ], 3, { gap: 12, vcenter: false, card: { size: 15, tsize: 17, pad: 14, fill: C.cream, edge: C.olive } }),
  (y) => row(y, [
    { kicker: 'SUCCEEDS', title: 'ICI v Shatwell (1965)', body: 'Experienced shotfirers broke safety rules to save time' },
    { kicker: 'SUCCEEDS', title: 'Morris v Murray (1991)', body: 'Flight with a pilot who had drunk about 17 whiskies' },
    { kicker: 'SPORT', title: 'Condon v Basi (1985)', body: 'Inherent risks only; a reckless sliding tackle was not consented to' },
  ], { gap: 12, vcenter: false, card: { size: 15, tsize: 17, pad: 14, fill: C.tealLight, edge: C.tealDark } }),
],
'Six cards where consent fails: Smith v Baker (knowledge is not consent), Dann v Hamilton and s149 Road Traffic Act 1988 (passengers), Nettleship v Weston (instructor), Haynes v Harwood and Baker v TE Hopkins (rescuers), Reeves (custody), and UCTA s2(3) (notices). Below, it succeeded in ICI v Shatwell and Morris v Murray; in sport only inherent risks are accepted (Condon v Basi).',
'Knowing of a risk is not agreeing to it; volenti succeeds only where the choice was free and obvious.', H2.vol);

// 06 Nuisance defences
F('06-nuisance-defences', 'Private nuisance: defences and non-defences', '', [
  (y) => row(y, [
    { kicker: 'DEFENCE', title: 'Prescription', body: '20 years of actionable nuisance without objection. *Sturges v Bridgman* (1879): time ran only from when the consulting room was built, so it failed', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'DEFENCE', title: 'Statutory authority', body: 'The nuisance is the inevitable result of what a statute authorised. *Allen v Gulf Oil Refining* (1981)', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, bfill: C.ink } }),
  (y) => row(y, [
    { kicker: 'NOT A DEFENCE', kfill: C.rust, title: 'Coming to the nuisance', body: '*Bliss v Hall* (1838); *Miller v Jackson* (1977); *Coventry v Lawrence* (2014)' },
    { kicker: 'NOT A DEFENCE', kfill: C.rust, title: 'Public benefit', body: '*Adams v Ursell* (1913): fish and chip shop; may affect the remedy, not liability' },
    { kicker: 'NOT A DEFENCE', kfill: C.rust, title: 'Planning permission', body: '*Wheeler v JJ Saunders* (1996), though it may change the locality' },
  ], { gap: 12, vcenter: false, card: { size: 16, tsize: 18, fill: C.cream, edge: C.rust, bfill: C.ink } }),
],
'Two defences to private nuisance: prescription after 20 years of actionable nuisance (Sturges v Bridgman, where it failed) and statutory authority (Allen v Gulf Oil Refining). Three arguments that are not defences: coming to the nuisance (Bliss v Hall, Miller v Jackson, Coventry v Lawrence), public benefit (Adams v Ursell) and planning permission (Wheeler v JJ Saunders).',
'Prescription and statutory authority work; coming to the nuisance does not.', H2.nui);

// 07 Rylands defences
F('07-rylands-defences', 'Defences to Rylands v Fletcher', '', [
  (y) => table(y, [{ w: 1, head: 'Defence' }, { w: 1.4, head: 'Rule' }, { w: 1.7, head: 'Authority' }], [
    ['Act of God', 'Natural forces no human could foresee or guard against', '*Nichols v Marsland* (1876): extraordinary rainfall. Contrast *Greenock Corporation* (1917): heavy rain not enough'],
    ['Act of a stranger', 'Unforeseeable act of a third party outside the defendant’s control', '*Rickards v Lothian* (1913): tap turned on; *Perry v Kendricks Transport* (1956): lit match in a petrol tank'],
    ['Consent / common benefit', 'The claimant agreed to the accumulation', '*Peters v Prince of Wales Theatre* (1943): sprinkler system'],
    ['Statutory authority', 'Accumulation required by statute', '*Green v Chelsea Waterworks* (1894)'],
    ['Default of the claimant', 'Damage caused by the claimant’s own act', '*Ponting v Noakes* (1894)'],
  ], { size: 16 }),
  (y) => note(y, '', 'A contractor is under the defendant’s control, so a contractor’s act is **not** an act of a stranger.', { size: 17, align: 'middle' }),
],
'A table of five Rylands v Fletcher defences: Act of God (Nichols v Marsland; contrast Greenock Corporation), act of a stranger (Rickards v Lothian; Perry v Kendricks Transport), consent or common benefit (Peters v Prince of Wales Theatre), statutory authority (Green v Chelsea Waterworks) and default of the claimant (Ponting v Noakes). A contractor’s act is not an act of a stranger.',
'Five defences, each narrow: natural forces, strangers, consent, statute, the claimant’s own act.', H2.ryl);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
