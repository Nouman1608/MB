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

export const slug = 'edexcel-a-level-law-yla1-rules-of-statutory-interpretation';

// 01 Why interpretation is needed
{
  let b = '';
  const reasons = [
    ['Broad terms', '*Brock v DPP* [1993]: "any dog of the type known as the pit bull terrier"'],
    ['Ambiguity', 'a word with two or more ordinary meanings'],
    ['Drafting errors', 'missing or careless words, often in hurried amendments'],
    ['New developments', '*R (Quintavalle)* [2003]: cloned embryos and an Act that assumed fertilisation'],
    ['Changes in language', 'words shift meaning over time'],
  ];
  let y = 110;
  reasons.forEach(([h, d], i) => {
    const x = 30 + (i % 2) * 429, yy = y + Math.floor(i / 2) * 104;
    const w = i === 4 ? 840 : 411;
    b += lcard(i === 4 ? 30 : x, yy, w, { title: h, body: d, tsize: 18, size: 15, minH: 92 }).s;
  });
  y += 3 * 104 + 10;
  // tension balance
  b += lbox(30, y, 840, 120, { fill: C.ink, edge: C.ink, rx: 16 });
  b += T(450, y + 34, 'THE TENSION IN EVERY QUESTION', { size: 15, weight: 700, anchor: 'middle', fill: C.mustard });
  b += T(240, y + 78, 'Parliamentary supremacy', { size: 19, weight: 700, anchor: 'middle', fill: '#ffffff' }) + T(240, y + 102, 'Parliament makes law, judges apply it', { size: 15, anchor: 'middle', fill: C.teal });
  b += T(450, y + 84, '⟷', { size: 30, weight: 700, anchor: 'middle', fill: C.mustard });
  b += T(660, y + 78, 'A sensible, just result', { size: 19, weight: 700, anchor: 'middle', fill: '#ffffff' }) + T(660, y + 102, 'in the case in front of the judge', { size: 15, anchor: 'middle', fill: C.teal });
  add('01-why-interpret',
    svg(900, y + 150, 'Why judges interpret statutes', b),
    'Judges need to interpret statutes because of broad terms (Brock v DPP), ambiguity, drafting errors, new developments (R (Quintavalle)) and changes in language. Every question involves a tension between parliamentary supremacy and producing a sensible, just result.',
    'General words meet specific facts: judges balance Parliament’s supremacy against a just result.',
    '## Why there is a need for interpretation');
}

// 02 Spectrum of approaches
{
  let b = '';
  const X0 = 80, X1 = 820, y = 170;
  b += `<defs><linearGradient id="gSI" x1="0" x2="1"><stop offset="0" stop-color="${C.tealLight}"/><stop offset="1" stop-color="${C.cream}"/></linearGradient></defs>`;
  b += `<rect x="${X0}" y="${y - 16}" width="${X1 - X0}" height="32" rx="16" fill="url(#gSI)" stroke="${C.panelEdge}" stroke-width="2"/>`;
  b += T(X0, y - 34, 'the words', { size: 17, weight: 700, fill: C.tealDark });
  b += T(X1, y - 34, 'the purpose', { size: 17, weight: 700, fill: C.olive, anchor: 'end' });
  const rules = [
    ['Literal', 'plain, dictionary meaning, even if absurd', '*Whiteley v Chappell* (1868)'],
    ['Golden', 'literal first; depart to avoid absurdity', '*R v Allen* (1872); *Re Sigsworth* [1935]'],
    ['Mischief', '*Heydon’s Case* (1584): the defect the Act cures', '*Smith v Hughes* [1960]'],
    ['Purposive', 'the purpose of the whole Act', '*Jones v Tower Boot* [1997]'],
  ];
  const w = 198, g = 16;
  let hmax = 0;
  rules.forEach(([n, d, c]) => { hmax = Math.max(hmax, lcard(0, 0, w, { title: n, body: [d, c], size: 15, tsize: 19 }).h); });
  rules.forEach(([n, d, c], i) => {
    const x = 30 + i * (w + g), cx = x + w / 2, px = X0 + 40 + i * ((X1 - X0 - 80) / 3);
    b += `<circle cx="${px}" cy="${y}" r="10" fill="${C.ink}"/>` + path(`M${px},${y + 12} L${cx},${y + 60}`, { w: 2.5 });
    b += lcard(x, y + 62, w, { title: n, body: [d, c], size: 15, tsize: 19, minH: hmax, fill: i < 2 ? '#ffffff' : '#ffffff' }).s;
  });
  const yb = y + 62 + hmax + 20;
  b += note(yb, 'More certainty and supremacy to the left; more flexibility and justice to the right.');
  add('02-spectrum-of-approaches',
    svg(900, yb + 94, 'Four approaches, from words to purpose', b),
    'The four approaches on a line from the words to the purpose: the literal rule gives the plain meaning even if absurd (Whiteley v Chappell); the golden rule starts literally but departs to avoid absurdity (R v Allen; Re Sigsworth); the mischief rule from Heydon’s Case looks at the defect the Act cures (Smith v Hughes); the purposive approach looks at the purpose of the whole Act (Jones v Tower Boot).',
    'Each approach sits further from the bare words and closer to Parliament’s purpose.',
    '## Why there is a need for interpretation');
}

// 03 Literal rule
{
  let b = '';
  b += lcard(30, 110, 840, { kicker: 'THE LITERAL RULE', title: 'Plain, ordinary, dictionary meaning, even if the result is absurd', body: '*R v Judge of the City of London Court* [1892], Lord Esher: clear words must be followed "even though they lead to a manifest absurdity".', fill: C.tealLight, edge: C.tealDark }).s;
  const cases = [
    ['*Whiteley v Chappell* (1868)', '"any person entitled to vote"', 'voted as a dead man; the dead cannot vote', 'not guilty'],
    ['*Fisher v Bell* [1961]', '"offer for sale"', 'a knife in a window is an invitation to treat', 'not guilty; Parliament amended the law'],
    ['*LNER v Berriman* [1946]', '"relaying or repairing"', 'killed while oiling points: maintenance', 'widow received nothing'],
  ];
  const w = 268, g = 18;
  let hmax = 0;
  const body = (c) => [`Words: ${c[1]}`, c[2], `Result: ${c[3]}`];
  cases.forEach((c) => { hmax = Math.max(hmax, lcard(0, 0, w, { title: c[0], body: body(c), size: 15, tsize: 17 }).h); });
  cases.forEach((c, i) => { b += lcard(30 + i * (w + g), 250, w, { title: c[0], body: body(c), size: 15, tsize: 17, minH: hmax }).s; });
  const y = 250 + hmax + 18;
  const r = lrow(y, [
    { kicker: 'ADVANTAGES', title: 'Supremacy and certainty', body: ['applies Parliament’s words, not judges’ views', 'predictable from the text', 'shows Parliament where to amend (*Fisher v Bell*)'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'DISADVANTAGES', kfill: C.rust, title: 'Absurd and unjust results', body: ['*Whiteley*; *Berriman*', 'assumes perfect drafting (Law Commission, 1969)', 'words can have more than one plain meaning'], bullets: true, edge: C.rust },
  ], { card: { size: 15, tsize: 18 } });
  b += r.s;
  add('03-literal-rule',
    svg(900, y + r.h + 30, 'The literal rule', b),
    'The literal rule gives words their plain meaning even if absurd (Lord Esher, 1892). In Whiteley v Chappell a man who voted as a dead person was not guilty; in Fisher v Bell a knife in a shop window was not "offered for sale"; in LNER v Berriman oiling points was not "relaying or repairing". It respects supremacy and certainty but can produce absurd results and assumes perfect drafting.',
    'Certain and respectful of Parliament, but capable of absurd results.',
    '## The literal rule');
}

// 04 Golden rule: narrow and broad
{
  let b = '';
  b += lcard(30, 110, 840, { kicker: 'THE GOLDEN RULE: *GREY V PEARSON* (1857)', title: 'Start literal; if that leads to absurdity, adopt a different meaning', fill: C.cream, edge: C.olive, kfill: C.olive }).s;
  b += arrow(300, 210, 235, 246) + arrow(600, 210, 665, 246);
  const l = lcard(30, 252, 411, { kicker: 'NARROW APPROACH', title: 'Choose between possible meanings', body: ['*R v Allen* (1872): "marry" read as "go through a ceremony of marriage", or bigamy is impossible', '*Adler v George* [1964]: "in the vicinity of" read as "in or in the vicinity of"'], bullets: true, size: 15 });
  const r = lcard(459, 252, 411, { kicker: 'BROAD APPROACH', title: 'One meaning, but repugnant', body: ['*Re Sigsworth* [1935]: a son who murdered his mother could not inherit under the Administration of Estates Act 1925'], bullets: true, size: 15, minH: l.h });
  b += lcard(30, 252, 411, { kicker: 'NARROW APPROACH', title: 'Choose between possible meanings', body: ['*R v Allen* (1872): "marry" read as "go through a ceremony of marriage", or bigamy is impossible', '*Adler v George* [1964]: "in the vicinity of" read as "in or in the vicinity of"'], bullets: true, size: 15, minH: Math.max(l.h, r.h) }).s + r.s;
  const y = 252 + Math.max(l.h, r.h) + 18;
  const r2 = lrow(y, [
    { kicker: 'ADVANTAGES', body: ['corrects the worst literal results while staying close to the text', 'assumes Parliament did not intend absurdity'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'DISADVANTAGES', kfill: C.rust, body: ['no test of what is "absurd"', 'used occasionally and unpredictably', 'the broad approach effectively rewrites the words'], bullets: true, edge: C.rust },
  ], { card: { size: 15 } });
  b += r2.s;
  add('04-golden-rule',
    svg(900, y + r2.h + 30, 'The golden rule', b),
    'The golden rule from Grey v Pearson starts with the literal meaning but departs from it to avoid absurdity. The narrow approach chooses between meanings: "marry" in R v Allen and "in the vicinity of" in Adler v George. The broad approach overrides a single repugnant meaning: in Re Sigsworth a murderer could not inherit from his victim. It corrects literal absurdities but has no test of absurdity.',
    'Literal first; the narrow approach picks a meaning, the broad one avoids a repugnant result.',
    '## The golden rule');
}

// 05 Mischief rule: Heydon's four questions applied to Smith v Hughes
{
  let b = '';
  b += rich(450, 130, 'Four questions from *Heydon’s Case* (1584), applied to *Smith v Hughes* [1960]', { size: 17, weight: 700, anchor: 'middle' });
  const qs = [
    ['What was the common law before the Act?', 'the law before the Street Offences Act 1959'],
    ['What was the mischief or defect?', 'people being solicited in the street'],
    ['What remedy did Parliament provide?', 'an offence to solicit "in a street"'],
    ['What is the true reason for the remedy?', 'to stop that soliciting, wherever the prostitute stood'],
  ];
  let y = 150;
  qs.forEach(([q, a], i) => {
    const h = 78;
    b += badge(54, y + h / 2, 18, String(i + 1), i === 1 ? C.mustard : C.cream);
    b += lbox(86, y, 400, h, { fill: '#ffffff', edge: C.panelEdge }) + rpara(104, y + 34, q, 370, { size: 16, weight: 700 }).s;
    b += arrow(490, y + h / 2, 520, y + h / 2, { w: 3 });
    b += lbox(526, y, 344, h, { fill: i === 1 ? C.cream : C.tealLight, edge: i === 1 ? C.olive : C.tealDark }) + rpara(544, y + 34, a, 310, { size: 15 }).s;
    y += h + 12;
  });
  b += lbox(30, y + 4, 840, 60, { fill: C.ink, edge: C.ink, rx: 14 }) + rich(450, y + 40, 'Tapping on windows and balconies to attract men in the street: guilty', { size: 17, weight: 700, anchor: 'middle', fill: '#ffffff' });
  y += 84;
  const r = lrow(y, [
    { kicker: 'ALSO', title: '*Elliott v Grey* [1960]', body: 'a car on blocks was "used on a road": the hazard insurance law aimed at', size: 15 },
    { kicker: 'ALSO', title: '*RCN v DHSS* [1981]', body: 'nurses under a doctor’s supervision: lawful, 3–2; mischief was back-street abortions', size: 15 },
  ], { card: { size: 15, tsize: 17 } });
  b += r.s;
  y += r.h + 16;
  b += rich(450, y + 10, 'Weaknesses: built for short statutes; may need extrinsic aids; risk of judges deciding what Parliament "should" have done.', { size: 15, anchor: 'middle', fill: C.muted });
  add('05-mischief-rule',
    svg(900, y + 36, 'The mischief rule', b),
    'Heydon’s Case sets four questions: the common law before the Act, the mischief, Parliament’s remedy and the reason for it. In Smith v Hughes the mischief was soliciting people in the street, so prostitutes tapping on windows from balconies were guilty. Elliott v Grey and Royal College of Nursing v DHSS also applied the rule. Weaknesses: it suited short statutes, may need extrinsic aids and risks judicial law-making.',
    'Find the defect the Act was passed to cure, then read the words to suppress it.',
    '## The mischief rule');
}

// 06 Purposive approach and the Denning–Simonds debate
{
  let b = '';
  b += lcard(30, 110, 840, { kicker: 'THE PURPOSIVE APPROACH', title: 'Find the purpose of the whole Act and read the words to achieve it, even reading words in', body: 'Broader than mischief; now dominant, influenced by European law and s 3 Human Rights Act 1998.', fill: C.cream, edge: C.olive, kfill: C.olive }).s;
  const r = lrow(250, [
    { title: '*Jones v Tower Boot Co* [1997]', body: '"in the course of employment" read broadly: a narrow reading would defeat the purpose of the Race Relations Act 1976' },
    { title: '*R (Quintavalle)* [2003]', body: 'cloned embryos covered: the purpose was to regulate creating embryos outside the body' },
  ], { card: { size: 15, tsize: 17 } });
  b += r.s;
  let y = 250 + r.h + 24;
  b += T(450, y, '*MAGOR AND ST MELLONS RDC V NEWPORT CORPORATION*'.replace(/\*/g, ''), { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
  y += 16;
  const q1 = lcard(30, y, 400, { kicker: 'LORD DENNING, COURT OF APPEAL [1950]', title: 'Judges should "fill in the gaps"', fill: C.tealLight, edge: C.tealDark });
  const q2 = lcard(470, y, 400, { kicker: 'LORD SIMONDS, HOUSE OF LORDS [1952]', kfill: C.rust, title: '"A naked usurpation of the legislative function"', edge: C.rust });
  b += q1.s + q2.s + T(450, y + q1.h / 2 + 10, 'vs', { size: 20, weight: 700, anchor: 'middle', fill: C.muted });
  y += Math.max(q1.h, q2.h) + 18;
  const r2 = lrow(y, [
    { kicker: 'ADVANTAGES', body: ['sensible, just results', 'handles new technology', 'fits modern drafting and Convention rights'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'DISADVANTAGES', kfill: C.rust, body: ['judges may substitute their own view', 'less predictable', 'finding the purpose may need costly research (*Hansard*)'], bullets: true, edge: C.rust },
  ], { card: { size: 15 } });
  b += r2.s;
  add('06-purposive-approach',
    svg(900, y + r2.h + 30, 'The purposive approach', b),
    'The purposive approach reads the words to achieve the purpose of the whole Act. In Jones v Tower Boot "in the course of employment" was read broadly, and in R (Quintavalle) cloned embryos were covered. In Magor and St Mellons Lord Denning said judges should "fill in the gaps"; Lord Simonds called this "a naked usurpation of the legislative function". It gives just results but is less predictable.',
    'Purpose over wording: just results, at the cost of predictability and judicial restraint.',
    '## The purposive approach');
}

// 07 Worked example grid
{
  let b = '';
  b += lbox(30, 110, 840, 70, { fill: C.ink, edge: C.ink, rx: 14 });
  b += T(450, 142, '"No vehicle shall be taken into a public park."', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' });
  b += T(450, 166, 'a fictional Act', { size: 15, anchor: 'middle', fill: C.teal });
  const x0 = 30, c0 = 200, cw0 = 320, y0 = 200;
  b += lbox(x0 + c0, y0, cw0 - 8, 50, { fill: C.tealLight, edge: C.tealDark }) + T(x0 + c0 + (cw0 - 8) / 2, y0 + 32, 'Ruth’s bicycle', { size: 18, weight: 700, anchor: 'middle' });
  b += lbox(x0 + c0 + cw0, y0, cw0, 50, { fill: C.cream, edge: C.olive }) + T(x0 + c0 + cw0 + cw0 / 2, y0 + 32, 'An ambulance for an injured child', { size: 17, weight: 700, anchor: 'middle' });
  const rows = [
    ['Literal', ['"vehicle" includes it: an offence', 'also an offence: absurd'], [1, 0]],
    ['Golden', ['', 'narrow approach: "vehicle" not read to cover emergency vehicles'], [2, 2]],
    ['Mischief', ['may be caught, if the mischief is danger and noise to park users', 'saving life is not the mischief'], [1, 2]],
    ['Purposive', ['probably caught: purpose is safe enjoyment of parks', 'advances the purpose of safety'], [1, 2]],
  ];
  let y = y0 + 62;
  rows.forEach(([r2, cells, kinds]) => {
    const h = Math.max(...cells.map((c) => (c ? lcard(0, 0, cw0 - 8, { body: c, size: 15 }).h : 60)), 64);
    b += lbox(x0, y, c0 - 12, h, { fill: C.ink, edge: C.ink }) + T(x0 + (c0 - 12) / 2, y + h / 2 + 7, r2, { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' });
    cells.forEach((c, j) => {
      const x = x0 + c0 + j * cw0, w = j === 0 ? cw0 - 8 : cw0;
      const k = kinds[j];
      const [f, e] = k === 1 ? ['#ffffff', C.rust] : k === 2 ? [C.tealLight, C.tealDark] : ['#ffffff', C.rust];
      if (!c) { b += lbox(x, y, w, h, { fill: '#f8faf9', edge: C.panelEdge }) + T(x + w / 2, y + h / 2 + 6, 'as literal', { size: 15, anchor: 'middle', fill: C.muted, }); return; }
      b += lcard(x, y, w, { body: c, size: 15, bfill: C.ink, fill: f, edge: e, minH: h, vcenter: true }).s;
    });
    y += h + 10;
  });
  b += note(y + 6, 'The rule chosen changes the outcome: the main criticism of having no single binding rule.', { size: 16 });
  add('07-vehicles-in-the-park',
    svg(900, y + 100, 'Worked example: all four rules', b),
    'Under a fictional Act banning vehicles from a public park, the literal rule makes both Ruth’s bicycle and an ambulance offences, which is absurd for the ambulance. The golden rule avoids that by not reading "vehicle" to cover emergency vehicles. The mischief rule may catch the bicycle if the mischief is danger and noise, but not a life-saving ambulance. The purposive approach probably catches Ruth while the ambulance advances the purpose of safety.',
    'Same words, different rules, different outcomes.',
    '## Worked example: applying all four rules');
}
