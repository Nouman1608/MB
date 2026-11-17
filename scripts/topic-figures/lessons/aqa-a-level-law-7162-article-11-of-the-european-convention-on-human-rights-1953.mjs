import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-article-11-of-the-european-convention-on-human-rights-1953';
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
  two: '## Two rights in one Article',
  pa: '## Peaceful assembly',
  fa: '## Freedom of association',
  we: '## Worked example',
};

// 01 Two rights in one article
{
  const tree = (y) => {
    let s = '';
    const top = card(250, y, 400, { title: 'Article 11.1', body: 'A qualified right', align: 'middle', tsize: 22, size: 17, fill: C.cream, edge: C.olive, bfill: C.ink });
    s += top.s;
    const y2 = y + top.h + 60;
    const L = card(30, y2, 405, { kicker: 'FREEDOM 1', title: 'Peaceful assembly', body: ['Meeting with others in public or private', 'Marches, static protests, rallies, sit-ins'], bullets: true, size: 17, tsize: 21, fill: C.tealLight, edge: C.tealDark, gap: 4 });
    const R = card(465, y2, 405, { kicker: 'FREEDOM 2', title: 'Association with others', body: ['Joining a formal or lasting group', '“The right to form and to join trade unions for the protection of his interests”', 'Political parties and campaign groups'], bullets: true, size: 17, tsize: 21, fill: C.tealLight, edge: C.tealDark, gap: 4 });
    const h = Math.max(L.h, R.h);
    s += card(30, y2, 405, { kicker: 'FREEDOM 1', title: 'Peaceful assembly', body: ['Meeting with others in public or private', 'Marches, static protests, rallies, sit-ins'], bullets: true, size: 17, tsize: 21, fill: C.tealLight, edge: C.tealDark, gap: 4, minH: h }).s + R.s;
    s += arrow(380, y + top.h + 4, 232, y2 - 6, { w: 3.5 }) + arrow(520, y + top.h + 4, 668, y2 - 6, { w: 3.5 });
    return { s, h: y2 + h - y };
  };
  F('01-two-rights', 'Two rights in one Article', '', [tree,
    (y) => note(y, 'Closely linked to Article 10', 'A protest is usually a way of expressing an opinion. Where the complaint is about a gathering, the Court often treats Article 11 as the main right and reads it in the light of Article 10.', {})],
  'Article 11.1, a qualified right, splits into peaceful assembly (meeting in public or private: marches, static protests, rallies, sit-ins) and association with others (formal or lasting groups, including trade unions, political parties and campaign groups). A note explains that a protest usually expresses an opinion, so Article 11 is read in the light of Article 10.',
  'Assembly and association: two linked freedoms, both read alongside Article 10.', H2.two);
}

// 02 Is the assembly peaceful?
F('02-peaceful-test', 'Is the assembly “peaceful”?', 'Only peaceful assemblies are protected by Article 11', [
  (y) => grid(y, [
    { kicker: 'OUTSIDE ARTICLE 11', kfill: C.rust, title: 'Organisers or participants intend violence', body: 'The assembly is not protected', fill: C.cream, edge: C.rust },
    { kicker: 'STILL PROTECTED', title: 'Others turn violent, but you stay peaceful', body: '*Ezelin v France* (1991): a lawyer disciplined for joining a demonstration where others committed offences. Breach: no punishment without a reprehensible act of his own.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'STILL PEACEFUL', title: 'The protest causes disruption', body: '*Kudrevičius v Lithuania* (2015): farmers blocked major roads for about two days. A peaceful assembly, but serious deliberate disruption was not at the core of the freedom; convictions justified.', fill: C.tealLight, edge: C.tealDark },
  ], 3, { gap: 14, vcenter: false, card: { size: 16, tsize: 18, bfill: C.ink } }),
  (y) => note(y, '', 'Disruption alone does not remove protection; **violent intention** does.', { size: 18, align: 'middle' }),
],
'Three situations. If organisers or participants intend violence the assembly falls outside Article 11. A person who stays peaceful while others are violent is still protected (Ezelin v France, breach). A disruptive protest is still peaceful (Kudrevičius v Lithuania), though deliberate serious disruption is not at the core of the freedom and the convictions were justified.',
'Violent intention removes protection; disruption or other people’s violence does not.', H2.pa);

// 03 Where people may assemble
F('03-where-to-assemble', 'Where may people assemble?', '', [
  (y) => row(y, [
    { kicker: 'PRIVATE LAND', title: 'No right to protest on any land', body: ['*Appleby v UK* (2003): campaigners stopped collecting signatures in a privately owned shopping centre', 'No breach of Articles 10 or 11: they had other effective ways to reach the public'], bullets: true, fill: C.cream, edge: C.olive },
    { kicker: 'PUBLIC HIGHWAY', title: 'Assembly can be a lawful use', body: ['*DPP v Jones* (1999): a peaceful, non-obstructive assembly can be a reasonable use of the highway, not automatically a trespass', '*DPP v Ziegler* (2021): “lawful excuse” for obstructing a road needs a proportionality assessment under Articles 10 and 11; acquittals restored'], bullets: true, fill: C.tealLight, edge: C.tealDark },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, bfill: C.ink, gap: 8 } }),
],
'Two panels. Private land: Appleby v UK found no breach when campaigners were stopped in a privately owned shopping centre because they had other ways to reach the public. Public highway: DPP v Jones held a peaceful, non-obstructive assembly can be a reasonable use, and DPP v Ziegler required a proportionality assessment of lawful excuse, restoring the protesters’ acquittals.',
'No right to use private land where alternatives exist; the highway can be used peacefully.', H2.pa);

// 04 State duties and police powers
F('04-policing-protest', 'The state, the police and protest', '', [
  (y) => steps(y, [
    { n: '1', title: 'Protect the assembly: a positive duty', body: '*Plattform “Ärzte für das Leben” v Austria* (1988): take **reasonable and appropriate measures** so lawful demonstrations proceed peacefully, including protection from counter-demonstrators. A duty of means, not results.' },
    { n: '2', title: 'Preventive action needs a legal basis', body: '*R (Laporte) v Chief Constable of Gloucestershire* (2006): coaches turned back to London. Unlawful: a breach of the peace was not **imminent**, and turning back everyone was disproportionate.' },
    { n: '3', title: 'Notice may be required, but read narrowly', body: 'Public Order Act 1986 s11: notice of public processions, except those “commonly or customarily held”. *Kay v Commissioner of Police of the Metropolis* (2008): the monthly Critical Mass ride, with no fixed route, needed no notice.' },
  ], { size: 16, tsize: 19 }),
],
'Three points. Plattform Ärzte für das Leben v Austria: states must take reasonable and appropriate measures to protect lawful demonstrations, a duty of means not results. Laporte: turning back protesters’ coaches was unlawful because a breach of the peace was not imminent and the action was disproportionate. Kay: section 11 of the Public Order Act 1986 exempts processions commonly or customarily held, such as Critical Mass.',
'The state must protect peaceful protest and needs clear, proportionate grounds to stop it.', H2.pa);

// 05 Association cases
F('05-association-cases', 'Freedom of association: the key cases', '', [
  (y) => table(y, [{ w: 1.2, head: 'Case' }, { w: 2.1, head: 'What happened' }, { w: 1.5, head: 'Outcome' }], [
    ['Young, James and Webster v UK (1981)', 'Railway workers dismissed for refusing to join a union under a closed shop', 'Compulsion struck at the substance: a **negative** freedom not to join'],
    ['ASLEF v UK (2007)', 'UK law stopped a union expelling a British National Party member', '**Breach**: a union must be free to choose its members'],
    ['National Union of Rail, Maritime and Transport Workers v UK (2014)', 'UK ban on secondary industrial action', '**No breach**: wide margin on economic and social policy'],
    ['Redfearn v UK (2012)', 'Bus driver dismissed for being a British National Party councillor; no unfair dismissal claim', '**UK failed** its positive obligation to protect against dismissal'],
    ['United Communist Party of Turkey v Turkey (1998)', 'Political party dissolved', '**Breach**'],
    ['Refah Partisi v Turkey (2003)', 'Political party dissolved', '**Justified**: aims incompatible with democracy'],
  ], { size: 16, cellFill: (r, c) => (c === 0 ? (r < 3 ? C.tealLight : C.cream) : null) }),
  (y) => {
    const a = chip(30, y, 'teal: trade unions', { size: 15, fill: C.tealLight, edge: C.tealDark });
    const b = chip(40 + a.w, y, 'cream: political association', { size: 15, fill: C.cream, edge: C.olive });
    return { s: a.s + b.s, h: a.h };
  },
],
'A table of six association cases. Trade unions: Young, James and Webster (a negative freedom not to be forced to join), ASLEF (breach, a union may choose its members), the rail union case (no breach, wide margin). Political association: Redfearn (UK failed its positive obligation), United Communist Party of Turkey (dissolution a breach) and Refah Partisi (dissolution justified).',
'Association covers the freedom not to join and a union’s freedom to choose its members.', H2.fa);

// 06 Worked example
F('06-nurses-vigil', 'Worked example: the nurses’ vigil', '', [
  (y) => card(30, y, 840, { kicker: 'FACTS', body: 'Nurses hold a silent vigil outside a hospital about staff shortages. A separate group throws objects at them. Police tell the nurses to leave because “there might be trouble” and arrest Kim when she stays standing silently on the pavement.', size: 17, bfill: C.ink, fill: C.tealLight, edge: C.tealDark }),
  (y) => steps(y, [
    { title: 'Right', body: 'Article 11.1, peaceful assembly, read with Article 10.' },
    { title: 'Peaceful?', body: 'Yes. Violence by others does not remove their protection (*Ezelin*).' },
    { title: 'Location', body: 'A pavement is public highway; peaceful use can be lawful (*DPP v Jones*).' },
    { title: 'Positive duty', body: 'Police should take reasonable steps to protect the vigil from the counter-group (*Plattform Ärzte für das Leben*).' },
    { title: 'Kim’s arrest', body: 'Acting against the peaceful group, not the aggressors, needs justification: compare *Laporte* on imminence and proportionality. Article 11.2 decides.' },
  ], { highlight: 4 }),
],
'The nurses’ vigil in five steps: Article 11.1 read with Article 10; the nurses stay peaceful despite others’ violence (Ezelin); the pavement is highway that can be used peacefully (DPP v Jones); police have a duty to protect the vigil (Plattform); Kim’s arrest needs justification, compared with Laporte, and Article 11.2 decides.',
'Peaceful, lawful location, positive duty: then test the arrest under Article 11.2.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
