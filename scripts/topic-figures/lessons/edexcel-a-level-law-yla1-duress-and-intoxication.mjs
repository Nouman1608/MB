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

export const slug = 'edexcel-a-level-law-yla1-duress-and-intoxication';

// 01 How general defences work
{
  let b = '';
  const st = [['D raises evidence of the defence', C.tealLight, C.tealDark], ['Prosecution must disprove it beyond reasonable doubt', C.cream, C.olive]];
  st.forEach(([s2, f, e], i) => {
    const x = 30 + i * 450;
    b += lbox(x, 120, 390, 80, { fill: f, edge: e, rx: 14 }) + badge(x + 36, 160, 18, String(i + 1), C.cream) + rpara(x + 66, 154, s2, 310, { size: 18, weight: 700 }).s;
  });
  b += arrow(424, 160, 476, 160, { w: 4 });
  const r = lrow(230, [
    { kicker: 'DURESS', title: 'A complete defence', body: 'If it succeeds, the defendant is acquitted.', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'INTOXICATION', kfill: C.olive, title: 'Not really a defence', body: 'A way of arguing that the defendant lacked the *mens rea*.', fill: C.cream, edge: C.olive },
  ], { card: { size: 17, tsize: 20 } });
  b += r.s;
  b += note(230 + r.h + 20, 'A general defence can apply to many offences: establish the offence first, then the defence.');
  add('01-general-defences-burden',
    svg(900, 230 + r.h + 114, 'How general defences work', b),
    'The defendant must raise evidence of a general defence, and the prosecution must then disprove it beyond reasonable doubt. Duress is a complete defence leading to acquittal; intoxication is really an argument that the defendant lacked the mens rea.',
    'D raises the defence; the prosecution must disprove it beyond reasonable doubt.',
    '## How general defences work');
}

// 02 Duress of threats: seven steps
{
  let b = '';
  b += rich(450, 128, 'Lord Bingham set out the limits in *R v Hasan* [2005]: work through in order', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  const steps = [
    ['Threat of death or serious injury', '*Valderrama-Vega* [1985]: other threats can be taken together if this one was a cause. *Quayle* [2005]: pain from illness is not a threat.'],
    ['Against D, immediate family, or someone D reasonably feels responsible for', '*Hasan*'],
    ['Directed at a particular crime', '*R v Cole* [1994]: moneylenders never told him to rob, so duress failed.'],
    ['Immediacy and no chance to escape', 'Reasonable belief the threat will be carried out immediately or almost immediately; no evasive action, such as the police (*Hasan*, disapproving *Hudson and Taylor* [1971]).'],
    ['The *Graham* test', 'Subjective then objective: *R v Graham* [1982], approved in *R v Howe* [1987].'],
    ['No voluntary association with criminals', 'Knew or ought reasonably to have known of violent pressure (*Hasan*). *Sharp* [1987]: violent gang, no defence; *Shepherd* [1987]: non-violent gang, defence available.'],
    ['Not for murder or attempted murder', '*Howe* [1987]; *Gotts* [1992]; *Wilson* [2007]: a 13-year-old helping his father.'],
  ];
  let y = 150;
  steps.forEach(([h, d], i) => {
    const last = i >= 5;
    const c = lcard(86, y, 784, { title: h, body: d, tsize: 17, size: 15, pad: 14, fill: last ? C.cream : '#ffffff', edge: last ? C.olive : C.panelEdge });
    b += badge(54, y + c.h / 2, 18, String(i + 1), i === 4 ? C.mustard : C.cream) + c.s;
    if (i < steps.length - 1) b += `<line x1="54" y1="${y + c.h / 2 + 18}" x2="54" y2="${y + c.h + 10 + 10}" stroke="${C.panelEdge}" stroke-width="3"/>`;
    y += c.h + 10;
  });
  add('02-duress-of-threats-steps',
    svg(900, y + 20, 'Duress of threats: seven steps', b),
    'Seven steps from R v Hasan: a threat of death or serious injury (Valderrama-Vega; Quayle); against D, immediate family or someone D feels responsible for; directed at a particular crime (Cole); immediacy and no chance to escape (Hasan, disapproving Hudson and Taylor); the Graham test; no voluntary association with criminals (Hasan; Sharp; Shepherd); and never for murder or attempted murder (Howe; Gotts; Wilson).',
    'Fail any one step and duress fails; the last two shut it out completely.',
    '## Duress of threats');
}

// 03 The Graham test and Bowen characteristics
{
  let b = '';
  const r = lrow(110, [
    { kicker: 'STAGE 1: SUBJECTIVE', title: 'Was D compelled to act because they reasonably believed they faced death or serious injury?', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'STAGE 2: OBJECTIVE', kfill: C.olive, title: 'Would a sober person of reasonable firmness, sharing D’s characteristics, have responded the same way?', fill: C.cream, edge: C.olive },
  ], { arrows: true, card: { tsize: 18 } });
  b += r.s;
  const y = 110 + r.h + 30;
  b += rich(450, y, '*R v Bowen* [1996]: which characteristics count in stage 2?', { size: 18, weight: 700, anchor: 'middle' });
  const yes = ['Age', 'Sex', 'Pregnancy', 'Serious physical disability', 'Recognised psychiatric illness'];
  const no = ['Low IQ short of mental impairment', 'Being unusually timid or vulnerable'];
  b += lbox(30, y + 20, 520, 270, { fill: '#ffffff', edge: C.tealDark, rx: 14 }) + T(54, y + 56, 'Count', { size: 18, weight: 700, fill: C.tealDark });
  yes.forEach((s2, i) => { const full = i === 4, x = full ? 54 : 54 + (i % 2) * 245, yy = y + 74 + Math.floor(i / 2) * 64, w = full ? 475 : 230; b += lbox(x, yy, w, 50, { fill: C.tealLight, edge: C.tealDark, rx: 25 }) + T(x + w / 2, yy + 31, s2, { size: 16, weight: 700, anchor: 'middle' }); });
  b += lbox(570, y + 20, 300, 270, { fill: '#ffffff', edge: C.rust, rx: 14 }) + T(594, y + 56, 'Do not count', { size: 18, weight: 700, fill: C.rust });
  no.forEach((s2, i) => { const yy = y + 74 + i * 90; b += lbox(594, yy, 252, 72, { fill: C.cream, edge: C.rust, rx: 14 }) + rpara(720, yy + 30, s2, 220, { size: 16, weight: 700, anchor: 'middle' }).s; });
  add('03-graham-test-bowen',
    svg(900, y + 320, 'The Graham test', b),
    'Stage 1 asks whether D was compelled to act because they reasonably believed they faced death or serious injury. Stage 2 asks whether a sober person of reasonable firmness sharing D’s characteristics would have responded the same way. Under R v Bowen, age, sex, pregnancy, serious physical disability and recognised psychiatric illness count; a low IQ short of mental impairment and being unusually timid or vulnerable do not.',
    'Both stages must be met; only Bowen characteristics shape the reasonable person.',
    '## Duress of threats');
}

// 04 Duress of circumstances: cases
{
  let b = '';
  b += lcard(30, 110, 840, { title: 'Same test, but the threat comes from the situation', body: 'rather than from a demand that D commit a particular crime', fill: C.cream, edge: C.olive, tsize: 19 }).s;
  const cases = [
    ['*R v Willer* (1986)', 'drove on the pavement to escape a gang: should have been left to the jury'],
    ['*R v Conway* [1988]', 'sped away from men he feared were attackers (they were police officers)'],
    ['*R v Martin* [1989]', 'disqualified driver drove his stepson to work: wife threatened suicide'],
    ['*DPP v Bell* [1992]', 'drunk man drove off to escape an attack, only as far as necessary'],
    ['*R v Pommell* [1995]', 'kept a gun overnight; must stop the offence once the danger has passed'],
    ['*R v Abdul-Hussain* [1999]', 'hijacked a plane to escape feared execution; wrong to withdraw the defence'],
  ];
  let y = 214, hmax = 0;
  cases.forEach(([c, d]) => { hmax = Math.max(hmax, lcard(0, 0, 411, { title: c, body: d, tsize: 17, size: 15 }).h); });
  cases.forEach(([c, d], i) => {
    const x = 30 + (i % 2) * 429, yy = y + Math.floor(i / 2) * (hmax + 14);
    b += lcard(x, yy, 411, { title: c, body: d, tsize: 17, size: 15, minH: hmax, fill: i === 4 ? C.tealLight : '#ffffff', edge: i === 4 ? C.tealDark : C.panelEdge }).s;
  });
  const ye = y + 3 * (hmax + 14) + 6;
  add('04-duress-of-circumstances',
    svg(900, ye + 20, 'Duress of circumstances', b),
    'Duress of circumstances uses the same test where the threat comes from the situation. Cases: Willer (pavement driving to escape a gang), Conway (fleeing feared attackers who were police), Martin (driving while disqualified after a suicide threat), DPP v Bell (driving only as far as necessary), Pommell (must stop once the danger has passed) and Abdul-Hussain (hijacking to escape execution).',
    'The danger comes from the circumstances, and the defence lasts only as long as the danger.',
    '## Duress of circumstances');
}

// 05 Intoxication decision tree
{
  let b = '';
  const q = (cx, cy, w, s) => lbox(cx - w / 2, cy - 28, w, 56, { fill: C.ink, edge: C.ink, rx: 28 }) + rich(cx, cy + 6, s, { size: 16, weight: 700, anchor: 'middle', fill: '#ffffff' });
  const out = (x, y, w, h, title, d, ok) => lbox(x, y, w, h, { fill: ok ? C.tealLight : C.cream, edge: ok ? C.tealDark : C.rust, rx: 12 }) + T(x + 14, y + 28, title, { size: 17, weight: 700, fill: ok ? C.tealDark : C.rust }) + rpara(x + 14, y + 52, d, w - 28, { size: 15 }).s;
  const lab = (x, y, s, f = C.muted, a = 'middle') => T(x, y, s, { size: 15, weight: 700, fill: f, anchor: a });
  b += q(450, 140, 380, 'Was the intoxication voluntary?');
  b += path('M300,168 L210,222', { extra: 'marker-end="url(#ah)"' }) + lab(232, 190, 'yes');
  b += path('M600,168 L690,222', { extra: 'marker-end="url(#ah)"' }) + lab(664, 192, 'no: involuntary', C.muted, 'start');
  // voluntary branch
  b += q(230, 252, 400, 'Specific or basic intent offence?');
  b += path('M140,280 L110,330', { extra: 'marker-end="url(#ah)"' }) + lab(94, 310, 'specific');
  b += path('M320,280 L350,330', { extra: 'marker-end="url(#ah)"' }) + lab(368, 310, 'basic');
  b += out(30, 336, 210, 240, 'Intent formed?', 'If D was too intoxicated to form it: acquitted of it, usually convicted of a basic intent fallback. A drunken intent is still an intent (*Sheehan and Moore*).', true);
  b += out(256, 336, 190, 240, 'No defence', 'Voluntary intoxication is reckless conduct supplying the *mens rea*: *DPP v Majewski* [1977]; *Lipman* [1970]; *Heard* [2007].', false);
  // involuntary branch
  b += q(690, 252, 300, 'Was intent formed?');
  b += path('M620,280 L590,330', { extra: 'marker-end="url(#ah)"' }) + lab(586, 310, 'no');
  b += path('M760,280 L790,330', { extra: 'marker-end="url(#ah)"' }) + lab(800, 310, 'yes');
  b += out(466, 336, 200, 240, 'Defence', 'to both specific and basic intent offences: no reckless choice to become intoxicated.', true);
  b += out(682, 336, 188, 240, 'No defence', '"a drugged intent is still an intent": *R v Kingston* [1994].', false);
  const r = lrow(600, [
    { kicker: 'SPECIFIC INTENT', title: 'Murder; s 18 OAPA; theft; robbery; s 9(1)(a) burglary', tsize: 16 },
    { kicker: 'BASIC INTENT', kfill: C.rust, title: 'Manslaughter; s 20 and s 47 OAPA; assault; criminal damage', tsize: 16 },
  ], { card: { size: 15 } });
  b += r.s;
  const y = 600 + r.h + 14;
  b += rich(450, y + 12, 'Involuntary: drink spiked, a prescribed drug, or a non-dangerous drug with an unexpected effect.', { size: 15, anchor: 'middle', fill: C.muted });
  b += rich(450, y + 36, 'Sedatives: *R v Hardie* [1985], was taking Valium reckless? Knowing it is alcohol makes it voluntary: *R v Allen* [1988].', { size: 15, anchor: 'middle', fill: C.muted });
  add('05-intoxication-decision-tree',
    svg(900, y + 64, 'Intoxication: when can it help?', b),
    'A decision tree. Voluntary intoxication is no defence to basic intent offences such as manslaughter, s 20 and s 47 OAPA, assault and criminal damage (Majewski; Lipman; Heard); for specific intent offences such as murder, s 18, theft, robbery and burglary it helps only if D did not form the intent (Sheehan and Moore). Involuntary intoxication is a defence to both if no intent was formed, but not if intent was formed (Kingston).',
    'The questions are always: voluntary or not, which kind of offence, and was the intent formed?',
    '## Intoxication');
}

// 06 Three traps: Dutch courage, drunken mistakes, and the criminal damage exception
{
  let b = '';
  const r = lrow(110, [
    { kicker: 'DUTCH COURAGE', kfill: C.rust, title: 'Intent formed sober, then drinks to act', body: 'No defence, even to a specific intent offence: *Attorney General for Northern Ireland v Gallagher* [1963].', edge: C.rust },
    { kicker: 'INTOXICATED MISTAKES', kfill: C.rust, title: 'Drunkenly believes self-defence is needed', body: 'Cannot rely on the mistake: *R v O’Grady* [1987]; *R v Hatton* [2005].', edge: C.rust },
    { kicker: 'EXCEPTION', title: 'Criminal damage', body: 's 5(2) Criminal Damage Act 1971 allows an honest belief, even a drunken one: *Jaggard v Dickinson* [1981].', fill: C.tealLight, edge: C.tealDark },
  ], { card: { size: 16, tsize: 18 } });
  b += r.s;
  add('06-intoxication-traps',
    svg(900, 110 + r.h + 30, 'Intoxication: three special rules', b),
    'Dutch courage: if D forms the intent sober and drinks to act, intoxication is no defence even to a specific intent offence (Gallagher). A drunken mistaken belief in the need for self-defence cannot be relied on (O’Grady; Hatton). The exception is criminal damage, where s 5(2) Criminal Damage Act 1971 allows an honest belief, even a drunken one (Jaggard v Dickinson).',
    'Drinking for courage and drunken mistakes do not help, except under s 5(2) for criminal damage.',
    '## Intoxication');
}

// 07 Ravi worked example
{
  let b = '';
  b += lcard(30, 110, 840, { body: 'Ravi owes money to a gang. They tell him to set fire to a rival’s shop that night or they will break his legs; they wait outside his flat. He drinks heavily "for courage". At the shop he punches a passer-by he wrongly thinks is about to attack him.', size: 17, bfill: C.ink }).s;
  let y = 240;
  b += lbox(30, y, 840, 44, { fill: C.ink, edge: C.ink }) + T(54, y + 29, 'Arson (criminal damage by fire)', { size: 18, weight: 700, fill: '#ffffff' });
  y += 56;
  const rows = [
    ['Duress', 'Threat of serious injury; nominated crime (*Cole* satisfied); gang outside: immediacy arguable.', 'arguable', C.tealDark, C.tealLight],
    ['But', 'He owed money to a gang: if he knew or ought to have known they might use violence, voluntary association removes the defence (*Hasan*).', 'may fail', C.rust, C.cream],
    ['Drink', 'Dutch courage: no defence (*Gallagher*); criminal damage is basic intent anyway (*Majewski*).', 'no defence', C.rust, C.cream],
  ];
  const step = ([k, d, res, e, f]) => {
    const c = lcard(150, y, 560, { body: d, size: 16, bfill: C.ink, vcenter: true, minH: 70 });
    let s = lbox(30, y, 108, c.h, { fill: '#ffffff', edge: e }) + T(84, y + c.h / 2 + 6, k, { size: 17, weight: 700, anchor: 'middle', fill: e }) + c.s;
    s += lbox(722, y, 148, c.h, { fill: f, edge: e }) + T(796, y + c.h / 2 + 6, res, { size: 16, weight: 700, anchor: 'middle', fill: e });
    y += c.h + 10;
    return s;
  };
  rows.forEach((r2) => { b += step(r2); });
  y += 10;
  b += lbox(30, y, 840, 44, { fill: C.ink, edge: C.ink }) + T(54, y + 29, 'Assault on the passer-by', { size: 18, weight: 700, fill: '#ffffff' });
  y += 56;
  b += step(['Mistake', 'A drunken belief in the need for self-defence is not available (*O’Grady*; *Hatton*).', 'no defence', C.rust, C.cream]);
  add('07-ravi-worked-example',
    svg(900, y + 20, 'Worked example: Ravi', b),
    'For arson, Ravi’s duress argument has a threat of serious injury and a nominated crime, and immediacy is arguable, but voluntary association with a gang he owed money to is likely to remove it (Hasan); drinking for courage is no defence (Gallagher), and criminal damage is basic intent (Majewski). For the assault, his drunken mistaken belief in self-defence is not available (O’Grady; Hatton).',
    'Take one offence and one defence at a time: element, facts, case, conclusion.',
    '## Worked example');
}
