import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-the-rules-of-criminal-law';
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
  src: '## Where the rules come from',
  burden: '## Who has to prove what',
  jj: '## Judge and jury',
  fit: '## How the pieces fit together',
  method: '## Applying the rules: a method for problem questions',
  we: '## Worked example',
};

// 01 Sources
F('01-sources-of-rules', 'Common law or statute?', 'The source decides how you state the rule', [
  (y) => row(y, [
    { kicker: 'COMMON LAW: DEFINE WITH CASES', title: 'No statutory definition', body: ['Murder (*Vickers*, 1957)', 'Unlawful act manslaughter (*Church*, 1966)', 'Gross negligence manslaughter (*Adomako*, 1995)', 'Assault and battery (charged under s39 CJA 1988)', 'Insanity, automatism, intoxication, duress'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'STATUTE: QUOTE THE WORDING', title: 'Then cases on its meaning', body: ['Loss of control: Coroners and Justice Act 2009', 'Diminished responsibility: Homicide Act 1957 as amended', 's47, s20, s18: OAPA 1861', 'Theft and robbery: Theft Act 1968, ss1–8', 'Attempt: Criminal Attempts Act 1981, s1'], bullets: true, fill: C.cream, edge: C.olive },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 18, pad: 18, bfill: C.ink, gap: 5 } }),
  (y) => card(30, y, 840, { kicker: 'BOTH', body: 'Self-defence and prevention of crime: common law, s3 Criminal Law Act 1967 and s76 Criminal Justice and Immigration Act 2008', size: 16, pad: 16, bfill: C.ink }),
  (y) => row(y, [
    { title: 'Judges interpret statutes', body: '*Ireland; Burstow* (1997): “inflict” needs no direct force. *Gomez* (1993): appropriation with consent.' },
    { title: 'No new offences', body: 'Courts no longer create offences (*Knuller v DPP*, 1973). The 1989 Draft Criminal Code was never enacted.' },
  ], { gap: 16, vcenter: false, card: { size: 16, tsize: 18, pad: 16, bfill: C.ink } }),
],
'Two columns. Common law rules are defined with cases: murder (Vickers), unlawful act and gross negligence manslaughter (Church, Adomako), assault and battery, and the general defences. Statutory rules are quoted first: loss of control, diminished responsibility, s47, s20, s18, theft, robbery and attempt. Self-defence combines both. Judges interpret statutes (Ireland and Burstow; Gomez) but no longer create offences (Knuller), and there is no criminal code.',
'Define common law offences with cases; quote statutory wording, then the cases.', H2.src);

// 02 Burden of proof
F('02-burden-of-proof', 'Who has to prove what?', 'Woolmington v DPP (1935): the “golden thread”', [
  (y) => card(30, y, 840, { kicker: 'LEGAL BURDEN', title: 'Prosecution proves every element of the offence beyond reasonable doubt', size: 16, tsize: 19, pad: 18, fill: C.tealLight, edge: C.tealDark, align: 'middle' }),
  (y) => {
    const r = row(y, [
      { kicker: 'EVIDENTIAL BURDEN ONLY', title: 'Self-defence, duress, automatism, intoxication, loss of control', fill: C.panel },
      { kicker: 'REVERSE BURDEN', kfill: C.rust, title: 'Insanity; diminished responsibility (s2(2) Homicide Act 1957)', fill: C.panel, edge: C.rust },
    ], { gap: 16, vcenter: false, card: { tsize: 18, pad: 18 } });
    const ty = y + r.h + 20;
    const r2 = row(ty, [
      { title: 'Defendant raises evidence', body: 'For loss of control, sufficient evidence (s54(5)–(6))' },
      { title: 'Prosecution disproves', body: 'Beyond reasonable doubt', fill: C.tealLight, edge: C.tealDark },
    ], { x: 30, w: r.ws[0], gap: 34, arrows: true, card: { size: 15, tsize: 16, pad: 12, bfill: C.ink, align: 'middle' } });
    const r3 = card(r.xs[1], ty, r.ws[1], { title: 'Defendant proves it', body: 'On the balance of probabilities', size: 15, tsize: 16, pad: 12, bfill: C.ink, align: 'middle', minH: r2.h, vcenter: true, fill: C.cream, edge: C.olive });
    return { s: r.s + r2.s + r3.s + arrow(r.xs[0] + r.ws[0] / 2, y + r.h + 2, r.xs[0] + r.ws[0] / 2, ty - 2, { w: 3 }) + arrow(r.xs[1] + r.ws[1] / 2, y + r.h + 2, r.xs[1] + r.ws[1] / 2, ty - 2, { w: 3 }), h: r.h + 20 + r2.h };
  },
  (y) => note(y, 'Write precise conclusions', '“The jury must acquit unless the prosecution proves that Kim did not honestly believe force was necessary.”', { size: 16, align: 'middle' }),
],
'The prosecution bears the legal burden to prove every element beyond reasonable doubt (Woolmington). For self-defence, duress, automatism, intoxication and loss of control the defendant only raises evidence and the prosecution must disprove the defence beyond reasonable doubt. For insanity and diminished responsibility the defendant bears a reverse burden on the balance of probabilities.',
'Most defences only need raising; insanity and diminished responsibility must be proved.', H2.burden);

// 03 Judge and jury
F('03-judge-and-jury', 'Judge decides law; jury decides fact', '', [
  (y) => row(y, [
    { kicker: 'JUDGE: QUESTIONS OF LAW', body: ['What an offence means', 'Is there enough evidence for a defence to go to the jury?', 'How the jury must be directed'], bullets: true, fill: C.cream, edge: C.olive },
    { kicker: 'JURY: QUESTIONS OF FACT', body: ['Applies the judge’s directions to the facts'], bullets: true, fill: C.tealLight, edge: C.tealDark },
  ], { gap: 16, vcenter: false, card: { size: 16, pad: 18, bfill: C.ink, gap: 4 } }),
  (y) => table(y, [{ w: 0.7, head: 'Rule' }, { w: 1.3, head: 'Judge', hfill: C.cream }, { w: 1.3, head: 'Jury', hfill: C.teal }], [
    ['Attempt: s4(3) CAA 1981', 'Is there evidence on which an act could be found more than merely preparatory?', 'Was it more than merely preparatory?'],
    ['Theft: dishonesty', 'Directs on the *Ivey v Genting Casinos* (2017) test', 'Applies the test to decide dishonesty'],
    ['Murder: oblique intent', 'Gives the *Woollin* (1998) direction', 'Did D appreciate death or serious harm was virtually certain? “Entitled to find” intention, not obliged to'],
  ], { size: 16, hsize: 17 }),
],
'The judge decides questions of law: what an offence means, whether a defence goes to the jury and how to direct the jury. The jury decides facts by applying those directions. Examples: in attempt the judge asks whether there is evidence an act could be more than merely preparatory and the jury decides if it was; in theft the jury applies the Ivey test for dishonesty; in murder the jury may find intention under Woollin but is not obliged to.',
'The judge says what the law requires; the jury decides whether the facts meet it.', H2.jj);

// 04 Specific vs basic intent
F('04-specific-basic-intent', 'Specific and basic intent offences', 'DPP v Majewski (1977)', [
  (y) => row(y, [
    { kicker: 'SPECIFIC INTENT', title: 'Only intention will do', fill: C.cream, edge: C.olive },
    { kicker: 'BASIC INTENT', title: 'Recklessness is enough', fill: C.tealLight, edge: C.tealDark },
  ], { gap: 16, vcenter: false, card: { tsize: 20, pad: 18, align: 'middle' } }),
  (y) => {
    const a = chips(y, ['Murder', 's18', 'Theft', 'Robbery', 'Attempt'], { x: 30, w: 412, size: 17, weight: 700, fill: C.cream });
    const b = chips(y, ['Manslaughter', 's20', 's47', 'Assault', 'Battery'], { x: 458, w: 412, size: 17, weight: 700, fill: C.tealLight });
    return { s: a.s + b.s, h: Math.max(a.h, b.h) };
  },
  (y) => row(y, [
    { title: 'Matters most for intoxication' },
    { title: 'Helps you choose alternative charges' },
  ], { gap: 16, card: { tsize: 17, pad: 16, align: 'middle', fill: C.panel } }),
],
'Offences sorted by DPP v Majewski. Specific intent, where only intention will do: murder, s18, theft, robbery and attempt. Basic intent, where recklessness is enough: manslaughter, s20, s47, assault and battery. The split matters most for intoxication and helps in choosing alternative charges.',
'Specific intent needs intention; basic intent can be satisfied by recklessness.', H2.fit);

// 05 Ladder with maximum sentences
F('05-ladder-of-offences', 'A ladder of offences', 'Maximum sentences mark seriousness', [
  (y) => {
    const L = [
      ['Murder', 'mandatory life', C.mustard],
      ['s18 · Robbery', 'life', C.cream],
      ['Theft', '7 years', C.panel],
      ['s47 · s20', '5 years', C.tealLight],
      ['Assault · Battery', '6 months (summary)', C.tealLight],
    ];
    const h = 60, gap = 12; let s = '';
    L.forEach(([a, b, f], i) => {
      const yy = y + i * (h + gap), w = 360 + (L.length - 1 - i) * 0;
      s += `<rect x="150" y="${yy}" width="460" height="${h}" rx="12" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(172, yy + 38, a, { size: 20, weight: 700 }) + T(590, yy + 38, b, { size: 18, weight: 600, anchor: 'end' });
    });
    const tot = L.length * (h + gap) - gap;
    s += `<line x1="100" y1="${y + tot}" x2="100" y2="${y + 4}" stroke="${C.ink}" stroke-width="4" marker-end="url(#ah)"/>` + T(86, y + tot / 2, 'more serious', { size: 16, weight: 600, anchor: 'middle' }).replace('<text ', `<text transform="rotate(-90 86 ${y + tot / 2})" `);
    s += card(640, y, 230, { title: 'Move down', body: 'If the mens rea for the higher offence cannot be proved: s18 to s20, murder to manslaughter', size: 16, tsize: 18, pad: 16, bfill: C.ink, fill: C.cream, edge: C.olive }).s;
    s += card(640, y + 190, 230, { title: 'Attempt', body: 'Same maximum as the full offence (s4(1) CAA 1981)', size: 16, tsize: 18, pad: 16, bfill: C.ink }).s;
    return { s, h: tot };
  },
],
'Offences ranked by maximum sentence: murder (mandatory life); s18 and robbery (life); theft (seven years); s47 and s20 (five years); assault and battery (six months, summary). If the mens rea for a higher offence fails, move down the ladder, for example s18 to s20. Attempt carries the same maximum as the full offence.',
'Start at the top of the ladder and move down when an element fails.', H2.fit);

// 06 Method
F('06-problem-method', 'A method for problem questions', '', [
  (y) => steps(y, [
    { title: 'Identify', body: 'The most serious offence the facts support, and the victim' },
    { title: 'State the rule', body: 'For each element, with its source' },
    { title: 'Give authority', body: 'For each element in dispute' },
    { title: 'Apply', body: 'Use the facts’ own details' },
    { title: 'Consider alternatives', body: 'Where an element is doubtful, move down the ladder' },
    { title: 'Consider defences', body: 'Stating who must prove what' },
    { title: 'Conclude', body: 'On likely liability: which offence, and why the alternatives fail' },
  ], { size: 16, tsize: 18, highlight: 4, gap: 8, pad: 12 }),
],
'Seven steps: identify the most serious offence and victim; state the rule and its source; give authority for disputed elements; apply to the facts; consider alternatives down the ladder; consider defences and the burden; conclude on likely liability.',
'Source, element, authority, application, conclusion: the skeleton of every answer.', H2.method);

// 07 Ed and Fran
F('07-worked-example-ed', 'Worked example: Ed punches Fran', 'He intends to hurt her but not seriously; she fractures her skull', [
  (y) => {
    const a = card(30, y, 560, { kicker: 'START AT THE TOP: s18', title: 'Fails on mens rea', body: ['Fracture is really serious harm (*DPP v Smith*, 1961)', 's18 needs intention to cause GBH; Ed meant only to hurt'], bullets: true, size: 16, tsize: 18, pad: 18, bfill: C.ink, fill: C.panel, edge: C.rust, kfill: C.rust, gap: 4 });
    const yb = y + a.h + 44;
    const b = card(30, yb, 560, { kicker: 'MOVE DOWN: s20', title: 'Satisfied', body: ['Inflicting GBH (*Burstow*: no direct force needed, though here there was)', 'Mens rea: foresee some harm (*Mowatt*, 1968). Ed intended to hurt, so he foresaw some harm'], bullets: true, size: 16, tsize: 18, pad: 18, bfill: C.ink, fill: C.tealLight, edge: C.tealDark, gap: 4 });
    const c = card(620, y, 250, { kicker: 'DEFENCES', body: 'None on the facts', size: 16, pad: 18, bfill: C.ink });
    const d = card(620, yb, 250, { kicker: 'CONCLUSION', title: 'Likely guilty under s20', body: 'Basic intent; maximum five years', size: 16, tsize: 18, pad: 18, bfill: C.ink, fill: C.cream, edge: C.olive, minH: b.h, vcenter: true });
    const ar = arrow(310, y + a.h + 4, 310, yb - 4) + T(324, y + a.h + 28, 'mens rea for s18 not proved', { size: 15, weight: 600, fill: C.rust }) + arrow(594, yb + b.h / 2, 616, yb + b.h / 2, { w: 3 });
    return { s: a.s + b.s + c.s + d.s + ar, h: yb + b.h - y };
  },
],
'Ed’s case worked down the ladder. s18 fails: the fracture is really serious harm (DPP v Smith) but Ed did not intend GBH. s20 is satisfied: GBH was inflicted (Burstow) and Ed foresaw some harm (Mowatt). No defences apply, so Ed is likely guilty under s20, a basic intent offence with a five-year maximum.',
'Start at the top, explain why it fails, and move down.', H2.we);

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
