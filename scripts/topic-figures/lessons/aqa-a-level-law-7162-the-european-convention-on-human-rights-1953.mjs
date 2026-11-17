import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-the-european-convention-on-human-rights-1953';
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
  treaty: '## The Convention as a treaty',
  a1: '## Article 1: whom does the Convention protect?',
  rights: '## The rights in Section I',
  cls: '## Classification of rights',
  gen: '## General provisions that affect every right',
  prot: '## The protocols',
  court: '## The Court',
};

// 01 Treaty timeline and structure
F('01-treaty-structure', 'The Convention: a Council of Europe treaty', 'Convention for the Protection of Human Rights and Fundamental Freedoms', [
  (y) => {
    const H = 150; let s = panel(30, y, 840, H);
    const ly = y + 70;
    s += `<line x1="80" y1="${ly}" x2="820" y2="${ly}" stroke="${C.ink}" stroke-width="3"/>`;
    const ev = (x, d, lab, sub, fill) => `<circle cx="${x}" cy="${ly}" r="12" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + T(x, ly - 24, d, { size: 19, weight: 700, anchor: 'middle' }) + T(x, ly + 38, lab, { size: 16, weight: 600, anchor: 'middle' }) + T(x, ly + 60, sub, { size: 15, anchor: 'middle', fill: C.muted });
    s += ev(170, '1948', 'Universal Declaration', 'referred to in the preamble', C.panel) + ev(450, '4 November 1950', 'Signed in Rome', 'Council of Europe', C.cream) + ev(730, '3 September 1953', 'In force', '', C.mustard);
    return { s, h: H };
  },
  (y) => {
    const lab = T(450, y + 16, 'HOW IT IS ORGANISED', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    const fr = [1, 1.2, 1.2, 1], tot = 4.4, ws = fr.map((f) => (840 * f) / tot), xs = ws.map((_, i) => 30 + ws.slice(0, i).reduce((p, q) => p + q, 0));
    const segs = [
      { label: 'Article 1', frac: fr[0], fill: C.mustard },
      { label: 'Section I', sub: 'Articles 2–18', frac: fr[1], fill: C.teal },
      { label: 'Section II', sub: 'Articles 19–51', frac: fr[2], fill: C.tealLight },
      { label: 'Section III', sub: 'Articles 52–59', frac: fr[3], fill: C.cream },
    ];
    const b = segbar(y + 30, segs, { h: 80, size: 18 });
    const labs = ['The obligation to respect human rights', 'Rights and freedoms, plus general provisions', 'The European Court of Human Rights', 'Miscellaneous: reservations and denunciation'];
    const hs = labs.map((l, i) => card(xs[i] + 5, 0, ws[i] - 10, { body: l, size: 16, pad: 12, align: 'middle' }).h), hh = Math.max(...hs);
    const r = { s: labs.map((l, i) => card(xs[i] + 5, y + 126, ws[i] - 10, { body: l, size: 16, pad: 12, align: 'middle', bfill: C.ink, minH: hh, vcenter: true }).s + `<line x1="${xs[i] + ws[i] / 2}" y1="${y + 110}" x2="${xs[i] + ws[i] / 2}" y2="${y + 126}" stroke="${C.ink}" stroke-width="2"/>`).join(''), h: hh };
    return { s: lab + b.s + r.s, h: 30 + 80 + 16 + r.h };
  },
],
'A timeline: the Universal Declaration 1948, referred to in the preamble; the Convention signed in Rome on 4 November 1950; in force on 3 September 1953. A bar shows its structure: Article 1 (obligation to respect rights), Section I Articles 2 to 18 (rights and general provisions), Section II Articles 19 to 51 (the Court) and Section III Articles 52 to 59 (miscellaneous).',
'Rights sit in Section I; the Court takes up most of the text in Section II.', H2.treaty);

// 02 Article 1 jurisdiction
F('02-article-1-jurisdiction', 'Article 1: “everyone within their jurisdiction”', '', [
  (y) => {
    const H = 330; let s = panel(30, y, 840, H);
    const cx = 260, cy = y + 175;
    s += `<ellipse cx="${cx}" cy="${cy}" rx="200" ry="140" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5" stroke-dasharray="9 7"/>`;
    s += `<ellipse cx="${cx}" cy="${cy + 20}" rx="120" ry="80" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>`;
    s += T(cx, cy + 10, 'State territory', { size: 19, weight: 700, anchor: 'middle' }) + T(cx, cy + 34, 'primarily territorial', { size: 15, anchor: 'middle' });
    s += T(cx, y + 84, 'Authority and control abroad', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += T(cx, y + 104, 'over people or territory', { size: 15, anchor: 'middle', fill: C.tealDark });
    s += T(500, y + 50, 'EVERYONE, NOT ONLY CITIZENS', { size: 15, weight: 700, fill: C.tealDark });
    s += chips(y + 66, ['Citizens', 'Foreign nationals', 'Prisoners', 'Asylum seekers'], { x: 500, w: 350, align: 'start', size: 16, weight: 600, fill: C.cream }).s;
    const c = card(500, y + 180, 350, { kicker: 'AL-SKEINI v UK (2011)', body: 'Grand Chamber: UK had jurisdiction over Iraqi civilians killed by British soldiers in Basra, where it exercised public powers; breach of the Article 2 duty to investigate.', size: 16, pad: 16, bfill: C.ink, fill: C.panel, edge: C.tealDark });
    s += c.s + arrow(500, y + 190, 445, y + 150, { color: C.tealDark, marker: 'ahT', w: 3 });
    return { s, h: H };
  },
],
'States must secure the rights to everyone within their jurisdiction: citizens, foreign nationals, prisoners and asylum seekers. Jurisdiction is primarily territorial but can reach abroad where a state exercises authority and control, as in Al-Skeini v UK, where the UK had jurisdiction over civilians killed by British soldiers in Basra.',
'Jurisdiction is mainly territorial, but follows authority and control abroad.', H2.a1);

// 03 Section I rights
F('03-section-one-rights', 'The rights in Section I', 'The five specification Articles highlighted', [
  (y) => {
    const R = [['2', 'Right to life'], ['3', 'Prohibition of torture'], ['4', 'Slavery and forced labour'], ['5', 'Liberty and security'], ['6', 'Fair trial'], ['7', 'No punishment without law'], ['8', 'Private and family life'], ['9', 'Thought, conscience and religion'], ['10', 'Freedom of expression'], ['11', 'Assembly and association'], ['12', 'Right to marry'], ['13', 'Effective remedy'], ['14', 'Prohibition of discrimination']];
    const spec = ['2', '5', '8', '10', '11'];
    const cols = 3, w = 270, gap = 15, h = 64; let s = '';
    R.forEach(([n, lab], i) => {
      const c = i % cols, r = Math.floor(i / cols), x = 30 + c * (w + gap), yy = y + r * (h + 12);
      const on = spec.includes(n);
      s += `<rect x="${x}" y="${yy}" width="${w}" height="${h}" rx="12" fill="${on ? C.cream : C.panel}" stroke="${on ? C.olive : C.panelEdge}" stroke-width="${on ? 3 : 2}"/>`;
      s += badge(x + 32, yy + h / 2, 20, n, on ? C.mustard : C.tealLight);
      const ph = para(0, 0, lab, w - 72, { size: 16, weight: on ? 700 : 400, lh: 19 }).h;
      s += para(x + 62, yy + h / 2 - ph / 2 + 14, lab, w - 72, { size: 16, weight: on ? 700 : 400, fill: C.ink, lh: 19 }).s;
    });
    const rows = Math.ceil(R.length / cols);
    return { s, h: rows * (h + 12) - 12 };
  },
],
'A grid of Articles 2 to 14: life, torture, slavery, liberty, fair trial, no punishment without law, private life, religion, expression, assembly, marriage, effective remedy and discrimination. Articles 2, 5, 8, 10 and 11, the specification focus, are highlighted.',
'The specification’s five Articles sit among thirteen in Section I.', H2.rights);

// 04 Classification
F('04-classification', 'Absolute, limited and qualified rights', 'Labels the structure of each Article supports', [
  (y) => stack(y, [
    { kicker: 'ABSOLUTE: NO EXCEPTIONS, NO BALANCING', title: 'Article 3   ·   Article 4.1 (slavery)   ·   Article 7', fill: C.panel, edge: C.ink },
    { kicker: 'LIMITED: THE ARTICLE LISTS THE ONLY EXCEPTIONS', title: 'Article 2 (2.2)   ·   Article 5 (5.1(a) to (f))', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'QUALIFIED: RIGHT IN PARAGRAPH 1, RESTRICTIONS IN PARAGRAPH 2', title: 'Articles 8, 9, 10 and 11', body: 'Restrictions prescribed by law, for a listed aim, necessary in a democratic society', fill: C.cream, edge: C.olive },
  ], { gap: 14, card: { tsize: 20, size: 16, pad: 20, bfill: C.ink } }),
],
'Three bands. Absolute rights, with no exceptions or balancing: Article 3, Article 4.1 and Article 7. Limited rights, where the Article lists the only exceptions: Article 2 (2.2) and Article 5 (5.1(a) to (f)). Qualified rights, with restrictions in a second paragraph: Articles 8, 9, 10 and 11.',
'The structure of each Article tells you how far it can be restricted.', H2.cls);

// 05 General provisions
F('05-general-provisions', 'General provisions that affect every right', '', [
  (y) => grid(y, [
    { kicker: 'ARTICLE 13', body: 'An effective remedy before a national authority' },
    { kicker: 'ARTICLE 14', body: 'No discrimination in enjoying Convention rights; **not free-standing**' },
    { kicker: 'ARTICLE 16', body: 'Restrictions on the political activity of aliens allowed' },
    { kicker: 'ARTICLE 17', body: 'No right to activity aimed at destroying the rights of others' },
    { kicker: 'ARTICLE 18', body: 'Restrictions only for the purposes for which they are prescribed' },
  ], 3, { gap: 14, vgap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
  (y) => {
    const head = card(30, y, 840, { kicker: 'ARTICLE 15: DEROGATION', title: 'In war or public emergency threatening the life of the nation, to the extent strictly required', tsize: 18, pad: 18, nobox: true });
    const r = row(y + head.h + 30, [
      { title: 'Article 2', body: 'except deaths from lawful acts of war' }, { title: 'Article 3' }, { title: 'Article 4.1' }, { title: 'Article 7' },
    ], { x: 50, w: 800, gap: 12, fr: [1.6, 1, 1, 1], card: { tsize: 18, size: 15, pad: 12, align: 'middle', fill: C.panel, edge: C.rust, bfill: C.ink } });
    const lab = T(50, y + head.h + 18, 'NO DEROGATION FROM', { size: 15, weight: 700, fill: C.rust });
    const yy = y + head.h + 30 + r.h + 14;
    const ex = para(50, yy + 16, 'Used by the UK after *Brogan v UK* (1988) and after 11 September 2001; that derogation was quashed in *A v Home Secretary* (2004).', 800, { size: 16, fill: C.ink });
    const H = yy + 16 + ex.h - y + 6;
    return { s: `<rect x="30" y="${y}" width="840" height="${H}" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + head.s + lab + r.s + ex.s, h: H };
  },
],
'Cards for the general Articles: 13 effective remedy, 14 discrimination (not free-standing), 16 political activity of aliens, 17 abuse of rights, 18 improper purposes. Article 15 allows derogation in war or a public emergency, but never from Article 2 (except lawful acts of war), Article 3, Article 4.1 or Article 7; the UK used it after Brogan and after 11 September 2001, quashed in A v Home Secretary.',
'Article 15 allows derogation, but never from the core four.', H2.gen);

// 06 Protocols
F('06-protocols-uk', 'The protocols and the UK', 'A state is bound only by the protocols it has ratified', [
  (y) => {
    const r = row(y, [
      { kicker: 'RATIFIED BY THE UK', body: ['**Protocol 1:** property, education, free elections (Articles 1 to 3 in the HRA 1998)', '**Protocol 6:** no death penalty in peacetime', '**Protocol 13:** no death penalty in all circumstances (Article 1 in the HRA 1998)'], bullets: true, fill: C.tealLight, edge: C.tealDark },
      { kicker: 'NOT RATIFIED', kfill: C.rust, body: ['**Protocol 4:** freedom of movement and other rights', '**Protocol 12:** free-standing prohibition of discrimination'], bullets: true },
    ], { gap: 16, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink, gap: 6 } });
    return r;
  },
  (y) => card(30, y, 840, { kicker: 'PROCEDURAL: CHANGE THE COURT', body: ['**Protocol 11 (1998):** single full-time Court; Commission abolished', '**Protocol 14:** single-judge filtering; “significant disadvantage” admissibility criterion; infringement proceedings', '**Protocol 15 (in force 2021):** subsidiarity and the margin of appreciation added to the preamble; time limit cut from six months to four'], bullets: true, gap: 6, size: 16, pad: 18, bfill: C.ink, fill: C.cream, edge: C.olive }),
],
'Protocols grouped by status. Ratified by the UK: Protocol 1 (property, education, elections), Protocol 6 and Protocol 13 (death penalty). Not ratified: Protocol 4 (freedom of movement) and Protocol 12 (free-standing discrimination). Procedural: Protocol 11 (single full-time Court), Protocol 14 (filtering and admissibility) and Protocol 15 (margin of appreciation in the preamble, four-month time limit).',
'Some protocols add rights the UK has not accepted; others reshape the Court.', H2.prot);

// 07 The Court
F('07-the-court', 'The European Court of Human Rights', 'One judge per state; single nine-year term; sitting as individuals', [
  (y) => {
    const H = 296; let s = panel(30, y, 840, H);
    const lv = [['Grand Chamber of 17', 'most important cases, incl. referral', C.mustard, 300], ['Chambers of 7', 'decide most other cases', C.cream, 440], ['Committees of 3', 'well-established case law', C.tealLight, 580], ['Single judges', 'filter clearly inadmissible cases', C.panel, 720]];
    lv.forEach(([a, b, f, w], i) => {
      const yy = y + 24 + i * 66, x = 450 - w / 2;
      s += `<rect x="${x}" y="${yy}" width="${w}" height="56" rx="10" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
      s += T(450, yy + 25, a, { size: 18, weight: 700, anchor: 'middle' }) + T(450, yy + 46, b, { size: 15, anchor: 'middle' });
    });
    return { s, h: H };
  },
  (y) => {
    const r = row(y, [
      { kicker: 'APPLICATIONS', body: ['States (Article 33)', 'Individuals, groups and NGOs claiming to be victims (Article 34)'], bullets: true },
      { kicker: 'JUDGMENTS', body: ['Just satisfaction (Article 41)', 'States abide by final judgments (Article 46)', 'Committee of Ministers supervises execution'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    ], { gap: 46, arrows: true, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink, gap: 4 } });
    return r;
  },
  (y) => note(y, '', '**Common mistake:** calling the judges representatives of their governments.', { size: 17, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'A stepped pyramid of the Court’s formations: single judges filter inadmissible cases, committees of three decide well-established case law, chambers of seven decide most others, and a Grand Chamber of 17 hears the most important cases. Applications come from states (Article 33) or victims (Article 34); judgments may award just satisfaction (Article 41), bind states (Article 46) and are supervised by the Committee of Ministers.',
'Four formations, from single-judge filtering to the Grand Chamber of 17.', H2.court);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
