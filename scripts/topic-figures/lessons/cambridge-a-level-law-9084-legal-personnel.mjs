import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-law-9084-legal-personnel';
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
  jud: '## 1.3.1 The judiciary',
  pro: '## 1.3.2 Legal professionals',
  lay: '## 1.3.3 Lay personnel',
};

// 01 Judges: superior and inferior, with qualifying experience
{
  const rows = [
    ['Justices of the Supreme Court', 'Two years in high judicial office, or 15 years (CRA 2005 s25)', 'Hear appeals, set binding precedent, interpret statutes', 1],
    ['Lords and Lady Justices of Appeal', 'Seven years, or already a High Court judge', 'Appeals and precedent; sentencing guideline judgments', 1],
    ['High Court judges', 'Seven years', 'Major civil cases, judicial review, appeals, most serious Crown Court cases', 1],
    ['Circuit judges', 'Seven years', 'Crown Court (direct jury on law, sum up, sentence) and County Court', 0],
    ['Recorders (part-time)', 'Seven years', 'Crown Court and County Court; often a step to full-time posts', 0],
    ['District judges', 'Five years', 'Most County Court work incl. small claims; magistrates’ courts: criminal cases alone', 0],
  ];
  F('01-judges-qualifications-roles', 'Judges: experience needed and role', 'Post-qualification experience: Tribunals, Courts and Enforcement Act 2007', [
    (y) => {
      const t = table(y + 0, [
        { w: 1.0, head: 'Judge' },
        { w: 1.15, head: 'Qualifying experience', hfill: C.teal },
        { w: 1.5, head: 'Role', hfill: C.teal },
      ], rows.map((r) => r.slice(0, 3)), { x: 80, w: 790, size: 16, hsize: 17, cellFill: (ri, ci) => (ci === 0 ? (rows[ri][3] ? C.cream : C.tealLight) : null) });
      const cw = [1.0, 1.15, 1.5].map((f) => (790 * f) / 3.65), pad = 14;
      const ch = (txt, w, sz, wt) => wrapRich(txt, w - 2 * pad, sz, wt).length * Math.round(sz * 1.3);
      const hh = Math.max(...['Judge', 'Qualifying experience', 'Role'].map((h, i) => ch(h, cw[i], 17, 700))) + 2 * pad - 2;
      const rh = rows.map((r) => Math.max(...r.slice(0, 3).map((txt, i) => ch(txt, cw[i], 16, i === 0 ? 700 : 400))) + 2 * pad - 2);
      const top = y + hh, split = top + rh.slice(0, 3).reduce((q, v) => q + v, 0), bot = y + t.h;
      const s = t.s;
      const lab = (y1, y2, txt, fill) => `<rect x="30" y="${y1 + 4}" width="38" height="${y2 - y1 - 8}" rx="10" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>` + `<text x="49" y="${(y1 + y2) / 2}" font-size="16" font-weight="700" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 49 ${(y1 + y2) / 2})" dy="6">${txt}</text>`;
      return { s: s + lab(top, split, 'SUPERIOR', C.cream) + lab(split, bot, 'INFERIOR', C.tealLight), h: t.h };
    },
  ],
  'A table of judges from Justices of the Supreme Court down to district judges, grouped as superior and inferior, with the years of qualifying experience each post needs (15 years or two years in high judicial office for the Supreme Court; seven years for the Court of Appeal, High Court, circuit judges and recorders; five for district judges) and the role of each.',
  'The more senior the court, the more experience required and the wider the role.', H2.jud);
}

// 02 Appointment process
F('02-judicial-appointment', 'How judges are selected and appointed', 'Judicial Appointments Commission, created by the Constitutional Reform Act 2005', [
  (y) => row(y, [
    { title: 'Qualifying tests' }, { title: 'Shortlisting' }, { title: 'References' }, { title: 'Selection day', body: 'interview and role-play' },
  ], { arrows: true, gap: 36, vcenter: true, minH: 90, card: { size: 15, tsize: 17, pad: 12, align: 'middle', fill: C.tealLight, edge: C.tealDark, bfill: C.ink } }),
  (y) => {
    const c = card(220, y + 36, 460, { title: 'JAC recommends ONE candidate', body: 'Judges, lawyers and lay members; must encourage diversity among applicants', fill: C.cream, edge: C.olive, align: 'middle', size: 16, tsize: 19, bfill: C.ink });
    return { s: arrow(450, y + 2, 450, y + 30) + c.s, h: 36 + c.h };
  },
  (y) => {
    const c = card(220, y + 36, 460, { title: 'Lord Chancellor', body: 'or, for many lower posts, the Lord Chief Justice', align: 'middle', size: 16, tsize: 19, bfill: C.ink, fill: C.panel, edge: C.ink });
    const r = row(y + 36 + c.h + 46, [{ title: 'Accept' }, { title: 'Reject' }, { title: 'Ask for reconsideration' }], { x: 120, w: 660, gap: 20, card: { size: 16, tsize: 17, align: 'middle', pad: 14 } });
    const ay = y + 36 + c.h;
    const arr = arrow(450, y + 2, 450, y + 30) + arrow(400, ay + 6, r.xs[0] + r.ws[0] / 2, ay + 40) + arrow(450, ay + 6, 450, ay + 40) + arrow(500, ay + 6, r.xs[2] + r.ws[2] / 2, ay + 40);
    return { s: arr + c.s + r.s, h: 36 + c.h + 46 + r.h };
  },
  (y) => note(y, '', '**Supreme Court Justices** are chosen by a special selection commission.', { size: 17, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'Candidates pass qualifying tests, shortlisting, references and a selection day with interview and role-play. The Judicial Appointments Commission recommends one candidate, and the Lord Chancellor (or the Lord Chief Justice for many lower posts) may accept, reject or ask for reconsideration. Supreme Court Justices are chosen by a special selection commission.',
'An independent commission recommends; the Lord Chancellor or Lord Chief Justice decides.', H2.jud);

// 03 Judicial independence
F('03-judicial-independence', 'Protecting judicial independence', '', [
  (y) => hub(y, ['Judicial', 'independence'], [
    { title: 'Security of tenure', body: 'Superior judges removable only on an address from both Houses (used once, 1830)' },
    { title: 'Salaries', body: 'Paid from the Consolidated Fund' },
    { title: 'Immunity from suit', body: 'For judicial acts: *Sirros v Moore* (1975)' },
  ], [
    { title: 'Separation of powers', body: 'Full-time judges cannot be MPs; Supreme Court replaced the Lords’ Appellate Committee (2009)' },
    { title: 'Statutory guarantee', body: 's3 CRA 2005: ministers must uphold independence' },
    { title: 'Impartiality', body: '*Re Pinochet* (1999): decision set aside over Lord Hoffmann’s links with Amnesty International' },
  ], { cardW: 300, r: 88, card: { bfill: C.ink } }),
  (y) => row(y, [
    { kicker: 'STRONG IN LAW', body: 'Tenure, pay, immunity and statute protect decisions from pressure.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'BUT', kfill: C.rust, body: 'Media pressure: the *Miller* (2016) judges called “Enemies of the People”. Diversity lags behind the population.' },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'Six safeguards around judicial independence: security of tenure, salaries from the Consolidated Fund, immunity from suit (Sirros v Moore), separation of powers, the statutory duty in s3 Constitutional Reform Act 2005, and impartiality (Re Pinochet). Below, independence is strong in law but faces media pressure (Miller) and a diversity gap.',
'Independence is protected by tenure, pay, immunity, separation and statute.', H2.jud);

// 04 Routes to qualify
F('04-routes-to-qualify', 'Three routes into the legal professions', '', [
  (y) => table(y, [
    { w: 0.7, head: 'Stage' },
    { w: 1.1, head: 'Solicitors', hfill: C.teal },
    { w: 1.1, head: 'Barristers', hfill: C.mustard },
    { w: 1.0, head: 'Legal executives', hfill: C.tealLight },
  ], [
    ['1 Academic', 'Degree in any subject or equivalent', 'Law degree, or non-law degree plus conversion course', 'CILEX qualifications; no degree needed'],
    ['2 Vocational', 'SQE1 (legal knowledge) and SQE2 (practical skills)', 'Bar course; one of the four Inns of Court; call to the Bar', 'CILEX professional qualification'],
    ['3 Work-based', 'Two years’ qualifying work experience; character and suitability check', 'Pupillage, usually twelve months', 'Qualifying employment'],
    ['Typical role', 'Direct client contact; advice, conveyancing, wills, litigation; advocacy, higher rights if qualified', 'Specialist advocacy and written opinions; self-employed in chambers or employed', 'Specialist fee-earner; may become an advocate, partner or judge'],
  ], { size: 16, hsize: 18 }),
  (y) => row(y, [
    { body: '**Cab-rank rule:** barristers accept work in their field when available' },
    { body: '**King’s Counsel:** senior barristers and solicitor-advocates, by independent selection' },
    { body: '*Arthur JS Hall v Simons* (2000): advocates’ immunity from negligence removed' },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'A table comparing how solicitors, barristers and legal executives qualify through academic, vocational and work-based stages (SQE1 and SQE2; Bar course, Inns of Court and pupillage; CILEX qualifications) and their typical roles, with notes on the cab-rank rule, King’s Counsel and Arthur JS Hall v Simons.',
'Academic, vocational, then work-based: the same three stages, different content.', H2.pro);

// 05 Regulation
F('05-regulation', 'Who represents and who regulates', 'Legal Services Act 2007: representation separated from regulation', [
  (y) => card(250, y, 400, { title: 'Legal Services Board', body: 'oversees the regulators', align: 'middle', fill: C.mustard, edge: C.ink, tsize: 20, size: 16, bfill: C.ink }),
  (y) => {
    const W = 410, L = 30, R = 460;
    const head = (x, s) => `<rect x="${x}" y="${y}" width="${W}" height="44" rx="12" fill="${C.tealDark}"/>` + T(x + W / 2, y + 29, s, { size: 19, weight: 700, anchor: 'middle', fill: '#ffffff' });
    let s = path(`M450,${y - 40} L450,${y - 22} M235,${y - 22} L665,${y - 22}`, { w: 3 }) + arrow(235, y - 22, 235, y - 3) + arrow(665, y - 22, 665, y - 3) + head(L, 'Barristers') + head(R, 'Solicitors');
    const a1 = card(L, y + 56, W, { kicker: 'REPRESENTS AND PROMOTES', title: 'The Bar Council', size: 16, tsize: 18 });
    const b1 = card(R, y + 56, W, { kicker: 'REPRESENTS AND PROMOTES', title: 'The Law Society', size: 16, tsize: 18 });
    const y2 = y + 56 + a1.h + 12;
    const b2 = card(R, y2, W, { kicker: 'REGULATES', title: 'Solicitors Regulation Authority', body: 'Admission standards and conduct rules; investigates misconduct; prosecutes serious cases', fill: C.cream, edge: C.olive, size: 16, tsize: 18, bfill: C.ink });
    const a2 = card(L, y2, W, { kicker: 'REGULATES', title: 'Bar Standards Board', body: 'Education and training standards; code of conduct; investigates breaches; disciplinary proceedings', fill: C.cream, edge: C.olive, size: 16, tsize: 18, bfill: C.ink, minH: b2.h });
    const y3 = y2 + b2.h + 40;
    const b3 = card(R, y3, W, { title: 'Solicitors Disciplinary Tribunal', body: 'Can strike a solicitor off the roll', size: 16, tsize: 18, bfill: C.ink, align: 'middle' });
    s += a1.s + b1.s + a2.s + b2.s + arrow(R + W / 2, y2 + b2.h + 4, R + W / 2, y3 - 4) + b3.s;
    return { s, h: y3 + b3.h - y };
  },
  (y) => {
    const lab = T(30, y + 16, 'COMPLAINTS ABOUT POOR SERVICE', { size: 16, weight: 700, fill: C.muted });
    const r = row(y + 28, [
      { title: 'Complain to the lawyer first' },
      { title: 'Refer to the Legal Ombudsman', body: 'independent scheme', fill: C.tealLight, edge: C.tealDark },
      { title: 'Remedies', body: 'apology, refund or reduction of fees, compensation', fill: C.cream, edge: C.olive },
    ], { arrows: true, gap: 40, card: { size: 16, tsize: 17, pad: 14, align: 'middle', bfill: C.ink } });
    return { s: lab + r.s, h: 28 + r.h };
  },
],
'Under the Legal Services Board, each profession has separate bodies: the Bar Council represents barristers and the Bar Standards Board regulates them; the Law Society represents solicitors and the Solicitors Regulation Authority regulates them, sending serious cases to the Solicitors Disciplinary Tribunal. Poor service complaints go to the lawyer first, then to the Legal Ombudsman.',
'Separate bodies represent and regulate; the Legal Ombudsman handles service complaints, not negligence.', H2.pro, { gap: 40 });

// 06 Magistrates
F('06-lay-magistrates', 'Becoming a lay magistrate', 'Age 18 to under 75; at least 13 days a year', [
  (y) => {
    const lab = T(450, y + 16, 'THE SIX KEY QUALITIES', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
    const c = chips(y + 30, ['Good character', 'Understanding and communication', 'Social awareness', 'Maturity and sound temperament', 'Sound judgement', 'Commitment and reliability'], { size: 16, fill: C.cream, edge: C.olive });
    return { s: lab + c.s, h: 30 + c.h };
  },
  (y) => note(y, '', '**Disqualified:** certain criminal convictions, undischarged bankruptcy, conflicting occupations such as serving police officers.', { size: 16, fill: C.panel, edge: C.panelEdge }),
  (y) => steps(y, [
    { title: 'Vacancies advertised' },
    { title: 'Local advisory committee interviews', body: 'Tests personal qualities and judicial aptitude through case scenarios; recommends appointments' },
    { title: 'Appointed by the Lord Chief Justice', body: 'on the monarch’s behalf' },
    { title: 'Training (Judicial College framework)', body: 'Induction, observing sittings, mentoring, then appraisal; more for chairing, youth or family courts' },
  ], { size: 16, highlight: 2 }),
  (y) => row(y, [
    { kicker: 'FOR', body: 'Local knowledge, low cost, public participation', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'AGAINST', kfill: C.rust, body: 'Case-hardening, inconsistent sentencing between benches, imperfect representativeness' },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'The six key qualities for magistrates and the disqualifications, then four steps: vacancies advertised, interview by a local advisory committee, appointment by the Lord Chief Justice on the monarch’s behalf, and training under the Judicial College framework. Below, the arguments for and against magistrates.',
'Six qualities, a local interview, appointment, then structured training.', H2.lay);

// 07 Jury: from eligibility to verdict
F('07-jury-selection', 'The jury: eligibility, vetting and challenges', 'Juries Act 1974, as amended', [
  (y) => row(y, [
    { kicker: 'ELIGIBLE', body: ['Aged 18–75', 'On the electoral register', 'UK resident 5+ years since age 13'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'DISQUALIFIED', kfill: C.rust, body: ['5+ years’ imprisonment: for life', 'Recently served a sentence, or on bail', 'Lacking mental capacity'], bullets: true },
    { kicker: 'POLICE, LAWYERS, JUDGES', body: 'May serve (CJA 2003), but *R v Abdroikov* (2007): appearance of bias quashed two of three convictions', fill: C.cream, edge: C.olive },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink, gap: 4 } }),
  (y) => row(y, [
    { kicker: 'VETTING', body: ['**Routine police checks** for disqualification (*R v Mason*, 1980)', '**Authorised checks** in national security and terrorism cases (Attorney General’s guidelines)'], gap: 6 },
    { kicker: 'CHALLENGES', body: ['**To the array:** the whole panel', '**For cause:** one juror, e.g. knows the defendant', '**Stand by:** prosecution moves a juror back', 'No peremptory challenge since 1988; no right to a racially balanced jury (*R v Ford*)'], gap: 4 },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
  (y) => card(30, y, 840, { kicker: 'IN COURT', body: 'Twelve jurors decide the facts in secret after the judge directs them on law. Majority verdict of 10–2 after at least two hours (s17).', size: 16, pad: 16, bfill: C.ink, fill: C.mustard, edge: C.ink }),
],
'Jury eligibility (18 to 75, on the electoral register, five years’ residence) and disqualification, with Abdroikov on police and lawyers serving. Vetting by routine police checks (R v Mason) and authorised checks; challenges to the array, for cause and stand by, with no peremptory challenge and no right to a racially balanced jury (R v Ford). Twelve jurors decide the facts, with a 10–2 majority allowed after two hours.',
'Eligibility, then vetting and challenges, then twelve jurors deciding the facts.', H2.lay);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
