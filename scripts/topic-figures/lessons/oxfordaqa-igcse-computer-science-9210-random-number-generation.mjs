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

export const slug = 'oxfordaqa-igcse-computer-science-9210-random-number-generation';

const box = (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 10}" fill="${o.fill || '#ffffff'}" stroke="${o.edge || C.ink}" stroke-width="${o.sw || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const num = (x, y, w, h, v, o = {}) => box(x, y, w, h, o) + code(x + w / 2, y + h / 2 + (o.size || 20) * 0.36, v, { size: o.size || 20, weight: 700, anchor: 'middle', fill: o.tf || C.ink });

// 01 Inclusive ranges
{
  let b = '';
  const lane = (y, callTxt, langNote, vals, inc, note) => {
    let s = panel(30, y, 840, 170);
    s += code(54, y + 42, callTxt, { size: 21, weight: 700 }) + T(846, y + 42, langNote, { size: 16, anchor: 'end', fill: C.muted });
    vals.forEach((v, i) => {
      const x = 54 + i * 86, ok = inc.includes(i);
      s += num(x, y + 66, 74, 58, v, ok ? { fill: C.tealLight, edge: C.tealDark } : { fill: '#ffffff', edge: C.rust, dash: '7 5', tf: C.rust });
    });
    s += T(54, y + 152, note, { size: 16, fill: C.muted });
    return s;
  };
  b += lane(110, 'RANDOM_INT(1, 6)', 'pseudocode', ['1', '2', '3', '4', '5', '6'], [0, 1, 2, 3, 4, 5], 'Both ends included; every value equally likely.');
  b += lane(296, 'random.randint(1, 6)', 'Python, needs import random', ['1', '2', '3', '4', '5', '6'], [0, 1, 2, 3, 4, 5], 'Both ends included.');
  b += lane(482, 'rnd.Next(1, 7)', 'C#', ['1', '2', '3', '4', '5', '6', '7'], [0, 1, 2, 3, 4, 5], 'Upper value excluded, so 7 gives a maximum of 6.');
  b += T(54 + 6 * 86 + 37, 482 + 150, 'excluded', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
  const y = 672;
  b += box(30, y, 840, 60, { fill: C.cream, edge: C.olive, rx: 14 });
  b += T(450, y + 38, 'Each call gives a new, independent value. Check each language’s range rule.', { size: 17, weight: 600, anchor: 'middle' });
  add('01-inclusive-ranges',
    svg(900, y + 90, 'A random integer from 1 to 6', b),
    'RANDOM_INT(1, 6) in pseudocode and random.randint(1, 6) in Python can each return 1, 2, 3, 4, 5 or 6, with both ends included. In C#, rnd.Next(1, 7) excludes the upper value 7, so its maximum is 6.',
    'Pseudocode and Python include both ends; C# excludes the upper value.',
    '## Generating a random integer');
}

// 02 Random index: off by one
{
  let b = '';
  const idx = ['0', '1', '2', '…', 'LEN − 1'];
  const arr = (y) => {
    let s = code(54, y + 38, 'items', { size: 20, weight: 700 });
    idx.forEach((v, i) => { s += box(140 + i * 112, y, 104, 58, { fill: '#ffffff' }); s += code(192 + i * 112, y + 84, v, { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }); });
    s += box(140 + 5 * 112, y, 104, 58, { fill: 'none', edge: C.rust, dash: '7 5' }) + code(192 + 5 * 112, y + 84, 'LEN', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
    s += T(192 + 5 * 112, y + 36, 'none', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
    return s;
  };
  const span = (y, i0, i1, col, lbl) => `<rect x="${140 + i0 * 112 - 4}" y="${y - 6}" width="${(i1 - i0 + 1) * 112 - 0}" height="70" rx="12" fill="none" stroke="${col}" stroke-width="4"/>` + T(140 + i0 * 112, y - 14, lbl, { size: 16, weight: 700, fill: col });
  const rows = [
    ['RANDOM_INT(0, LEN(items) - 1)', 0, 4, C.tealDark, 'Correct: every index, nothing past the end'],
    ['RANDOM_INT(0, LEN(items))', 0, 5, C.rust, 'Can produce LEN: an index that does not exist'],
    ['RANDOM_INT(1, LEN(items))', 1, 5, C.rust, 'Misses index 0 and can go past the end'],
  ];
  rows.forEach(([c, i0, i1, col, lbl], k) => {
    const y = 110 + k * 200;
    b += panel(30, y, 840, 184, k === 0 ? C.tealLight : '#ffffff', k === 0 ? C.tealDark : C.panelEdge);
    b += code(54, y + 38, c, { size: 20, weight: 700, fill: col });
    b += arr(y + 76) + span(y + 76, i0, i1, col, '');
    b += T(846, y + 38, lbl, { size: 15, weight: 700, anchor: 'end', fill: col });
  });
  add('02-random-index-range',
    svg(900, 110 + 600 + 20, 'A random index: avoid off-by-one', b),
    'An array items has indexes 0 to LEN − 1. RANDOM_INT(0, LEN(items) - 1) covers exactly those indexes. RANDOM_INT(0, LEN(items)) can produce LEN, which does not exist, and RANDOM_INT(1, LEN(items)) misses index 0 and can also go past the end.',
    'For a random index, use RANDOM_INT(0, LEN(items) - 1).',
    '## Choosing the right range');
}

// 03 Chances: thresholds and one stored value
{
  let b = '';
  b += panel(30, 110, 840, 210);
  b += T(54, 148, '30% chance', { size: 20, weight: 700 }) + code(200, 148, 'IF RANDOM_INT(1, 10) ≤ 3 THEN', { size: 18, weight: 700, fill: C.tealDark });
  for (let i = 1; i <= 10; i++) b += num(54 + (i - 1) * 80, 174, 70, 64, String(i), i <= 3 ? { fill: C.mustard, edge: C.olive } : {});
  b += T(54 + 115, 270, '3 of 10 equally likely values', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  b += T(54, 300, 'make the condition True: "A storm hits your ship"', { size: 16, fill: C.muted });
  b += panel(30, 340, 840, 320);
  b += T(54, 378, 'Several outcomes from one stored value', { size: 20, weight: 700 });
  b += codePanel(54, 396, 400, ['r ← RANDOM_INT(1, 4)', 'IF r = 1 THEN', '  weather ← "Sun"', 'ELSE IF r = 2 THEN', '  weather ← "Rain"', 'ELSE', '  weather ← "Cloud"', 'ENDIF'], { size: 15, lh: 26 }).s;
  const out = [['1', 'Sun', C.cream, C.olive], ['2', 'Rain', '#dfe7f3', C.blue], ['3', 'Cloud', C.tealLight, C.tealDark], ['4', 'Cloud', C.tealLight, C.tealDark]];
  out.forEach(([v, w2, f, e], i) => {
    const y = 404 + i * 52;
    b += num(480, y, 56, 44, v, { size: 18 }) + arrow(540, y + 22, 580, y + 22, { w: 3 }) + box(586, y, 130, 44, { fill: f, edge: e }) + T(651, y + 28, w2, { size: 17, weight: 700, anchor: 'middle', fill: e });
  });
  b += T(730, 432, '1 in 4', { size: 16, weight: 700 }) + T(730, 484, '1 in 4', { size: 16, weight: 700 }) + T(730, 560, '2 in 4', { size: 16, weight: 700, fill: C.tealDark });
  b += para(480, 622, 'Calling RANDOM_INT again in each test would change the chances.', 380, { size: 15, weight: 600, fill: C.rust }).s;
  add('03-random-chances',
    svg(900, 690, 'Turning a random number into a choice', b),
    'RANDOM_INT(1, 10) ≤ 3 is True for 3 of the 10 equally likely values, a 30% chance. For several outcomes, r ← RANDOM_INT(1, 4) is stored once and tested: 1 gives Sun, 2 gives Rain, and 3 or 4 give Cloud, so Cloud has a 2 in 4 chance and the others 1 in 4.',
    'Compare with a threshold for one chance; store one value and test it for several outcomes.',
    '## Using a random number for a choice');
}

// 04 Guessing game trace
{
  let b = '';
  const cp = codePanel(30, 110, 560, ['target ← RANDOM_INT(1, 50)', 'guesses ← 0', 'REPEAT', '  OUTPUT "Guess a number from 1 to 50"', '  guess ← STRING_TO_INT(USERINPUT)', '  guesses ← guesses + 1', '  IF guess > target THEN', '    OUTPUT "Too high"', '  ELSE IF guess < target THEN', '    OUTPUT "Too low"', '  ENDIF', 'UNTIL guess = target', 'OUTPUT "Correct in " + INT_TO_STRING(guesses) + " guesses"'], { size: 15, lh: 26, hl: [0] });
  b += cp.s;
  b += panel(606, 110, 264, cp.h);
  b += T(626, 146, 'Generated once,', { size: 17, weight: 700, fill: C.olive }) + T(626, 168, 'before the loop', { size: 17, weight: 700, fill: C.olive });
  b += para(626, 196, 'Inside the loop the target would change after every guess and the hints would be meaningless.', 226, { size: 15, fill: C.muted }).s;
  b += T(626, 316, 'REPEAT … UNTIL', { size: 17, weight: 700, fill: C.tealDark });
  b += para(626, 342, 'The user must guess at least once, so the test goes at the end.', 226, { size: 15, fill: C.muted }).s;
  // number line
  const y = 110 + cp.h + 70, X = (v) => 70 + ((v - 1) * 760) / 49;
  b += `<line x1="${X(1)}" y1="${y}" x2="${X(50)}" y2="${y}" stroke="${C.ink}" stroke-width="3"/>`;
  [1, 50].forEach((v) => { b += `<line x1="${X(v)}" y1="${y - 10}" x2="${X(v)}" y2="${y + 10}" stroke="${C.ink}" stroke-width="3"/>` + T(X(v), y + 34, String(v), { size: 16, weight: 700, anchor: 'middle' }); });
  b += `<line x1="${X(29)}" y1="${y - 36}" x2="${X(29)}" y2="${y + 14}" stroke="${C.olive}" stroke-width="4"/>` + T(X(29), y - 44, 'target 29', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  const g = [[40, '1', 'Too high', C.rust], [20, '2', 'Too low', C.blue], [29, '3', 'Correct in 3 guesses', C.tealDark]];
  g.forEach(([v, n, o, col], i) => {
    const yy = y + 60 + i * 52;
    b += badge(X(v), y, 13, n, C.cream);
    b += badge(70, yy, 16, n, C.cream) + T(98, yy + 6, `guess ${v}`, { size: 17, weight: 700 }) + code(240, yy + 6, o, { size: 18, weight: 700, fill: col });
  });
  add('04-guessing-game-trace',
    svg(900, y + 60 + 3 * 52 + 10, 'Worked example: a guessing game', b),
    'The guessing game pseudocode generates target with RANDOM_INT(1, 50) once, before a REPEAT … UNTIL loop. On a number line from 1 to 50 with target 29, the guesses 40, 20 and 29 give the outputs Too high, Too low, then Correct in 3 guesses.',
    'Generate the target once, before the loop; a trace question tells you its value.',
    '## Worked example: a guessing game');
}

// 05 Dice simulation: counts[roll - 1]
{
  let b = '';
  const cp = codePanel(30, 110, 840, ['counts ← [0, 0, 0, 0, 0, 0]', 'FOR i ← 1 TO 600', '  roll ← RANDOM_INT(1, 6)', '  counts[roll - 1] ← counts[roll - 1] + 1', 'ENDFOR'], { size: 18, lh: 30, hl: [3] });
  b += cp.s;
  const y = 110 + cp.h + 40;
  b += T(54, y + 30, 'roll', { size: 17, weight: 700, fill: C.olive });
  b += T(54, y + 192, 'index', { size: 17, weight: 700, fill: C.tealDark });
  for (let f = 1; f <= 6; f++) {
    const x = 150 + (f - 1) * 120;
    // die face
    b += box(x, y, 64, 64, { fill: C.cream, edge: C.olive, rx: 12 });
    const pips = { 1: [[0, 0]], 2: [[-1, -1], [1, 1]], 3: [[-1, -1], [0, 0], [1, 1]], 4: [[-1, -1], [1, -1], [-1, 1], [1, 1]], 5: [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]], 6: [[-1, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [1, 1]] }[f];
    pips.forEach(([a, c]) => { b += `<circle cx="${x + 32 + a * 16}" cy="${y + 32 + c * 16}" r="5.5" fill="${C.ink}"/>`; });
    b += arrow(x + 32, y + 70, x + 32, y + 112, { w: 3 });
    b += T(x + 50, y + 98, '− 1', { size: 15, weight: 700, fill: C.muted });
    b += box(x - 8, y + 118, 80, 50, { fill: C.tealLight, edge: C.tealDark }) + code(x + 32, y + 150, 'counts', { size: 15, anchor: 'middle', fill: C.tealDark });
    b += code(x + 32, y + 192, String(f - 1), { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  }
  const yb = y + 226;
  b += box(30, yb, 840, 92, { fill: C.cream, edge: C.olive, rx: 14 });
  b += T(54, yb + 36, 'Each face should appear roughly 100 times in 600 rolls,', { size: 17, weight: 700 });
  b += T(54, yb + 66, 'but the exact counts change every run: one fixed expected output cannot test it.', { size: 17 });
  add('05-dice-simulation-counts',
    svg(900, yb + 122, 'Simulating 600 dice rolls', b),
    'An array counts holds six counters at indexes 0 to 5. Each of 600 rolls from RANDOM_INT(1, 6) adds 1 to counts[roll - 1], so a roll of 1 is counted at index 0 and a roll of 6 at index 5. Each face should appear roughly 100 times, but the counts change every run.',
    'Faces 1 to 6 are counted at indexes 0 to 5, so use roll − 1 as the index.',
    '## Worked example: simulating dice rolls');
}

// 06 Two dice are not one bigger dice
{
  let b = '';
  // left: RANDOM_INT(2,12)
  b += panel(30, 110, 360, 480, '#ffffff', C.rust);
  b += code(54, 150, 'RANDOM_INT(2, 12)', { size: 19, weight: 700, fill: C.rust });
  b += T(54, 178, 'every total equally likely', { size: 16, fill: C.muted });
  for (let v = 2; v <= 12; v++) {
    const x = 54 + (v - 2) * 29;
    b += `<rect x="${x}" y="${250}" width="24" height="200" rx="3" fill="${C.cream}" stroke="${C.rust}" stroke-width="2"/>`;
    b += T(x + 12, 476, String(v), { size: 15, anchor: 'middle', fill: C.muted });
  }
  b += T(210, 524, 'Wrong: real dice do not', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  b += T(210, 548, 'behave like this', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  // right: 6x6 grid
  b += panel(410, 110, 460, 480, C.tealLight, C.tealDark);
  b += T(434, 150, 'Two real dice', { size: 19, weight: 700, fill: C.tealDark });
  const gx = 520, gy = 196, c = 50;
  for (let d = 1; d <= 6; d++) {
    b += T(gx + (d - 1) * c + c / 2, gy - 10, String(d), { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
    b += T(gx - 16, gy + (d - 1) * c + c / 2 + 6, String(d), { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  }
  b += T(gx + 3 * c, gy - 34, 'die 2', { size: 15, weight: 700, anchor: 'middle', fill: C.olive }) + `<g transform="translate(${gx - 44} ${gy + 3 * c}) rotate(-90)">${T(0, 0, 'die 1', { size: 15, weight: 700, anchor: 'middle', fill: C.olive })}</g>`;
  for (let r = 1; r <= 6; r++) for (let k = 1; k <= 6; k++) {
    const s = r + k, hi7 = s === 7, hi2 = s === 2;
    b += `<rect x="${gx + (k - 1) * c}" y="${gy + (r - 1) * c}" width="${c}" height="${c}" fill="${hi7 ? C.mustard : hi2 ? C.rust : '#ffffff'}" stroke="${C.tealDark}" stroke-width="1.5"/>`;
    if (hi7 || hi2) b += code(gx + (k - 1) * c + c / 2, gy + (r - 1) * c + c / 2 + 7, String(s), { size: 19, weight: 700, anchor: 'middle', fill: hi2 ? '#ffffff' : C.ink });
  }
  b += T(434, 536, 'Total 7: six ways', { size: 17, weight: 700, fill: C.olive }) + T(720, 536, 'Total 2: one way', { size: 17, weight: 700, fill: C.rust });
  b += T(434, 564, '1+6, 2+5, 3+4, 4+3, 5+2, 6+1', { size: 15, fill: C.muted }) + T(720, 564, '1+1', { size: 15, fill: C.muted });
  const cp = codePanel(30, 610, 840, ['total ← RANDOM_INT(1, 6) + RANDOM_INT(1, 6)'], { size: 20, lh: 30 });
  b += cp.s + T(850, 645, 'correct', { size: 16, weight: 700, anchor: 'end', fill: C.mustard });
  add('06-two-dice-not-one',
    svg(900, 610 + cp.h + 30, 'Two dice are not one bigger dice', b),
    'RANDOM_INT(2, 12) makes every total from 2 to 12 equally likely. A grid of the 36 pairs from two real dice shows that a total of 7 happens in six ways (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) but a total of 2 in only one way (1+1). The correct simulation adds two calls: RANDOM_INT(1, 6) + RANDOM_INT(1, 6).',
    'Simulate two dice with two calls added together, not one call from 2 to 12.',
    '## Two dice are not one bigger dice');
}
