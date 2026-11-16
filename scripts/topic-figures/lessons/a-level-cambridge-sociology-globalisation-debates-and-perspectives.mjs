import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-cambridge-sociology-globalisation-debates-and-perspectives';
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

// 01 Defining globalisation: key ideas and three problems
{
  const r1 = cardRow(108, [
    { head: 'Giddens (1999)', fill: C.teal, body: 'Intensification of worldwide social relations: local events are shaped by distant ones.' },
    { head: 'Harvey (1989)', fill: C.teal, body: '**Time-space compression**: distance and time matter less.' },
    { head: 'McLuhan (1962)', fill: C.teal, body: 'The **global village**.' },
  ]);
  const y2 = 108 + r1.h + 50;
  const r2 = cardRow(y2, [
    { head: '1  Is it new?', fill: C.cream, body: 'Trade empires and colonialism linked continents centuries ago; sceptics see a difference of degree.' },
    { head: '2  One process or several?', fill: C.cream, body: 'Economic, political and cultural globalisation move at different speeds.' },
    { head: '3  Is it global at all?', fill: C.cream, body: 'The rural poor have little access to global networks; it may describe richer groups’ experience.' },
  ]);
  const f = note(y2 + r2.h + 18, null, '**Glocalisation** (Robertson, 1992): global products and ideas adapted to local cultures. **Global culture**: shared consumer goods, media and values circulating worldwide.');
  add('01-defining-globalisation',
    svg(900, Math.round(y2 + r2.h + 18 + f.h + 24), 'Defining globalisation',
      r1.svg + label(450, 108 + r1.h + 34, 'Three problems with defining it', { size: 20, weight: 700, anchor: 'middle' }) + r2.svg + f.svg),
    'Top row: Giddens defines globalisation as intensified worldwide social relations, Harvey calls it time-space compression and McLuhan the global village. Bottom row: three problems with the definition: whether it is new, whether it is one process or several, and whether it is global at all. Glocalisation and global culture are defined below.',
    'Globalisation is easy to describe but hard to pin down: is it new, single and truly global?',
    '## What is globalisation, and why is it hard to define?');
}

// 02 Held et al. typology spectrum + critical perspectives
{
  const ax = 190;
  const spec = arrow(70, ax, 840, ax, { w: 4 }) + arrow(830, ax, 60, ax, { w: 4 }) +
    label(60, ax - 18, 'Least change', { size: 17, weight: 600, fill: C.muted }) +
    label(840, ax - 18, 'Most change', { size: 17, weight: 600, fill: C.muted, anchor: 'end' }) +
    [[167, C.cream], [450, C.tealLight], [733, C.teal]].map(([x, f]) => `<circle cx="${x}" cy="${ax}" r="12" fill="${f}" stroke="${C.ink}" stroke-width="3"/>`).join('');
  const row = cardRow(ax + 32, [
    { head: 'Sceptic', fill: C.cream, body: 'Exaggerated: most trade is regional and states remain powerful.', sub: 'Hirst and Thompson (1996)' },
    { head: 'Transformationalist', fill: C.tealLight, body: 'Real but uneven: reshapes states rather than abolishing them.', sub: 'Held et al. (1999)' },
    { head: 'Globalist', fill: C.teal, body: 'Real and largely positive: borders and states matter less.', sub: 'Ohmae (1990)' },
  ]);
  const y2 = ax + 32 + row.h + 56;
  const row2 = cardRow(y2, [
    { head: 'Marxist', fill: C.panel, body: 'Expansion of capitalism; a transnational capitalist class benefits (Sklair; Wallerstein).' },
    { head: 'Feminist', fill: C.panel, body: 'Relies on and may deepen exploitation of women’s paid and unpaid labour (Enloe; Hochschild).' },
    { head: 'Postmodernist', fill: C.panel, body: 'Fragmented, hybrid, consumer-based identities; decline of grand narratives (Baudrillard; Bauman).' },
  ]);
  add('02-six-perspectives',
    svg(900, Math.round(y2 + row2.h + 26), 'Who benefits? Six perspectives',
      label(450, 116, 'Held et al.’s typology: how far has globalisation changed the world?', { size: 18, anchor: 'middle', fill: C.muted }) + spec + row.svg +
      label(450, y2 - 20, 'Critical perspectives: who gains and who loses?', { size: 20, weight: 700, anchor: 'middle' }) + row2.svg),
    'A spectrum runs from sceptics, who say globalisation is exaggerated, through transformationalists, who see it as real but uneven, to globalists, who see it as real and largely positive. Below, Marxist, feminist and postmodernist perspectives on who benefits.',
    'Use the sceptic–transformationalist–globalist spectrum as an essay backbone, then add critical perspectives.',
    '## Who benefits from globalisation? The six perspectives');
}

// 03 Identity: convergence vs divergence
add('03-convergence-divergence',
  versusFig('Globalisation and identity', {
    left: { head: 'Cultural convergence', sub: 'Global media and brands make cultures more alike (homogenisation)', items: [
      '**McDonaldization** (Ritzer, 1993): efficiency, calculability, predictability and control spread to all areas of life',
      '**Westernisation**: convergence is really the spread of Western, especially American, consumerism, individualism and liberal values (cultural imperialism)'] },
    right: { head: 'Cultural divergence', sub: 'Contact between cultures can increase difference', items: [
      '**Hybrid identity**: blending more than one culture (Bhabha; Hall)',
      '**Cultural defence**: protecting culture against outside threat through religion or nationalism (Bruce)',
      '**Ethnic revitalisation**: reviving ethnic languages, dress or traditions'] },
    foot: { head: 'Both at once?', text: 'Barber’s Jihad vs. McWorld (1995): homogenisation and backlash are two sides of one process. Huntington (1996) predicted cultural identities would drive conflict; critics say he exaggerates the unity of “civilisations”.' },
  }),
  'Two columns: cultural convergence, where global media and brands make cultures alike through McDonaldization and Westernisation, against cultural divergence, where contact produces hybrid identities, cultural defence and ethnic revitalisation. Barber and Huntington are noted below.',
  'Globalisation can make cultures more alike and also provoke new differences.',
  '## How does globalisation affect identity?');

// 04 Democracy and human rights debate
add('04-spread-of-democracy',
  versusFig('Is globalisation spreading democracy?', {
    left: { head: 'Yes', sub: 'Fukuyama, “The End of History?” (1989)', items: [
      'Liberal democracy defeated its rivals after the Cold War',
      'Universal Declaration of Human Rights (1948)',
      'International courts',
      'Global media scrutiny spreads rights norms'] },
    right: { head: 'Critics', sub: 'Gains are partial and contested', items: [
      'Democratic gains are uneven and in some places reversed',
      '“Democracy promotion” can serve Western interests',
      'TNCs and global markets can override the choices of elected governments'] },
  }),
  'Two columns. Fukuyama argued liberal democracy won after the Cold War, with human rights declarations, international courts and media scrutiny as evidence. Critics reply that gains are uneven or reversed, that democracy promotion can serve Western interests and that markets can override elected governments.',
  'Evidence of spreading rights norms is set against uneven gains and the power of markets.',
  '## Is globalisation spreading democracy and human rights?');

// 05 Global social movements timeline
{
  const ev = [[1999, 'Seattle', 'protests at the WTO meeting'], [2001, 'World Social Forum', 'first held in Porto Alegre, Brazil'], [2011, 'Occupy', 'movement'], [2018, 'Fridays for Future', 'climate movement (from 2018)']];
  const x0 = 100, x1 = 800;
  const xs = ev.map(([y]) => x0 + ((y - 1999) / (2018 - 1999)) * (x1 - x0));
  const bw = 195, bg = 20;
  const bh = Math.max(...ev.map(([, h, b]) => para(0, 0, bw - 20, h, { size: 19, weight: 700 }).h + para(0, 0, bw - 20, b, { size: 16 }).h)) + 40;
  const ly = 108 + bh + 80;
  let s = `<line x1="50" y1="${ly}" x2="850" y2="${ly}" stroke="${C.ink}" stroke-width="4"/>`;
  ev.forEach(([yr, h, b], i) => {
    const x = xs[i], bx = 30 + i * (bw + bg), by = 108;
    const hp = para(bx + bw / 2, by + 32, bw - 20, h, { size: 19, weight: 700, anchor: 'middle' });
    s += `<line x1="${bx + bw / 2}" y1="${by + bh}" x2="${x}" y2="${ly - 13}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += `<rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="12" fill="${C.panel}" stroke="${C.panelEdge}" stroke-width="2.5"/>`;
    s += hp.svg + para(bx + bw / 2, by + 32 + hp.h + 2, bw - 20, b, { size: 16, anchor: 'middle', fill: C.muted }).svg;
    s += `<circle cx="${x}" cy="${ly}" r="13" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>`;
    s += label(x + (i === 0 ? -8 : i === 1 ? 8 : 0), ly + 42, String(yr), { size: 20, weight: 700, anchor: i === 0 ? 'end' : i === 1 ? 'start' : 'middle' });
  });
  const y3 = ly + 76;
  const r = cardRow(y3, [
    { head: '“Alter-globalisation”', fill: C.tealLight, body: 'Many movements seek a different globalisation, not none, and use the same networks they criticise.' },
    { head: 'Castells (1996)', fill: C.teal, body: 'Networked communication gives such movements new power.' },
    { head: 'Evaluation', fill: C.cream, body: 'Movements often struggle to turn protest into lasting policy change.' },
  ]);
  add('05-global-social-movements',
    svg(900, Math.round(y3 + r.h + 26), 'Global social movements', s + r.svg),
    'Timeline of global social movements: protests at the WTO meeting in Seattle (1999), the first World Social Forum in Porto Alegre (2001), Occupy (2011) and Fridays for Future (from 2018). Below: many call themselves alter-globalisation, Castells says networks give them power, but they struggle to change policy.',
    'Global movements use global networks to challenge globalisation, with mixed policy results.',
    '## Can global social movements oppose globalisation?');
}

// 06 Nation state debate
add('06-nation-state',
  cardsFig('Can nation states still tackle global problems?', {
    ncol: 3,
    cards: [
      { head: 'Globalist', fill: C.teal, sub: 'States are losing power', body: 'Power shifts to markets and TNCs. Ohmae, The End of the Nation State (1995).' },
      { head: 'Sceptic', fill: C.cream, sub: 'States are still strong', body: 'They control borders, taxes, armies and law: shown by trade wars and border closures.' },
      { head: 'Transformationalist', fill: C.tealLight, sub: 'States act together', body: 'Cooperation through agreements such as the Kyoto Protocol (1997) and Paris Agreement (2015).' },
    ],
    foot: { head: 'Beck, Risk Society (1986)', text: 'Manufactured risks such as climate change cross borders, so national solutions alone cannot work.' },
  }),
  'Three views on the nation state: globalists say states are losing power to markets and TNCs, sceptics say states still control borders, taxes, armies and law, and transformationalists say states increasingly cooperate through agreements such as Kyoto and Paris. Beck adds that manufactured risks cross borders.',
  'Globalists see the state fading, sceptics see it strong, transformationalists see it cooperating.',
  '## Can nation states still tackle global problems?');

// 07 35-mark essay plan
add('07-essay-plan',
  flowFig('Planning a 35-mark Paper 4 essay', {
    steps: [
      { head: 'Define', body: 'Define the key term in the question and show awareness of debate about it.' },
      { head: 'Set out the view', body: 'Present the view in the question with evidence (for example, globalist arguments).' },
      { head: 'Evaluate', body: 'Challenge it with contrasting perspectives: sceptic, Marxist, feminist.' },
      { head: 'Apply', body: 'Use examples from more than one society.' },
      { head: 'Judge', body: 'Conclude with a judgement; transformationalism often gives a balanced position.', fill: C.cream, edge: C.olive },
    ],
  }),
  'Five numbered steps for a 35-mark essay: define the key term, set out the view in the question with evidence, evaluate with contrasting perspectives, apply examples from more than one society, and conclude with a judgement.',
  'Every Paper 4 essay moves from definition to a reasoned judgement.',
  '## How do you plan a 35-mark Paper 4 essay on this?');
