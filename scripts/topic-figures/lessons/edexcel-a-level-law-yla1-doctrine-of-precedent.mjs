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

export const slug = 'edexcel-a-level-law-yla1-doctrine-of-precedent';

// 01 Ratio and obiter
{
  let b = '';
  // judgment document
  b += `<path d="M60,120 H330 L370,160 V470 H60 Z" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
  b += T(80, 152, 'A judgment', { size: 18, weight: 700 });
  for (let i = 0; i < 9; i++) {
    const y = 180 + i * 30, isR = i === 3 || i === 4;
    b += `<rect x="80" y="${y}" width="${[250, 230, 260, 240, 210, 250, 220, 260, 180][i]}" height="14" rx="5" fill="${isR ? C.mustard : C.tealLight}"/>`;
  }
  b += T(215, 458, 'the ratio is not labelled', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  b += path('M345,276 L420,226', { extra: 'marker-end="url(#ah)"' }) + path('M345,350 L420,382', { extra: 'marker-end="url(#ah)"' });
  const r1 = lcard(430, 120, 440, { kicker: 'RATIO DECIDENDI', kfill: C.olive, title: 'The reason for the decision: BINDING', body: 'The legal principle the decision rests on, applied to the material facts. Later judges identify it, so its scope can be argued.', fill: C.cream, edge: C.olive });
  b += r1.s;
  const r2 = lcard(430, 120 + r1.h + 16, 440, { kicker: 'OBITER DICTA', title: 'Things said by the way: PERSUASIVE', body: 'Comments on hypothetical facts, wider statements of principle, dissenting judgments.', fill: C.tealLight, edge: C.tealDark });
  b += r2.s;
  const y = Math.max(490, 120 + r1.h + 16 + r2.h + 24);
  b += T(450, y + 4, 'OBITER CAN BECOME LAW', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  const a = lcard(30, y + 18, 260, { title: '*R v Howe* [1987]', body: 'Duress no defence to murder; obiter: nor to attempted murder', tsize: 18, size: 15 });
  const c = lcard(330, y + 18, 240, { title: '*R v Gotts* [1992]', body: 'House of Lords followed that obiter statement', tsize: 18, size: 15, fill: C.tealLight, edge: C.tealDark });
  const d = lcard(610, y + 18, 260, { title: '*High Trees* [1947]', body: 'Denning J’s obiter founded promissory estoppel', tsize: 18, size: 15 });
  const h = Math.max(a.h, c.h, d.h);
  b += lcard(30, y + 18, 260, { title: '*R v Howe* [1987]', body: 'Duress no defence to murder; obiter: nor to attempted murder', tsize: 18, size: 15, minH: h }).s;
  b += arrow(294, y + 18 + h / 2, 324, y + 18 + h / 2, { w: 3 });
  b += lcard(330, y + 18, 240, { title: '*R v Gotts* [1992]', body: 'House of Lords followed that obiter statement', tsize: 18, size: 15, fill: C.tealLight, edge: C.tealDark, minH: h }).s;
  b += lcard(610, y + 18, 260, { title: '*Central London Property Trust v High Trees House* [1947]', body: 'Denning J’s obiter remarks founded promissory estoppel', tsize: 16, size: 15, minH: h }).s;
  const ye = y + 18 + h + 20;
  b += note(ye, 'Also persuasive: lower courts, the Privy Council, other common law countries.');
  add('01-ratio-and-obiter',
    svg(900, ye + 94, 'Ratio decidendi and obiter dicta', b),
    'A judgment contains the ratio decidendi, the binding legal principle behind the decision, which later judges identify, and obiter dicta, things said by the way, which are only persuasive. Obiter can become law: the obiter in R v Howe on attempted murder was followed in R v Gotts, and Denning J’s obiter in High Trees founded promissory estoppel.',
    'Only the ratio binds; obiter persuades, and can later become law.',
    '## Ratio decidendi and obiter dicta');
}

// 02 Court hierarchy: who binds whom
{
  let b = '';
  const courts = [
    ['Supreme Court', 'binds all courts below', 'normally, but may depart: Practice Statement', C.ink, '#ffffff'],
    ['Court of Appeal (Civil and Criminal)', 'binds all courts below', 'yes, subject to Young v Bristol Aeroplane', C.tealDark, '#ffffff'],
    ['Divisional Courts of the High Court', 'bind the High Court and inferior courts', 'generally yes, similar exceptions', C.tealLight, C.ink],
    ['High Court', 'binds County Court and magistrates’ courts', 'no: judges persuade one another', '#ffffff', C.ink],
    ['Crown Court, County Court, magistrates’ courts', 'do not create binding precedent', 'no', C.cream, C.ink],
  ];
  b += T(220, 132, 'COURT', { size: 15, weight: 700, fill: C.muted, anchor: 'middle' }) + T(560, 132, 'BINDS', { size: 15, weight: 700, fill: C.muted, anchor: 'middle' }) + T(780, 132, 'BOUND BY ITSELF?', { size: 15, weight: 700, fill: C.muted, anchor: 'middle' });
  courts.forEach(([n, binds, self, f, tf], i) => {
    const y = 148 + i * 96, inset = i * 14;
    b += lbox(30 + inset, y, 400 - 2 * inset, 78, { fill: f, edge: f === '#ffffff' || f === C.cream || f === C.tealLight ? C.ink : f, rx: 12 });
    b += rpara(230, y + (n.length > 34 ? 32 : 46), n, 360 - 2 * inset, { size: 17, weight: 700, anchor: 'middle', fill: tf }).s;
    b += lbox(450, y, 220, 78, { fill: '#ffffff', edge: C.panelEdge }) + rpara(466, y + 32, binds, 190, { size: 15 }).s;
    b += lbox(684, y, 186, 78, { fill: i < 3 ? C.cream : '#ffffff', edge: i < 3 ? C.olive : C.panelEdge }) + rpara(698, y + 32, self, 160, { size: 15 }).s;
    if (i < 4) b += arrow(230, y + 80, 230, y + 94, { w: 3 });
  });
  const y = 148 + 5 * 96 + 6;
  b += note(y, 'European Court of Human Rights: not binding; s 2 Human Rights Act 1998 says take it into account.', { size: 16 });
  b += T(450, y + 92, 'The Supreme Court replaced the House of Lords in 2009 (Constitutional Reform Act 2005).', { size: 15, anchor: 'middle', fill: C.muted });
  add('02-court-hierarchy-binding',
    svg(900, y + 118, 'The court hierarchy: who binds whom', b),
    'From the top: the Supreme Court binds all courts below and may depart from its own decisions under the Practice Statement; the Court of Appeal binds all courts below and is bound by itself subject to Young v Bristol Aeroplane; Divisional Courts bind the High Court and inferior courts; the High Court binds the County Court and magistrates’ courts but not itself; the Crown Court, County Court and magistrates’ courts do not create binding precedent. The ECtHR is only taken into account.',
    'Each court is bound by those above it; only the Supreme Court can depart from its own decisions.',
    '## The court hierarchy and who binds whom');
}

// 03 Young v Bristol Aeroplane
{
  let b = '';
  b += lcard(30, 110, 840, { kicker: '*YOUNG V BRISTOL AEROPLANE CO* [1944]', kfill: C.olive, title: 'The Court of Appeal is bound by its own previous decisions, except:', fill: C.cream, edge: C.olive }).s;
  const ex = [
    ['Two conflicting decisions', 'it may choose which to follow'],
    ['Conflict with a later House of Lords or Supreme Court decision', 'it must follow the higher court'],
    ['*Per incuriam*', 'made through carelessness or ignorance of a relevant statute or binding authority'],
  ];
  let y = 220;
  const w = 268, g = 18;
  let hmax = 0;
  ex.forEach(([t2, d]) => { hmax = Math.max(hmax, lcard(0, 0, w, { title: t2, body: d, tsize: 18 }).h); });
  ex.forEach(([t2, d], i) => {
    const x = 30 + i * (w + g);
    b += badge(x + w / 2, y + 2, 20, String(i + 1), C.mustard);
    b += lcard(x, y + 26, w, { title: t2, body: d, tsize: 18, minH: hmax }).s;
  });
  y += 26 + hmax + 24;
  const r = lrow(y, [
    { kicker: 'CRIMINAL DIVISION', title: 'More flexible: liberty is at stake', body: 'may depart where the law was misapplied or misunderstood: *R v Taylor* [1950], *R v Gould* [1968], *R v Spencer* [1985]', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'LORD DENNING’S CHALLENGE', kfill: C.rust, title: 'Rejected', body: 'tried to free the Court of Appeal, notably in *Davis v Johnson* [1979]; the House of Lords reaffirmed it is bound', edge: C.rust },
  ], { card: { size: 16, tsize: 18 } });
  b += r.s;
  add('03-young-v-bristol-aeroplane',
    svg(900, y + r.h + 30, 'When the Court of Appeal can escape its own decisions', b),
    'Under Young v Bristol Aeroplane the Court of Appeal is bound by its own decisions except where two of its decisions conflict, where its decision conflicts with a later House of Lords or Supreme Court decision, or where it was made per incuriam. The Criminal Division is more flexible because liberty is at stake (R v Taylor, R v Gould, R v Spencer). Lord Denning’s attempt to escape the rule in Davis v Johnson was rejected.',
    'Three exceptions only, plus extra flexibility in the Criminal Division.',
    '## Young v Bristol Aeroplane Co [1944]');
}

// 04 Appeal routes
{
  let b = '';
  const node = (cx, y, w, s, o = {}) => lbox(cx - w / 2, y, w, o.h || 56, { fill: o.fill || '#ffffff', edge: o.edge || C.ink }) + rpara(cx, y + (o.h || 56) / 2 + 6 - ((rwrap(s, w - 20, 16, 700).length - 1) * 21) / 2, s, w - 20, { size: 16, weight: 700, anchor: 'middle', fill: o.tf || C.ink }).s;
  const lab = (x, y, s, a = 'start') => rich(x, y, s, { size: 15, weight: 700, fill: C.olive, anchor: a });
  b += lbox(30, 110, 411, 600, { fill: '#ffffff', edge: C.panelEdge, rx: 14 }) + T(235, 146, 'Civil', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += node(235, 590, 260, 'Supreme Court', { fill: C.ink, edge: C.ink, tf: '#ffffff' });
  b += node(235, 480, 300, 'Court of Appeal (Civil Division)', { fill: C.tealLight, edge: C.tealDark });
  b += node(150, 300, 170, 'High Court');
  b += node(330, 180, 170, 'County Court');
  b += arrow(330, 238, 330, 474) + lab(338, 366, 'depending on');
  b += lab(338, 386, 'case and judge');
  b += path('M300,238 L190,294', { extra: 'marker-end="url(#ah)"' });
  b += arrow(150, 358, 190, 474) + lab(152, 420, 'permission', 'end');
  b += arrow(235, 538, 235, 584) + lab(245, 566, 'permission');
  b += path('M66,328 L46,328 L46,618 L100,618', { stroke: C.olive, w: 3, extra: 'marker-end="url(#ahO)" stroke-dasharray="8 6"' });
  b += rpara(235, 676, 'leapfrog from the High Court: a point of law of public importance', 360, { size: 15, weight: 700, fill: C.olive, anchor: 'middle' }).s;
  // criminal
  b += lbox(459, 110, 411, 600, { fill: '#ffffff', edge: C.panelEdge, rx: 14 }) + T(664, 146, 'Criminal', { size: 21, weight: 700, anchor: 'middle', fill: C.rust });
  b += node(664, 590, 260, 'Supreme Court', { fill: C.ink, edge: C.ink, tf: '#ffffff' });
  b += node(570, 480, 190, 'Court of Appeal (Criminal Division)', { fill: C.tealLight, edge: C.tealDark, h: 64 });
  b += node(770, 480, 170, 'Divisional Court (KBD)', { h: 64 });
  b += node(570, 330, 170, 'Crown Court');
  b += node(664, 180, 220, 'Magistrates’ court');
  b += arrow(640, 238, 590, 324) + lab(598, 278, 'conviction', 'end');
  b += lab(592, 296, 'or sentence', 'end');
  b += arrow(710, 238, 770, 474) + lab(752, 330, 'case');
  b += lab(752, 348, 'stated');
  b += arrow(570, 388, 570, 474) + lab(580, 434, 'leave');
  b += arrow(570, 546, 620, 584) + arrow(770, 546, 710, 584);
  b += rpara(664, 676, 'only on a certified point of law of general public importance, with leave', 380, { size: 15, weight: 700, fill: C.olive, anchor: 'middle' }).s;
  b += note(730, 'Only appellate courts create binding precedent; an appeal can reverse the decision in that case.', { size: 16 });
  add('04-appeal-routes',
    svg(900, 824, 'The process of appeal', b),
    'Civil appeals go from the County Court to the High Court or Court of Appeal, from the High Court to the Court of Appeal (Civil Division) and then to the Supreme Court, with permission at each stage; a leapfrog appeal can go from the High Court straight to the Supreme Court. Criminal appeals go from the magistrates’ court to the Crown Court or by case stated to the Divisional Court, from the Crown Court to the Court of Appeal (Criminal Division) with leave, and then to the Supreme Court only on a certified point of law of general public importance.',
    'Permission or leave is needed at each step up; the Supreme Court hears only points of wider importance.',
    '## The process of appeal');
}

// 05 Practice Statement timeline
{
  let b = '';
  const X = (yr) => 70 + ((yr - 1895) * 760) / (2020 - 1895);
  const ly = 330;
  b += `<line x1="${X(1895)}" y1="${ly}" x2="${X(2020)}" y2="${ly}" stroke="${C.ink}" stroke-width="3"/>`;
  b += `<rect x="${X(1895)}" y="${ly - 10}" width="${X(1966) - X(1895)}" height="20" fill="${C.panelEdge}"/>`;
  b += rpara(X(1895) + 6, 128, '*London Street Tramways v LCC* [1898]: the Lords bound by their own decisions', 380, { size: 15, weight: 700 }).s;
  b += path(`M${X(1898)},${136 + 14} L${X(1898)},${ly - 12}`, { stroke: C.muted, w: 2 });
  b += `<circle cx="${X(1966)}" cy="${ly}" r="16" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
  b += T(X(1966), ly + 44, '1966', { size: 18, weight: 700, anchor: 'middle' });
  b += rpara(X(1966) - 150, ly + 70, 'Lord Gardiner LC: normally binding, but depart "when it appears right to do so"', 300, { size: 15, weight: 600, anchor: 'start' }).s;
  b += `<circle cx="${X(2010)}" cy="${ly}" r="10" fill="${C.ink}"/>` + T(X(2010), ly + 44, '2010', { size: 16, weight: 700, anchor: 'middle' });
  b += rpara(X(2010) - 120, ly + 70, '*Austin v Southwark LBC*: the power applies to the Supreme Court', 200, { size: 15, anchor: 'start' }).s;
  const used = [[1968, '*Conway v Rimmer*'], [1972, '*Herrington*'], [1976, '*Miliangos*'], [1986, '*R v Shivpuri*'], [1993, '*Pepper v Hart*'], [2003, '*R v G*']];
  used.forEach(([yr, n], i) => {
    const yy = 168 + i * 24;
    b += `<circle cx="${X(yr)}" cy="${ly}" r="8" fill="${C.tealDark}"/>` + path(`M${X(yr)},${ly - 8} L${X(yr)},${yy + 8}`, { stroke: C.tealDark, w: 2 });
    b += rich(X(yr) + 6, yy, `${n} ${yr}`, { size: 15, weight: 700, fill: C.tealDark });
  });
  // not used markers below
  [[1972, '*Jones*'], [1973, '*Knuller*']].forEach(([yr, n], i) => {
    b += `<circle cx="${X(yr) + i * 6}" cy="${ly}" r="7" fill="#ffffff" stroke="${C.rust}" stroke-width="3"/>`;
  });
  b += path(`M${X(1972)},${ly + 10} L${X(1972)},${ly + 30} L${X(1955)},${ly + 30}`, { stroke: C.rust, w: 2 }) + rich(X(1955) - 4, ly + 36, 'refused: *Jones* 1972, *Knuller* 1973', { size: 15, weight: 700, fill: C.rust, anchor: 'end' });
  const yt = 470;
  const rows = [
    ['*Conway v Rimmer* [1968]', '*Duncan v Cammell Laird*', 'first major use: Crown privilege (technical)'],
    ['*British Railways Board v Herrington* [1972]', '*Addie v Dumbreck*', 'duty of common humanity to child trespassers'],
    ['*Miliangos v George Frank* [1976]', '*Re United Railways of Havana*', 'judgments in foreign currency'],
    ['*R v Shivpuri* [1986]', '*Anderton v Ryan*', 'first criminal use: attempting the impossible'],
    ['*Pepper v Hart* [1993]', '*Davis v Johnson* on this point', 'courts may consult *Hansard*'],
    ['*R v G* [2003]', '*MPC v Caldwell*', 'recklessness is subjective'],
  ];
  b += `<rect x="30" y="${yt}" width="840" height="42" rx="10" fill="${C.ink}"/>`;
  b += T(46, yt + 28, 'Case', { size: 16, weight: 700, fill: '#ffffff' }) + T(400, yt + 28, 'Overruled', { size: 16, weight: 700, fill: '#ffffff' }) + T(620, yt + 28, 'Point', { size: 16, weight: 700, fill: '#ffffff' });
  rows.forEach(([c, o, p], i) => {
    const y = yt + 42 + i * 48;
    b += `<rect x="30" y="${y}" width="840" height="48" fill="${i % 2 ? '#ffffff' : '#f8faf9'}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
    b += rich(46, y + 30, c, { size: 15, weight: 700 }) + rich(400, y + 30, o, { size: 15 }) + rpara(620, y + (rwrap(p, 240, 15).length > 1 ? 21 : 30), p, 240, { size: 15, fill: C.muted, lh: 18 }).s;
  });
  const ye = yt + 42 + rows.length * 48 + 16;
  b += T(450, ye + 10, 'Used sparingly: flexibility weighed against certainty.', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  add('05-practice-statement-timeline',
    svg(900, ye + 36, 'The 1966 Practice Statement', b),
    'A timeline: from London Street Tramways (1898) the House of Lords was bound by its own decisions until the 1966 Practice Statement allowed departure "when it appears right to do so"; Austin v Southwark (2010) applied it to the Supreme Court. It was used in Conway v Rimmer (1968), Herrington (1972), Miliangos (1976), R v Shivpuri (1986), Pepper v Hart (1993) and R v G (2003), and refused in Jones (1972) and Knuller (1973). A table gives the case each overruled and the point.',
    'The power to depart exists but is used sparingly: name the case overruled and why.',
    '## The 1966 Practice Statement');
}

// 06 Distinguish, overrule, reverse
{
  let b = '';
  const col = (x, w, title, who, what, ex, e, f, art) => {
    let s = lbox(x, 110, w, 470, { fill: f, edge: e, rx: 14 });
    s += T(x + w / 2, 148, title, { size: 21, weight: 700, anchor: 'middle', fill: e });
    s += art;
    s += rpara(x + 18, 330, who, w - 36, { size: 15, weight: 700, fill: C.ink }).s;
    s += rpara(x + 18, 380, what, w - 36, { size: 15, fill: C.ink }).s;
    s += rpara(x + 18, 470, ex, w - 36, { size: 15, fill: C.muted }).s;
    return s;
  };
  const caseBox = (x, y, lab, f = '#ffffff', e = C.ink) => lbox(x, y, 92, 54, { fill: f, edge: e, rx: 8 }) + T(x + 46, y + 33, lab, { size: 15, weight: 700, anchor: 'middle' });
  const w = 268, g = 18;
  // distinguishing art
  let x = 30;
  b += col(x, w, 'Distinguishing', 'Any court', 'Material facts differ, so the earlier ratio does not apply.', '*Balfour v Balfour* [1919] (living together) distinguished in *Merritt v Merritt* [1970] (separated).', C.tealDark, C.tealLight,
    caseBox(x + 30, 180, 'Earlier') + caseBox(x + 146, 180, 'Now') + T(x + 134, 214, '≠', { size: 26, weight: 700, anchor: 'middle', fill: C.rust }) + T(x + w / 2, 268, 'facts differ: not applied', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }));
  x += w + g;
  b += col(x, w, 'Overruling', 'A higher court, or the same court with a power to depart', 'The rule in an earlier, DIFFERENT case was wrong.', '*R v G* [2003] overruled *Caldwell* [1982].', C.olive, C.cream,
    caseBox(x + 24, 196, 'Case X') + caseBox(x + 152, 196, 'Case Y', C.mustard, C.olive) + path(`M${x + 150},${222} L${x + 120},${222}`, { stroke: C.rust, w: 3, extra: 'marker-end="url(#ahR)"' }) +
    path(`M${x + 32},${204} l76,38 M${x + 108},${204} l-76,38`, { stroke: C.rust, w: 3 }) + T(x + w / 2, 284, 'later case, different parties', { size: 15, weight: 700, anchor: 'middle', fill: C.olive }));
  x += w + g;
  b += col(x, w, 'Reversing', 'A higher court, on appeal', 'Changes the decision in the SAME case.', 'Overruling is a different, earlier case; reversing is the same case.', C.blue, '#dfe7f3',
    caseBox(x + 30, 220, 'Trial', '#ffffff') + caseBox(x + 146, 180, 'Appeal', '#ffffff', C.blue) + path(`M${x + 122},${246} C${x + 150},${246} ${x + 160},${246} ${x + 190},${240}`, { stroke: C.blue, w: 3, extra: 'marker-end="url(#ah)"' }) +
    T(x + w / 2, 300, 'same case, same parties', { size: 15, weight: 700, anchor: 'middle', fill: C.blue }));
  add('06-distinguish-overrule-reverse',
    svg(900, 610, 'Avoiding a precedent', b),
    'Distinguishing: any court finds the material facts differ, so the earlier ratio does not apply (Balfour v Balfour distinguished in Merritt v Merritt). Overruling: a higher court, or the same court with a power to depart, decides the rule in an earlier, different case was wrong (R v G overruled Caldwell). Reversing: a higher court changes the decision in the same case on appeal.',
    'Distinguish on the facts, overrule a different earlier case, reverse the same case.',
    '## Avoiding a precedent');
}

// 07 Worked example: conflicting precedents
{
  let b = '';
  b += lcard(30, 110, 411, { kicker: 'CASE A, 2015', title: 'Court of Appeal (Civil Division)', fill: C.tealLight, edge: C.tealDark, minH: 100 }).s;
  b += lcard(459, 110, 411, { kicker: 'CASE B, 2024', kfill: C.olive, title: 'Supreme Court: a conflicting principle', fill: C.cream, edge: C.olive, minH: 100 }).s;
  b += T(450, 166, '≠', { size: 30, weight: 700, anchor: 'middle', fill: C.rust });
  b += T(450, 246, 'In 2026 the same issue reaches…', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  const rowsW = [
    ['High Court', 'Bound by both courts above; where they conflict, it must follow the higher court.', 'Follows B'],
    ['Court of Appeal', 'Normally bound by its own case A, but *Young v Bristol Aeroplane* exception 2: a decision inconsistent with a later Supreme Court ruling must not be followed.', 'Follows B'],
    ['Supreme Court', 'Could depart from case B under the Practice Statement, but only "when it appears right to do so".', 'May depart'],
  ];
  let y = 266;
  rowsW.forEach(([court, why, res], i) => {
    const c = lcard(220, y, 470, { body: why, size: 16, bfill: C.ink, vcenter: true, minH: 86 });
    b += lbox(30, y, 176, c.h, { fill: C.ink, edge: C.ink }) + rpara(118, y + c.h / 2 + 6, court, 150, { size: 17, weight: 700, fill: '#ffffff', anchor: 'middle' }).s;
    b += c.s;
    b += lbox(704, y, 166, c.h, { fill: i < 2 ? C.cream : '#ffffff', edge: C.olive }) + T(787, y + c.h / 2 + 7, res, { size: 19, weight: 700, anchor: 'middle', fill: C.olive });
    y += c.h + 14;
  });
  add('07-hierarchy-worked-example',
    svg(900, y + 20, 'Worked example: applying the hierarchy', b),
    'Case A was decided by the Court of Appeal in 2015 and a conflicting case B by the Supreme Court in 2024. In 2026 the High Court must follow case B, the higher court. The Court of Appeal is normally bound by case A but, under Young v Bristol Aeroplane exception 2, follows case B. The Supreme Court could depart from case B under the Practice Statement, only when it appears right to do so.',
    'Follow the higher court; the Court of Appeal escapes its own case A through Young exception 2.',
    '## Worked example: applying the hierarchy');
}
