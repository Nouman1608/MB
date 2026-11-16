import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-cambridge-sociology-globalisation-contemporary-issues';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers (sociology figures: wrapped text, tables, flows, cards) ----
const esc = (s) => String(s).replace(/&(?![a-z]+;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const CW = 0.515, CWB = 0.56; // average glyph width / font size for Inter (regular, bold)
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
    let yy = y + 20 + 18 * 0.85;
    if (it.head) { const hp = para(x + w / 2, yy, w - 24, it.head, { size: 18, weight: 700, anchor: 'middle' }); s += hp.svg; yy += hp.h + 6; }
    if (it.body) s += para(x + w / 2, yy, w - 24, it.body, { size, anchor: 'middle', fill: it.head ? C.muted : C.ink }).svg;
    if (i < n - 1 && o.arrows !== false) s += arrow(x + w + 4, y + h / 2, x + w + ag - 4, y + h / 2, { w: 3.5 });
  });
  return { svg: s, h };
}
const label = (x, y, s, o = {}) => t(x, y, esc(s), o);
// ---- end helpers ----

// 01 Optimistic vs pessimistic views of globalisation and life chances
add('01-life-chances-debate',
  versusFig('Does globalisation improve life chances?', {
    left: { head: 'Optimistic view', sub: 'Modernisation and neo-liberal', items: [
      'Foreign investment and trade create jobs and raise incomes',
      'Rostow (1960): joining the world economy is the route to development',
      'Technology spreads: mobile banking, online learning, medical knowledge',
      'UN Millennium and Sustainable Development Goals target schooling, child mortality and disease'] },
    right: { head: 'Pessimistic view', sub: 'Dependency and Marxist', items: [
      'Frank (1966): the rich “metropolis” grows by extracting surplus from the “satellite”',
      'Low-wage export jobs can be insecure and unsafe (Rana Plaza, 2013)',
      'Debt repayments and structural adjustment blamed for cuts to health and education',
      '“Brain drain” removes trained doctors and teachers'] },
    foot: { head: 'Evaluate by country', text: 'Outcomes differ sharply: fast-growing East Asian economies versus countries dependent on a single commodity. Judge with indicators: education, income, health.' },
  }),
  'Two columns compare views on globalisation. The optimistic modernisation and neo-liberal view stresses jobs, investment, technology and global development goals; the pessimistic dependency and Marxist view stresses surplus extraction, unsafe low-wage work, debt conditions and brain drain.',
  'Modernisation sees globalisation as a route to development; dependency theory sees it as extraction.',
  '## Does globalisation improve life chances in developing countries?');

// 02 Explanations of global inequality: world-system + four explanations
{
  const cx = 245, cy = 340;
  const rings = `<circle cx="${cx}" cy="${cy}" r="200" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>` +
    `<circle cx="${cx}" cy="${cy}" r="132" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>` +
    `<circle cx="${cx}" cy="${cy}" r="64" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>` +
    label(cx, cy + 7, 'Core', { size: 21, weight: 700, anchor: 'middle' }) +
    label(cx, cy - 92, 'Semi-periphery', { size: 18, weight: 700, anchor: 'middle' }) +
    label(cx, cy - 160, 'Periphery', { size: 19, weight: 700, anchor: 'middle' }) +
    [[-150, 70], [140, 95], [-40, 175]].map(([dx, dy]) => {
      const L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L;
      return arrow(cx + ux * 185, cy + uy * 185, cx + ux * 72, cy + uy * 72, { color: C.rust, w: 4, marker: 'ahR' });
    }).join('') +
    label(cx, 575, 'surplus flows towards the core', { size: 16, anchor: 'middle', fill: C.rust, weight: 600 }) +
    label(cx, 598, 'Wallerstein’s world-systems theory', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  const items = [
    ['Capitalism', 'Marxists and world-systems theory: inequality is built into the global system.', C.teal],
    ['Colonialism', 'Colonial powers extracted resources and labour and reshaped economies around exports.', C.cream],
    ['Post-colonialism', 'After independence, dependence continued through trade terms, debt and cultural influence (“neo-colonialism”).', C.cream],
    ['Patriarchy', 'Mies (1986): global capitalism depends on women’s unpaid and low-paid labour.', C.tealLight],
  ];
  let y = 108, s = '';
  for (const [h, b, f] of items) {
    const bp = para(0, 0, 360, b, { size: 16 });
    const hgt = 50 + bp.h + 4;
    s += `<rect x="480" y="${y}" width="390" height="${hgt}" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>` +
      `<rect x="480" y="${y}" width="12" height="${hgt}" rx="4" fill="${f === C.cream ? C.mustard : C.tealDark}"/>` +
      label(506, y + 32, h, { size: 19, weight: 700 }) + para(506, y + 57, 350, b, { size: 16 }).svg;
    y += hgt + 12;
  }
  const H = Math.max(y, 610) + 18;
  add('02-explaining-global-inequality',
    svg(900, H, 'Four explanations of global inequality', rings + s),
    'Concentric circles show a core surrounded by a semi-periphery and a periphery, with wealth flowing inwards to the core. Beside them, four explanations of global inequality: capitalism, colonialism, post-colonialism and patriarchy.',
    'Inequality is explained by the global system itself, its colonial history and its reliance on women’s labour.',
    '## What explains global inequality?');
}

// 03 Push-pull model of migration
{
  const pan = (x, head, fill, items, dot) => {
    const hp = headPanel(x, 150, 330, 230, head, { fill, size: 21 });
    return hp.svg + bullets(x + 22, 150 + hp.hh + 36, 290, items, { size: 18, dot, gap: 12 }).svg;
  };
  const chip = (x, w, head, s) => `<rect x="${x}" y="578" width="${w}" height="88" rx="12" fill="${C.panel}" stroke="${C.ink}" stroke-width="2"/>` +
    label(x + w / 2, 612, head, { size: 20, weight: 700, anchor: 'middle' }) + label(x + w / 2, 642, s, { size: 16, anchor: 'middle', fill: C.muted });
  add('03-push-pull-migration',
    svg(900, 694, 'Why people migrate: push and pull',
      label(195, 130, 'Sending country', { size: 18, anchor: 'middle', fill: C.muted, weight: 600 }) +
      label(705, 130, 'Receiving country', { size: 18, anchor: 'middle', fill: C.muted, weight: 600 }) +
      pan(30, 'Push factors', C.cream, ['Poverty', 'Conflict', 'Persecution', 'Climate disaster'], C.olive) +
      pan(540, 'Pull factors', C.teal, ['Jobs and wages', 'Safety', 'Family', 'Education'], C.tealDark) +
      `<path d="M372,265 L470,265 L470,240 L528,300 L470,360 L470,335 L372,335 Z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` +
      label(440, 307, 'migrate', { size: 18, weight: 700, anchor: 'middle' }) +
      label(450, 410, 'Lee (1966): the push–pull model', { size: 16, anchor: 'middle', fill: C.muted, italic: true }) +
      note(432, null, 'Net migration = immigration − emigration. **Global labour patterns** add demand in sectors such as care, construction and technology (e.g. labour migration to the Gulf states).').svg +
      label(450, 560, 'Castles and Miller (1993): migration is now…', { size: 18, weight: 700, anchor: 'middle' }) +
      chip(30, 268, 'Globalised', 'more countries involved') + chip(316, 268, 'Accelerated', 'growing in scale') + chip(602, 268, 'Feminised', 'more women migrate')),
    'Push factors such as poverty, conflict, persecution and climate disaster drive people out of a sending country; pull factors such as jobs, safety, family and education draw them to a receiving country. Below, net migration is defined and Castles and Miller’s view that migration is globalised, accelerated and feminised is shown.',
    'Migration results from push factors at home and pull factors abroad.',
    '## Why do people migrate?');
}

// 04 Who benefits from migration? perspectives
add('04-who-benefits-migration',
  cardsFig('Migration: who benefits?', {
    cards: [
      { head: 'Functionalist / neo-liberal', fill: C.teal, body: 'Mutual gains: labour shortages are filled, sending families receive remittances, receiving societies gain diversity and entrepreneurship.' },
      { head: 'Marxist', fill: C.cream, body: 'Migrants form a **reserve army of labour** that holds down wages and divides workers.' },
      { head: 'Feminist', fill: C.cream, body: 'The **global care chain**: migrant women care for richer families while their own children are cared for by others.' },
      { head: 'Migrants themselves', fill: C.tealLight, body: 'May gain income but lose status and rights; irregular migrants risk exploitation and face negative media portrayals and racism.' },
    ],
    foot: { head: 'Use in essays', text: 'Weigh the positive consequences (diversity, labour, remittances) against the negative (pressure on scarce resources, exploitation, brain drain, racism), then ask who has power.' },
  }),
  'Four perspectives on who benefits from migration: functionalists and neo-liberals see mutual gains, Marxists see a reserve army of labour that holds down wages, feminists point to the global care chain, and migrants themselves may gain income but lose status and rights.',
  'Perspectives disagree over whether migration brings mutual gain or benefits the powerful.',
  '## What are the consequences of migration, and who benefits?');

// 05 Global care chain
{
  const node = (x, y, w, h, head, lines, fill) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` +
    para(x + w / 2, y + 40, w - 30, head, { size: 20, weight: 700, anchor: 'middle' }).svg + tl(x + w / 2, y + 40 + 30 + (head.length > 22 ? 26 : 0), lines, { size: 16, anchor: 'middle', fill: C.muted }, 21);
  add('05-global-care-chain',
    svg(900, 480, 'The global care chain',
      label(145, 132, 'SENDING COUNTRY', { size: 16, weight: 700, anchor: 'middle', fill: C.olive }) +
      label(620, 132, 'RICHER RECEIVING COUNTRY', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) +
      `<line x1="315" y1="115" x2="315" y2="215" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 6"/><line x1="315" y1="270" x2="315" y2="320" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 6"/>` +
      node(30, 160, 230, 140, 'Her own children', ['cared for by others', 'while she works abroad'], C.cream) +
      node(370, 160, 190, 140, 'Migrant woman', ['care worker'], C.mustard) +
      node(670, 160, 200, 140, 'Richer family', ['receives her', 'care labour'], C.teal) +
      arrow(564, 205, 664, 205, { w: 4, color: C.tealDark, marker: 'ahT' }) + label(614, 192, 'care', { size: 16, weight: 700, anchor: 'middle', fill: C.tealDark }) +
      arrow(666, 260, 566, 260, { w: 4, color: C.olive, marker: 'ahO' }) + label(616, 285, 'wages', { size: 16, weight: 700, anchor: 'middle', fill: C.olive }) +
      arrow(366, 230, 266, 230, { w: 4, color: C.olive, marker: 'ahO' }) + label(316, 257, 'remittances', { size: 16, weight: 700, anchor: 'middle', fill: C.olive }) +
      note(340, 'Feminist reading', 'Migrant women care for richer families while their own children are cared for by others, so care work is passed along a chain of women across borders.').svg),
    'A migrant woman from a sending country provides care for a richer family abroad in exchange for wages, sends remittances home, and her own children are cared for by others.',
    'Feminists show that global migration moves care work from poorer women to richer families.',
    '## What are the consequences of migration, and who benefits?');
}

// 06 Why crime has become global
{
  const top = hchain(108, [
    { head: 'Cheaper travel', fill: C.tealLight }, { head: 'Global finance', fill: C.tealLight }, { head: 'The internet', fill: C.tealLight }], { ag: 30, arrows: false });
  const y2 = 108 + top.h + 56;
  const cards = [
    ['Human trafficking', 'Victims often women and children exploited for sex or labour. UN Palermo Protocol (2000) defines it.'],
    ['Corporate crime', 'TNCs move operations to places with weaker regulation. Bhopal (1984); Sutherland’s white-collar crime (1939).'],
    ['Crimes against the environment', 'Illegal logging, wildlife trafficking, toxic waste dumping. Deepwater Horizon (2010); White’s green criminology (2008).'],
  ];
  const cw = 266, gap = 21;
  const hts = cards.map(([h, b]) => para(0, 0, cw - 28, h, { size: 19, weight: 700 }).h + para(0, 0, cw - 28, b, { size: 16 }).h);
  const ch = Math.max(...hts) + 42;
  let s = top.svg + label(450, 108 + top.h + 26, 'create opportunities to commit crime across borders, such as…', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  cards.forEach(([h, b], i) => {
    const x = 30 + i * (cw + gap);
    s += arrow(165 + i * 285, 108 + top.h + 34, x + cw / 2, y2 - 4, { w: 3 });
    s += `<rect x="${x}" y="${y2}" width="${cw}" height="${ch}" rx="12" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`;
    const hp = para(x + 14, y2 + 34, cw - 28, h, { size: 19, weight: 700, fill: C.rust });
    s += hp.svg + para(x + 14, y2 + 34 + hp.h + 4, cw - 28, b, { size: 16 }).svg;
  });
  const y3 = y2 + ch + 20;
  const f = note(y3, 'A global criminal economy', 'Castells (1998): drug, arms and people trafficking networks are linked worldwide; Glenny’s McMafia (2008) traced these networks.');
  add('06-why-crime-is-global',
    svg(900, Math.round(y3 + f.h + 24), 'Why crime has become global', s + f.svg),
    'Cheaper travel, global finance and the internet create opportunities for crime across borders, shown leading to three global crimes: human trafficking, corporate crime and crimes against the environment, with examples. Castells describes a linked global criminal economy.',
    'Globalisation opens new routes for trafficking, corporate and environmental crime.',
    '## Why has crime become global?');
}

// 07 Who benefits from global crime: Marxist vs feminist
add('07-who-benefits-global-crime',
  versusFig('Who benefits from global crime?', {
    left: { head: 'Marxist', fill: C.teal, items: [
      'Global capitalism encourages crime by the powerful',
      'Corporations profit and are rarely prosecuted',
      'Poor workers and communities bear the harm',
      'Laws are made and enforced in the interests of the ruling class'] },
    right: { head: 'Feminist', fill: C.cream, items: [
      'Trafficking for sexual exploitation, forced marriage and exploitation of domestic workers',
      'Global crime is shaped by patriarchy',
      'Victims are disproportionately women and girls'] },
  }),
  'Two columns: Marxists argue global crime benefits corporations and the ruling class while the poor bear the harm; feminists argue global crime is shaped by patriarchy and its victims are disproportionately women and girls.',
  'Marxists focus on class power; feminists on patriarchy and who the victims are.',
  '## Who benefits from global crime?');

// 08 Policing global crime: benefits vs challenges
add('08-policing-global-crime',
  versusFig('Policing and prosecuting global crime', {
    left: { head: 'Benefits of globalisation and technology', fill: C.teal, items: [
      'International cooperation: Interpol, Europol, the International Criminal Court (2002)',
      'Data sharing between states',
      'Financial tracking',
      'Digital forensics'] },
    right: { head: 'Challenges', fill: C.cream, items: [
      'Crimes cross jurisdictions with different laws',
      'States may lack resources or be corrupt',
      'Encryption and cryptocurrencies help criminals hide',
      'Powerful corporations and states can avoid prosecution'] },
  }),
  'Benefits of globalisation and technology for policing (Interpol, Europol, the International Criminal Court, data sharing, financial tracking, digital forensics) set against the challenges (different laws across jurisdictions, weak or corrupt states, encryption and cryptocurrencies, powerful offenders avoiding prosecution).',
  'The same technology that helps police cooperate also helps criminals hide.',
  '## How is global crime policed and prosecuted?');
