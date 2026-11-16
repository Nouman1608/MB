import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-cambridge-sociology-media-ownership-and-control';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers (sociology figures: wrapped text, tables, flows, cards) ----
const esc = (s) => String(s).replace(/&(?![a-z]+;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const CW = 0.505, CWB = 0.555; // average glyph width / font size for Inter (regular, bold)
function wrap(s, maxPx, size = 17, bold = false) {
  const maxCh = Math.floor(maxPx / (size * (bold ? CWB : CW)));
  const lines = [''];
  for (const w of String(s).split(/\s+/)) {
    const cur = lines[lines.length - 1];
    if (cur && (cur + ' ' + w).replace(/\*\*/g, '').length > maxCh) lines.push(w);
    else lines[lines.length - 1] = cur ? cur + ' ' + w : w;
  }
  return lines;
}
// **bold** spans inside a wrapped paragraph
function rich(lines) {
  let open = false;
  return lines.map((l) => {
    let out = open ? '<tspan font-weight="700">' : '';
    l.split('**').forEach((p, i) => { if (i > 0) { open = !open; out += open ? '<tspan font-weight="700">' : '</tspan>'; } out += esc(p); });
    return out + (open ? '</tspan>' : '');
  });
}
// paragraph: y is first baseline; returns {svg, h} where h = lines * lh
function para(x, y, w, s, o = {}) {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32);
  const lines = rich(wrap(s, w, size, (o.weight || 400) >= 600));
  return { svg: tl(x, y, lines, { size, weight: o.weight || 400, fill: o.fill || C.ink, anchor: o.anchor || 'start', italic: o.italic }, lh), h: lines.length * lh, n: lines.length };
}
function bullets(x, y, w, items, o = {}) {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32), gap = o.gap ?? 8;
  let s = '', h = 0;
  for (const it of items) {
    s += `<circle cx="${x + 5}" cy="${y + h - size * 0.33}" r="4.5" fill="${o.dot || C.tealDark}"/>`;
    const p = para(x + 18, y + h, w - 18, it, { size, lh, fill: o.fill || C.ink });
    s += p.svg; h += p.h + gap;
  }
  return { svg: s, h: h - gap };
}
const roundTop = (x, y, w, h, r = 14) => `M${x},${y + h} L${x},${y + r} Q${x},${y} ${x + r},${y} L${x + w - r},${y} Q${x + w},${y} ${x + w},${y + r} L${x + w},${y + h} Z`;
// panel with a coloured header band
function headPanel(x, y, w, h, head, o = {}) {
  const size = o.size || 20, hp = para(x + w / 2, 0, w - 28, head, { size, weight: 700, anchor: 'middle' });
  const hh = o.hh || Math.max(50, hp.h + 22);
  const hp2 = para(x + w / 2, y + (hh - hp.h) / 2 + size * 0.95, w - 28, head, { size, weight: 700, anchor: 'middle', fill: o.headInk || C.ink });
  return { svg: panel(x, y, w, h, o.body || C.panel, o.edge || C.panelEdge) + `<path d="${roundTop(x + 1.25, y + 1.25, w - 2.5, hh - 1.25, 13)}" fill="${o.fill || C.teal}"/>` + `<line x1="${x + 1.25}" y1="${y + hh}" x2="${x + w - 1.25}" y2="${y + hh}" stroke="${o.edge || C.panelEdge}" stroke-width="2"/>` + hp2.svg, hh };
}
const headH = (w, head, size = 20) => Math.max(50, para(0, 0, w - 28, head, { size, weight: 700 }).h + 22);
// content block measured: kind 'text' | 'bullets'
function block(x, y, w, c, o = {}) { return Array.isArray(c) ? bullets(x, y, w, c, o) : para(x, y, w, c, o); }
// note strip (cream) full width
function note(y, head, text, o = {}) {
  const x = o.x ?? 30, w = o.w ?? 840, size = o.size || 17;
  const hp = head ? para(x + 26, y + 36, w - 52, head, { size: 19, weight: 700, fill: o.headFill || C.ink }) : { svg: '', h: 0 };
  const bp = text ? block(x + 26, y + 36 + hp.h + (head ? 4 : 0), w - 52, text, { size, fill: o.fill || C.ink, dot: C.olive }) : { svg: '', h: 0 };
  const lh = Math.round(size * 1.32), h = 36 + hp.h + (head && text ? 4 : 0) + (text ? bp.h - lh : -25) + 24;
  return { svg: panel(x, y, w, h, o.bg || C.cream, o.edgeC || C.olive) + hp.svg + bp.svg, h };
}
// Comparison grid: cols [{head, fill}], rows [{label, cells:[text|[bullets]]}]
function compareFig(title, { sub, cols, rows, labelW = 150, size = 16, foot, headSize = 19, y0 }) {
  let y = y0 ?? (sub ? 120 : 104); const gap = 8, n = cols.length;
  const x0 = 30 + (labelW ? labelW + gap : 0), cw = (870 - x0 - gap * (n - 1)) / n;
  const hh = Math.max(...cols.map((c) => headH(cw, c.head, headSize) - 6));
  let s = '';
  cols.forEach((c, i) => {
    const x = x0 + i * (cw + gap), hp = para(x + cw / 2, 0, cw - 20, c.head, { size: headSize, weight: 700, anchor: 'middle' });
    s += `<rect x="${x}" y="${y}" width="${cw}" height="${hh}" rx="12" fill="${c.fill || C.teal}" stroke="${C.ink}" stroke-width="2"/>` + para(x + cw / 2, y + (hh - hp.h) / 2 + headSize * 0.93, cw - 20, c.head, { size: headSize, weight: 700, anchor: 'middle', fill: c.ink || C.ink }).svg;
  });
  y += hh + gap;
  for (const r of rows) {
    const ms = r.cells.map((c) => block(0, 0, cw - 28, c, { size }).h);
    const lp = labelW ? para(0, 0, labelW - 24, r.label, { size: 17, weight: 700 }) : { h: 0 };
    const rh = Math.max(...ms, lp.h) + 30;
    if (labelW) s += `<rect x="30" y="${y}" width="${labelW}" height="${rh}" rx="10" fill="${r.fill || C.cream}" stroke="${C.olive}" stroke-width="2"/>` + para(42, y + (rh - lp.h) / 2 + 17 * 0.95, labelW - 24, r.label, { size: 17, weight: 700 }).svg;
    r.cells.forEach((c, i) => {
      const x = x0 + i * (cw + gap);
      s += `<rect x="${x}" y="${y}" width="${cw}" height="${rh}" rx="10" fill="${r.cellFill?.[i] || C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + block(x + 14, y + 15 + size * 0.95, cw - 28, c, { size }).svg;
    });
    y += rh + gap;
  }
  if (foot) { const f = note(y + 8, foot.head, foot.text); s += f.svg; y += f.h + 8; }
  return svg(900, Math.round(y + 24), esc(title), s, sub && esc(sub));
}
// Card grid: cards [{head, sub, body, fill}] in ncol columns, equal heights per row
function cardsFig(title, { sub, cards, ncol = 2, size = 16, foot, y0, headSize = 20, badges = false }) {
  let y = y0 ?? (sub ? 120 : 104); const gap = 16, cw = (840 - gap * (ncol - 1)) / ncol;
  let s = '';
  for (let r = 0; r < cards.length; r += ncol) {
    const row = cards.slice(r, r + ncol);
    const hhs = row.map((c) => headH(cw - (badges ? 50 : 0), c.head, headSize));
    const hh = Math.max(...hhs);
    const bodies = row.map((c) => (c.sub ? para(0, 0, cw - 32, c.sub, { size: size, italic: true }).h + 8 : 0) + block(0, 0, cw - 32, c.body, { size }).h);
    const ch = hh + Math.max(...bodies) + 36;
    row.forEach((c, i) => {
      const x = 30 + i * (cw + gap);
      const hp = headPanel(x, y, cw, ch, c.head, { fill: c.fill || C.teal, hh, size: headSize });
      s += hp.svg;
      if (badges) s += badge(x + 34, y + hh / 2, 18, String(r + i + 1), C.cream);
      let yy = y + hh + 18 + size * 0.95;
      if (c.sub) { const sp = para(x + 16, yy, cw - 32, c.sub, { size, fill: C.tealDark, weight: 600 }); s += sp.svg; yy += sp.h + 8; }
      s += block(x + 16, yy, cw - 32, c.body, { size, dot: c.dot }).svg;
    });
    y += ch + gap;
  }
  if (foot) { const f = note(y - gap + 16, foot.head, foot.text); s += f.svg; y += f.h; }
  return svg(900, Math.round(y + 14), esc(title), s, sub && esc(sub));
}
// Vertical flow: steps [{head, body, fill}] joined by arrows; optional side labels
function flowFig(title, { sub, steps, size = 17, foot, y0, numbered = true, arrowLabels = [] }) {
  let y = y0 ?? (sub ? 120 : 104); const ag = 46; let s = '';
  steps.forEach((st, i) => {
    const tx = numbered ? 104 : 56, tw = 870 - tx - 26;
    const hp = para(tx, 0, tw, st.head, { size: 20, weight: 700 });
    const bp = st.body ? block(tx, 0, tw, st.body, { size }) : { h: 0 };
    const h = 26 + hp.h + (st.body ? 6 + bp.h : 0) + 16;
    s += panel(30, y, 840, h, st.fill || C.panel, st.edge || C.panelEdge);
    if (numbered) s += badge(67, y + h / 2, 21, String(st.n ?? i + 1), st.badge || (i === steps.length - 1 ? C.mustard : C.cream));
    s += para(tx, y + 24 + 20 * 0.78, tw, st.head, { size: 20, weight: 700, fill: st.ink || C.ink }).svg;
    if (st.body) s += block(tx, y + 24 + hp.h + 6 + size * 0.78, tw, st.body, { size, fill: C.ink }).svg;
    y += h;
    if (i < steps.length - 1) {
      s += arrow(450, y + 4, 450, y + ag - 6, { w: 3.5 });
      if (arrowLabels[i]) s += t(470, y + ag / 2 + 6, esc(arrowLabels[i]), { size: 16, fill: C.tealDark, weight: 600, italic: true });
      y += ag;
    }
  });
  if (foot) { const f = note(y + 18, foot.head, foot.text); s += f.svg; y += f.h + 18; }
  return svg(900, Math.round(y + 26), esc(title), s, sub && esc(sub));
}
// Two-sided debate: left/right {head, sub, items, fill}, optional verdict note
function versusFig(title, { sub, left, right, foot, size = 17, y0 }) {
  let y = y0 ?? (sub ? 120 : 104); const w = 404, xs = [30, 466]; let s = '';
  const sides = [left, right];
  const hh = Math.max(...sides.map((d) => headH(w, d.head, 21)));
  const hs = sides.map((d) => (d.sub ? para(0, 0, w - 36, d.sub, { size: 16 }).h + 10 : 0) + block(0, 0, w - 36, d.items, { size }).h);
  const ph = hh + Math.max(...hs) + 40;
  sides.forEach((d, i) => {
    const x = xs[i];
    s += headPanel(x, y, w, ph, d.head, { fill: d.fill || (i ? C.cream : C.teal), hh, size: 21 }).svg;
    let yy = y + hh + 22 + 16 * 0.9;
    if (d.sub) { const sp = para(x + 18, yy, w - 36, d.sub, { size: 16, fill: C.muted, italic: true }); s += sp.svg; yy += sp.h + 10; }
    s += block(x + 18, yy, w - 36, d.items, { size, dot: i ? C.olive : C.tealDark }).svg;
  });
  s += `<circle cx="450" cy="${y + ph / 2}" r="24" fill="${C.ink}"/>` + t(450, y + ph / 2 + 7, 'vs', { size: 19, weight: 700, fill: '#ffffff', anchor: 'middle' });
  y += ph;
  if (foot) { const f = note(y + 18, foot.head, foot.text); s += f.svg; y += f.h + 18; }
  return svg(900, Math.round(y + 26), esc(title), s, sub && esc(sub));
}
// Horizontal chain of 2-5 boxes with arrows between; returns {svg,h}
function hchain(y, items, o = {}) {
  const n = items.length, ag = o.ag || 40, w = (840 - ag * (n - 1)) / n, size = o.size || 16;
  const hs = items.map((it) => (it.head ? para(0, 0, w - 24, it.head, { size: 18, weight: 700 }).h + 6 : 0) + (it.body ? para(0, 0, w - 24, it.body, { size }).h : 0));
  const h = Math.max(...hs) + 34; let s = '';
  items.forEach((it, i) => {
    const x = 30 + i * (w + ag);
    s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${it.fill || C.panel}" stroke="${it.edge || C.ink}" stroke-width="2.5"/>`;
    let yy = y + (h - hs[i]) / 2 + 18 * 0.85;
    if (it.head) { const hp = para(x + w / 2, yy, w - 24, it.head, { size: 18, weight: 700, anchor: 'middle' }); s += hp.svg; yy += hp.h + 6; }
    if (it.body) s += para(x + w / 2, yy, w - 24, it.body, { size, anchor: 'middle', fill: it.head && (!it.fill || it.fill === C.panel) ? C.muted : C.ink }).svg;
    if (i < n - 1 && o.arrows !== false) s += arrow(x + w + 4, y + h / 2, x + w + ag - 4, y + h / 2, { w: 3.5 });
  });
  return { svg: s, h };
}
const label = (x, y, s, o = {}) => t(x, y, esc(s), o);
// One row of header cards across a given x-range; returns {svg, h}
function cardRow(y, cards, o = {}) {
  const x0 = o.x ?? 30, W = o.w ?? 840, gap = o.gap ?? 16, n = cards.length, cw = (W - gap * (n - 1)) / n, size = o.size || 16, hs = o.headSize || 19;
  const hh = Math.max(...cards.map((c) => headH(cw, c.head, hs)));
  const bodies = cards.map((c) => (c.sub ? para(0, 0, cw - 28, c.sub, { size, weight: 600 }).h + 6 : 0) + block(0, 0, cw - 28, c.body, { size }).h);
  const ch = hh + Math.max(...bodies) + 34; let s = '';
  cards.forEach((c, i) => {
    const x = x0 + i * (cw + gap);
    s += headPanel(x, y, cw, ch, c.head, { fill: c.fill || C.teal, hh, size: hs }).svg;
    let yy = y + hh + 16 + size * 0.95;
    if (c.sub) { const sp = para(x + 14, yy, cw - 28, c.sub, { size, fill: C.tealDark, weight: 600 }); s += sp.svg; yy += sp.h + 6; }
    s += block(x + 14, yy, cw - 28, c.body, { size, dot: c.dot }).svg;
  });
  return { svg: s, h: ch };
}
// ---- end helpers ----

// 01 Traditional (one-to-many) vs new (many-to-many) media
{
  const node = (x, y, r, f) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
  // left: broadcaster to audience
  const bx = 235, by = 200;
  const aud = [[85, 345], [160, 360], [235, 367], [310, 360], [385, 345]];
  let L = aud.map(([x, y]) => arrow(bx + (x - bx) * 0.2, by + 30, x + (bx - x) * 0.12, y - 22, { w: 2.5 })).join('') +
    `<rect x="${bx - 70}" y="${by - 34}" width="140" height="64" rx="10" fill="${C.ink}"/>` + label(bx, by + 6, 'Broadcaster', { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' }) +
    aud.map(([x, y]) => node(x, y, 16, C.cream)).join('') + label(bx, 418, 'audience', { size: 16, anchor: 'middle', fill: C.muted });
  // right: mesh
  const pts = [[560, 200], [665, 172], [770, 205], [800, 305], [720, 375], [600, 370], [530, 290], [665, 278]];
  const edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0], [7, 0], [7, 2], [7, 4], [7, 6], [1, 7], [3, 7], [5, 7], [0, 5], [2, 4]];
  let R = edges.map(([a, b]) => `<line x1="${pts[a][0]}" y1="${pts[a][1]}" x2="${pts[b][0]}" y2="${pts[b][1]}" stroke="${C.tealDark}" stroke-width="2.5"/>`).join('') +
    pts.map(([x, y]) => node(x, y, 16, C.teal)).join('') + label(665, 418, 'users create and share', { size: 16, anchor: 'middle', fill: C.muted });
  const head = (x, s, f) => `<rect x="${x}" y="104" width="410" height="0" fill="${f}"/>` + label(x + 205, 128, s, { size: 22, weight: 700, anchor: 'middle' });
  const rows = [
    ['One-to-many', 'Many-to-many, interactive'],
    ['Professional producers, editorial gatekeepers', 'User-generated content, algorithmic curation'],
    ['Scheduled, linear', 'On demand, mobile, always on'],
    ['National audiences and regulation', 'Global reach; harder to regulate'],
    ['High entry cost', 'Low entry cost for producers'],
  ];
  let y = 452, T = '';
  for (const [a, b] of rows) {
    const h = Math.max(para(0, 0, 370, a, { size: 17 }).h, para(0, 0, 370, b, { size: 17 }).h) + 22;
    T += `<rect x="30" y="${y}" width="410" height="${h}" rx="8" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + para(235, y + 27, 370, a, { size: 17, anchor: 'middle' }).svg;
    T += `<rect x="460" y="${y}" width="410" height="${h}" rx="8" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2"/>` + para(665, y + 27, 370, b, { size: 17, anchor: 'middle' }).svg;
    y += h + 6;
  }
  add('01-traditional-vs-new-media',
    svg(900, Math.round(y + 20), 'Traditional media and new media',
      panel(30, 100, 410, 336) + panel(460, 100, 410, 336) + head(30, 'Traditional media') + head(460, 'New media') + L + R + T),
    'Left: a single broadcaster sends content one-way to many audience members. Right: a network of users all connected to each other. Below, traditional media are one-to-many, gatekept, scheduled, national and costly to enter; new media are many-to-many, user-generated, on demand, global and cheap to enter.',
    'Traditional media broadcast from one to many; new media connect many to many.',
    '## How do traditional and new media differ?');
}

// 02 Four theories of media control
add('02-theories-of-control',
  compareFig('Who controls the media?', {
    labelW: 160, size: 16,
    cols: [{ head: 'Who or what controls?', fill: C.teal }, { head: 'How it works', fill: C.teal }, { head: 'Key names or ideas', fill: C.tealLight }],
    rows: [
      { label: 'Pluralism', cells: ['Audiences, through a market of many competing groups', 'Owners must give audiences what they want; journalists value independence; regulation protects balance', 'Public-service broadcasting as a safeguard'] },
      { label: 'Instrumental Marxism', cells: ['Owners', 'Media deliberately spread ruling-class ideology: **mass manipulation**', 'Miliband (1969); Herman and Chomsky (1988)'] },
      { label: 'Neo-Marxism', cells: ['Ruling-class ideas (**hegemony**)', 'Middle-class journalists share a common-sense view of the world; no orders needed', 'Gramsci; Glasgow University Media Group (1976); Hall'] },
      { label: 'Post-modernism', cells: ['No single source', 'Images become **hyperreal**; fragmented audiences create their own meanings', 'Baudrillard (1981)'] },
    ],
    foot: { head: 'Criticisms', text: ['**Pluralism:** ownership is highly concentrated, and audiences can only choose from what is offered', '**Postmodernism:** underplays the economic power of media corporations'] },
  }),
  'A grid compares pluralism, instrumental Marxism, neo-Marxism and postmodernism on who controls the media, how control works and key sociologists. Pluralists say audiences, instrumental Marxists say owners, neo-Marxists say hegemonic ruling-class ideas, and postmodernists say no single source.',
  'Theories disagree on whether audiences, owners, shared ideas or no one controls the media.',
  '## Who controls the media? The main theories');

// 03 Propaganda model: five filters
{
  const fl = [['Ownership', ''], ['Advertising', ''], ['Official sources', 'reliance on them'], ['“Flak”', ''], ['Anti-communism', '']];
  let s = `<rect x="80" y="108" width="740" height="60" rx="12" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>` + label(450, 146, 'All possible events and stories', { size: 20, weight: 700, anchor: 'middle' });
  fl.forEach(([h, sub], i) => {
    const y = 196 + i * 70, inset = 40 + i * 50;
    s += `<path d="M${30 + inset},${y} L${870 - inset},${y} L${870 - inset - 25},${y + 56} L${30 + inset + 25},${y + 56} Z" fill="${i % 2 ? C.cream : C.sand}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>` +
      badge(30 + inset + 50, y + 28, 17, String(i + 1), C.panel) +
      label(450, y + 36, h + (sub ? ` (${sub})` : ''), { size: 19, weight: 700, anchor: 'middle' });
  });
  const ey = 196 + 5 * 70 + 10;
  s += arrow(450, ey - 10, 450, ey + 34, { w: 4 }) + `<rect x="300" y="${ey + 40}" width="300" height="60" rx="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + label(450, ey + 78, 'The news we see', { size: 20, weight: 700, anchor: 'middle' });
  add('03-propaganda-model',
    svg(900, ey + 126, 'Herman and Chomsky’s propaganda model', s),
    'A funnel in which all possible stories pass through five filters: ownership, advertising, reliance on official sources, flak and anti-communism, leaving the news that is published.',
    'Five filters narrow all possible stories down to the news that fits elite interests.',
    '## Who controls the media? The main theories');
}

// 04 Manipulation vs hegemony
{
  const r1 = hchain(160, [
    { head: 'Owners', fill: C.teal }, { head: 'Give orders', body: 'direct control', fill: C.panel }, { head: 'Journalists comply', fill: C.panel }, { head: 'Ruling-class ideology', fill: C.cream }], { ag: 34 });
  const y2 = 160 + r1.h + 90;
  const r2 = hchain(y2, [
    { head: 'Journalists', body: 'mostly middle-class backgrounds', fill: C.panel }, { head: 'Shared common sense', body: 'no orders needed', fill: C.panel }, { head: 'Ruling-class ideas dominate', fill: C.cream }], { ag: 34 });
  add('04-manipulation-hegemony',
    svg(900, Math.round(y2 + r2.h + 30), 'Manipulation or hegemony?',
      label(30, 140, 'Instrumental Marxism: mass manipulation (Miliband)', { size: 20, weight: 700, fill: C.tealDark }) + r1.svg +
      label(30, y2 - 20, 'Neo-Marxism: hegemony (Gramsci; Glasgow University Media Group)', { size: 20, weight: 700, fill: C.olive }) + r2.svg),
    'Top chain: in the manipulation model owners give orders, journalists comply and ruling-class ideology is spread. Bottom chain: in the hegemonic model mostly middle-class journalists share a common-sense view, so ruling-class ideas dominate without orders.',
    'Manipulation is deliberate control by owners; hegemony works through shared assumptions.',
    '## Who controls the media? The main theories');
}

// 05 Influences on news selection (hub)
{
  const cx = 450, cy = 400;
  const items = [
    ['News values', 'negativity, elite persons, unexpectedness, proximity (Galtung and Ruge, 1965)'],
    ['Gatekeeping', 'editors set the agenda'],
    ['Commercial pressures', 'advertising, audiences, clicks'],
    ['Owners', 'direct or indirect influence'],
    ['Sources', 'official spokespeople and PR material'],
    ['Practical constraints', 'deadlines, budgets, location of journalists'],
    ['Censorship', 'state, legal limits, regulation, self-censorship'],
  ];
  const W = 250, pos = [[30, 108], [325, 108], [620, 108], [620, 300], [620, 492], [30, 492], [30, 300]];
  let s = '';
  items.forEach(([h, b], i) => {
    const [x, y] = pos[i];
    const bp = para(0, 0, W - 28, b, { size: 16 });
    const hh = 44 + bp.h + 10;
    const bxc = x + W / 2, byc = y + hh / 2;
    const dx = bxc - cx, dy = byc - cy, L = Math.hypot(dx, dy);
    s += `<line x1="${cx + (dx / L) * 92}" y1="${cy + (dy / L) * 62}" x2="${bxc - (dx / L) * (Math.abs(dx) > Math.abs(dy) * 1.5 ? 130 : 30)}" y2="${byc - (dy / L) * (Math.abs(dy) > 10 ? hh / 2 + 6 : 0)}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += `<rect x="${x}" y="${y}" width="${W}" height="${hh}" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + label(x + 14, y + 30, h, { size: 19, weight: 700 }) + para(x + 14, y + 54, W - 28, b, { size: 16, fill: C.muted }).svg;
  });
  s += `<ellipse cx="${cx}" cy="${cy}" rx="110" ry="70" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + label(cx, cy - 4, 'What becomes', { size: 19, weight: 700, anchor: 'middle' }) + label(cx, cy + 20, 'news?', { size: 19, weight: 700, anchor: 'middle' });
  add('05-news-selection',
    svg(900, 640, 'What shapes the news?', s),
    'Seven influences surround the question of what becomes news: news values, gatekeeping, commercial pressures, owners, sources, practical constraints and censorship.',
    'News is selected, not simply reported: seven pressures shape what appears.',
    '## What influences the selection and presentation of news?');
}

// 06 Media and the political process
{
  const ch = hchain(140, [
    { head: 'Media emphasise some issues', fill: C.tealLight }, { head: 'Voters rate those issues most important', fill: C.cream }], { ag: 60, size: 17 });
  const top = label(30, 128, 'Agenda setting: McCombs and Shaw, 1968 US election (1972)', { size: 18, weight: 700, fill: C.tealDark }) + ch.svg +
    label(450, 140 + ch.h + 32, 'The media tell people what to think about', { size: 19, weight: 700, anchor: 'middle', italic: true });
  const y2 = 140 + ch.h + 60;
  const r = cardRow(y2, [
    { head: 'Opinion polls', fill: C.teal, body: 'Published polls can create bandwagon or underdog effects and shape coverage.' },
    { head: 'News reporting', fill: C.teal, body: 'Framing, bias and the personalisation of politics.' },
    { head: 'Social media', fill: C.teal, body: 'Targeted political advertising; Cambridge Analytica (2018) raised concern about personal data.' },
  ]);
  add('06-media-and-politics',
    svg(900, Math.round(y2 + r.h + 26), 'How the media influence politics', top + r.svg),
    'Agenda setting: when the media emphasise issues, voters rate those issues as most important, so the media tell people what to think about. Opinion polls, news reporting and social media are three further routes of influence.',
    'The media shape which issues voters think about, as well as how they see them.',
    '## How might the media influence the political process?');
}
