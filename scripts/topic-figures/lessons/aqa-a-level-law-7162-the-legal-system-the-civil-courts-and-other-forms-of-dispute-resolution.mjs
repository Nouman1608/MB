import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-the-legal-system-the-civil-courts-and-other-forms-of-dispute';
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
  first: '## The civil courts at first instance',
  claim: '## A claim from start to finish',
  track: '## The track system',
  appeal: '## The appeal system',
  trib: '## Tribunals',
  med: '## Mediation',
  neg: '## Negotiation',
  we: '## Worked example: advising on a forum',
};

// 01 First-instance courts
F('01-first-instance-courts', 'Civil courts at first instance', '', [
  (y) => {
    const left = card(30, y, 300, { kicker: 'COUNTY COURT', title: 'One national court, many hearing centres', body: ['The great majority of civil claims: contract, tort, debt, housing, family-related money', 'District judges and circuit judges'], bullets: true, size: 16, tsize: 18, pad: 18, bfill: C.ink, fill: C.tealLight, edge: C.tealDark, gap: 5 });
    const hc = 350, hw = 520;
    const head = card(hc, y, hw, { kicker: 'HIGH COURT', title: 'London and regional centres: three divisions', size: 16, tsize: 18, pad: 18, nobox: true });
    const r = row(y + head.h, [
      { title: 'King’s Bench', body: 'Higher-value or complex contract and tort; Commercial Court' },
      { title: 'Chancery', body: 'Business, property, trusts, insolvency, probate' },
      { title: 'Family', body: 'Complex family cases' },
    ], { x: hc + 14, w: hw - 28, gap: 10, vcenter: false, card: { size: 15, tsize: 17, pad: 12, bfill: C.ink } });
    const H = Math.max(left.h, head.h + r.h + 14);
    const L = card(30, y, 300, { kicker: 'COUNTY COURT', title: 'One national court, many hearing centres', body: ['The great majority of civil claims: contract, tort, debt, housing, family-related money', 'District judges and circuit judges'], bullets: true, size: 16, tsize: 18, pad: 18, bfill: C.ink, fill: C.tealLight, edge: C.tealDark, gap: 5, minH: H });
    return { s: L.s + `<rect x="${hc}" y="${y}" width="${hw}" height="${H}" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + head.s + r.s, h: H };
  },
  (y) => {
    const H = 170; let s = panel(30, y, 840, H) + T(50, y + 32, 'WHERE DOES A MONEY CLAIM START?', { size: 15, weight: 700, fill: C.tealDark });
    const x1 = 60, x2 = 840, sc = (v) => x1 + (v / 180000) * (x2 - x1);
    const bar = (yy, lab, lim) => `<rect x="${x1}" y="${yy}" width="${sc(lim) - x1}" height="34" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` + `<rect x="${sc(lim)}" y="${yy}" width="${x2 - sc(lim)}" height="34" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>` + T(x1 + 10, yy + 23, lab, { size: 16, weight: 700 }) + T(sc(lim) + 10, yy + 23, `High Court possible: over £${lim.toLocaleString('en-GB')}`, { size: 16, weight: 600 });
    s += bar(y + 50, 'Most money claims: County Court', 100000) + bar(y + 104, 'Personal injury', 50000);
    return { s, h: H };
  },
],
'The County Court, one national court at many hearing centres, hears most civil claims before district and circuit judges. The High Court has three divisions: King’s Bench (higher-value contract and tort, Commercial Court), Chancery (business, property, trusts, insolvency, probate) and Family. A money claim normally starts in the High Court only if worth more than £100,000, or £50,000 for personal injury.',
'Most claims start in the County Court; only high-value claims start in the High Court.', H2.first);

// 02 Claim timeline
F('02-claim-start-to-finish', 'A claim from start to finish', 'Civil Procedure Rules 1998, after Lord Woolf’s Access to Justice (1996)', [
  (y) => steps(y, [
    { title: 'Pre-action conduct', body: 'Follow the pre-action protocol: exchange information, try to settle, consider alternatives. Ignoring it risks costs penalties.' },
    { title: 'Issuing', body: 'Claim form and particulars of claim; court fee; many money claims issued online' },
    { title: 'Response', body: 'Admit, file a defence, or do nothing (claimant may ask for judgment in default)' },
    { title: 'Allocation', body: 'If defended: questionnaire, then allocation to a track' },
    { title: 'Case management and trial', body: 'Timetable for disclosure, witness statements and experts; then the trial' },
    { title: 'Enforcement', body: 'If the loser does not pay: e.g. instructing enforcement agents' },
  ], { size: 16, tsize: 18, highlight: 3, gap: 10, pad: 14 }),
  (y) => note(y, 'Overriding objective', 'Deal with cases justly and at proportionate cost.', { size: 17, align: 'middle' }),
],
'Six numbered stages of a civil claim: pre-action conduct under a protocol, issuing a claim form, the defendant’s response, allocation to a track, case management and trial, and enforcement. The Civil Procedure Rules 1998 aim to deal with cases justly and at proportionate cost.',
'Settlement is expected before issue; a defended claim is then allocated to a track.', H2.claim);

// 03 Tracks
F('03-track-system', 'The track system', 'Normal value of the claim', [
  (y) => {
    const H = 250; let s = panel(30, y, 840, H);
    const segs = [
      { lab: 'Small claims', v: 'up to £10,000', f: C.tealLight, w: 170 },
      { lab: 'Fast track', v: '£10,000–£25,000', f: C.teal, w: 190 },
      { lab: 'Intermediate', v: '£25,000–£100,000', f: C.cream, w: 220 },
      { lab: 'Multi-track', v: 'over £100,000 or complex', f: C.mustard, w: 220 },
    ];
    let x = 50;
    segs.forEach((g) => {
      s += `<rect x="${x}" y="${y + 30}" width="${g.w}" height="74" fill="${g.f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + g.w / 2, y + 62, g.lab, { size: 19, weight: 700, anchor: 'middle' }) + T(x + g.w / 2, y + 88, g.v, { size: 15, anchor: 'middle' });
      x += g.w;
    });
    const feats = [
      'District judge; informal; parties often act for themselves; costs generally not recoverable',
      'Trial normally no longer than one day; limited experts; fixed costs',
      'From October 2023; trial up to three days; limited experts; fixed costs',
      'Active case management; County Court or High Court',
    ];
    x = 50;
    segs.forEach((g, i) => { s += para(x + 10, y + 130, feats[i], g.w - 20, { size: 15, fill: C.ink, lh: 19 }).s; x += g.w; });
    x = 50; segs.slice(0, 3).forEach((g) => { x += g.w; s += `<line x1="${x}" y1="${y + 112}" x2="${x}" y2="${y + H - 16}" stroke="${C.panelEdge}" stroke-width="2"/>`; });
    return { s, h: H };
  },
  (y) => card(30, y, 840, { kicker: 'SMALL CLAIMS: LOWER LIMITS', body: 'Personal injury generally up to £1,000; road traffic injury up to £5,000; housing disrepair up to £1,000. Most defended money claims go first to the free small claims mediation service.', size: 16, pad: 18, bfill: C.ink }),
  (y) => {
    const lab = T(450, y + 18, 'VALUE IS NOT THE ONLY FACTOR', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
    const c = chips(y + 32, ['Complexity of facts and law', 'Number of parties', 'Amount of oral evidence', 'Importance to non-parties', 'The parties’ views'], { size: 16, weight: 600, fill: C.panel });
    const n = T(450, y + 32 + c.h + 30, 'A complex £20,000 claim may go to a higher track.', { size: 16, anchor: 'middle', italic: true });
    return { s: lab + c.s + n, h: 32 + c.h + 34 };
  },
],
'Four tracks along a value scale: small claims up to £10,000 (informal, costs generally not recoverable), fast track £10,000 to £25,000 (one-day trial), intermediate track £25,000 to £100,000 from October 2023 (up to three days) and multi-track over £100,000 or complex. Small claims limits are lower for personal injury, road traffic injury and housing disrepair. Complexity, parties, oral evidence, wider importance and the parties’ views also matter.',
'Value sets the normal track, but complexity can push a claim higher.', H2.track);

// 04 Appeals
F('04-appeal-routes', 'Civil appeal routes', 'Almost every appeal needs permission; it is not a rehearing', [
  (y) => {
    const W = 360, x = 270, h = 58, gap = 34;
    const L = [['Supreme Court', 'point of law of general public importance', C.mustard], ['Court of Appeal (Civil Division)', '', C.cream], ['High Court judge', '', C.tealLight], ['Circuit judge (County Court)', '', C.tealLight], ['District judge (County Court)', '', C.panel]];
    let s = '';
    L.forEach(([a, b, f], i) => {
      const yy = y + i * (h + gap);
      s += `<rect x="${x}" y="${yy}" width="${W}" height="${h}" rx="12" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + W / 2, yy + (b ? 26 : 36), a, { size: 18, weight: 700, anchor: 'middle' }) + (b ? T(x + W / 2, yy + 47, b, { size: 15, anchor: 'middle' }) : '');
      if (i > 0) s += arrow(x + W / 2, yy - 4, x + W / 2, yy - gap + 6);
    });
    // high court -> CA note: High court as first instance
    s += T(x + W + 20, y + 2 * (h + gap) + 26, 'also a first-instance', { size: 15, fill: C.muted }) + T(x + W + 20, y + 2 * (h + gap) + 46, 'court for big claims', { size: 15, fill: C.muted });
    // leapfrog
    const yh = y + 2 * (h + gap) + h / 2, ys = y + h / 2;
    s += path(`M${x},${yh} C${x - 120},${yh} ${x - 120},${ys} ${x - 6},${ys}`, { stroke: C.olive, w: 3.5, extra: 'stroke-dasharray="9 7" marker-end="url(#ahO)"' });
    s += T(x - 130, yh - 70, 'Leapfrog', { size: 17, weight: 700, anchor: 'end', fill: C.olive }) + T(x - 130, yh - 48, 'point of law of', { size: 15, anchor: 'end', fill: C.olive }) + T(x - 130, yh - 28, 'general public', { size: 15, anchor: 'end', fill: C.olive }) + T(x - 130, yh - 8, 'importance', { size: 15, anchor: 'end', fill: C.olive });
    return { s, h: 5 * h + 4 * gap };
  },
  (y) => row(y, [
    { kicker: 'GROUNDS', body: 'Decision **wrong**, or **unjust because of a serious procedural irregularity**' },
    { kicker: 'SECOND APPEALS', body: 'Court of Appeal only if an **important point of principle or practice** or **some other compelling reason**' },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink } }),
],
'An appeal ladder: district judge to circuit judge, circuit judge to High Court judge, High Court to Court of Appeal (Civil Division), Court of Appeal to Supreme Court on a point of law of general public importance. A leapfrog route goes from the High Court straight to the Supreme Court. Appeals need permission and succeed only if the decision was wrong or unjust through serious procedural irregularity; second appeals need an important point of principle or practice or another compelling reason.',
'Each appeal goes one level up, with permission, and is not a rehearing.', H2.appeal, { gap: 26 });

// 05 Tribunal structure
F('05-tribunal-structure', 'The tribunal structure', 'Tribunals, Courts and Enforcement Act 2007, after Franks (1957) and Leggatt (2001)', [
  (y) => {
    const fC = chips(y + 340, ['Social Entitlement', 'Immigration and Asylum', 'Tax', 'Property', 'General Regulatory', 'Health, Education and Social Care', 'War Pensions and Armed Forces Compensation'], { x: 46, w: 528, size: 15, weight: 600, fill: C.panel, align: 'start', gap: 8 });
    const fH = 52 + fC.h + 16;
    const uC = chips(y + 170, ['Administrative Appeals', 'Immigration and Asylum', 'Tax and Chancery', 'Lands'], { x: 46, w: 528, size: 15, weight: 600, fill: C.panel, align: 'start', gap: 8 });
    const uH = 52 + uC.h + 16;
    let s = '';
    s += `<rect x="30" y="${y}" width="560" height="74" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(310, y + 34, 'Court of Appeal', { size: 20, weight: 700, anchor: 'middle' }) + T(310, y + 58, 'further appeal, with permission', { size: 15, anchor: 'middle' });
    s += `<rect x="30" y="${y + 120}" width="560" height="${uH}" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + T(46, y + 150, 'UPPER TRIBUNAL: appeals on points of law; some judicial review', { size: 15, weight: 700, fill: C.olive }) + uC.s;
    const fy = y + 120 + uH + 46;
    const fC2 = chips(fy + 52 - 12, ['Social Entitlement', 'Immigration and Asylum', 'Tax', 'Property', 'General Regulatory', 'Health, Education and Social Care', 'War Pensions and Armed Forces Compensation'], { x: 46, w: 528, size: 15, weight: 600, fill: C.panel, align: 'start', gap: 8 });
    s += `<rect x="30" y="${fy}" width="560" height="${fH}" rx="14" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(46, fy + 30, 'FIRST-TIER TRIBUNAL: hears cases at first instance', { size: 15, weight: 700, fill: C.tealDark }) + fC2.s;
    s += arrow(310, y + 116, 310, y + 80) + arrow(310, fy - 4, 310, y + 120 + uH + 6);
    // employment side
    const ex = 620, ew = 250;
    s += `<rect x="${ex}" y="${y}" width="${ew}" height="${fy + fH - y}" rx="14" fill="${C.panel}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="8 6"/>`;
    s += T(ex + ew / 2, y + 32, 'OUTSIDE THE TWO TIERS', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
    const eb = (yy, lab) => `<rect x="${ex + 20}" y="${yy}" width="${ew - 40}" height="64" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + para(ex + ew / 2, yy + 27, lab, ew - 60, { size: 17, weight: 700, anchor: 'middle', fill: C.ink, lh: 21 }).s;
    s += eb(y + 120, 'Employment Appeal Tribunal') + eb(fy, 'Employment Tribunals') + arrow(ex + ew / 2, fy - 4, ex + ew / 2, y + 190);
    s += para(ex + ew / 2, fy + 92, 'First: **ACAS early conciliation** before most claims', ew - 40, { size: 15, anchor: 'middle', fill: C.ink }).s;
    return { s, h: fy + fH - y };
  },
  (y) => note(y, '', 'Led by the **Senior President of Tribunals**. Panels: a tribunal judge, and in some jurisdictions specialist members such as doctors.', { size: 16, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'The First-tier Tribunal hears cases at first instance in chambers such as Social Entitlement, Immigration and Asylum, Tax and Property. Appeals on points of law go to the Upper Tribunal (Administrative Appeals, Immigration and Asylum, Tax and Chancery, Lands), then with permission to the Court of Appeal. Employment Tribunals and the Employment Appeal Tribunal sit outside the two tiers, with ACAS early conciliation first.',
'Two tiers of chambers, then the Court of Appeal; employment sits alongside.', H2.trib);

// 06 Courts and mediation
F('06-mediation-cases', 'Courts and mediation', 'A neutral mediator helps the parties reach their own agreement', [
  (y) => {
    const H = 250; let s = panel(30, y, 840, H);
    const ly = y + 70;
    s += `<line x1="70" y1="${ly}" x2="830" y2="${ly}" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)"/>`;
    const ev = (x, yr, nm, lines, fill) => `<circle cx="${x}" cy="${ly}" r="12" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + T(x, ly - 22, yr, { size: 19, weight: 700, anchor: 'middle' }) + para(x, ly + 40, `*${nm}*`, 240, { size: 17, weight: 700, anchor: 'middle', fill: C.ink }).s + para(x, ly + 88, lines, 230, { size: 16, anchor: 'middle', fill: C.ink }).s;
    s += ev(170, '2002', 'Dunnett v Railtrack', 'Winner denied costs for refusing to consider mediation', C.tealLight);
    s += ev(450, '2004', 'Halsey v Milton Keynes NHS Trust', 'Courts cannot compel mediation, but can penalise unreasonable refusal in costs', C.cream);
    s += ev(730, '2023', 'Churchill v Merthyr Tydfil CBC', 'Courts can order non-court dispute resolution if fair trial not impaired and proportionate', C.mustard);
    return { s, h: H };
  },
  (y) => row(y, [
    { kicker: 'USES', body: ['Small money claims (court mediation service)', 'Neighbour and business disputes', 'Family: usually a mediation information and assessment meeting first'], bullets: true },
    { kicker: 'STRENGTHS', body: 'Cheap, quick, private, flexible outcomes, preserves relationships', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'WEAKNESSES', kfill: C.rust, body: 'No guarantee of settlement; a weaker party may be pressured; no precedent' },
  ], { gap: 14, vcenter: false, fr: [1.3, 1, 1], card: { size: 16, pad: 16, bfill: C.ink, gap: 4 } }),
],
'A timeline of court attitudes to mediation: Dunnett v Railtrack (2002), a winner denied costs for refusing to consider mediation; Halsey (2004), courts cannot compel mediation but can penalise unreasonable refusal; Churchill v Merthyr Tydfil (2023), courts can order non-court dispute resolution if fair and proportionate. Below: uses, strengths and weaknesses of mediation.',
'Courts moved from encouraging mediation to being able to order it.', H2.med);

// 07 Who decides?
F('07-who-decides', 'Who decides the outcome?', '', [
  (y) => {
    const H = 300; let s = panel(30, y, 840, H);
    const fig = (x, yy, c) => `<circle cx="${x}" cy="${yy}" r="11" fill="${c}" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M${x},${yy + 11} L${x},${yy + 40} M${x - 14},${yy + 22} L${x + 14},${yy + 22} M${x},${yy + 40} L${x - 12},${yy + 60} M${x},${yy + 40} L${x + 12},${yy + 60}`, { w: 2.5 });
    const cols = [150, 450, 750];
    s += T(150, y + 38, 'Negotiation', { size: 21, weight: 700, anchor: 'middle' }) + T(450, y + 38, 'Mediation', { size: 21, weight: 700, anchor: 'middle' }) + T(750, y + 38, 'Tribunal or court', { size: 21, weight: 700, anchor: 'middle' });
    s += fig(110, y + 80, C.tealLight) + fig(190, y + 80, C.cream) + path(`M128,${y + 102} L172,${y + 102}`, { w: 3, extra: 'marker-end="url(#ah)" marker-start="url(#ah)"' });
    s += fig(395, y + 80, C.tealLight) + fig(505, y + 80, C.cream) + `<circle cx="450" cy="${y + 70}" r="11" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M450,${y + 81} L450,${y + 110} M450,${y + 110} L438,${y + 130} M450,${y + 110} L462,${y + 130} M436,${y + 92} L464,${y + 92}`, { w: 2.5 }) + T(450, y + 162, 'neutral mediator', { size: 15, anchor: 'middle', fill: C.muted });
    s += `<rect x="700" y="${y + 66}" width="100" height="40" rx="6" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(750, y + 92, 'judge', { size: 16, weight: 700, anchor: 'middle' }) + fig(705, y + 116, C.tealLight) + fig(795, y + 116, C.cream);
    s += `<line x1="70" y1="${y + 210}" x2="830" y2="${y + 210}" stroke="${C.ink}" stroke-width="3" marker-end="url(#ah)"/>`;
    s += T(70, y + 196, 'parties keep full control', { size: 16, weight: 600, fill: C.tealDark }) + T(830, y + 196, 'a binding decision is imposed', { size: 16, weight: 600, fill: C.rust, anchor: 'end' });
    const sub = ['Parties or lawyers agree a settlement', 'Agreement binding only if made a contract or court order', 'Tribunals make binding decisions'];
    cols.forEach((x, i) => { s += para(x, y + 244, sub[i], 250, { size: 16, anchor: 'middle', fill: C.ink }).s; });
    return { s, h: H };
  },
  (y) => card(30, y, 840, { kicker: 'NEGOTIATION AND PART 36 OFFERS', body: 'Most civil claims settle before trial. A party who rejects a Part 36 offer and then fails to do better at trial faces costs consequences. Strengths: private, cheapest, full control, any time. Weaknesses: unequal bargaining power, no neutral helper, may stall.', size: 16, pad: 18, bfill: C.ink, fill: C.cream, edge: C.olive }),
],
'Three methods on a scale of control. In negotiation the parties or their lawyers agree a settlement themselves; in mediation a neutral mediator helps them reach their own agreement, binding only if made a contract or court order; a tribunal or court imposes a binding decision. Part 36 offers encourage negotiated settlement by penalising a party who rejects an offer and does no better at trial.',
'The more neutral help is added, the less control the parties keep.', H2.neg);

// 08 Kim
F('08-worked-example-kim', 'Worked example: Kim is owed £6,500', 'A decorator’s client says the work was poor', [
  (y) => steps(y, [
    { title: 'Negotiation first', body: 'Letter before claim; try to agree a reduced sum' },
    { title: 'Pre-action conduct', body: 'Expected by the court; avoids costs penalties' },
    { title: 'Issue in the County Court: small claims track', body: 'Under £10,000' },
    { title: 'Mediation', body: 'Defended small claim normally referred to the free mediation service: quick, informal, keeps future work possible' },
    { title: 'Small claims hearing', body: 'District judge; informal; Kim can represent herself; costs generally not recoverable' },
    { title: 'Appeal', body: 'Only with permission, to a circuit judge, if the decision was wrong' },
  ], { size: 16, tsize: 18, highlight: 2, gap: 10, pad: 14 }),
],
'Kim’s route in six steps: negotiate with a letter before claim; follow pre-action conduct; issue in the County Court on the small claims track as the claim is under £10,000; the court’s free mediation service; a small claims hearing before a district judge; and an appeal only with permission to a circuit judge.',
'Negotiate, mediate, then the small claims track: the right forum for £6,500.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
