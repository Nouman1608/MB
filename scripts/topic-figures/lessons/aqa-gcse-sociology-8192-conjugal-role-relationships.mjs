import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-conjugal-role-relationships';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers (sociology figures: wrapped text, tables, flows, cards) ----
const esc = (s) => String(s).replace(/&(?![a-z]+;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const CW = 0.495, CWB = 0.55; // average glyph width / font size for Inter (regular, bold)
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
    const bodies = row.map((c) => (c.sub ? para(0, 0, cw - 32, c.sub, { size, weight: 600 }).h + 8 : 0) + block(0, 0, cw - 32, c.body, { size }).h);
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

const box = (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r ?? 12}" fill="${o.fill || C.panel}" stroke="${o.edge || C.ink}" stroke-width="${o.sw || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const pill = (x, y, w, h, s, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${o.fill || C.tealLight}" stroke="${o.edge || C.ink}" stroke-width="2"/>` + label(x + w / 2, y + h / 2 + (o.size || 17) * 0.36, s, { size: o.size || 17, weight: o.weight ?? 700, anchor: 'middle', fill: o.ink || C.ink });
const vcenter = (x, yTop, h, w, s, o = {}) => { const size = o.size || 17; const p = para(0, 0, w, s, o); return para(x, yTop + (h - p.h) / 2 + size * 0.95, w, s, o).svg; };

// 01 Segregated vs joint roles, with Bott's networks
{
  const net = (cx, cy, tight) => {
    let o = '';
    const H = [cx - 40, cy], W = [cx + 40, cy];
    const ringA = [[-110, -50], [-130, 20], [-95, 75]], ringB = [[110, -50], [130, 20], [95, 75]];
    const pts = (base, ring) => ring.map(([dx, dy]) => [base[0] + dx * (tight ? 0.8 : 1.1), base[1] + dy * (tight ? 0.8 : 1.1)]);
    const A = pts(H, ringA), B = pts(W, ringB);
    if (tight) {
      A.forEach((p) => { o += `<line x1="${H[0]}" y1="${H[1]}" x2="${p[0]}" y2="${p[1]}" stroke="${C.ink}" stroke-width="2.5"/>`; });
      B.forEach((p) => { o += `<line x1="${W[0]}" y1="${W[1]}" x2="${p[0]}" y2="${p[1]}" stroke="${C.ink}" stroke-width="2.5"/>`; });
      [[A[0], A[1]], [A[1], A[2]], [A[0], A[2]], [B[0], B[1]], [B[1], B[2]], [B[0], B[2]]].forEach(([p, q]) => { o += `<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" stroke="${C.ink}" stroke-width="2"/>`; });
      o += `<line x1="${H[0]}" y1="${H[1]}" x2="${W[0]}" y2="${W[1]}" stroke="${C.muted}" stroke-width="2" stroke-dasharray="5 5"/>`;
    } else {
      [...A, ...B].forEach((p, i) => { const s = i < 3 ? H : W; o += `<line x1="${s[0]}" y1="${s[1]}" x2="${p[0]}" y2="${p[1]}" stroke="${C.muted}" stroke-width="1.8" stroke-dasharray="5 5"/>`; });
      o += `<line x1="${H[0]}" y1="${H[1]}" x2="${W[0]}" y2="${W[1]}" stroke="${C.tealDark}" stroke-width="7"/>`;
    }
    [...A, ...B].forEach((p) => { o += `<circle cx="${p[0]}" cy="${p[1]}" r="10" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>`; });
    o += `<circle cx="${H[0]}" cy="${H[1]}" r="17" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/><circle cx="${W[0]}" cy="${W[1]}" r="17" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
    return o;
  };
  let s = '';
  const y0 = 108, w = 412, H = 470;
  const side = (x, head, fill, tight, items, netLabel) => {
    let o = headPanel(x, y0, w, H, head, { fill, size: 22 }).svg;
    o += net(x + w / 2, y0 + 170, tight);
    o += label(x + w / 2, y0 + 285, netLabel, { size: 16, anchor: 'middle', fill: C.tealDark, weight: 700, italic: true });
    o += bullets(x + 22, y0 + 330, w - 44, items, { size: 17 }).svg;
    return o;
  };
  s += side(30, 'Segregated roles', C.cream, true, ['Clearly separated: husband is **breadwinner**, wife is **homemaker**', 'Each has their own tasks', 'Each has their own friends and leisure'], 'close-knit network: each keeps own ties');
  s += side(458, 'Joint (integrated) roles', C.teal, false, ['Shared: partners do **similar tasks**', 'Take **decisions together**', 'Spend **leisure time together**'], 'looser network: couple rely on each other');
  s += `<circle cx="80" cy="${y0 + H + 34}" r="11" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + label(98, y0 + H + 40, 'husband', { size: 16 }) + `<circle cx="200" cy="${y0 + H + 34}" r="11" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + label(218, y0 + H + 40, 'wife', { size: 16 }) + `<circle cx="290" cy="${y0 + H + 34}" r="9" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>` + label(306, y0 + H + 40, 'friends and relatives', { size: 16 });
  s += label(870, y0 + H + 40, 'Bott, Family and Social Network (1957)', { size: 16, anchor: 'end', fill: C.muted, italic: true });
  add('01-segregated-joint-roles',
    svg(900, y0 + H + 66, 'Segregated and joint conjugal roles', s),
    'Two panels. Segregated roles: husband and wife each sit in a close-knit network of their own friends and relatives, with separate tasks and leisure. Joint roles: the couple are strongly linked to each other and share tasks, decisions and leisure, with looser outside ties, as Bott found.',
    'Bott linked segregated roles to close-knit networks and joint roles to looser ones.',
    '## Key concepts');
}

// 02 Traditional vs contemporary
{
  const f = versusFig('Traditional and contemporary families', {
    left: { head: 'Traditional family', fill: C.cream, sub: 'The male breadwinner model', items: ['Parsons: husband’s **instrumental role** (earning and providing)', 'Wife’s **expressive role** (care and emotional support)', 'Parsons saw this division as **functional** for society', 'Roles segregated; a wife’s paid work treated as secondary'] },
    right: { head: 'Contemporary family', fill: C.teal, sub: 'Most mothers now do paid work', items: ['More **dual-earner** and **dual career** families', 'Men do more housework and childcare than in the 1950s', 'The idea of the **new man** became popular', 'Yet women still do more, even when both work full time'] },
    foot: { head: 'The key question', text: 'Many couples describe their relationship as equal. Does the domestic division of labour show that it is?' },
  });
  add('02-traditional-contemporary', f,
    'Two panels. In the traditional male breadwinner family, Parsons described an instrumental role for husbands and an expressive role for wives. In the contemporary family most mothers do paid work and men do more at home, yet women still do more housework and childcare.',
    'Roles look more joint today, but women still do more at home.',
    '## Traditional and contemporary families');
}

// 03 Dual burden and triple shift (stacked loads)
{
  let s = '';
  const base = 520, bw = 210, unit = 100;
  const cols = [
    { x: 80, head: 'Male breadwinner model', sub: 'wife’s load', blocks: [['Housework and childcare', C.cream]] },
    { x: 345, head: 'Dual burden', sub: '(double shift)', blocks: [['Housework and childcare', C.cream], ['Paid work', C.teal]] },
    { x: 610, head: 'Triple shift', sub: 'Duncombe and Marsden', blocks: [['Housework and childcare', C.cream], ['Paid work', C.teal], ['Emotion work', C.mustard]] },
  ];
  cols.forEach((c) => {
    c.blocks.forEach(([l, f], i) => {
      const y = base - (i + 1) * unit;
      s += `<rect x="${c.x}" y="${y}" width="${bw}" height="${unit}" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
      s += para(c.x + bw / 2, y + unit / 2 + 6 - (l.length > 18 ? 10 : 0), bw - 30, l, { size: 17, weight: 700, anchor: 'middle' }).svg;
    });
    s += label(c.x + bw / 2, base + 34, c.head, { size: 19, weight: 700, anchor: 'middle' }) + label(c.x + bw / 2, base + 58, c.sub, { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  });
  s += `<line x1="50" y1="${base}" x2="850" y2="${base}" stroke="${C.ink}" stroke-width="3"/>`;
  s += para(80, 150, 230, 'Emotion work: keeping the peace, remembering birthdays', { size: 16, fill: C.olive, weight: 600 }).svg + arrow(320, 160, 600, 200, { w: 2.5, color: C.olive, marker: 'ahO' });
  const n = note(base + 82, null, ['Studies repeatedly find women still do more housework and childcare, **even when both partners work full time**', 'Do not confuse **dual career** (a family type) with **dual burden** (a woman’s double load)']);
  add('03-dual-burden-triple-shift',
    svg(900, Math.round(base + 82 + n.h + 24), 'One load, two loads, three loads', s + n.svg),
    'Three stacked columns show a woman’s load. In the male breadwinner model she does housework and childcare. With the dual burden she adds paid work. Duncombe and Marsden’s triple shift adds emotion work, such as keeping the peace and remembering birthdays.',
    'Paid work was added to women’s load, not swapped for housework.',
    '## Traditional and contemporary families');
}

// 04 Oakley's four-part argument
{
  const f = flowFig('Oakley: the idea of the conventional family', {
    sub: 'Nuclear families of legally married couples, voluntarily choosing parenthood',
    steps: [
      { head: 'The power of the idea', body: 'Government, media and advertising present it as normal and natural, with a husband who earns and a wife who cares, though many people do not live in one.', fill: C.panel },
      { head: 'Origins and explanations', body: 'The idea has social origins: industrialisation separated paid work from the home and pushed married women out of the labour market, creating the housewife role.', fill: C.panel },
      { head: 'The strains of being conventional', body: 'Women can feel isolated and undervalued as housewives; both partners feel pressure to perform their roles.', fill: C.panel },
      { head: 'Social control', body: 'The idea pressures people to conform and makes other ways of living seem deviant.', fill: C.cream, edge: C.olive },
    ],
    foot: { head: 'Conventional families (1982)', text: ['Predates civil partnerships and same-sex marriage', 'Oakley concluded official stereotypes were coming to seem “increasingly archaic”', 'Earlier, The Sociology of Housework (1974): few husbands did a large share of housework'] },
  });
  add('04-oakley-conventional-family', f,
    'Four numbered steps of Oakley’s argument: the idea of the conventional family is powerful, it has social origins in industrialisation, living up to it causes strain, and it acts as social control. A note adds that she found official stereotypes increasingly archaic.',
    'Oakley treats the conventional family as a powerful idea that controls people, not a natural fact.',
    '## Oakley and the conventional family');
}

// 05 Power: decisions (Edgell) and money (Pahl)
{
  let s = '';
  const y0 = 108;
  const hp = headPanel(30, y0, 840, 290, 'Decision making: Edgell, Middle-Class Couples (1980)', { fill: C.teal, size: 20 });
  s += hp.svg;
  const by = y0 + hp.hh + 26;
  s += box(60, by, 370, 150, { fill: C.cream, edge: C.olive, sw: 2 }) + label(245, by + 32, 'Husbands decided', { size: 19, weight: 700, anchor: 'middle' }) + label(245, by + 58, 'decisions seen as very important', { size: 16, anchor: 'middle', fill: C.muted }) + tl(245, by + 92, ['moving house', 'major finance'], { size: 17, anchor: 'middle', weight: 600 }, 24);
  s += box(470, by, 370, 150, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(655, by + 32, 'Wives decided', { size: 19, weight: 700, anchor: 'middle' }) + label(655, by + 58, 'decisions seen as less important', { size: 16, anchor: 'middle', fill: C.muted }) + tl(655, by + 92, ['interior decoration, food,', 'children’s clothes'], { size: 17, anchor: 'middle', weight: 600 }, 24);
  s += label(450, y0 + 278, 'Even joint decisions may involve unequal power.', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 700 });
  const y1 = y0 + 310;
  const hp2 = headPanel(30, y1, 840, 300, 'Money management: Pahl (1989)', { fill: C.cream, size: 20 });
  s += hp2.svg;
  const my = y1 + hp2.hh + 26;
  // allowance
  s += label(245, my + 8, 'Allowance system', { size: 19, weight: 700, anchor: 'middle' });
  s += `<circle cx="140" cy="${my + 70}" r="26" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>` + label(140, my + 76, 'H', { size: 18, weight: 700, anchor: 'middle' });
  s += `<circle cx="350" cy="${my + 70}" r="26" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + label(350, my + 76, 'W', { size: 18, weight: 700, anchor: 'middle' });
  s += arrow(172, my + 70, 318, my + 70, { w: 4 }) + label(245, my + 58, 'set sum', { size: 16, anchor: 'middle', weight: 600 });
  s += para(245, my + 128, 340, 'One partner, usually the husband, gives the other a set sum for housekeeping', { size: 16, anchor: 'middle' }).svg;
  // pooling
  s += label(655, my + 8, 'Pooling', { size: 19, weight: 700, anchor: 'middle' });
  s += `<circle cx="560" cy="${my + 50}" r="22" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>` + label(560, my + 56, 'H', { size: 16, weight: 700, anchor: 'middle' });
  s += `<circle cx="750" cy="${my + 50}" r="22" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + label(750, my + 56, 'W', { size: 16, weight: 700, anchor: 'middle' });
  s += box(605, my + 74, 100, 44, { fill: C.tealLight, sw: 2 }) + label(655, my + 102, 'joint a/c', { size: 16, weight: 700, anchor: 'middle' });
  s += arrow(578, my + 66, 610, my + 80, { w: 3 }) + arrow(732, my + 66, 700, my + 80, { w: 3 });
  s += para(655, my + 150, 340, 'Even pooling did not guarantee equality: men often had more say over spending', { size: 16, anchor: 'middle' }).svg;
  s += `<line x1="450" y1="${my - 10}" x2="450" y2="${my + 190}" stroke="${C.panelEdge}" stroke-width="2"/>`;
  add('05-edgell-pahl-power',
    svg(900, y1 + 300 + 26, 'The power behind the chores', s),
    'Top: Edgell found husbands made decisions seen as very important, such as moving house and major finance, while wives decided on less important matters such as decoration, food and children’s clothes. Bottom: Pahl’s allowance system, where the husband gives the wife a set sum, and pooling into a joint account, where men still often had more say.',
    'Who decides and who controls money reveal inequality that a list of chores misses.',
    '## The five contemporary issues');
}

// 06 Five issues: looks joint, but...
{
  const rows = [
    ['Decision making', 'Couples make some decisions together', 'Husbands dominate important decisions (Edgell)'],
    ['Money management', 'Money pooled in a joint account', 'Men often have more say over spending (Pahl)'],
    ['Dual career families', 'Both partners pursue careers (Rapoports); more joint roles', 'Role conflict, work life balance, childcare costs; women’s careers more often interrupted (glass ceiling)'],
    ['Child rearing', 'Fathers spend more time with children', 'Mothers carry routine care; fathers more often play and outings'],
    ['Leisure activities', 'More joint leisure: television, family meals, holidays', 'Women have less free time, more often interrupted by domestic tasks'],
  ];
  const f = compareFig('Five issues: does it look joint?', {
    cols: [{ head: 'Looks more joint', fill: C.teal }, { head: 'But…', fill: C.cream }],
    rows: rows.map(([l, a, b]) => ({ label: l, cells: [a, b] })),
    labelW: 200, size: 17,
  });
  add('06-five-issues', f,
    'A table of the five issues. Decision making, money management, dual career families, child rearing and leisure each look more joint than in the past, but in each case evidence shows women still have less power, more routine work or less free time.',
    'In all five issues, change towards joint roles is real but incomplete.',
    '## The five contemporary issues');
}

// 07 Who gains from women's unpaid work?
{
  let s = '';
  s += box(250, 112, 400, 90, { fill: C.mustard, sw: 3 }) + label(450, 150, 'Women’s unpaid', { size: 21, weight: 700, anchor: 'middle' }) + label(450, 178, 'domestic work', { size: 21, weight: 700, anchor: 'middle' });
  s += label(450, 236, 'Agreement: it is exploited', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += arrow(290, 206, 200, 266, { w: 4 }) + arrow(610, 206, 700, 266, { w: 4 });
  const r = cardRow(274, [
    { head: 'Feminists: men gain', fill: C.cream, body: ['Roles remain unequal and benefit men', 'Oakley on the conventional family', 'Delphy and Leonard: men exploit women’s work', 'Dual burden and triple shift'] },
    { head: 'Marxists: capitalism gains', fill: C.teal, body: ['Reproduces and maintains the workforce at no cost to capitalism', 'Men’s frustration at work may be taken out at home, where they have power'] },
  ], { size: 17, headSize: 20, gap: 40 });
  s += r.svg;
  const n = note(274 + r.h + 18, 'Functionalists disagree', 'Parsons saw clear instrumental and expressive roles as functional; Willmott and Young saw a move towards more equal, symmetrical roles.');
  add('07-who-gains',
    svg(900, Math.round(274 + r.h + 18 + n.h + 24), 'Who gains from women’s domestic work?', s + n.svg),
    'Women’s unpaid domestic work sits at the top. Feminists and Marxists agree it is exploited, but feminists say men gain while Marxists say capitalism gains. Below, functionalists Parsons and Willmott and Young take a more positive view.',
    'Feminists and Marxists agree women’s work is exploited but disagree about who gains.',
    '## Perspectives compared');
}
