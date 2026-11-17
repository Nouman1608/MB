import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

// ---- Local layout helpers for AP figures (self-contained; house style only) ----
const X = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#\d+;)/g, '&amp;').replace(/</g, '&lt;');
const T = (x, y, s, o = {}) => t(x, y, X(s), o);
// Inter advance widths (em) for measuring text
const FW = {"r":{" ":0.281,"!":0.288,"\"":0.466,"#":0.633,"$":0.642,"%":0.982,"&":0.644,"'":0.3,"(":0.365,")":0.365,"*":0.501,"+":0.662,",":0.288,"-":0.46,".":0.288,"/":0.36,"0":0.631,"1":0.407,"2":0.61,"3":0.618,"4":0.646,"5":0.608,"6":0.62,"7":0.566,"8":0.619,"9":0.62,":":0.288,";":0.302,"<":0.662,"=":0.662,">":0.662,"?":0.511,"@":0.966,"A":0.69,"B":0.654,"C":0.73,"D":0.722,"E":0.601,"F":0.59,"G":0.746,"H":0.743,"I":0.269,"J":0.571,"K":0.672,"L":0.565,"M":0.903,"N":0.753,"O":0.765,"P":0.639,"Q":0.765,"R":0.644,"S":0.642,"T":0.646,"U":0.744,"V":0.69,"W":0.985,"X":0.682,"Y":0.679,"Z":0.629,"[":0.365,"\\":0.36,"]":0.365,"^":0.471,"_":0.456,"`":0.323,"a":0.562,"b":0.612,"c":0.571,"d":0.612,"e":0.583,"f":0.37,"g":0.613,"h":0.591,"i":0.242,"j":0.242,"k":0.549,"l":0.242,"m":0.876,"n":0.591,"o":0.6,"p":0.612,"q":0.612,"r":0.376,"s":0.528,"t":0.327,"u":0.591,"v":0.562,"w":0.818,"x":0.546,"y":0.562,"z":0.552,"{":0.426,"|":0.333,"}":0.426,"~":0.662,"—":1.0,"–":0.5,"→":0.954,"←":0.954,"…":0.864,"“":0.44,"”":0.44,"‘":0.261,"’":0.261,"é":0.583,"•":0.562,"×":0.662},"b":{" ":0.237,"!":0.338,"\"":0.552,"#":0.649,"$":0.655,"%":1.016,"&":0.672,"'":0.339,"(":0.377,")":0.377,"*":0.559,"+":0.679,",":0.334,"-":0.468,".":0.334,"/":0.388,"0":0.674,"1":0.431,"2":0.63,"3":0.646,"4":0.676,"5":0.639,"6":0.649,"7":0.582,"8":0.651,"9":0.649,":":0.334,";":0.343,"<":0.679,"=":0.679,">":0.679,"?":0.56,"@":1.016,"A":0.747,"B":0.662,"C":0.74,"D":0.722,"E":0.607,"F":0.587,"G":0.75,"H":0.747,"I":0.281,"J":0.584,"K":0.719,"L":0.565,"M":0.932,"N":0.762,"O":0.771,"P":0.648,"Q":0.777,"R":0.657,"S":0.655,"T":0.667,"U":0.732,"V":0.747,"W":1.038,"X":0.738,"Y":0.731,"Z":0.664,"[":0.377,"\\":0.388,"]":0.377,"^":0.487,"_":0.476,"`":0.365,"a":0.581,"b":0.63,"c":0.588,"d":0.63,"e":0.596,"f":0.398,"g":0.632,"h":0.623,"i":0.271,"j":0.271,"k":0.58,"l":0.271,"m":0.913,"n":0.623,"o":0.613,"p":0.63,"q":0.63,"r":0.407,"s":0.56,"t":0.366,"u":0.623,"v":0.6,"w":0.85,"x":0.58,"y":0.602,"z":0.573,"{":0.469,"|":0.372,"}":0.469,"~":0.679,"—":1.0,"–":0.5,"→":0.954,"←":0.954,"…":1.002,"“":0.54,"”":0.532,"‘":0.311,"’":0.311,"é":0.596,"•":0.474,"×":0.679},"s":{" ":0.252,"!":0.321,"\"":0.523,"#":0.644,"$":0.65,"%":1.004,"&":0.663,"'":0.326,"(":0.373,")":0.373,"*":0.54,"+":0.673,",":0.319,"-":0.465,".":0.319,"/":0.379,"0":0.66,"1":0.423,"2":0.623,"3":0.636,"4":0.666,"5":0.629,"6":0.64,"7":0.576,"8":0.64,"9":0.64,":":0.319,";":0.329,"<":0.673,"=":0.673,">":0.673,"?":0.543,"@":0.999,"A":0.728,"B":0.659,"C":0.737,"D":0.722,"E":0.605,"F":0.588,"G":0.749,"H":0.746,"I":0.277,"J":0.58,"K":0.703,"L":0.565,"M":0.922,"N":0.759,"O":0.769,"P":0.645,"Q":0.773,"R":0.652,"S":0.65,"T":0.66,"U":0.736,"V":0.728,"W":1.02,"X":0.72,"Y":0.713,"Z":0.652,"[":0.373,"\\":0.379,"]":0.373,"^":0.481,"_":0.469,"`":0.351,"a":0.574,"b":0.624,"c":0.583,"d":0.624,"e":0.591,"f":0.389,"g":0.625,"h":0.612,"i":0.262,"j":0.262,"k":0.569,"l":0.262,"m":0.9,"n":0.612,"o":0.609,"p":0.624,"q":0.624,"r":0.397,"s":0.549,"t":0.353,"u":0.612,"v":0.587,"w":0.839,"x":0.569,"y":0.588,"z":0.566,"{":0.455,"|":0.359,"}":0.455,"~":0.673,"—":1.0,"–":0.5,"→":0.954,"←":0.954,"…":0.956,"“":0.507,"”":0.501,"‘":0.294,"’":0.294,"é":0.591,"•":0.503,"×":0.673},"i":{" ":0.281,"!":0.288,"\"":0.466,"#":0.633,"$":0.641,"%":0.982,"&":0.689,"'":0.3,"(":0.365,")":0.364,"*":0.501,"+":0.662,",":0.288,"-":0.461,".":0.288,"/":0.36,"0":0.63,"1":0.407,"2":0.61,"3":0.617,"4":0.647,"5":0.606,"6":0.619,"7":0.567,"8":0.617,"9":0.619,":":0.288,";":0.301,"<":0.662,"=":0.662,">":0.662,"?":0.511,"@":0.964,"A":0.69,"B":0.654,"C":0.73,"D":0.721,"E":0.602,"F":0.59,"G":0.746,"H":0.743,"I":0.269,"J":0.571,"K":0.672,"L":0.565,"M":0.903,"N":0.753,"O":0.765,"P":0.639,"Q":0.765,"R":0.644,"S":0.641,"T":0.646,"U":0.744,"V":0.69,"W":0.985,"X":0.682,"Y":0.679,"Z":0.63,"[":0.365,"\\":0.359,"]":0.365,"^":0.471,"_":0.456,"`":0.322,"a":0.614,"b":0.613,"c":0.572,"d":0.613,"e":0.576,"f":0.373,"g":0.613,"h":0.591,"i":0.243,"j":0.242,"k":0.549,"l":0.242,"m":0.876,"n":0.591,"o":0.6,"p":0.613,"q":0.613,"r":0.377,"s":0.527,"t":0.328,"u":0.592,"v":0.562,"w":0.818,"x":0.546,"y":0.562,"z":0.552,"{":0.427,"|":0.333,"}":0.427,"~":0.662,"—":1.001,"–":0.501,"→":0.954,"←":0.954,"…":0.863,"“":0.48,"”":0.48,"‘":0.3,"’":0.3,"é":0.576,"•":0.562,"×":0.662},"bi":{" ":0.237,"!":0.337,"\"":0.552,"#":0.649,"$":0.654,"%":1.016,"&":0.691,"'":0.339,"(":0.377,")":0.373,"*":0.559,"+":0.679,",":0.334,"-":0.468,".":0.334,"/":0.388,"0":0.674,"1":0.432,"2":0.63,"3":0.646,"4":0.677,"5":0.639,"6":0.649,"7":0.582,"8":0.65,"9":0.649,":":0.334,";":0.342,"<":0.679,"=":0.679,">":0.679,"?":0.559,"@":1.015,"A":0.747,"B":0.662,"C":0.74,"D":0.722,"E":0.613,"F":0.587,"G":0.75,"H":0.747,"I":0.281,"J":0.584,"K":0.719,"L":0.565,"M":0.932,"N":0.762,"O":0.771,"P":0.648,"Q":0.771,"R":0.657,"S":0.654,"T":0.668,"U":0.732,"V":0.747,"W":1.038,"X":0.738,"Y":0.731,"Z":0.665,"[":0.377,"\\":0.386,"]":0.377,"^":0.487,"_":0.476,"`":0.365,"a":0.631,"b":0.63,"c":0.588,"d":0.63,"e":0.59,"f":0.41,"g":0.632,"h":0.623,"i":0.271,"j":0.271,"k":0.58,"l":0.271,"m":0.913,"n":0.623,"o":0.614,"p":0.63,"q":0.63,"r":0.408,"s":0.56,"t":0.367,"u":0.623,"v":0.6,"w":0.85,"x":0.58,"y":0.602,"z":0.573,"{":0.469,"|":0.372,"}":0.469,"~":0.679,"—":1.0,"–":0.5,"→":0.954,"←":0.954,"…":1.001,"“":0.581,"”":0.573,"‘":0.351,"’":0.351,"é":0.59,"•":0.474,"×":0.679}};
const tw = (s, size = 17, weight = 400, italic = false) => { const k = weight >= 650 ? (italic ? 'bi' : 'b') : weight >= 550 ? 's' : italic ? 'i' : 'r'; let w = 0; for (const ch of String(s)) w += FW[k][ch] ?? 0.6; return w * size; };
function wrap(s, width, size = 17, weight = 400, italic = false) {
  const out = []; let cur = '';
  for (const w of String(s).split(/\s+/).filter(Boolean)) {
    if (!cur) cur = w; else if (tw(cur + ' ' + w, size, weight, italic) <= width) cur += ' ' + w; else { out.push(cur); cur = w; }
  }
  if (cur) out.push(cur);
  return out;
}
// Wrapped text block; x is left edge (or centre with anchor middle). Returns {s, h}.
function para(x, y, s, width, o = {}) {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32), weight = o.weight || 400;
  if (o.bullet) {
    const ind = size * 0.95;
    const w1 = wrap(s, width - ind, size, weight, o.italic);
    return { s: T(x, y, '•', { ...o, weight: 700 }) + w1.map((l, i) => T(x + ind, y + i * lh, l, o)).join(''), h: w1.length * lh };
  }
  const lines = wrap(s, width, size, weight, o.italic);
  return { s: lines.map((l, i) => T(x, y + i * lh, l, o)).join(''), h: lines.length * lh };
}
// Card: panel with optional kicker, title and body (string or array). Returns {s, h}.
function card(x, y, w, o = {}) {
  const pad = o.pad ?? 20, ts = o.tsize ?? 20, bs = o.size ?? 17, mid = o.align === 'middle';
  const tx = mid ? x + w / 2 : x + pad, anchor = mid ? 'middle' : 'start';
  const measure = (y0) => {
    let cy = y0 + pad, inner = '';
    if (o.kicker) { inner += T(tx, cy + 13, o.kicker, { size: 15, weight: 700, anchor, fill: o.kfill || C.tealDark }); cy += 25; }
    if (o.title) { const p = para(tx, cy + ts * 0.8, o.title, w - 2 * pad, { size: ts, weight: 700, anchor, fill: o.tfill || C.ink }); inner += p.s; cy += p.h; }
    if (o.body) {
      const items = Array.isArray(o.body) ? o.body : [o.body];
      if (o.title || o.kicker) cy += 6;
      items.forEach((it, i) => {
        const p = para(tx, cy + bs * 0.8, it, w - 2 * pad, { size: bs, anchor, fill: o.bfill || C.muted, bullet: o.bullets, weight: o.bweight, italic: o.italic });
        inner += p.s; cy += p.h + (i < items.length - 1 ? (o.gap ?? 5) : 0);
      });
    }
    return { inner, h: cy - y0 + pad - 4 };
  };
  let m = measure(y);
  const h = Math.max(o.minH || 0, m.h);
  if (o.vcenter && h > m.h) m = measure(y + (h - m.h) / 2);
  return { s: panel(x, y, w, h, o.fill || C.panel, o.edge || C.panelEdge) + m.inner, h };
}
const cardH = (w, o) => card(0, 0, w, o).h;
// A row of n equal-height cards, optional arrows between. Returns {s, h, xs, w}.
function row(y, items, o = {}) {
  const x0 = o.x ?? 30, W0 = o.w ?? 840, gap = o.gap ?? (o.arrows ? 46 : 18), n = items.length;
  const w = (W0 - gap * (n - 1)) / n;
  const h = Math.max(o.minH || 0, ...items.map((it) => cardH(w, { ...o.card, ...it })));
  let s = ''; const xs = [];
  items.forEach((it, i) => {
    const x = x0 + i * (w + gap); xs.push(x);
    s += card(x, y, w, { vcenter: !(it.kicker || o.card?.kicker), ...o.card, ...it, minH: h }).s;
    if (o.arrows && i < n - 1) s += arrow(x + w + 6, y + h / 2, x + w + gap - 6, y + h / 2, { w: 3.5 });
  });
  return { s, h, xs, w };
}
// Vertical stack of full-width cards with down arrows. Returns {s, h}.
function stack(y, items, o = {}) {
  const x = o.x ?? 30, w = o.w ?? 840, gap = o.gap ?? 40; let s = '', cy = y;
  items.forEach((it, i) => {
    const c = card(x, cy, w, { ...o.card, ...it }); s += c.s; cy += c.h;
    if (i < items.length - 1) { if (o.arrows !== false) s += arrow(x + w / 2, cy + 4, x + w / 2, cy + gap - 6, { w: 3.5 }); cy += gap; }
  });
  return { s, h: cy - y };
}
// Table: cols [{w, head}], rows [[cell strings]]. First column bold by default. Returns {s, h}.
function table(x, y, cols, rows, o = {}) {
  const size = o.size ?? 17, pad = 14, lh = Math.round(size * 1.32), hh = o.headH ?? 50;
  let s = '', cy = y;
  const W = cols.reduce((a, c) => a + c.w, 0);
  s += `<rect x="${x}" y="${y}" width="${W}" height="${hh}" rx="10" fill="${C.ink}"/>`;
  let cx = x; cols.forEach((c) => { s += T(cx + pad, y + hh / 2 + 6, c.head, { size: o.hsize ?? 18, weight: 700, fill: '#ffffff' }); cx += c.w; });
  cy += hh;
  rows.forEach((r, ri) => {
    const cells = r.map((cell, ci) => wrap(cell, cols[ci].w - 2 * pad, size, ci === 0 && o.boldFirst !== false ? 700 : 400, o.italicCols?.includes(ci)));
    const rh = Math.max(...cells.map((l) => l.length)) * lh + 2 * pad - 2;
    s += `<rect x="${x}" y="${cy}" width="${W}" height="${rh}" fill="${o.rowFill?.[ri] || (ri % 2 ? C.panel : '#f8faf9')}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    let ccx = x;
    cells.forEach((lines, ci) => {
      const bold = ci === 0 && o.boldFirst !== false;
      lines.forEach((l, li) => { s += T(ccx + pad, cy + pad + size * 0.85 + li * lh, l, { size, weight: bold ? 700 : 400, fill: ci === 0 ? C.ink : (o.colFill?.[ci] || C.ink), italic: o.italicCols?.includes(ci) }); });
      if (ci > 0) s += `<line x1="${ccx}" y1="${cy}" x2="${ccx}" y2="${cy + rh}" stroke="${C.panelEdge}" stroke-width="2"/>`;
      ccx += cols[ci].w;
    });
    cy += rh;
  });
  return { s, h: cy - y };
}
// Numbered step rows inside one panel. steps: [[title, desc]]. Returns {s, h}.
function steps(x, y, w, items, o = {}) {
  const size = o.size ?? 17, lh = Math.round(size * 1.32), r = o.r ?? 20, gap = o.gap ?? 14;
  let s = '', cy = y;
  items.forEach(([title, desc, hi], i) => {
    const tx = x + 2 * r + 22;
    const tw = wrap(title, w - (tx - x) - 10, o.tsize ?? 19, 700);
    const dw = desc ? wrap(desc, w - (tx - x) - 10, size) : [];
    const h = Math.max(2 * r + 6, tw.length * 25 + dw.length * lh + 8);
    s += badge(x + r + 6, cy + r + 4, r, String(i + 1), hi ? C.mustard : C.cream);
    tw.forEach((l, li) => { s += T(tx, cy + 22 + li * 25, l, { size: o.tsize ?? 19, weight: 700 }); });
    dw.forEach((l, li) => { s += T(tx, cy + 22 + tw.length * 25 + 2 + li * lh, l, { size, fill: C.muted }); });
    cy += h + gap;
  });
  return { s, h: cy - y - gap };
}
// Highlighted chip (cream/olive by default).
const chip = (x, y, w, h, label, o = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 12}" fill="${o.fill || C.cream}" stroke="${o.edge || C.olive}" stroke-width="2.5"/>` +
  para(x + w / 2, y + h / 2 + (o.size ?? 17) * 0.35 - ((wrap(label, w - 20, o.size ?? 17, o.weight ?? 700).length - 1) * Math.round((o.size ?? 17) * 1.32)) / 2, label, w - 20, { size: o.size ?? 17, weight: o.weight ?? 700, anchor: 'middle', fill: o.tfill || C.ink }).s;
const elbow = (pts, o = {}) => path('M' + pts.map((p) => p.join(',')).join(' L'), { stroke: o.color || C.ink, w: o.w ?? 3.5, extra: `marker-end="url(#${o.marker || 'ah'})"` + (o.dash ? ` stroke-dasharray="${o.dash}"` : '') });

// Monospace code text (JetBrains Mono, advance 0.6 em)
const MONO = "'DejaVu Sans Mono', 'Liberation Mono', monospace";
const code = (x, y, s, o = {}) => { const lead = (String(s).match(/^ */) || [''])[0].length; const sz = o.size || 18; return `<text x="${x + ((o.anchor || 'start') === 'start' ? lead * sz * 0.6 : 0)}" y="${y}" font-family="${MONO}" style="font-variant-ligatures:none;font-feature-settings:'liga' 0,'calt' 0" font-size="${sz}" font-weight="${o.weight || 400}" fill="${o.fill || C.ink}" text-anchor="${o.anchor || 'start'}">${X(String(s).replace(/^ +/, '')).replace(/ /g, '\u00a0')}</text>`; };
const cw = (s, size = 18) => String(s).length * size * 0.6;
// Variable box: name above, value inside, type tag
const varBox = (x, y, name, type, val, o = {}) => {
  const w = o.w || 120, h = o.h || 64;
  return T(x + w / 2, y - 12, name, { size: 17, weight: 700, anchor: 'middle' }) +
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${o.fill || '#ffffff'}" stroke="${o.edge || C.ink}" stroke-width="${o.sw || 3}"/>` +
    code(x + w / 2, y + h / 2 + 8, val, { size: o.vsize || 24, weight: 700, anchor: 'middle', fill: o.vfill || C.ink }) +
    (type ? T(x + w / 2, y + h + 22, type, { size: 15, anchor: 'middle', fill: C.muted }) : '');
};
// Trace table: vars, rows [stmt, [values], changedIndex, note]
function traceTable(x, y, vars, rows, o = {}) {
  const sw = o.sw || 330, vw = o.vw || 92, nw = 840 - sw - vars.length * vw, hh = 48, size = 17;
  let s = `<rect x="${x}" y="${y}" width="840" height="${hh}" rx="10" fill="${C.ink}"/>`;
  s += T(x + 14, y + 31, 'After statement', { size: 17, weight: 700, fill: '#ffffff' });
  vars.forEach(([v, ty], i) => { s += code(x + sw + i * vw + vw / 2, y + 24, v, { size: 17, weight: 700, anchor: 'middle', fill: '#ffffff' }) + T(x + sw + i * vw + vw / 2, y + 42, ty, { size: 15, anchor: 'middle', fill: C.teal }); });
  if (nw > 40) s += T(x + sw + vars.length * vw + 14, y + 31, 'Working', { size: 17, weight: 700, fill: '#ffffff' });
  let cy = y + hh;
  rows.forEach(([stmt, vals, ch, note], ri) => {
    const nl = note ? wrap(note, nw - 24, 15) : [];
    const rh = Math.max(46, nl.length * 20 + 22);
    s += `<rect x="${x}" y="${cy}" width="840" height="${rh}" fill="${ri % 2 ? C.panel : '#f8faf9'}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    s += code(x + 14, cy + rh / 2 + 6, stmt, { size: o.csize || 16 });
    vals.forEach((v, i) => {
      const cx = x + sw + i * vw;
      if (i === ch) s += `<rect x="${cx + 6}" y="${cy + 6}" width="${vw - 12}" height="${rh - 12}" rx="8" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>`;
      s += code(cx + vw / 2, cy + rh / 2 + 7, v, { size: 18, weight: i === ch ? 700 : 400, anchor: 'middle', fill: v === '-' ? C.muted : C.ink });
      s += `<line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy + rh}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    });
    if (nl.length) { const nx = x + sw + vars.length * vw; s += `<line x1="${nx}" y1="${cy}" x2="${nx}" y2="${cy + rh}" stroke="${C.panelEdge}" stroke-width="2"/>`; nl.forEach((l, li) => { s += T(nx + 12, cy + (rh - nl.length * 20) / 2 + 15 + li * 20, l, { size: 15, fill: C.muted }); }); }
    cy += rh;
  });
  return { s, h: cy - y };
}
const codePanel = (x, y, w, lines, o = {}) => {
  const lh = o.lh || 28, h = lines.length * lh + 26;
  let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${C.ink}"/>`;
  lines.forEach((l, i) => { s += code(x + 18, y + 30 + i * lh, l, { size: o.size || 17, fill: o.hl?.includes(i) ? C.mustard : '#e8eef0', weight: o.hl?.includes(i) ? 700 : 400 }); });
  return { s, h };
};

const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });
export const figures = [];

// ---- Law helpers: *italic* markers for case names inside text ----
const RX = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#\d+;)/g, '&amp;').replace(/</g, '&lt;');
function richInner(s) {
  let out = '', it = false, buf = '';
  const flush = () => { if (buf) out += it ? `<tspan font-style="italic">${RX(buf)}</tspan>` : RX(buf); buf = ''; };
  for (const ch of String(s)) { if (ch === '*') { flush(); it = !it; } else buf += ch; }
  flush();
  return out;
}
const rich = (x, y, s, o = {}) => `<text x="${x}" y="${y}" font-size="${o.size || 17}" font-weight="${o.weight || 400}" fill="${o.fill || C.ink}" text-anchor="${o.anchor || 'start'}">${richInner(s)}</text>`;
function rwrap(s, width, size = 17, weight = 400) {
  const words = String(s).split(/\s+/).filter(Boolean), lines = []; let cur = '', it = false, lineStartIt = false, curStartIt = false;
  const strip = (w) => w.replace(/\*/g, '');
  for (const w of words) {
    const cand = cur ? cur + ' ' + w : w;
    if (cur && tw(strip(cand), size, weight, false) > width) { lines.push((curStartIt ? '*' : '') + cur + (it ? '*' : '')); cur = w; curStartIt = it; }
    else { if (!cur) curStartIt = it; cur = cand; }
    for (const ch of w) if (ch === '*') it = !it;
  }
  if (cur) lines.push((curStartIt ? '*' : '') + cur);
  return lines;
}
function rpara(x, y, s, width, o = {}) {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32), weight = o.weight || 400;
  if (o.bullet) {
    const ind = size * 0.95, ls = rwrap(s, width - ind, size, weight);
    return { s: rich(x, y, '•', { ...o, weight: 700 }) + ls.map((l, i) => rich(x + ind, y + i * lh, l, o)).join(''), h: ls.length * lh };
  }
  const ls = rwrap(s, width, size, weight);
  return { s: ls.map((l, i) => rich(x, y + i * lh, l, o)).join(''), h: ls.length * lh };
}
function lcard(x, y, w, o = {}) {
  const pad = o.pad ?? 20, ts = o.tsize ?? 19, bs = o.size ?? 16, mid = o.align === 'middle';
  const tx = mid ? x + w / 2 : x + pad, anchor = mid ? 'middle' : 'start';
  const measure = (y0) => {
    let cy = y0 + pad, inner = '';
    if (o.kicker) { inner += rich(tx, cy + 13, o.kicker, { size: 15, weight: 700, anchor, fill: o.kfill || C.tealDark }); cy += 25; }
    if (o.title) { const p = rpara(tx, cy + ts * 0.8, o.title, w - 2 * pad, { size: ts, weight: 700, anchor, fill: o.tfill || C.ink }); inner += p.s; cy += p.h; }
    if (o.body) {
      const items = Array.isArray(o.body) ? o.body : [o.body];
      if (o.title || o.kicker) cy += 6;
      items.forEach((itm, i) => { const p = rpara(tx, cy + bs * 0.8, itm, w - 2 * pad, { size: bs, anchor, fill: o.bfill || C.muted, bullet: o.bullets }); inner += p.s; cy += p.h + (i < items.length - 1 ? (o.gap ?? 5) : 0); });
    }
    return { inner, h: cy - y0 + pad - 4 };
  };
  let m = measure(y);
  const h = Math.max(o.minH || 0, m.h);
  if (o.vcenter && h > m.h) m = measure(y + (h - m.h) / 2);
  return { s: panel(x, y, w, h, o.fill || C.panel, o.edge || C.panelEdge) + m.inner, h };
}
function lrow(y, items, o = {}) {
  const x0 = o.x ?? 30, W0 = o.w ?? 840, gap = o.gap ?? (o.arrows ? 46 : 18), n = items.length;
  const w = (W0 - gap * (n - 1)) / n;
  const h = Math.max(o.minH || 0, ...items.map((it) => lcard(0, 0, w, { ...o.card, ...it }).h));
  let s = ''; const xs = [];
  items.forEach((it, i) => {
    const x = x0 + i * (w + gap); xs.push(x);
    s += lcard(x, y, w, { ...o.card, ...it, minH: h }).s;
    if (o.arrows && i < n - 1) s += arrow(x + w + 6, y + h / 2, x + w + gap - 6, y + h / 2, { w: 3.5 });
  });
  return { s, h, xs, w };
}
const lbox = (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 12}" fill="${o.fill || '#ffffff'}" stroke="${o.edge || C.ink}" stroke-width="${o.sw || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const note = (y, s, o = {}) => lbox(30, y, 840, o.h || 64, { fill: o.fill || C.cream, edge: o.edge || C.olive, rx: 14 }) + rich(450, y + (o.h || 64) / 2 + 6, s, { size: o.size || 17, weight: 600, anchor: 'middle', fill: o.tf || C.ink });

export const slug = 'edexcel-a-level-law-yla1-discharge-of-contract-and-frustration';

// 01 Four ways to discharge
{
  let b = '';
  b += lbox(330, 110, 240, 60, { fill: C.ink, edge: C.ink, rx: 30 }) + T(450, 147, 'Contract', { size: 21, weight: 700, anchor: 'middle', fill: '#ffffff' });
  b += T(450, 200, 'obligations come to an end: discharged', { size: 16, anchor: 'middle', fill: C.muted });
  const w = 195, g = 20;
  const items = [
    ['Performance', 'both sides do what they promised', C.tealDark, C.tealLight],
    ['Agreement', 'the parties agree to end it', C.tealDark, C.tealLight],
    ['Breach', 'one side fails to perform, performs defectively or will not perform', C.rust, '#ffffff'],
    ['Frustration', 'a later event, no one’s fault, makes performance impossible, illegal or radically different', C.olive, C.cream],
  ];
  items.forEach(([n, d, e, f], i) => {
    const x = 30 + i * (w + g), cx = x + w / 2;
    b += path(`M450,${210} C450,230 ${cx},226 ${cx},${246}`, { extra: 'marker-end="url(#ah)"' });
    b += lbox(x, 252, w, 210, { fill: f, edge: e, rx: 14 });
    b += T(cx, 290, n, { size: 20, weight: 700, anchor: 'middle', fill: e });
    b += rpara(x + 16, 322, d, w - 32, { size: 16, fill: C.ink }).s;
  });
  b += path('M30,486 L30,496 L440,496 L440,486', { stroke: C.tealDark, w: 3 }) + T(235, 524, 'the normal, peaceful ending', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += path('M460,486 L460,496 L870,496 L870,486', { stroke: C.rust, w: 3 }) + T(665, 524, 'where disputes arise: Paper 2 focus', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  add('01-four-ways-to-discharge',
    svg(900, 556, 'How a contract is discharged', b),
    'A contract is discharged when the parties’ obligations end, by performance, agreement, breach or frustration. Performance and agreement are the normal, peaceful endings; breach and frustration are where disputes arise and where Paper 2 questions concentrate.',
    'Performance and agreement end a contract peacefully; breach and frustration produce the disputes.',
    '## What "discharge" means');
}

// 02 Performance: strict rule and exceptions
{
  let b = '';
  const top = lcard(30, 110, 840, { kicker: 'THE STRICT RULE', title: 'Performance must be complete and exact', body: '*Cutter v Powell* (1795): a sailor died during the voyage; his widow recovered nothing for the weeks he had worked.', fill: C.cream, edge: C.olive, kfill: C.olive, bfill: C.ink });
  b += top.s;
  const y1 = 110 + top.h + 20;
  b += T(450, y1 + 6, 'EXCEPTIONS', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
  // substantial performance pair
  const y2 = y1 + 22;
  const r1 = lrow(y2, [
    { kicker: 'SUBSTANTIAL PERFORMANCE', title: 'Price less cost of defects', body: '*Hoenig v Isaacs* [1952]: decorating with minor defects', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'BUT NOT IF DEFECTS ARE SERIOUS', kfill: C.rust, title: 'Nothing payable', body: '*Bolton v Mahadeva* [1972]: heating gave out fumes and heated poorly', edge: C.rust },
  ], { card: { size: 16, tsize: 19 } });
  b += r1.s;
  const y3 = y2 + r1.h + 16;
  const r2 = lrow(y3, [
    { kicker: 'DIVISIBLE CONTRACTS', title: 'Pay for each completed part', body: 'priced by stage, delivery or week' },
    { kicker: 'ACCEPTED PART PERFORMANCE', title: 'A reasonable sum, if freely accepted', body: 'contrast *Sumpter v Hedges* [1898]: no real choice' },
  ], { card: { size: 16, tsize: 19 } });
  b += r2.s;
  const y4 = y3 + r2.h + 16;
  const r3 = lrow(y4, [
    { kicker: 'PREVENTION', title: 'A reasonable sum for work done', body: '*Planché v Colburn* (1831): series cancelled by the publisher' },
    { kicker: 'TENDER OF PERFORMANCE', title: 'A refused offer to perform discharges', body: '*Startup v Macdonald* (1843): oil late on Saturday evening, but in time' },
  ], { card: { size: 16, tsize: 19 } });
  b += r3.s;
  add('02-performance-exceptions',
    svg(900, y4 + r3.h + 30, 'Performance: the rule and its exceptions', b),
    'The strict rule from Cutter v Powell (1795) requires complete and exact performance. Exceptions: substantial performance (Hoenig v Isaacs) but not where defects are serious (Bolton v Mahadeva); divisible contracts; freely accepted part performance (contrast Sumpter v Hedges); prevention (Planché v Colburn); and refused tender of performance (Startup v Macdonald).',
    'Exact performance is the rule; five exceptions soften it.',
    '## Discharge by performance');
}

// 03 Agreement: consideration on both sides?
{
  let b = '';
  b += T(450, 132, 'The agreement to end the contract is itself a contract: it needs consideration', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  const col = (x, title, state, how, label, e, f) => {
    let s = lbox(x, 152, 411, 330, { fill: f, edge: e, rx: 14 });
    s += T(x + 205, 190, title, { size: 21, weight: 700, anchor: 'middle', fill: e });
    s += T(x + 205, 216, state, { size: 16, anchor: 'middle', fill: C.muted });
    s += how;
    s += lbox(x + 30, 420, 351, 46, { fill: '#ffffff', edge: e, rx: 23 }) + T(x + 205, 449, label, { size: 17, weight: 700, anchor: 'middle', fill: e });
    return s;
  };
  const person = (cx, cy, lab, done) => `<circle cx="${cx}" cy="${cy}" r="28" fill="${done ? C.teal : '#ffffff'}" stroke="${C.ink}" stroke-width="2.5"/>` + T(cx, cy + 6, lab, { size: 18, weight: 700, anchor: 'middle' });
  b += col(30, 'Bilateral discharge', 'both sides still have obligations',
    person(110, 290, 'A') + person(360, 290, 'B') + arrow(146, 276, 324, 276, { color: C.tealDark, marker: 'ahT' }) + arrow(324, 306, 146, 306, { color: C.tealDark, marker: 'ahT' }) +
    T(235, 262, 'gives up rights', { size: 15, anchor: 'middle', fill: C.tealDark }) + T(235, 330, 'gives up rights', { size: 15, anchor: 'middle', fill: C.tealDark }) +
    rpara(54, 370, 'Mutual release is consideration on both sides.', 363, { size: 16 }).s, 'mutual release', C.tealDark, C.tealLight);
  b += col(459, 'Unilateral discharge', 'one party has already performed',
    person(539, 290, 'A') + T(539, 340, 'performed', { size: 15, anchor: 'middle', fill: C.muted }) + person(789, 290, 'B') +
    arrow(753, 290, 575, 290, { color: C.olive, marker: 'ahO' }) + T(664, 276, 'something new, or a deed', { size: 15, anchor: 'middle', fill: C.olive }) +
    rpara(483, 370, 'B must give fresh consideration, or the release is made by deed.', 363, { size: 16 }).s, 'accord and satisfaction', C.olive, C.cream);
  const r = lrow(506, [
    { kicker: 'TERMS IN THE CONTRACT', title: 'Built-in endings', body: 'a notice period in an employment contract, or a condition on which it ends' },
    { kicker: 'NOVATION', title: 'A new contract replaces the old', body: 'often with a new party' },
  ], { card: { size: 16, tsize: 19 } });
  b += r.s;
  add('03-discharge-by-agreement',
    svg(900, 506 + r.h + 30, 'Discharge by agreement', b),
    'An agreement to end a contract needs consideration. In bilateral discharge both parties still have obligations, so mutual release is consideration on both sides. In unilateral discharge one party has already performed, so the other must give something new or use a deed: accord and satisfaction. Contracts can also end under their own terms or by novation.',
    'Ending a contract by agreement still needs consideration, unless a deed is used.',
    '## Discharge by agreement');
}

// 04 Breach: which breaches allow termination
{
  let b = '';
  b += lbox(250, 110, 400, 70, { fill: C.ink, edge: C.ink, rx: 14 }) + T(450, 140, 'Breach', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' }) + T(450, 164, 'fails to perform, performs defectively, or will not perform', { size: 15, anchor: 'middle', fill: C.teal });
  b += arrow(330, 182, 220, 226) + arrow(570, 182, 680, 226);
  const left = lcard(30, 232, 380, { kicker: 'EVERY BREACH', title: 'Right to damages', body: 'e.g. breach of a warranty: *Bettini v Gye* [1876]; a non-serious breach of an innominate term', minH: 210 });
  b += left.s;
  const right = lcard(450, 232, 420, { kicker: 'REPUDIATORY BREACH', kfill: C.rust, title: 'Damages and the OPTION to treat the contract as ended', body: ['breach of a condition: *Poussard v Spiers* [1876]', 'innominate term, deprives of substantially the whole benefit', 'renunciation: making clear one will not perform'], bullets: true, fill: C.cream, edge: C.olive, minH: 210 });
  b += right.s;
  const y = 232 + Math.max(left.h, right.h) + 26;
  b += panel(30, y, 840, 170);
  b += rich(54, y + 38, '*Hong Kong Fir Shipping v Kawasaki Kisen Kaisha* [1962]: judge the consequences', { size: 18, weight: 700 });
  const X0 = 80, X1 = 820, ly = y + 104;
  b += `<rect x="${X0}" y="${ly - 14}" width="${X1 - X0}" height="28" rx="14" fill="url(#gradBr)"/>`;
  b += `<defs><linearGradient id="gradBr" x1="0" x2="1"><stop offset="0" stop-color="${C.tealLight}"/><stop offset="1" stop-color="${C.cream}"/></linearGradient></defs>`;
  b += T(X0, ly + 44, 'minor consequences: damages only', { size: 15, weight: 700, fill: C.tealDark });
  b += T(X1, ly + 44, 'deprived of substantially the whole benefit', { size: 15, weight: 700, fill: C.olive, anchor: 'end' });
  b += `<circle cx="${X0 + 150}" cy="${ly}" r="11" fill="${C.ink}"/>` + T(X0 + 150, ly - 22, 'unseaworthy for some weeks of a two-year charter', { size: 15, anchor: 'start', fill: C.ink });
  add('04-breach-repudiatory',
    svg(900, y + 200, 'Which breaches end a contract?', b),
    'Every breach gives a right to damages, for example breach of a warranty (Bettini v Gye). Only a repudiatory breach gives the innocent party the option to treat the contract as ended: breach of a condition (Poussard v Spiers), a breach of an innominate term that deprives them of substantially the whole benefit, or renunciation. In Hong Kong Fir a ship unseaworthy for some weeks of a two-year charter was not serious enough.',
    'Every breach gives damages; only a repudiatory breach gives the option to end the contract.',
    '## Discharge by breach');
}

// 05 Anticipatory breach: the choices
{
  let b = '';
  b += lbox(200, 110, 500, 72, { fill: C.ink, edge: C.ink, rx: 14 }) + T(450, 141, 'Anticipatory breach', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' }) + T(450, 166, 'a party announces, before performance is due, that they will not perform', { size: 15, anchor: 'middle', fill: C.teal });
  b += arrow(320, 184, 235, 230) + arrow(580, 184, 665, 230);
  const l = lcard(30, 236, 411, { kicker: 'OPTION 1', title: 'Sue immediately', body: '*Hochster v De La Tour* (1853): a courier dismissed before his job began could sue at once.', fill: C.tealLight, edge: C.tealDark, minH: 190 });
  b += l.s;
  const r = lcard(459, 236, 411, { kicker: 'OPTION 2', kfill: C.olive, title: 'Wait for the date of performance', body: 'Keeps the contract alive, but bears the risk of later events.', fill: C.cream, edge: C.olive, minH: 190 });
  b += r.s;
  const y = 236 + Math.max(l.h, r.h) + 20;
  // stack the two option-2 consequence cards vertically under option 2
  const a1 = lcard(459, y, 411, { kicker: 'THE RISK', kfill: C.rust, title: '*Avery v Bowden* (1855)', body: 'the claimant waited, war broke out, the contract was frustrated and the right to sue was lost', edge: C.rust });
  const a2 = lcard(459, y + a1.h + 16, 411, { kicker: 'OR PERFORM AND CLAIM THE PRICE', title: '*White and Carter v McGregor* [1962]', body: 'advertisements displayed for three years despite cancellation, provided there is a legitimate interest' });
  b += arrow(664, y - 18, 664, y - 4, { w: 3 }) + a1.s + a2.s;
  const end = y + a1.h + 16 + a2.h;
  b += lcard(30, y, 411, { title: 'The innocent party does not have to accept the breach at once.', body: 'Saying they must is a common mistake: the choice is theirs.', fill: '#ffffff', edge: C.panelEdge, minH: end - y }).s;
  add('05-anticipatory-breach',
    svg(900, end + 30, 'Anticipatory breach: sue now or wait?', b),
    'When a party announces before performance that they will not perform, the innocent party may sue immediately (Hochster v De La Tour) or wait for the date of performance. Waiting carries risk: in Avery v Bowden war frustrated the contract and the right to sue was lost. In White and Carter v McGregor the innocent party performed and claimed the price, given a legitimate interest.',
    'The innocent party chooses: sue at once, or keep the contract alive and bear the risk.',
    '## Discharge by breach');
}

// 06 Frustration: test, categories and limits
{
  let b = '';
  const test = ['After the contract is made', 'No one’s fault', 'Impossible, illegal or radically different'];
  b += T(450, 132, 'All three needed', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  test.forEach((t2, i) => {
    const x = 30 + i * 286;
    b += lbox(x, 146, 268, 64, { fill: C.ink, edge: C.ink, rx: 12 }) + badge(x + 30, 178, 16, String(i + 1), C.mustard) + rpara(x + 56, 172, t2, 200, { size: 16, weight: 700, fill: '#ffffff' }).s;
  });
  b += rich(450, 240, '*Davis Contractors v Fareham UDC* [1956]: "a thing radically different from that which was undertaken"', { size: 15, anchor: 'middle', fill: C.muted });
  const cats = [
    ['Destruction', '*Taylor v Caldwell* (1863): music hall burned down'],
    ['Death or incapacity', '*Robinson v Davison* (1871); *Condor v Baron Knights* [1966]'],
    ['Supervening illegality', '*Fibrosa* [1943]: delivery to Poland illegal on outbreak of war'],
    ['Government intervention, delay', '*Metropolitan Water Board v Dick Kerr* [1918]'],
    ['Purpose defeated', '*Krell v Henry* [1903]: coronation procession cancelled'],
  ];
  const lims = [
    ['Purpose only partly defeated', '*Herne Bay Steam Boat v Hutton* [1903]: the cruise was still possible'],
    ['More difficult or expensive', '*Davis Contractors*; *Tsakiroglou v Noblee Thorl* [1962]: Suez closed, longer route'],
    ['Self-induced', '*Maritime National Fish v Ocean Trawlers* [1935]; *The Super Servant Two* [1990]'],
    ['Foreseen, or covered by a term', 'a *force majeure* clause that covers the event'],
  ];
  const y = 262;
  b += lbox(30, y, 411, 44, { fill: C.tealDark, edge: C.tealDark }) + T(54, y + 29, 'FRUSTRATED', { size: 16, weight: 700, fill: '#ffffff' });
  b += lbox(459, y, 411, 44, { fill: C.rust, edge: C.rust }) + T(483, y + 29, 'NOT FRUSTRATED', { size: 16, weight: 700, fill: '#ffffff' });
  let cy = y + 56;
  cats.forEach(([h, d]) => { const c = lcard(30, cy, 411, { title: h, body: d, tsize: 17, size: 15, pad: 14, fill: C.tealLight, edge: C.tealDark }); b += c.s; cy += c.h + 10; });
  let cy2 = y + 56;
  lims.forEach(([h, d]) => { const c = lcard(459, cy2, 411, { title: h, body: d, tsize: 17, size: 15, pad: 14, edge: C.rust }); b += c.s; cy2 += c.h + 10; });
  const end = Math.max(cy, cy2);
  b += note(end + 6, 'An event before the contract is made is common mistake, not frustration.');
  add('06-frustration-limits',
    svg(900, end + 100, 'Frustration: what counts and what does not', b),
    'A contract is frustrated by an event after formation, no one’s fault, that makes performance impossible, illegal or radically different (Davis Contractors). Frustrating events: destruction (Taylor v Caldwell), death or incapacity (Robinson v Davison; Condor v Baron Knights), supervening illegality (Fibrosa), government intervention (Metropolitan Water Board v Dick Kerr) and purpose defeated (Krell v Henry). Not frustrated: purpose only partly defeated (Herne Bay), more difficult or expensive (Davis; Tsakiroglou), self-induced (Maritime National Fish; The Super Servant Two), or foreseen or covered by a term.',
    'Frustration is narrow: a harder, dearer or self-induced problem does not end the contract.',
    '## Discharge by frustration');
}

// 07 The 1943 Act: who keeps the money
{
  let b = '';
  const cl = lcard(30, 110, 840, { kicker: 'BEFORE THE ACT: COMMON LAW', kfill: C.muted, title: 'Loss lay where it fell at the moment of frustration', body: '*Fibrosa* (1943): an advance payment could be recovered only on a total failure of consideration. Parliament passed the Act the same year.' });
  b += cl.s;
  let y = 110 + cl.h + 22;
  b += T(450, y, 'LAW REFORM (FRUSTRATED CONTRACTS) ACT 1943', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
  y += 16;
  const r = lrow(y, [
    { kicker: 's 1(2)', title: 'Money paid before the event', body: 'is recoverable', fill: C.tealLight, edge: C.tealDark },
    { kicker: 's 1(2)', title: 'Money payable before the event', body: 'ceases to be payable', fill: C.tealLight, edge: C.tealDark },
    { kicker: 's 1(3)', kfill: C.olive, title: 'A valuable benefit (not money)', body: 'the court may order a just sum: *BP Exploration v Hunt (No 2)* [1979]', fill: C.cream, edge: C.olive },
  ], { card: { size: 16, tsize: 18 } });
  b += r.s;
  y += r.h + 18;
  const ex = lcard(30, y, 840, { kicker: 's 1(2) EXPENSES: AT THE COURT’S DISCRETION', kfill: C.rust, title: 'The payee may keep or recover expenses, up to the amount paid or payable, if just', body: '*Gamerco v ICM/Fair Warning* [1995]: stadium declared unsafe; the advance was repaid in full and nothing was allowed for the band’s expenses, because the promoters had lost much more.', edge: C.rust });
  b += ex.s;
  add('07-frustrated-contracts-act-1943',
    svg(900, y + ex.h + 30, 'After frustration: the 1943 Act', b),
    'At common law loss lay where it fell, and Fibrosa allowed recovery only on a total failure of consideration. Under the 1943 Act, s 1(2) makes money paid before the event recoverable and money payable cease to be payable, with a discretion to allow expenses up to that amount (none were allowed in Gamerco). Under s 1(3) a party who obtained a valuable non-money benefit may have to pay a just sum (BP v Hunt).',
    'The Act unpicks payments fairly; any allowance for expenses is the court’s choice.',
    '## The Law Reform (Frustrated Contracts) Act 1943');
}

// 08 Kemi worked example
{
  let b = '';
  b += lcard(30, 110, 840, { body: 'Kemi books a band and pays a £1,000 deposit, with £2,000 due on the night. A week before, the lead singer is injured; Kemi booked the band for her singing. The band has spent £300 on rehearsals.', size: 17, bfill: C.ink, fill: '#ffffff' }).s;
  const steps = [
    ['Frustrated?', 'Personal contract; incapacity of the key performer makes performance radically different (*Robinson v Davison*; *Condor v Baron Knights*). Not self-induced. Probably frustrated.', C.tealDark],
    ['Effect', 'Both discharged from future obligations.', C.tealDark],
  ];
  let y = 236;
  steps.forEach(([h, d, e], i) => {
    const c = lcard(90, y, 780, { title: h, body: d, tsize: 18, size: 16 });
    b += badge(54, y + 30, 18, String(i + 1), C.cream) + c.s;
    y += c.h + 14;
  });
  b += badge(54, y + 30, 18, '3', C.mustard) + T(90, y + 36, '1943 Act, s 1(2)', { size: 18, weight: 700 });
  const yy = y + 56;
  const money = (x, w, amt, lab, sub, f, e) => lbox(x, yy, w, 120, { fill: f, edge: e, rx: 14 }) + T(x + w / 2, yy + 46, amt, { size: 30, weight: 700, anchor: 'middle', fill: e }) + T(x + w / 2, yy + 78, lab, { size: 16, weight: 700, anchor: 'middle' }) + T(x + w / 2, yy + 102, sub, { size: 15, anchor: 'middle', fill: C.muted });
  b += money(90, 250, '£1,000', 'deposit paid', 'recoverable by Kemi', C.tealLight, C.tealDark);
  b += money(355, 250, '£2,000', 'due on the night', 'ceases to be payable', C.tealLight, C.tealDark);
  b += money(620, 250, 'up to £300', 'band’s expenses', 'court may allow if just', C.cream, C.olive);
  const yn = yy + 140;
  b += note(yn, 'Compare *Gamerco*, where no deduction for expenses was allowed.');
  add('08-kemi-worked-example',
    svg(900, yn + 94, 'Worked example: Kemi and the band', b),
    'Kemi paid a £1,000 deposit with £2,000 due on the night; the lead singer is injured. The contract is probably frustrated because incapacity of the key performer makes performance radically different (Robinson v Davison; Condor v Baron Knights). Under s 1(2) the £1,000 is recoverable and the £2,000 ceases to be payable; the court may let the band keep up to £300 for expenses if just.',
    'Frustrated, then s 1(2): deposit back, balance cancelled, expenses at the court’s discretion.',
    '## Worked example: a frustration scenario');
}
