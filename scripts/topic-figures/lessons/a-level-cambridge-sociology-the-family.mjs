import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-cambridge-sociology-the-family';
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

// 01 Two topic areas and their key concepts
{
  const areas = [
    ['Theories of the family and social change', [['3.1', 'Perspectives on the role of the family'], ['3.2', 'Diversity and social change']], C.teal],
    ['Family roles and changing relationships', [['4.1', 'Gender equality and experiences of family life'], ['4.2', 'Age and family life']], C.cream],
  ];
  let s = '';
  areas.forEach(([h, subs, f], i) => {
    const x = 30 + i * 430, w = 410;
    s += `<rect x="${x}" y="108" width="${w}" height="74" rx="14" fill="${f}" stroke="${C.ink}" stroke-width="3"/>` + para(x + w / 2, 138, w - 30, h, { size: 20, weight: 700, anchor: 'middle' }).svg;
    subs.forEach(([n, t2], j) => {
      const y = 198 + j * 76;
      s += `<rect x="${x}" y="${y}" width="${w}" height="64" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + badge(x + 36, y + 32, 22, '', f) + label(x + 36, y + 38, n, { size: 16, weight: 700, anchor: 'middle' }) + para(x + 70, y + 38 - (para(0, 0, 320, t2, { size: 17 }).n - 1) * 11, 320, t2, { size: 17 }).svg;
    });
  });
  const kc = [['Power, control and resistance', 'Socialisation, culture and identity', 'Social change and development'], ['Power, control and resistance', 'Inequality and opportunity']];
  let ky = 0;
  kc.forEach((list, i) => {
    const x = 30 + i * 430;
    s += label(x + 205, 375, 'Key concepts', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
    list.forEach((k, j) => { const y = 390 + j * 54; s += `<rect x="${x + 20}" y="${y}" width="370" height="44" rx="22" fill="${C.ink}"/>` + label(x + 205, y + 28, k, { size: 17, weight: 700, anchor: 'middle', fill: '#ffffff' }); ky = Math.max(ky, y + 44); });
  });
  add('01-paper-2-map',
    svg(900, ky + 28, 'Paper 2 The Family: a map', s),
    'Two topic areas. Theories of the family and social change (3.1 perspectives, 3.2 diversity and change) links to power, control and resistance; socialisation, culture and identity; and social change and development. Family roles and changing relationships (4.1 gender, 4.2 age) links to power, control and resistance and to inequality and opportunity.',
    'Paper 2 has two topic areas, four sub-topics and four linked key concepts.',
    '## Where this fits in 9699');
}

// 02 Three perspectives on the role of the family
{
  const r = cardRow(108, [
    { head: 'Functionalist', fill: C.teal, sub: 'Benefits members and society', body: ['Functions of the family have changed over time', '**Loss of functions:** schools and the welfare state have taken over roles the family once performed alone'] },
    { head: 'Marxist', fill: C.tealLight, sub: 'Benefits capitalism', body: ['**Ideological control**', '**Reproduction of labour:** raising the next generation of workers', '**Consumption:** the family as a unit that buys goods'] },
    { head: 'Feminist', fill: C.cream, sub: 'Challenges both', body: ['Both treat the family as broadly beneficial', 'Both overlook inequality within the family'] },
  ], { size: 17 });
  const y = 108 + r.h;
  const s = r.svg + `<path d="M735,${y + 8} C735,${y + 50} 165,${y + 50} 165,${y + 10}" fill="none" stroke="${C.rust}" stroke-width="3" stroke-dasharray="8 6" marker-end="url(#ahR)"/>` +
    `<path d="M735,${y + 8} C735,${y + 40} 450,${y + 40} 450,${y + 10}" fill="none" stroke="${C.rust}" stroke-width="3" stroke-dasharray="8 6" marker-end="url(#ahR)"/>` +
    label(600, y + 64, 'feminist critique', { size: 16, weight: 700, fill: C.rust, anchor: 'middle' });
  add('02-three-perspectives',
    svg(900, y + 90, 'What does the family do, and for whom?', s),
    'Three cards: functionalists say the family benefits members and society, with a debate about loss of functions; Marxists say it benefits capitalism through ideological control, reproduction of labour and consumption; feminists challenge both for overlooking inequality within the family.',
    'Functionalists see benefits for society, Marxists for capitalism, and feminists see hidden inequality.',
    '## 3.1 Perspectives on the role of the family');
}

// 03 Diversity: forms and the New Right / postmodernist debate
{
  const forms = ['Nuclear', 'Extended', 'Lone-parent', 'Reconstituted', 'Single-person'];
  let s = label(450, 128, 'Family and household forms', { size: 20, weight: 700, anchor: 'middle' });
  forms.forEach((f, i) => { const x = 30 + i * 170; s += `<rect x="${x}" y="146" width="160" height="54" rx="27" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` + label(x + 80, 180, f, { size: 17, weight: 700, anchor: 'middle' }); });
  s += label(450, 230, 'also same-sex families and families of choice, where taught locally', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  s += label(450, 268, 'Dimensions of diversity: organisational, cultural, class', { size: 17, anchor: 'middle', weight: 600, fill: C.tealDark });
  const L = headPanel(30, 296, 404, 150, 'New Right', { fill: C.cream, size: 21 });
  const R = headPanel(466, 296, 404, 150, 'Postmodernist', { fill: C.teal, size: 21 });
  s += L.svg + R.svg + para(232, 296 + L.hh + 46, 360, 'Growing diversity is a **social problem**', { size: 19, anchor: 'middle' }).svg + para(668, 296 + R.hh + 46, 360, 'Growing diversity shows **greater individual choice**', { size: 19, anchor: 'middle' }).svg +
    `<circle cx="450" cy="371" r="24" fill="${C.ink}"/>` + label(450, 378, 'vs', { size: 19, weight: 700, fill: '#ffffff', anchor: 'middle' });
  const n = note(466, 'Also examine', ['How far diversity has gone: is the nuclear family still dominant?', 'The state and social policy actively shape family form']);
  add('03-family-diversity',
    svg(900, Math.round(466 + n.h + 24), 'Family diversity', s + n.svg),
    'Five family and household forms: nuclear, extended, lone-parent, reconstituted and single-person. The New Right sees growing diversity as a social problem; postmodernists see it as greater individual choice. Students also examine whether the nuclear family remains dominant and how social policy shapes family form.',
    'The New Right sees diversity as a problem; postmodernists see it as choice.',
    '## 3.2 Diversity and social change');
}

// 04 Conjugal roles and the positive/negative debate
{
  const r = cardRow(152, [
    { head: 'Housework', fill: C.teal, body: 'Who does the domestic labour?' },
    { head: 'Childcare', fill: C.teal, body: 'Who looks after the children?' },
    { head: 'Power', fill: C.teal, body: 'Who makes the decisions?' },
    { head: 'Emotion work', fill: C.teal, body: 'Who manages the family’s emotional life?' },
  ], { size: 17, gap: 12 });
  const y2 = 152 + r.h + 28;
  const strands = ['Liberal feminist', 'Radical feminist', 'Marxist feminist'];
  let s = label(450, 132, 'Conjugal roles: four areas of division between partners', { size: 19, weight: 700, anchor: 'middle' }) + r.svg +
    label(450, y2 + 16, 'Three feminist strands, three different explanations of inequality and power', { size: 18, weight: 700, anchor: 'middle' });
  strands.forEach((st, i) => { const x = 30 + i * 286; s += `<rect x="${x}" y="${y2 + 34}" width="268" height="56" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + label(x + 134, y2 + 69, st, { size: 19, weight: 700, anchor: 'middle' }); });
  const y3 = y2 + 116;
  s += `<rect x="30" y="${y3}" width="840" height="70" rx="35" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` +
    label(70, y3 + 43, 'Positive experience', { size: 18, weight: 700, fill: C.tealDark }) + label(830, y3 + 43, 'Negative experience', { size: 18, weight: 700, fill: C.rust, anchor: 'end' }) +
    arrow(320, y3 + 36, 580, y3 + 36, { w: 3 }) + arrow(580, y3 + 36, 320, y3 + 36, { w: 3 }) + label(450, y3 + 26, 'a live debate', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  add('04-conjugal-roles',
    svg(900, y3 + 100, 'Gender and experiences of family life', s),
    'Four areas of conjugal roles: housework, childcare, power and emotion work. Liberal, radical and Marxist feminists offer different explanations of inequality within the family. Below, a line from positive to negative experience shows that whether family life is good for its members is a live debate.',
    'Conjugal roles span housework, childcare, power and emotion work; feminists disagree on why they are unequal.',
    '## 4.1 Gender equality and experiences of family life');
}

// 05 Age and family life
add('05-age-family-life',
  cardsFig('Age and family life', {
    cards: [
      { head: 'Childhood', fill: C.teal, body: '**Socially constructed:** what counts as childhood has changed over time and varies between societies; not a fixed biological fact.' },
      { head: 'Grandparents', fill: C.teal, body: 'Their role and position, compared across cultures; rising life expectancy changes family structure.' },
      { head: 'Children’s experiences', fill: C.cream, body: 'Shaped by social class, gender and ethnicity.' },
      { head: 'Motherhood and fatherhood', fill: C.cream, body: 'Concepts redefined over time rather than fixed.' },
    ],
  }),
  'Four cards on age and family life: childhood as socially constructed, the changing position of grandparents as life expectancy rises, children’s experiences shaped by class, gender and ethnicity, and changing concepts of motherhood and fatherhood.',
  'Childhood, grandparenthood and parenthood are social roles that change over time.',
  '## 4.2 Age and family life');

// 06 Exam structure and AO emphasis
{
  const facts = [['60 marks', ''], ['1 h 30 min', ''], ['50%', 'of AS'], ['25%', 'of A Level']];
  let s = '';
  facts.forEach(([a, b], i) => { const x = 30 + i * 213; s += `<rect x="${x}" y="108" width="201" height="84" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + label(x + 100, b ? 145 : 158, a, { size: 25, weight: 700, anchor: 'middle', fill: C.tealDark }) + (b ? label(x + 100, 174, b, { size: 16, anchor: 'middle', fill: C.muted }) : ''); });
  const sec = (x, head, sub, f, aos) => {
    let o = `<rect x="${x}" y="216" width="410" height="214" rx="14" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + `<path d="${roundTop(x + 1.25, 217.25, 407.5, 58)}" fill="${f}"/>` +
      label(x + 205, 254, head, { size: 21, weight: 700, anchor: 'middle' }) + para(x + 205, 304, 370, sub, { size: 17, anchor: 'middle' }).svg + label(x + 24, 340, 'Emphasis', { size: 16, weight: 700, fill: C.muted });
    aos.forEach(([ao, wgt], i) => { const bx = x + 24 + i * 124; o += `<rect x="${bx}" y="352" width="114" height="56" rx="10" fill="${wgt ? C.mustard : C.cream}" stroke="${C.ink}" stroke-width="2"/>` + label(bx + 57, 386, ao, { size: 18, weight: 700, anchor: 'middle' }); });
    return o;
  };
  s += sec(30, 'Section A', 'Three compulsory questions', C.teal, [['AO1', 1], ['AO2', 1], ['AO3', 0]]);
  s += sec(460, 'Section B', 'One essay (26 marks) chosen from two', C.cream, [['AO1', 0], ['AO2', 0], ['AO3', 1]]);
  s += `<rect x="30" y="448" width="22" height="18" rx="4" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` + label(62, 463, 'main emphasis', { size: 16 }) +
    `<rect x="230" y="448" width="22" height="18" rx="4" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/>` + label(262, 463, 'less emphasis', { size: 16 });
  const n = note(486, 'AO3 in the essay', 'Explain the strengths and limitations of the perspectives in 3.1 and 4.1 and reach a reasoned conclusion, not a description of each perspective in turn.');
  add('06-paper-2-assessment',
    svg(900, Math.round(486 + n.h + 24), 'How Paper 2 is assessed', s + n.svg),
    'Paper 2 is worth 60 marks, lasts 1 hour 30 minutes and is 50% of the AS and 25% of the A Level. Section A has three compulsory questions weighted towards AO1 and AO2; Section B is one 26-mark essay from two, where AO3 carries most weight.',
    'Section A tests knowledge and application; the Section B essay is where evaluation counts most.',
    '## Assessment objectives on Paper 2');
}

// 07 Forms vs what happens inside
{
  const hx = 250, hy = 104, hw = 400;
  let s = `<path d="M${hx - 20},${hy + 120} L${hx + hw / 2},${hy} L${hx + hw + 20},${hy + 120} Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` +
    `<rect x="${hx}" y="${hy + 120}" width="${hw}" height="230" fill="${C.panel}" stroke="${C.ink}" stroke-width="3"/>` +
    label(hx + hw / 2, hy + 90, '3.2 Forms', { size: 21, weight: 700, anchor: 'middle' }) + label(hx + hw / 2, hy + 112, 'the shape families take', { size: 15, anchor: 'middle' });
  s += `<rect x="${hx + 30}" y="${hy + 145}" width="160" height="150" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + label(hx + 110, hy + 220, '4.1', { size: 22, weight: 700, anchor: 'middle' }) + label(hx + 110, hy + 248, 'Gender', { size: 18, weight: 600, anchor: 'middle' });
  s += `<rect x="${hx + 210}" y="${hy + 145}" width="160" height="150" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + label(hx + 290, hy + 220, '4.2', { size: 22, weight: 700, anchor: 'middle' }) + label(hx + 290, hy + 248, 'Age', { size: 18, weight: 600, anchor: 'middle' });
  s += label(hx + hw / 2, hy + 328, 'what happens inside', { size: 16, anchor: 'middle', fill: C.olive, weight: 600, italic: true });
  s += label(120, 254, 'Learn 3.1’s', { size: 17, anchor: 'middle', weight: 600 }) + label(120, 276, 'three perspectives', { size: 17, anchor: 'middle', weight: 600 }) + label(120, 298, 'as a set to', { size: 17, anchor: 'middle', weight: 600 }) + label(120, 320, 'compare', { size: 17, anchor: 'middle', weight: 600 });
  s += label(780, 254, 'Track which', { size: 17, anchor: 'middle', weight: 600 }) + label(780, 276, 'feminist strand', { size: 17, anchor: 'middle', weight: 600 }) + label(780, 298, 'makes which', { size: 17, anchor: 'middle', weight: 600 }) + label(780, 320, 'argument', { size: 17, anchor: 'middle', weight: 600 });
  add('07-forms-and-inside',
    svg(900, hy + 390, 'Forms of family and life inside them', s),
    'A house: the roof is 3.2, the forms families take, and inside are 4.1 gender and 4.2 age, what happens within those forms. Side notes advise learning 3.1’s three perspectives as a set and tracking which feminist strand makes which argument.',
    '3.2 is about the forms families take; 4.1 and 4.2 are about what happens inside them.',
    '## How to approach it');
}
