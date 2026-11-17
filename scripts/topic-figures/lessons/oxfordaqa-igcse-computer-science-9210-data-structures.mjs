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

export const slug = 'oxfordaqa-igcse-computer-science-9210-data-structures';

const cell = (x, y, w, h, v, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 6}" fill="${o.fill || '#ffffff'}" stroke="${o.edge || C.ink}" stroke-width="${o.sw || 2.5}"/>` +
  code(x + w / 2, y + h / 2 + (o.size || 22) * 0.36, v, { size: o.size || 22, weight: o.weight || 700, anchor: 'middle', fill: o.tf || C.ink });

// 01 Concept: 30 variables or one array
{
  let b = '';
  b += panel(30, 110, 411, 330) + T(235, 148, 'Without a data structure', { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
  const names = ['mark1', 'mark2', 'mark3', 'mark4', 'mark5', 'mark6', 'mark7', 'mark8', 'mark9'];
  names.forEach((n, i) => { const x = 54 + (i % 3) * 124, y = 170 + Math.floor(i / 3) * 62; b += cell(x, y, 112, 48, n, { size: 16, edge: C.panelEdge }); });
  b += T(235, 380, '… up to mark30', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  b += T(235, 412, '30 names, 30 separate additions', { size: 16, anchor: 'middle', fill: C.rust });
  b += panel(459, 110, 411, 330, C.tealLight, C.tealDark) + T(664, 148, 'With an array', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += code(483, 206, 'marks', { size: 22, weight: 700 });
  for (let i = 0; i < 6; i++) b += cell(483 + i * 58, 222, 52, 52, i < 5 ? '' : '…', { size: 18, fill: '#ffffff' });
  for (let i = 0; i < 5; i++) b += code(509 + i * 58, 296, String(i), { size: 15, anchor: 'middle', fill: C.muted });
  b += T(842, 296, 'index', { size: 15, anchor: 'end', fill: C.muted });
  b += code(483, 346, 'FOR each index', { size: 17, weight: 700, fill: C.tealDark });
  b += code(483, 372, '  add marks[i]', { size: 17, weight: 700, fill: C.tealDark });
  b += T(664, 412, 'one name, one loop for any number', { size: 16, anchor: 'middle', fill: C.tealDark });
  add('01-why-data-structures',
    svg(900, 470, 'One name for many related items', b),
    'Left: storing 30 marks without a data structure needs variables mark1 to mark30 and 30 separate additions. Right: an array called marks holds them all under one name with numbered indexes, and a single loop can total them whatever the number of marks.',
    'A data structure stores related items under one name so one loop can process them all.',
    '## The concept of a data structure');
}

// 02 One-dimensional array
{
  let b = '';
  const x0 = 170, cw0 = 118, y = 160;
  const vals = ['14', '17', '21', '19', '16'];
  b += code(56, y + 50, 'temps', { size: 26, weight: 700 });
  vals.forEach((v, i) => {
    b += cell(x0 + i * cw0, y, cw0 - 8, 76, v, { size: 28, fill: i === 1 ? C.cream : '#ffffff', edge: i === 1 ? C.olive : C.ink });
    b += code(x0 + i * cw0 + (cw0 - 8) / 2, y + 108, String(i), { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  });
  b += T(x0 - 18, y + 108, 'index', { size: 16, anchor: 'end', fill: C.tealDark, weight: 700 });
  // ghost temps[5]
  const gx = x0 + 5 * cw0;
  b += `<rect x="${gx}" y="${y}" width="${cw0 - 8}" height="76" rx="6" fill="none" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="8 6"/>`;
  b += code(gx + 55, y + 108, '5', { size: 20, weight: 700, anchor: 'middle', fill: C.rust });
  b += T(gx + 55, y + 46, 'none', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  b += T(x0 + 1 * cw0 + 55, y - 16, 'temps[1] ← 18 replaces 17', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  const ys = y + 150;
  const r = row(ys, [
    { kicker: 'READ', title: 'temps[0] is 14', body: 'temps[3] is 19' },
    { kicker: 'LENGTH', title: 'LEN(temps) is 5', body: 'indexes 0 to 4: last index = length − 1' },
    { kicker: 'ERROR', kfill: C.rust, title: 'temps[5]', body: 'no such element exists', edge: C.rust },
  ], { card: { size: 16, tsize: 20 } });
  b += r.s;
  const yb = ys + r.h + 18;
  b += `<rect x="30" y="${yb}" width="840" height="60" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(450, yb + 38, 'Every element has the same data type; each is reached by its index, starting at 0.', { size: 17, weight: 600, anchor: 'middle' });
  add('02-one-dimensional-array',
    svg(900, yb + 90, 'A one-dimensional array', b),
    'The array temps holds 14, 17, 21, 19 and 16 at indexes 0 to 4. temps[0] is 14 and temps[3] is 19; temps[1] ← 18 replaces 17; LEN(temps) is 5, so the last index is 4 and temps[5] does not exist.',
    'Indexes start at 0, so the last index is always one less than the length.',
    '## One-dimensional arrays');
}

// 03 Finding the highest: trace
{
  let b = '';
  const cp = codePanel(30, 110, 420, ['highest ← temps[0]', 'FOR i ← 1 TO LEN(temps) - 1', '  IF temps[i] > highest THEN', '    highest ← temps[i]', '  ENDIF', 'ENDFOR', 'OUTPUT highest'], { size: 16, lh: 29 });
  b += cp.s;
  b += panel(470, 110, 400, cp.h);
  b += T(494, 146, 'temps after the change', { size: 17, weight: 700 });
  ['14', '18', '21', '19', '16'].forEach((v, i) => { b += cell(494 + i * 72, 164, 64, 56, v, { size: 22 }); b += code(526 + i * 72, 242, String(i), { size: 16, anchor: 'middle', fill: C.tealDark, weight: 700 }); });
  b += para(494, 278, 'highest starts at the first element, so the code still works if every value is negative; the loop starts at index 1.', 352, { size: 16, fill: C.muted }).s;
  const y = 110 + cp.h + 24;
  const tt = traceTable(30, y, [['i', ''], ['temps[i]', ''], ['highest', '']], [
    ['highest ← temps[0]', ['-', '-', '14'], 2, 'start at the first element'],
    ['pass i = 1', ['1', '18', '18'], 2, '18 > 14, so replace'],
    ['pass i = 2', ['2', '21', '21'], 2, '21 > 18, so replace'],
    ['pass i = 3', ['3', '19', '21'], -1, '19 > 21 is False'],
    ['pass i = 4', ['4', '16', '21'], -1, '16 > 21 is False'],
  ], { sw: 240, vw: 120 });
  b += tt.s;
  const yo = y + tt.h + 18;
  b += `<rect x="30" y="${yo}" width="840" height="58" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(54, yo + 37, 'Output:', { size: 19, weight: 700 }) + code(140, yo + 38, '21', { size: 24, weight: 700 });
  add('03-find-highest-trace',
    svg(900, yo + 88, 'Processing every element: the highest value', b),
    'Pseudocode that sets highest to temps[0] and loops from index 1 to LEN(temps) - 1. With temps holding 14, 18, 21, 19 and 16, highest starts at 14, becomes 18 at i = 1 and 21 at i = 2, and stays 21 for i = 3 and i = 4, so 21 is output.',
    'Start from the first element, then compare the rest one index at a time.',
    '## One-dimensional arrays');
}

// 04 Two-dimensional array: sales[row][column]
{
  let b = '';
  const data = [[5, 8, 2, 6], [7, 1, 4, 3], [9, 9, 0, 5]];
  const x0 = 250, y0 = 190, cw0 = 120, ch = 76;
  b += T(x0 + 2 * cw0, 130, 'second index: column (day)', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  b += arrow(x0 + 20, 142, x0 + 4 * cw0 - 20, 142, { color: C.olive, marker: 'ahO', w: 3 });
  for (let c = 0; c < 4; c++) b += T(x0 + c * cw0 + cw0 / 2, y0 - 14, `Day ${c}`, { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  b += `<g transform="translate(66 ${y0 + 1.5 * ch}) rotate(-90)">${T(0, 0, 'first index: row (shop)', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark })}</g>`;
  b += arrow(84, y0 + 10, 84, y0 + 3 * ch - 10, { color: C.tealDark, marker: 'ahT', w: 3 });
  data.forEach((r, ri) => {
    b += T(x0 - 22, y0 + ri * ch + ch / 2 + 6, `Shop ${ri}`, { size: 17, weight: 700, anchor: 'end', fill: C.tealDark });
    r.forEach((v, ci) => {
      const hi = (ri === 1 && ci === 2) || (ri === 2 && ci === 0);
      b += cell(x0 + ci * cw0, y0 + ri * ch, cw0, ch, String(v), { rx: 0, size: 26, fill: hi ? (ri === 1 ? C.mustard : C.cream) : '#ffffff', edge: C.ink, sw: 2 });
    });
  });
  const yb = y0 + 3 * ch + 30;
  const r = row(yb, [
    { title: 'sales[1][2]  =  4', body: 'shop 1, day 2', fill: C.cream, edge: C.olive },
    { title: 'sales[2][0]  =  9', body: 'shop 2, day 0', fill: C.cream, edge: C.olive },
  ], { card: { size: 17, tsize: 22, align: 'middle' } });
  b += r.s;
  const yn = yb + r.h + 18;
  b += T(450, yn + 10, 'array[row][column] is a common convention; a question may define its own, so check.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('04-two-dimensional-array',
    svg(900, yn + 36, 'A two-dimensional array', b),
    'The sales array as a grid of 3 shops (rows 0 to 2) by 4 days (columns 0 to 3). The first index selects the row and the second the column, so sales[1][2] is 4 (shop 1, day 2) and sales[2][0] is 9 (shop 2, day 0).',
    'Two indexes: the first picks the row, the second picks the column.',
    '## Two-dimensional arrays');
}

// 05 Row totals and column totals
{
  let b = '';
  const data = [[5, 8, 2, 6], [7, 1, 4, 3], [9, 9, 0, 5]];
  const x0 = 170, y0 = 150, cw0 = 104, ch = 66;
  for (let c = 0; c < 4; c++) b += T(x0 + c * cw0 + cw0 / 2, y0 - 14, `Day ${c}`, { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  b += T(x0 + 4 * cw0 + 30 + 60, y0 - 14, 'shopTotal', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  const rt = [21, 15, 23], ct = [21, 18, 6, 14];
  data.forEach((r, ri) => {
    b += T(x0 - 18, y0 + ri * ch + ch / 2 + 6, `Shop ${ri}`, { size: 17, weight: 700, anchor: 'end' });
    r.forEach((v, ci) => { b += cell(x0 + ci * cw0, y0 + ri * ch, cw0, ch, String(v), { rx: 0, size: 24, sw: 2 }); });
    b += arrow(x0 + 4 * cw0 + 6, y0 + ri * ch + ch / 2, x0 + 4 * cw0 + 34, y0 + ri * ch + ch / 2, { color: C.tealDark, marker: 'ahT', w: 3 });
    b += cell(x0 + 4 * cw0 + 40, y0 + ri * ch + 6, 120, ch - 12, String(rt[ri]), { size: 24, fill: C.tealLight, edge: C.tealDark, tf: C.tealDark });
  });
  const yc = y0 + 3 * ch;
  ct.forEach((v, ci) => {
    b += arrow(x0 + ci * cw0 + cw0 / 2, yc + 6, x0 + ci * cw0 + cw0 / 2, yc + 30, { color: C.olive, marker: 'ahO', w: 3 });
    b += cell(x0 + ci * cw0 + 8, yc + 36, cw0 - 16, 54, String(v), { size: 24, fill: C.cream, edge: C.olive, tf: C.olive });
  });
  b += T(x0 - 18, yc + 70, 'dayTotal', { size: 17, weight: 700, anchor: 'end', fill: C.olive });
  b += `<circle cx="${x0 + 4 * cw0 + 100}" cy="${yc + 63}" r="40" fill="${C.ink}"/>` + code(x0 + 4 * cw0 + 100, yc + 72, '59', { size: 26, weight: 700, anchor: 'middle', fill: '#ffffff' });
  b += T(x0 + 4 * cw0 + 100, yc + 124, 'both ways', { size: 15, weight: 700, anchor: 'middle', fill: C.muted });
  const ycp = yc + 150;
  const cp1 = codePanel(30, ycp, 520, ['FOR shop ← 0 TO 2', '  shopTotal ← 0', '  FOR day ← 0 TO 3', '    shopTotal ← shopTotal + sales[shop][day]', '  ENDFOR', '  OUTPUT shopTotal', 'ENDFOR'], { size: 16, lh: 28, hl: [1] });
  b += cp1.s;
  b += panel(570, ycp, 300, cp1.h);
  b += para(592, ycp + 36, 'Outer loop selects a row; inner loop walks along it.', 256, { size: 17, weight: 600 }).s;
  b += para(592, ycp + 104, 'shopTotal ← 0 inside the outer loop: each shop starts from zero.', 256, { size: 16, fill: C.olive, weight: 600 }).s;
  b += para(592, ycp + 170, 'Swap the loops (day outer) for the column totals.', 256, { size: 16, fill: C.muted }).s;
  add('05-row-and-column-totals',
    svg(900, ycp + cp1.h + 30, 'Totals from a two-dimensional array', b),
    'The sales grid with row totals 21, 15 and 23 for shops 0 to 2 and column totals 21, 18, 6 and 14 for days 0 to 3; both add up to a grand total of 59. Below, nested FOR loops reset shopTotal to 0 inside the outer loop and add sales[shop][day] along each row.',
    'Outer loop picks the row, inner loop walks along it; both directions give the same grand total, 59.',
    '## Worked example: totals from a two-dimensional array');
}

// 06 Record
{
  let b = '';
  const fields = [['name', 'String', '"Farah"'], ['yearGroup', 'Integer', '10'], ['average', 'Real', '68.5'], ['hasLocker', 'Boolean', 'True']];
  b += `<rect x="30" y="110" width="520" height="${70 + fields.length * 70 + 40}" rx="14" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/>`;
  b += `<rect x="30" y="110" width="520" height="62" rx="14" fill="${C.ink}"/><rect x="30" y="150" width="520" height="22" fill="${C.ink}"/>`;
  b += T(54, 150, 'Record: Pupil', { size: 21, weight: 700, fill: '#ffffff' }) + code(526, 150, 'p', { size: 22, weight: 700, anchor: 'end', fill: C.mustard });
  b += T(54, 200, 'field', { size: 15, weight: 700, fill: C.muted }) + T(240, 200, 'data type', { size: 15, weight: 700, fill: C.muted }) + T(390, 200, 'value', { size: 15, weight: 700, fill: C.muted });
  fields.forEach(([f, ty, v], i) => {
    const y = 214 + i * 70;
    b += `<rect x="46" y="${y}" width="488" height="58" rx="10" fill="${i === 0 || i === 2 ? C.tealLight : '#f8faf9'}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    b += code(62, y + 36, f, { size: 19, weight: 700 }) + T(240, y + 36, ty, { size: 17, fill: C.muted }) + code(390, y + 36, v, { size: 19, weight: 700, fill: C.tealDark });
  });
  const ex = 580;
  b += panel(ex, 110, 290, 400);
  b += T(ex + 22, 148, 'Reach a field by name', { size: 18, weight: 700 });
  b += code(ex + 22, 196, 'p.name', { size: 20, weight: 700, fill: C.tealDark }) + T(ex + 22, 224, 'gives Farah', { size: 16, fill: C.muted });
  b += code(ex + 22, 270, 'p.average ← 70.0', { size: 18, weight: 700, fill: C.tealDark }) + T(ex + 22, 298, 'changes one field', { size: 16, fill: C.muted });
  b += path(`M${ex + 26},${330} l16,16 M${ex + 42},${330} l-16,16`, { stroke: C.rust, w: 3.5 }) + code(ex + 56, 346, 'p[1]', { size: 18, weight: 700, fill: C.rust });
  b += T(ex + 22, 376, 'not by index: use', { size: 16, fill: C.muted }) + code(ex + 22, 402, 'p.yearGroup', { size: 18, weight: 700 });
  b += T(ex + 22, 444, 'Fields can be of', { size: 16, weight: 700, fill: C.olive }) + T(ex + 22, 466, 'different data types', { size: 16, weight: 700, fill: C.olive });
  const y = 530;
  const r = row(y, [{ kicker: 'C#', title: 'struct' }, { kicker: 'VISUAL BASIC', title: 'structure' }, { kicker: 'PYTHON', title: 'class used without OOP', body: 'each field set as an attribute' }], { card: { size: 15, tsize: 19 } });
  b += r.s;
  add('06-record-fields',
    svg(900, y + r.h + 30, 'A record groups fields of different types', b),
    'A Pupil record p with four fields: name (String, "Farah"), yearGroup (Integer, 10), average (Real, 68.5) and hasLocker (Boolean, True). p.name gives Farah and p.average ← 70.0 changes one field; fields are reached by name, so p[1] is wrong. Equivalents: struct in C#, structure in Visual Basic, a class used without OOP in Python.',
    'A record’s fields can have different data types and are reached by name, not by index.',
    '## Records');
}

// 07 Array of records: reading form[i].hasLocker
{
  let b = '';
  const fx = 60, fy = 200;
  for (let i = 0; i < 4; i++) {
    const x = fx + i * 205, hi = i === 2;
    b += code(x + 92, fy - 18, `form[${i === 3 ? '…' : i}]`, { size: 18, weight: 700, anchor: 'middle', fill: hi ? C.olive : C.ink });
    b += `<rect x="${x}" y="${fy}" width="184" height="210" rx="12" fill="${hi ? C.cream : '#ffffff'}" stroke="${hi ? C.olive : C.ink}" stroke-width="${hi ? 3.5 : 2.5}"/>`;
    ['name', 'yearGroup', 'average', 'hasLocker'].forEach((f, j) => {
      const fhi = hi && j === 3;
      b += `<rect x="${x + 12}" y="${fy + 14 + j * 48}" width="160" height="38" rx="8" fill="${fhi ? C.mustard : C.tealLight}"/>`;
      b += code(x + 92, fy + 39 + j * 48, f, { size: 16, weight: fhi ? 700 : 400, anchor: 'middle' });
    });
  }
  b += T(450, 140, 'An array where each element is one Pupil record', { size: 18, weight: 700, anchor: 'middle', fill: C.muted });
  // expression breakdown
  const y = 450;
  const ex = 'form[i].hasLocker', sz = 34, ew = cw(ex, sz), sx = 450 - ew / 2;
  b += code(sx, y + 34, ex, { size: sz, weight: 700 });
  const w1 = cw('form[i]', sz), w2 = cw('.hasLocker', sz);
  b += `<line x1="${sx}" y1="${y + 50}" x2="${sx + w1}" y2="${y + 50}" stroke="${C.olive}" stroke-width="5"/>`;
  b += `<line x1="${sx + w1 + 6}" y1="${y + 50}" x2="${sx + w1 + w2}" y2="${y + 50}" stroke="${C.tealDark}" stroke-width="5"/>`;
  b += T(sx + w1 / 2, y + 82, '1  selects a record', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  b += T(sx + w1 + w2 / 2, y + 82, '2  selects a field in it', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  const cp = codePanel(30, y + 112, 840, ['FOR i ← 0 TO LEN(form) - 1', '  IF form[i].hasLocker = False THEN', '    OUTPUT form[i].name', '  ENDIF', 'ENDFOR'], { size: 18, lh: 30 });
  b += cp.s;
  add('07-array-of-records',
    svg(900, y + 112 + cp.h + 30, 'An array of records', b),
    'The array form shown as a row of Pupil records, form[0], form[1], form[2] and so on, each with the fields name, yearGroup, average and hasLocker. The expression form[i].hasLocker is read left to right: form[i] selects a record, then .hasLocker selects a field inside it. A loop outputs the name of each pupil without a locker.',
    'Read left to right: the index picks the record, the dot picks the field.',
    '## Arrays of records');
}

// 08 Choosing a structure: decision tree
{
  let b = '';
  const q = (cx, cy, w, s) => `<rect x="${cx - w / 2}" y="${cy - 30}" width="${w}" height="60" rx="30" fill="${C.ink}"/>` + T(cx, cy + 6, s, { size: 17, weight: 700, anchor: 'middle', fill: '#ffffff' });
  const res = (cx, y, title, ex, fill, edge) => { const w = 196; return `<rect x="${cx - w / 2}" y="${y}" width="${w}" height="122" rx="14" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` + T(cx, y + 34, title, { size: 19, weight: 700, anchor: 'middle' }) + para(cx - w / 2 + 14, y + 64, ex, w - 28, { size: 15, fill: C.muted }).s; };
  const lab = (x, y, s) => T(x, y, s, { size: 16, weight: 700, fill: C.tealDark, anchor: 'middle' });
  b += q(450, 140, 380, 'Data about one item, or many?');
  b += path('M330,170 L230,230', { extra: 'marker-end="url(#ah)"' }) + lab(250, 190, 'one item');
  b += path('M570,170 L670,230', { extra: 'marker-end="url(#ah)"' }) + lab(660, 190, 'many items');
  b += q(230, 262, 330, 'Several fields, mixed types?');
  b += q(670, 262, 330, 'Each item has mixed fields?');
  b += arrow(160, 292, 140, 360) + lab(118, 332, 'yes');
  b += arrow(760, 292, 762, 360) + lab(786, 332, 'yes');
  b += arrow(610, 292, 560, 360) + lab(560, 332, 'no');
  b += res(140, 368, 'Record', 'One customer’s name, phone, balance and VIP status', C.tealLight, C.tealDark);
  b += q(450, 392, 300, 'A list, or a grid?');
  b += res(762, 368, 'Array of records', 'Every customer of a shop', C.cream, C.olive);
  b += arrow(380, 422, 345, 486) + lab(340, 456, 'list');
  b += arrow(520, 422, 555, 486) + lab(564, 456, 'grid');
  b += res(345, 492, '1D array', '12 monthly rainfall totals (reals)', '#ffffff', C.ink);
  b += res(555, 492, '2D array', 'Chessboard 8 × 8; marks for 25 pupils in 6 tests', '#ffffff', C.ink);
  add('08-choosing-a-structure',
    svg(900, 644, 'Choosing a data structure', b),
    'A decision tree. One item with several fields of mixed types: a record, such as one customer’s details. Many items each with mixed fields: an array of records, such as every customer. Many items of one type: a 1D array for a list, such as 12 monthly rainfall totals, or a 2D array for a grid, such as a chessboard or marks for 25 pupils in 6 tests.',
    'Same type in a list or grid: an array. Mixed types: a record. Many mixed items: an array of records.',
    '## Choosing a structure');
}
