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

export const slug = 'edexcel-a-level-law-yla1-magistrates-and-juries';

// 01 Why lay people: the balance
{
  let b = '';
  const r = lrow(110, [
    { kicker: 'MAGISTRATES', title: 'Decide the great majority of criminal cases', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'JURIES', title: 'Decide guilt in the most serious cases', fill: C.tealLight, edge: C.tealDark },
  ], { card: { tsize: 19 } });
  b += r.s;
  const y = 110 + r.h + 30;
  // scale
  const cx = 450, by = y + 70;
  b += `<line x1="${cx}" y1="${by - 30}" x2="${cx}" y2="${by + 160}" stroke="${C.ink}" stroke-width="5"/>`;
  b += `<path d="M${cx - 60},${by + 180} L${cx + 60},${by + 180} L${cx + 30},${by + 160} L${cx - 30},${by + 160} Z" fill="${C.ink}"/>`;
  b += `<line x1="${cx - 260}" y1="${by}" x2="${cx + 260}" y2="${by}" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>`;
  b += `<circle cx="${cx}" cy="${by}" r="10" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
  const pan = (px, title, items, e, f) => {
    let s = `<line x1="${px}" y1="${by}" x2="${px - 90}" y2="${by + 60}" stroke="${C.ink}" stroke-width="2"/><line x1="${px}" y1="${by}" x2="${px + 90}" y2="${by + 60}" stroke="${C.ink}" stroke-width="2"/>`;
    s += lbox(px - 150, by + 60, 300, 150, { fill: f, edge: e, rx: 16 });
    s += T(px, by + 94, title, { size: 19, weight: 700, anchor: 'middle', fill: e });
    items.forEach((it, i) => { s += T(px, by + 128 + i * 28, it, { size: 17, weight: 600, anchor: 'middle' }); });
    return s;
  };
  b += pan(cx - 260, 'Justification', ['democratic participation:', 'justice by the community,', 'not only professionals'], C.tealDark, C.tealLight);
  b += pan(cx + 260, 'Criticisms', ['competence', 'consistency', 'representativeness'], C.rust, C.cream);
  b += T(cx, y + 10, 'A lay person has no legal qualification', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  add('01-why-lay-people',
    svg(900, by + 240, 'Why use lay people?', b),
    'Magistrates decide the great majority of criminal cases and juries decide guilt in the most serious ones, though neither has a legal qualification. A balance weighs the justification, democratic participation, against the criticisms of competence, consistency and representativeness.',
    'Lay justice is justified by democratic participation and criticised for competence, consistency and representativeness.',
    '## Why lay people?');
}

// 02 Becoming a magistrate
{
  let b = '';
  const r = lrow(110, [
    { kicker: 'AGE', title: 'From 18; retire at 75', body: 'raised from 70 in 2022' },
    { kicker: 'QUALIFICATIONS', title: 'None in law' },
    { kicker: 'COMMITMENT', title: '13 full days a year', body: '(26 half-days); unpaid, expenses and lost earnings claimable' },
  ], { card: { size: 15, tsize: 18 } });
  b += r.s;
  let y = 110 + r.h + 22;
  b += T(450, y, 'SIX KEY QUALITIES', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
  const q = ['Good character', 'Understanding and communication', 'Social awareness', 'Maturity and sound temperament', 'Sound judgement', 'Commitment and reliability'];
  q.forEach((s2, i) => { const x = 30 + (i % 3) * 286, yy = y + 14 + Math.floor(i / 3) * 56; b += lbox(x, yy, 268, 44, { fill: C.cream, edge: C.olive, rx: 22 }) + T(x + 134, yy + 28, s2, { size: 15, weight: 700, anchor: 'middle' }); });
  y += 14 + 2 * 56 + 10;
  const steps = [
    ['Vacancies advertised', ''],
    ['Local Advisory Committee interviews', 'usually twice, and recommends appointments'],
    ['Appointed by the Lord Chief Justice', 'historically the Lord Chancellor'],
    ['Training through the Judicial College', 'mentoring, observation visits, regular appraisal; it does not make them lawyers'],
  ];
  steps.forEach(([h, d], i) => {
    const c = lcard(86, y, 784, { title: h, body: d || undefined, tsize: 18, size: 15, pad: 14, fill: i === 2 ? C.cream : '#ffffff', edge: i === 2 ? C.olive : C.panelEdge });
    b += badge(54, y + c.h / 2, 18, String(i + 1), i === 2 ? C.mustard : C.cream) + c.s;
    y += c.h + 10;
  });
  b += rich(450, y + 18, 'Cannot serve: e.g. certain criminal convictions, undischarged bankrupts, conflicting jobs such as police officers.', { size: 15, anchor: 'middle', fill: C.muted });
  b += rich(450, y + 42, 'The specification names the Justices of the Peace Act 1979; much of it is now in the Courts Act 2003.', { size: 15, anchor: 'middle', fill: C.muted });
  add('02-becoming-a-magistrate',
    svg(900, y + 70, 'Becoming a magistrate', b),
    'Magistrates are appointed from 18 and retire at 75, need no legal qualifications, and sit at least 13 full days a year unpaid. Six key qualities are sought. Vacancies are advertised, a local Advisory Committee interviews and recommends, the Lord Chief Justice appoints, and training is organised through the Judicial College.',
    'No legal qualification needed: six qualities, an interview, appointment, then training.',
    '## Magistrates');
}

// 03 Magistrates' role
{
  let b = '';
  b += lbox(30, 110, 840, 170, { fill: '#ffffff', edge: C.panelEdge, rx: 14 });
  const person = (cx, cy, f, lab) => `<circle cx="${cx}" cy="${cy - 22}" r="16" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/><path d="M${cx - 26},${cy + 26} Q${cx - 26},${cy} ${cx},${cy} Q${cx + 26},${cy} ${cx + 26},${cy + 26} Z" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + T(cx, cy + 50, lab, { size: 15, weight: 700, anchor: 'middle' });
  [0, 1, 2].forEach((i) => { b += person(110 + i * 80, 210, C.teal, 'JP'); });
  b += T(190, 146, 'three lay magistrates: the bench', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 700 });
  b += person(420, 210, '#ffffff', 'legal adviser');
  b += rpara(470, 186, 'advises on law and procedure; must not take part in the decision', 170, { size: 15, fill: C.muted }).s;
  b += person(720, 210, C.cream, 'District Judge');
  b += rpara(760, 186, 'professional; sits alone in busier courts', 100, { size: 15, fill: C.muted }).s;
  const r = lrow(300, [
    { kicker: 'CRIMINAL', title: 'Trials and first hearings', body: ['all summary offences', 'most either way offences, if D agrees', 'first hearings for indictable offences, then sent to the Crown Court'], bullets: true },
    { kicker: 'PRE-TRIAL', title: 'Bail and warrants', body: ['decide bail', 'issue search and arrest warrants'], bullets: true },
    { kicker: 'OTHER COURTS', title: 'Youth and family', body: ['youth court: ages 10 to 17', 'family court'], bullets: true },
  ], { card: { size: 15, tsize: 18 } });
  b += r.s;
  const y = 300 + r.h + 16;
  b += note(y, 'Custodial powers are limited and the single-offence limit has changed often: check the current figure.', { size: 16 });
  add('03-magistrates-role',
    svg(900, y + 94, 'What magistrates do', b),
    'Magistrates sit as a bench of three advised by a legal adviser, who must not take part in the decision; professional District Judges sit alone in busier courts. They try summary and most either way offences, hold first hearings for indictable offences, decide bail, issue warrants, and sit in the youth court (ages 10 to 17) and the family court.',
    'A bench of three lay people, advised on law but deciding for themselves.',
    '## Magistrates');
}

// 04 Magistrates: advantages and disadvantages, paired
{
  let b = '';
  const pairs = [
    ['Local knowledge of the area', 'Local knowledge may be limited or out of date'],
    ['Cheap: unpaid', 'Can rely heavily on the legal adviser'],
    ['Lay involvement: justice by the community', 'Profile tends to be older and from professional backgrounds'],
    ['A bench of three balances individual views', 'Sentencing can be inconsistent between areas'],
    ['Few successful appeals, suggesting sound decisions', 'Risk of becoming "case-hardened" and prosecution-minded (*Jowitt*)'],
  ];
  b += lbox(30, 110, 411, 44, { fill: C.tealDark, edge: C.tealDark }) + T(54, 139, 'Advantages', { size: 17, weight: 700, fill: '#ffffff' });
  b += lbox(459, 110, 411, 44, { fill: C.rust, edge: C.rust }) + T(483, 139, 'Disadvantages', { size: 17, weight: 700, fill: '#ffffff' });
  let y = 166;
  pairs.forEach(([a, d]) => {
    const h = Math.max(lcard(0, 0, 411, { body: a, size: 16 }).h, lcard(0, 0, 411, { body: d, size: 16 }).h);
    b += lcard(30, y, 411, { body: a, size: 16, bfill: C.ink, fill: C.tealLight, edge: C.tealDark, minH: h, vcenter: true }).s;
    b += lcard(459, y, 411, { body: d, size: 16, bfill: C.ink, fill: '#ffffff', edge: C.rust, minH: h, vcenter: true }).s;
    y += h + 10;
  });
  const c = lcard(30, y + 10, 840, { kicker: 'A CASE ON BIAS', kfill: C.olive, title: '*R v Bingham Justices, ex parte Jowitt* (1974)', body: 'The chairman said his principle was always to believe the police officer’s evidence; the conviction was quashed because the defendant had not had a fair hearing.', fill: C.cream, edge: C.olive });
  b += c.s;
  add('04-magistrates-evaluation',
    svg(900, y + 10 + c.h + 30, 'Magistrates: for and against', b),
    'Advantages of magistrates: local knowledge, low cost, lay involvement, a balanced bench of three, and few successful appeals. Disadvantages: limited or dated local knowledge, reliance on the legal adviser, an older and professional profile, inconsistent sentencing, and the risk of case-hardening, shown in R v Bingham Justices, ex parte Jowitt, where a conviction was quashed because the chairman always believed the police.',
    'Each advantage has a matching weakness; support the weaknesses with Jowitt.',
    '## Magistrates');
}

// 05 Jurors: who can serve
{
  let b = '';
  b += rich(450, 128, 'Juries Act 1974, s 1, as amended', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  const elig = [['Electoral register', 'registered'], ['Age 18 to 75', 'raised from 70 by the CJCA 2015'], ['Resident 5 years', 'in the UK since the age of 13'], ['Not disqualified', 'and not mentally disordered']];
  elig.forEach(([h, d], i) => {
    const x = 30 + i * 214;
    b += lbox(x, 146, 192, 100, { fill: C.tealLight, edge: C.tealDark }) + T(x + 96, 182, h, { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + rpara(x + 96, 208, d, 170, { size: 15, anchor: 'middle', fill: C.muted }).s;
    if (i < 3) b += T(x + 203, 202, '+', { size: 20, weight: 700, anchor: 'middle' });
  });
  const dq = lcard(30, 270, 411, { kicker: 'DISQUALIFIED', kfill: C.rust, title: 'Criminal history', body: ['ever sentenced to life, or to custody of five years or more', 'in the last ten years: served any custody, or a suspended sentence or community order', 'currently on bail in criminal proceedings'], bullets: true, edge: C.rust, size: 15 });
  b += dq.s;
  const pol = lcard(459, 270, 411, { kicker: 'CRIMINAL JUSTICE ACT 2003', title: 'Judges, lawyers and police can now serve', body: '*R v Abdroikov* [2007]: in two of three appeals a fair-minded observer would see a real possibility of bias with a police officer or CPS lawyer on the jury; those convictions were quashed.', fill: C.cream, edge: C.olive, size: 15, minH: dq.h });
  b += pol.s;
  const y = 270 + Math.max(dq.h, pol.h) + 16;
  b += note(y, 'Anyone may ask to be excused for a good reason, or to defer service to another time.', { size: 16, fill: '#ffffff', edge: C.panelEdge });
  add('05-juror-qualifications',
    svg(900, y + 94, 'Who can be a juror?', b),
    'Under the Juries Act 1974, s 1, a juror must be on the electoral register, aged 18 to 75, resident in the UK for five years since age 13, and not disqualified or mentally disordered. Disqualification covers a life sentence or custody of five years or more, recent custody or community sentences, and being on bail. Since 2003 judges, lawyers and police can serve, subject to R v Abdroikov.',
    'Four qualifications, a criminal-record bar, and no automatic exemptions since 2003.',
    '## Jurors');
}

// 06 Jury selection funnel
{
  let b = '';
  const stages = [
    ['Electoral register', 'names selected at random by computer: Jury Central Summoning Bureau', 760],
    ['Panel at the Crown Court', 'those summoned', 620],
    ['Twelve by ballot', 'in court, for each trial', 480],
    ['Vetting', 'routine police checks for disqualification; wider checks only in exceptional cases such as national security', 760],
    ['Challenges', 'for cause by either side; the prosecution may stand by a juror; no peremptory challenge since the Criminal Justice Act 1988', 760],
  ];
  let y = 110;
  stages.forEach(([h, d, w], i) => {
    const x = 450 - w / 2, check = i >= 3;
    const c = lcard(x, y, w, { title: h, body: d, tsize: 18, size: 15, align: 'middle', fill: check ? '#ffffff' : (i === 2 ? C.cream : C.tealLight), edge: check ? C.panelEdge : (i === 2 ? C.olive : C.tealDark) });
    b += c.s;
    y += c.h;
    if (i < stages.length - 1) { b += arrow(450, y + 4, 450, y + 26, { w: 3 }); y += 30; }
    if (i === 2) { b += T(450, y - 34, '', {}); }
  });
  const r = lrow(y + 20, [
    { kicker: 'NO RIGHT TO A RACIALLY MIXED JURY', title: '*R v Ford* [1989]' },
    { kicker: 'FAIR TRIAL BREACHED', kfill: C.rust, title: '*Sander v UK* (2000)', body: 'a juror’s racist jokes were not dealt with adequately', edge: C.rust },
  ], { card: { size: 15, tsize: 18 } });
  b += r.s;
  add('06-jury-selection',
    svg(900, y + 20 + r.h + 30, 'How a jury is selected', b),
    'The Jury Central Summoning Bureau selects names at random from the electoral register; those summoned form a panel at the Crown Court; twelve are chosen by ballot for each trial. Jurors may be vetted, and challenged for cause by either side or stood by by the prosecution; peremptory challenge was abolished in 1988. There is no right to a racially mixed jury (R v Ford), but Sander v UK found a breach of fair trial.',
    'Random selection, a ballot of twelve, then vetting and challenges.',
    '## Jurors');
}

// 07 Jury role and secrecy cases
{
  let b = '';
  const r = lrow(110, [
    { kicker: 'JURY', title: 'Decides the facts and returns the verdict', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'JUDGE', title: 'Decides questions of law and passes sentence' },
  ], { card: { tsize: 18 } });
  b += r.s;
  let y = 110 + r.h + 16;
  b += lbox(30, y, 840, 70, { fill: C.cream, edge: C.olive });
  b += rich(54, y + 30, 'Majority verdicts, Juries Act 1974, s 17', { size: 17, weight: 700 }) + rich(54, y + 55, 'after at least two hours: 11–1 or 10–2', { size: 16, fill: C.muted });
  b += rich(846, y + 44, 'Civil: rare (fraud, malicious prosecution, false imprisonment)', { size: 15, anchor: 'end', fill: C.muted });
  y += 90;
  b += T(450, y, 'SECRECY: INSIDE AND OUTSIDE THE JURY ROOM', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
  y += 14;
  b += lbox(250, y, 400, 120, { fill: C.ink, edge: C.ink, rx: 16, dash: '' }) + T(450, y + 36, 'Jury room', { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' });
  b += rpara(450, y + 66, '*R v Mirza* [2004]: the Lords refused to look into what was said', 360, { size: 15, anchor: 'middle', fill: C.teal }).s;
  const outs = [
    ['*R v Young (Stephen)* [1995]', 'ouija board in the hotel: conviction quashed'],
    ['*R v Fraill* [2011]', 'contacted a defendant on Facebook: jailed'],
    ['*Attorney General v Dallas* [2012]', 'researched the defendant online: jailed'],
  ];
  const yo = y + 140;
  outs.forEach(([h, d], i) => { const x = 30 + i * 286; b += lcard(x, yo, 268, { title: h, body: d, tsize: 16, size: 15, edge: C.rust, minH: 132 }).s; });
  y = yo + 148;
  const r2 = lrow(y, [
    { kicker: 'JURY EQUITY', title: '*Bushell’s Case* (1670); *R v Ponting* (1985); *R v Kronlid* (1996)', body: 'verdict according to conscience: acquittals with no apparent legal defence', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'TRIAL WITHOUT A JURY', title: 'CJA 2003, s 44', body: 'real danger of jury tampering: *R v Twomey* [2009] was the first' },
  ], { card: { size: 15, tsize: 16 } });
  b += r2.s;
  add('07-jury-role-and-secrecy',
    svg(900, y + r2.h + 30, 'The jury’s role and its limits', b),
    'The jury decides the facts and the verdict; the judge decides the law and sentence. Majority verdicts of 11–1 or 10–2 are allowed after two hours (s 17). Deliberations are secret (Mirza), but misconduct outside the jury room led to a quashed conviction in Young and jail in Fraill and Dallas. Jury equity runs from Bushell’s Case to Ponting and Kronlid; s 44 CJA 2003 allows trial without a jury, first used in Twomey.',
    'Juries decide facts in secret; what happens outside the jury room can be examined.',
    '## Jurors');
}

// 08 Evaluation plan
{
  let b = '';
  b += rich(450, 128, 'Question: *Evaluate the use of juries in criminal trials.*', { size: 18, weight: 700, anchor: 'middle' });
  const steps = [
    ['AO1: knowledge', 'qualifications under the Juries Act 1974, selection, role in the Crown Court, majority verdicts', C.ink, '#ffffff'],
    ['For', 'participation; independence (*Bushell*, *Ponting*); a cross-section; secrecy reduces pressure', C.tealDark, C.tealLight],
    ['Against', 'no reasons; misconduct (*Young*, *Fraill*); possible bias (*Sander*, *Abdroikov*); cost and time', C.rust, '#ffffff'],
    ['Conclude', 'e.g. justified for serious offences for their democratic value, with reforms such as the 2015 research offence to protect fair trials', C.olive, C.cream],
  ];
  let y = 150;
  steps.forEach(([h, d, e, f], i) => {
    const c = lcard(86, y, 784, { title: h, body: d, tsize: 18, size: 16, fill: f, edge: e, tfill: e, bfill: C.ink });
    b += badge(54, y + c.h / 2, 18, String(i + 1), i === 3 ? C.mustard : C.cream) + c.s;
    if (i < 3) b += `<line x1="54" y1="${y + c.h / 2 + 18}" x2="54" y2="${y + c.h + 14 + 10}" stroke="${C.panelEdge}" stroke-width="3"/>`;
    y += c.h + 14;
  });
  add('08-jury-evaluation-plan',
    svg(900, y + 16, 'Worked example: an evaluation plan', b),
    'A four-step plan for "Evaluate the use of juries in criminal trials": AO1 knowledge of qualifications, selection, role and majority verdicts; points for, such as participation and independence (Bushell, Ponting); points against, such as no reasons, misconduct (Young, Fraill) and bias (Sander, Abdroikov); and a reasoned conclusion.',
    'Knowledge, then both sides with cases, then a conclusion that takes a view.',
    '## Worked example: an evaluation plan');
}
