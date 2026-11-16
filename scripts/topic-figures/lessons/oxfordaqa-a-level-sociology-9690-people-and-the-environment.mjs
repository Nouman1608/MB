import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-sociology-9690-people-and-the-environment';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers (sociology figures: wrapped text, tables, flows, cards) ----
const esc = (s) => String(s).replace(/&(?![a-z]+;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const CW = 0.525, CWB = 0.575; // average glyph width / font size for Inter (regular, bold)
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

// 01 Urban forms
{
  add('01-urban-forms', cardsFig('Social life in cities', {
    sub: 'urbanisation: a growing share of people living in towns and cities',
    ncol: 3, size: 16, headSize: 18,
    cards: [
      { head: '‘Slums’ and informal housing', body: 'UN-Habitat: lacking durable housing, space, water, sanitation or secure tenure. **Davis (2006):** growth followed debt and structural adjustment.', fill: C.cream },
      { head: 'Suburbia', body: 'Lower-density housing on city edges, often linked to car use and commuting.', fill: C.tealLight },
      { head: 'Segregation', body: 'Separation of groups by class, ethnicity or religion across city space.', fill: C.cream },
      { head: 'Gated communities', body: 'Walled estates with controlled entry. **Davis (1990):** "fortress" Los Angeles.', fill: C.cream },
      { head: 'Megacities', body: 'Urban areas of over 10 million people, such as Lagos, Karachi or Dhaka.', fill: C.teal },
      { head: 'Non-places', body: '**Augé:** airports, motorways, hotel chains, malls: passed through anonymously, without shared history.', fill: C.teal },
    ],
  }),
    'Six features of city life: slums and informal housing, suburbia, segregation, gated communities, megacities of over 10 million people, and Augé’s non-places such as airports and malls.',
    'Cities divide space by wealth, group and function.',
    '## 3.2.2.1 The built human environment');
}

// 02 Demographic transition
{
  let s = '';
  const x0 = 110, x1 = 860, y0 = 140, y1 = 400, sw = (x1 - x0) / 4;
  s += panel(30, 110, 840, 440);
  for (let i = 0; i < 4; i++) {
    const x = x0 + i * sw;
    if (i % 2 === 0) s += `<rect x="${x}" y="${y0 - 10}" width="${sw}" height="${y1 - y0 + 10}" fill="${C.tealLight}" opacity="0.6"/>`;
    s += badge(x + sw / 2, y1 + 32, 18, String(i + 1), C.cream);
  }
  s += `<line x1="${x0}" y1="${y1}" x2="${x1}" y2="${y1}" stroke="${C.ink}" stroke-width="3"/><line x1="${x0}" y1="${y0 - 10}" x2="${x0}" y2="${y1}" stroke="${C.ink}" stroke-width="3"/>`;
  const H = 190, L = 340;
  const birth = `M${x0},${H} L${x0 + sw},${H + 4} L${x0 + 1.4 * sw},${H + 10} C${x0 + 2 * sw},${H + 30} ${x0 + 2.4 * sw},${L - 20} ${x0 + 3 * sw},${L} L${x1},${L + 4}`;
  const death = `M${x0},${H + 24} C${x0 + 0.9 * sw},${H + 26} ${x0 + 1.2 * sw},${L} ${x0 + 2 * sw},${L + 18} L${x1},${L + 22}`;
  s += path(birth, { stroke: C.tealDark, w: 5 }) + path(death, { stroke: C.rust, w: 5, extra: 'stroke-dasharray="12 7"' });
  s += `<path d="${birth} L${x0 + 3 * sw},${L + 20} " fill="none"/>`;
  s += t(x0 + 0.2 * sw, H - 14, 'birth rate', { size: 17, weight: 700, fill: C.tealDark });
  s += t(x0 + 2.4 * sw, L + 52, 'death rate', { size: 17, weight: 700, fill: C.rust });
  s += label(x0 + 1.5 * sw, 258, 'rapid growth', { size: 16, italic: true, anchor: 'middle', weight: 600 });
  const cap = [['High birth,', 'high death'], ['Falling death,', 'high birth'], ['Falling', 'birth'], ['Low birth,', 'low death']];
  cap.forEach((c, i) => s += tl(x0 + i * sw + sw / 2, y1 + 76, c, { size: 16, anchor: 'middle', weight: 600 }, 20));
  s += `<text transform="translate(78,${(y0 + y1) / 2}) rotate(-90)" text-anchor="middle" font-size="16" fill="${C.muted}">rate</text>`;
  let y = 570;
  const n = note(y, 'Evaluation', ['Based on European history', 'Ignores state policies such as China’s one-child policy', 'Cannot predict when, or whether, poorer countries will move through it']);
  s += n.svg; y += n.h;
  add('02-demographic-transition', svg(900, y + 26, 'Demographic transition theory', s, 'Thompson; Notestein (schematic, no data plotted)'),
    'A schematic of four stages: high birth and death rates; falling death rates with high birth rates, giving rapid growth; falling birth rates; and low birth and death rates. Criticisms are listed beneath.',
    'The gap between falling death rates and falling birth rates drives population growth.',
    '## 3.2.2.1 The built human environment');
}

// 03 Views of nature
{
  add('03-views-of-nature', cardsFig('Four views of people and nature', {
    ncol: 2, size: 16,
    cards: [
      { head: 'Exploitation for human use', body: 'Nature is a resource. **White (1967):** a religious idea of human "dominion" helped justify this in Western thought.', fill: C.cream },
      { head: 'Romanticism', body: 'Nature as pure, spiritual and restorative: Wordsworth’s poetry, Thoreau’s Walden (1854).', fill: C.tealLight },
      { head: 'Conservation', body: 'Managing nature to protect it, as in Yellowstone, the first national park (1872).', fill: C.teal },
      { head: 'Media representations', body: 'Documentaries, disaster news and advertising shape what people see as "nature" and as a problem.', fill: C.tealLight },
    ],
    foot: { head: 'Future generations', text: 'Brundtland (1987): sustainable development meets "the needs of the present without compromising the ability of future generations to meet their own needs". Brand: "the long now".' },
  }),
    'Four views of the natural world: exploitation for human use, romanticism, conservation and media representations, with the Brundtland definition of sustainable development beneath.',
    'How people see nature shapes how they use it.',
    '## 3.2.2.2 Ideas about nature, time and consumption');
}

// 04 Hannigan's claims-making
{
  let s = '', y = 104;
  const f = ['Scientific authority', 'Popularisers linking science and campaigning', 'Media attention framing the issue as new and important', 'Dramatic symbols and images', 'Visible economic incentives for action', 'An institutional sponsor'];
  const cw = (840 - 2 * 14) / 3;
  f.forEach((it, i) => {
    const x = 30 + (i % 3) * (cw + 14), yy = y + Math.floor(i / 3) * 104;
    s += `<rect x="${x}" y="${yy}" width="${cw}" height="90" rx="12" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + badge(x + 32, yy + 45, 18, String(i + 1), C.cream);
    const p = para(0, 0, cw - 76, it, { size: 16, weight: 600 });
    s += para(x + 60, yy + 45 - (p.n - 1) * 10.5 + 6, cw - 76, it, { size: 16, weight: 600 }).svg;
  });
  y += 2 * 104 + 6;
  s += arrow(450, y, 450, y + 40);
  y += 48;
  s += `<rect x="170" y="${y}" width="560" height="60" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(450, y + 38, 'A real problem becomes a public issue', { size: 20, weight: 700, anchor: 'middle' });
  y += 60 + 20;
  const n = note(y, 'Common error', 'Hannigan does not say problems are "not real"; he argues they are real but need claims-making. Realists warn the approach can seem to excuse scepticism.');
  s += n.svg; y += n.h;
  add('04-hannigan-claims', svg(900, y + 26, 'Hannigan (1995): six factors for a successful claim', s, 'the social construction of environmental problems'),
    'Hannigan’s six factors that turn a real environmental problem into a public issue: scientific authority, popularisers, media attention, dramatic symbols, economic incentives and an institutional sponsor.',
    'Environmental problems are real, but they must be claimed to become public issues.',
    '## 3.2.2.2 Environmental problems and the climate crisis');
}

// 05 EMT vs green Marxism
{
  add('05-emt-green-marxism', versusFig('Can capitalism be green?', {
    left: { head: 'Ecological modernisation', sub: 'Mol; Spaargaren: yes', items: ['Technology, regulation and market incentives can green capitalism', 'Growth and protection can go together', '**Strength:** falling renewable energy costs', '**Limit:** rising consumption outweighs efficiency; dirty production moves to poorer countries'] },
    right: { head: 'Green Marxism', sub: 'Foster; Schnaiberg: no', items: ['Profit and growth cause environmental damage', '**Foster:** a metabolic rift between society and natural cycles', '**Schnaiberg (1980):** the treadmill of production', '**Limit:** state socialist societies also polluted severely'] },
    foot: { head: 'Common error', text: 'These are not two names for "green views": they disagree on whether capitalism can be sustainable.' },
  }),
    'Ecological modernisation theory argues capitalism can become greener through technology and regulation; green Marxism argues profit and growth drive damage, through Foster’s metabolic rift and Schnaiberg’s treadmill of production.',
    'The two theories disagree on whether capitalism can be sustainable.',
    '## 3.2.2.2 Sociological views and environmental justice');
}

// 06 Environmental and climate justice
{
  let s = '', y = 104;
  const r = cardRow(y, [
    { head: 'Who causes most harm', body: ['Richer countries and richer people', 'Far more emissions per head'], fill: C.cream },
    { head: 'Who suffers first and worst', body: ['Poorer countries and poorer people', 'Least access to acting sustainably', 'Within countries: poorer areas more exposed to heat, flooding, pollution'], fill: C.teal },
  ], { size: 16, gap: 90 });
  s += r.svg;
  s += `<line x1="${30 + 375 + 6}" y1="${y + r.h / 2}" x2="${30 + 375 + 84}" y2="${y + r.h / 2}" stroke="${C.rust}" stroke-width="5" marker-end="url(#ahR)"/>`;
  s += t(450, y + r.h / 2 - 14, 'costs', { size: 16, weight: 700, anchor: 'middle', fill: C.rust });
  y += r.h + 14;
  s += label(450, y + 14, 'Example: Pakistan’s 2022 floods hit a country with low historical emissions', { size: 16, italic: true, anchor: 'middle', fill: C.muted });
  y += 38;
  const c = hchain(y, [
    { head: 'Bullard', body: 'Houston, 1979: waste sites placed mainly in Black neighbourhoods', fill: C.tealLight },
    { head: 'Dumping in Dixie (1990)', body: 'linked race, class and environmental harm', fill: C.tealLight },
    { head: 'Climate justice', body: 'who caused it, who pays, who suffers; loss and damage fund (COP27, 2022)', fill: C.mustard },
  ], { ag: 40, size: 16 });
  s += c.svg; y += c.h;
  add('06-environmental-justice', svg(900, y + 26, 'Environmental and climate justice', s),
    'Richer countries and people produce far more emissions per head, while poorer countries and people suffer first and worst. Bullard’s Houston research and Dumping in Dixie lead to the idea of climate justice and the COP27 loss and damage fund.',
    'Those who cause least environmental harm often bear most of its costs.',
    '## 3.2.2.2 Sociological views and environmental justice');
}

// 07 Columbian Exchange
{
  let s = '', y = 120;
  s += `<rect x="30" y="${y}" width="270" height="200" rx="16" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>` + t(165, y + 108, 'Afro-Eurasia', { size: 23, weight: 700, anchor: 'middle' });
  s += `<rect x="600" y="${y}" width="270" height="200" rx="16" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>` + t(735, y + 108, 'The Americas', { size: 23, weight: 700, anchor: 'middle' });
  s += arrow(310, y + 60, 590, y + 60, { w: 5, color: C.rust, marker: 'ahR' });
  s += t(450, y + 46, 'horses, cattle, smallpox', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  s += arrow(590, y + 140, 310, y + 140, { w: 5, color: C.tealDark, marker: 'ahT' });
  s += t(450, y + 170, 'maize, potatoes, turkeys', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark });
  s += t(450, y + 106, 'after 1492', { size: 17, italic: true, anchor: 'middle', fill: C.muted });
  y += 200 + 24;
  const n = note(y, 'Crosby (1972)', 'Named the transfer of plants, animals and diseases between the Americas and Afro-Eurasia. Bryant (1979): the "zoological connection" between human behaviour and animals.');
  s += n.svg; y += n.h;
  add('07-columbian-exchange', svg(900, y + 26, 'The Columbian Exchange', s),
    'Two-way arrows between Afro-Eurasia and the Americas after 1492: horses, cattle and smallpox travelled to the Americas; maize, potatoes and turkeys travelled to Afro-Eurasia.',
    'After 1492 plants, animals and diseases crossed the Atlantic in both directions.',
    '## 3.2.2.3 People and animals');
}

// 08 Animal welfare vs rights
{
  add('08-welfare-rights', versusFig('Animal welfare or animal rights?', {
    left: { head: 'Animal welfare', sub: 'accepts human use', items: ['Seeks to reduce suffering', 'The "3Rs" for experiments: replace, reduce, refine', '**Singer (1975):** animal suffering counts morally'] },
    right: { head: 'Animal rights', sub: 'rejects use itself', items: ['**Regan (1983):** animals have rights that cannot be traded away', 'Challenges animal experimentation and food production'] },
    foot: { head: 'Contrast with anthropocentrism', text: 'Anthropocentrism puts human interests first. Animal cruelty is unnecessary harm, often defined in law.' },
  }),
    'Animal welfare accepts human use but seeks to reduce suffering, as with the 3Rs; animal rights, from Regan, rejects use itself. Singer argued animal suffering counts morally, against anthropocentrism.',
    'Welfare reduces suffering; rights end use.',
    '## 3.2.2.3 People and animals');
}
