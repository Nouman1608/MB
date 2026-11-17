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

export const slug = 'oxfordaqa-igcse-computer-science-9210-robust-and-secure-programming';

const box = (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 10}" fill="${o.fill || '#ffffff'}" stroke="${o.edge || C.ink}" stroke-width="${o.sw || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const step = (cx, cy, w, s, o = {}) => box(cx - w / 2, cy - (o.h || 46) / 2, w, o.h || 46, o) + (o.mono ? code(cx, cy + 6, s, { size: o.size || 16, weight: 700, anchor: 'middle', fill: o.tf || C.ink }) : T(cx, cy + 6, s, { size: o.size || 16, weight: 700, anchor: 'middle', fill: o.tf || C.ink }));
const dia = (cx, cy, w, h, lines, o = {}) => `<path d="M${cx},${cy - h / 2} L${cx + w / 2},${cy} L${cx},${cy + h / 2} L${cx - w / 2},${cy} Z" fill="${o.fill || C.cream}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>` +
  lines.map((l, i) => code(cx, cy + 6 + (i - (lines.length - 1) / 2) * 20, l, { size: o.size || 15, weight: 700, anchor: 'middle' })).join('');
const lab = (x, y, s, f = C.tealDark, anchor = 'middle') => T(x, y, s, { size: 15, weight: 700, fill: f, anchor });
const el = (pts, o = {}) => path('M' + pts.map((p) => p.join(',')).join(' L'), { stroke: o.color || C.ink, w: 3, extra: `marker-end="url(#${o.m || 'ah'})"` });

// 01 Robust and secure
{
  let b = '';
  const w = 411;
  b += panel(30, 110, w, 230, C.tealLight, C.tealDark);
  b += T(54, 150, 'Robust', { size: 24, weight: 700, fill: C.tealDark });
  b += para(54, 182, 'Keeps working sensibly with unexpected or invalid input, rather than crashing or producing nonsense.', w - 48, { size: 16 }).s;
  b += box(54, 268, w - 48, 50, { fill: '#ffffff', edge: C.tealDark }) + T(54 + (w - 48) / 2, 299, 'supported by validation', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += panel(459, 110, w, 230, C.cream, C.olive);
  b += T(483, 150, 'Secure', { size: 24, weight: 700, fill: C.olive });
  b += para(483, 182, 'Only lets authorised users in.', w - 48, { size: 16 }).s;
  b += box(483, 268, w - 48, 50, { fill: '#ffffff', edge: C.olive }) + T(483 + (w - 48) / 2, 299, 'supported by authentication', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  b += path('M235,340 L235,372 L664,372 L664,340', { w: 3 }) + arrow(450, 372, 450, 400);
  b += box(250, 404, 400, 56, { fill: C.ink, edge: C.ink, rx: 28 }) + T(450, 439, 'Testing checks both', { size: 19, weight: 700, anchor: 'middle', fill: '#ffffff' });
  const y = 486;
  b += panel(30, y, 840, 124);
  b += T(54, y + 38, 'Validation checks data is reasonable, not that it is true', { size: 18, weight: 700 });
  b += code(54, y + 84, 'age = 15', { size: 22, weight: 700 }) + T(190, y + 83, 'passes a range check of 11 to 18', { size: 17, fill: C.tealDark, weight: 600 });
  b += T(846, y + 83, 'even if the user is really 16', { size: 17, fill: C.rust, weight: 600, anchor: 'end' });
  add('01-robust-and-secure',
    svg(900, y + 154, 'Robust and secure programs', b),
    'A robust program keeps working sensibly with unexpected input and is supported by validation; a secure program only lets authorised users in and is supported by authentication; testing checks both. Validation only checks that data is reasonable: an age of 15 passes a range check of 11 to 18 even if the user is really 16.',
    'Validation makes a program robust, authentication makes it secure, and testing checks both.',
    '## Robust and secure: what the words mean');
}

// 02 Validation loop (WHILE with message)
{
  let b = '';
  const cp = codePanel(30, 110, 840, ['OUTPUT "Enter your age (11 to 18)"', 'age ← STRING_TO_INT(USERINPUT)', 'WHILE age < 11 OR age > 18', '  OUTPUT "Age must be from 11 to 18. Try again"', '  age ← STRING_TO_INT(USERINPUT)', 'ENDWHILE'], { size: 17, lh: 30, hl: [2] });
  b += cp.s;
  b += para(30, 380, 'Invalid condition uses OR: outside the range breaks one limit or the other.', 410, { size: 17, weight: 600, fill: C.olive }).s;
  b += para(30, 460, 'The REPEAT version tests the valid condition with AND:', 410, { size: 16, fill: C.muted }).s;
  b += code(30, 512, 'UNTIL age ≥ 11 AND age ≤ 18', { size: 17, weight: 700, fill: C.tealDark });
  b += '<g transform="translate(0 226)">';
  const cx = 660;
  b += panel(470, 110, 400, 540);
  b += step(cx, 150, 260, 'Prompt and input age', { fill: C.tealLight, edge: C.tealDark });
  b += arrow(cx, 173, cx, 210);
  b += dia(cx, 270, 300, 110, ['age < 11 OR', 'age > 18 ?']);
  b += arrow(cx, 325, cx, 372, { color: C.rust, marker: 'ahR' }) + lab(cx + 22, 356, 'True', C.rust, 'start');
  b += step(cx, 400, 300, 'Error message', { fill: '#ffffff', edge: C.rust, tf: C.rust });
  b += arrow(cx, 423, cx, 456, { color: C.rust, marker: 'ahR' });
  b += step(cx, 480, 300, 'Input age again', { edge: C.rust });
  b += el([[cx - 150, 480], [490, 480], [490, 194], [cx - 6, 194]], { color: C.rust, m: 'ahR' });
  b += el([[cx + 150, 270], [852, 270], [852, 590], [cx + 112, 590]], { color: C.tealDark, m: 'ahT' }) + lab(838, 258, 'False', C.tealDark);
  b += step(cx, 590, 220, 'Use the valid age', { fill: C.tealLight, edge: C.tealDark, tf: C.tealDark });
  b += '</g>';
  add('02-validation-loop',
    svg(900, 906, 'A validation loop', b),
    'Pseudocode and a flowchart for validating an age from 11 to 18. After the first input, while age < 11 OR age > 18 is True the program shows an error message and asks again; once it is False the valid age is used. The REPEAT version instead repeats until age ≥ 11 AND age ≤ 18.',
    'Keep asking until the input passes; the invalid test uses OR, the valid test uses AND.',
    '## Validation routines');
}

// 03 Three checks and their overlap
{
  let b = '';
  const w = 268, g = 18;
  const checks = [
    ['PRESENCE', 'Empty string', 'LEN(name) = 0', 'a required name field'],
    ['MINIMUM LENGTH', 'Too short', 'LEN(username) < 6', 'usernames of at least 6 characters'],
    ['RANGE', 'Outside the range', 'qty < 1 OR qty > 20', 'order quantity from 1 to 20'],
  ];
  b += T(450, 132, 'Each condition below means the input is INVALID', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  checks.forEach(([k, t2, c, u], i) => {
    const x = 30 + i * (w + g);
    b += panel(x, 150, w, 190);
    b += T(x + 20, 182, k, { size: 15, weight: 700, fill: C.tealDark }) + T(x + 20, 210, t2, { size: 19, weight: 700 });
    b += box(x + 16, 228, w - 32, 50, { fill: C.ink, edge: C.ink }) + code(x + w / 2, 259, c, { size: c.length > 17 ? 15 : 17, weight: 700, anchor: 'middle', fill: C.mustard });
    b += para(x + 20, 306, u, w - 40, { size: 15, fill: C.muted }).s;
  });
  // overlap: length line
  const y = 370;
  b += panel(30, y, 840, 230);
  b += T(54, y + 38, 'Overlap: a username must be present and at least 6 characters', { size: 18, weight: 700 });
  const X = (n) => 90 + n * 100;
  b += `<line x1="${X(0)}" y1="${y + 120}" x2="${X(7.4)}" y2="${y + 120}" stroke="${C.ink}" stroke-width="3"/>`;
  b += `<rect x="${X(0) - 12}" y="${y + 92}" width="${X(5) - X(0) + 24}" height="56" rx="14" fill="${C.cream}" stroke="${C.rust}" stroke-width="2.5" opacity="0.9"/>`;
  b += `<rect x="${X(0) - 34}" y="${y + 82}" width="68" height="76" rx="16" fill="none" stroke="${C.olive}" stroke-width="3" stroke-dasharray="7 5"/>`;
  for (let n = 0; n <= 7; n++) b += `<circle cx="${X(n)}" cy="${y + 120}" r="8" fill="${n >= 6 ? C.tealDark : C.rust}"/>` + T(X(n), y + 184, String(n), { size: 16, weight: 700, anchor: 'middle' });
  b += T(X(7.4) + 10, y + 126, 'length', { size: 15, fill: C.muted });
  b += T(X(0), y + 72, 'empty: 0', { size: 15, weight: 700, anchor: 'middle', fill: C.olive });
  b += T(X(2.5), y + 72, 'LEN(username) < 6: rejected', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
  b += T(X(6.5), y + 72, 'accepted', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += para(54, y + 214, 'An empty string has length 0, which is already less than 6, so the length check alone is enough.', 790, { size: 16, weight: 600 }).s;
  add('03-validation-checks',
    svg(900, y + 260, 'Three validation checks', b),
    'Three checks, each written as the condition that makes input invalid: presence, LEN(name) = 0; minimum length, LEN(username) < 6; range, qty < 1 OR qty > 20. On a length line from 0 to 7, lengths 0 to 5 fail the minimum-length check and 6 or more pass; the empty string, length 0, is already rejected, so a separate presence check is not needed.',
    'Checks can overlap: the minimum-length check already rejects an empty string.',
    '## Validation routines');
}

// 04 Authentication flowchart
{
  let b = '';
  const cx = 300;
  b += panel(30, 110, 840, 690);
  b += step(cx, 150, 300, 'attempts ← 0, success ← False', { mono: true, size: 15, fill: C.tealLight, edge: C.tealDark });
  b += arrow(cx, 173, cx, 206);
  b += step(cx, 232, 300, 'Input username and password');
  b += arrow(cx, 255, cx, 290);
  b += dia(cx, 350, 330, 120, ['user = "jkaur" AND', 'pass = "Orchid#7" ?']);
  b += el([[cx + 165, 350], [640, 350], [640, 396]], { color: C.tealDark, m: 'ahT' }) + lab(560, 338, 'True');
  b += step(640, 420, 230, 'success ← True', { mono: true, fill: C.tealLight, edge: C.tealDark });
  b += arrow(cx, 410, cx, 452, { color: C.rust, marker: 'ahR' }) + lab(cx + 22, 436, 'False', C.rust, 'start');
  b += step(cx, 478, 300, 'attempts ← attempts + 1', { mono: true, edge: C.rust });
  b += arrow(cx, 501, cx, 524, { color: C.rust, marker: 'ahR' });
  b += step(cx, 548, 340, '"Incorrect username or password"', { mono: true, size: 15, edge: C.rust });
  b += arrow(cx, 571, cx, 604);
  b += el([[640, 443], [640, 664], [cx + 172, 664]]);
  b += dia(cx, 664, 340, 110, ['success OR', 'attempts = MaxAttempts ?']);
  b += el([[cx - 170, 664], [62, 664], [62, 232], [cx - 156, 232]]) + lab(100, 652, 'False', C.ink);
  b += arrow(cx, 719, cx, 750) + lab(cx + 22, 742, 'True', C.ink, 'start');
  b += T(cx, 782, 'IF success: "Welcome", else "access denied"', { size: 16, weight: 700, anchor: 'middle' });
  // design notes
  const nx = 560;
  const notes = [['OR: stop on success or no attempts left', ''], ['Message never says which item was wrong', ''], ['MaxAttempts ← 3 is a named constant', ''], ['Case-sensitive: "orchid#7" is rejected', '']];
  b += box(476, 130, 380, 166, { fill: C.cream, edge: C.olive, rx: 12 });
  b += T(494, 160, 'Design points', { size: 17, weight: 700, fill: C.olive });
  notes.forEach(([h, d], i) => { b += T(494, 190 + i * 26, `• ${h}`, { size: 16, weight: 700 }); });
  add('04-authentication-routine',
    svg(900, 830, 'An authentication routine', b),
    'A flowchart of the login routine. The username and password are input and checked together with AND. If both match, success is set to True; otherwise attempts goes up by 1 and a message says "Incorrect username or password". The loop repeats until success OR attempts = MaxAttempts, then outputs Welcome or access denied.',
    'Check both items with AND; stop on success OR when the attempts run out.',
    '## Authentication routines');
}

// 05 Test data for a quantity from 1 to 20
{
  let b = '';
  const y = 250, X = (v) => 110 + ((v + 5) * 680) / 45;
  b += `<rect x="${X(1)}" y="${y - 22}" width="${X(20) - X(1)}" height="44" rx="8" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>`;
  b += T((X(1) + X(20)) / 2, y - 58, 'valid: 1 to 20', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += `<line x1="${X(-5)}" y1="${y}" x2="${X(40)}" y2="${y}" stroke="${C.ink}" stroke-width="3"/>`;
  const pts = [[-4, 'err'], [0, 'bout'], [1, 'bin'], [7, 'norm'], [20, 'bin'], [21, 'bout'], [35, 'err']];
  const col = { err: C.rust, bout: C.olive, bin: C.blue, norm: C.tealDark };
  pts.forEach(([v, k], i) => {
    const up = i % 2 === 0;
    b += `<circle cx="${X(v)}" cy="${y}" r="11" fill="${k === 'bout' || k === 'err' ? '#ffffff' : col[k]}" stroke="${col[k]}" stroke-width="4"/>`;
    b += code(X(v), (v === 0 || v === 21) ? y - 22 : y + 50, String(v).replace('-', '−'), { size: 20, weight: 700, anchor: 'middle', fill: col[k] });
  });
  b += box(760, y - 24, 96, 48, { fill: '#ffffff', edge: C.rust, dash: '6 5' }) + code(808, y + 7, '"ten"', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  b += T(808, y + 56, 'wrong type', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
  const rows = [
    ['Normal', '7', 'Accepted', 'accepts ordinary valid data', C.tealDark],
    ['Boundary', '1 and 20', 'Accepted', 'the right operator: if 20 is rejected, < 20 was used instead of ≤ 20', C.blue],
    ['Just outside', '0 and 21', 'Rejected', 'some books call these boundary, others erroneous: state the expected result', C.olive],
    ['Erroneous', '35, −4, "ten"', 'Rejected', 'invalid data is rejected and the program does not crash', C.rust],
  ];
  rows.forEach(([k, v, e, why, c], i) => {
    const yy = 340 + i * 92;
    b += box(30, yy, 840, 80, { fill: '#ffffff', edge: C.panelEdge, rx: 12 });
    b += `<rect x="30" y="${yy}" width="10" height="80" rx="5" fill="${c}"/>`;
    b += T(58, yy + 32, k, { size: 18, weight: 700, fill: c }) + code(58, yy + 62, v, { size: 17, weight: 700 });
    b += T(250, yy + 32, e, { size: 17, weight: 700, fill: e === 'Accepted' ? C.tealDark : C.rust });
    b += para(250, yy + 58, why, 600, { size: 15, fill: C.muted }).s;
  });
  add('05-test-data-quantity',
    svg(900, 340 + 4 * 92 + 20, 'Test data for a quantity from 1 to 20', b),
    'A number line with the valid range 1 to 20 shaded. Normal data 7 is accepted. Boundary values 1 and 20 are accepted, and 0 and 21 just outside are rejected. Erroneous data such as 35, −4 and the text "ten" is rejected. Each type is listed with what the test proves.',
    'Test inside, on and just beyond each limit, plus wrong data, and state the expected result for each.',
    '## Test data');
}

// 06 Password test plan
{
  let b = '';
  const tests = [
    ['1', 'Sunbird42x', 'Normal', 'Accepted', 'typical valid password'],
    ['2', 'Sunbird4', 'Boundary', 'Accepted', 'shortest valid length; checks ≥ not >'],
    ['3', 'Sunbird', 'Boundary', 'Rejected', 'longest invalid length'],
    ['4', '', 'Erroneous', 'Rejected', 'no password entered'],
  ];
  const cx0 = 200, cw0 = 36;
  b += T(cx0 + 8 * cw0 + 8, 136, 'minimum: 8 characters', { size: 16, weight: 700, fill: C.olive });
  tests.forEach(([n, pw, ty, ex, why], i) => {
    const y = 150 + i * 112, ok = ex === 'Accepted';
    b += box(30, y, 840, 96, { fill: '#ffffff', edge: C.panelEdge, rx: 12 });
    b += badge(62, y + 48, 18, n, C.cream);
    if (pw.length === 0) b += box(cx0, y + 14, cw0, 40, { fill: 'none', edge: C.rust, dash: '6 5', rx: 6 }) + code(cx0 + 50, y + 41, '""', { size: 18, weight: 700, fill: C.rust });
    [...pw].forEach((ch, k) => { b += box(cx0 + k * cw0, y + 14, cw0 - 4, 40, { fill: ok ? C.tealLight : C.cream, edge: ok ? C.tealDark : C.rust, rx: 6, sw: 2 }) + code(cx0 + k * cw0 + (cw0 - 4) / 2, y + 41, ch, { size: 18, weight: 700, anchor: 'middle' }); });
    b += T(cx0, y + 80, `${pw.length} characters`, { size: 15, fill: C.muted });
    b += T(585, y + 34, `${ty}: ${ex}`, { size: 17, weight: 700, fill: ok ? C.tealDark : C.rust });
    b += para(585, y + 60, why, 280, { size: 15, fill: C.muted }).s;
  });
  b += `<line x1="${cx0 + 8 * cw0 - 2}" y1="120" x2="${cx0 + 8 * cw0 - 2}" y2="${150 + 4 * 112 - 8}" stroke="${C.olive}" stroke-width="3" stroke-dasharray="8 6"/>`;
  add('06-password-test-plan',
    svg(900, 150 + 4 * 112 + 20, 'Worked example: testing a password rule', b),
    'Four tests for a rule that passwords must be at least 8 characters. Sunbird42x (10 characters) is normal and accepted; Sunbird4 (8) is boundary and accepted, checking ≥ not >; Sunbird (7) is boundary and rejected as the longest invalid length; the empty string is erroneous and rejected.',
    'Test just on and just below the minimum length, plus a typical and an empty value.',
    '## Worked example: a test plan for a password rule');
}
