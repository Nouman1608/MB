import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-cambridge-sociology-socialisation-social-control-and-identity';
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

// 01 Building blocks of the social construction of reality
{
  const steps = [
    ['Value', 'general belief about what is good', 'respect for elders', C.teal],
    ['Norm', 'specific rule that puts it into practice', 'standing when a grandparent enters', C.tealLight],
    ['Role and status', 'expected behaviour attached to a position', 'grandchild and grandparent', C.tealLight],
    ['Taken for granted', 'learned so early it feels natural', '“that’s just how it is”', C.cream],
  ];
  const w = 195, gap = 20;
  let s = '';
  steps.forEach(([h, d, ex, f], i) => {
    const x = 30 + i * (w + gap);
    s += `<rect x="${x}" y="110" width="${w}" height="140" rx="14" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + `<path d="${roundTop(x + 1.25, 111.25, w - 2.5, 52)}" fill="${f}"/>` +
      label(x + w / 2, 144, h, { size: 19, weight: 700, anchor: 'middle' }) + para(x + w / 2, 190, w - 24, d, { size: 16, anchor: 'middle' }).svg;
    s += `<rect x="${x}" y="290" width="${w}" height="80" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + para(x + w / 2, 320, w - 24, ex, { size: 16, anchor: 'middle', italic: true }).svg;
    if (i < 3) s += arrow(x + w + 2, 180, x + w + gap - 2, 180, { w: 3 }) + arrow(x + w + 2, 330, x + w + gap - 2, 330, { w: 2.5, color: C.olive, marker: 'ahO' });
  });
  s += label(30, 278, 'Example', { size: 15, weight: 700, fill: C.olive });
  const n = note(392, 'Who decides what is “normal”?', '**Ideology** (ideas serving a group’s interests, often disguising inequality) and **power** (getting others to act as you want) shape whose norms become normal. Berger and Luckmann (1966): the social world feels fixed only because we learn it and take it for granted.');
  add('01-social-construction',
    svg(900, Math.round(392 + n.h + 24), 'How social reality is built', s + n.svg),
    'A chain from value to norm to role and status to taken for granted, with the example of respect for elders producing the norm of standing when a grandparent enters. Ideology and power shape whose norms become normal.',
    'Values become norms, norms attach to roles, and early learning makes them feel natural.',
    '## What does "the social construction of reality" mean?');
}

// 02 Nature vs nurture
add('02-nature-nurture',
  versusFig('Nature or nurture?', {
    left: { head: 'Nature', fill: C.cream, sub: 'Behaviour fixed by biology, instinct or genes', items: [
      'Sociobiological claims',
      'Research on hormones'] },
    right: { head: 'Nurture', fill: C.teal, sub: 'Behaviour is learned (broadly defended by sociology)', items: [
      '**Genie (1970):** after extreme isolation never fully acquired language',
      '**Mead (1935):** gender behaviour in three New Guinea societies differed from Western expectations (fieldwork since questioned)',
      '**Oakley (1972):** parents use manipulation and canalisation'] },
    foot: { head: 'Strongest conclusion', text: 'Biology sets possibilities, but socialisation decides which ones become normal.' },
  }),
  'Nature arguments, such as sociobiology and hormone research, set against nurture evidence from the isolated child Genie, Mead’s cross-cultural study and Oakley’s work on gender socialisation. The conclusion: biology sets possibilities, socialisation decides which become normal.',
  'Biology sets the possibilities; socialisation decides which become normal.',
  '## Is human behaviour shaped by nature or nurture?');

// 03 Agencies: three theoretical readings
{
  const ag = ['Family', 'Education', 'Peer group', 'Media', 'Religion'];
  let s = '';
  ag.forEach((a, i) => { const x = 30 + i * 170; s += `<rect x="${x}" y="110" width="160" height="56" rx="28" fill="${C.ink}"/>` + label(x + 80, 145, a, { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' }); });
  s += label(450, 196, 'the same agencies, read three ways', { size: 18, anchor: 'middle', fill: C.muted, italic: true });
  s += [165, 450, 735].map((x) => arrow(450 + (x - 450) * 0.62, 208, x, 238, { w: 3 })).join('');
  const r = cardRow(244, [
    { head: 'Functionalist', fill: C.teal, sub: 'Parsons', body: 'Agencies pass on shared values that hold society together.' },
    { head: 'Marxist', fill: C.cream, sub: 'Althusser (1971)', body: '**Ideological state apparatuses** that make capitalism look fair.' },
    { head: 'Feminist', fill: C.tealLight, body: 'The same agencies reproduce patriarchy.' },
  ], { size: 17 });
  add('03-agencies-perspectives',
    svg(900, Math.round(244 + r.h + 26), 'Agencies of socialisation: three views', s + r.svg),
    'Five agencies of socialisation and social control (family, education, peer group, media, religion) are read three ways: functionalists see shared values holding society together, Marxists see ideological state apparatuses, and feminists see the reproduction of patriarchy.',
    'Theories agree on the agencies but disagree on whose interests they serve.',
    '## How do the agencies of socialisation and social control work?');
}

// 04 Four reasons for conformity
add('04-why-conform',
  cardsFig('Why do most people conform?', {
    badges: true,
    cards: [
      { head: 'Sanctions', fill: C.teal, body: 'Positive (rewards) and negative (punishments), formal or informal.' },
      { head: 'Social pressure', fill: C.teal, body: 'The wish to be accepted. **Asch (1951):** people agreed with an obviously wrong group answer.' },
      { head: 'Self-interest', fill: C.cream, body: '**Hirschi (1969):** attachment, commitment, involvement and belief mean too much to lose by deviating.' },
      { head: 'Social exchange', fill: C.cream, body: '**Homans (1958):** life is an exchange of rewards and costs; conformity lasts while the exchange is worthwhile.' },
    ],
  }),
  'Four reasons people conform: sanctions, social pressure shown in Asch’s experiments, self-interest in Hirschi’s social bond theory, and social exchange in Homans’s theory of rewards and costs.',
  'Sanctions, pressure, self-interest and exchange all keep people conforming.',
  '## Why do most people conform?');

// 05 Structure vs agency
{
  const side = (x, head, f, top, bot, dir, items, sub) => {
    let s = headPanel(x, 108, 410, 470, head, { fill: f, size: 21 }).svg + label(x + 205, 186, sub, { size: 16, anchor: 'middle', fill: C.muted, italic: true });
    const by = 206;
    s += `<rect x="${x + 105}" y="${by}" width="200" height="54" rx="12" fill="${dir ? C.ink : C.panel}" stroke="${C.ink}" stroke-width="2.5"/>` + label(x + 205, by + 34, top, { size: 18, weight: 700, anchor: 'middle', fill: dir ? '#ffffff' : C.ink });
    s += `<rect x="${x + 105}" y="${by + 130}" width="200" height="54" rx="12" fill="${dir ? C.panel : C.ink}" stroke="${C.ink}" stroke-width="2.5"/>` + label(x + 205, by + 164, bot, { size: 18, weight: 700, anchor: 'middle', fill: dir ? C.ink : '#ffffff' });
    s += dir ? arrow(x + 205, by + 60, x + 205, by + 124, { w: 5 }) : arrow(x + 205, by + 124, x + 205, by + 60, { w: 5 });
    s += bullets(x + 22, by + 230, 366, items, { size: 17, gap: 10 }).svg;
    return s;
  };
  const L = side(30, 'Structuralist', C.teal, 'Society', 'Individual', true, ['**Functionalists** (Durkheim, Parsons): order rests on consensus around shared values', '**Marxists:** order rests on power: ideology wins consent (Gramsci’s hegemony); force when consent fails'], 'starts from society');
  const R = side(460, 'Interactionist', C.cream, 'Society', 'Individuals', false, ['**Mead:** the self develops by taking the role of others', '**Goffman (1959):** people actively manage impressions', 'Order is negotiated in everyday encounters'], 'starts from individuals');
  const n = note(598, 'Evaluation', ['Structuralists can be accused of treating people as puppets', 'Interactionists of ignoring the power that limits choice']);
  add('05-structure-agency',
    svg(900, Math.round(598 + n.h + 24), 'Structure or agency?', L + R + n.svg),
    'Structuralist views start from society, which shapes the individual: functionalists stress consensus and Marxists stress power, ideology and force. Interactionist views start from individuals, whose interaction builds a negotiated social order, as in Mead and Goffman.',
    'Structuralists see society shaping people; interactionists see people building order.',
    '## Structure or agency: how is social order maintained?');
}

// 06 Changing identities
add('06-changing-identities',
  cardsFig('How are identities changing?', {
    cards: [
      { head: 'Class', fill: C.teal, body: ['**Pakulski and Waters (1996):** consumption now matters more than occupation', '**Against:** Savage et al. (2013) still found clear class groupings based on economic, cultural and social capital'] },
      { head: 'Gender', fill: C.teal, body: ['**Connell (1987):** hegemonic masculinity', '**Mac an Ghaill (1994):** masculinity plural and contested', '**Butler (1990):** gender as performance'] },
      { head: 'Ethnicity', fill: C.cream, body: ['**Hall:** diaspora identity', '**Bhabha (1994):** hybridity, new identities from more than one cultural source', 'Accelerated by globalisation and migration'] },
      { head: 'Age', fill: C.cream, body: ['Childhood, youth and old age are socially constructed', 'Consumer markets and longer life expectancy reshape each stage'] },
    ],
    foot: { head: 'Increased choice?', text: 'Postmodernists: identities are now picked and mixed. Structural sociologists: class, gender and ethnicity still limit the menu.' },
  }),
  'Four cards on changing identities: class (Pakulski and Waters versus Savage), gender (Connell, Mac an Ghaill, Butler), ethnicity (Hall, Bhabha’s hybridity, globalisation) and age (socially constructed stages reshaped by consumer markets and longer lives). Below, the debate about increased choice.',
  'Identities are becoming more fluid and hybrid, but structure still limits the choices.',
  '## How are class, gender, ethnicity and age identities changing?');
