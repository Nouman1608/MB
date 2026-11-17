import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-law-7162-non-fatal-offences-against-the-person';
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
  ca: '## Common assault: assault and battery',
  s47: '## s47: assault occasioning actual bodily harm',
  s20: '## s20: unlawful and malicious wounding or inflicting GBH',
  s18: '## s18: wounding or causing GBH with intent',
  side: '## The offences side by side',
  we: '## Worked example',
};
const AR = (x1, y1, x2, y2, o) => arrow(x1, y1, x2, y2, { w: 3.5, ...o });

// 01 Assault
F('01-assault', 'Assault: apprehension of immediate unlawful force', 'Actus reus. Mens rea: intention or subjective recklessness as to that apprehension', [
  (y) => grid(y, [
    { kicker: 'APPREHENSION, NOT FEAR', body: 'The victim must expect force. ✗ *Lamb* (1967): victim did not see the threat', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'IMMEDIATE = IMMINENT', body: '*Smith v Woking* (1983): looking through a bedsit window at night. *Constanza* (1997): letters', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'WORDS AND SILENCE', body: '*Ireland* (1997): silent telephone calls. *Read v Coker* (1853): a conditional threat still counts' },
    { kicker: 'WORDS CAN CANCEL', body: '✗ *Tuberville v Savage* (1669): “If it were not assize-time …”', kfill: C.rust, edge: C.rust },
    { kicker: 'FAKE WEAPONS', body: '*Logdon v DPP* (1976): imitation gun, if the victim believes it real', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'PENALTY', body: 'Common law offence, charged under s39 Criminal Justice Act 1988: summary, six months maximum' },
  ], 2, { gap: 14, vgap: 12, vcenter: false, card: { size: 16, pad: 16, bfill: C.ink } }),
],
'Assault is causing the victim to apprehend immediate unlawful force. Apprehension, not fear (Lamb). Immediate means imminent (Smith v Woking; Constanza). Silence and conditional threats can be enough (Ireland; Read v Coker), but words can cancel a threat (Tuberville v Savage). An imitation gun counts if believed real (Logdon). It is charged under s39 Criminal Justice Act 1988.',
'The victim must expect immediate force; no touch and no fear are needed.', H2.ca);

// 02 Battery
F('02-battery-routes', 'Battery: five ways force is applied', 'Application of unlawful force; no injury needed', [
  (y) => {
    const items = [
      ['Direct touch', 'Any touching: *Collins v Wilcock* (1984). Everyday jostling is impliedly consented to'],
      ['Through clothing', 'Touching clothes is touching the person: *R v Thomas* (1985)'],
      ['Indirect force', '*Haystead* (2000): baby dropped after the mother was punched. *DPP v K* (1990): acid in a hand dryer'],
      ['Continuing act', '*Fagan* (1969): drove onto an officer’s foot and refused to move'],
      ['Omission', '*DPP v Santana-Bermudez* (2003): failed to reveal a needle before a search'],
    ];
    let s = '', cy = y;
    items.forEach(([k, v], i) => {
      const c = card(250, cy, 620, { body: v, size: 16, pad: 14, bfill: C.ink, minH: 62, vcenter: true });
      s += `<rect x="30" y="${cy}" width="206" height="${c.h}" rx="12" fill="${i < 2 ? C.tealLight : C.cream}" stroke="${i < 2 ? C.tealDark : C.olive}" stroke-width="2.5"/>` + T(133, cy + c.h / 2 + 7, k, { size: 18, weight: 700, anchor: 'middle' }) + c.s;
      cy += c.h + 10;
    });
    return { s, h: cy - y - 10 };
  },
  (y) => note(y, 'Mens rea', 'Intention or subjective recklessness as to applying force (*Savage; Parmenter*, 1991; *Cunningham*, 1957).', { size: 16 }),
],
'Five ways a battery is committed: direct touch (Collins v Wilcock), through clothing (R v Thomas), indirect force (Haystead; DPP v K), a continuing act (Fagan) and an omission (DPP v Santana-Bermudez). The mens rea is intention or subjective recklessness as to applying force.',
'Force can be slight, indirect, continuing or even an omission.', H2.ca, { gap: 18 });

// 03 Classifying the harm
F('03-classify-harm', 'Start with the injury: ABH, wound or GBH?', '', [
  (y) => {
    const cols = [
      ['ABH', 's47', 'More than transient or trifling: any hurt interfering with health or comfort (*Miller*, 1954)', ['Psychiatric injury, not mere fear or panic (*Chan-Fook*)', 'Cutting off a substantial amount of hair (*DPP v Smith*, 2006)', 'Brief loss of consciousness (*T v DPP*)'], C.tealLight, C.tealDark],
      ['WOUND', 's20 / s18', 'A break in **both layers** of the skin (*JCC v Eisenhower*, 1984)', ['Not an internal rupture of blood vessels', 'Not a bruise'], C.cream, C.olive],
      ['GBH', 's20 / s18', '**Really serious harm** (*DPP v Smith*, 1961); “serious harm” acceptable (*Saunders*)', ['Judged against the actual victim (*Bollom*)', 'Several injuries together (*Brown and Stratton*)', 'Serious psychiatric injury (*Burstow*)', 'Reckless HIV infection (*Dica*)'], '#f3d9c9', C.rust],
    ];
    const W = 270, gap = 15; let s = '', H = 0;
    const cards = cols.map(([n, o, def, list, f, e], i) => {
      const x = 30 + i * (W + gap);
      const c = card(x, y + 72, W, { body: [def, ...list], size: 15, pad: 14, bfill: C.ink, gap: 6, bullets: false });
      return { x, n, o, f, e, def, list, h: c.h };
    });
    H = Math.max(...cards.map((c) => c.h));
    cards.forEach(({ x, n, o, f, e, def, list }) => {
      s += `<rect x="${x}" y="${y}" width="${W}" height="62" rx="12" fill="${f}" stroke="${e}" stroke-width="2.5"/>` + T(x + W / 2, y + 30, n, { size: 21, weight: 700, anchor: 'middle' }) + T(x + W / 2, y + 52, o, { size: 15, anchor: 'middle', fill: C.muted });
      s += card(x, y + 72, W, { body: def, size: 15, pad: 14, bfill: C.ink, minH: H }).s;
      const p = card(x, y + 72, W, { body: def, size: 15, pad: 14, bfill: C.ink, nobox: true });
      let cy = y + 72 + p.h + 6;
      list.forEach((l) => { const q = para(x + 14, cy + 12, l, W - 28, { size: 15, fill: C.ink, bullet: true }); s += q.s; cy += q.h + 4; });
    });
    return { s, h: 72 + H + 30 };
  },
  (y) => note(y, '', 'Test from the top of the ladder down: classify the harm, then try s18, s20 and s47 in turn.', { size: 17, align: 'middle' }),
],
'Three categories of harm. ABH (s47): more than transient or trifling (Miller), including psychiatric injury but not mere fear (Chan-Fook), cutting off hair and brief unconsciousness. Wound (s20 or s18): a break in both layers of skin (Eisenhower), not internal bleeding. GBH (s20 or s18): really serious harm (DPP v Smith), judged against the actual victim (Bollom), possibly from several injuries, serious psychiatric injury (Burstow) or reckless HIV infection (Dica).',
'Classify the injury first; it decides which offences are in play.', H2.s20, { gap: 16 });

// 04 Mens rea gap / correspondence
F('04-mens-rea-gap', 'What must the defendant intend or foresee?', 'The gap between the harm caused and the fault required', [
  (y) => {
    const lv = ['force or apprehension', 'some harm', 'ABH', 'GBH / wound'];
    const x0 = 250, step = 150;
    let s = lv.map((l, i) => T(x0 + i * step + 75, y + 18, l, { size: 15, weight: 700, anchor: 'middle', fill: C.muted })).join('');
    [0, 1, 2].forEach((r) => lv.forEach((_, i) => { const yy = y + 44 + r * 108; s += `<line x1="${x0 + i * step + 75}" y1="${(r ? yy : y + 28)}" x2="${x0 + i * step + 75}" y2="${yy + 44}" stroke="${C.panelEdge}" stroke-width="2" stroke-dasharray="5 6"/>`; }));
    const rows = [
      ['s47', 'battery', 0, 2, 'Mens rea of the assault or battery only (*Roberts*; *Savage*)'],
      ['s20', 'some harm', 1, 3, 'Intention or recklessness as to **some** harm (*Mowatt*; *Parmenter*)'],
      ['s18', 'GBH', 3, 3, 'Intention to cause GBH; recklessness not enough (*Belfon*)'],
    ];
    rows.forEach(([o, _, mr, harm, txt], i) => {
      const yy = y + 44 + i * 108;
      s += `<rect x="30" y="${yy}" width="200" height="92" rx="12" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(130, yy + 54, o, { size: 26, weight: 700, anchor: 'middle' });
      const cx = (k) => x0 + k * step + 75;
      s += `<rect x="${cx(mr) - 14}" y="${yy + 10}" width="${cx(harm) - cx(mr) + 28}" height="30" rx="15" fill="${mr === harm ? C.tealLight : C.cream}" stroke="${mr === harm ? C.tealDark : C.olive}" stroke-width="2"/>`;
      s += `<circle cx="${cx(mr)}" cy="${yy + 25}" r="11" fill="${C.tealDark}" stroke="${C.ink}" stroke-width="2"/>` + `<circle cx="${cx(harm)}" cy="${yy + 25}" r="11" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>`;
      if (mr !== harm) s += T((cx(mr) + cx(harm)) / 2, yy + 31, 'gap', { size: 15, weight: 700, anchor: 'middle', fill: C.olive }); else s += T(cx(harm) - 24, yy + 31, 'match', { size: 15, weight: 700, anchor: 'end', fill: C.tealDark });
      s += para(250, yy + 66, txt, 610, { size: 15, fill: C.ink }).s;
    });
    s += `<circle cx="262" cy="${y + 384}" r="9" fill="${C.tealDark}"/>` + T(278, y + 390, 'fault required', { size: 15 }) + `<circle cx="432" cy="${y + 384}" r="9" fill="${C.rust}"/>` + T(448, y + 390, 'harm caused', { size: 15 });
    return { s, h: 398 };
  },
  (y) => note(y, 'Reform', 'The gaps breach **correspondence**; s47 and s20 share a five-year maximum (**fair labelling**). The Law Commission’s 2015 report proposed a modern statute; not enacted.', { size: 16 }),
],
'For s47 the defendant need only have the mens rea of the assault or battery, though ABH results (Roberts; Savage). For s20, intention or recklessness as to some harm is enough, though a wound or GBH results (Mowatt; Parmenter). For s18, intention to cause GBH matches the harm (Belfon). The gaps breach correspondence; the Law Commission’s 2015 proposals have not been enacted.',
'Only s18 matches fault to harm; s47 and s20 leave a gap.', H2.s18, { gap: 18 });

// 05 Ladder side by side
F('05-offence-ladder', 'The ladder of non-fatal offences', 'Offences Against the Person Act 1861 and the common law', [
  (y) => {
    const rows = [
      ['s18', 'Wound or GBH, with intent', 'Intention to cause GBH, or to resist arrest', 'Life', '#f3d9c9', C.rust],
      ['s20', 'Wound or GBH', 'Intention or recklessness as to some harm', '5 years', C.cream, C.olive],
      ['s47', 'ABH', 'Mens rea of assault or battery only', '5 years', C.cream, C.olive],
      ['Battery', 'Unlawful force', 'Intention or recklessness as to force', '6 months', C.tealLight, C.tealDark],
      ['Assault', 'Apprehension of force', 'Intention or recklessness as to apprehension', '6 months', C.tealLight, C.tealDark],
    ];
    let s = '', cy = y;
    rows.forEach(([o, h, mr, mx, f, e], i) => {
      const ind = (4 - i) * 34, w = 840 - 4 * 34;
      s += `<rect x="${30 + ind}" y="${cy}" width="${w}" height="70" rx="12" fill="${f}" stroke="${e}" stroke-width="2.5"/>`;
      s += T(48 + ind, cy + 43, o, { size: 22, weight: 700 }) + T(170 + ind, cy + 30, h, { size: 17, weight: 700 }) + T(170 + ind, cy + 54, mr, { size: 15, fill: C.muted });
      s += `<rect x="${30 + ind + w - 112}" y="${cy + 18}" width="96" height="34" rx="17" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>` + T(30 + ind + w - 64, cy + 41, mx, { size: 16, weight: 700, anchor: 'middle' });
      cy += 80;
    });
    return { s, h: cy - y - 10 };
  },
],
'A ladder from assault and battery (six months, intention or recklessness as to apprehension or force) through s47 (ABH, mens rea of the assault or battery, five years) and s20 (wound or GBH, intention or recklessness as to some harm, five years) to s18 (wound or GBH with intent to cause GBH or resist arrest, life).',
'Harm, fault and maximum sentence rise together, except that s47 and s20 share a maximum.', H2.side);

// 06 Zara
F('06-zara-worked-example', 'Worked example: Zara’s push', 'Yusuf cuts his hand on a broken bottle (stitches) and sprains his wrist', [
  (y) => card(30, y, 840, { kicker: 'CLASSIFY THE HARM', title: 'Cut needing stitches: both skin layers broken = a wound (*Eisenhower*)', body: 'So s18 and s20 are possible', size: 16, tsize: 18, pad: 16, bfill: C.ink, fill: C.cream, edge: C.olive, kfill: C.olive }),
  (y) => ({ s: AR(450, y - 18, 450, y + 2), h: 0 }),
  (y) => {
    const rows = [
      ['s18', 'Intention to cause GBH? A push: no', 'Fails', C.rust, C.panel],
      ['s20', 'Wound: yes. Inflict: yes. Foresaw some harm (*Mowatt*)? Near broken glass, possibly: for the jury', 'Possible', C.olive, C.cream],
      ['s47', 'Battery (the push) occasioning ABH (*Miller*); she intended to push', 'Satisfied', C.tealDark, C.tealLight],
    ];
    let s = '', cy = y;
    rows.forEach(([o, why, res, col, f]) => {
      const c = card(130, cy, 560, { body: why, size: 16, pad: 14, bfill: C.ink, minH: 66, vcenter: true });
      s += `<rect x="30" y="${cy}" width="86" height="${c.h}" rx="12" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + T(73, cy + c.h / 2 + 8, o, { size: 22, weight: 700, anchor: 'middle' }) + c.s;
      s += `<rect x="706" y="${cy}" width="164" height="${c.h}" rx="12" fill="${f}" stroke="${col}" stroke-width="2.5"/>` + T(788, cy + c.h / 2 + 7, res, { size: 19, weight: 700, anchor: 'middle', fill: col });
      cy += c.h + 10;
    });
    return { s, h: cy - y - 10 };
  },
  (y) => note(y, 'Conclusion', 's20 if foresight of some harm is proved; otherwise s47.', { size: 18 }),
],
'Zara’s push causes a cut needing stitches, a wound under Eisenhower. Testing from the top: s18 fails because there is no intention to cause GBH; s20 is possible if she foresaw some harm (Mowatt), a jury question; s47 is satisfied as a battery occasioning ABH. Conclusion: s20 if foresight is proved, otherwise s47.',
'Classify the harm, then test from s18 downwards.', H2.we, { gap: 20 });

if (WARN.length) console.error('LAYOUT WARNINGS:\n' + WARN.join('\n'));
