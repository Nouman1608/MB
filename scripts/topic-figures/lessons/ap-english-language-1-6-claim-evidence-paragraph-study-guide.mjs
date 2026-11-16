import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

// ---------- local helpers (AP English Language figures) ----------
const _CH = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~’‘“”—–…é·•→×✓✗";
const _W = {"r":[281,288,466,633,642,982,644,300,365,365,501,662,288,460,288,360,631,407,610,618,646,608,620,566,619,620,288,302,662,662,662,511,966,690,654,730,722,601,590,746,743,269,571,672,565,903,753,765,639,765,644,642,646,744,690,985,682,679,629,365,360,365,471,456,323,562,612,571,612,583,370,613,591,242,242,549,242,876,591,600,612,612,376,528,327,591,562,818,546,562,552,426,333,426,662,261,261,440,440,1000,500,864,583,288,562,954,662,884,886],"b":[237,338,552,649,655,1016,672,339,377,377,559,679,334,468,334,388,674,431,630,646,676,639,649,582,651,649,334,343,679,679,679,560,1016,747,662,740,722,607,587,750,747,281,584,719,565,932,762,771,648,777,657,655,667,732,747,1038,738,731,664,377,388,377,487,476,365,581,630,588,630,596,398,632,623,271,271,580,271,913,623,613,630,630,407,560,366,623,600,850,580,602,573,469,372,469,679,311,311,540,532,1000,500,1002,596,334,474,954,679,882,883]};
const _M = { r: {}, b: {} };
for (const k of ['r', 'b']) [..._CH].forEach((c, i) => { _M[k][c] = _W[k][i]; });
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// estimated rendered width of plain text
const tw = (s, size = 18, bold = false) => { const m = _M[bold ? 'b' : 'r']; let n = 0; for (const c of String(s)) n += m[c] ?? 620; return (n / 1000) * size * 1.03; };
// rich text: **bold**  __italic__  {{teal bold}}  [[rust bold]]  ((olive bold))
function words(s) {
  const segs = []; let b = false, it = false, c = null, buf = '';
  const push = () => { if (buf) { segs.push({ s: buf, b, it, c }); buf = ''; } };
  for (let k = 0; k < s.length;) {
    const two = s.slice(k, k + 2);
    if (two === '**') { push(); b = !b; k += 2; continue; }
    if (two === '__') { push(); it = !it; k += 2; continue; }
    if (two === '{{') { push(); c = 'T'; k += 2; continue; }
    if (two === '[[') { push(); c = 'R'; k += 2; continue; }
    if (two === '((') { push(); c = 'O'; k += 2; continue; }
    if (two === '}}' || two === ']]' || two === '))') { push(); c = null; k += 2; continue; }
    buf += s[k]; k++;
  }
  push();
  const out = []; let cur = [];
  for (const g of segs) for (const p of g.s.split(/( )/)) {
    if (p === ' ') { if (cur.length) { out.push(cur); cur = []; } } else if (p) cur.push({ ...g, s: p });
  }
  if (cur.length) out.push(cur);
  return out;
}
const wordW = (wd, size, baseBold) => wd.reduce((a, p) => a + tw(p.s, size, baseBold || p.b || !!p.c), 0);
function wrapRich(s, maxW, size, baseBold) {
  const lines = [];
  for (const para of String(s).split('\n')) {
    const ws = words(para); let line = [], lw = 0; const sp = size * 0.28;
    for (const wd of ws) {
      const w = wordW(wd, size, baseBold);
      if (line.length && lw + sp + w > maxW) { lines.push(line); line = [wd]; lw = w; } else { lw += (line.length ? sp : 0) + w; line.push(wd); }
    }
    lines.push(line);
  }
  return lines;
}
const COL = { T: C.tealDark, R: C.rust, O: C.olive };
function lineSvg(x, y, line, { size, fill, weight, anchor, italic }) {
  let inner = '';
  line.forEach((wd, i) => {
    if (i) inner += ' ';
    for (const p of wd) {
      const a = [];
      if (p.b || p.c) a.push('font-weight="700"');
      if (p.c) a.push(`fill="${COL[p.c]}"`);
      if (p.it) a.push('font-style="italic"');
      inner += a.length ? `<tspan ${a.join(' ')}>${esc(p.s)}</tspan>` : esc(p.s);
    }
  });
  return `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}"${italic ? ' font-style="italic"' : ''} xml:space="preserve">${inner}</text>`;
}
// Paragraph. y = baseline of first line. Returns {s, h, n}
function P(x, y, s, o = {}) {
  const size = o.size || 18, w = o.w || 800, lh = o.lh || size * 1.32;
  const opts = { size, fill: o.fill || C.ink, weight: o.weight || 400, anchor: o.anchor || 'start', italic: !!o.italic };
  const lines = wrapRich(s, w, size, (o.weight || 400) >= 600);
  return { s: lines.map((ln, i) => lineSvg(x, y + i * lh, ln, opts)).join(''), h: lines.length * lh, n: lines.length };
}
const T = (x, y, s, o = {}) => P(x, y, s, { w: 5000, ...o }).s;
const rect = (x, y, w, h, fill = C.panel, edge = C.panelEdge, rx = 14, sw = 2.5, extra = '') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}" ${extra}/>`;
// Box with optional heading + body; auto height unless h given. Returns {s,h}
function box(x, y, w, o = {}) {
  const pad = o.pad ?? 18, hs = o.headSize || 20, bs = o.size || 17, align = o.align || 'start';
  const tx = align === 'middle' ? x + w / 2 : x + pad;
  const nat = o.vc && o.h ? box(x, y, w, { ...o, h: 0, vc: false }).h : 0;
  let inner = '', cy = y + pad + (o.vc && o.h ? Math.max(0, (o.h - nat) / 2) : 0);
  if (o.head) {
    const hp = P(tx + (o.headIndent || 0), cy + hs * 0.8, o.head, { size: hs, weight: 700, w: w - 2 * pad - (o.headIndent || 0), anchor: align, fill: o.headColor || C.ink });
    inner += hp.s; cy += hp.h + (o.body ? 4 : 0);
  }
  if (o.body) {
    const bp = P(tx, cy + bs * 0.85, o.body, { size: bs, w: w - 2 * pad, anchor: align, fill: o.bodyColor || C.ink, lh: o.lh });
    inner += bp.s; cy += bp.h;
  }
  const h = o.h || (cy - y + pad - 4);
  let band = '';
  if (o.bar) band = `<rect x="${x}" y="${y}" width="10" height="${h}" rx="5" fill="${o.bar}"/>`;
  return { s: rect(x, y, w, h, o.fill || C.panel, o.edge || C.panelEdge, o.rx ?? 14, o.sw ?? 2.5, o.dash ? `stroke-dasharray="${o.dash}"` : '') + band + inner, h };
}
// Row of equal-height boxes. items: array of box options. Returns {s,h,xs,w}
function row(x, y, totalW, gap, items) {
  const n = items.length, w = (totalW - gap * (n - 1)) / n;
  const h = Math.max(...items.map((it) => box(0, 0, it.w || w, it).h));
  const xs = items.map((_, i) => x + i * (w + gap));
  return { s: items.map((it, i) => box(xs[i], y, w, { ...it, h }).s).join(''), h, xs, w };
}
// Stack of full-width boxes with gap. Returns {s,h,ys,hs}
function stack(x, y, w, gap, items) {
  let s = '', cy = y; const ys = [], hs = [];
  for (const it of items) { const b = box(it.x ?? x, cy, it.w || w, it); s += b.s; ys.push(cy); hs.push(b.h); cy += b.h + gap; }
  return { s, h: cy - gap - y, ys, hs };
}
// Chip / pill label centred vertically on cy. Returns {s,w}
function chip(x, cy, text, o = {}) {
  const size = o.size || 16, padX = o.padX ?? 12, h = o.h || size + 14;
  const w = tw(text.replace(/\*\*|__|\{\{|\}\}|\[\[|\]\]|\(\(|\)\)/g, ''), size, true) + 2 * padX;
  const x0 = o.anchor === 'middle' ? x - w / 2 : o.anchor === 'end' ? x - w : x;
  return { s: rect(x0, cy - h / 2, w, h, o.fill || C.cream, o.edge || C.ink, h / 2, o.sw ?? 2) + T(x0 + w / 2, cy + size * 0.36, text, { size, weight: 700, anchor: 'middle', fill: o.color || C.ink }), w };
}
// Table with wrapped cells. cols = widths; rows = array of arrays; first row is header if o.head !== false. Returns {s,h}
function table(x, y, cols, rows, o = {}) {
  const size = o.size || 16, pad = o.pad || 12, W = cols.reduce((a, b) => a + b, 0);
  let s = '', cy = y;
  rows.forEach((r, ri) => {
    const isHead = ri === 0 && o.head !== false;
    const hs = r.map((c, ci) => P(0, 0, c, { size, w: cols[ci] - 2 * pad, weight: isHead ? 700 : 400 }).h);
    const rh = Math.max(...hs) + 2 * pad - 2;
    const fill = isHead ? (o.headFill || C.tealLight) : (o.rowFills && o.rowFills[ri]) || (ri % 2 && o.zebra ? '#f8faf9' : C.panel);
    s += `<rect x="${x}" y="${cy}" width="${W}" height="${rh}" fill="${fill}"/>`;
    let cx = x;
    r.forEach((c, ci) => {
      const cf = o.cellFill && o.cellFill(ri, ci);
      if (cf) s += `<rect x="${cx}" y="${cy}" width="${cols[ci]}" height="${rh}" fill="${cf}"/>`;
      s += P(cx + pad, cy + pad + size * 0.82, c, { size, w: cols[ci] - 2 * pad, weight: isHead || (o.boldFirst && ci === 0) ? 700 : 400 }).s;
      cx += cols[ci];
    });
    if (ri) s += `<line x1="${x}" y1="${cy}" x2="${x + W}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
    cy += rh;
  });
  let cx = x;
  cols.slice(0, -1).forEach((c) => { cx += c; s += `<line x1="${cx}" y1="${y}" x2="${cx}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="1.5"/>`; });
  s += rect(x, y, W, cy - y, 'none', C.ink, 12, 2.5);
  return { s, h: cy - y };
}
// Annotated sentence strip: items [{text, label, fill}] laid left-to-right, wrapping. Returns {s,h}
function chunks(x, y, maxW, items, o = {}) {
  const size = o.size || 18, ls = o.labelSize || 15, gap = o.gap ?? 10, ch = size + 18, rowGap = o.rowGap ?? 22;
  let cx = x, cy = y, s = '', rowH = 0;
  for (const it of items) {
    const tW = tw(it.text, size, false) + 20;
    const labW = it.label ? Math.min(tw(it.label, ls, true) + 10, o.minLabelW || 120) : 0;
    const w = Math.max(tW, labW);
    if (cx > x && cx + w > x + maxW) { cx = x; cy += rowH + rowGap; rowH = 0; }
    const fill = it.fill || C.panel;
    s += rect(cx, cy, w, ch, fill, it.fill ? C.ink : C.panelEdge, 8, it.fill ? 2 : 1.5);
    s += T(cx + w / 2, cy + ch / 2 + size * 0.35, it.text, { size, anchor: 'middle', italic: !!it.italic });
    let h = ch;
    if (it.label) {
      const lp = P(cx + w / 2, cy + ch + 8 + ls * 0.9, it.label, { size: ls, w: w, anchor: 'middle', weight: 700, fill: it.labelColor || C.tealDark, lh: ls * 1.22 });
      s += lp.s; h += 8 + lp.h + 2;
    }
    rowH = Math.max(rowH, h); cx += w + gap;
  }
  return { s, h: cy + rowH - y };
}
const line = (x1, y1, x2, y2, color = C.ink, w = 2.5, dash = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const curve = (d, color = C.ink, w = 3.5, marker = 'ah', dash = '') => `<path d="${d}" fill="none" stroke="${color}" stroke-width="${w}"${marker ? ` marker-end="url(#${marker})"` : ''}${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const circ = (cx, cy, r, fill = C.panel, edge = C.ink, sw = 2.5) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const num = (cx, cy, n, fill = C.cream, r = 20) => badge(cx, cy, r, String(n), fill);
// Figure wrapper: body is a function (y0) => {s, h} or a string with explicit height
export const figures = [];
function fig(name, title, sub, build, alt, caption, after) {
  const y0 = sub ? 122 : 96;
  const r = build(y0);
  const H = Math.ceil(y0 + r.h + 30);
  figures.push({ name, svg: svg(900, H, esc(title), r.s, sub ? esc(sub) : ''), alt, caption, after });
}
// ---------- end helpers ----------

export const slug = 'ap-english-language-1-6-claim-evidence-paragraph-study-guide';
const LESSON = 'src/content/ap-resources/english-language-and-composition/1-6-claim-evidence-paragraph-study-guide.md';

// 01 Paragraph pattern
fig('01-paragraph-pattern', 'A reliable paragraph pattern', 'Five moves, and how they compress in a timed essay', (y0) => {
  let s = '';
  const steps = [
    ['Claim', 'topic sentence: the point, in your own words', C.cream, C.ink],
    ['Lead-in', 'where the evidence comes from', C.panel, C.panelEdge],
    ['Evidence', 'quoted, paraphrased or summarised; embedded', C.tealLight, C.tealDark],
    ['Commentary', 'how the evidence supports the claim', C.teal, C.tealDark],
    ['Link', 'to the larger argument or next paragraph', C.panel, C.panelEdge],
  ];
  let y = y0;
  steps.forEach(([h, b, f, e], i) => {
    s += num(52, y + 28, i + 1, i === 3 ? C.mustard : C.cream, 18);
    s += box(84, y, 500, { head: h, body: b, size: 16, headSize: 19, fill: f, edge: e, h: 64, vc: true, pad: 14 }).s;
    y += 74;
  });
  // timed bar
  const bx = 640, bw = 230, top = y0, H = 74 * 5 - 10;
  s += T(bx + bw / 2, top + 14, 'Timed essay', { size: 18, weight: 700, anchor: 'middle' });
  const seg = [['1', 0.14, C.cream], ['2 + 3', 0.2, C.tealLight], ['4  Commentary', 0.52, C.teal], ['5', 0.14, C.panel]];
  let sy = top + 30; const avail = H - 30;
  seg.forEach(([l, p, f]) => {
    const h = avail * p;
    s += rect(bx, sy, bw, h - 4, f, C.ink, 8, 2) + T(bx + bw / 2, sy + h / 2 + 5, l, { size: 17, weight: 700, anchor: 'middle' });
    sy += h;
  });
  s += P(450, y0 + H + 34, 'Steps 2 and 3 can share one sentence; most of the space goes to commentary.', { size: 17, anchor: 'middle', w: 820, fill: C.muted }).s;
  return { s, h: H + 46 };
}, 'Five numbered steps of a body paragraph: claim, lead-in, evidence, commentary and link. Beside them a bar shows a timed-essay paragraph in which lead-in and evidence share one sentence and commentary takes about half the space.',
'Claim, lead-in, evidence, commentary, link: a starting point, not a formula.', '## A reliable paragraph pattern');

// 02 Quotation, paraphrase, summary
fig('02-quote-paraphrase-summary', 'Three ways to use a source', '', (y0) => {
  let s = '';
  s += rect(30, y0, 520, 46, C.panel, C.ink, 8, 2.5) + T(290, y0 + 30, 'Source passage', { size: 18, weight: 700, anchor: 'middle' });
  const m = [
    ['Quotation', 520, 'exact words, quoted', 'when the wording itself matters', 'overquoting; leaving it unexplained', C.cream, C.olive],
    ['Paraphrase', 505, 'new words and structure, same length', 'when the idea matters more than the wording', 'staying too close to the original wording', C.tealLight, C.tealDark],
    ['Summary', 220, 'condensed to the main point only', 'when you need the gist of a long section', 'distorting meaning or adding opinion', C.panel, C.ink],
  ];
  let y = y0 + 76;
  m.forEach(([h, w, what, when, dang, f, e]) => {
    s += rect(30, y, w, 40, f, e, 8, 2.5) + T(46, y + 27, h, { size: 18, weight: 700, fill: e === C.ink ? C.ink : e });
    s += T(w + 46, y + 27, what, { size: 16, fill: C.muted, italic: true }).replace(/^/, '');
    s += P(46, y + 68, `**Use:** ${when}`, { size: 16, w: 400 }).s;
    s += P(470, y + 68, `[[Danger:]] ${dang}`, { size: 16, w: 400 }).s;
    y += 108;
  });
  s += line(550, y0 + 46, 550, y0 + 76, C.panelEdge, 2, '5 5');
  s += box(30, y + 2, 840, { body: 'Whichever you use: **credit the source** and **connect it to your claim**.', size: 17, align: 'middle', fill: C.cream, edge: C.olive }).s;
  return { s, h: y + 56 - y0 };
}, 'Bars compare a source passage with three ways of using it: a quotation copies exact words, a paraphrase restates the idea in new words at about the same length, and a summary condenses it to the main point. Each has a use and a danger, and all must credit the source and connect to the claim.',
'Quote for wording, paraphrase for the idea, summarise for the gist.', '## Three ways to use a source');

// 03 Dropped vs embedded
fig('03-dropped-vs-embedded', 'Dropped or embedded?', '', (y0) => {
  let s = '';
  s += T(30, y0 + 10, 'Dropped: the quotation stands alone', { size: 19, weight: 700, fill: C.rust });
  const d = chunks(30, y0 + 28, 840, [
    { text: 'Lincoln wants to heal the nation.', label: 'claim', fill: C.panel },
    { text: '“With malice toward none, with charity for all.”', label: 'quotation, no link', fill: '#f6e3d8', labelColor: C.rust },
    { text: 'This shows his tone.', label: 'vague comment', fill: C.panel, labelColor: C.rust },
  ], { size: 18, minLabelW: 120 });
  s += d.s;
  let y = y0 + 28 + d.h + 40;
  s += T(30, y, 'Embedded: the quotation is part of your sentence', { size: 19, weight: 700, fill: C.tealDark });
  const e = chunks(30, y + 18, 840, [
    { text: 'Lincoln’s call for', label: 'your grammar', fill: C.panel },
    { text: '“malice toward none”', label: 'quoted phrase', fill: C.cream },
    { text: 'and', fill: C.panel },
    { text: '“charity for all”', label: 'quoted phrase', fill: C.cream },
    { text: 'shifts the aim of the war’s final months', label: 'your verb and claim', fill: C.tealLight },
    { text: 'from vengeance to reconciliation.', fill: C.tealLight },
  ], { size: 18, gap: 6, minLabelW: 120 });
  s += e.s;
  y += 18 + e.h + 30;
  const tech = [
    ['Short phrase in your grammar', '...his call for “malice toward none”...'],
    ['Signal phrase + comma or colon', 'As Lincoln urges, “let us strive on...”'],
    ['Object of a verb', 'Lincoln asks the country to act “with firmness in the right”.'],
    ['Change nothing inside', 'except with brackets or ellipses that keep the meaning'],
  ];
  const r1 = row(30, y, 840, 16, tech.slice(0, 2).map(([h, b]) => ({ head: h, body: b, size: 16, headSize: 17, pad: 14 })));
  const r2 = row(30, y + r1.h + 14, 840, 16, tech.slice(2).map(([h, b]) => ({ head: h, body: b, size: 16, headSize: 17, pad: 14 })));
  s += r1.s + r2.s;
  return { s, h: y + r1.h + r2.h + 14 - y0 };
}, 'A dropped quotation, “With malice toward none, with charity for all”, sits alone between a claim and a vague comment. In the embedded version the phrases “malice toward none” and “charity for all” sit inside the writer’s own sentence about shifting from vengeance to reconciliation. Four embedding techniques are listed below.',
'An embedded quotation reads as part of your argument, grammatically and logically.', '## Embedding: weaving a quotation into your own sentence');

// 04 Signal verbs
fig('04-signal-verbs', 'Signal verbs carry meaning', 'Choose the verb that matches what the source is doing', (y0) => {
  let s = '';
  const g = [
    ['states · notes · observes', 'a neutral report', C.panel],
    ['urges · calls on · appeals to', 'the writer wants action', C.tealLight],
    ['warns · cautions', 'a threat or risk', '#f6e3d8'],
    ['concedes · admits', 'grants a point to an opponent', C.cream],
    ['insists · asserts · maintains', 'a strongly held claim', C.teal],
  ];
  let y = y0;
  g.forEach(([v, m, f]) => {
    s += rect(30, y, 400, 54, f, C.ink, 27, 2.5) + T(230, y + 34, v, { size: 19, weight: 700, anchor: 'middle' });
    s += arrow(436, y + 27, 480, y + 27, { w: 3 });
    s += T(494, y + 34, m, { size: 19 });
    y += 68;
  });
  y += 6;
  const r = row(30, y, 840, 24, [
    { head: 'Not “proves”', body: 'for a statement that only suggests', size: 16, edge: C.rust, align: 'middle' },
    { head: 'Not “shows”', body: 'for an opinion', size: 16, edge: C.rust, align: 'middle' },
  ]);
  s += r.s;
  return { s, h: y + r.h - y0 };
}, 'Five groups of signal verbs and what they suggest: states, notes and observes for a neutral report; urges and calls on for action; warns and cautions for a risk; concedes and admits for granting a point; insists and maintains for a strongly held claim. Notes warn against “proves” and “shows” when the source only suggests or opines.',
'“Says” is neutral; verbs like “urges” or “concedes” show the writer’s stance.', '## Signal verbs and what they tell the reader');

// 05 Strong Lincoln paragraph anatomy
fig('05-lincoln-paragraph-anatomy', 'Anatomy of the strong paragraph', 'Lincoln, Second Inaugural Address, 4 March 1865', (y0) => {
  let s = '';
  const parts = [
    ['Lincoln’s Second Inaugural Address uses its closing paragraph to turn the audience from the bitterness of war toward the work of rebuilding.', 'Claim', 'in the writer’s own words', C.cream, C.ink],
    ['By asking the nation to proceed “with malice toward none, with charity for all,” he removes revenge from the agenda before the war has even ended.', 'Embedded evidence', 'object of “proceed”', C.tealLight, C.tealDark],
    ['The sentence continues with a demand that is practical rather than sentimental: “let us strive on to finish the work we are in.”', 'Evidence after a colon', 'extends the point', C.tealLight, C.tealDark],
    ['The word “work” casts peace as a task, and “strive” makes it demanding, so the audience is asked to labour for reconciliation, not merely to wish for it.', 'Commentary', 'zooms in on single words', C.teal, C.tealDark],
  ];
  let y = y0;
  parts.forEach(([txt, lab, note, f, e], i) => {
    const a = box(30, y, 590, { body: txt, size: 17, fill: f, edge: e, pad: 14 });
    s += a.s;
    s += `<path d="M626,${y + 4} q10,0 10,10 L636,${y + a.h - 14} q0,10 -10,10" fill="none" stroke="${e}" stroke-width="3"/>`;
    s += P(652, y + a.h / 2 - 4, `**${lab}**`, { size: 18, w: 220, fill: e === C.ink ? C.olive : C.tealDark }).s;
    s += P(652, y + a.h / 2 + 18, note, { size: 16, w: 220, fill: C.muted }).s;
    y += a.h + 10;
  });
  y += 10;
  s += box(30, y, 840, { body: '**Cover the quotations.** Still a readable paragraph? Then the quotations serve the argument instead of replacing it.', size: 17, align: 'middle', fill: C.panel, edge: C.olive, dash: '7 5' }).s;
  return { s, h: y + 56 - y0 };
}, 'The strong paragraph about Lincoln’s Second Inaugural split into four parts: a claim in the writer’s own words, a quotation embedded as the object of “proceed”, a second quotation introduced after a colon, and commentary on the words “work” and “strive”. A note suggests covering the quotations to test the paragraph.',
'Claim, embedded evidence and commentary on single words: no evidence left unexplained.', '## Worked example 1: from dropped quotation to embedded evidence');
