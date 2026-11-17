import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-article-2-of-the-european-convention-on-human-rights-1953';
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
  a21: '## Article 2.1: the right to life',
  a22: '## Article 2.2: justified exceptions',
  proc: '## The procedural duty',
  we: '## Worked example',
};

// 01 Obligations tree
{
  const tree = (y) => {
    let s = '';
    const top = card(200, y, 500, { title: '“Everyone’s right to life shall be protected by law”', body: 'Article 2.1: a limited right; no derogation except for deaths from lawful acts of war', align: 'middle', tsize: 20, size: 16, fill: C.cream, edge: C.olive, bfill: C.ink });
    s += top.s;
    const y2 = y + top.h + 56, w = 198, gap = 16;
    const items = [
      { kicker: 'NEGATIVE', title: 'Do not take life', body: 'except as Article 2.2 allows. *McCann v UK* (1995)' },
      { kicker: 'FRAMEWORK', title: 'Laws that deter and punish', body: 'Effective criminal law and regulation. *Öneryildiz v Turkey* (2004)' },
      { kicker: 'OPERATIONAL', title: 'Protect people at risk', body: 'Real and immediate risk known, or ought to be. *Osman v UK* (1998)' },
      { kicker: 'PROCEDURAL', title: 'Investigate deaths', body: 'Effective official investigation where the state is involved. *Jordan v UK* (2001)' },
    ];
    const hs = items.map((it) => card(0, 0, w, { ...it, size: 16, tsize: 18, pad: 16 }).h), h = Math.max(...hs);
    items.forEach((it, i) => {
      const x = 30 + i * (w + gap);
      s += card(x, y2, w, { ...it, size: 16, tsize: 18, pad: 16, minH: h, fill: i === 0 ? C.panel : i === 3 ? C.tealLight : C.panel, edge: i === 3 ? C.tealDark : C.panelEdge }).s;
      s += arrow(450 + (i - 1.5) * 60, y + top.h + 4, x + w / 2, y2 - 6, { w: 3 });
    });
    s += `<rect x="${30 + w + gap - 8}" y="${y2 - 10}" width="${2 * w + gap + 16}" height="${h + 20}" rx="18" fill="none" stroke="${C.tealDark}" stroke-width="2.5" stroke-dasharray="8 6"/>`;
    s += T(30 + w + gap + w + gap / 2, y2 + h + 34, 'positive obligations come from the words “protected by law”', { size: 16, weight: 600, fill: C.tealDark, anchor: 'middle' });
    return { s, h: h + y2 - y + 40 };
  };
  F('01-article-2-obligations', 'Four duties inside Article 2', '', [tree],
    'Article 2.1, a limited right with no derogation except for deaths from lawful acts of war, produces four duties: the negative duty not to take life (McCann v UK), the positive framework duty to have effective criminal law and regulation (Öneryildiz v Turkey), the positive operational duty to protect people at real and immediate risk (Osman v UK), and the procedural duty to investigate (Jordan v UK).',
    'Do not kill, protect life through laws and action, and investigate deaths.', H2.a21);
}

// 02 Osman test
F('02-osman-test', 'The Osman test for the operational duty', 'Every part must be met before the state is liable', [
  (y) => steps(y, [
    { title: 'The authorities knew, or ought to have known', body: '' },
    { title: 'of a real and immediate risk to life', body: '' },
    { title: 'of an identified individual', body: '' },
    { title: 'from the criminal acts of a third party', body: '' },
    { title: 'and failed to take reasonable measures within their powers that might have avoided it', body: '' },
  ], { gap: 8, pad: 14, tsize: 19 }),
  (y) => grid(y, [
    { kicker: 'TEST NOT MET', kfill: C.rust, title: 'Osman v UK (1998)', body: 'No real and immediate risk known at any decisive stage', fill: C.cream, edge: C.olive },
    { kicker: 'BREACH', title: 'Edwards v UK (2002)', body: 'Prisoner killed by a mentally ill cellmate; information on his dangerousness not passed on', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'NO BREACH', kfill: C.rust, title: 'Van Colle (2008)', body: 'Witness shot; earlier threats did not show a real and immediate risk', fill: C.cream, edge: C.olive },
    { kicker: 'BREACH', title: 'Rabone (2012)', body: 'Voluntary psychiatric patient at risk of suicide allowed home leave', fill: C.tealLight, edge: C.tealDark },
  ], 4, { gap: 12, vcenter: false, card: { size: 15, tsize: 17, pad: 14, bfill: C.ink } }),
],
'The Osman test in five parts: the authorities knew or ought to have known of a real and immediate risk to the life of an identified individual from a third party’s criminal acts, and failed to take reasonable measures. Applied: Osman v UK, test not met; Edwards v UK, breach; Van Colle, no breach; Rabone, breach.',
'The operational duty is demanding: the risk must be real, immediate and known.', H2.a21);

// 03 Scope
F('03-scope-of-life', 'When does Article 2 apply?', 'The edges of the right to life', [
  (y) => {
    const it = [
      { kicker: 'BEFORE BIRTH', title: 'Vo v France (2004)', body: 'Court declined to decide if an unborn child is a “person”: left to the state’s margin of appreciation' },
      { kicker: 'EMBRYOS', title: 'Evans v UK (2007)', body: 'No breach when embryos were to be destroyed after the father withdrew consent' },
      { kicker: 'END OF LIFE', title: 'Pretty v UK (2002)', body: 'No right to die: the ban on assisted suicide did not breach Article 2' },
    ];
    const r = row(y + 50, it, { gap: 18, vcenter: false, card: { size: 16, tsize: 19 } });
    let s = arrow(40, y + 20, 860, y + 20, { w: 4, color: C.tealDark, marker: 'ahT' }) + T(40, y + 8, 'start of life', { size: 15, weight: 700, fill: C.muted }) + T(860, y + 8, 'end of life', { size: 15, weight: 700, fill: C.muted, anchor: 'end' });
    return { s: s + r.s, h: r.h + 50 };
  },
],
'Three cases along a line from the start to the end of life. Vo v France: the Court declined to decide whether an unborn child is a person, leaving it to the margin of appreciation. Evans v UK: no breach when embryos were to be destroyed. Pretty v UK: Article 2 gives no right to die, so the assisted suicide ban did not breach it.',
'Article 2 leaves unborn life to the state and gives no right to die.', H2.a21);

// 04 Article 2.2 test
F('04-article-2-2-test', 'Article 2.2: when is lethal force lawful?', 'Covers unintentional as well as intentional killing', [
  (y) => stack(y, [
    { kicker: 'QUESTION 1', title: 'Was the force used for a listed aim?', body: ['(a) defence of any person from unlawful violence', '(b) to effect a lawful arrest or prevent the escape of a person lawfully detained', '(c) action lawfully taken to quell a riot or insurrection'], bullets: false, gap: 2 },
    { kicker: 'QUESTION 2', title: 'Was it no more than absolutely necessary?', body: ['Strictly proportionate to the aim: a **stricter** test than “necessary in a democratic society”', 'Judged on an **honest belief, perceived for good reasons**, even if mistaken (*Da Silva v UK*, 2016)'], gap: 4 },
    { kicker: 'QUESTION 3', title: 'Was the operation planned and controlled to minimise risk to life?', body: '*McCann v UK* (1995)', fill: C.tealLight, edge: C.tealDark },
  ], { arrows: true, gap: 40, card: { size: 16, tsize: 19, bfill: C.ink } }),
  (y) => row(y, [
    { kicker: 'WITHIN 2.2(c)', title: 'Stewart v UK (1984)', body: 'Plastic baton round in a riot killed a boy: no breach in the circumstances' },
    { kicker: 'BREACH', kfill: C.rust, title: 'Güleç v Turkey (1998)', body: 'Live ammunition at demonstrators killed a boy: not absolutely necessary; no less lethal equipment' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, fill: C.cream, edge: C.olive, bfill: C.ink } }),
],
'Three questions for lethal force: was it for an aim in Article 2.2 (a) defence from unlawful violence, (b) lawful arrest or preventing escape, (c) quelling a riot; was it no more than absolutely necessary, a stricter test judged on honest belief for good reasons (Da Silva); and was the operation planned to minimise risk (McCann). Below, Stewart v UK found no breach in a riot, Güleç v Turkey found a breach.',
'A listed aim, absolute necessity and careful planning: all three are needed.', H2.a22);

// 05 McCann two levels
F('05-mccann-two-levels', 'McCann v UK (1995): two levels of responsibility', 'Three IRA suspects shot dead by soldiers in Gibraltar', [
  (y) => row(y, [
    { kicker: 'THE SOLDIERS', title: 'Not a breach', body: 'They honestly believed the suspects could detonate a bomb remotely', fill: C.panel },
    { kicker: 'PLANNING AND CONTROL', kfill: C.rust, title: 'Violation', body: ['Failed to arrest the suspects earlier', 'Did not allow for the intelligence being wrong', 'Soldiers trained to shoot to kill'], bullets: true, gap: 4, fill: C.cream, edge: C.rust },
  ], { gap: 16, vcenter: false, card: { size: 17, tsize: 22, bfill: C.ink } }),
  (y) => note(y, '', 'Look beyond the person who fired: Article 2 requires the state to **plan operations to minimise the risk to life**.', { size: 18, align: 'middle' }),
],
'McCann v UK: soldiers shot three IRA suspects in Gibraltar. The soldiers themselves did not breach Article 2 because they honestly believed a bomb could be detonated remotely. The violation came from planning and control: no earlier arrest, no allowance for wrong intelligence, and training to shoot to kill.',
'Even where the shooter is not at fault, poor planning can breach Article 2.', H2.a22);

// 06 Jordan checklist
F('06-jordan-investigation', 'An effective investigation: Jordan v UK (2001)', 'Required where someone dies from state force or in state custody', [
  (y) => grid(y, [
    { kicker: '1', title: 'Independent' },
    { kicker: '2', title: 'Capable of establishing the facts and identifying those responsible' },
    { kicker: '3', title: 'Prompt' },
    { kicker: '4', title: 'Open to sufficient public scrutiny' },
    { kicker: '5', title: 'Involves the family of the deceased' },
  ], 3, { gap: 14, vcenter: true, card: { tsize: 19, align: 'middle', fill: C.tealLight, edge: C.tealDark } }),
  (y) => note(y, '', 'The procedural duty can be breached **on its own**, separately from the death itself.', { size: 18, align: 'middle' }),
],
'Five features of an effective investigation from Jordan v UK: independent, capable of establishing the facts and identifying those responsible, prompt, open to public scrutiny, and involving the family of the deceased. Failing these can breach Article 2 on its own.',
'The duty to investigate can be breached on its own.', H2.proc);

// 07 Worked example
F('07-marek-worked-example', 'Worked example: Marek at the bank', '', [
  (y) => card(30, y, 840, { kicker: 'FACTS', body: 'Police know Marek has a gun and plans a bank robbery, but let him enter the bank to catch him “in the act”. An officer shoots him dead when he raises an object later found to be a phone. His family hear nothing for two weeks; officers from the same force investigate.', size: 17, bfill: C.ink, fill: C.tealLight, edge: C.tealDark }),
  (y) => steps(y, [
    { title: 'Article 2.2 aim', body: '(a) defence of others from unlawful violence, or (b) effecting a lawful arrest.' },
    { title: 'Absolutely necessary', body: 'An honest belief, for good reasons, that Marek was raising a gun may justify the shot itself (*Da Silva*).' },
    { title: 'Planning', body: 'Letting an armed suspect enter a bank instead of arresting him earlier may breach Article 2 (*McCann*).' },
    { title: 'Procedural', body: 'Investigation by the same force is not independent and the family was not involved (*Jordan*): a separate breach.' },
    { title: 'Conclusion', body: 'Likely violation on planning and on the investigation, even if the officer is not personally at fault.' },
  ], { highlight: 4 }),
],
'Marek’s case in five steps: identify the aim under Article 2.2 (a) or (b); the officer’s honest belief may justify the shot (Da Silva); letting him enter the bank may breach Article 2 through poor planning (McCann); the investigation was not independent and excluded the family (Jordan); so a likely violation on planning and investigation.',
'The shot may be justified while the planning and investigation still breach Article 2.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
