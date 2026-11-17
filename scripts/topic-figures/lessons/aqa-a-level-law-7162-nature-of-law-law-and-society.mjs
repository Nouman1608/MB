import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-nature-of-law-law-and-society';
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
  role: '## The role law plays in society',
  rights: '## Enforceable rights',
  bal: '## Balancing competing interests',
  fault: '## The meaning and importance of fault',
  we: '## Worked example: an extended answer plan',
};

// 01 Theories of law's social role
F('01-social-role-theories', 'Why law takes the forms it does', 'Three views of law’s role in society', [
  (y) => {
    // Pound: balance of three interests
    let s = panel(30, y, 840, 230) + T(50, y + 34, 'ROSCOE POUND: SOCIAL ENGINEERING', { size: 15, weight: 700, fill: C.tealDark });
    s += para(50, y + 66, 'Balance **individual, public and social** interests to satisfy as many as possible with the least friction.', 360, { size: 17, fill: C.ink }).s;
    s += para(50, y + 170, 'Behind the specification’s “balance required between competing interests”.', 360, { size: 15, fill: C.muted, italic: true }).s;
    const cx = 650, by = y + 120;
    s += `<line x1="${cx - 190}" y1="${by}" x2="${cx + 190}" y2="${by}" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>` + `<path d="M${cx},${by} L${cx - 22},${by + 80} L${cx + 22},${by + 80} Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2.5"/>`;
    [['individual', cx - 150, C.tealLight], ['public', cx, C.cream], ['social', cx + 150, C.tealLight]].forEach(([l, x, f]) => { s += `<rect x="${x - 62}" y="${by - 50}" width="124" height="44" rx="10" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x, by - 21, l, { size: 17, weight: 700, anchor: 'middle' }); });
    return { s, h: 230 };
  },
  (y) => {
    let s = panel(30, y, 840, 190) + T(50, y + 34, 'ÉMILE DURKHEIM', { size: 15, weight: 700, fill: C.tealDark });
    const a = card(50, y + 52, 330, { title: 'Simple society', body: 'Shared beliefs; mostly **repressive** law, which punishes', size: 16, tsize: 18, pad: 14, bfill: C.ink, fill: C.cream, edge: C.olive });
    const b = card(520, y + 52, 330, { title: 'Complex society', body: 'Division of labour; more **restitutive** law, which restores', size: 16, tsize: 18, pad: 14, bfill: C.ink, fill: C.tealLight, edge: C.tealDark });
    s += a.s + b.s + arrow(390, y + 52 + a.h / 2, 510, y + 52 + a.h / 2, { w: 4 });
    s += T(450, y + 176, 'Fits the growth of contract, employment and tort law alongside criminal law', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
    return { s, h: 190 };
  },
  (y) => card(30, y, 840, { kicker: 'MARXIST CRITIQUE', body: 'Law protects those with economic power, e.g. by prioritising property rights. Use it to question whether law serves everyone equally.', size: 16, pad: 18, bfill: C.ink, kfill: C.rust, edge: C.rust }),
],
'Three views. Roscoe Pound: law as social engineering, balancing individual, public and social interests. Émile Durkheim: simple societies rely on repressive law that punishes, complex societies on restitutive law that restores, matching the growth of civil law. A Marxist critique: law protects those with economic power.',
'Pound explains balancing, Durkheim the growth of civil law, Marx the doubts.', H2.role, { gap: 16 });

// 02 Enforceable rights
F('02-enforceable-rights', 'What makes a right enforceable?', 'A right is only as good as the means to enforce it', [
  (y) => row(y, [
    { title: 'Expectation' },
    { title: 'Right recognised in law', fill: C.tealLight, edge: C.tealDark },
    { title: 'Standing to go to a court or tribunal', fill: C.tealLight, edge: C.tealDark },
    { title: 'Remedy if successful', fill: C.cream, edge: C.olive },
  ], { arrows: true, gap: 36, card: { tsize: 17, pad: 14, align: 'middle' } }),
  (y) => grid(y, [
    { kicker: 'CONSUMER', body: 'Consumer Rights Act 2015: satisfactory quality, fit for purpose, as described; refund or repair' },
    { kicker: 'EMPLOYMENT', body: 'Unfair dismissal claim to an employment tribunal' },
    { kicker: 'AGAINST THE STATE', body: 'Human Rights Act 1998: Convention rights against public authorities' },
    { kicker: 'TORT', body: 'Damages for negligence, from *Donoghue v Stevenson* (1932)' },
  ], 2, { gap: 14, vgap: 12, vcenter: false, card: { size: 16, pad: 15, bfill: C.ink } }),
  (y) => {
    const head = T(30, y + 20, 'When the chain breaks: R (UNISON) v Lord Chancellor (2017)', { size: 19, weight: 700, fill: C.rust });
    const r = row(y + 36, [
      { title: 'Employment tribunal fees introduced', edge: C.rust },
      { title: 'Claims fell sharply', edge: C.rust },
      { title: 'Supreme Court quashed the fees', fill: C.tealLight, edge: C.tealDark },
    ], { arrows: true, gap: 44, card: { tsize: 17, pad: 14, align: 'middle' } });
    return { s: head + r.s, h: 36 + r.h };
  },
],
'A right becomes enforceable through a chain: an expectation is recognised in law, gives standing before a court or tribunal, and leads to a remedy. Examples: the Consumer Rights Act 2015, unfair dismissal, the Human Rights Act 1998 and negligence damages. In R (UNISON) v Lord Chancellor, tribunal fees caused claims to fall sharply and the Supreme Court quashed them.',
'Cost, delay and lack of advice can leave a right on paper only.', H2.rights, { gap: 22 });

// 03 Balancing interests
F('03-balancing-interests', 'Balancing competing interests', 'The specification’s “eg public and private” is one pairing among several', [
  (y) => {
    const rows = [
      ['Public v private', 'Club and spectators’ racing v enjoyment of a home', '*Kennaway v Thompson* (1981): injunction **limiting** race meetings, not banning them. *Coventry v Lawrence* (2014): public benefit relevant to injunction or damages'],
      ['Individual v state', 'Detecting crime v liberty', 'Police and Criminal Evidence Act 1984: powers to stop, search, arrest and detain, limited by reasonable suspicion, detention time limits and legal advice'],
      ['Individual v individual', 'Privacy v freedom of expression', '*Campbell v MGN* (2004): publishing details and photos of her treatment went too far (majority)'],
      ['Public policy v claimant', 'Police not diverted into defensive practices v compensation', '*Hill v CC of West Yorkshire* (1989): no duty to a serial killer’s future victim'],
    ];
    let s = '', cy = y;
    rows.forEach(([pair, w, c], i) => {
      const cc = card(250, cy, 620, { title: w, body: c, size: 15, tsize: 17, pad: 14, bfill: C.ink });
      s += `<rect x="30" y="${cy}" width="206" height="${cc.h}" rx="14" fill="${i % 2 ? C.cream : C.tealLight}" stroke="${i % 2 ? C.olive : C.tealDark}" stroke-width="2.5"/>` + T(133, cy + cc.h / 2 + 7, pair, { size: 17, weight: 700, anchor: 'middle' }) + cc.s;
      cy += cc.h + 10;
    });
    return { s, h: cy - y - 10 };
  },
],
'Four pairings of competing interests: public and private (Kennaway v Thompson’s limiting injunction; Coventry v Lawrence), individual and state (police powers and safeguards under the Police and Criminal Evidence Act 1984), individual and individual (privacy against expression in Campbell v MGN), and public policy against a claimant (Hill v Chief Constable of West Yorkshire).',
'Almost every rule weighs one interest against another; courts often split the difference.', H2.bal);

// 04 Fault in criminal law
F('04-criminal-fault-ladder', 'Fault in criminal law', 'Fault means blameworthiness: the defendant could and should have acted differently', [
  (y) => {
    const steps2 = [
      ['Intention', 'Highest level of fault', C.rust, '#f3d9c9'],
      ['Subjective recklessness', '', C.olive, C.cream],
      ['Negligence', 'e.g. gross negligence manslaughter', C.tealDark, C.tealLight],
      ['Strict liability', 'No fault for at least one element', C.muted, C.panel],
    ];
    let s = '';
    steps2.forEach(([a, b], i) => {
      const x = 30 + i * 60, w = 520 - i * 60, yy = y + i * 74;
      s += `<rect x="${x}" y="${yy}" width="${w}" height="64" rx="12" fill="${[ '#f3d9c9', C.cream, C.tealLight, C.panel][i]}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + 18, yy + 28, a, { size: 18, weight: 700 }) + (b ? T(x + 18, yy + 51, b, { size: 15, fill: C.muted }) : '');
    });
    s += arrow(30 + 4 * 60 + 300, y + 290, 30 + 4 * 60 + 300, y + 10, { w: 4 });
    s += `<text x="${600}" y="${y + 150}" font-size="16" font-weight="700" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 600 ${y + 150})">more blameworthy</text>`;
    const c = stack(y, [
      { kicker: 'GRADES THE OFFENCE', body: 'Intentional killing: murder. Same death by gross negligence: manslaughter' },
      { kicker: 'GRADES THE SENTENCE', body: 'Courts assess the offender’s **culpability** as well as the harm' },
    ], { x: 630, w: 240, gap: 12, card: { size: 15, pad: 14, bfill: C.ink } });
    return { s: s + c.s, h: Math.max(290, c.h) };
  },
  (y) => row(y, [
    { kicker: 'STRICT LIABILITY', body: '*Alphacell v Woodward* (1972): river polluted without negligence. *Harrow LBC v Shah* (1999): lottery ticket sold to a 13-year-old who looked older', kfill: C.rust },
    { kicker: 'THE PRESUMPTION', body: '*Sweet v Parsley* (1969): Parliament is presumed to intend mens rea unless it clearly says otherwise', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'A narrowing ladder of fault: intention at the top, then subjective recklessness, negligence and finally strict liability, which needs no fault for at least one element. Fault grades the offence (murder or manslaughter) and the sentence (culpability). Alphacell v Woodward and Harrow LBC v Shah show strict liability; Sweet v Parsley shows the presumption of mens rea.',
'The more blameworthy the mind, the more serious the offence and sentence.', H2.fault, { gap: 20 });

// 05 Fault in civil law
F('05-civil-fault', 'Fault in civil law, and liability without it', '', [
  (y) => row(y, [
    { kicker: 'FAULT: NEGLIGENCE', title: 'Objective standard', body: '*Nettleship v Weston* (1971): a learner judged as a competent driver, so fault can exist despite doing one’s best', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'CLAIMANT’S FAULT', title: 'Contributory negligence', body: 'Law Reform (Contributory Negligence) Act 1945 reduces damages. *Froom v Butcher* (1976): no seatbelt', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'NO FAULT NEEDED', title: 'Strict civil liability', body: 'Vicarious liability; *Rylands v Fletcher* (1868); Consumer Protection Act 1987', kfill: C.rust },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } }),
  (y) => table(y, [
    { w: 1, head: 'For fault-based liability', hfill: C.tealLight },
    { w: 1, head: 'Against relying only on fault', hfill: C.cream },
  ], [
    ['Fair: liability only when blameworthy', 'Victims of no-fault harm go uncompensated'],
    ['Encourages care, deters carelessness', 'Proving fault is slow and costly, e.g. clinical negligence'],
    ['Respects autonomy: choices control liability', 'Objective standards impose “fault” on people doing their best'],
    ['Grades offences and sentences by blame', 'Strict liability can protect public health and safety'],
  ], { size: 16, hsize: 17, firstBold: false, firstFill: false }),
],
'Civil law uses objective fault in negligence (Nettleship v Weston), reduces damages for the claimant’s own fault (contributory negligence; Froom v Butcher), and imposes some liability without fault (vicarious liability, Rylands v Fletcher, Consumer Protection Act 1987). A table weighs arguments for fault-based liability against relying only on fault.',
'Fault is the default in civil law too, but not the only basis for liability.', H2.fault, { gap: 20 });

// 06 Answer plan
F('06-fault-answer-plan', 'Plan: the importance of fault in criminal law', 'Keep returning to the question word: importance', [
  (y) => steps(y, [
    { title: 'Define fault as blameworthiness', body: 'Link it to mens rea' },
    { title: 'Hierarchy of fault', body: 'Intention, then recklessness, then negligence' },
    { title: 'Fault grades offences and sentences', body: 'Murder v manslaughter; culpability in sentencing' },
    { title: 'The exception: strict liability', body: '*Alphacell*; *Harrow v Shah*' },
    { title: 'Evaluate', body: '*Sweet v Parsley* shows fault is the norm; strict liability justified for regulatory protection, but can be unjust' },
    { title: 'Conclude', body: 'Fault is central; departures are limited and need justification' },
  ], { size: 16, tsize: 18, gap: 8, pad: 12, highlight: 5 }),
],
'A six-step plan: define fault and link it to mens rea; set out the hierarchy of fault; show how it grades offences and sentences; introduce strict liability (Alphacell; Harrow v Shah); evaluate using Sweet v Parsley; and conclude that fault is central with limited, justified departures.',
'Each step should say why fault matters, not just that it exists.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
