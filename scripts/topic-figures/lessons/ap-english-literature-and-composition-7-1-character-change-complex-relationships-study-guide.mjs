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

export const slug = 'ap-english-literature-and-composition-7-1-character-change-complex-relationships-study-guide';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// 01 What drives change, and its shapes
{
  let b = '';
  const r = row(110, [
    { kicker: 'SOURCE', title: 'A conflict of values', body: 'duty against desire, loyalty against honesty, safety against freedom' },
    { kicker: 'SOURCE', title: 'A change of circumstances', body: 'a loss, a move, a new responsibility' },
  ], { gap: 40, card: { size: 17, fill: C.cream, edge: C.olive, kfill: C.olive } });
  b += r.s;
  const y0 = 110 + r.h + 64;
  b += arrow(r.xs[0] + r.w / 2, 110 + r.h + 6, 400, y0 - 12, { w: 3.5 }) + arrow(r.xs[1] + r.w / 2, 110 + r.h + 6, 500, y0 - 12, { w: 3.5 });
  const gw = 264, gh = 230;
  const graphs = [
    ['Gradual', 'over the course of the narrative', (x, y) => `M${x},${y + 150} C${x + 80},${y + 140} ${x + 150},${y + 70} ${x + 224},${y + 40}`],
    ['Sudden', 'an epiphany: a moment of realisation', (x, y) => `M${x},${y + 150} L${x + 120},${y + 146} L${x + 124},${y + 46} L${x + 224},${y + 40}`],
    ['Unchanged', 'shows what pressure could not move', (x, y) => `M${x},${y + 120} L${x + 224},${y + 120}`],
  ];
  graphs.forEach(([ti, sub, d], i) => {
    const x = 30 + i * (gw + 24), y = y0;
    b += panel(x, y, gw, gh, i === 1 ? C.tealLight : C.panel, i === 1 ? C.tealDark : C.panelEdge);
    b += T(x + 20, y + 34, ti, { size: 21, weight: 700 }) + para(x + 20, y + 58, sub, gw - 40, { size: 15, fill: C.muted }).s;
    const ax = x + 20, ay = y + 40;
    b += `<line x1="${ax}" y1="${ay + 168}" x2="${ax + 228}" y2="${ay + 168}" stroke="${C.muted}" stroke-width="2"/>`;
    b += path(d(ax + 4, ay + 14), { stroke: i === 1 ? C.tealDark : C.ink, w: 5 });
    if (i === 1) b += `<circle cx="${ax + 4 + 122}" cy="${ay + 14 + 96}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
  });
  b += T(450, y0 + gh + 30, 'time in the story →', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('01-sources-and-shapes-of-change',
    svg(900, y0 + gh + 56, 'Where change comes from, and its shape', b),
    'A conflict of values or a change of circumstances puts pressure on a character. Three small graphs show the possible results: gradual change over the narrative, sudden change at an epiphany, and no change at all, which shows what pressure could not move.',
    'Change grows out of conflict or circumstance, and it can be gradual, sudden or refused.',
    '## Why change matters in a short story');
}

// 02 Before-and-after frame
{
  let b = '';
  const st = [
    ['Before', 'What do they believe, want or see at the start?', 'early thoughts, speech, habits'],
    ['Pressure', 'What conflict of values or change of circumstances pushes on them?', 'the event, the choice, the loss'],
    ['Turn', 'Gradual or sudden?', 'a shift in perception or tone'],
    ['After', 'What do they now believe, want or see? Or what refuses to change?', 'later thoughts, speech, action'],
    ['Function', 'What does the change, or its absence, mean for the story?', 'link to the central conflict and the ending'],
  ];
  const w = 154, gap = 17;
  let maxH = 0;
  const hs = st.map(([ti, q, ev]) => cardH(w, { title: ti, body: [q], size: 16, pad: 14, tsize: 19 }) );
  maxH = Math.max(...hs);
  const evH = Math.max(...st.map(([, , ev]) => cardH(w, { body: ev, size: 15, pad: 12 })));
  st.forEach(([ti, q, ev], i) => {
    const x = 30 + i * (w + gap), y = 150;
    const hi = i === 2 ? { fill: C.cream, edge: C.olive } : i === 4 ? { fill: C.tealLight, edge: C.tealDark } : {};
    b += badge(x + w / 2, 124, 18, String(i + 1), i === 2 ? C.mustard : C.cream);
    b += card(x, y, w, { title: ti, body: q, size: 16, pad: 14, tsize: 19, minH: maxH, ...hi }).s;
    b += T(x + w / 2, y + maxH + 34, 'evidence', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
    b += card(x, y + maxH + 44, w, { body: ev, size: 15, pad: 12, minH: evH, italic: true, bfill: C.ink, fill: '#ffffff', edge: C.panelEdge }).s;
    if (i < 4) b += arrow(x + w + 1, y + maxH / 2, x + w + gap - 1, y + maxH / 2, { w: 3 });
  });
  const H = 150 + maxH + 44 + evH + 30;
  add('02-before-after-frame',
    svg(900, H, 'Tracking change: before to after', b),
    'Five steps in a row: before, pressure, turn, after and function. Each has a question, such as whether the turn is gradual or sudden, and the kind of evidence to look for, from early habits to later actions and the link to the ending.',
    'Track the character from before, through pressure and a turn, to after, then say what it means.',
    '## Tracking change: a before-and-after frame');
}

// 03 Epiphany: signs and effects
{
  let b = '';
  const cx = 450, cy = 330;
  b += `<circle cx="${cx}" cy="${cy}" r="98" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>`;
  b += T(cx, cy - 22, 'EPIPHANY', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  b += tl(cx, cy + 6, ['seeing things', 'in a new light'], { size: 20, weight: 700, anchor: 'middle' }, 26);
  const signs = [
    [30, 110, 'Perception changes suddenly', '"she saw", "it came to her"'],
    [590, 110, 'Earlier details gain new meaning', ''],
    [30, 420, "The narrator's tone or rhythm shifts", ''],
    [590, 420, 'The next action follows from the new view', ''],
  ];
  signs.forEach(([x, y, ti, ex]) => {
    const c = card(x, y, 280, { kicker: 'SIGN', title: ti, body: ex || undefined, tsize: 18, size: 16, minH: 130 });
    b += c.s;
    const ex2 = x < 450 ? x + 284 : x - 4, ey = y + 65;
    const tx = x < 450 ? cx - 92 : cx + 92, ty = y < 300 ? cy - 50 : cy + 50;
    b += arrow(ex2, ey, tx + (x < 450 ? -8 : 8), ty + (y < 300 ? -8 : 8), { w: 3, color: C.muted });
  });
  const y2 = 580;
  const r = row(y2, [
    { kicker: 'TIED TO', title: 'the central conflict', body: 'often directly' },
    { kicker: 'MAY AFFECT', title: 'the plot', body: 'the character acts on it' },
    { kicker: 'CAN BE', title: 'ironic', body: 'too late, or leads somewhere unexpected' },
  ], { card: { size: 16, tsize: 19, fill: C.tealLight, edge: C.tealDark } });
  b += r.s;
  add('03-epiphany-signs',
    svg(900, y2 + r.h + 30, 'How to spot an epiphany', b),
    'An epiphany, seeing things in a new light, sits at the centre of four signs: perception changes suddenly, earlier details gain new meaning, the narrator\'s tone shifts, and the next action follows from the new view. Below: it is tied to the central conflict, may affect the plot, and can be ironic.',
    'A true epiphany changes what the character sees and often what they do next.',
    '## Epiphany');
}

// 04 A character and a group or force
{
  let b = '';
  const gx = 230, gy = 265;
  b += `<circle cx="${gx}" cy="${gy}" r="130" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3" stroke-dasharray="10 7"/>`;
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2, px = gx + Math.cos(a) * 80, py = gy + Math.sin(a) * 80;
    b += `<circle cx="${px}" cy="${py - 10}" r="11" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/><path d="M${px - 15},${py + 18} Q${px},${py - 6} ${px + 15},${py + 18} Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>`;
  }
  b += T(gx, gy + 6, 'GROUP', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += T(gx, gy + 160, 'can act as one character', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 600 });
  const ix = 620;
  b += `<circle cx="${ix}" cy="${gy - 22}" r="26" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/><path d="M${ix - 36},${gy + 46} Q${ix},${gy - 10} ${ix + 36},${gy + 46} Z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
  b += T(ix, gy + 80, 'INDIVIDUAL', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  b += arrow(370, gy - 40, 570, gy - 40, { w: 4, color: C.tealDark, marker: 'ahT' }) + T(470, gy - 54, 'includes or excludes', { size: 16, anchor: 'middle', weight: 600, fill: C.tealDark });
  b += arrow(570, gy + 20, 370, gy + 20, { w: 4, color: C.olive, marker: 'ahO' }) + T(470, gy + 46, 'responds', { size: 16, anchor: 'middle', weight: 600, fill: C.olive });
  const yq = 470;
  const r = row(yq, [
    { kicker: 'ASK 1', title: 'What does the group do?', body: 'speaks, falls silent, watches, excludes' },
    { kicker: 'ASK 2', title: 'How does the character respond?', body: 'defiance, acceptance, pretence' },
    { kicker: 'ASK 3', title: 'What does the contrast show?', body: "the group's collective attitude, and the character's", fill: C.cream, edge: C.olive },
  ], { card: { size: 16, tsize: 18 } });
  b += r.s;
  add('04-character-and-group',
    svg(900, yq + r.h + 30, 'A character and a group', b),
    'A group of figures, which can act as one character, includes or excludes an individual, who responds. Three questions follow: what does the group do, how does the character respond, and what does the contrast show about the group\'s collective attitude and the character\'s own.',
    'Inclusion or exclusion reveals the group\'s collective attitude, and the response reveals the character.',
    '## Relationships: individuals, groups and forces');
}

// 05 The Story of an Hour: the shape of the epiphany
{
  let b = '';
  const x0 = 110, x1 = 850, yT = 140, yB = 470;
  b += panel(30, 110, 840, 400);
  b += `<line x1="${x0}" y1="${yB}" x2="${x1}" y2="${yB}" stroke="${C.muted}" stroke-width="2"/>`;
  b += `<line x1="${x0}" y1="${yT}" x2="${x0}" y2="${yB}" stroke="${C.muted}" stroke-width="2"/>`;
  b += T(x0 - 12, yT + 16, 'joy', { size: 16, anchor: 'end', fill: C.muted, weight: 600 }) + T(x0 - 12, yB - 6, 'grief', { size: 16, anchor: 'end', fill: C.muted, weight: 600 });
  const pts = [[150, 420], [300, 400], [420, 330], [470, 190], [640, 170], [700, 172], [730, 440]];
  b += path(`M${pts[0]} C220,430 260,410 300,400 S390,360 420,330 L470,190 C540,180 600,172 640,170 L700,172 L730,440`, { stroke: C.tealDark, w: 5 });
  const lab = [
    [150, 420, 'Weeps "with sudden, wild abandonment"', 0, 30, 'start'],
    [420, 330, '"something coming to her"', 0, 30, 'start'],
    [470, 190, '"free, free, free!"', -10, -20, 'end'],
    [640, 170, '"like a goddess of Victory"', 0, -20, 'middle'],
    [730, 440, 'husband walks in; she dies', -10, -16, 'end'],
  ];
  pts.forEach(([x, y], i) => { if ([0, 2, 3, 4, 6].includes(i)) b += `<circle cx="${x}" cy="${y}" r="9" fill="${i === 3 ? C.mustard : '#ffffff'}" stroke="${C.ink}" stroke-width="3"/>`; });
  lab.forEach(([x, y, s, dx, dy, an]) => { b += T(x + dx + (an === 'start' ? 16 : 0), y + dy, s, { size: 16, italic: true, anchor: an, weight: 600 }); });
  b += T(755, 400, '"of the joy', { size: 16, italic: true, fill: C.rust, weight: 600 }) + T(755, 420, 'that kills"', { size: 16, italic: true, fill: C.rust, weight: 600 });
  const stages = [[150, 'BEFORE'], [300, 'PRESSURE'], [445, 'TURN'], [640, 'AFTER'], [760, 'IRONY']];
  stages.forEach(([x, s]) => { b += T(x, yB + 26, s, { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark }); });
  const yF = 540;
  const c = card(30, yF, 840, { kicker: 'FUNCTION', body: 'The epiphany grows from the conflict between marriage and selfhood; the ironic ending shows how little room the world allows for the new self she discovers.', size: 17, bfill: C.ink, fill: C.tealLight, edge: C.tealDark });
  b += c.s;
  add('05-story-of-an-hour-arc',
    svg(900, yF + c.h + 30, 'The Story of an Hour: an epiphany', b),
    'A line runs from grief towards joy across Chopin\'s story. Mrs Mallard weeps at the news, senses "something coming to her", rises sharply at "free, free, free!", descends "like a goddess of Victory", then falls when her husband walks in and she dies "of the joy that kills".',
    'A sudden epiphany lifts Mrs Mallard, and the ironic ending takes it away.',
    '## Worked example 1: an epiphany and its effects');
}

// 06 Nell and the village
{
  let b = '';
  const r = row(110, [
    { kicker: 'THE GROUP', title: 'Acts as one character', body: ['Women at the pump go quiet, then begin again "a little louder"', '"like a tide that had been held behind a hand"', 'Men find "business with their hats"'], bullets: true, fill: C.tealLight, edge: C.tealDark },
    { kicker: 'NELL', title: 'Resists, at a price', body: ['"did not look at them"', 'walks "as though the lane were hers"', 'her graciousness "cost her something"'], bullets: true, fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { gap: 90, card: { size: 17, tsize: 20 } });
  b += r.s;
  const my = 110 + r.h / 2;
  b += arrow(r.xs[0] + r.w + 8, my - 22, r.xs[1] - 8, my - 22, { w: 3.5, color: C.tealDark, marker: 'ahT' });
  b += T(450, my - 34, 'exclude', { size: 15, anchor: 'middle', weight: 700, fill: C.tealDark });
  b += arrow(r.xs[1] - 8, my + 22, r.xs[0] + r.w + 8, my + 22, { w: 3.5, color: C.olive, marker: 'ahO' });
  b += T(450, my + 48, 'defy', { size: 15, anchor: 'middle', weight: 700, fill: C.olive });
  let y = 110 + r.h + 24;
  const s = card(30, y, 840, { kicker: 'THE SEXTON', title: 'Holds the door: the only gesture towards inclusion', body: 'Her thanks are "not returned"', tsize: 18, size: 17 });
  b += s.s; y += s.h + 24;
  const f = card(30, y, 840, { kicker: 'FUNCTION', body: 'Exclusion is something the community performs and the individual endures: defiance maintained at a price.', size: 18, bfill: C.ink, bweight: 600 });
  b += f.s;
  add('06-nell-and-the-village',
    svg(900, y + f.h + 30, 'Worked example: Nell and the village', b),
    'Two columns. The villagers act as one character: the women fall quiet and resume louder, and the men find business with their hats. Nell resists: she does not look at them and walks as though the lane were hers, at a cost. Only the sexton holds the door, and her thanks are not returned.',
    'The group performs exclusion; Nell endures it with a defiance that costs her.',
    '## Worked example 2: a character and a group');
}

// 07 Sentence frames
{
  let b = '';
  const slot = (x, y, s, f = C.cream, e = C.olive) => {
    const w = tw(s, 16, 700) + 22;
    return { s: `<rect x="${x}" y="${y - 22}" width="${w}" height="32" rx="8" fill="${f}" stroke="${e}" stroke-width="2"/>` + T(x + 11, y, s, { size: 16, weight: 700, fill: C.ink }), w };
  };
  const line = (x, y, parts) => {
    let s = '', cx = x;
    parts.forEach((p) => {
      if (typeof p === 'string') { s += T(cx, y, p, { size: 18 }); cx += tw(p, 18) + 7; }
      else { const o = slot(cx, y, p[0], p[1], p[2]); s += o.s; cx += o.w + 6; }
    });
    return s;
  };
  const frames = [
    ['CHANGE', [['At the start,', ['character'], '...;'], ['by the end, ...,', 'because', ['conflict or circumstance']]]],
    ['EPIPHANY', [['The moment when', ['detail of realisation'], 'marks an epiphany:'], ['it ties directly to', ['central conflict'], 'and leads'], [['character'], 'to', ['action'], '.']]],
    ['GROUP', [['The', ['group'], 'acts as a single character,', ['verb'], ','], ['and so reveals a collective attitude of', ['attitude']], ['towards', ['individual'], '.']]],
  ];
  let y = 110;
  frames.forEach(([k, lines]) => {
    const h = 54 + lines.length * 44;
    b += panel(30, y, 840, h) + T(54, y + 34, k, { size: 15, weight: 700, fill: C.tealDark });
    lines.forEach((ln, i) => { b += line(54, y + 74 + i * 44, ln.map((p) => (Array.isArray(p) ? [p[0]] : p))); });
    y += h + 16;
  });
  const chk = row(y + 4, [
    { title: 'Evidence', body: 'a quoted word or detail in each sentence' },
    { title: 'Function', body: 'what the change, or its absence, means' },
  ], { card: { align: 'middle', size: 16, fill: C.tealLight, edge: C.tealDark } });
  b += T(450, y + 0, '', {}) + chk.s;
  add('07-sentence-frames',
    svg(900, y + 4 + chk.h + 30, 'Sentence frames for writing about change', b),
    'Three fill-in sentence frames with gold slots: one for change from start to end because of a conflict or circumstance, one for an epiphany tied to the central conflict that leads to an action, and one for a group acting as a single character with a collective attitude. Each sentence needs evidence and function.',
    'Name the before, the pressure and the meaning in one sentence, with evidence.',
    '## Writing about change: sentence frames');
}
