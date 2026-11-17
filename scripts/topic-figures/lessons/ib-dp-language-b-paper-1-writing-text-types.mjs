import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-language-b-paper-1-writing-text-types';
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
    if (lines[lines.length - 1].length && cur + sp + ww > width) { lines.push([]); cur = 0; lines[lines.length - 1].push({ ...k, sp: false }); cur = ww; }
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
// IB Language B theme map: guiding principle, topics around the theme, possible questions as lenses.
function themeMap(theme, principle, topics, questions, o = {}) {
  const half = Math.ceil(topics.length / 2);
  return [
    (y) => note(y, '', o.plabel ? `**${o.plabel}** ${principle}` : `**Guiding principle:** "${principle}"`, { align: 'middle', size: 18 }),
    (y) => { const s = T(450, y + 14, (o.topicLabel || `${topics.length} OPTIONAL RECOMMENDED TOPICS (your teacher chooses)`), { size: 15, weight: 700, anchor: 'middle', fill: C.muted }); const h = hub(y + 30, theme, topics.slice(0, half), topics.slice(half), { cardW: o.cardW ?? 260, r: o.r ?? 96, card: { align: 'middle', vcenter: true, minH: o.minH ?? 64 } }); return { s: s + h.s, h: h.h + 30 }; },
    (y) => { const s = T(450, y + 14, o.qLabel || 'POSSIBLE QUESTIONS: use them as lenses on any text', { size: 15, weight: 700, anchor: 'middle', fill: C.muted }); const r = row(y + 30, questions.map((q) => ({ body: `"${q}"`, fill: C.tealLight, edge: C.tealDark, bfill: C.ink, size: 18, align: questions.length === 1 ? 'middle' : 'start' })), { gap: 18 }); return { s: s + r.s, h: r.h + 30 }; },
  ];
}
// Language B assessment bar: the four 25% components.
const LB_ASSESS = (y, o = {}) => {
  const segs = [
    { label: 'Paper 1', sub: 'writing · 30 marks', frac: 1, fill: o.hi === 0 ? C.mustard : C.cream },
    { label: 'Paper 2 listening', sub: '25 marks', frac: 1, fill: o.hi === 1 ? C.mustard : C.teal },
    { label: 'Paper 2 reading', sub: '40 marks', frac: 1, fill: o.hi === 2 ? C.mustard : C.teal },
    { label: 'Individual oral', sub: 'internal · 30 marks', frac: 1, fill: o.hi === 3 ? C.mustard : C.tealLight },
  ];
  let s = '';
  [0, 1, 2, 3].forEach((i) => { s += T(30 + 210 * i + 105, y + 16, '25%', { size: 18, weight: 700, anchor: 'middle', fill: C.ink }); });
  const b = segbar(y + 28, segs, { size: 18 });
  return { s: s + b.s, h: b.h + 28 };
};
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
  brief: '## What the brief says about Paper 1',
  five: '## Five questions before you write',
  reg: '## Register: the scale you write on',
  fam: '## Three families of text types',
  choose: '## Choosing one task from three',
  we: '## Worked example: decoding and planning a professional task',
};

// 01 Paper 1 at a glance
F('01-paper-1-at-a-glance', 'Paper 1 at a glance', 'Productive skills · externally assessed · 25% · 30 marks', [
  (y) => {
    let s = '';
    ['Task A', 'Task B', 'Task C'].forEach((n, i) => {
      const x = 60 + i * 150, pick = i === 1, yy = y + (pick ? 0 : 14);
      s += `<rect x="${x}" y="${yy}" width="120" height="150" rx="10" fill="${pick ? C.cream : C.panel}" stroke="${pick ? C.olive : C.panelEdge}" stroke-width="${pick ? 3.5 : 2.5}"/>`;
      s += T(x + 60, yy + 34, n, { size: 18, weight: 700, anchor: 'middle', fill: pick ? C.ink : C.muted });
      [56, 78, 100, 122].forEach((ly) => { s += `<line x1="${x + 18}" y1="${yy + ly}" x2="${x + 102}" y2="${yy + ly}" stroke="${pick ? C.olive : C.panelEdge}" stroke-width="4" stroke-linecap="round"/>`; });
    });
    s += badge(270, y + 150, 20, '✓', C.mustard);
    s += T(255, y + 210, 'Choose one writing task from three', { size: 19, weight: 700, anchor: 'middle' });
    s += arrow(500, y + 85, 556, y + 85, { w: 4 });
    const c = card(570, y, 300, { kicker: 'ONE TEXT', title: 'Right type, register and conventions', body: 'Rewards language that fits the context and audience, not only language that is correct.', size: 16, tsize: 19 });
    return { s: s + c.s, h: Math.max(220, c.h) };
  },
  (y) => {
    const sc = (n) => 60 + (n / 600) * 780;
    let s = T(30, y + 16, 'WORD RANGE (set by the full subject guide)', { size: 15, weight: 700, fill: C.muted });
    s += `<line x1="${sc(0)}" y1="${y + 150}" x2="${sc(600)}" y2="${y + 150}" stroke="${C.ink}" stroke-width="2.5"/>`;
    [0, 100, 200, 300, 400, 500, 600].forEach((n) => { s += `<line x1="${sc(n)}" y1="${y + 145}" x2="${sc(n)}" y2="${y + 155}" stroke="${C.ink}" stroke-width="2"/>` + T(sc(n), y + 176, String(n), { size: 15, anchor: 'middle', fill: C.muted }); });
    s += `<rect x="${sc(250)}" y="${y + 36}" width="${sc(400) - sc(250)}" height="40" rx="8" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + T(sc(325), y + 63, 'SL 250–400', { size: 18, weight: 700, anchor: 'middle' });
    s += `<rect x="${sc(450)}" y="${y + 88}" width="${sc(600) - sc(450)}" height="40" rx="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(sc(525), y + 115, 'HL 450–600', { size: 18, weight: 700, anchor: 'middle' });
    s += T(840, y + 200, 'words', { size: 15, anchor: 'end', fill: C.muted });
    return { s, h: 204 };
  },
  (y) => note(y, 'Same outline at SL and HL', 'At HL the tasks "require more complex language and structures and demand higher-order thinking skills", with a higher word range.', { size: 17 }),
],
'Three task cards with the middle one chosen: you write one task from three, worth 25 percent and 30 marks. A word-range scale shows SL at 250 to 400 words and HL at 450 to 600 words. A note says HL tasks require more complex language and higher-order thinking.',
'One task from three, 30 marks; HL writes more, with more complex language.', H2.brief);

// 02 Five questions
F('02-five-questions', 'Five questions before you write', 'Answer each one in your plan', [
  (y) => {
    const L = [
      ['Context', 'Where and why does this text exist?', 'sets the format'],
      ['Audience', 'Who reads it? What is your relationship?', 'sets the register'],
      ['Purpose', 'Inform, persuade, request, complain, advise, reflect?', 'look for a second purpose'],
      ['Meaning', 'What single message should the reader take away?', 'say it in one sentence'],
      ['Variation', 'Which form of the language suits this reader?', 'choose it and stay consistent'],
    ];
    let s = '', cy = y;
    L.forEach(([a, b, c], i) => {
      s += panel(30, cy, 840, 78) + badge(72, cy + 39, 22, String(i + 1), C.cream);
      s += T(112, cy + 34, a, { size: 20, weight: 700 }) + T(112, cy + 60, b, { size: 17, fill: C.muted });
      const ch = chip(855, cy + 22, c, { anchor: 'end', size: 16, weight: 600, fill: i < 2 ? C.mustard : C.tealLight, edge: i < 2 ? C.olive : C.tealDark });
      s += ch.s;
      cy += 90;
    });
    return { s, h: cy - 12 - y };
  },
],
'Five numbered rows turn the conceptual understandings into planning questions: context (where and why the text exists) sets the format; audience sets the register; purpose may have a second purpose; meaning should fit in one sentence; variation means choosing a suitable form of the language and staying consistent.',
'Context sets the format, audience sets the register; answer all five before writing.', H2.five);

// 03 Register scale with the quiz-night example
F('03-register-scale', 'Register is a scale, not a switch', 'One message: the quiz night has moved from Friday to Monday', [
  (y) => {
    let s = `<line x1="150" y1="${y + 30}" x2="750" y2="${y + 30}" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>`;
    [[150, 'Informal', C.panel], [450, 'Neutral', C.tealLight], [750, 'Formal', C.teal]].forEach(([x, l, f]) => { s += `<circle cx="${x}" cy="${y + 30}" r="16" fill="${f}" stroke="${C.ink}" stroke-width="3"/>` + T(x, y + 74, l, { size: 20, weight: 700, anchor: 'middle' }); });
    return { s, h: 84 };
  },
  (y) => row(y, [
    { kicker: 'MESSAGE TO A FRIEND', title: '', body: '"**Hey!** Bad news, the quiz night\'s **moved** to Monday. **Still up for it?** **Let me know!**"' },
    { kicker: 'SCHOOL NEWSLETTER', title: '', body: '"**Please note** that this term\'s quiz night **will now take place** on Monday rather than Friday. Tickets already bought remain valid."', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'LETTER TO A GUEST SPEAKER', title: '', body: '"**I am writing to inform you** that the quiz night **has been rescheduled** to Monday. I apologise for any inconvenience and **would be grateful if you could confirm** whether you are still able to attend."', fill: C.teal, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 16, bfill: C.ink, pad: 16, kfill: C.ink } }),
  (y) => table(y, [{ w: 0.9, head: 'What changes' }, { w: 1, head: 'Informal' }, { w: 1, head: 'Neutral' }, { w: 1.2, head: 'Formal' }], [
    ['Opening', '"Hey!"', '"Please note"', '"I am writing to inform you"'],
    ['Vocabulary', '"moved"', '"will now take place"', '"has been rescheduled"'],
    ['Structure', 'Fragments', 'Full sentences', 'Full sentences and a passive'],
    ['Request', '"Let me know!"', '—', '"would be grateful if you could confirm"'],
  ], { size: 16, hsize: 17 }),
  (y) => P('Once you choose a form of address (*tu/vous*, *du/Sie*, *tú/usted*), keep it for the whole text.', { anchor: 'middle', size: 17, fill: C.ink })(y),
],
'A scale runs from informal through neutral to formal. The same message about a quiz night moved to Monday is shown as a message to a friend, a school newsletter notice and a letter to a guest speaker, with the opening, vocabulary, structure and request highlighted. A table summarises how each changes.',
'The message stays the same; opening, vocabulary, structure and request move up the scale.', H2.reg);

// 04 Three families
F('04-three-families', 'Three families of text types', 'Sorted by audience', [
  (y) => row(y, [
    { kicker: 'PERSONAL', title: 'For yourself or someone you know', body: ['Diary or journal entry', 'Personal email or letter', 'Blog post (personal)'], bullets: true },
    { kicker: 'PROFESSIONAL', title: 'To an organisation or in a working role', body: ['Formal letter', 'Formal email', 'Report', 'Proposal'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'MASS MEDIA', title: 'For a wide public audience', body: ['Article (news or feature)', 'Opinion piece or editorial', 'Speech', 'Leaflet or brochure', 'Review'], bullets: true, fill: C.cream, edge: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 17, tsize: 19, gap: 6 } }),
  (y) => note(y, 'Conventions decide whether a text looks like the type it claims to be', 'Layout and opening · register · typical moves · closing. Learn the list your teacher shares from the full guide.', { size: 17 }),
],
'Three columns of text types sorted by audience: personal (diary, personal email or letter, personal blog post), professional (formal letter, formal email, report, proposal) and mass media (article, opinion piece, speech, leaflet, review). A note lists the conventions to check: layout and opening, register, typical moves and closing.',
'Sort text types by audience: personal, professional, mass media.', H2.fam);

// 05 Choosing one task
F('05-choosing-a-task', 'Choosing one task from three', '', [
  (y) => steps(y, [
    { title: 'Read all three to the end', body: 'The text type and audience are often in the last line.' },
    { title: 'Underline five things in each', body: 'Your role · the reader · the purpose · the text type · the content points' },
    { title: 'Ask two questions', body: 'Do I control this text type\'s conventions? Do I have the topic vocabulary in my target language?' },
    { title: 'Choose the task where both answers are yes', body: '' },
    { title: 'Commit', body: 'Changing task halfway wastes time.' },
  ], { highlight: [3], size: 17, tsize: 19, gap: 10, pad: 15 }),
],
'Five numbered steps: read all three tasks to the end; underline role, reader, purpose, text type and content points; ask whether you control the conventions and have the vocabulary; choose the task where both answers are yes; and commit.',
'Choose the task whose conventions and vocabulary you control, then commit.', H2.choose);

// 06 Letter plan
F('06-letter-plan', 'Planning a formal letter to the library manager', 'Offer to volunteer for a weekend reading club', [
  (y) => row(y, [
    { kicker: 'ROLE', title: 'A student volunteering' },
    { kicker: 'READER', title: 'The library manager: formal' },
    { kicker: 'PURPOSE', title: 'Offer help, persuade, request information' },
  ], { gap: 14, card: { size: 16, tsize: 18, pad: 16 } }),
  (y) => {
    const px = 60, pw = 330, ph = 470;
    let s = `<rect x="${px}" y="${y}" width="${pw}" height="${ph}" rx="6" fill="${C.panel}" stroke="${C.ink}" stroke-width="3"/>`;
    const blocks = [[30, 'Dear Ms Varga,', 1], [70, '', 3], [160, '', 4], [255, '', 2], [315, '', 3], [400, 'Yours sincerely,', 1]];
    const labels = [
      ['Salutation and purpose', 'Why you are writing; where you saw the notice'],
      ['What you bring', 'Two strengths, each with an example'],
      ['An idea for the club', 'Shows initiative'],
      ['Practical questions', 'Hours, training, whether a reference is needed'],
      ['Closing', 'Availability, thanks, formal formula, name'],
    ];
    const groupsY = [[y + 30, y + 130], [y + 160, y + 235], [y + 255, y + 295], [y + 315, y + 380], [y + 400, y + 445]];
    s += T(px + 24, y + 44, 'Dear Ms Varga,', { size: 16, weight: 600 });
    const lines = (y0, n) => Array.from({ length: n }, (_, i) => `<line x1="${px + 24}" y1="${y0 + i * 20}" x2="${px + pw - 24 - (i === n - 1 ? 80 : 0)}" y2="${y0 + i * 20}" stroke="${C.panelEdge}" stroke-width="6" stroke-linecap="round"/>`).join('');
    s += lines(y + 72, 3) + lines(y + 162, 4) + lines(y + 257, 2) + lines(y + 317, 3);
    s += T(px + 24, y + 412, 'Yours sincerely,', { size: 16, weight: 600 }) + T(px + 24, y + 436, 'Daniel Okafor', { size: 16, italic: true });
    labels.forEach(([a, b], i) => {
      const [g0, g1] = groupsY[i], mid = (g0 + g1) / 2;
      const yy = y + i * 94;
      s += `<path d="M${px + pw + 8},${g0 + 4} q8,0 8,8 L${px + pw + 16},${g1 - 8} q0,8 -8,8" fill="none" stroke="${C.olive}" stroke-width="2.5"/>`;
      const c = card(470, yy, 400, { title: `${i + 1}. ${a}`, body: b, size: 16, tsize: 18, pad: 14, minH: 82, vcenter: true, fill: i === 0 || i === 4 ? C.cream : C.panel, edge: i === 0 || i === 4 ? C.olive : C.panelEdge });
      s += path(`M${px + pw + 16},${mid} C${430},${mid} ${430},${yy + 41} ${466},${yy + 41}`, { w: 2.5, stroke: C.ink });
      s += c.s;
    });
    return { s, h: Math.max(ph, 4 * 94 + 82) };
  },
],
'Role, reader and purpose cards sit above a letter outline. Five paragraphs are labelled: salutation and purpose; what you bring, with two examples; an idea for the reading club; practical questions about hours, training and references; and a closing with availability, thanks and a formal formula.',
'Purpose first, specific strengths, a sign of initiative, practical questions, a formal close.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
