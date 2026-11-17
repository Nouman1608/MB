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

export const slug = 'oxfordaqa-igcse-computer-science-9210-data-types';

const TY = {
  Integer: [C.tealLight, C.tealDark], Real: ['#dfe7f3', C.blue], Boolean: [C.cream, C.olive], Character: ['#f4e1d4', C.rust], String: ['#ffffff', C.ink],
};
const tyChip = (x, y, w, h, ty, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${TY[ty][0]}" stroke="${TY[ty][1]}" stroke-width="2.5"/>` + T(x + w / 2, y + h / 2 + 6, ty, { size: o.size || 17, weight: 700, anchor: 'middle', fill: TY[ty][1] });

// 01 What a data type controls
{
  let b = '';
  b += `<rect x="330" y="110" width="240" height="70" rx="35" fill="${C.ink}"/>` + T(450, 153, 'Data type', { size: 23, weight: 700, anchor: 'middle', fill: '#ffffff' });
  const w = 268, g = 18, y = 230;
  const cols = [
    ['1', 'Which values are allowed', 'An integer variable cannot hold 2.5 or "hello".'],
    ['2', 'Which operations make sense', 'Multiply two integers, join two strings; multiplying two names has no meaning.'],
    ['3', 'How the value is stored', 'Everything is binary; the type says how to read the pattern: a number or a character?'],
  ];
  cols.forEach(([n, h, d], i) => {
    const x = 30 + i * (w + g), cx = x + w / 2;
    b += path(`M450,180 C450,205 ${cx},200 ${cx},${y - 6}`, { extra: 'marker-end="url(#ah)"' });
    b += panel(x, y, w, 226);
    b += badge(x + 36, y + 40, 20, n, i === 0 ? C.mustard : C.cream);
    b += para(x + 68, y + 36, h, w - 84, { size: 18, weight: 700 }).s;
    b += para(x + 22, y + 108, d, w - 44, { size: 16, fill: C.muted }).s;
  });
  // bit-pattern mini graphic in card 3
  const bx = 30 + 2 * (w + g) + 22, by = y + 174;
  for (let k = 0; k < 8; k++) b += `<rect x="${bx + k * 28}" y="${by}" width="24" height="34" rx="4" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="1.5"/>` + code(bx + k * 28 + 12, by + 24, k % 3 ? '0' : '1', { size: 16, anchor: 'middle', fill: C.tealDark });
  const yb = y + 250;
  b += `<rect x="30" y="${yb}" width="840" height="64" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(450, yb + 40, '"Why do programs need data types?" Link the type to its operations and its storage.', { size: 17, weight: 600, anchor: 'middle' });
  add('01-what-a-data-type-controls',
    svg(900, yb + 94, 'What a data type decides', b),
    'A data type decides three things: which values are allowed (an integer cannot hold 2.5 or "hello"), which operations make sense (multiply integers, join strings), and how the binary pattern stored for the value is interpreted, for example as a number or a character.',
    'One choice of type fixes the allowed values, the valid operations and how the binary is read.',
    '## What a data type actually is');
}

// 02 The five types
{
  let b = '';
  const types = [
    ['Integer', '-12   0   365', 'Whole numbers: things you count', 'students, lives left, loop counter, array index'],
    ['Real', '3.75   -0.5   98.6', 'A fractional part: things you measure', 'price, height, temperature, average mark'],
    ['Boolean', 'True   False', 'Only two values', 'GameOver, IsMember, DoorLocked; Score > 50'],
    ['Character', "'A'   '7'   '?'", 'Exactly one symbol', "grade, menu option 'Q'; '7' is not the number 7"],
    ['String', '"Karachi"   ""', 'A sequence of characters, even empty', 'names, addresses, postcodes, passwords'],
  ];
  types.forEach(([ty, ex, h, use], i) => {
    const y = 110 + i * 106;
    b += `<rect x="30" y="${y}" width="840" height="94" rx="14" fill="#ffffff" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
    b += tyChip(50, y + 27, 150, 40, ty);
    b += code(226, y + 54, ex, { size: 20, weight: 700, fill: TY[ty][1] === C.ink ? C.ink : TY[ty][1] });
    b += T(470, y + 40, h, { size: 18, weight: 700 });
    b += T(470, y + 68, use, { size: 16, fill: C.muted });
  });
  const y = 110 + 5 * 106 + 6;
  b += T(450, y + 18, 'Python and C# say float or double; in the exam always write real.', { size: 17, weight: 700, anchor: 'middle', fill: C.blue });
  add('02-five-data-types',
    svg(900, y + 46, 'The five data types', b),
    'Integer holds whole numbers such as -12, 0 and 365 for things you count. Real holds numbers with a fractional part such as 3.75 for things you measure. Boolean holds only True or False. Character holds exactly one symbol such as A, 7 or ?. String holds a sequence of characters, such as "Karachi" or the empty string.',
    'Count with integer, measure with real, yes/no with Boolean, one symbol is a character, text is a string.',
    '## The five types in detail');
}

// 03 Numbers that should be strings
{
  let b = '';
  const lane = (y, label, sv, iv) => {
    let s = panel(30, y, 840, 132) + T(54, y + 36, label, { size: 18, weight: 700 });
    s += tyChip(54, y + 58, 110, 34, 'String', { size: 15 }) + code(180, y + 84, sv, { size: 24, weight: 700 });
    s += tyChip(480, y + 58, 110, 34, 'Integer', { size: 15 });
    s += code(606, y + 84, iv, { size: 24, weight: 700, fill: C.rust });
    s += T(606, y + 116, 'leading zero lost', { size: 15, weight: 700, fill: C.rust });
    s += T(450, y + 84, 'vs', { size: 17, anchor: 'middle', fill: C.muted });
    return s;
  };
  b += lane(110, 'Telephone number', '07700900123', '7700900123');
  b += lane(258, 'Student ID', '00452', '452');
  const y = 410;
  b += `<rect x="30" y="${y}" width="840" height="88" rx="14" fill="${C.ink}"/>`;
  b += T(54, y + 36, 'THE TEST', { size: 15, weight: 700, fill: C.mustard });
  b += T(54, y + 68, 'Will you ever do arithmetic on it? If not, it is an identifier: use a string.', { size: 19, weight: 700, fill: '#ffffff' });
  const r = row(y + 108, [
    { kicker: 'POSTCODE', title: 'SW1A 1AA', body: 'contains letters and a space' },
    { kicker: 'CARD SECURITY CODE', title: '045', body: 'leading zero; never added or averaged' },
    { kicker: 'TELEPHONE NUMBER', title: '+ and spaces', body: 'may contain symbols; no arithmetic is done on it' },
  ], { card: { size: 16, tsize: 20 } });
  b += r.s;
  add('03-numbers-as-strings',
    svg(900, y + 108 + r.h + 30, 'Numbers that should be strings', b),
    'Stored as an integer, the telephone number 07700900123 becomes 7700900123 and the student ID 00452 becomes 452, losing the leading zeros. The test: if you will never do arithmetic on it, it is an identifier and belongs in a string. Postcodes contain letters and spaces, card security codes such as 045 keep their leading zero.',
    'If adding or averaging it is meaningless, store it as a string.',
    '## Numbers that should be strings');
}

// 04 Type changes what an operation produces
{
  let b = '';
  const half = (x, title, lines, vars, result, rlab, note) => {
    let s = panel(x, 110, 411, 470) + T(x + 24, 148, title, { size: 20, weight: 700 });
    s += codePanel(x + 20, 166, 371, lines, { size: 18, lh: 30 }).s;
    vars.forEach(([n, ty, v], i) => {
      const y = 290 + i * 62;
      s += code(x + 28, y + 30, n, { size: 19, weight: 700 }) + tyChip(x + 140, y + 8, 120, 34, ty, { size: 15 }) + code(x + 280, y + 31, v, { size: 20, weight: 700, fill: TY[ty][1] === C.ink ? C.ink : TY[ty][1] });
    });
    s += `<rect x="${x + 20}" y="${450}" width="371" height="110" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
    s += T(x + 40, 482, rlab, { size: 16, weight: 700, fill: C.olive }) + code(x + 40, 520, result, { size: 26, weight: 700 });
    s += T(x + 40, 548, note, { size: 15, fill: C.muted });
    return s;
  };
  b += half(30, 'Strings: + joins', ['a ← "12"', 'b ← "30"', 'c ← a + b'], [['a', 'String', '"12"'], ['b', 'String', '"30"']], 'c = "1230"', 'Concatenation', 'not 42: keyboard input arrives as a string');
  b += half(459, 'Integers: / gives a real', ['count ← 7', 'total ← 10', 'average ← total / count'], [['count', 'Integer', '7'], ['total', 'Integer', '10']], 'average ≈ 1.43', 'average must be a Real', 'integer: an error or a lost fractional part');
  add('04-type-and-operations',
    svg(900, 610, 'The type changes the result', b),
    'Left: a and b hold the strings "12" and "30", so a + b concatenates them and c becomes "1230", not 42. Right: count is 7 and total is 10, both integers, but total / count is real division giving about 1.43, so average must be a real.',
    'With strings + joins; with / the answer is real even when both operands are integers.',
    '## Data type and operations together');
}

// 05 Worked example: gym member record
{
  let b = '';
  const items = [
    ['Membership number', '"000731"', 'String', 'leading zeros kept; no arithmetic'],
    ['Surname', '"Okafor"', 'String', 'text of varying length'],
    ['Age in years', '34', 'Integer', 'always a whole number of years'],
    ['Monthly fee', '27.50', 'Real', 'money has a fractional part'],
    ['Membership level', "'G'", 'Character', 'exactly one symbol from a small set'],
    ['Has paid this month', 'True', 'Boolean', 'only two possible states'],
  ];
  b += `<rect x="30" y="110" width="840" height="${80 + items.length * 76}" rx="16" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/>`;
  b += `<rect x="30" y="110" width="840" height="58" rx="16" fill="${C.ink}"/><rect x="30" y="150" width="840" height="18" fill="${C.ink}"/>`;
  b += T(54, 147, 'Gym member', { size: 21, weight: 700, fill: '#ffffff' }) + T(846, 147, 'type and the reason tied to the data', { size: 16, anchor: 'end', fill: C.teal });
  items.forEach(([f, ex, ty, why], i) => {
    const y = 184 + i * 76;
    b += `<rect x="46" y="${y}" width="808" height="64" rx="10" fill="${i % 2 ? '#ffffff' : '#f8faf9'}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    b += T(66, y + 28, f, { size: 17, weight: 700 }) + code(66, y + 52, ex, { size: 17, fill: C.muted });
    b += tyChip(330, y + 14, 140, 36, ty, { size: 16 });
    b += T(492, y + 38, why, { size: 17 });
  });
  const y = 184 + items.length * 76 + 34;
  b += `<rect x="30" y="${y}" width="840" height="64" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(450, y + 40, '"Because it is a number" is not a justification; "always a whole number of years" is.', { size: 17, weight: 600, anchor: 'middle' });
  add('05-gym-record-types',
    svg(900, y + 94, 'Worked example: types for a gym record', b),
    'A gym member record with a type for each item: membership number 000731 as a string (leading zeros), surname as a string, age 34 as an integer, monthly fee 27.50 as a real, membership level G as a character and has paid this month as a Boolean, each with a reason tied to the data.',
    'Each justification names a property of that particular data.',
    '## Worked example: choosing types for a record');
}

// 06 Choosing a type: decision path
{
  let b = '';
  const q = (cx, cy, w, s) => `<rect x="${cx - w / 2}" y="${cy - 30}" width="${w}" height="60" rx="30" fill="${C.ink}"/>` + T(cx, cy + 6, s, { size: 17, weight: 700, anchor: 'middle', fill: '#ffffff' });
  const lab = (x, y, s, f = C.tealDark) => T(x, y, s, { size: 16, weight: 700, fill: f, anchor: 'middle' });
  b += q(300, 140, 400, 'Only two possible states?');
  b += arrow(500, 140, 640, 140) + lab(570, 128, 'yes') + tyChip(650, 118, 180, 44, 'Boolean');
  b += arrow(300, 170, 300, 222) + lab(324, 202, 'no', C.rust);
  b += q(300, 252, 400, 'Will you ever do arithmetic on it?');
  b += arrow(500, 252, 622, 252) + lab(562, 240, 'yes');
  b += q(748, 252, 230, 'Fractional part?');
  b += arrow(710, 282, 650, 344) + lab(660, 314, 'no', C.rust) + arrow(785, 282, 830, 344) + lab(842, 304, 'yes');
  b += tyChip(560, 350, 150, 44, 'Integer') + tyChip(760, 350, 120, 44, 'Real');
  b += T(635, 420, 'you count it', { size: 15, anchor: 'middle', fill: C.muted }) + T(820, 420, 'you measure it', { size: 15, anchor: 'middle', fill: C.muted });
  b += arrow(300, 282, 300, 334) + lab(324, 314, 'no', C.rust);
  b += q(300, 364, 400, 'Exactly one symbol?');
  b += arrow(200, 394, 160, 450) + lab(150, 418, 'yes') + arrow(400, 394, 440, 450) + lab(444, 426, 'no', C.rust);
  b += tyChip(80, 456, 160, 44, 'Character') + tyChip(370, 456, 140, 44, 'String');
  b += T(160, 526, "'G', 'Q'", { size: 15, anchor: 'middle', fill: C.muted }) + T(440, 526, 'IDs, phone numbers, names', { size: 15, anchor: 'middle', fill: C.muted });
  const y = 556;
  b += `<rect x="30" y="${y}" width="840" height="64" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(450, y + 40, 'Watch for traps: leading zeros, single-letter codes, yes/no fields and money.', { size: 17, weight: 600, anchor: 'middle' });
  add('06-choosing-a-type',
    svg(900, y + 94, 'Choosing a data type', b),
    'A decision path. Only two states: Boolean. Otherwise, if you will do arithmetic on it, choose real when it can have a fractional part and integer when it cannot. If not, one symbol is a character and anything else, including IDs and phone numbers, is a string.',
    'Ask the questions in order and give the reason tied to the data.',
    '## Exam technique');
}
