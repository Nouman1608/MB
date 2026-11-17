import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-social-control';
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

// 01 Formal vs informal
{
  const f = compareFig('Formal and informal social control', {
    cols: [{ head: 'Formal', fill: C.teal }, { head: 'Informal', fill: C.cream }],
    rows: [
      { label: 'Rules', cells: ['**Written**: laws, school rules, workplace contracts', '**Unwritten**: norms everyone knows, e.g. not interrupting, saying thank you, dressing appropriately at a funeral'] },
      { label: 'Agents', cells: ['Police; courts and the judiciary; prisons and probation; government and the legislature; schools and employers (their formal rules)', 'Family; peer group; workplace colleagues; religion; media'] },
      { label: 'Examples', cells: ['Stop and search, arrest, caution, sentence, disciplinary procedure', 'Grounding, teasing, exclusion from the group, cold-shouldering, approval of a faith community'] },
    ],
    labelW: 130, size: 16, headSize: 20,
    foot: { head: 'Not about seriousness', text: 'The difference is whether rules are written and enforced by official agents, not how serious they are.' },
  });
  add('01-formal-informal', f,
    'A comparison. Formal social control rests on written rules such as laws and school rules, enforced by police, courts, prisons, government, schools and employers. Informal control rests on unwritten norms, enforced by family, peers, colleagues, religion and the media through grounding, teasing or exclusion.',
    'Formal control is written and officially enforced; informal control works through everyday relationships.',
    '## What social control is');
}

// 02 Layers: why most people conform
{
  let s = '';
  const layers = [
    ['Socialisation', 'Norms are internalised: most people conform because they have learned to', 600, C.teal],
    ['Informal control', 'Family, peers, colleagues, religion and media keep most people in line', 470, C.tealLight],
    ['Formal control', 'Needed only when informal control fails', 340, C.mustard],
  ];
  let y = 120;
  layers.forEach(([h, b, w, f], i) => {
    s += box(450 - w / 2 - 120, y, w + 240, 110, { fill: f, sw: 2.5, r: 16 }) + label(450, y + 40, h, { size: 21, weight: 700, anchor: 'middle' }) + para(450, y + 70, w + 200, b, { size: 16.5, anchor: 'middle' }).svg;
    if (i < 2) s += arrow(450, y + 114, 450, y + 140, { w: 3.5 });
    y += 146;
  });
  add('02-why-people-conform',
    svg(900, y + 6, 'Why most people conform', s),
    'Three narrowing layers: socialisation, through which norms are internalised; informal control by family, peers, colleagues, religion and media, which keeps most people in line; and formal control, needed only when informal control fails.',
    'Formal control is the back-up: most conformity comes from socialisation and informal control.',
    '## What social control is');
}

// 03 Sanctions grid
{
  let s = '';
  const x0 = 210, cw = 322, rh = 170;
  s += box(x0, 108, cw, 56, { fill: C.teal }) + label(x0 + cw / 2, 144, 'Positive (reward)', { size: 20, weight: 700, anchor: 'middle' });
  s += box(x0 + cw + 16, 108, cw, 56, { fill: C.cream }) + label(x0 + cw * 1.5 + 16, 144, 'Negative (punishment)', { size: 20, weight: 700, anchor: 'middle' });
  const rows = [['Formal', ['A medal', 'An award', 'A promotion', 'A certificate'], ['A fine', 'A prison sentence', 'A school exclusion', 'A police caution']], ['Informal', ['Praise', 'A smile', 'Being included'], ['A frown', 'Gossip', 'Ridicule', 'Being ignored or excluded by friends']]];
  rows.forEach(([h, pos, neg], i) => {
    const y = 176 + i * (rh + 14);
    s += box(30, y, 166, rh, { fill: i ? C.tealLight : C.mustard, sw: 2.5 }) + label(113, y + rh / 2 + 8, h, { size: 21, weight: 700, anchor: 'middle' });
    [pos, neg].forEach((items, k) => { const x = x0 + k * (cw + 16); s += box(x, y, cw, rh, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + bullets(x + 20, y + 38, cw - 40, items, { size: 17, gap: 6, dot: k ? C.rust : C.tealDark }).svg; });
  });
  const y = 176 + 2 * (rh + 14) + 4;
  const n = note(y, 'Two points that earn credit', ['Sanctions work through **anticipation**: people conform to avoid a negative sanction, not only after receiving one', 'The same agent can use both: a school gives formal detentions and a teacher’s informal praise']);
  add('03-sanctions',
    svg(900, Math.round(y + n.h + 24), 'Four kinds of sanction', s + n.svg),
    'A two-by-two grid. Formal positive sanctions: medals, awards, promotions, certificates. Formal negative: fines, prison, exclusion, police cautions. Informal positive: praise, a smile, being included. Informal negative: a frown, gossip, ridicule, being ignored. Below, sanctions work through anticipation, and one agent can use both kinds.',
    'Sanctions are rewards as well as punishments, formal or informal.',
    '## Sanctions');
}

// 04 Perspectives
{
  let s = '';
  const r = cardRow(150, [
    { head: 'Functionalist', sub: 'Serves society', fill: C.teal, body: 'Maintains value consensus and order; punishing deviance reinforces boundaries' },
    { head: 'Marxist', sub: 'Serves the ruling class', fill: C.tealLight, body: 'Policing and law protect private property; media and education encourage acceptance of inequality' },
    { head: 'Feminist', sub: 'Serves men', fill: C.cream, body: 'Heavier informal control of women at home, in public and at work (Heidensohn)' },
    { head: 'Interactionist', sub: 'How is control applied?', fill: C.mustard, body: 'Agents use discretion and label some groups; control can create further deviance (Becker)' },
  ], { size: 16, headSize: 18, gap: 12 });
  s += r.svg;
  const cw = (840 - 36) / 4;
  s += path(`M30,138 L30,126 L${30 + 2 * cw + 12},126 L${30 + 2 * cw + 12},138`, { w: 2.5, stroke: C.tealDark }) + label(30 + cw + 6, 116, 'Structural: what does control do for society?', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += path(`M${30 + 3 * (cw + 12)},138 L${30 + 3 * (cw + 12)},126 L870,126 L870,138`, { w: 2.5, stroke: C.olive }) + label(30 + 3 * (cw + 12) + cw / 2, 116, 'Face-to-face decisions', { size: 16, weight: 700, anchor: 'middle', fill: C.olive });
  add('04-perspectives',
    svg(900, Math.round(150 + r.h + 24), 'Whose interests does control serve?', s),
    'Four cards. Functionalists say control serves society by maintaining consensus and order. Marxists say it serves the ruling class by protecting property. Feminists say it serves men through heavier control of women. Interactionists look at face-to-face decisions by agents who label some groups, which can create more deviance.',
    'Structural views ask whom control serves; interactionists ask how it is applied face to face.',
    '## Perspectives on social control');
}

// 05 Heidensohn
{
  let s = '';
  s += box(30, 108, 840, 84, { fill: C.ink, edge: C.ink }) + label(450, 142, 'Patriarchal societies control women more effectively than men', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' }) + label(450, 172, 'so it is harder for women to break the law (control theory)', { size: 16, anchor: 'middle', fill: '#ffffff' });
  s += arrow(170, 196, 170, 222, { w: 3 }) + arrow(450, 196, 450, 222, { w: 3 }) + arrow(730, 196, 730, 222, { w: 3 });
  const r = cardRow(226, [
    { head: 'In the home', fill: C.teal, body: ['Housework and childcare leave little time for crime', 'Challenging expectations risks male violence', 'Breadwinners’ financial power over wives', 'Daughters more closely controlled than sons'] },
    { head: 'In public', fill: C.tealLight, body: ['Threat of male sexual violence discourages going out alone at night', 'Fear of losing reputation and shaming the family', '**Separate spheres:** women who speak out may be ridiculed'] },
    { head: 'At work', fill: C.cream, body: ['Male-dominated hierarchies and workers’ organisations keep women subordinate', 'Sexual harassment intimidates women'] },
  ], { size: 16, headSize: 20 });
  s += r.svg;
  const n = note(226 + r.h + 18, 'Evaluation', ['Generalisations may not apply to all women; claims not always backed by strong research evidence', 'May apply less today, though harassment and domestic violence persist']);
  add('05-heidensohn',
    svg(900, Math.round(226 + r.h + 18 + n.h + 24), 'Heidensohn: women and crime (1985)', s + n.svg),
    'Heidensohn argues patriarchal societies control women more effectively than men. At home through housework, the threat of violence, breadwinners’ financial power and closer control of daughters; in public through fear of sexual violence, reputation and separate spheres; at work through male hierarchies and harassment. Below, criticisms.',
    'Heidensohn explains women’s lower offending by control, not by nature.',
    '## Heidensohn on female conformity');
}

// 06 Heidensohn vs Carlen
{
  const f = versusFig('Heidensohn and Carlen: two sides of control theory', {
    sub: 'Both: people choose crime when the advantages outweigh the disadvantages',
    left: { head: 'Heidensohn (3.5.2)', fill: C.teal, items: ['Explains **conformity**', 'Patriarchal control keeps most women from crime', 'At home, in public and at work'] },
    right: { head: 'Carlen (3.5.3)', fill: C.cream, items: ['Explains **its breakdown**', 'Some working-class women offend when promised rewards fail', 'The class deal and the gender deal'] },
    foot: { head: 'Common mistake', text: 'Do not confuse Heidensohn (why women conform) with Carlen (why some women offend).' },
  });
  add('06-heidensohn-carlen', f,
    'Two panels. Heidensohn uses control theory to explain why most women conform: patriarchal control at home, in public and at work. Carlen uses it to explain why some working-class women offend: the rewards promised by the class and gender deals fail.',
    'Heidensohn explains conformity; Carlen explains its breakdown.',
    '## Heidensohn on female conformity');
}
