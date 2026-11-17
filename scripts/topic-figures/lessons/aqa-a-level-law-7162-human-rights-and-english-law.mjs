import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-human-rights-and-english-law';
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
  life: '## The right to life in English law',
  lib: '## Deprivation of liberty',
  priv: '## Privacy and communication',
  exp: '## Expression, assembly and association',
  we: '## Worked example: choosing the right domestic route',
};

// 01 Self-defence and Article 2
F('01-self-defence-test', 'Self-defence in English law and Article 2', 's76 Criminal Justice and Immigration Act 2008', [
  (y) => steps(y, [
    { title: 'Judge the facts as D genuinely believed them', body: 'Even if the belief was mistaken.' },
    { title: 'Was the force reasonable in those circumstances?', body: 'Disproportionate force is not reasonable.' },
    { title: 'Householder cases', body: 'Only **grossly** disproportionate force is excluded. *R (Collins)* (2016): compatible with Article 2, as force must still be reasonable in all the circumstances.' },
  ], { size: 16, tsize: 19 }),
  (y) => row(y, [
    { kicker: 'ENGLISH TEST', title: 'Honest belief; reasonable force', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'ARTICLE 2.2', title: 'Lethal force only where “absolutely necessary”', fill: C.cream, edge: C.olive },
  ], { gap: 16, card: { size: 16, tsize: 19 } }),
  (y) => note(y, 'Da Silva v UK (2016): the de Menezes shooting', 'The Grand Chamber held the English honest belief test was **not significantly different** from the Convention standard; not prosecuting individual officers did not breach the procedural duty.', { size: 16, fill: C.panel, edge: C.panelEdge }),
],
'The English self-defence test: judge the facts as the defendant genuinely believed them, then ask whether the force was reasonable; disproportionate force is not, except that in householder cases only grossly disproportionate force is excluded (Collins, compatible with Article 2). The English honest belief test sits against Article 2.2’s absolutely necessary standard; in Da Silva v UK the Grand Chamber found them not significantly different.',
'Honest belief plus reasonable force: held close enough to “absolutely necessary”.', H2.life);

// 02 Article 2 claim vs negligence
F('02-article-2-vs-negligence', 'Police failures: Article 2 or negligence?', 'The Convention can reach further than tort', [
  (y) => row(y, [
    { kicker: 'ARTICLE 2 (HRA)', title: 'Operational duty: Osman v UK (1998)', body: ['Knew or ought to have known of a **real and immediate risk** to an identified individual, and failed to take reasonable measures', '*Van Colle* (2008): risk not reasonably knowable; no breach', '*Rabone* (2012): extended to a voluntary psychiatric patient'], fill: C.tealLight, edge: C.tealDark },
    { kicker: 'NEGLIGENCE (TORT)', title: 'No general duty to protect the public from criminals', body: ['*Hill v CC West Yorkshire* (1989)', '*Robinson* (2018): a duty where police positive acts cause physical injury', 'Dependants: Fatal Accidents Act 1976'], fill: C.cream, edge: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 18, bullets: true, gap: 8, bfill: C.ink } }),
  (y) => note(y, 'Michael v CC South Wales (2015)', 'Delayed response to a 999 call: **no duty in negligence**, but the **Article 2 claim** was allowed to go to trial.', { size: 17, align: 'middle' }),
],
'Two routes. Article 2: the Osman operational duty where police knew or ought to have known of a real and immediate risk to an identified person (no breach in Van Colle; extended in Rabone). Negligence: no general duty to protect the public from criminals (Hill), though a duty exists where police positive acts cause injury (Robinson). Michael v Chief Constable of South Wales: no negligence duty, but the Article 2 claim could proceed.',
'Where negligence fails, an Article 2 claim may still succeed.', H2.life);

// 03 Investigation mechanisms
F('03-investigating-deaths', 'Investigating deaths involving the state', 'Meeting the Jordan v UK (2001) requirements', [
  (y) => row(y, [
    { kicker: 'INQUESTS', title: 'Coroners and Justice Act 2009', body: ['Jury where a death in state detention was violent, unnatural or of unknown cause', '*R (Middleton)* (2004): examine **in what circumstances** the person died, not just by what means'] },
    { kicker: 'POLICE CONTACT', title: 'Independent Office for Police Conduct', body: ['Investigates deaths following police contact'] },
    { kicker: 'PUBLIC INQUIRIES', title: 'Inquiries Act 2005', body: ['*R (Amin)* (2003): a young prisoner murdered by his cellmate required an independent public investigation'] },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, bullets: true, gap: 8, bfill: C.ink } }),
  (y) => row(y, [
    { kicker: 'PLANNING (McCANN v UK, 1995)', title: 'The state answers for planning and control', body: 'After the de Menezes shooting the Metropolitan Police was convicted under the Health and Safety at Work etc. Act 1974' },
    { kicker: 'CRIMINAL LAW', title: 'Homicide offences protect life', body: 'Murder, voluntary and involuntary manslaughter; Corporate Manslaughter and Corporate Homicide Act 2007; Suicide Act 1961 s2' },
  ], { gap: 14, vcenter: false, card: { size: 16, tsize: 18, fill: C.panel } }),
],
'Three investigation mechanisms meeting the Jordan v UK requirements: inquests under the Coroners and Justice Act 2009, which after Middleton examine in what circumstances a person died; the Independent Office for Police Conduct; and public inquiries under the Inquiries Act 2005 (Amin). Below: McCann makes the state answer for planning, leading to a health and safety conviction after the de Menezes shooting, and homicide offences including corporate manslaughter protect life.',
'Inquests, the IOPC and public inquiries carry out the Article 2 duty to investigate.', H2.life);

// 04 Detention clock
{
  const clock = (y) => {
    const bx = 40, W = 820, sc = W / 336; // hours, 14 days = 336
    const bars = [
      [24, '24 hours', 'PACE: detention without charge', C.tealLight],
      [36, '36 hours', 'with a superintendent’s authority', C.teal],
      [96, '96 hours', 'with magistrates’ warrants (PACE ss41–44)', C.cream],
      [336, '14 days', 'Terrorism Act 2000 Sch 8, with judicial extensions', C.mustard],
    ];
    let s = '', cy = y;
    bars.forEach(([h, lab, d, f]) => {
      s += `<rect x="${bx}" y="${cy}" width="${h * sc}" height="40" rx="6" fill="${f}" stroke="${C.ink}" stroke-width="2"/>`;
      const inside = h * sc > 300;
      s += T(inside ? bx + 14 : bx + h * sc + 12, cy + 27, `${lab}: ${d}`, { size: 16, weight: 700 });
      cy += 54;
    });
    s += T(bx + W, cy + 8, 'pre-charge detention limits; bars to scale', { size: 15, anchor: 'end', fill: C.muted, italic: true });
    return { s, h: cy + 12 - y };
  };
  F('04-detention-limits', 'Deprivation of liberty: how long without charge?', '', [clock,
    (y) => grid(y, [
      { kicker: 'STOP AND SEARCH', title: 'PACE s1 and Code A', body: 'Reasonable grounds to suspect; s60 CJPOA 1994 allows authorised searches without suspicion' },
      { kicker: 'ARREST', title: 'PACE s24 and s28', body: 'Reasonable grounds and necessity; told the fact of and grounds for arrest' },
      { kicker: 'SAFEGUARD', title: 'PACE s58', body: 'Right to consult a solicitor privately' },
      { kicker: 'REMEDIES', title: 'Habeas corpus; false imprisonment', body: 'Actionable without fault: *ex parte Evans (No 2)* (2001)', fill: C.tealLight, edge: C.tealDark },
    ], 2, { gap: 12, vcenter: false, card: { size: 16, tsize: 18 } })],
  'Bars to scale for pre-charge detention: 24 hours under PACE, 36 with a superintendent’s authority, 96 with magistrates’ warrants, and 14 days under the Terrorism Act 2000. Below: stop and search under PACE s1 and s60 CJPOA 1994; arrest under PACE s24 and s28; the right to a solicitor under s58; and remedies of habeas corpus and false imprisonment, actionable without fault (ex parte Evans).',
  'PACE builds up from 24 to 96 hours; terrorism cases allow up to 14 days.', H2.lib);
}

// 05 Privacy quadrant
F('05-privacy-protect-restrict', 'Privacy: provisions that protect and restrict', '', [
  (y) => {
    let s = '';
    const cw = 370, x1 = 130, x2 = 500, hh = 40;
    s += `<rect x="${x1}" y="${y}" width="${cw}" height="${hh}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + T(x1 + cw / 2, y + 27, 'Protecting privacy', { size: 18, weight: 700, anchor: 'middle' });
    s += `<rect x="${x2}" y="${y}" width="${cw}" height="${hh}" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>` + T(x2 + cw / 2, y + 27, 'Restricting privacy', { size: 18, weight: 700, anchor: 'middle' });
    const cells = [
      ['Criminal law', ['Unlawful interception: Investigatory Powers Act 2016', 'Computer Misuse Act 1990 s1', 'Protection from Harassment Act 1997', 'Data Protection Act 2018'], ['PACE entry, search and seizure (s8 warrants; s17, s18)', 'Stop and search']],
      ['Civil law', ['Misuse of private information (*Campbell*; *Vidal-Hall*)', 'Breach of confidence', 'Damages and injunctions (*Mosley*; *PJS*)', 'Harassment and data protection claims'], ['Investigatory Powers Act 2016 warrants approved by a Judicial Commissioner', 'Directed surveillance under RIPA 2000']],
    ];
    let cy = y + hh;
    cells.forEach(([lab, a, b]) => {
      const A = card(x1, cy, cw, { body: a, bullets: true, size: 15, gap: 4, bfill: C.ink, pad: 14, nobox: true });
      const Bc = card(x2, cy, cw, { body: b, bullets: true, size: 15, gap: 4, bfill: C.ink, pad: 14, nobox: true });
      const h = Math.max(A.h, Bc.h);
      s += `<rect x="30" y="${cy}" width="100" height="${h}" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` + para(80, cy + h / 2 + 6, lab, 90, { size: 17, weight: 700, anchor: 'middle', fill: C.ink }).s;
      s += `<rect x="${x1}" y="${cy}" width="${cw}" height="${h}" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>` + `<rect x="${x2}" y="${cy}" width="${cw}" height="${h}" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>`;
      s += A.s + Bc.s;
      cy += h;
    });
    return { s, h: cy - y };
  },
  (y) => note(y, 'PJS v News Group Newspapers (2016)', 'Injunction kept although the claimant’s identity was widely available online: further tabloid publication would still cause intrusion and distress.', { size: 16 }),
],
'A grid of criminal and civil provisions. Protecting privacy: interception offences, the Computer Misuse Act, harassment and data protection offences; and misuse of private information, breach of confidence, damages and injunctions. Restricting privacy: PACE entry, search and seizure; Investigatory Powers Act warrants approved by a Judicial Commissioner and directed surveillance under RIPA 2000. PJS kept an injunction despite online availability.',
'The same areas of law both protect privacy and give the state powers to intrude.', H2.priv);

// 06 Protest controls
F('06-public-order-controls', 'Expression, assembly and association', '', [
  (y) => row(y, [
    { kicker: 'RESTRICTING EXPRESSION', title: '', body: ['Public Order Act 1986 ss4, 4A, 5; Parts 3 and 3A', 'Communications Act 2003 s127 (*Chambers v DPP*: joke tweet, conviction quashed)', 'Contempt of Court Act 1981; Obscene Publications Act 1959', 'Official Secrets Act 1989 (*R v Shayler*: no public interest defence)'], fill: C.cream, edge: C.olive },
    { kicker: 'PROTECTING EXPRESSION', title: '', body: ['HRA 1998 s12', 'Defamation Act 2013: serious harm threshold (s1), truth (s2), honest opinion (s3), public interest (s4)'], fill: C.tealLight, edge: C.tealDark },
  ], { gap: 16, vcenter: false, card: { size: 16, bullets: true, gap: 6, bfill: C.ink } }),
  (y) => table(y, [{ w: 1.1, head: 'Assembly: Public Order Act 1986' }, { w: 2, head: 'Power' }], [
    ['s11', 'Advance notice of processions'],
    ['s12 / s14', 'Conditions on processions / assemblies'],
    ['s13', 'Banning processions'],
    ['s14A', 'Prohibiting trespassory assemblies'],
    ['Highways Act 1980 s137', 'Obstruction offence, subject to lawful excuse (*DPP v Ziegler*, 2021)'],
  ], { size: 16, pad: 11 }),
  (y) => note(y, 'Association', 'Terrorism Act 2000: proscribed organisations, membership an offence. Public Order Act 1936: political uniforms and quasi-military organisations.', { size: 16, fill: C.panel, edge: C.panelEdge }),
],
'Provisions restricting expression: Public Order Act 1986 offences, section 127 Communications Act 2003 (Chambers v DPP), contempt, obscenity and the Official Secrets Act 1989 (Shayler). Provisions protecting it: section 12 HRA and the Defamation Act 2013 defences. A table of assembly powers: notice, conditions, bans and trespassory assemblies under the Public Order Act 1986, and highway obstruction subject to lawful excuse (Ziegler). Association: proscription and the 1936 Act.',
'Most domestic provisions restrict these rights; s12 HRA and the Defamation Act protect expression.', H2.exp);

// 07 Worked example
F('07-carl-lena-routes', 'Worked example: choosing the right route', '', [
  (y) => card(30, y, 840, { kicker: 'FACTS', body: 'Police receive repeated warnings that Carl has threatened to kill his former partner, Lena. They take no action. Carl attacks and kills her.', size: 17, bfill: C.ink, fill: C.tealLight, edge: C.tealDark }),
  (y) => grid(y, [
    { kicker: 'CRIMINAL LAW', title: 'Carl: murder', body: 'Intention to kill or cause GBH' },
    { kicker: 'ARTICLE 2', title: 'Osman test: points towards yes', body: 'Repeated specific threats point to a real and immediate risk to an identified person', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'NEGLIGENCE', kfill: C.rust, title: 'Weak claim', body: '*Hill* and *Michael*: no general duty; the Article 2 claim under s7 HRA may proceed', fill: C.cream, edge: C.rust },
    { kicker: 'INVESTIGATION', title: 'Inquest and IOPC', body: 'Inquest into in what circumstances she died (*Middleton*); IOPC investigation of police contact' },
  ], 2, { gap: 14, vcenter: false, card: { size: 16, tsize: 19 } }),
],
'Carl kills Lena after police ignored repeated threats. Criminal law: Carl is liable for murder. Article 2: the Osman test is likely met. Negligence: weak because of Hill and Michael, but an Article 2 claim under s7 HRA may proceed. Investigation: an inquest examining the circumstances (Middleton) and an IOPC investigation.',
'One death, four domestic routes: criminal, Convention, tort and investigation.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
