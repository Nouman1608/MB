import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-the-rules-of-tort-law';
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
  what: '## What a tort claim is',
  src: '## Where the rules come from',
  prove: '## Who has to prove what',
  fault: '## Liability and fault across the torts',
  def: '## Defences and remedies as part of the rules',
  we: '## Worked example',
};

// 01 Tort vs crime
F('01-tort-and-crime', 'One incident, two separate proceedings', 'A driver kills a pedestrian', [
  (y) => {
    const ev = card(300, y, 300, { title: 'The same facts', align: 'middle', fill: C.mustard, edge: C.ink, tsize: 19, pad: 14 });
    const yb = y + ev.h + 44;
    const r = row(yb, [
      { kicker: 'TORT: A CIVIL WRONG', title: 'Negligence claim', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'CRIME', kfill: C.rust, title: 'Criminal charge', fill: C.panel },
    ], { gap: 16, card: { tsize: 19, pad: 16, align: 'middle' } });
    const ar = arrow(400, y + ev.h + 4, 240, yb - 4) + arrow(500, y + ev.h + 4, 660, yb - 4);
    return { s: ev.s + ar + r.s, h: yb + r.h - y };
  },
  (y) => table(y, [{ w: 0.8, head: '' }, { w: 1.2, head: 'Tort', hfill: C.teal }, { w: 1.2, head: 'Crime', hfill: C.cream }], [
    ['Who brings it', 'The claimant sues the defendant', 'Usually the Crown Prosecution Service'],
    ['Standard of proof', 'Balance of probabilities', 'Beyond reasonable doubt'],
    ['Outcome', 'Liability and a remedy', 'Conviction and sentence'],
    ['Purpose', 'Compensation and protection of rights', 'Punishment and protection of society'],
  ], { size: 16, hsize: 18 }),
  (y) => note(y, '', '**Common mistake:** using criminal language (guilty, prosecution, sentence) in a tort answer.', { size: 17, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'The same incident, a driver killing a pedestrian, can lead to a negligence claim and a criminal charge, which are separate. A table compares them: the claimant sues in tort but the CPS usually prosecutes; tort uses the balance of probabilities and crime beyond reasonable doubt; tort gives liability and a remedy, crime a conviction and sentence; tort aims at compensation, crime at punishment.',
'Tort compensates the claimant; crime punishes on behalf of society.', H2.what);

// 02 Sources
F('02-sources-of-tort', 'Where the tort rules come from', '', [
  (y) => row(y, [
    { kicker: 'COMMON LAW: BUILT CASE BY CASE', body: ['**Negligence:** *Donoghue v Stevenson* (1932); *Caparo* (1990); *Robinson* (2018)', '**Private nuisance:** *Hunter v Canary Wharf* (1997)', '**Rylands v Fletcher** (1868); *Transco* (2003)', '**Vicarious liability:** *Various Claimants* (2012); *Lister* (2001)', '**Consent:** *Smith v Baker* (1891); *ICI v Shatwell* (1965)'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'STATUTE: USE THE WORDING', body: ['**Occupiers’ Liability Act 1957** (visitors): “common duty of care”, s2(2)', '**Occupiers’ Liability Act 1984** (trespassers): three conditions in s1(3)', '**Law Reform (Contributory Negligence) Act 1945**'], bullets: true, fill: C.cream, edge: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink, gap: 6 } }),
  (y) => {
    const lab = T(450, y + 18, 'DUTY IN NEGLIGENCE SINCE ROBINSON', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    const r = row(y + 32, [
      { title: 'Established precedent', body: 'The starting point' },
      { title: 'Genuinely novel situation?', body: 'Only then use *Caparo*' },
    ], { gap: 46, arrows: true, card: { tsize: 18, size: 16, pad: 16, bfill: C.ink, align: 'middle' } });
    return { s: lab + r.s, h: 32 + r.h };
  },
],
'Common law torts built case by case: negligence (Donoghue, Caparo, Robinson), private nuisance (Hunter v Canary Wharf), Rylands v Fletcher (Transco), vicarious liability (Various Claimants, Lister) and consent (Smith v Baker, ICI v Shatwell). Statutory rules: the Occupiers’ Liability Acts 1957 and 1984 and the Contributory Negligence Act 1945. In negligence, established precedent comes first and Caparo is only for novel situations.',
'Negligence grows case by case; occupiers’ liability starts from the Acts’ wording.', H2.src);

// 03 Who proves what
F('03-who-proves-what', 'Who has to prove what?', 'Both sides prove on the balance of probabilities', [
  (y) => {
    const r = row(y, [
      { kicker: 'CLAIMANT PROVES', title: 'Each element of the tort', body: 'In negligence: duty, breach, damage caused by the breach and not too remote', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'DEFENDANT PROVES', title: 'Any defence', body: 'Such as contributory negligence or consent', fill: C.cream, edge: C.olive },
    ], { gap: 16, vcenter: false, fr: [1.4, 1], card: { size: 16, tsize: 19, pad: 18, bfill: C.ink } });
    return r;
  },
  (y) => card(30, y, 840, { kicker: 'CAUSATION FAILS: BARNETT v CHELSEA AND KENSINGTON HMC (1969)', kfill: C.rust, body: 'A doctor refused to examine a patient but was not liable: the patient would have died anyway. A careless defendant escapes if factual causation is not shown.', size: 16, pad: 18, bfill: C.ink, edge: C.rust }),
  (y) => {
    const lab = T(450, y + 18, 'HELP FOR THE CLAIMANT', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    const r = row(y + 32, [
      { title: 'Res ipsa loquitur', body: 'Thing under D’s control; accident would not normally happen without negligence: court may infer it (*Scott v London and St Katherine Docks*, 1865)' },
      { title: 'A criminal conviction', body: 'For the same incident: evidence of the facts in the civil claim (s11 Civil Evidence Act 1968)' },
    ], { gap: 16, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } });
    return { s: lab + r.s, h: 32 + r.h };
  },
],
'The claimant proves each element of the tort on the balance of probabilities, and the defendant proves any defence. Barnett v Chelsea and Kensington shows a claim failing on causation. Res ipsa loquitur (Scott v London and St Katherine Docks) and a criminal conviction used as evidence under s11 Civil Evidence Act 1968 can help the claimant.',
'The claimant proves the tort; the defendant proves the defence.', H2.prove);

// 04 Fault spectrum
F('04-fault-spectrum', 'Liability and fault across the torts', '', [
  (y) => {
    const H = 100; let s = panel(30, y, 840, H);
    s += `<defs><linearGradient id="fg" x1="0" x2="1"><stop offset="0" stop-color="${C.teal}"/><stop offset="1" stop-color="${C.cream}"/></linearGradient></defs>`;
    s += `<rect x="60" y="${y + 42}" width="780" height="40" rx="20" fill="url(#fg)" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += T(80, y + 69, 'Personal fault needed', { size: 17, weight: 700 }) + T(820, y + 69, 'No personal fault', { size: 17, weight: 700, anchor: 'end' });
    s += T(450, y + 28, 'use this spectrum for an essay on whether tort should depend on fault', { size: 15, anchor: 'middle', fill: C.muted });
    return { s, h: H };
  },
  (y) => stack(y, [
    { kicker: 'NEGLIGENCE: FAULT-BASED', body: 'Below the objective reasonable person (*Vaughan v Menlove*, 1837), weighed against probability (*Bolton v Stone*, 1951) and seriousness (*Paris v Stepney BC*, 1951)', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'OCCUPIERS’ LIABILITY: FAULT-BASED STATUTORY DUTY', body: 'Such care as is reasonable in all the circumstances (OLA 1957 s2(2); OLA 1984 s1(4))', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'PRIVATE NUISANCE: UNREASONABLE USE OF LAND', body: 'Locality, duration; malice can make reasonable conduct a nuisance (*Christie v Davey*, 1893)', fill: C.panel },
    { kicker: 'RYLANDS v FLETCHER: STRICT', body: 'No need to prove carelessness, but the type of damage must be foreseeable (*Cambridge Water*, 1994)', fill: C.cream, edge: C.olive },
    { kicker: 'VICARIOUS LIABILITY: NO PERSONAL FAULT BY THE EMPLOYER', body: 'Liability for an employee’s tort in the course of employment', fill: C.cream, edge: C.olive },
  ], { gap: 10, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'A spectrum from personal fault needed to no personal fault. Negligence is fault-based (Vaughan v Menlove; Bolton v Stone; Paris v Stepney). Occupiers’ liability is a fault-based statutory duty. Private nuisance asks whether use of land was unreasonable (Christie v Davey on malice). Rylands v Fletcher is strict but requires foreseeable damage (Cambridge Water). Vicarious liability requires no personal fault by the employer.',
'From negligence to vicarious liability, the need for personal fault falls away.', H2.fault);

// 05 Defences
F('05-defences', 'Defences: reduce or defeat the claim', 'Proved by the defendant once the tort is established', [
  (y) => {
    const H = 230; let s = panel(30, y, 840, H);
    const base = y + 190, sc = 1.3;
    const bar = (x, pct, fill, lab, top) => `<rect x="${x}" y="${base - pct * sc}" width="120" height="${pct * sc}" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + 60, base - pct * sc - 10, top, { size: 17, weight: 700, anchor: 'middle' }) + T(x + 60, base + 26, lab, { size: 16, anchor: 'middle', fill: C.muted });
    s += `<line x1="60" y1="${base}" x2="840" y2="${base}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += bar(110, 100, C.tealLight, 'No defence', 'full damages');
    s += bar(380, 75, C.cream, 'Contributory negligence', 'reduced');
    s += `<rect x="650" y="${base - 6}" width="120" height="6" fill="${C.rust}"/>` + T(710, base - 16, 'nothing', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) + T(710, base + 26, 'Consent', { size: 16, anchor: 'middle', fill: C.muted });
    s += T(450, y + 30, 'Bar heights are illustrative', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
    return { s, h: H + 10 };
  },
  (y) => row(y, [
    { kicker: 'CONTRIBUTORY NEGLIGENCE: PARTIAL', title: '1945 Act, s1', body: 'Damages reduced by the share the court thinks just. Seat belts: 25% or 15% (*Froom v Butcher*, 1976).', fill: C.cream, edge: C.olive },
    { kicker: 'CONSENT (VOLENTI): COMPLETE', title: 'Knew of the risk and freely agreed', body: '*Smith v Baker* (1891); *Morris v Murray* (1991). Rescuers do not consent (*Haynes v Harwood*, 1935).', fill: C.panel, edge: C.rust },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 18, pad: 18, bfill: C.ink } }),
  (y) => card(30, y, 840, { kicker: 'SPECIFIC DEFENCES', body: 'Nuisance: prescription, statutory authority. *Rylands*: Act of God, act of a stranger.', size: 16, pad: 16, bfill: C.ink }),
],
'Illustrative bars show full damages with no defence, reduced damages with contributory negligence and nothing with consent. Contributory negligence under the 1945 Act reduces damages by a just share, for example 25% or 15% for not wearing a seat belt (Froom v Butcher). Consent is complete where the claimant knew of and freely agreed to the risk (Smith v Baker; Morris v Murray), but rescuers do not consent (Haynes v Harwood). Nuisance and Rylands have specific defences.',
'Contributory negligence reduces damages; consent defeats the claim.', H2.def);

// 06 Worked example: Kit
F('06-worked-example-kit', 'Worked example: Kit and the falling wall', 'Jas, a delivery driver, reverses into a wall while on his phone', [
  (y) => {
    const H = 170; let s = panel(30, y, 840, H);
    const bx = (x, yy, w, a, b, fill) => `<rect x="${x}" y="${yy}" width="${w}" height="60" rx="12" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>` + T(x + w / 2, yy + 27, a, { size: 18, weight: 700, anchor: 'middle' }) + T(x + w / 2, yy + 48, b, { size: 15, anchor: 'middle' });
    s += bx(60, y + 55, 200, 'Kit', 'claimant, broken leg', C.tealLight);
    s += bx(600, y + 20, 240, 'SpeedyParcels Ltd', 'employer', C.mustard) + bx(600, y + 96, 240, 'Jas', 'employee, negligent', C.cream);
    s += arrow(264, y + 80, 594, y + 50, { w: 3 }) + arrow(264, y + 90, 594, y + 124, { w: 3 });
    s += T(430, y + 50, 'vicarious liability', { size: 15, weight: 700, anchor: 'middle', fill: C.olive }) + T(430, y + 128, 'negligence', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    s += `<line x1="720" y1="${y + 82}" x2="720" y2="${y + 94}" stroke="${C.ink}" stroke-width="3"/>`;
    return { s, h: H };
  },
  (y) => grid(y, [
    { kicker: 'DUTY', body: 'Established: road users to those nearby; no need for *Caparo* (*Robinson*)' },
    { kicker: 'BREACH', body: 'Looking at a phone while reversing falls below the reasonable driver (*Vaughan v Menlove*)' },
    { kicker: 'DAMAGE', body: 'But for the reversing, no injury (*Barnett*); broken leg a foreseeable type of harm (*Wagon Mound*)' },
    { kicker: 'VICARIOUS LIABILITY', body: 'Jas is an employee acting in the course of employment' },
    { kicker: 'DEFENCES', body: 'Contributory negligence: Kit ignored the sign. Consent unlikely: he did not agree to being hit by a van.', fill: C.cream, edge: C.olive },
    { kicker: 'REMEDY AND CONCLUSION', body: 'SpeedyParcels likely vicariously liable; compensatory damages, reduced', fill: C.tealLight, edge: C.tealDark },
  ], 2, { gap: 16, vgap: 12, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'Parties: Kit sues Jas in negligence and SpeedyParcels Ltd through vicarious liability. Duty is established (Robinson); breach by using a phone while reversing (Vaughan v Menlove); damage by but for causation (Barnett) and foreseeable harm (Wagon Mound); Jas acted in the course of employment; Kit ignored a warning sign so damages are reduced for contributory negligence, though consent is unlikely.',
'Identify every party who might pay, then end with defences and remedies.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
