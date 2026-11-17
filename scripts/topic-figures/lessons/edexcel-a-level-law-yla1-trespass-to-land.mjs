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

export const slug = 'edexcel-a-level-law-yla1-trespass-to-land';

// 01 Forms of entry: cross-section
{
  let b = '';
  const gy = 400;
  b += `<rect x="30" y="110" width="840" height="${gy - 110}" rx="14" fill="${C.tealLight}"/>`;
  b += `<rect x="30" y="${gy}" width="840" height="150" fill="#d8e3c6"/>`;
  b += `<line x1="30" y1="${gy}" x2="870" y2="${gy}" stroke="${C.ink}" stroke-width="3"/>`;
  const bx = 360;
  b += `<line x1="${bx}" y1="140" x2="${bx}" y2="550" stroke="${C.ink}" stroke-width="3" stroke-dasharray="10 7"/>`;
  b += T(bx - 12, 140, 'neighbour', { size: 16, weight: 700, anchor: 'end', fill: C.muted }) + T(bx + 12, 140, 'claimant in possession', { size: 16, weight: 700, fill: C.tealDark });
  // 1 crane
  b += `<rect x="120" y="200" width="16" height="${gy - 200}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
  b += `<rect x="70" y="192" width="440" height="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
  b += badge(530, 199, 15, '1', C.cream);
  // 2 sign
  b += `<rect x="230" y="270" width="100" height="${gy - 270}" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += `<line x1="330" y1="290" x2="400" y2="290" stroke="${C.ink}" stroke-width="3"/><rect x="380" y="292" width="44" height="26" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
  b += badge(446, 305, 15, '2', C.cream);
  // 3 ladder against claimant wall
  b += `<rect x="620" y="250" width="180" height="${gy - 250}" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += path(`M560,${gy} L618,280 M576,${gy} L630,284`, { w: 3 }) + path(`M572,372 l14,4 M584,346 l14,4 M596,320 l14,4`, { w: 2 });
  b += badge(604, 258, 15, '3', C.cream);
  // 4 drilling
  b += path(`M100,${gy} L100,${gy + 30} L760,${gy + 120}`, { stroke: C.rust, w: 5 });
  b += badge(790, gy + 122, 15, '4', C.cream);
  // 5 aircraft
  b += `<path d="M700,140 l80,0 l14,-14 l8,0 l-6,14 l20,0 l0,8 l-116,0 z" fill="${C.blue}"/>`;
  b += badge(680, 144, 15, '5', '#ffffff');
  const items = [
    ['1', 'Crane jibs swinging over: *Anchor Brewhouse* [1987]', true],
    ['2', 'Sign or extractor fan overhanging: *Kelsen* [1957]; *Laiqat v Majid* [2005]', true],
    ['3', 'Ladder or object placed against the wall: *Westripp v Baldock* [1939]', true],
    ['4', 'Oil wells drilled diagonally far below: *Bocardo v Star Energy* [2010]', true],
    ['5', 'Aircraft at a reasonable height: no trespass, *Bernstein v Skyviews* [1978]', false],
  ];
  let y = 576;
  items.forEach(([n, s2, tr]) => {
    b += badge(50, y, 14, n, tr ? C.cream : '#ffffff') + rich(76, y + 6, s2, { size: 16, weight: 600, fill: tr ? C.ink : C.rust });
    y += 32;
  });
  b += note(y + 4, 'Land: the surface, buildings, the ground beneath and the airspace needed for ordinary use.', { size: 16 });
  add('01-forms-of-entry',
    svg(900, y + 98, 'Ways to enter land', b),
    'A cross-section of land at a boundary. Trespass by entry includes crane jibs swinging over (Anchor Brewhouse), signs or fans overhanging (Kelsen; Laiqat v Majid), a ladder or object placed against a wall (Westripp v Baldock) and oil wells drilled far below (Bocardo v Star Energy). An aircraft at a reasonable height is not a trespass (Bernstein v Skyviews).',
    'Entry covers the surface, the airspace needed for ordinary use and the ground beneath.',
    '## Unlawful entry');
}

// 02 Visitor to trespasser
{
  let b = '';
  const r = lrow(110, [
    { kicker: 'EXCEEDING PERMISSION', title: '*The Calgarth* [1927]', body: '"When you invite a person into your house to use the staircase, you do not invite him to slide down the banisters."', fill: C.cream, edge: C.olive, kfill: C.olive },
    { kicker: 'REMAINING AFTER PERMISSION ENDS', title: '*Robson v Hallett* [1967]', body: 'once told to leave, a reasonable time to go; staying longer is trespass', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { card: { size: 15, tsize: 18 } });
  b += r.s;
  // time bar for Robson
  let y = 110 + r.h + 24;
  b += panel(30, y, 840, 120);
  const X0 = 80, X1 = 820;
  b += `<rect x="${X0}" y="${y + 46}" width="${(X1 - X0) * 0.4}" height="28" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>`;
  b += `<rect x="${X0 + (X1 - X0) * 0.4}" y="${y + 46}" width="${(X1 - X0) * 0.25}" height="28" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>`;
  b += `<rect x="${X0 + (X1 - X0) * 0.65}" y="${y + 46}" width="${(X1 - X0) * 0.35}" height="28" fill="#ffffff" stroke="${C.rust}" stroke-width="2"/>`;
  b += T(X0 + (X1 - X0) * 0.2, y + 36, 'licence: lawful visitor', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += T(X0 + (X1 - X0) * 0.525, y + 36, 'reasonable time to leave', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
  b += T(X0 + (X1 - X0) * 0.825, y + 36, 'trespasser', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
  b += path(`M${X0 + (X1 - X0) * 0.4},${y + 80} l0,14`, { w: 2.5 }) + T(X0 + (X1 - X0) * 0.4, y + 110, 'told to leave', { size: 15, anchor: 'middle', fill: C.muted });
  y += 140;
  b += T(450, y, 'THE HIGHWAY: PASS, REPASS AND OTHER REASONABLE PURPOSES', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
  const r2 = lrow(y + 14, [
    { kicker: 'TRESPASS', kfill: C.rust, title: '*Harrison v Duke of Rutland* [1893]', body: 'disrupting grouse shooting', edge: C.rust },
    { kicker: 'TRESPASS', kfill: C.rust, title: '*Hickman v Maisey* [1900]', body: 'watching racehorse trials from the road', edge: C.rust },
    { kicker: 'REASONABLE USE', title: '*DPP v Jones* [1999]', body: 'peaceful, non-obstructive assembly', fill: C.tealLight, edge: C.tealDark },
  ], { card: { size: 15, tsize: 16 } });
  b += r2.s;
  add('02-visitor-to-trespasser',
    svg(900, y + 14 + r2.h + 30, 'When a visitor becomes a trespasser', b),
    'A visitor who exceeds permission becomes a trespasser (The Calgarth: invited to use the staircase, not to slide down the banisters). Once told to leave, a visitor has a reasonable time to go, after which staying is trespass (Robson v Hallett). On a highway, uses beyond passing and other reasonable purposes can be trespass (Harrison v Duke of Rutland; Hickman v Maisey), but peaceful assembly can be reasonable (DPP v Jones).',
    'Permission has limits: exceed it, outstay it or misuse the highway, and the visitor is a trespasser.',
    '## Unlawful entry');
}

// 03 Intentional and direct: decision path
{
  let b = '';
  const q = (cx, cy, w, s) => lbox(cx - w / 2, cy - 28, w, 56, { fill: C.ink, edge: C.ink, rx: 28 }) + rich(cx, cy + 6, s, { size: 16, weight: 700, anchor: 'middle', fill: '#ffffff' });
  const lab = (x, y, s, f, a = 'middle') => T(x, y, s, { size: 15, weight: 700, fill: f, anchor: a });
  b += q(300, 140, 420, 'Did D intend to enter the land?');
  b += arrow(510, 140, 600, 140, { color: C.rust, marker: 'ahR' }) + lab(555, 128, 'no', C.rust);
  b += lcard(606, 112, 264, { title: 'Involuntary entry: not trespass', body: '*Smith v Stone* (1647): carried on by others; they were liable', tsize: 16, size: 15, edge: C.rust }).s;
  b += arrow(300, 170, 300, 236, { color: C.tealDark, marker: 'ahT' }) + lab(320, 208, 'yes', C.tealDark, 'start');
  const ic = lcard(30, 240, 540, { title: 'Intention to enter is enough: a mistake is no defence', body: '*Basely v Clarkson* (1681): mowed grass beyond his boundary, believing it his own. Also animals under control: *League Against Cruel Sports v Scott* [1986].', tsize: 16, size: 15, fill: C.cream, edge: C.olive });
  b += ic.s;
  b += arrow(300, 240 + ic.h + 4, 300, 396);
  b += q(300, 426, 420, 'Was the interference direct?');
  b += arrow(300, 456, 300, 512, { color: C.tealDark, marker: 'ahT' }) + lab(320, 490, 'yes: a physical act', C.tealDark, 'start');
  b += lbox(120, 518, 360, 64, { fill: C.tealDark, edge: C.tealDark, rx: 14 }) + T(300, 548, 'Trespass', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' }) + T(300, 570, 'actionable per se: no damage needed', { size: 15, anchor: 'middle', fill: C.teal });
  b += arrow(510, 426, 600, 426, { color: C.olive, marker: 'ahO' }) + lab(555, 414, 'no', C.olive);
  b += lcard(606, 380, 264, { title: 'Nuisance, not trespass', body: 'tree roots, smells, noise, seeping water; nuisance requires proof of damage', tsize: 16, size: 15, fill: C.cream, edge: C.olive, minH: 110 }).s;
  add('03-intentional-and-direct',
    svg(900, 612, 'Intentional and direct interference', b),
    'Trespass needs an intentional entry: an involuntary entry is not trespass (Smith v Stone), but a mistake about the boundary is no defence (Basely v Clarkson), and a hunt master can be liable for hounds (League Against Cruel Sports v Scott). The interference must also be direct; indirect interference such as roots, smells, noise or seeping water is nuisance, which needs proof of damage.',
    'Intend the entry and act directly: trespass. Indirect interference: nuisance.',
    '## Intentional and direct interference');
}

// 04 Continuing trespass
{
  let b = '';
  const y = 180, X0 = 80, X1 = 820, days = 7;
  b += lcard(30, 110, 840, { title: 'A trespass that persists gives a fresh cause of action every day', body: '*Holmes v Wilson* (1839): buttresses supporting a road built on the claimant’s land; paying damages once did not stop a later action while they remained.', fill: C.cream, edge: C.olive, tsize: 18 }).s;
  const ly = y + 120;
  b += `<line x1="${X0}" y1="${ly}" x2="${X1}" y2="${ly}" stroke="${C.ink}" stroke-width="3"/>`;
  b += `<rect x="${X0}" y="${ly - 50}" width="${X1 - X0}" height="24" rx="6" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>`;
  b += T(X0, ly - 60, 'object or structure left on the land', { size: 15, weight: 700 });
  for (let d = 0; d < days; d++) {
    const x = X0 + 40 + d * ((X1 - X0 - 80) / (days - 1));
    b += `<line x1="${x}" y1="${ly - 8}" x2="${x}" y2="${ly + 8}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += badge(x, ly + 36, 14, '£', C.mustard);
    b += T(x, ly + 74, `day ${d + 1}`, { size: 15, anchor: 'middle', fill: C.muted });
  }
  b += T(450, ly + 102, 'a new claim each day', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  const r = lrow(ly + 124, [
    { kicker: 'TIME LIMITS', title: 'Each day starts a new claim' },
    { kicker: 'REMEDIES', title: 'An injunction to remove the object' },
  ], { card: { tsize: 18 } });
  b += r.s;
  add('04-continuing-trespass',
    svg(900, ly + 124 + r.h + 30, 'Continuing trespass', b),
    'An object or structure left on another’s land is a continuing trespass, giving a fresh cause of action every day it remains (Holmes v Wilson, where buttresses supporting a road stayed on the claimant’s land). This matters for time limits, since each day starts a new claim, and for remedies, such as an injunction to remove the object.',
    'While the object stays, the trespass renews every day.',
    '## Continuing trespass');
}

// 05 Defences
{
  let b = '';
  const defs = [
    ['Licence', 'permission to enter, express or implied, e.g. walking up a path to knock on a door', 'lost if exceeded (*The Calgarth*) or revoked (*Robson v Hallett*)'],
    ['Lawful authority', 'a legal power to enter, e.g. police powers under PACE 1984', 'without it even officials trespass: *Entick v Carrington* (1765)'],
    ['Statutory access', 'statutes giving rights to enter', 'Access to Neighbouring Land Act 1992, for necessary repairs'],
    ['Necessity', 'entry to prevent a serious, imminent danger', '*Rigby v Chief Constable of Northamptonshire* [1985]: canister fired to flush out a gunman; not trespass, but liable in negligence for the fire'],
  ];
  let hmax = 0;
  defs.forEach(([h, d, e]) => { hmax = Math.max(hmax, lcard(0, 0, 411, { title: h, body: [d, e], tsize: 19, size: 15 }).h); });
  defs.forEach(([h, d, e], i) => {
    const x = 30 + (i % 2) * 429, y = 110 + Math.floor(i / 2) * (hmax + 41);
    b += lcard(x, y, 411, { kicker: 'DEFENCE', title: h, body: [d, e], tsize: 19, size: 15, minH: hmax + 25, fill: i === 0 ? C.tealLight : '#ffffff', edge: i === 0 ? C.tealDark : C.panelEdge }).s;
  });
  const y = 110 + 2 * (hmax + 41) + 14;
  add('05-trespass-defences',
    svg(900, y, 'Defences to trespass to land', b),
    'Four defences: licence, express or implied, lost if exceeded or revoked; lawful authority such as police powers under PACE 1984 (without it, even officials trespass: Entick v Carrington); statutory access such as the Access to Neighbouring Land Act 1992; and necessity to prevent serious, imminent danger (Rigby v Chief Constable of Northamptonshire).',
    'Permission, legal authority, a statutory right or genuine necessity justifies entry.',
    '## Defences');
}

// 06 Remedies
{
  let b = '';
  const r = lrow(110, [
    { kicker: 'DAMAGES', title: 'Nominal or compensatory', body: ['nominal where there is no loss: actionable per se', 'otherwise harm to the land or the value of the use made of it', '*Bocardo*: a modest sum, no harm caused'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'INJUNCTION', kfill: C.olive, title: 'Prohibitory or mandatory', body: ['prohibitory: stops future trespass (*Anchor Brewhouse*)', 'mandatory: remove what was left (*Kelsen*: the sign came down)', 'damages in lieu if an injunction would be oppressive: *Jaggard v Sawyer* [1995]'], bullets: true, fill: C.cream, edge: C.olive },
  ], { card: { size: 15, tsize: 18 } });
  b += r.s;
  const y = 110 + r.h + 16;
  const r2 = lrow(y, [
    { kicker: 'SELF-HELP', title: 'Ask, then reasonable force', body: 'no more than necessary: *Collins v Renison* (1754), throwing a man off a ladder was excessive' },
    { kicker: 'RE-ENTRY', title: 'Peaceful re-entry or a possession order', body: 'for a person dispossessed' },
    { kicker: 'CRIMINAL LAW', kfill: C.rust, title: 'Some forms are crimes', body: 'aggravated trespass (CJPOA 1994); squatting in a residential building (LASPO 2012)', edge: C.rust },
  ], { card: { size: 15, tsize: 16 } });
  b += r2.s;
  add('06-trespass-remedies',
    svg(900, y + r2.h + 30, 'Remedies for trespass to land', b),
    'Damages are nominal where there is no loss, or compensate for harm or use (Bocardo recovered a modest sum). A prohibitory injunction stops future trespass (Anchor Brewhouse) and a mandatory one orders removal (Kelsen), with damages in lieu if an injunction would be oppressive (Jaggard v Sawyer). Occupiers may use reasonable force after asking (Collins v Renison), re-enter peacefully or seek possession; some trespasses are crimes.',
    'Damages even without loss, injunctions to stop or remove, and limited self-help.',
    '## Remedies');
}

// 07 Femi and Gita worked example
{
  let b = '';
  b += lcard(30, 110, 840, { body: 'Femi leaves scaffolding resting against his neighbour Gita’s wall; his crane swings over her garden each day. When she complains, his builder walks into her garden to inspect the wall and refuses to leave when told to.', size: 17, bfill: C.ink }).s;
  const rows = [
    ['Scaffolding', 'object placed against her wall: entry; left there: continuing trespass, a fresh claim daily', '*Westripp*; *Holmes v Wilson*', 'T'],
    ['Crane', 'airspace at a height needed for ordinary use', '*Anchor Brewhouse*', 'T'],
    ['Builder', 'any implied permission ended when told to leave; after a reasonable time to go, trespass', '*Robson v Hallett*', 'T'],
    ['Damage?', 'none needed: actionable per se', '', 'N'],
    ['Remedies', 'injunction to remove scaffolding and stop the crane; damages, at least nominal; reasonable force to remove the builder after a request', '', 'R'],
    ['Defence?', 'Femi could apply under the Access to Neighbouring Land Act 1992 if access is genuinely needed', '', 'D'],
  ];
  let y = 232;
  rows.forEach(([k, d, c, t2]) => {
    const cc = lcard(170, y, c ? 520 : 700, { body: d, size: 16, bfill: C.ink, vcenter: true, minH: 60 });
    const [f, e] = t2 === 'T' ? [C.tealLight, C.tealDark] : t2 === 'D' ? ['#ffffff', C.rust] : [C.cream, C.olive];
    b += lbox(30, y, 128, cc.h, { fill: f, edge: e }) + T(94, y + cc.h / 2 + 6, k, { size: 17, weight: 700, anchor: 'middle' }) + cc.s;
    if (c) b += lbox(702, y, 168, cc.h, { fill: '#ffffff', edge: C.panelEdge }) + rpara(786, y + cc.h / 2 + 6 - (rwrap(c, 150, 15).length - 1) * 10, c, 150, { size: 15, anchor: 'middle' }).s;
    y += cc.h + 10;
  });
  add('07-femi-and-gita',
    svg(900, y + 20, 'Worked example: Femi, Gita and the builder', b),
    'The scaffolding against Gita’s wall is an entry and a continuing trespass (Westripp; Holmes v Wilson); the crane over her garden trespasses in her airspace (Anchor Brewhouse); the builder becomes a trespasser after being told to leave and given a reasonable time (Robson v Hallett). No damage is needed. Gita can seek injunctions, damages and use reasonable force; Femi might apply under the Access to Neighbouring Land Act 1992.',
    'Possession, entry, intention and directness, continuing or not, defences, then remedies.',
    '## Worked example');
}
