import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-a-level-law-9084-torts-affecting-land';
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
  ola: "## 4.2.1 Occupiers' liability",
  nui: '## 4.2.2 Private nuisance',
  ryl: '## 4.2.3 Rylands v Fletcher',
  tre: '## 4.2.4 Trespass to land',
  we: '## Worked example',
};

// 01 1957 v 1984
F('01-visitor-or-trespasser', 'Which Occupiers’ Liability Act?', 'Identify the claimant’s status first', [
  (y) => table(y, [
    { w: 0.8, head: '' },
    { w: 1.3, head: '1957 Act: lawful visitors', hfill: C.teal },
    { w: 1.3, head: '1984 Act: trespassers and other non-visitors', hfill: C.mustard },
  ], [
    ['Who', 'Express or implied permission; beyond it, a trespasser', 'Not visitors; builds on *Herrington* (1972), common humanity'],
    ['When a duty arises', 'Always: the common duty of care (s2(2))', 'Only if the three s1(3) conditions are met'],
    ['The duty', 'Reasonable care so the visitor is reasonably safe for the purposes of the visit', 'Reasonable care that the person does not suffer injury from the danger (s1(4))'],
    ['Property damage', 'Covered', 'Not covered (s1(8))'],
    ['Warnings', 'Discharge the duty only if enough to make the visitor reasonably safe (s2(4)(a))', 'A warning or discouraging the risk can discharge it (s1(5))'],
    ['Exclusion', 'By agreement or notice (s2(1)); UCTA bars excluding negligent death or injury on business premises', 'The Act is silent: uncertain'],
    ['Defences', 'Consent (s2(5)); contributory negligence; obvious dangers (*Darby v National Trust*)', 'Risks willingly accepted (s1(6))'],
  ], { size: 16, hsize: 17 }),
  (y) => note(y, '', '**Occupier:** sufficient control; there can be more than one (*Wheat v E Lacon*, 1966). **Common mistake:** claiming property damage under the 1984 Act.', { size: 16 }),
],
'A comparison of the Occupiers’ Liability Acts. The 1957 Act protects lawful visitors with the common duty of care, covers property damage and allows limited exclusion; the 1984 Act protects trespassers only when the s1(3) conditions are met, covers injury only, can be discharged by warnings and is silent on exclusion.',
'Visitor: the 1957 Act. Trespasser: the narrower 1984 Act, for injury only.', H2.ola);

// 02 1984 Act gates
F('02-1984-act-duty', 'Does the 1984 Act give a trespasser a claim?', '', [
  (y) => steps(y, [
    { kicker: 's1(3)(a)', title: 'Aware of the danger, or reasonable grounds to believe it exists?' },
    { kicker: 's1(3)(b)', title: 'Knows or has reasonable grounds to believe the person is or may come near it?' },
    { kicker: 's1(3)(c)', title: 'A risk the occupier may reasonably be expected to offer some protection against?' },
  ], { size: 16, tsize: 18 }),
  (y) => card(104, y, 766, { kicker: 'ALL THREE: DUTY UNDER s1(4)', title: 'Reasonable care that the person does not suffer injury from the danger', fill: C.mustard, edge: C.ink, size: 16, tsize: 18, pad: 16, kfill: C.ink }),
  (y) => ({ s: T(450, y + 12, 'CLAIMS THAT FAILED', { size: 16, weight: 700, anchor: 'middle', fill: C.rust }), h: 12 }),
  (y) => row(y, [
    { title: 'Ratcliff v McConnell (1999)', body: 'Dived into a closed college pool at night: an obvious risk accepted' },
    { title: 'Tomlinson v Congleton BC (2003)', body: 'Dived into a shallow lake: danger from his own activity, not the state of the premises' },
    { title: 'Keown v Coventry Healthcare (2006)', body: 'Boy climbing a fire escape: similar reasoning' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 17, pad: 16, bfill: C.ink } }),
],
'Three conditions in s1(3) of the 1984 Act: awareness of the danger, knowledge that the person may be nearby, and a risk that warrants protection. If all three are met, s1(4) imposes a duty of reasonable care against injury. Ratcliff, Tomlinson and Keown failed because the risk was obvious or came from the claimant’s own activity.',
'Three conditions before any duty; obvious risks and self-created dangers defeat the claim.', H2.ola);

// 03 Private nuisance
F('03-private-nuisance', 'Private nuisance: is the interference unreasonable?', 'More than an ordinary person should tolerate', [
  (y) => grid(y, [
    { kicker: 'LOCALITY', body: '*Sturges v Bridgman* (1879): Belgrave Square v Bermondsey. Irrelevant for physical damage (*St Helen’s Smelting*). Planning permission may change the character (*Coventry v Lawrence*)' },
    { kicker: 'DURATION AND TIMING', body: 'Usually continuing, but a short intense event can count (*Crown River Cruises*). Night-time pile-driving (*De Keyser’s Royal Hotel*)' },
    { kicker: 'SENSITIVITY', body: 'Abnormally sensitive use not protected: *Robinson v Kilvert* (1889); reframed as foreseeability in *Network Rail v Morris* (2004)' },
    { kicker: 'MALICE', body: 'Deliberate annoyance: *Christie v Davey* (1893), banging on a wall; *Hollywood Silver Fox Farm v Emmett* (1936)' },
  ], 2, { gap: 14, vgap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
  (y) => row(y, [
    { kicker: 'WHO CAN SUE', body: 'A proprietary interest, e.g. owner or tenant: *Hunter v Canary Wharf* (1997)', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'WHO CAN BE SUED', body: 'Creator; occupier who adopts or continues it (*Sedleigh-Denfield*); landlord who authorises it (*Tetley v Chitty*)', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
  (y) => row(y, [
    { kicker: 'DEFENCES', body: ['**Prescription:** 20 years as a nuisance to the claimant', '**Statutory authority:** *Allen v Gulf Oil* (1981)'], gap: 4, fill: C.cream, edge: C.olive },
    { kicker: 'NOT DEFENCES', kfill: C.rust, body: ['Coming to the nuisance (*Miller v Jackson*, 1977)', 'Public benefit'], gap: 4 },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'Four factors for unreasonable interference: locality (Sturges v Bridgman; St Helen’s Smelting; Coventry v Lawrence), duration and timing (Crown River Cruises; De Keyser’s), sensitivity (Robinson v Kilvert; Network Rail) and malice (Christie v Davey; Hollywood Silver Fox Farm). The parties (Hunter v Canary Wharf; Sedleigh-Denfield; Tetley v Chitty) and defences of prescription and statutory authority follow, with coming to the nuisance and public benefit not defences.',
'Locality, duration, sensitivity and malice decide whether neighbours must tolerate it.', H2.nui);

// 04 Rylands checklist
F('04-rylands-conditions', 'Rylands v Fletcher (1868): five conditions', 'Strict liability; a sub-species of private nuisance (Cambridge Water; Transco)', [
  (y) => steps(y, [
    { title: 'Brought onto the land and accumulated', body: 'Not things naturally there: *Giles v Walker* (1890), thistles.' },
    { title: 'Likely to do mischief if it escapes', body: '*Transco* (2003): an exceptionally high risk of danger.' },
    { title: 'Non-natural use', body: 'Special use bringing increased danger (*Rickards v Lothian*); a water pipe to flats is ordinary (*Transco*).' },
    { title: 'Escape to land outside the defendant’s control', body: 'None in *Read v J Lyons* (1947): injured inside the factory.' },
    { title: 'Damage of a foreseeable type', body: '*Cambridge Water* (1994).' },
  ], { size: 16 }),
  (y) => row(y, [
    { kicker: 'FAILED', kfill: C.rust, body: '*Stannard v Gore* (2012): tyres not exceptionally dangerous, and fire escaped, not the tyres' },
    { kicker: 'LIMITS', body: 'Claimant needs an interest in land; no personal injury claims' },
    { kicker: 'DEFENCES', body: 'Act of God; act of a stranger; consent; claimant’s default; statutory authority', fill: C.cream, edge: C.olive },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'Five conditions for Rylands v Fletcher: accumulation (Giles v Walker), something likely to do mischief (Transco), non-natural use (Rickards v Lothian; Transco), escape (Read v J Lyons) and damage of a foreseeable type (Cambridge Water). Stannard v Gore failed; the claimant needs an interest in land and cannot claim for personal injury; defences are listed.',
'All five conditions, an interest in land and no personal injury: a narrow tort.', H2.ryl);

// 05 Trespass to land: cross-section
F('05-trespass-to-land', 'Trespass to land', 'Direct and intentional interference with land in another’s possession', [
  (y) => {
    const gy = y + 290; let s = '';
    s += `<rect x="30" y="${y}" width="840" height="${gy - y}" fill="${C.tealLight}"/>` + `<rect x="30" y="${gy}" width="840" height="50" fill="#d8e3c6"/>` + `<line x1="30" y1="${gy}" x2="870" y2="${gy}" stroke="${C.ink}" stroke-width="3"/>`;
    s += `<line x1="450" y1="${y + 10}" x2="450" y2="${gy + 50}" stroke="${C.olive}" stroke-width="3" stroke-dasharray="9 6"/>` + T(440, gy + 34, 'defendant\u2019s land', { size: 16, weight: 700, anchor: 'end' }) + T(460, gy + 34, 'claimant\u2019s land', { size: 16, weight: 700 });
    s += `<rect x="250" y="${gy - 120}" width="150" height="120" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + `<line x1="400" y1="${gy - 100}" x2="520" y2="${gy - 100}" stroke="${C.ink}" stroke-width="4"/><rect x="490" y="${gy - 96}" width="56" height="30" rx="4" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + T(518, gy - 76, 'SIGN', { size: 15, weight: 700, anchor: 'middle' });
    s += `<line x1="110" y1="${gy}" x2="110" y2="${y + 66}" stroke="${C.ink}" stroke-width="5"/><line x1="90" y1="${y + 66}" x2="600" y2="${y + 66}" stroke="${C.ink}" stroke-width="5"/>`;
    s += `<rect x="740" y="${gy - 90}" width="110" height="90" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/><path d="M730,${gy - 90} L795,${gy - 135} L860,${gy - 90} Z" fill="${C.rust}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += `<path d="M400,${gy} L400,${gy - 50} L480,${gy} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>`;
    const lab = (x, yy, txt) => { const w = tw(txt, 15, 700) + 20; return `<rect x="${x}" y="${yy - 20}" width="${w}" height="28" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + T(x + 10, yy - 1, txt, { size: 15, weight: 700 }); };
    s += lab(470, y + 46, 'crane jib: Anchor Brewhouse (1987)');
    s += lab(470, gy - 120, 'overhanging sign: Kelsen (1957)');
    s += lab(492, gy - 18, 'buttresses left: Holmes v Wilson');
    s += T(860, y + 110, 'Airspace to a reasonable height', { size: 15, weight: 600, anchor: 'end', fill: C.tealDark }) + T(860, y + 130, '(Bernstein v Skyviews, 1978)', { size: 15, anchor: 'end', fill: C.tealDark, italic: true });
    return { s, h: gy + 50 - y };
  },
  (y) => row(y, [
    { kicker: 'ACTIONABLE PER SE', body: 'No damage needed. Only the entry need be intended: a mistake about ownership is no defence' },
    { kicker: 'EXCEEDING PERMISSION', body: '*The Calgarth* (1927): invited to use the staircase, not to slide down the banisters' },
    { kicker: 'CONTINUING TRESPASS', body: 'Something left on the land: a fresh cause of action each day (*Holmes v Wilson*, 1839)', fill: C.cream, edge: C.olive },
  ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'A cross-section of two plots. A crane jib (Anchor Brewhouse) and an overhanging sign (Kelsen) cross the boundary into the claimant’s airspace, which is protected to a reasonable height (Bernstein v Skyviews); buttresses left on the claimant’s land are a continuing trespass (Holmes v Wilson). Below: trespass is actionable per se, exceeding permission makes a trespasser (The Calgarth), and a continuing trespass gives a fresh cause of action each day.',
'Any direct crossing of the boundary, on the ground or in the air above it, is a trespass.', H2.tre);

// 06 Hollins worked example
F('06-hollins-worked-example', 'Worked example: Hollins Ltd’s quarry', 'Two claimants, two torts', [
  (y) => {
    let s = '';
    s += `<rect x="30" y="${y}" width="560" height="280" rx="14" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>` + T(50, y + 30, 'Hollins Ltd’s quarry', { size: 17, weight: 700 });
    s += `<rect x="590" y="${y}" width="280" height="280" rx="14" fill="#d8e3c6" stroke="${C.ink}" stroke-width="2.5"/>` + T(850, y + 30, 'Neighbour’s land', { size: 17, weight: 700, anchor: 'end' });
    s += `<ellipse cx="330" cy="${y + 150}" rx="150" ry="70" fill="${C.olive}" opacity="0.75" stroke="${C.ink}" stroke-width="2.5"/>` + T(330, y + 156, 'chemical lagoon', { size: 17, weight: 700, anchor: 'middle', fill: '#ffffff' });
    s += `<rect x="150" y="${y + 60}" width="360" height="180" rx="20" fill="none" stroke="${C.ink}" stroke-width="3" stroke-dasharray="14 6"/>`;
    s += `<rect x="140" y="${y + 135}" width="20" height="40" fill="${C.sand}"/>` + T(130, y + 128, 'broken fence', { size: 15, weight: 700, anchor: 'end', fill: C.rust });
    s += arrow(60, y + 210, 175, y + 160, { color: C.rust, marker: 'ahR', w: 3.5 }) + T(50, y + 240, 'Sam, 15, and', { size: 15, weight: 600 }) + T(50, y + 258, 'other teenagers', { size: 15, weight: 600 });
    s += path(`M480,${y + 170} C540,${y + 210} 600,${y + 200} 690,${y + 190}`, { stroke: C.olive, w: 5, extra: 'stroke-dasharray="4 8"' }) + arrow(680, y + 190, 712, y + 190, { color: C.olive, marker: 'ahO', w: 3 });
    s += `<circle cx="740" cy="${y + 190}" r="26" fill="${C.blue}" stroke="${C.ink}" stroke-width="2.5"/>` + T(740, y + 238, 'well', { size: 16, weight: 700, anchor: 'middle' }) + T(610, y + 250, 'seepage', { size: 15, weight: 600, fill: C.olive });
    const r = row(y + 300, [
      { kicker: 'SAM: OLA 1984', body: ['Trespasser, so the 1984 Act', 's1(3): knows of the danger and regular entry; protection expected', 's1(4) breached: repairing the fence is cheap', 'Unlike *Tomlinson*, the danger is the state of the premises'], bullets: true, gap: 3, fill: C.tealLight, edge: C.tealDark },
      { kicker: 'NEIGHBOUR: RYLANDS v FLETCHER', body: ['Waste accumulated and dangerous', 'Non-natural use', 'Escaped, causing foreseeable damage to land (*Cambridge Water*)', 'Private nuisance is an alternative'], bullets: true, gap: 3, fill: C.cream, edge: C.olive },
    ], { gap: 14, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } });
    return { s: s + r.s, h: 300 + r.h };
  },
],
'A plan of the quarry: a fenced chemical lagoon with a broken section through which Sam and other teenagers enter, and waste seeping under the boundary into the neighbour’s well. Sam claims under the 1984 Act because the s1(3) conditions are met and the duty is breached; the neighbour claims under Rylands v Fletcher, with private nuisance as an alternative.',
'Status decides the claim: Sam under the 1984 Act; the neighbour under Rylands.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
