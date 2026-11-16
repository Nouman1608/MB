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

export const slug = 'ap-english-literature-and-composition-7-4-narrator-reliability-study-guide';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// 01 Why reliability matters: one voice between events and reader
{
  let b = '';
  const y = 130;
  b += card(30, y, 220, { title: 'Events', body: 'what happened', align: 'middle', minH: 120, vcenter: true, tsize: 22 }).s;
  b += card(340, y, 220, { title: 'Narrator', body: 'one voice, or a few', align: 'middle', minH: 120, vcenter: true, tsize: 22, fill: C.cream, edge: C.olive }).s;
  b += card(650, y, 220, { title: 'Reader', body: 'our whole view', align: 'middle', minH: 120, vcenter: true, tsize: 22, fill: C.tealLight, edge: C.tealDark }).s;
  b += arrow(256, y + 60, 334, y + 60, { w: 4 }) + arrow(566, y + 60, 644, y + 60, { w: 4 });
  const y2 = y + 190;
  b += elbow([[450, y + 126], [450, y + 150], [235, y + 150], [235, y2 - 6]], { w: 3.5 });
  b += elbow([[450, y + 150], [665, y + 150], [665, y2 - 6]], { w: 3.5 });
  b += T(235, y + 140, 'trustworthy', { size: 16, anchor: 'middle', weight: 700, fill: C.tealDark }) + T(665, y + 140, 'not trustworthy', { size: 16, anchor: 'middle', weight: 700, fill: C.rust });
  const r = row(y2, [
    { title: 'Accept its picture', body: 'We simply take the account as given', align: 'middle' },
    { title: 'Read between and against its words', body: 'We weigh what it says against what it shows', align: 'middle', edge: C.rust },
  ], { gap: 40, card: { tsize: 19, size: 17 } });
  b += r.s;
  const y3 = y2 + r.h + 24;
  b += `<rect x="30" y="${y3}" width="840" height="64" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(450, y3 + 39, 'Reliability shapes what we believe happened and how we judge the people involved', { size: 17, weight: 700, anchor: 'middle' });
  add('01-one-voice-between',
    svg(900, y3 + 94, 'Why reliability matters', b),
    'Events reach the reader only through the narrator. If the narrator is trustworthy we accept the picture; if not, we read between and against its words. Reliability shapes what we believe happened and how we judge the people involved.',
    'Everything the reader learns passes through the narrator, so reliability changes the whole story.',
    '## Why reliability matters');
}

// 02 Sources of unreliability and their effects
{
  let b = '';
  const src = [
    ['Self-interest', 'defends or flatters themselves', 'The reader doubts the account of conflicts'],
    ['Bias', 'loaded descriptions of other people', 'The reader looks for the other side'],
    ['Limited knowledge', 'cannot see or understand all that happens', 'The reader infers more than the narrator knows'],
    ['Emotional or mental state', 'obsession, grief, fear, instability', 'The reader senses distortion even when the narrator is sincere'],
    ['Naivety or age', 'a child or innocent who misreads events', 'Irony: the reader understands what the narrator does not'],
  ];
  b += T(220, 126, 'SOURCE', { size: 16, weight: 700, anchor: 'middle', fill: C.muted }) + T(665, 126, 'TYPICAL EFFECT ON THE READER', { size: 16, weight: 700, anchor: 'middle', fill: C.muted });
  let y = 142;
  src.forEach(([k, d, e], i) => {
    const lh = cardH(380, { title: k, body: d, tsize: 19, size: 16, pad: 16 }), rh = cardH(390, { body: e, size: 17, pad: 16 });
    const h = Math.max(lh, rh);
    b += card(30, y, 380, { title: k, body: d, tsize: 19, size: 16, pad: 16, minH: h, fill: C.cream, edge: C.olive }).s;
    b += arrow(416, y + h / 2, 474, y + h / 2, { w: 3.5 });
    b += card(480, y, 390, { body: e, size: 17, pad: 16, minH: h, vcenter: true, bfill: C.ink, fill: i === 4 ? C.tealLight : C.panel, edge: i === 4 ? C.tealDark : C.panelEdge }).s;
    y += h + 12;
  });
  b += T(450, y + 24, 'Unreliable does not have to mean lying: name the reason to explain the effect', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('02-sources-of-unreliability',
    svg(900, y + 50, 'Why a narrator may be unreliable', b),
    'Five sources of unreliability, each linked to its effect on the reader: self-interest makes us doubt the account of conflicts, bias sends us to the other side, limited knowledge makes us infer more, an emotional state suggests distortion, and naivety creates irony.',
    'Naming why a narrator distorts helps you explain what the distortion does.',
    '## Sources of unreliability');
}

// 03 Six signs
{
  let b = '';
  const signs = [
    ['Self-contradiction', 'says one thing and shows another'],
    ['Over-insistence', 'repeated claims of calm or honesty: "I am perfectly sane"'],
    ['Defensive address', 'speaks as if to an accuser: "why will you say that I am mad?"'],
    ['Telling and showing do not match', 'reported actions do not fit the description of them'],
    ['Contradiction by others', 'characters, documents or events give a different account'],
    ['Gaps', 'missing reasons, motives, key events'],
  ];
  const w = 411, h = 120;
  signs.forEach(([ti, d], i) => {
    const x = 30 + (i % 2) * (w + 18), y = 110 + Math.floor(i / 2) * (h + 14);
    b += panel(x, y, w, h) + badge(x + 38, y + 42, 20, String(i + 1), C.cream);
    b += para(x + 72, y + 48, ti, w - 92, { size: 19, weight: 700 }).s;
    b += para(x + 72, y + 48 + para(0, 0, ti, w - 92, { size: 19, weight: 700 }).h + 4, d, w - 92, { size: 16, fill: C.muted }).s;
  });
  const y = 110 + 3 * (h + 14) + 6;
  b += `<rect x="30" y="${y}" width="840" height="64" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`;
  b += T(450, y + 39, 'One sign is a clue; look for a second sign before you conclude', { size: 18, weight: 700, anchor: 'middle' });
  add('03-six-signs',
    svg(900, y + 94, 'Signs of an unreliable narrator', b),
    'Six numbered signs: self-contradiction, over-insistence such as "I am perfectly sane", defensive address to an imagined accuser, telling and showing that do not match, contradiction by other characters or documents, and gaps in reasons, motives or events.',
    'Look for a pattern of signs, not a single slip.',
    '## Signs to look for');
}

// 04 Vantage points
{
  let b = '';
  const ic = [
    (x, y) => `<circle cx="${x}" cy="${y}" r="26" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/><circle cx="${x + 30}" cy="${y - 30}" r="7" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/><circle cx="${x + 44}" cy="${y - 46}" r="11" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`,
    (x, y) => `<ellipse cx="${x}" cy="${y}" rx="28" ry="16" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/><circle cx="${x}" cy="${y}" r="8" fill="${C.tealDark}"/>`,
    (x, y) => `<circle cx="${x}" cy="${y}" r="26" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/>` + path(`M${x},${y - 16} L${x},${y} L${x + 12},${y + 8}`, { w: 3.5 }),
  ];
  const vp = [
    ['First-person narrator', 'knows', 'their own mind', 'cannot know', "others' minds"],
    ['A witness', 'knows', 'the scene', 'may not know', 'its causes'],
    ['Telling it decades later', 'has', 'hindsight', 'may have', 'forgotten or reshaped what happened'],
  ];
  vp.forEach(([ti, k1, v1, k2, v2], i) => {
    const x = 30 + i * 288, y = 110, w = 264, h = 300;
    b += panel(x, y, w, h, i === 0 ? C.panel : C.panel) + ic[i](x + w / 2, y + 64);
    b += para(x + w / 2, y + 130, ti, w - 30, { size: 19, weight: 700, anchor: 'middle' }).s;
    b += `<rect x="${x + 16}" y="${y + 160}" width="${w - 32}" height="58" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>`;
    b += T(x + 30, y + 182, k1.toUpperCase(), { size: 14.5, weight: 700, fill: C.tealDark }) + T(x + 30, y + 205, v1, { size: 16, weight: 600 });
    b += `<rect x="${x + 16}" y="${y + 226}" width="${w - 32}" height="62" rx="10" fill="#ffffff" stroke="${C.rust}" stroke-width="2" stroke-dasharray="6 5"/>`;
    b += T(x + 30, y + 248, k2.toUpperCase(), { size: 14.5, weight: 700, fill: C.rust }) + para(x + 30, y + 270, v2, w - 60, { size: 16, weight: 600 }).s;
  });
  const y = 440;
  const r = row(y, [
    { kicker: 'SOME NARRATORS', body: 'provide details and information that others do not or cannot provide', size: 17 },
    { kicker: 'MULTIPLE NARRATORS', body: 'may provide contradictory information', size: 17, fill: C.cream, edge: C.olive, kfill: C.olive },
  ], {});
  b += r.s;
  const y2 = y + r.h + 24;
  b += T(450, y2 + 10, 'Ask: what is each narrator positioned to know, and what do they have reason to say?', { size: 17, anchor: 'middle', weight: 700, fill: C.tealDark });
  add('04-vantage-points',
    svg(900, y2 + 40, 'What a narrator can and cannot know', b),
    'Three vantage points. A first-person narrator knows their own mind but not others\'. A witness knows the scene but may not know its causes. A narrator telling the story decades later may have forgotten or reshaped events. Some narrators supply what others cannot, and several narrators may contradict one another.',
    'Every narrator sees from somewhere: ask what they could know and what they want to say.',
    '## What narrators can and cannot know');
}

// 05 The Tell-Tale Heart: claims against evidence
{
  let b = '';
  const pairs = [
    ['DEFENSIVE ADDRESS', 'He asks: "why will you say that I am mad?"', 'He expects an accusation before anyone makes one'],
    ['OVER-INSISTENCE', '"True!—nervous—very, very dreadfully nervous"; "not destroyed—not dulled"', 'Dashes and repetition: a breathless tone, not calm'],
    ['SELF-CONTRADICTION', '"Object there was none. Passion there was none. I loved the old man."', 'The story is about murdering the old man'],
    ['TELLING AND SHOWING', '"observe how healthily—how calmly I can tell you"', 'The care of his plan reads as obsession, not sanity'],
  ];
  b += T(240, 126, 'What he claims', { size: 19, weight: 700, anchor: 'middle', fill: C.olive }) + T(680, 126, 'What the reader sees', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  let y = 142;
  pairs.forEach(([k, q, s]) => {
    const lh = cardH(410, { kicker: k, body: q, italic: true, size: 17, pad: 16 }), rh = cardH(370, { body: s, size: 17, pad: 16 });
    const h = Math.max(lh, rh);
    b += card(30, y, 410, { kicker: k, kfill: C.olive, body: q, italic: true, size: 17, pad: 16, bfill: C.ink, minH: h, fill: C.cream, edge: C.olive }).s;
    b += arrow(446, y + h / 2, 494, y + h / 2, { w: 3.5 });
    b += card(500, y, 370, { body: s, size: 17, pad: 16, bfill: C.ink, minH: h, vcenter: true, fill: C.tealLight, edge: C.tealDark }).s;
    y += h + 12;
  });
  const c = card(30, y + 10, 840, { kicker: 'FUNCTION', body: 'The reader knows more than the narrator, which produces irony and unease. His reliability is the story\'s main subject.', size: 17, bfill: C.ink });
  b += c.s;
  add('05-tell-tale-heart-signs',
    svg(900, y + 10 + c.h + 30, 'Worked example: The Tell-Tale Heart', b),
    'Four signs of unreliability in the opening of The Tell-Tale Heart. He asks why we will say he is mad; his dashes and repetition sound breathless; he claims he loved the old man though the story is about killing him; and he offers his calm telling as proof of sanity while revealing obsession.',
    'Poe\'s narrator offers his care as proof of sanity, and the reader sees the reverse.',
    '## Worked example 1: a narrator who undermines himself');
}

// 06 Lena and Marcus: positions and contradictions
{
  let b = '';
  // farmyard schematic
  b += panel(30, 110, 840, 250, '#eef2e6', C.panelEdge);
  b += T(50, 140, 'Positions on the night', { size: 18, weight: 700 });
  const house = (x, y, w, label, who, f) => `<rect x="${x}" y="${y}" width="${w}" height="100" rx="6" fill="${f}" stroke="${C.ink}" stroke-width="3"/><path d="M${x - 8},${y} L${x + w / 2},${y - 40} L${x + w + 8},${y} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` +
    T(x + w / 2, y + 40, label, { size: 18, weight: 700, anchor: 'middle' }) + T(x + w / 2, y + 66, who, { size: 16, anchor: 'middle', fill: C.muted, weight: 600 });
  b += house(70, 220, 200, 'Kitchen', 'Lena: hears', C.cream);
  b += house(630, 220, 200, 'Barn', 'Marcus: sees', C.tealLight);
  b += `<rect x="300" y="300" width="300" height="40" rx="6" fill="${C.sand}" opacity="0.8"/>` + T(450, 326, 'the yard', { size: 16, anchor: 'middle', fill: C.olive, weight: 600 });
  b += `<line x1="420" y1="210" x2="420" y2="290" stroke="${C.ink}" stroke-width="5"/><line x1="480" y1="210" x2="480" y2="290" stroke="${C.ink}" stroke-width="5"/>` + [0, 1, 2].map((i) => `<line x1="420" y1="${222 + i * 26}" x2="480" y2="${222 + i * 26}" stroke="${C.rockDark}" stroke-width="5"/>`).join('');
  b += T(450, 196, 'yard gate', { size: 16, anchor: 'middle', weight: 700 });
  // contradictions table
  const tb = table(30, 384, [{ w: 220, head: 'Point' }, { w: 310, head: 'Lena' }, { w: 310, head: 'Marcus' }], [
    ['Did Father go out?', 'Yes, "with the lantern", back "after midnight"', 'No: sat with Marcus "until near eleven"'],
    ['The yard gate', 'heard it at nine, "plain as day"', '"The gate was chained"'],
    ["Father's mood", '"a black temper"', '"as merry as he ever is"'],
    ['About the other', '(nothing)', '"Lena has a way of hearing things when she is angry at him"'],
  ], { size: 16, italicCols: [1, 2] });
  let y = 384 + tb.h + 20;
  const c = card(30, y, 840, { kicker: 'WHAT THE READER DOES', body: 'Weighs testimony: what each could see, what each wants, and what each says about the other. The contradiction may reveal family tensions or keep the event unknowable.', size: 17, bfill: C.ink, fill: C.cream, edge: C.olive, kfill: C.olive });
  b += c.s;
  add('06-two-narrators',
    svg(900, y + c.h + 30, 'Worked example: two accounts of one night', b),
    'A farmyard sketch shows Lena in the kitchen, able to hear the gate, and Marcus in the barn, able to see the yard. A table sets their accounts side by side: whether Father went out, whether the gate was chained, his mood, and Marcus\'s attempt to discredit Lena. The reader must weigh both.',
    'Each sibling knows what the other cannot, and neither account is neutral.',
    '## Worked example 2: two narrators who contradict');
}

// 07 Paragraph frame
{
  let b = '';
  const mv = [
    ['Claim', 'How far can the narrator be trusted, and about what?', '"reliable on events, doubtful on motives"'],
    ['Evidence', 'Quote the sign', 'a contradiction, an over-insistent claim, a gap'],
    ['Source', 'Why might the narrator distort?', 'self-interest, emotion, limited vantage'],
    ['Effect', 'What does the reader now do?', 'reads around the account, doubts a judgement, notices irony'],
    ['Significance', 'What does this reveal?', 'about the narrator, another character or the story\'s concerns'],
  ];
  let y = 110;
  mv.forEach(([k, q, ex], i) => {
    const h = 84;
    const f = i === 4 ? C.tealLight : C.panel, e = i === 4 ? C.tealDark : C.panelEdge;
    b += `<rect x="30" y="${y}" width="840" height="${h}" rx="14" fill="${f}" stroke="${e}" stroke-width="2.5"/>`;
    b += badge(70, y + h / 2, 22, String(i + 1), i === 4 ? C.mustard : C.cream);
    b += T(110, y + 36, k, { size: 20, weight: 700 }) + T(110, y + 62, q, { size: 16, fill: C.muted });
    b += `<line x1="470" y1="${y + 16}" x2="470" y2="${y + h - 16}" stroke="${C.panelEdge}" stroke-width="2"/>`;
    b += para(490, y + h / 2 + 6 - (wrap(ex, 360, 16, 400, true).length - 1) * 10, ex, 360, { size: 16, italic: true }).s;
    y += h + 10;
  });
  y += 14;
  const r = row(y, [
    { kicker: 'TONE', title: 'the attitude conveyed', body: 'A defensive tone is a clue, not proof' },
    { kicker: 'RELIABILITY', title: 'how far we trust the account', body: 'Confirm with a second sign, such as an omission or contradiction', fill: C.cream, edge: C.olive, kfill: C.olive },
  ], { card: { size: 16, tsize: 19 } });
  b += r.s;
  add('07-paragraph-frame',
    svg(900, y + r.h + 30, 'A paragraph on reliability in five moves', b),
    'Five moves for a paragraph: claim how far the narrator can be trusted, quote the evidence, name the source of distortion, state the effect on the reader, and explain the significance. Below, tone is distinguished from reliability: a defensive tone is a clue that needs a second sign.',
    'Claim, evidence, source, effect, significance; and never rest on tone alone.',
    '## Writing about reliability: a paragraph frame');
}
