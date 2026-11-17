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

export const slug = 'edexcel-a-level-law-yla1-misrepresentation-and-mistake';

// 01 Voidable or void
{
  let b = '';
  const col = (x, kick, title, d, e, f, art) => {
    let s = lbox(x, 110, 411, 330, { fill: f, edge: e, rx: 14 });
    s += T(x + 24, 142, kick, { size: 15, weight: 700, fill: e }) + T(x + 24, 172, title, { size: 22, weight: 700 });
    s += rpara(x + 24, 202, d, 363, { size: 16 }).s + art;
    return s;
  };
  const docArt = (x, y, cross, dash) => `<path d="M${x},${y} H${x + 90} L${x + 120},${y + 30} V${y + 130} H${x} Z" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5" ${dash ? 'stroke-dasharray="8 6"' : ''}/>` +
    [0, 1, 2, 3].map((i) => `<rect x="${x + 16}" y="${y + 44 + i * 18}" width="${80 - (i % 2) * 20}" height="8" rx="4" fill="${C.panelEdge}"/>`).join('') +
    (cross ? path(`M${x - 10},${y + 140} L${x + 130},${y - 10}`, { stroke: C.rust, w: 5 }) : '');
  b += col(30, 'MISREPRESENTATION', 'Voidable', 'Stands until the innocent party chooses to set it aside.', C.tealDark, C.tealLight,
    docArt(70, 260, false, false) + arrow(210, 330, 260, 330, { w: 3 }) + T(270, 318, 'innocent party', { size: 15, weight: 700, fill: C.tealDark }) + T(270, 340, 'may rescind', { size: 15, weight: 700, fill: C.tealDark }));
  b += col(459, 'OPERATIVE MISTAKE', 'Void', 'Usually never a contract at all.', C.rust, '#ffffff',
    docArt(500, 260, true, true) + T(650, 330, 'no contract', { size: 16, weight: 700, fill: C.rust }));
  b += note(462, 'The difference matters most when goods have been sold on to an innocent third party.');
  add('01-voidable-or-void',
    svg(900, 556, 'Flawed consent: voidable or void', b),
    'Misrepresentation makes a contract voidable: it stands until the innocent party chooses to set it aside. An operative mistake usually makes it void: it was never a contract. The difference matters most when goods have been sold on to an innocent third party.',
    'Misrepresentation: voidable. Operative mistake: void.',
    '## What makes a contract invalid?');
}

// 02 Elements checklist
{
  let b = '';
  b += lcard(30, 110, 840, { title: 'An untrue statement of fact, made by one party to the other before or at the time of the contract, which induces the other party to enter into it', fill: C.ink, edge: C.ink, tfill: '#ffffff', tsize: 18 }).s;
  const els = [
    ['1', 'A statement', ['by words or conduct: *Spice Girls v Aprilia* [2002]', 'silence generally not: *Fletcher v Krell* (1873)', 'except half-truths (*Dimmock v Hallett*), changed circumstances (*With v O’Flanagan*), utmost good faith'], C.tealDark, C.tealLight],
    ['2', 'Of fact', ['not opinion: *Bisset v Wilkinson* [1927]', 'expert opinion can be fact: *Esso v Mardon* [1976]', 'a lie about present intention is fact: *Edgington v Fitzmaurice* (1885)', 'sales puff is too vague'], C.olive, C.cream],
    ['3', 'Inducement', ['no reliance if D checked and relied on the check: *Attwood v Small* (1838)', 'could have checked but did not: still relying, *Redgrave v Hurd* (1881)', 'need not be the only reason'], C.blue, '#dfe7f3'],
  ];
  const w = 268, g = 18;
  let hmax = 0;
  els.forEach(([, t2, body]) => { hmax = Math.max(hmax, lcard(0, 0, w, { title: t2, body, bullets: true, size: 15, tsize: 20 }).h); });
  els.forEach(([n, t2, body, e, f], i) => {
    const x = 30 + i * (w + g), y = 210;
    b += lcard(x, y + 22, w, { title: t2, body, bullets: true, size: 15, tsize: 20, fill: f, edge: e, tfill: e, bfill: C.ink, minH: hmax, pad: 22 }).s;
    b += badge(x + w / 2, y + 22, 20, n, C.mustard);
  });
  b += rich(450, 210 + 22 + hmax + 30, '"The state of a man’s mind is as much a fact as the state of his digestion" (Bowen LJ, *Edgington*)', { size: 15, anchor: 'middle', fill: C.muted });
  add('02-misrepresentation-elements',
    svg(900, 210 + 22 + hmax + 56, 'Misrepresentation: the three elements', b),
    'A misrepresentation is an untrue statement of fact that induces the contract. 1: a statement, by words or conduct (Spice Girls); silence generally is not (Fletcher v Krell) except half-truths, changed circumstances and utmost good faith. 2: of fact, not opinion (Bisset v Wilkinson), though expert opinion (Esso v Mardon) and lies about present intention (Edgington) count. 3: inducement: no reliance after the claimant’s own check (Attwood v Small), but failing to check does not matter (Redgrave v Hurd).',
    'Test each element with a case: statement, fact, inducement.',
    '## Misrepresentation: the elements');
}

// 03 Three types and remedies
{
  let b = '';
  const types = [
    ['Fraudulent', 'knowingly, without belief, or recklessly: *Derry v Peek* (1889)', 'Rescission + damages in deceit for all direct losses (*Doyle v Olby* [1969])', C.rust, '#ffffff'],
    ['Negligent: s 2(1) MA 1967', 'liable unless the maker proves reasonable grounds and belief up to the contract', 'Rescission + damages measured as if fraudulent (*Royscot Trust v Rogerson* [1991])', C.olive, C.cream],
    ['Negligent at common law', 'negligent misstatement with a special relationship: *Hedley Byrne v Heller* [1964]', 'Damages in tort', C.blue, '#dfe7f3'],
    ['Innocent', 'the maker had reasonable grounds for believing it', 'Rescission; s 2(2): damages may be awarded instead', C.tealDark, C.tealLight],
  ];
  b += T(240, 132, 'TYPE AND TEST', { size: 15, weight: 700, fill: C.muted, anchor: 'middle' }) + T(700, 132, 'REMEDIES', { size: 15, weight: 700, fill: C.muted, anchor: 'middle' });
  let y = 146;
  types.forEach(([n, test, rem, e, f]) => {
    const h = Math.max(lcard(0, 0, 450, { title: n, body: test, tsize: 18, size: 15 }).h, lcard(0, 0, 340, { body: rem, size: 16 }).h);
    b += lcard(30, y, 450, { title: n, body: test, tsize: 18, size: 15, fill: f, edge: e, tfill: e, minH: h }).s;
    b += arrow(486, y + h / 2, 524, y + h / 2, { w: 3 });
    b += lcard(530, y, 340, { body: rem, size: 16, bfill: C.ink, minH: h, vcenter: true }).s;
    y += h + 12;
  });
  const r = lrow(y + 8, [
    { kicker: 'WHY s 2(1) HELPS CLAIMANTS', title: 'Burden of proof reversed', body: '*Howard Marine v Ogden* [1978]: barge capacity from the Lloyd’s Register was wrong; their own documents were right, so no reasonable grounds.', fill: C.cream, edge: C.olive },
    { kicker: 's 3 MA 1967', title: 'Excluding liability', body: 'effective only if reasonable under the Unfair Contract Terms Act 1977' },
  ], { card: { size: 15, tsize: 18 } });
  b += r.s;
  add('03-types-and-remedies',
    svg(900, y + 8 + r.h + 30, 'Types of misrepresentation and their remedies', b),
    'Fraudulent misrepresentation (Derry v Peek) gives rescission and damages in deceit for all direct losses (Doyle v Olby). Negligent misrepresentation under s 2(1) gives rescission and damages measured as if fraudulent (Royscot), and the maker must prove reasonable belief (Howard Marine v Ogden). Negligent misstatement at common law (Hedley Byrne) gives damages in tort. Innocent misrepresentation gives rescission, or damages instead under s 2(2). Section 3 subjects exclusion clauses to the UCTA reasonableness test.',
    'The type decides the remedy; s 2(1) puts the burden on the maker of the statement.',
    '## The three types and their remedies');
}

// 04 Rescission and its bars
{
  let b = '';
  b += lcard(30, 110, 840, { kicker: 'RESCISSION', title: 'Sets the contract aside and puts the parties back where they were', body: 'An equitable remedy, so it can be lost.', fill: C.tealLight, edge: C.tealDark }).s;
  const bars = [
    ['Affirmation', 'carries on after discovering the truth', '*Long v Lloyd* [1958]'],
    ['Undue delay', 'waits too long', '*Leaf v International Galleries* [1950]'],
    ['Restitution impossible', 'the subject matter cannot be returned', '*Clarke v Dickson* (1858)'],
    ['Third-party rights', 'an innocent third party has acquired rights for value', ''],
  ];
  const w = 198, g = 16;
  let hmax = 0;
  bars.forEach(([h, d, c]) => { hmax = Math.max(hmax, lcard(0, 0, w, { title: h, body: [d, c].filter(Boolean), size: 15, tsize: 17 }).h); });
  bars.forEach(([h, d, c], i) => {
    const x = 30 + i * (w + g);
    b += path(`M450,240 C450,262 ${x + w / 2},258 ${x + w / 2},276`, { stroke: C.rust, w: 2.5, extra: 'marker-end="url(#ahR)"' });
    b += lcard(x, 282, w, { kicker: 'BAR', kfill: C.rust, title: h, body: [d, c].filter(Boolean), size: 15, tsize: 17, edge: C.rust, minH: hmax + 25 }).s;
  });
  const y = 282 + hmax + 25 + 20;
  b += note(y, 'Act promptly and do not affirm once the truth is known.');
  add('04-rescission-bars',
    svg(900, y + 94, 'Rescission and its bars', b),
    'Rescission sets the contract aside and restores the parties, but as an equitable remedy it is lost by affirmation (Long v Lloyd), undue delay (Leaf v International Galleries), impossibility of restitution (Clarke v Dickson), or an innocent third party acquiring rights for value.',
    'Rescission is lost by affirming, delaying, being unable to give back, or third-party rights.',
    '## Rescission and its bars');
}

// 05 Contributory negligence and misrepresentation
{
  let b = '';
  b += lcard(30, 110, 840, { kicker: 'LAW REFORM (CONTRIBUTORY NEGLIGENCE) ACT 1945', title: 'Damages reduced to the extent the court thinks just, where the claimant was partly at fault', fill: C.cream, edge: C.olive, kfill: C.olive }).s;
  const r = lrow(232, [
    { kicker: 's 2(1) NEGLIGENT MISREPRESENTATION', title: 'Can in principle be reduced', body: '*Gran Gelato v Richcliff* [1992]: where D was also liable in negligence; on the facts, no reduction was made', fill: C.tealLight, edge: C.tealDark },
    { kicker: 'FRAUDULENT MISREPRESENTATION', kfill: C.rust, title: 'Never reduced', body: '*Standard Chartered Bank v Pakistan National Shipping (No 2)* [2002]: a fraudster cannot complain the victim should have been more careful', edge: C.rust },
  ], { card: { size: 16, tsize: 19 } });
  b += r.s;
  add('05-contributory-negligence',
    svg(900, 232 + r.h + 30, 'Contributory negligence and misrepresentation', b),
    'Under the 1945 Act damages can be reduced where the claimant was partly at fault. Damages under s 2(1) can in principle be reduced where the defendant was also liable in negligence (Gran Gelato v Richcliff, though no reduction was made), but contributory negligence is no defence to fraud (Standard Chartered v Pakistan National Shipping).',
    'A careless claimant may lose some damages for negligent misrepresentation, never for fraud.',
    '## The Law Reform (Contributory Negligence) Act 1945');
}

// 06 Three kinds of mistake
{
  let b = '';
  const person = (cx, cy, f) => `<circle cx="${cx}" cy="${cy - 18}" r="14" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/><path d="M${cx - 22},${cy + 22} Q${cx - 22},${cy} ${cx},${cy} Q${cx + 22},${cy} ${cx + 22},${cy + 22} Z" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
  const bubble = (cx, cy, s, f, e) => lbox(cx - 46, cy - 22, 92, 40, { fill: f, edge: e, rx: 20 }) + T(cx, cy + 4, s, { size: 16, weight: 700, anchor: 'middle', fill: e });
  const w = 268, g = 18;
  const cols = [
    ['Common', 'both make the same mistake', (x) => person(x + 74, 250, C.teal) + person(x + 194, 250, C.teal) + bubble(x + 74, 196, 'X', C.cream, C.rust) + bubble(x + 194, 196, 'X', C.cream, C.rust) + T(x + 134, 300, 'both wrong about X', { size: 15, anchor: 'middle', fill: C.muted })],
    ['Mutual', 'at cross-purposes', (x) => person(x + 74, 250, C.teal) + person(x + 194, 250, C.teal) + bubble(x + 74, 196, 'A', C.tealLight, C.tealDark) + bubble(x + 194, 196, 'B', '#dfe7f3', C.blue) + T(x + 134, 300, 'each means something different', { size: 15, anchor: 'middle', fill: C.muted })],
    ['Unilateral', 'one mistaken, the other knows', (x) => person(x + 74, 250, C.teal) + person(x + 194, 250, C.cream) + bubble(x + 74, 196, 'X?', C.cream, C.rust) + bubble(x + 194, 196, '!', C.cream, C.olive) + T(x + 134, 300, 'the other party knows', { size: 15, anchor: 'middle', fill: C.muted })],
  ];
  const bodies = [
    ['*Res extincta*: *Couturier v Hastie* (1856), void', '*Res sua*: *Cooper v Phibbs* (1867)', 'Quality: almost never operative, *Bell v Lever Bros* [1932]', '*Great Peace* [2002]: only if performance essentially different or impossible'],
    ['*Raffles v Wichelhaus* (1864): two ships called *Peerless*', '*Scriven v Hindley* [1913]: hemp or tow, misleading catalogue', 'If a reasonable person can find one meaning, there is a contract'],
    ['Terms: *Hartog v Colin and Shields* [1939], per pound not per piece', 'Identity in writing: void, *Cundy v Lindsay*; *Shogun Finance v Hudson* [2003]', 'Face to face: voidable, *Phillips v Brooks*; *Lewis v Averay* (*Ingram v Little* exceptional)'],
  ];
  let hmax = 0;
  bodies.forEach((bd) => { hmax = Math.max(hmax, lcard(0, 0, w, { body: bd, bullets: true, size: 15 }).h); });
  cols.forEach(([n, d, art], i) => {
    const x = 30 + i * (w + g);
    b += lbox(x, 110, w, 210, { fill: '#ffffff', edge: C.panelEdge, rx: 14 }) + T(x + w / 2, 144, n, { size: 21, weight: 700, anchor: 'middle' }) + T(x + w / 2, 168, d, { size: 15, anchor: 'middle', fill: C.muted }) + art(x);
    b += lcard(x, 334, w, { body: bodies[i], bullets: true, size: 15, bfill: C.ink, minH: hmax }).s;
  });
  const y = 334 + hmax + 16;
  b += note(y, 'Only an operative mistake affects validity; the law is reluctant to let a party escape.');
  add('06-three-kinds-of-mistake',
    svg(900, y + 94, 'Three kinds of mistake', b),
    'Common mistake: both parties make the same mistake, operative for non-existent subject matter (Couturier v Hastie) or res sua (Cooper v Phibbs) but almost never for quality (Bell v Lever Bros; Great Peace). Mutual mistake: cross-purposes, as with the two ships Peerless (Raffles v Wichelhaus) and hemp or tow (Scriven v Hindley). Unilateral mistake: one party is mistaken and the other knows, as to terms (Hartog v Colin and Shields) or identity, void in writing (Cundy v Lindsay; Shogun) but voidable face to face (Phillips v Brooks; Lewis v Averay).',
    'Same mistake, cross-purposes, or one side mistaken and the other aware.',
    '## Mistake');
}

// 07 Identity: written vs face to face
{
  let b = '';
  b += lbox(30, 110, 840, 60, { fill: C.ink, edge: C.ink, rx: 14 }) + T(450, 147, 'A rogue pretends to be someone else to obtain a contract', { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' });
  const col = (x, title, rule, res, cases, effect, e, f) => {
    let s = lbox(x, 190, 411, 340, { fill: f, edge: e, rx: 14 });
    s += T(x + 205, 226, title, { size: 21, weight: 700, anchor: 'middle', fill: e });
    s += rpara(x + 24, 258, rule, 363, { size: 16 }).s;
    s += lbox(x + 105, 320, 200, 56, { fill: '#ffffff', edge: e, rx: 28 }) + T(x + 205, 356, res, { size: 22, weight: 700, anchor: 'middle', fill: e });
    s += rpara(x + 24, 410, cases, 363, { size: 15, fill: C.muted }).s;
    s += rpara(x + 24, 480, effect, 363, { size: 15, weight: 700, fill: e }).s;
    return s;
  };
  b += col(30, 'Written contract', 'The identity of the named party is usually vital.', 'Void', '*Cundy v Lindsay* (1878); *Shogun Finance v Hudson* [2003]', 'never a contract at all', C.rust, '#ffffff');
  b += col(459, 'Face to face', 'The seller is presumed to intend to deal with the person in front of them.', 'Voidable', '*Phillips v Brooks* [1919]; *Lewis v Averay* [1972]; *Ingram v Little* [1961] usually treated as exceptional', 'stands until the mistaken party sets it aside', C.tealDark, C.tealLight);
  add('07-mistake-as-to-identity',
    svg(900, 560, 'Mistake as to identity', b),
    'When a rogue uses a false identity, a written contract is usually void because the named party’s identity is vital (Cundy v Lindsay; Shogun Finance v Hudson). Face to face, the seller is presumed to deal with the person in front of them, so the contract is only voidable (Phillips v Brooks; Lewis v Averay), with Ingram v Little treated as exceptional.',
    'In writing, identity is vital and the contract is void; face to face, it is only voidable.',
    '## Mistake');
}

// 08 Sana worked example
{
  let b = '';
  b += lcard(30, 110, 840, { body: 'Sana buys a café from Bilal, who says, "It makes £800 a week." That was true a year ago, but takings fell to £400 after a new road closed the street; Bilal knew. Sana did not check the accounts she was offered.', size: 17, bfill: C.ink }).s;
  const rows = [
    ['Statement', '"makes £800 a week": a statement of fact about current takings', ''],
    ['Silence?', 'a stated fact became untrue and was not corrected', '*With v O’Flanagan*'],
    ['Inducement', 'she relied on it; failure to check does not matter', '*Redgrave v Hurd*'],
    ['Type', 'Bilal knew the truth: fraudulent; or at least s 2(1), as he cannot prove reasonable belief', '*Derry v Peek*'],
    ['Remedy', 'rescission plus damages for all direct losses; if fraud, no reduction for her failure to check', '*Standard Chartered*'],
    ['Bars', 'act promptly and do not affirm', '*Long v Lloyd*'],
  ];
  let y = 232;
  rows.forEach(([k, d, c], i) => {
    const cc = lcard(170, y, 520, { body: d, size: 16, bfill: C.ink, vcenter: true, minH: 60 });
    b += lbox(30, y, 128, cc.h, { fill: i >= 3 ? C.cream : C.tealLight, edge: i >= 3 ? C.olive : C.tealDark }) + T(94, y + cc.h / 2 + 6, k, { size: 17, weight: 700, anchor: 'middle' }) + cc.s;
    if (c) b += lbox(702, y, 168, cc.h, { fill: '#ffffff', edge: C.panelEdge }) + rich(786, y + cc.h / 2 + 6, c, { size: 15, anchor: 'middle' });
    y += cc.h + 10;
  });
  add('08-sana-worked-example',
    svg(900, y + 20, 'Worked example: Sana and the café', b),
    'Bilal’s statement "it makes £800 a week" is a statement of fact that became untrue and was not corrected (With v O’Flanagan). Sana relied on it, and failing to check does not matter (Redgrave v Hurd). As Bilal knew the truth it is fraudulent (Derry v Peek), or at least s 2(1). She can claim rescission and damages, with no reduction for carelessness if it is fraud (Standard Chartered), provided she acts promptly and does not affirm (Long v Lloyd).',
    'IRAC each element: statement, fact, inducement, type, remedy, bars.',
    '## Worked example');
}
