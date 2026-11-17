import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-reform';
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
  why: '## Why reform is debated',
  opt: '## The main reform options',
  prop: '## What has actually been proposed',
  con: '## Constraints on reform',
  sb: '## Reform at Strasbourg',
  plan: '## Annotated plan: "Discuss whether the Human Rights Act 1998 should be replaced by a UK Bill of Rights."',
};

// 01 Criticisms from both sides
F('01-criticisms-both-sides', 'Criticised from both directions', 'The Human Rights Act 1998 is attacked for doing too much and too little', [
  (y) => {
    const cy = y + 20;
    let s = `<rect x="390" y="${cy}" width="120" height="64" rx="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(450, cy + 30, 'HRA', { size: 22, weight: 700, anchor: 'middle' }) + T(450, cy + 52, '1998', { size: 16, weight: 600, anchor: 'middle' });
    s += arrow(386, cy + 32, 250, cy + 32, { w: 4, color: C.rust, marker: 'ahR' }) + arrow(514, cy + 32, 650, cy + 32, { w: 4, color: C.tealDark, marker: 'ahT' });
    s += T(220, cy + 26, 'LESS judicial or', { size: 17, weight: 700, anchor: 'end', fill: C.rust }) + T(220, cy + 48, 'European influence', { size: 17, weight: 700, anchor: 'end', fill: C.rust });
    s += T(680, cy + 26, 'STRONGER', { size: 17, weight: 700, fill: C.tealDark }) + T(680, cy + 48, 'protection', { size: 17, weight: 700, fill: C.tealDark });
    return { s, h: 104 };
  },
  (y) => {
    const L = stack(y, [
      { kicker: 'SECTION 3 REWRITES STATUTES', body: '*Ghaidan v Godin-Mendoza* (2004): words read into the Rent Act 1977' },
      { kicker: 'SECTION 2 TIES COURTS TO STRASBOURG', body: '*Ullah* (2004) “mirror principle”, though s2 only requires taking account' },
      { kicker: 'NATIONAL SOVEREIGNTY', body: 'Prisoner voting after *Hirst v UK (No 2)* (2005)' },
      { kicker: 'EXPANDING OBLIGATIONS', body: 'Positive obligations and broad Article 8 readings reach policy, e.g. deportation' },
    ], { x: 30, w: 410, gap: 10, card: { size: 15, pad: 13, bfill: C.ink, kfill: C.rust, edge: C.rust } });
    const R = stack(y, [
      { kicker: 'NO ENTRENCHMENT', body: 'An ordinary Act: amended or repealed by simple majority' },
      { kicker: 'DECLARATIONS DO NOT BIND', body: 'Under s4 an incompatible Act stays in force' },
      { kicker: 'LIMITED RIGHTS', body: 'Civil and political only: no housing or health care rights' },
      { kicker: 'PUBLIC AUTHORITY GAPS', body: '*YL v Birmingham CC* (2007): private providers outside s6 (later closed for publicly arranged care)' },
    ], { x: 460, w: 410, gap: 10, card: { size: 15, pad: 13, bfill: C.ink, fill: C.tealLight, edge: C.tealDark } });
    return { s: L.s + R.s, h: Math.max(L.h, R.h) };
  },
],
'The Human Rights Act is pulled two ways. Those wanting less judicial or European influence point to section 3 rewriting statutes (Ghaidan), section 2 and the Ullah mirror principle, prisoner voting after Hirst, and expanding obligations. Those wanting stronger protection point to no entrenchment, non-binding section 4 declarations, no social rights and gaps in section 6 (YL v Birmingham).',
'Every reform option answers one side’s criticisms and sharpens the other’s.', H2.why, { gap: 16 });

// 02 Options spectrum
F('02-reform-options', 'Five reform options, from weaker to stronger protection', '', [
  (y) => {
    const ar = `<defs><linearGradient id="rog" x1="0" x2="1"><stop offset="0" stop-color="#f3d9c9"/><stop offset="1" stop-color="${C.tealLight}"/></linearGradient></defs>` +
      `<path d="M30,${y} L830,${y} L830,${y - 10} L870,${y + 20} L830,${y + 50} L830,${y + 40} L30,${y + 40} Z" fill="url(#rog)" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>` +
      T(50, y + 27, 'LESS EXTERNAL CHECK', { size: 15, weight: 700, fill: C.rust }) + T(810, y + 27, 'STRONGER PROTECTION', { size: 15, weight: 700, anchor: 'end', fill: C.tealDark });
    return { s: ar, h: 40 };
  },
  (y) => table(y, [
    { w: 0.95, head: 'Option' },
    { w: 1.3, head: 'Supporters’ case', hfill: C.tealLight },
    { w: 1.35, head: 'Objections', hfill: C.cream },
  ], [
    ['Withdraw from the Convention', 'Full national control over rights', 'Article 58: six months’ notice, but devolution and the Belfast Agreement problems; no external check'],
    ['Replace with a UK Bill of Rights, stay in the Convention', 'Greater “ownership”; could add rights such as jury trial', 'Still bound by Strasbourg judgments, so gaps mean more adverse rulings'],
    ['Amend the HRA (e.g. s2, s3)', 'Targets specific complaints; rights still enforceable at home', 'Weaker s3 could mean more declarations and more cases at Strasbourg'],
    ['Keep the HRA unchanged', 's4 respects sovereignty; most declarations acted on; dialogue with Strasbourg', 'Leaves the criticisms unanswered'],
    ['Strengthen: entrench, written constitution, social rights', 'Harder to remove, wider in scope', 'Conflicts with sovereignty; judges deciding spending'],
  ], { size: 15, hsize: 17, pad: 12 }),
],
'A table of five options ordered from less external check to stronger protection: withdraw from the Convention, replace the HRA with a UK Bill of Rights while staying in the Convention, amend sections 2 and 3, keep the HRA unchanged, or strengthen protection by entrenchment, a written constitution or social rights, each with supporters’ case and objections.',
'Replacing the HRA is not the same as leaving the Convention.', H2.opt, { gap: 16 });

// 03 Timeline of proposals
F('03-proposals-timeline', 'What has actually been proposed, and what happened', 'Present proposals as proposals, not as law', [
  (y) => {
    const ev = [
      ['2011–12', 'Commission on a Bill of Rights', 'Majority for a UK Bill of Rights in principle; no agreement on content (Dec 2012)', 0],
      ['2015', 'Conservative manifesto', 'Pledged to scrap the HRA for a British Bill of Rights', 0],
      ['2020–21', 'Independent Human Rights Act Review', 'Sir Peter Gross: Act working broadly well; limited changes, not repeal', 1],
      ['June 2022', 'Bill of Rights Bill introduced', 'Would repeal the HRA: no s3 duty, Strasbourg not binding, permission stage, limits on positive obligations', 0],
      ['June 2023', 'Bill dropped', 'Government announced it would not proceed', 2],
      ['2024', 'Safety of Rwanda Act', 'Disapplied key HRA sections for that Act; policy abandoned after the 2024 election', 0],
    ];
    let s = '', cy = y; const mids = [];
    ev.forEach(([d, t1, b, st]) => {
      const c = card(196, cy, 674, { title: t1, body: b, size: 15, tsize: 18, pad: 12, bfill: C.ink, fill: st === 1 ? C.tealLight : st === 2 ? C.cream : C.panel, edge: st === 1 ? C.tealDark : st === 2 ? C.olive : C.panelEdge });
      const m = cy + c.h / 2; mids.push(m);
      s += c.s + `<rect x="30" y="${m - 20}" width="146" height="40" rx="20" fill="${st === 2 ? C.mustard : C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` + T(103, m + 6, d, { size: 17, weight: 700, anchor: 'middle' });
      cy += c.h + 9;
    });
    return { s: `<line x1="103" y1="${mids[0]}" x2="103" y2="${mids[mids.length - 1]}" stroke="${C.panelEdge}" stroke-width="4"/>` + s, h: cy - y - 9 };
  },
  (y) => note(y, 'Common mistake', 'Writing that the Bill of Rights Bill became law. **It did not proceed.**', { size: 17 }),
],
'A timeline: the Commission on a Bill of Rights (2011 to 2012) found majority support in principle but no agreed content; the 2015 manifesto pledged to scrap the HRA; the Independent Human Rights Act Review (2020 to 2021) found it working broadly well; the Bill of Rights Bill was introduced in June 2022 and dropped in June 2023; the Safety of Rwanda Act 2024 disapplied parts of the HRA before the policy was abandoned.',
'Repeal has been proposed repeatedly, but the HRA remains in force.', H2.prop, { gap: 18 });

// 04 Constraints
F('04-reform-constraints', 'What makes the HRA hard to change?', '', [
  (y) => {
    const cx = 450, cyy = y + 190, r = 84;
    let s = `<circle cx="${cx}" cy="${cyy}" r="${r}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(cx, cyy - 6, 'Changing', { size: 20, weight: 700, anchor: 'middle' }) + T(cx, cyy + 20, 'the HRA', { size: 20, weight: 700, anchor: 'middle' });
    const a = card(30, y, 330, { kicker: 'DEVOLUTION', body: 'Scotland Act 1998, Government of Wales Act 2006, Northern Ireland Act 1998: incompatible devolved acts are outside competence. The HRA is **entrenched** in the settlement', size: 15, pad: 14, bfill: C.ink, fill: C.tealLight, edge: C.tealDark });
    const b = card(540, y, 330, { kicker: 'SEWEL CONVENTION', body: 'Westminster does not normally legislate on devolved matters without consent; **not legally enforceable**', size: 15, pad: 14, bfill: C.ink });
    const c = card(30, y + 250, 330, { kicker: 'BELFAST AGREEMENT 1998', body: 'The Good Friday Agreement: commitment to incorporate the Convention in Northern Ireland, with direct access to courts and remedies', size: 15, pad: 14, bfill: C.ink });
    const d = card(540, y + 250, 330, { kicker: 'ARTICLE 46', body: 'While a party, the UK must abide by final Strasbourg judgments, whatever domestic law says', size: 15, pad: 14, bfill: C.ink, fill: C.cream, edge: C.olive, kfill: C.olive });
    s += `<line x1="360" y1="${y + a.h / 2}" x2="${cx - r * 0.75}" y2="${cyy - r * 0.6}" stroke="${C.ink}" stroke-width="2.5"/>` + `<line x1="540" y1="${y + b.h / 2}" x2="${cx + r * 0.75}" y2="${cyy - r * 0.6}" stroke="${C.ink}" stroke-width="2.5"/>` + `<line x1="360" y1="${y + 250 + c.h / 2}" x2="${cx - r * 0.75}" y2="${cyy + r * 0.6}" stroke="${C.ink}" stroke-width="2.5"/>` + `<line x1="540" y1="${y + 250 + d.h / 2}" x2="${cx + r * 0.75}" y2="${cyy + r * 0.6}" stroke="${C.ink}" stroke-width="2.5"/>`;
    return { s: s + a.s + b.s + c.s + d.s, h: 250 + Math.max(c.h, d.h) };
  },
],
'Four constraints around “changing the HRA”: devolution statutes make incompatible devolved acts outside competence, entrenching the HRA in the settlement; the Sewel Convention, though not legally enforceable; the Belfast (Good Friday) Agreement’s commitment to incorporate the Convention in Northern Ireland; and Article 46, binding the UK to final Strasbourg judgments.',
'Devolution, Northern Ireland and Article 46 limit what Westminster can do alone.', H2.con);

// 05 Strasbourg reform
F('05-strasbourg-reform', 'Reform at Strasbourg', 'Council of Europe level: the Court’s backlog and its balance with national authorities', [
  (y) => {
    const ev = [
      ['2010', 'Protocol 14 in force', 'Single-judge decisions; the significant disadvantage criterion', C.tealLight],
      ['2010', 'Interlaken conference', 'Backlog; balance between the Court and national authorities', C.panel],
      ['2012', 'Brighton conference', 'Brighton Declaration led to Protocol 15', C.panel],
      ['2021', 'Protocol 15 in force', '**Subsidiarity** and **margin of appreciation** added to the preamble; time limit cut from six months to four', C.cream],
    ];
    const W = 195, gap = 20; let s = '';
    const cs = ev.map(([d, t1, b, f], i) => card(30 + i * (W + gap), y + 70, W, { title: t1, body: b, size: 15, tsize: 17, pad: 13, bfill: C.ink, fill: f, edge: f === C.cream ? C.olive : f === C.tealLight ? C.tealDark : C.panelEdge }));
    const H = Math.max(...cs.map((c) => c.h));
    s += `<line x1="60" y1="${y + 30}" x2="860" y2="${y + 30}" stroke="${C.ink}" stroke-width="3"/>`;
    ev.forEach(([d, t1, b, f], i) => {
      const x = 30 + i * (W + gap);
      s += card(x, y + 70, W, { title: t1, body: b, size: 15, tsize: 17, pad: 13, bfill: C.ink, fill: f, edge: f === C.cream ? C.olive : f === C.tealLight ? C.tealDark : C.panelEdge, minH: H }).s;
      s += `<rect x="${x + W / 2 - 40}" y="${y + 12}" width="80" height="36" rx="18" fill="${f === C.cream ? C.mustard : C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + W / 2, y + 37, d, { size: 17, weight: 700, anchor: 'middle' }) + `<line x1="${x + W / 2}" y1="${y + 48}" x2="${x + W / 2}" y2="${y + 70}" stroke="${C.ink}" stroke-width="2"/>`;
    });
    return { s, h: 70 + H };
  },
],
'A timeline of Strasbourg reform: Protocol 14 in force in 2010 with single-judge decisions and the significant disadvantage criterion; the Interlaken conference in 2010; the Brighton conference in 2012, whose Declaration led to Protocol 15; and Protocol 15 in force in 2021, adding subsidiarity and the margin of appreciation to the preamble and cutting the time limit from six months to four.',
'Strasbourg has reformed itself to give national authorities more room.', H2.sb);

// 06 Plan
F('06-bill-of-rights-plan', 'Plan: should the HRA be replaced by a UK Bill of Rights?', '', [
  (y) => steps(y, [
    { kicker: 'INTRODUCTION', title: 'State the HRA model (s3, s4, s6) and the option', body: 'Signal a line of argument' },
    { kicker: 'FOR REPLACEMENT', title: 's3 overreach (*Ghaidan*); Strasbourg influence (*Ullah*, *Hirst*)', body: 'Evaluate: *Horncastle* shows UK courts can push back without new legislation' },
    { kicker: 'AGAINST', title: 'Still bound by Article 46; IHRAR found the Act working well', body: 'A weaker Bill means more Strasbourg defeats' },
    { kicker: 'CONSTRAINTS', title: 'Devolution and the Belfast Agreement', body: 'Complicate replacement' },
    { kicker: 'ALTERNATIVES', title: 'Targeted amendment, or strengthening rights', body: '' },
    { kicker: 'CONCLUSION', title: 'Reach a judgement', body: 'e.g. targeted amendment answers the criticisms with fewer risks than replacement' },
  ], { size: 15, tsize: 17, gap: 8, pad: 12, highlight: 5 }),
],
'An essay plan: an introduction setting out the HRA model; the case for replacement (Ghaidan, Ullah, Hirst, evaluated with Horncastle); the case against (Article 46 and the Independent Review’s findings); constraints from devolution and the Belfast Agreement; alternative reforms; and a conclusion, for example preferring targeted amendment.',
'A sustained argument weighing options against the criticisms they are meant to fix.', H2.plan);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
