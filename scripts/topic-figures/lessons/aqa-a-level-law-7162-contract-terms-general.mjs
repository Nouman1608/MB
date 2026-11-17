import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-contract-terms-general';
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
  p1: '## Part 1: express terms',
  p2: '## Part 2: implied terms',
  p3: '## Part 3: conditions, warranties and innominate terms',
  we: '## Worked problem',
};

// 01 Term or representation
F('01-term-or-representation', 'Term or representation?', 'The parties’ intention, judged objectively', [
  (y) => {
    // balance beam
    let s = path(`M450,${y + 120} L420,${y + 175} L480,${y + 175} Z`, { fill: C.ink, stroke: C.ink, w: 2 });
    s += `<line x1="120" y1="${y + 111}" x2="780" y2="${y + 111}" stroke="${C.ink}" stroke-width="6" stroke-linecap="round"/>`;
    s += `<circle cx="450" cy="${y + 111}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
    s += card(30, y, 360, { title: 'TERM', body: 'Part of the contract: claim for breach', align: 'middle', tsize: 22, size: 16, fill: C.tealLight, edge: C.tealDark, pad: 14 }).s;
    s += card(510, y, 360, { title: 'REPRESENTATION', body: 'Induces it only: at most misrepresentation', align: 'middle', tsize: 22, size: 16, fill: C.cream, edge: C.olive, pad: 14 }).s;
    return { s, h: 180 };
  },
  (y) => row(y, [
    { kicker: 'POINTS TO A TERM', title: '', body: ['Statement vital to the claimant: *Bannerman v White* (1861), hops and sulphur', 'Firm assurance to a direct question: *Couchman v Hill* (1947), heifer “unserved”', 'Discourages checks: *Schawel v Reade* (1913), “you need not look for anything”', 'Maker has special knowledge: *Dick Bentley v Harold Smith Motors* (1965), dealer and mileage'], fill: C.tealLight, edge: C.tealDark },
    { kicker: 'POINTS TO A REPRESENTATION', kfill: C.olive, title: '', body: ['Maker lacks special knowledge: *Oscar Chess v Williams* (1957), private seller relying on documents', 'Long gap before the contract: *Routledge v McKay* (1954), a week earlier', 'Written contract leaves it out: *Routledge v McKay*'], fill: C.cream, edge: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 16, bullets: true, bfill: C.ink, gap: 8 } }),
],
'A balance between term and representation. Factors pointing to a term: the statement was vital (Bannerman v White), a firm assurance (Couchman v Hill), a statement discouraging checks (Schawel v Reade), and the maker’s special knowledge (Dick Bentley). Factors pointing to a representation: no special knowledge (Oscar Chess v Williams), a long gap before contracting, and omission from the written contract (Routledge v McKay).',
'Importance, assurance and expertise point to a term; delay and omission to a representation.', H2.p1);

// 02 Collateral contract
F('02-collateral-contract', 'The parol evidence rule and collateral contracts', '', [
  (y) => note(y, 'General rule', 'Where a contract is in writing, evidence of other oral terms cannot be added to it.', { fill: C.panel, edge: C.panelEdge, bfill: C.muted }),
  (y) => {
    let s = '';
    const a = card(30, y, 360, { kicker: 'MAIN CONTRACT (WRITTEN)', title: 'Lease restricting use to business purposes', size: 16, tsize: 19, minH: 130, vcenter: true });
    const b = card(510, y, 360, { kicker: 'COLLATERAL CONTRACT (ORAL)', title: 'Assurance: the tenant may continue sleeping at the premises', size: 16, tsize: 19, minH: 130, vcenter: true, fill: C.tealLight, edge: C.tealDark });
    s += a.s + b.s + arrow(504, y + 65, 396, y + 65, { w: 3.5, color: C.tealDark, marker: 'ahT' }) + T(450, y + 50, 'in return', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }) + T(450, y + 92, 'for signing', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    return { s, h: 130 };
  },
  (y) => note(y, '', '*City and Westminster Properties v Mudd* (1959): the oral assurance was **enforced** as a separate contract.', { size: 17, align: 'middle' }),
],
'The parol evidence rule says oral terms cannot be added to a written contract. The collateral contract exception: in City and Westminster Properties v Mudd, an oral assurance that the tenant could keep sleeping at the premises, given in return for signing a business-use lease, was enforced as a separate contract.',
'An oral promise given in return for signing can be enforced as a separate contract.', H2.p1);

// 03 Implied terms map
F('03-implied-terms', 'How terms are implied', '', [
  (y) => card(30, y, 840, { kicker: 'IMPLIED IN FACT: into this particular contract', title: 'The parties must have intended it', body: ['**Business efficacy:** *The Moorcock* (1889), the jetty owner took reasonable care that the river bed was safe at low tide', '**Officious bystander:** *Shirlaw v Southern Foundries* (1939), “oh, of course”', '**Necessity, not reasonableness:** *Marks and Spencer v BNP Paribas* (2015)'], bullets: true, gap: 6, size: 16, tsize: 19, fill: C.tealLight, edge: C.tealDark, bfill: C.ink }),
  (y) => row(y, [
    { kicker: 'IMPLIED IN LAW', title: 'All contracts of a type', body: '*Liverpool CC v Irwin* (1977): reasonable care of common parts such as lifts and stairs in council flats' },
    { kicker: 'BY CUSTOM', title: 'Trade or locality', body: '*Hutton v Warren* (1836): outgoing farm tenant’s allowance for seed and labour' },
    { kicker: 'BY STATUTE', title: 'Consumer Rights Act 2015', body: 'Satisfactory quality, reasonable care and skill (own row)' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18 } }),
],
'Ways terms are implied. In fact, into a particular contract: business efficacy (The Moorcock), the officious bystander (Shirlaw v Southern Foundries), and necessity rather than reasonableness (Marks and Spencer v BNP Paribas). In law, into all contracts of a type (Liverpool City Council v Irwin). By custom (Hutton v Warren). By statute, such as the Consumer Rights Act 2015.',
'Implied in fact needs necessity; implied in law covers a whole type of contract.', H2.p2);

// 04 Classification order
F('04-classifying-a-term', 'How is a term classified?', 'Work down the list', [
  (y) => steps(y, [
    { title: 'Statute', body: 'Statute may classify the term.' },
    { title: 'The parties', body: 'Their label is not conclusive. *Schuler v Wickman* (1974): weekly visits called a “condition” were not one. *Lombard North Central v Butterworth* (1987): punctual payment “of the essence” was effective.' },
    { title: 'Precedent', body: '*The Mihalis Angelos* (1971): “expected ready to load” is a condition. *Bunge v Tradax* (1981): time clauses in mercantile contracts generally conditions.' },
    { title: 'Otherwise: innominate', body: 'The court looks at the effect of the breach.' },
  ], { highlight: 3, size: 16, tsize: 19 }),
],
'Four steps to classify a term: statute; the parties’ label, which is not conclusive (Schuler v Wickman) but can be effective (Lombard North Central v Butterworth); precedent (The Mihalis Angelos; Bunge v Tradax on time clauses); otherwise the term is innominate and the effect of the breach decides.',
'Statute, the parties, precedent; if none decides, the term is innominate.', H2.p3);

// 05 Hong Kong Fir
F('05-hong-kong-fir', 'The innominate term test: Hong Kong Fir (1962)', 'Did the breach deprive the charterers of substantially the whole benefit?', [
  (y) => {
    let s = '';
    const x0 = 60, W = 780, frac = 20 / (24 * 52 / 12);
    s += T(x0, y + 18, '24-month charter (bar to scale)', { size: 16, weight: 700, fill: C.muted });
    s += `<rect x="${x0}" y="${y + 32}" width="${W}" height="56" rx="8" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += `<rect x="${x0}" y="${y + 32}" width="${W * frac}" height="56" rx="8" fill="${C.cream}" stroke="${C.rust}" stroke-width="2.5"/>`;
    s += T(x0 + (W * frac) / 2, y + 66, '~20 weeks', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
    s += T(x0 + W * frac + (W * (1 - frac)) / 2, y + 66, 'much of the charter remained', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += T(x0, y + 114, 'out of action: incompetent engine crew', { size: 16, fill: C.rust });
    return { s, h: 120 };
  },
  (y) => row(y, [
    { kicker: 'RESULT', title: 'Not substantially the whole benefit lost', body: 'No right to terminate: damages only', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'APPLIED', title: 'Cehave v Bremer (The Hansa Nord, 1976)', body: 'Partly damaged citrus pulp pellets still used for their purpose: buyers could not reject' },
  ], { gap: 14, card: { size: 16, tsize: 18 } }),
],
'A bar for a 24-month charter with about 20 weeks shaded as out of action because of an incompetent engine crew. Much of the charter remained, so the charterers were not deprived of substantially the whole benefit and could claim damages only. The Hansa Nord applied the same approach to partly damaged citrus pulp pellets.',
'Ask how serious the consequences were, not what the term was called.', H2.p3);

// 06 Certainty vs fairness
F('06-certainty-vs-fairness', 'Conditions or innominate terms?', 'The courts balance certainty against fairness', [
  (y) => row(y, [
    { kicker: 'CERTAINTY: CONDITIONS', title: 'Parties know in advance they can terminate', body: ['Risk: escape a bad bargain on a technicality', '*Arcos v Ronaasen* (1933): staves slightly thicker than half an inch, fit for purpose, rejected; real reason a fall in market price'], fill: C.cream, edge: C.olive },
    { kicker: 'FAIRNESS: INNOMINATE TERMS', title: 'Remedy matches the seriousness of the breach', body: ['Reluctance to allow rejection for trivial breaches', '*Hong Kong Fir*; *Reardon Smith Line v Hansen-Tangen* (1976)'], fill: C.tealLight, edge: C.tealDark },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 19, bullets: true, bfill: C.ink, gap: 6 } }),
  (y) => note(y, 'The balance', 'Commercially important time clauses are treated as conditions (*Bunge*); most other terms as innominate.', { size: 17, fill: C.panel, edge: C.panelEdge }),
],
'Two sides. Conditions give certainty but can let a party escape a bad bargain on a technicality, as in Arcos v Ronaasen. Innominate terms give fairness by matching the remedy to the breach (Hong Kong Fir; Reardon Smith Line). The courts treat commercially important time clauses as conditions (Bunge) and most other terms as innominate.',
'Conditions give certainty; innominate terms give fairness.', H2.p3);

// 07 Worked problem
F('07-ink-tshirts-problem', 'Worked problem: Kofi’s T-shirts', '', [
  (y) => card(30, y, 840, { kicker: 'FACTS', body: 'Kofi must supply 1,000 printed T-shirts to Ink Ltd for a festival on 1 July, “delivery by 20 June”, “colours to match sample”. He delivers on 24 June; the blue is slightly lighter than the sample but usable. Ink wants to terminate.', size: 17, bfill: C.ink, fill: C.tealLight, edge: C.tealDark }),
  (y) => row(y, [
    { kicker: 'DELIVERY DATE', title: 'Probably a condition', body: 'Commercial time clauses are usually conditions (*Bunge v Tradax*). Four days late but before the festival: if a condition, Ink may terminate even though little harm was caused.' },
    { kicker: 'COLOUR CLAUSE', title: 'Probably innominate', body: 'Not labelled a condition. A slight difference does not deprive Ink of substantially the whole benefit (*Hong Kong Fir*; *Hansa Nord*): damages only, if any loss.' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 19 } }),
  (y) => note(y, 'Advice', 'Ink’s strongest ground is late delivery, if it is a condition; otherwise it must accept the goods and claim damages.', { size: 17 }),
],
'Kofi delivers T-shirts four days late and in a slightly lighter blue. The delivery date is probably a condition (Bunge v Tradax), so Ink may terminate. The colour clause is probably innominate and the slight difference does not deprive Ink of substantially the whole benefit (Hong Kong Fir; Hansa Nord), so damages only.',
'Classify each term separately, then decide termination or damages.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
