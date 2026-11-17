import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-law-making-the-european-union';
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
  inst: '## The institutions and their functions',
  src: '## The sources of EU law',
  imp: '## The impact of EU law on the law of England and Wales',
};

// 01 Institutions: who does what
F('01-eu-institutions', 'Four EU institutions and how a law is made', '', [
  (y) => card(220, y, 460, { kicker: 'COMMISSION', title: 'Proposes legislation', body: 'One commissioner per state, independent of governments. Also implements policy and is “guardian of the treaties”.', align: 'middle', fill: C.cream, edge: C.olive, kfill: C.olive, size: 16, tsize: 19, pad: 16, bfill: C.ink }),
  (y) => ({ s: arrow(380, y - 18, 250, y + 4) + arrow(520, y - 18, 650, y + 4) + T(450, y - 2, 'proposal', { size: 15, weight: 700, anchor: 'middle', fill: C.olive }), h: 0 }),
  (y) => {
    const r = row(y, [
      { kicker: 'PARLIAMENT', title: 'Co-legislator', body: 'MEPs directly elected every five years. Can amend or reject; approves budget; supervises and can dismiss the Commission.' },
      { kicker: 'COUNCIL', title: 'Co-legislator', body: 'One minister per state, by subject. Qualified majority voting; unanimity for sensitive areas such as tax. Presidency rotates every six months.' },
    ], { gap: 120, vcenter: false, card: { size: 16, tsize: 19, pad: 16, bfill: C.ink, fill: C.tealLight, edge: C.tealDark } });
    const mid = y + r.h / 2;
    return { s: r.s + `<line x1="${r.xs[0] + r.ws[0] + 8}" y1="${mid}" x2="${r.xs[1] - 8}" y2="${mid}" stroke="${C.tealDark}" stroke-width="4" marker-end="url(#ahT)" marker-start="url(#ahT)"/>` + T(450, mid - 14, 'ordinary', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(450, mid + 28, 'legislative', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(450, mid + 46, 'procedure', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }), h: r.h };
  },
  (y) => ({ s: arrow(450, y - 18, 450, y + 2), h: 0 }),
  (y) => card(30, y, 840, { kicker: 'COURT OF JUSTICE OF THE EU', title: 'Interprets and enforces the law', body: 'One judge per state, assisted by Advocates General; includes the General Court. Preliminary rulings, enforcement actions, review of the institutions’ acts.', align: 'middle', size: 16, tsize: 19, pad: 16, bfill: C.ink }),
  (y) => note(y, '', 'Not to be confused: the **European Council** (heads of state or government) sets direction but passes no legislation.', { size: 16, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'The Commission proposes legislation; the Parliament, directly elected, and the Council, of national ministers, adopt it together under the ordinary legislative procedure; the Court of Justice, with one judge per state and Advocates General, interprets and enforces the law. The European Council of heads of government sets direction but does not legislate.',
'The Commission proposes, Parliament and Council decide, the Court interprets.', H2.inst, { gap: 22 });

// 02 Preliminary ruling
F('02-preliminary-ruling', 'A preliminary ruling under Article 267 TFEU', '', [
  (y) => row(y, [
    { kicker: 'NATIONAL COURT', title: 'Meets a question on the meaning of EU law' },
    { kicker: 'REFERENCE', title: 'Refers the question to the CJEU', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'CJEU', title: 'Interprets the EU law', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'NATIONAL COURT', title: 'Applies the ruling to the facts' },
  ], { arrows: true, gap: 34, card: { tsize: 17, pad: 14 } }),
  (y) => row(y, [
    { kicker: 'CILFIT (1982)', body: 'A national court of **final appeal** must normally refer, unless the answer is already clear or settled.' },
    { kicker: 'BULMER v BOLLINGER (1974)', body: 'Lord Denning set out guidelines for when English courts should refer.' },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink } }),
],
'A national court facing a question on EU law refers it to the Court of Justice, which interprets the law; the national court then applies the ruling to the facts. Under CILFIT a court of final appeal must normally refer unless the answer is clear or settled; Bulmer v Bollinger gave Lord Denning’s guidelines for English courts.',
'The CJEU decides what EU law means; the national court decides the case.', H2.inst, { gap: 24 });

// 03 Direct effect, vertical and horizontal
{
  const person = (x, y, lbl, fill) => `<circle cx="${x}" cy="${y}" r="13" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M${x},${y + 13} L${x},${y + 44} M${x - 16},${y + 24} L${x + 16},${y + 24} M${x},${y + 44} L${x - 13},${y + 66} M${x},${y + 44} L${x + 13},${y + 66}`, { w: 2.5 }) + T(x, y + 92, lbl, { size: 16, weight: 600, anchor: 'middle' });
  const scene = (x, y, title, vOk, hOk, vCase, hCase) => {
    let s = panel(x, y, 410, 410) + T(x + 205, y + 38, title, { size: 21, weight: 700, anchor: 'middle' });
    s += `<rect x="${x + 135}" y="${y + 62}" width="140" height="54" rx="8" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + 205, y + 95, 'THE STATE', { size: 17, weight: 700, anchor: 'middle' });
    s += person(x + 90, y + 200, 'individual', C.tealLight) + person(x + 320, y + 200, 'private party', C.panel);
    const vc = vOk ? C.tealDark : C.rust, hc = hOk ? C.tealDark : C.rust;
    s += arrow(x + 105, y + 190, x + 160, y + 124, { color: vc, marker: vOk ? 'ahT' : 'ahR', w: 4, dash: vOk ? '' : '9 7' });
    s += T(x + 102, y + 150, 'vertical', { size: 16, weight: 700, fill: vc, anchor: 'end' }) + T(x + 112, y + 150, vOk ? '✓' : '✗', { size: 20, weight: 700, fill: vc });
    s += arrow(x + 122, y + 228, x + 288, y + 228, { color: hc, marker: hOk ? 'ahT' : 'ahR', w: 4, dash: hOk ? '' : '9 7' });
    s += T(x + 205, y + 216, 'horizontal ' + (hOk ? '✓' : '✗'), { size: 16, weight: 700, fill: hc, anchor: 'middle' });
    s += para(x + 22, y + 330, vCase, 366, { size: 15, fill: C.ink }).s + para(x + 22, y + 372, hCase, 366, { size: 15, fill: C.ink }).s;
    return s;
  };
  F('03-direct-effect', 'Direct effect: who can be sued?', 'Clear, precise and unconditional provisions give rights enforceable in national courts', [
    (y) => ({ s: scene(30, y, 'Treaty articles', true, true, '*Defrenne v Sabena (No 2)* (1976): equal pay article relied on against a private employer', '*Macarthys v Smith* (1980): relied on in the English courts') + scene(460, y, 'Directives', true, false, '*Marshall* (1986): against the state or an emanation of the state (*Foster v British Gas*)', '*Faccini Dori* (1994): not against a private individual or company'), h: 410 }),
  ],
  'Two scenes. Treaty articles have vertical direct effect against the state and horizontal direct effect against private parties, as in Defrenne v Sabena and Macarthys v Smith. Directives have vertical direct effect against the state or its emanations (Marshall; Foster v British Gas) but no horizontal direct effect (Faccini Dori).',
  'Treaty articles work against anyone; directives only against the state.', H2.src);
}

// 04 Regulation vs directive
{
  const states = (x, y, fill, lbl) => [0, 1, 2].map((i) => `<rect x="${x + i * 118}" y="${y}" width="104" height="60" rx="8" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + i * 118 + 52, y + 36, lbl[i], { size: 15, weight: 700, anchor: 'middle' })).join('');
  F('04-regulation-directive', 'Regulations and directives reach national law differently', '', [
    (y) => {
      let s = panel(30, y, 410, 330) + panel(460, y, 410, 330);
      s += T(235, y + 38, 'Regulation', { size: 22, weight: 700, anchor: 'middle' }) + T(665, y + 38, 'Directive', { size: 22, weight: 700, anchor: 'middle' });
      s += `<rect x="135" y="${y + 58}" width="200" height="50" rx="8" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` + T(235, y + 89, 'EU regulation', { size: 17, weight: 700, anchor: 'middle' });
      s += [0, 1, 2].map((i) => arrow(235, y + 146, 106 + i * 118, y + 196, { w: 3, color: C.tealDark, marker: 'ahT' })).join('');
      s += T(235, y + 134, 'automatically', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
      s += states(54, y + 200, C.tealLight, ['state law', 'state law', 'state law']);
      s += para(54, y + 292, 'Binding **entirely**; directly applicable. Same rule everywhere at once.', 360, { size: 16, fill: C.ink }).s;
      s += `<rect x="565" y="${y + 58}" width="200" height="50" rx="8" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + T(665, y + 89, 'EU directive', { size: 17, weight: 700, anchor: 'middle' });
      s += [0, 1, 2].map((i) => arrow(665, y + 146, 536 + i * 118, y + 196, { w: 3, color: C.olive, marker: 'ahO', dash: '8 6' })).join('');
      s += T(665, y + 134, 'each state implements', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
      s += states(484, y + 200, C.cream, ['own method', 'own method', 'own method']);
      s += para(484, y + 292, 'Binding **as to result**; form and method left to each state, by a deadline.', 370, { size: 16, fill: C.ink }).s;
      return { s, h: 330 };
    },
    (y) => row(y, [
      { kicker: 'EXAMPLE', body: '*Leonesio* (1972): a farmer got a payment under a regulation although Italy had passed no law to fund it. Also the tachograph regulation.' },
      { kicker: 'EXAMPLE', body: 'Working Time Directive implemented in the UK by the Working Time Regulations 1998 (a statutory instrument).' },
    ], { gap: 20, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink } }),
  ],
  'A regulation passes automatically into the law of every member state: binding entirely and directly applicable, as Leonesio shows. A directive is binding as to the result, and each state implements it in its own way by a deadline, as the UK did for the Working Time Directive with the Working Time Regulations 1998.',
  'Regulations need no national law; directives must be implemented.', H2.src);
}

// 05 Directive not implemented
F('05-directive-not-implemented', 'A directive has not been implemented: what now?', '', [
  (y) => card(220, y, 460, { title: 'State failed to implement a directive properly', align: 'middle', fill: C.cream, edge: C.olive, tsize: 19, pad: 16 }),
  (y) => ({ s: arrow(330, y - 18, 160, y + 2) + arrow(450, y - 18, 450, y + 2) + arrow(570, y - 18, 740, y + 2), h: 0 }),
  (y) => row(y, [
    { kicker: 'AGAINST THE STATE', title: 'Vertical direct effect', body: 'Clear, unconditional directive relied on against the state or an emanation of it. *Marshall* (1986); test in *Foster v British Gas* (1990)', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'AGAINST A PRIVATE PARTY', title: 'No horizontal direct effect', body: '*Faccini Dori* (1994). But **indirect effect**: read national law in the light of the directive. *Von Colson* (1984); *Marleasing* (1990)', kfill: C.rust },
    { kicker: 'LOSS CAUSED', title: 'State liability', body: 'Damages from the state for failure to implement. *Francovich v Italy* (1991)', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } }),
],
'When a state fails to implement a directive: an individual may rely on it against the state or an emanation of the state (Marshall; Foster v British Gas); against a private party there is no horizontal direct effect (Faccini Dori), but national law must be read in its light (Von Colson; Marleasing); and loss may be claimed from the state (Francovich).',
'Vertical direct effect, indirect effect and state liability fill the gap a missing directive leaves.', H2.src, { gap: 24 });

// 06 Timeline of impact
F('06-eu-impact-timeline', 'EU law in England and Wales over time', '', [
  (y) => {
    const ev = [
      ['1972', 'European Communities Act', 's2(1) gives EU law effect; s2(4) national law read subject to it', C.tealLight],
      ['1990', '*Factortame*', 'Lords disapply parts of the Merchant Shipping Act 1988: EU law supreme', C.tealLight],
      ['2018', 'European Union (Withdrawal) Act', 'Repeals the 1972 Act from exit day', C.cream],
      ['31 Jan 2020', 'Exit day', 'Implementation period runs to 31 December 2020', C.cream],
      ['End 2020', 'Retained EU law', 'EU-derived law kept, e.g. Working Time Regulations 1998', C.cream],
      ['1 Jan 2024', 'Assimilated law', 'Retained EU Law (Revocation and Reform) Act 2023 ends supremacy and general principles', C.mustard],
    ];
    let s = '', cy = y; const mids = [];
    ev.forEach(([d, title, body, f]) => {
      const c = card(186, cy, 684, { title, body, size: 16, tsize: 18, pad: 13, bfill: C.ink });
      const m = cy + c.h / 2; mids.push(m);
      s += c.s + `<rect x="30" y="${m - 20}" width="136" height="40" rx="20" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(98, m + 6, d, { size: 17, weight: 700, anchor: 'middle' });
      cy += c.h + 9;
    });
    return { s: `<line x1="98" y1="${mids[0]}" x2="98" y2="${mids[mids.length - 1]}" stroke="${C.panelEdge}" stroke-width="4"/>` + s, h: cy - y - 9 };
  },
  (y) => row(y, [
    { kicker: 'DURING MEMBERSHIP', body: 'Purposive interpretation; equal pay, working time, consumer, data and environmental law; references to the CJEU' },
    { kicker: 'AFTER WITHDRAWAL', body: 'Court of Appeal and Supreme Court may depart from retained EU case law; new CJEU decisions do not bind', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'A timeline: the European Communities Act 1972 gave EU law effect; Factortame (1990) disapplied an Act; the Withdrawal Act 2018 repealed the 1972 Act from exit day, 31 January 2020; EU-derived law was retained at the end of 2020; and from 1 January 2024 it became assimilated law under the 2023 Act, ending supremacy. During membership EU law shaped interpretation and substantive rights; after withdrawal the senior courts may depart from retained case law.',
'EU law was supreme during membership; what remains is now ordinary assimilated law.', H2.imp, { gap: 20 });

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
