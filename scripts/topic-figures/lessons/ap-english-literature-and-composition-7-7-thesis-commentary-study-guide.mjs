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

export const slug = 'ap-english-literature-and-composition-7-7-thesis-commentary-study-guide';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// 01 Core argument and three sophistication moves
{
  let b = '';
  const cx = 450, cy = 330;
  b += `<circle cx="${cx}" cy="${cy}" r="200" fill="${C.cream}" fill-opacity="0.5" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="10 7"/>`;
  b += `<circle cx="${cx}" cy="${cy}" r="112" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3"/>`;
  b += T(cx, cy - 52, 'THE BASICS', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += tl(cx, cy - 18, ['thesis', 'line of reasoning', 'commentary'], { size: 19, weight: 700, anchor: 'middle' }, 30);
  const mv = [
    [30, 130, 'Broader context', 'why the interpretation matters beyond the text'],
    [640, 130, 'Alternative interpretation', 'state a different reading and answer it'],
    [335, 560, 'Analogy', 'a parallel that helps the audience understand'],
  ];
  mv.forEach(([x, y, ti, d], i) => {
    const c = card(x, y, 230, { title: ti, body: d, align: 'middle', tsize: 19, size: 16, fill: '#ffffff', edge: C.olive });
    b += c.s;
    const ex = i === 0 ? x + 190 : i === 1 ? x + 40 : x + 115, ey = i === 2 ? y - 6 : y + c.h + 6;
    const dx = ex - cx, dy = ey - cy, L = Math.hypot(dx, dy);
    b += arrow(cx + (dx / L) * 118, cy + (dy / L) * 118, ex, ey, { w: 3.5, color: C.olive, marker: 'ahO' });
  });
  add('01-basics-and-sophistication',
    svg(900, 740, 'From claim to a sophisticated argument', b + T(450, 714, 'Each move connects the argument to something beyond a single sentence of evidence', { size: 16, anchor: 'middle', fill: C.olive, weight: 600, italic: true })),
    'A core of thesis, line of reasoning and commentary sits inside a wider ring. Three arrows reach out to sophistication moves: broader context, an alternative interpretation, and an analogy, each connecting the argument to something beyond a single sentence of evidence.',
    'Sophistication builds outward from a sound thesis, line of reasoning and commentary.',
    '## From claim to argument');
}

// 02 The commentary chain, with a pattern
{
  let b = '';
  const mv = ['Interpret', 'Explain how', 'Connect to the claim', 'Connect to the thesis'];
  const r = row(110, mv.map((m, i) => ({ kicker: `MOVE ${i + 1}`, title: m, ...(i === 3 ? { fill: C.tealLight, edge: C.tealDark } : {}) })), { arrows: true, gap: 34, card: { tsize: 19, minH: 100 } });
  b += r.s;
  const y = 110 + r.h + 40;
  b += panel(30, y, 840, 220, C.cream, C.olive);
  b += T(50, y + 36, '+ LOOK FOR A PATTERN', { size: 17, weight: 700, fill: C.olive });
  b += para(50, y + 64, 'A short story is compact, so the same element often appears more than once. Tracing it gives the commentary weight.', 780, { size: 17 }).s;
  const ly = y + 160;
  b += `<line x1="80" y1="${ly}" x2="820" y2="${ly}" stroke="${C.ink}" stroke-width="3"/>` + arrow(800, ly, 840, ly, { w: 3 });
  [[150, 'opening'], [400, 'middle'], [650, 'ending']].forEach(([x, s]) => {
    b += `<circle cx="${x}" cy="${ly}" r="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(x, ly + 36, s, { size: 16, anchor: 'middle', fill: C.muted });
  });
  b += path(`M150,${ly - 18} Q275,${ly - 58} 400,${ly - 18} Q525,${ly - 58} 650,${ly - 18}`, { stroke: C.olive, w: 3, extra: 'stroke-dasharray="7 6"' });
  b += T(275, ly - 50, 'the same element returns', { size: 15, anchor: 'middle', fill: C.olive, italic: true, weight: 600 });
  add('02-commentary-chain-pattern',
    svg(900, y + 250, 'Commentary in short fiction', b),
    'The four commentary moves in a row: interpret, explain how, connect to the claim, connect to the thesis. Below, an extra habit for short fiction: trace the same element as it returns at the opening, middle and ending, which gives the commentary weight.',
    'In a short story, trace an element across its appearances to give commentary weight.',
    '## The commentary chain');
}

// 03 Sophistication moves: use and risk
{
  let b = '';
  const mv = [
    ['Broader context', 'Explains why the interpretation matters beyond the single text: for a society, an idea, human experience', '"This matters because ..."', 'Making a grand claim without evidence'],
    ['Alternative interpretation', 'States a different reading and answers it', '"A reader might see ... However, ..."', 'Listing readings without choosing between them'],
    ['Analogy', 'Uses a parallel to clarify the interpretation', '"Like a prisoner who mourns a kind jailer yet rejoices at an open gate, ..."', 'An analogy that distracts or does not fit'],
  ];
  const w = 264;
  const H = Math.max(...mv.map(([ti, d]) => cardH(w, { kicker: 'DOES', title: ti, body: d, size: 16, tsize: 20 }))) + 70;
  let maxB = 0;
  mv.forEach(([ti, d, st, risk], i) => {
    const x = 30 + i * (w + 24);
    b += card(x, 110, w, { kicker: 'DOES', title: ti, body: d, size: 16, tsize: 20, minH: H - 70 }).s;
    const sh = para(0, 0, st, w - 32, { size: 16, italic: true }).h;
    const yS = 110 + H - 70 + 12;
    b += `<rect x="${x}" y="${yS}" width="${w}" height="${sh + 46}" rx="12" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>`;
    b += T(x + 16, yS + 22, 'START', { size: 15, weight: 700, fill: C.tealDark }) + para(x + 16, yS + 44, st, w - 32, { size: 16, italic: true }).s;
    const yR = yS + sh + 58;
    const rh = para(0, 0, risk, w - 32, { size: 16 }).h;
    b += `<rect x="${x}" y="${yR}" width="${w}" height="${rh + 46}" rx="12" fill="#ffffff" stroke="${C.rust}" stroke-width="2" stroke-dasharray="7 5"/>`;
    b += T(x + 16, yR + 22, 'RISK', { size: 15, weight: 700, fill: C.rust }) + para(x + 16, yR + 44, risk, w - 32, { size: 16 }).s;
    maxB = Math.max(maxB, yR + rh + 46);
  });
  const yE = maxB + 34;
  b += T(450, yE, 'Each move must be tied to evidence, and chosen, not just listed', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  add('03-sophistication-moves',
    svg(900, yE + 28, 'Three moves that add sophistication', b),
    'Three columns. Broader context explains why an interpretation matters beyond the text; its risk is a grand claim without evidence. An alternative interpretation states another reading and answers it; its risk is listing readings without choosing. An analogy clarifies through a parallel; its risk is one that distracts or does not fit.',
    'Each sophistication move has a use, a way to begin and a risk to avoid.',
    '## Sophistication moves at a glance');
}

// 04 Worked example 1: drafts and line of reasoning
{
  let b = '';
  const dr = [
    ['Draft 1', '"Mrs Mallard is sad and then happy."', 'A summary of emotions'],
    ['Draft 2', '"Chopin uses setting and symbolism to show her feelings."', 'Lists elements; no claim'],
    ['Draft 3', '"Chopin shows that Mrs Mallard feels free."', 'Too obvious; no why'],
  ];
  let y = 110;
  dr.forEach(([k, q, v]) => {
    const qh = para(0, 0, q, 420, { size: 16, italic: true }).h, h = Math.max(58, qh + 26);
    b += panel(30, y, 840, h) + T(50, y + h / 2 + 6, k, { size: 17, weight: 700, fill: C.muted });
    b += para(140, y + (h - qh) / 2 + 16, q, 420, { size: 16, italic: true }).s;
    b += `<circle cx="600" cy="${y + h / 2}" r="12" fill="#ffffff" stroke="${C.rust}" stroke-width="3"/>` + path(`M595,${y + h / 2 - 5} l10,10 M605,${y + h / 2 - 5} l-10,10`, { stroke: C.rust, w: 3 });
    b += T(622, y + h / 2 + 6, v, { size: 16, weight: 600, fill: C.rust });
    y += h + 10;
  });
  y += 10;
  const c = card(30, y, 840, { kicker: 'DRAFT 4 (STRONG)', body: '"By moving Mrs Mallard from a conventional outburst of grief to a private room where the open window brings spring and freedom, Chopin presents her joy as natural and long suppressed, so that the story\'s ironic ending condemns not a cruel husband but a marriage that leaves no space for the self."', italic: true, size: 17, bfill: C.ink, fill: C.tealLight, edge: C.tealDark });
  b += c.s; y += c.h + 40;
  b += T(450, y - 8, 'The line of reasoning it sets up', { size: 19, weight: 700, anchor: 'middle' });
  const steps4 = ['Conventional grief: what she is expected to feel', 'Window and spring: the new feeling as natural', 'The marriage: kind but constraining', 'The ironic ending: no space for such freedom'];
  const w = 195;
  steps4.forEach((s, i) => {
    const x = 30 + i * (w + 20), yy = y + 10 + (3 - i) * 26;
    b += card(x, yy, w, { kicker: `CLAIM ${i + 1}`, body: s, size: 16, bfill: C.ink, minH: 104, pad: 14, fill: i === 3 ? C.cream : '#ffffff', edge: i === 3 ? C.olive : C.panelEdge }).s;
    if (i < 3) b += arrow(x + w + 2, yy + 40, x + w + 18, yy + 22, { w: 3 });
  });
  y += 10 + 3 * 26 + 104;
  add('04-chopin-thesis-drafts',
    svg(900, y + 30, 'Worked example: a thesis on The Story of an Hour', b),
    'Three weak drafts about Mrs Mallard are rejected: a summary of emotions, a list of elements, and a claim nearly everyone would accept. The strong fourth draft presents her joy as natural and suppressed and the ending as a condemnation of marriage, and sets up four rising claims from conventional grief to the ironic ending.',
    'The strong thesis is defensible and previews a line of four building claims.',
    '## Worked example 1: building a thesis');
}

// 05 Worked example 2: commentary with alternative and broader context
{
  let b = '';
  const ev = card(30, 110, 840, { kicker: 'EVIDENCE', body: ['"the face that had never looked save with love upon her"', '"no powerful will bending hers in that blind persistence with which men and women believe they have a right to impose a private will upon a fellow-creature"'], italic: true, size: 16, bfill: C.ink, fill: C.cream, edge: C.olive, kfill: C.olive, gap: 8 });
  b += ev.s;
  let y = 110 + ev.h + 34;
  b += arrow(450, y - 28, 450, y - 6, { w: 3.5 });
  // alternative branch
  const alt = card(30, y, 400, { kicker: 'ALTERNATIVE READING', kfill: C.rust, body: 'Her joy is callous or shock; the husband is a tyrant', size: 16, bfill: C.ink, edge: C.rust });
  const ans = card(470, y, 400, { kicker: 'ANSWERED BY EVIDENCE', body: 'A face "that had never looked save with love" rules out the tyrant', size: 16, bfill: C.ink, fill: C.tealLight, edge: C.tealDark });
  const h = Math.max(alt.h, ans.h);
  b += card(30, y, 400, { kicker: 'ALTERNATIVE READING', kfill: C.rust, body: 'Her joy is callous or shock; the husband is a tyrant', size: 16, bfill: C.ink, edge: C.rust, minH: h }).s;
  b += card(470, y, 400, { kicker: 'ANSWERED BY EVIDENCE', body: 'A face "that had never looked save with love" rules out the tyrant', size: 16, bfill: C.ink, fill: C.tealLight, edge: C.tealDark, minH: h }).s;
  b += `<line x1="436" y1="${y + h / 2}" x2="464" y2="${y + h / 2}" stroke="${C.rust}" stroke-width="4"/>` + T(450, y + h / 2 - 10, '✕', { size: 20, anchor: 'middle', fill: C.rust, weight: 700 });
  y += h + 40;
  // zoom from individual to institution
  b += T(450, y, '"blind persistence" and "men and women" move the blame', { size: 17, weight: 700, anchor: 'middle' });
  y += 20;
  const zx = [130, 450, 770];
  const zl = [['one man', 'Brently Mallard'], ['a custom', 'of men and women'], ['an institution', 'marriage as a structure']];
  zl.forEach(([a, c2], i) => {
    const r = 48 + i * 12;
    b += `<circle cx="${zx[i]}" cy="${y + 70}" r="${r}" fill="${i === 2 ? C.tealLight : '#ffffff'}" stroke="${i === 2 ? C.tealDark : C.ink}" stroke-width="3"/>`;
    b += T(zx[i], y + 70 + 6, a, { size: 17, weight: 700, anchor: 'middle' }) + T(zx[i], y + 70 + r + 26, c2, { size: 15, anchor: 'middle', fill: C.muted });
    if (i < 2) b += arrow(zx[i] + r + 10, y + 70, zx[i + 1] - (48 + (i + 1) * 12) - 10, y + 70, { w: 4 });
  });
  y += 70 + 66 + 40;
  const fin = card(30, y, 840, { kicker: 'CONNECT TO THE THESIS', body: 'The ending condemns marriage as a structure, not Brently Mallard as an individual.', size: 17, bfill: C.ink, bweight: 600 });
  b += fin.s;
  add('05-alternative-and-context',
    svg(900, y + fin.h + 30, 'Worked example: answering another reading', b),
    'Evidence about the husband\'s loving face and the "powerful will" of marriage leads to an alternative reading, that the husband was a tyrant, which the loving face rules out. Three widening circles show the blame moving from one man to a custom of men and women to marriage as an institution, which connects to the thesis.',
    'Answer the alternative reading with evidence, then widen the claim to the institution.',
    '## Worked example 2: commentary with an alternative interpretation and a broader context');
}

// 06 Anatomy of a model introduction
{
  let b = '';
  const s1 = card(30, 110, 840, { kicker: 'SENTENCE 1: ORIENT', body: '"Kate Chopin\'s The Story of an Hour compresses a marriage, a bereavement and a death into a few pages, and it is in that compression that its argument lies."', italic: true, size: 17, bfill: C.ink });
  b += s1.s;
  let y = 110 + s1.h + 14;
  b += T(50, y + 10, 'orients the reader without summarising the plot', { size: 16, fill: C.muted, italic: true });
  y += 30;
  const s2 = card(30, y, 840, { kicker: 'SENTENCE 2: THESIS', body: '"By moving Mrs Mallard from a conventional outburst of grief to a private room where spring presses in, Chopin presents her joy as natural and long suppressed, so that the ending\'s irony condemns not a cruel husband but a marriage that leaves no space for the self."', italic: true, size: 17, bfill: C.ink, fill: C.tealLight, edge: C.tealDark });
  b += s2.s;
  y += s2.h + 30;
  b += arrow(450, y - 22, 450, y + 4, { w: 3.5 });
  const r = row(y + 8, [{ body: 'conventional grief' }, { body: 'spring presses in' }, { body: 'the ending\'s irony' }], { arrows: true, card: { align: 'middle', size: 17, bfill: C.ink, bweight: 600, fill: C.cream, edge: C.olive } });
  b += r.s;
  y += 8 + r.h + 30;
  b += T(450, y, 'No long preamble: a clear route to the thesis, then a line of reasoning to follow', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('06-model-introduction',
    svg(900, y + 28, 'A short model introduction', b),
    'Two sentences of a model introduction. The first orients the reader to Chopin\'s compressed story without summarising the plot. The second is the thesis, and it previews a route from conventional grief, to spring pressing in, to the ending\'s irony.',
    'One orienting sentence, then the thesis: the rest of the essay follows its route.',
    '## A short model introduction');
}

// 07 Self-assessment rubric
{
  let b = '';
  const feats = [
    ['Thesis', 'Summary or a list', 'General claim', 'Specific, defensible interpretation that previews a direction'],
    ['Line of reasoning', 'A list of points', 'Some logic', 'Claims build, each needing proof'],
    ['Commentary', 'Restates evidence', 'Interprets', 'Interprets, explains how, connects to claim and thesis'],
    ['Sophistication', 'None', 'A move that sits apart from the argument', 'A move that is integrated and supported by evidence'],
    ['Control of the text', 'A few details', 'Several details', 'Details chosen precisely, patterns traced'],
  ];
  const x0 = 30, cw0 = 210, cwb = 210;
  const fills = ['#ffffff', C.cream, C.tealLight];
  const edges = [C.panelEdge, C.olive, C.tealDark];
  ['1  not yet', '2', '3  secure'].forEach((h, j) => {
    const x = x0 + cw0 + j * cwb;
    b += `<rect x="${x + 4}" y="110" width="${cwb - 8}" height="44" rx="10" fill="${C.ink}"/>` + T(x + cwb / 2, 139, h, { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' });
  });
  b += arrow(x0 + cw0 + 20, 172, x0 + cw0 + 3 * cwb - 20, 172, { w: 3, color: C.tealDark, marker: 'ahT' });
  let y = 188;
  feats.forEach(([f, ...cells]) => {
    const hs = [para(0, 0, f, cw0 - 24, { size: 17, weight: 700 }).h, ...cells.map((c) => para(0, 0, c, cwb - 32, { size: 16 }).h)];
    const h = Math.max(...hs) + 28;
    b += para(x0 + 4, y + (h - 8 - hs[0]) / 2 + 17, f, cw0 - 24, { size: 17, weight: 700 }).s;
    cells.forEach((c, j) => {
      const x = x0 + cw0 + j * cwb;
      b += `<rect x="${x + 4}" y="${y}" width="${cwb - 8}" height="${h - 8}" rx="10" fill="${fills[j]}" stroke="${edges[j]}" stroke-width="2"/>`;
      b += para(x + cwb / 2, y + (h - 8 - hs[j + 1]) / 2 + 16, c, cwb - 32, { size: 16, anchor: 'middle' }).s;
    });
    y += h;
  });
  add('07-self-assessment-rubric',
    svg(900, y + 24, 'Self-assessment: from 1 to 3', b),
    'A grid rating five features from 1 (not yet) to 3 (secure): thesis, line of reasoning, commentary, sophistication and control of the text. Level 3 describes a specific, defensible thesis, building claims, commentary that connects to claim and thesis, an integrated sophistication move and precisely chosen details.',
    'Secure work integrates its sophistication move and traces patterns in the text.',
    '## Self-assessment table (suggested Marlbridge rubric)');
}
