import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'oxfordaqa-a-level-sociology-9690-people-and-technology';
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

// 01 Machines and work
{
  let s = '', y = 104;
  const c = hchain(y, [
    { head: 'Extraction', body: 'mining, oil', fill: C.cream },
    { head: 'Manufacturing', body: 'factories powered by machines', fill: C.tealLight },
    { head: 'Service industries', body: 'retail, finance, care', fill: C.teal },
  ], { ag: 60, size: 17 });
  s += c.svg; y += c.h + 8;
  s += label(450, y + 20, 'kinds of work have grown and shrunk in turn', { size: 16, italic: true, anchor: 'middle', fill: C.muted });
  y += 40;
  const r = cardRow(y, [
    { head: 'Bell (1973)', sub: 'post-industrial society', body: 'Service and knowledge work will come to dominate rich economies.', fill: C.teal },
    { head: 'Braverman (1974)', sub: 'Marxist', body: 'Machines deskill workers and give managers more control.', fill: C.cream },
    { head: 'Blauner (1964)', sub: 'technology matters', body: 'Alienation highest on the assembly line, lower in automated process work.', fill: C.tealLight },
  ], { size: 16 });
  s += r.svg; y += r.h;
  add('01-machines-and-work', svg(900, y + 26, 'Machines, industrialisation and work', s),
    'Work has shifted between extraction, manufacturing and service industries. Bell predicted service and knowledge work would dominate; Braverman argued machines deskill workers; Blauner found alienation varied with technology.',
    'Sociologists disagree on whether machines degrade or improve work.',
    '## 3.2.3.1 Machines, mobilities and consumption');
}

// 02 Determinism vs social construction
{
  let s = '', y = 110;
  const c = { h: 70 };
  s += `<rect x="30" y="${y}" width="320" height="70" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>` + t(190, y + 43, 'Technology', { size: 21, weight: 700, anchor: 'middle' });
  s += `<rect x="550" y="${y}" width="320" height="70" rx="14" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + t(710, y + 43, 'Social change', { size: 21, weight: 700, anchor: 'middle' });
  s += arrow(358, y + 24, 542, y + 24, { w: 4 });
  s += arrow(542, y + 50, 358, y + 50, { w: 4, color: C.tealDark, marker: 'ahT' });
  s += label(450, y + 14, 'determinism', { size: 15, weight: 700, anchor: 'middle' });
  s += label(450, y + 72, 'construction', { size: 15, weight: 700, anchor: 'middle', fill: C.tealDark });
  y += c.h + 30;
  const r = cardRow(y, [
    { head: 'Technological determinism', body: ['Technology drives social change', '**Marx (1847):** "the hand-mill gives you society with the feudal lord; the steam-mill society with the industrial capitalist"', '**McLuhan:** "the medium is the message"', 'Explains big shifts but ignores choice and power'], fill: C.cream },
    { head: 'Social constructionism', body: ['Social groups shape technology', '**Pinch and Bijker (1984):** the safety bicycle beat the penny-farthing through interpretive flexibility', 'Explains design but may understate how built technology constrains people'], fill: C.teal },
  ], { size: 16 });
  s += r.svg; y += r.h + 16;
  const n = note(y, 'A middle way: Latour’s actor-network theory', 'Humans and non-humans (machines, roads, speed bumps) are all actants in a network.');
  s += n.svg; y += n.h;
  add('02-determinism-construction', svg(900, y + 26, 'Does technology shape society?', s),
    'Technological determinism, from Marx and McLuhan, says technology drives social change; social constructionism, from Pinch and Bijker, says social groups shape technology. Latour’s actor-network theory treats humans and machines as actants in one network.',
    'Determinists start from the machine; constructionists start from the people.',
    '## 3.2.3.1 Machines, mobilities and consumption');
}

// 03 Misinformation, disinformation, propaganda
{
  add('03-false-content', cardsFig('Three kinds of misleading content', {
    ncol: 3, size: 17,
    cards: [
      { head: 'Misinformation', sub: 'no intent to deceive', body: 'False content shared without meaning to mislead.', fill: C.tealLight },
      { head: 'Disinformation', sub: 'deliberate', body: 'False content spread on purpose.', fill: C.cream },
      { head: 'Propaganda', sub: 'organised persuasion', body: 'Often by states, as in wartime posters and radio.', fill: C.mustard },
    ],
    foot: { head: 'Conspiracy theories (Uscinski and Parent, 2014)', text: '"Conspiracy theories are for losers": groups out of power use them. Letters to the New York Times, 1890 to 2010, showed no long-term rise, which questions the claim that the internet caused one.' },
  }),
    'Misinformation is false content shared without intent to deceive, disinformation is false content spread deliberately, and propaganda is organised persuasion, often by states. Uscinski and Parent found no long-term rise in conspiracy talk.',
    'Intent separates misinformation from disinformation.',
    '## 3.2.3.2 \'Traditional\' media');
}

// 04 Media-audience models
{
  add('04-audience-models', compareFig('Four media-audience models', {
    cols: [{ head: 'Main idea', fill: C.tealLight }, { head: 'Key evaluation', fill: C.cream }],
    labelW: 190, size: 16,
    rows: [
      { label: 'Hypodermic syringe', fill: C.cream, cells: ['Messages are "injected" into a passive mass audience.', 'Ignores interpretation; the 1938 War of the Worlds "panic" was later shown to be exaggerated.'] },
      { label: 'Two step flow', fill: C.cream, cells: ['**Katz and Lazarsfeld (1955):** messages pass through opinion leaders.', 'Still fairly passive; social media blurs who leads.'] },
      { label: 'Cultural effects', fill: C.teal, cells: ['Repeated messages over time shape what is seen as normal.', 'Long-term effects are hard to measure.'] },
      { label: 'Uses and gratifications', fill: C.teal, cells: ['Active use for diversion, relationships, identity, surveillance (McQuail, Blumler and Brown, 1972).', 'May overstate freedom; needs are shaped by media.'] },
    ],
  }),
    'A grid of four audience models with their main idea and a key evaluation: hypodermic syringe, two step flow, cultural effects, and uses and gratifications.',
    'The models move from a passive audience to an active one.',
    '## 3.2.3.2 \'Traditional\' media');
}

// 05 Panopticon and synopticon
{
  let s = '';
  const drawEye = (x, y, r, f) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += panel(30, 104, 410, 360) + panel(460, 104, 410, 360);
  s += t(235, 142, 'Panopticon', { size: 22, weight: 700, anchor: 'middle' }) + t(235, 166, 'the few watch the many', { size: 16, anchor: 'middle', fill: C.muted });
  const cx = 235, cy = 285;
  s += drawEye(cx, cy, 26, C.mustard);
  for (let i = 0; i < 8; i++) { const a = (i * Math.PI) / 4, px = cx + 100 * Math.cos(a), py = cy + 78 * Math.sin(a); s += drawEye(px, py, 14, C.tealLight); s += arrow(cx + 30 * Math.cos(a), cy + 30 * Math.sin(a), px - 18 * Math.cos(a), py - 18 * Math.sin(a), { w: 2.5 }); }
  s += tl(235, 420, ['Foucault (1975), from Bentham: people', 'discipline themselves when they might be watched'], { size: 15, anchor: 'middle' }, 20);
  s += t(665, 142, 'Synopticon', { size: 22, weight: 700, anchor: 'middle' }) + t(665, 166, 'the many watch the few', { size: 16, anchor: 'middle', fill: C.muted });
  const sx = 665, sy = 285;
  s += drawEye(sx, sy, 26, C.mustard);
  for (let i = 0; i < 8; i++) { const a = (i * Math.PI) / 4, px = sx + 100 * Math.cos(a), py = sy + 78 * Math.sin(a); s += drawEye(px, py, 14, C.tealLight); s += arrow(px - 18 * Math.cos(a), py - 18 * Math.sin(a), sx + 30 * Math.cos(a), sy + 30 * Math.sin(a), { w: 2.5, color: C.tealDark, marker: 'ahT' }); }
  s += tl(665, 420, ['Mathiesen (1997): the many watching', 'the few, as in celebrity culture'], { size: 15, anchor: 'middle' }, 20);
  let y = 484;
  const n = note(y, 'Digital surveillance', 'CCTV, facial recognition and data tracking extend both.');
  s += n.svg; y += n.h;
  add('05-panopticon-synopticon', svg(900, y + 26, 'Surveillance: who watches whom?', s),
    'Left: the panopticon, one watcher at the centre observing many people around, from Foucault and Bentham. Right: the synopticon, many people all watching one figure, from Mathiesen. CCTV, facial recognition and data tracking extend both.',
    'Surveillance can run from the few to the many, or the many to the few.',
    '## 3.2.3.4 Digital technologies');
}

// 06 Wall's cybercrime typology
{
  add('06-cybercrime', cardsFig('Wall (2007): three types of cybercrime', {
    ncol: 3, size: 17,
    cards: [
      { head: 'Against computers', body: 'Hacking, malware.', fill: C.cream },
      { head: 'Using computers', body: 'Fraud.', fill: C.cream },
      { head: 'In computer content', body: 'Illegal images, hate speech.', fill: C.cream },
    ],
    foot: { head: 'Responses and divides', text: ['**Cyber security:** passwords, encryption, laws', '**Digital divides (Norris, 2001):** global, social (within countries) and democratic (civic use); by income, age, location, gender and disability'] },
  }),
    'Wall’s three types of cybercrime: crimes against computers such as hacking, crimes using computers such as fraud, and crimes in computer content such as illegal images and hate speech. Cyber security and Norris’s three digital divides are noted below.',
    'Cybercrime can target computers, use them, or live in their content.',
    '## 3.2.3.4 Digital technologies');
}

// 07 Gender Shades
{
  let s = '', y = 116;
  s += label(30, y, 'Gender Shades (Buolamwini and Gebru, 2018): error rates of commercial facial analysis', { size: 17, weight: 700, fill: C.tealDark });
  y += 30;
  const bx = 250, scale = 460 / 40;
  [['Darker-skinned women', 34.7, C.rust, 'as high as 34.7%'], ['Lighter-skinned men', 1, C.teal, 'under 1%']].forEach(([n, v, f, lab], i) => {
    const yy = y + i * 80;
    s += t(30, yy + 36, n, { size: 18, weight: 700 });
    s += `<rect x="${bx}" y="${yy + 10}" width="${Math.max(v * scale, 6)}" height="40" rx="4" fill="${f}" stroke="${C.ink}" stroke-width="2"/>`;
    s += t(bx + Math.max(v * scale, 6) + 12, yy + 37, lab, { size: 18, weight: 700 });
  });
  y += 170;
  const r = cardRow(y, [
    { head: 'Noble (2018)', body: 'Search results reproduce racist and sexist stereotypes.', fill: C.cream },
    { head: 'O’Neil (2016); Eubanks (2018)', body: 'Automated decisions hit poorer people hardest.', fill: C.cream },
  ], { size: 16 });
  s += r.svg; y += r.h + 16;
  const n = note(y, 'Evaluation', 'Developers improved some systems after the findings, so bias can be reduced; critics say the deeper issue is who controls deployment.');
  s += n.svg; y += n.h;
  add('07-algorithmic-bias', svg(900, y + 26, 'Algorithms, power and inequality', s),
    'Bars compare facial analysis error rates in the Gender Shades study: as high as 34.7% for darker-skinned women against under 1% for lighter-skinned men. Noble, O’Neil and Eubanks show other ways algorithms reproduce inequality.',
    'Technology that appears neutral can build in inequality.',
    '## 3.2.3.5 Artificial intelligence and cyborgs');
}
