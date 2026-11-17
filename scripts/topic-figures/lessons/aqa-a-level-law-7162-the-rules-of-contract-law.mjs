import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-the-rules-of-contract-law';
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
  life: '## The life of a contract',
  src: '## Where the rules come from',
  obj: '## The objective approach',
  type: '## Consumer or business?',
  status: '## Valid, void, voidable and unenforceable',
  bi: '## Bilateral and unilateral contracts',
  we: '## Worked example',
};

// 01 Life of a contract
F('01-life-of-a-contract', 'The life of a contract', 'The specification’s five areas, in order', [
  (y) => {
    const S = [['Formation', 'Is there a contract?'], ['Terms', 'What was promised?'], ['Vitiating factors', 'Is the agreement flawed?'], ['Discharge', 'How did the contract end?'], ['Remedies', 'What can the innocent party get?']];
    const w = 148, gap = 25; let s = '';
    const hh = 150;
    S.forEach(([a, b], i) => {
      const x = 30 + i * (w + gap);
      const fill = [C.tealLight, C.teal, C.cream, C.tealLight, C.mustard][i];
      s += `<path d="M${x},${y} L${x + w},${y} L${x + w + 14},${y + 40} L${x + w},${y + 80} L${x},${y + 80} L${x + 14},${y + 40} Z" fill="${fill}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
      s += para(x + w / 2 + 7, y + (a.length > 12 ? 36 : 47), a, w - 24, { size: 17, weight: 700, anchor: 'middle', fill: C.ink, lh: 20 }).s;
      s += para(x + w / 2 + 7, y + 112, b, w - 6, { size: 16, anchor: 'middle', fill: C.ink, lh: 20 }).s;
    });
    return { s, h: hh };
  },
  (y) => card(30, y, 840, { kicker: 'A METHOD FOR PROBLEM QUESTIONS', body: ['Work through the stages **in order**, but only those the facts raise', 'Add an exclusion-clause check after breach, and conclude for each party', 'Headings such as “Formation”, “Terms” and “Remedies” help the examiner follow'], bullets: true, gap: 4, size: 16, pad: 18, bfill: C.ink }),
  (y) => note(y, '', '**Common mistake:** starting with remedies before showing there is a contract and a breach.', { size: 17, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'Five arrow-shaped stages in order: formation (is there a contract?), terms (what was promised?), vitiating factors (is the agreement flawed?), discharge (how did it end?) and remedies (what can the innocent party get?). Problem answers work through only the stages the facts raise, in order.',
'Formation, terms, vitiating factors, discharge, remedies: the order of every answer.', H2.life);

// 02 Sources
F('02-sources-of-rules', 'Where contract rules come from', 'Mainly common law, with statute and equity added', [
  (y) => {
    const r = row(y, [
      { kicker: 'COMMON LAW', title: 'Judge-made rules', body: ['Offer and acceptance: *Carlill* (1893); *Adams v Lindsell* (1818)', 'Consideration: *Currie v Misa* (1875); *Williams v Roffey* (1991)', 'Intention: *Balfour v Balfour* (1919)', 'Implied terms: *The Moorcock* (1889)', 'Economic duress: *Atlas Express v Kafco* (1989)', 'Damages: *Hadley v Baxendale* (1854)'], bullets: true, fill: C.tealLight, edge: C.tealDark },
      { kicker: 'STATUTE', title: 'Protects weaker parties, fixes gaps', body: ['Contracts (Rights of Third Parties) Act 1999', 'Consumer Rights Act 2015', 'Unfair Contract Terms Act 1977', 'Misrepresentation Act 1967', 'Law Reform (Frustrated Contracts) Act 1943'], bullets: true, fill: C.cream, edge: C.olive },
      { kicker: 'EQUITY', title: 'Discretionary remedies', body: ['Specific performance', 'Rescission'], bullets: true },
    ], { gap: 14, vcenter: false, fr: [1.35, 1.1, 0.75], card: { size: 16, tsize: 18, pad: 16, bfill: C.ink, gap: 5 } });
    return r;
  },
  (y) => row(y, [
    { title: 'Case-based', body: 'A definition without an authority is weak' },
    { title: 'Statute overrides', body: 's31 CRA 2015: a trader cannot exclude the statutory implied terms' },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink, fill: C.panel } }),
],
'Three sources of contract rules. Common law: offer and acceptance (Carlill, Adams v Lindsell), consideration (Currie v Misa, Williams v Roffey), intention (Balfour), implied terms (The Moorcock), economic duress (Atlas Express) and damages (Hadley v Baxendale). Statute: the 1999, 2015, 1977, 1967 and 1943 Acts. Equity: specific performance and rescission. Rules are case-based, and statute overrides common law.',
'Cite a case for common law rules; check whether a statute overrides them.', H2.src);

// 03 Objective approach
F('03-objective-approach', 'The objective approach', 'Smith v Hughes (1871): the oats case', [
  (y) => {
    const H = 270; let s = panel(30, y, 840, H);
    const fig = (x, yy, c) => `<circle cx="${x}" cy="${yy}" r="13" fill="${c}" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M${x},${yy + 13} L${x},${yy + 48} M${x - 17},${yy + 26} L${x + 17},${yy + 26} M${x},${yy + 48} L${x - 14},${yy + 72} M${x},${yy + 48} L${x + 14},${yy + 72}`, { w: 2.5 });
    s += fig(170, y + 130, C.tealLight) + T(170, y + 232, 'Seller', { size: 17, weight: 700, anchor: 'middle' }) + T(170, y + 252, 'said nothing about age', { size: 15, anchor: 'middle', fill: C.muted });
    s += fig(450, y + 130, C.cream) + T(450, y + 232, 'Buyer', { size: 17, weight: 700, anchor: 'middle' });
    s += `<ellipse cx="510" cy="${y + 72}" rx="96" ry="34" fill="${C.panel}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="6 5"/>` + T(510, y + 68, 'private belief:', { size: 15, anchor: 'middle', fill: C.muted }) + T(510, y + 88, '“old oats”', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
    s += arrow(200, y + 160, 420, y + 160, { w: 3 }) + T(310, y + 150, 'sells oats (new)', { size: 16, anchor: 'middle' });
    s += `<rect x="640" y="${y + 90}" width="200" height="120" rx="14" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
    s += para(740, y + 120, 'Reasonable person: what was the seller promising?', 170, { size: 16, weight: 700, anchor: 'middle', fill: C.ink }).s;
    s += arrow(636, y + 150, 482, y + 150, { color: C.tealDark, marker: 'ahT', w: 3 });
    s += T(740, y + 240, 'Binding contract', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
    return { s, h: H };
  },
  (y) => {
    const lab = T(450, y + 18, 'THE SAME APPROACH EXPLAINS', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    const r = row(y + 32, [
      { body: 'An offer is judged by how it appears to a reasonable offeree' },
      { body: 'Acceptance must be communicated so the offeror can see it' },
      { body: 'Intention is presumed from context, not inner thoughts' },
    ], { gap: 14, card: { size: 16, pad: 16, bfill: C.ink, align: 'middle' } });
    return { s: lab + r.s, h: 32 + r.h };
  },
],
'In Smith v Hughes the seller sold new oats without mentioning age; the buyer privately believed they were old. The court asked what a reasonable person would understand the seller to be promising, so the buyer’s private mistake did not prevent a binding contract. The same objective approach applies to offers, acceptance and intention.',
'Courts ask what a reasonable person would understand, not what one party privately meant.', H2.obj);

// 04 Consumer or business
F('04-classify-contract', 'Classify the contract first', 'Which statute applies depends on who the parties are', [
  (y) => {
    const r = row(y, [
      { kicker: 'TRADER + CONSUMER', title: 'Consumer contract', body: 'Consumer Rights Act 2015', fill: C.tealLight, edge: C.tealDark },
      { kicker: 'TWO BUSINESSES', title: 'Business-to-business', body: 'Unfair Contract Terms Act 1977; common law', fill: C.cream, edge: C.olive },
      { kicker: 'TWO PRIVATE INDIVIDUALS', title: 'Private sale', body: 'Common law; limited statutory protection', fill: C.panel },
    ], { gap: 14, vcenter: false, card: { size: 16, tsize: 19, pad: 18, bfill: C.ink, align: 'middle' } });
    return r;
  },
  (y) => card(30, y, 840, { kicker: 'DEFINITIONS: s2 CONSUMER RIGHTS ACT 2015', body: ['**Trader:** acting for purposes relating to their trade, business, craft or profession', '**Consumer:** an individual acting for purposes wholly or mainly outside their trade, business, craft or profession'], bullets: true, gap: 4, size: 16, pad: 18, bfill: C.ink }),
  (y) => note(y, 'Getting this wrong is costly', 'Applying s9 CRA 2015 to a sale between two friends, or UCTA’s reasonableness test to a consumer contract, misstates the law.', { size: 16, align: 'middle' }),
],
'Three types of contract and their law: a trader and a consumer make a consumer contract under the Consumer Rights Act 2015; two businesses are governed by UCTA 1977 and common law; two private individuals by common law with limited statutory protection. Section 2 CRA 2015 defines trader and consumer.',
'Who the parties are decides which statute applies.', H2.type);

// 05 Status
F('05-contract-status', 'Valid, void, voidable and unenforceable', '', [
  (y) => grid(y, [
    { kicker: 'VALID', title: 'Binding and enforceable', body: 'A normal contract. Breach gives damages and sometimes termination.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'VOIDABLE', title: 'Valid until the innocent party sets it aside', body: 'Misrepresentation; economic duress. Can be **rescinded**, but the right can be lost by affirmation, delay or third-party rights.', fill: C.cream, edge: C.olive },
    { kicker: 'UNENFORCEABLE', title: 'Valid but cannot be enforced in court', body: 'A guarantee not evidenced in writing (Statute of Frauds 1677, s4)' },
    { kicker: 'VOID', kfill: C.rust, title: 'No contract at all in law', body: 'No acceptance; agreement not intended to be legally binding', edge: C.rust },
  ], 2, { gap: 16, vgap: 14, vcenter: false, card: { size: 16, tsize: 18, pad: 18, bfill: C.ink } }),
  (y) => note(y, '', '**Common mistake:** saying a misrepresentation makes a contract “void”: it is **voidable**.', { size: 17, align: 'middle', fill: C.panel, edge: C.panelEdge }),
],
'Four statuses. Valid: binding and enforceable. Voidable: valid until the innocent party rescinds, as with misrepresentation or economic duress; the right can be lost by affirmation, delay or third-party rights. Unenforceable: valid but not enforceable in court, such as an unwritten guarantee under the Statute of Frauds. Void: no contract at all, such as where there is no acceptance.',
'The status decides the remedy: rescission for voidable, damages for breach of a valid contract.', H2.status);

// 06 Bilateral vs unilateral
F('06-bilateral-unilateral', 'Bilateral and unilateral contracts', '', [
  (y) => {
    const H = 230; let s = panel(30, y, 410, H) + panel(460, y, 410, H);
    const fig = (x, yy, c) => `<circle cx="${x}" cy="${yy}" r="12" fill="${c}" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M${x},${yy + 12} L${x},${yy + 44} M${x - 15},${yy + 24} L${x + 15},${yy + 24} M${x},${yy + 44} L${x - 12},${yy + 66} M${x},${yy + 44} L${x + 12},${yy + 66}`, { w: 2.5 });
    s += T(235, y + 38, 'Bilateral', { size: 22, weight: 700, anchor: 'middle' }) + T(235, y + 62, 'a promise for a promise', { size: 16, anchor: 'middle', fill: C.muted });
    s += fig(100, y + 100, C.tealLight) + fig(370, y + 100, C.cream);
    s += arrow(130, y + 116, 340, y + 116, { color: C.tealDark, marker: 'ahT', w: 3 }) + arrow(340, y + 150, 130, y + 150, { color: C.olive, marker: 'ahO', w: 3 });
    s += T(235, y + 108, 'promise', { size: 16, anchor: 'middle', weight: 600, fill: C.tealDark }) + T(235, y + 172, 'promise', { size: 16, anchor: 'middle', weight: 600, fill: C.olive });
    s += T(665, y + 38, 'Unilateral', { size: 22, weight: 700, anchor: 'middle' }) + T(665, y + 62, 'a promise for an act', { size: 16, anchor: 'middle', fill: C.muted });
    s += `<rect x="478" y="${y + 92}" width="134" height="64" rx="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + T(545, y + 120, 'Company', { size: 15, weight: 700, anchor: 'middle' }) + T(545, y + 140, 'promises £100', { size: 15, anchor: 'middle' });
    s += fig(800, y + 100, C.cream);
    s += arrow(616, y + 116, 770, y + 116, { color: C.tealDark, marker: 'ahT', w: 3 });
    s += path(`M780,${y + 172} Q700,${y + 205} 616,${y + 160}`, { stroke: C.olive, w: 3, extra: 'stroke-dasharray="8 6" marker-end="url(#ahO)"' });
    s += T(690, y + 215, 'uses the smoke ball as directed', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 });
    return { s, h: H };
  },
  (y) => row(y, [
    { kicker: 'CARLILL v CARBOLIC SMOKE BALL CO (1893)', body: '£100 promised to anyone who used the smoke ball as directed and still caught influenza.' },
    { kicker: 'WHY IT MATTERS', body: 'When acceptance happens, and whether an offer can be withdrawn.', fill: C.cream, edge: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink } }),
],
'Two panels. Bilateral: each party exchanges a promise for a promise. Unilateral: one party promises in return for an act, as in Carlill v Carbolic Smoke Ball Co, where £100 was promised to anyone who used the smoke ball as directed and still caught influenza. The type affects when acceptance happens and whether an offer can be withdrawn.',
'Bilateral: promise for promise. Unilateral: promise for an act.', H2.bi);

// 07 Asha
F('07-worked-example-asha', 'Worked example: Asha’s faulty laptop', 'Bought from TechWorld’s website; terms say “No refunds on electronics”', [
  (y) => steps(y, [
    { kicker: 'FORMATION', title: 'Contract formed', body: 'Listing = invitation to treat; Asha’s order = offer; confirmation email = acceptance (by analogy with shop-display cases)' },
    { kicker: 'TYPE', title: 'Consumer contract: CRA 2015', body: 'Asha: individual outside a trade. TechWorld: trader.' },
    { kicker: 'TERMS', title: 's9: satisfactory quality', body: 'A faulty keyboard on a new laptop breaches it' },
    { kicker: 'EXCLUSION', title: '“No refunds” is ineffective', body: 'Cannot restrict Asha’s statutory rights (s31 CRA)' },
    { kicker: 'REMEDY', title: 'Short-term right to reject (s20) within 30 days (s22)', body: 'Or repair or replacement (s23)' },
  ], { size: 16, tsize: 18, highlight: 1, gap: 10, pad: 14 }),
],
'Asha’s case in five steps: a contract is formed when TechWorld confirms her order; it is a consumer contract under the Consumer Rights Act 2015; the faulty keyboard breaches s9 satisfactory quality; the “No refunds” term cannot restrict her rights under s31; she can use the short-term right to reject within 30 days or seek repair or replacement.',
'Classify the contract before choosing the statute, then move through the stages.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
