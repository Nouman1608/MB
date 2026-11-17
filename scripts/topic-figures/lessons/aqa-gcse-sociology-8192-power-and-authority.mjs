import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-power-and-authority';
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

// 01 Power: authority vs coercion
{
  let s = '';
  s += box(250, 108, 400, 90, { fill: C.mustard, sw: 3 }) + label(450, 142, 'Power (Weber)', { size: 22, weight: 700, anchor: 'middle' }) + para(450, 170, 370, 'getting your own way, even against resistance', { size: 16, anchor: 'middle' }).svg;
  s += arrow(370, 202, 240, 246, { w: 3.5 }) + arrow(530, 202, 660, 246, { w: 3.5 });
  const r = cardRow(252, [
    { head: 'Authority', sub: 'Accepted as legitimate', fill: C.teal, body: ['People obey because they believe they **ought to**', '**e.g.** a teacher asks a class to be quiet; pupils accept the right to ask', '**Stable:** gains willing obedience'] },
    { head: 'Coercion', sub: 'Force or the threat of force', fill: C.cream, body: ['People obey because they **fear the consequences**', '**e.g.** a bully takes another pupil’s phone: no accepted right, only fear', '**Costly:** a ruler must keep spending resources on force'] },
  ], { size: 17, headSize: 22, gap: 40 });
  s += r.svg;
  add('01-authority-coercion',
    svg(900, Math.round(252 + r.h + 24), 'Power, authority and coercion', s),
    'Power, getting your own way even against resistance, takes two forms. Authority is accepted as legitimate, as when pupils accept a teacher’s right to ask for quiet, and is stable. Coercion rests on force or fear, as when a bully takes a phone, and is costly to maintain.',
    'Authority is power people accept as rightful; coercion is power based on fear.',
    '## Power, authority and coercion');
}

// 02 Strengths and weaknesses of each type
{
  const f = compareFig('How each type of authority holds up', {
    cols: [{ head: 'Traditional', fill: C.cream }, { head: 'Charismatic', fill: C.mustard }, { head: 'Rational-legal', fill: C.teal }],
    rows: [
      { label: 'People obey because…', cells: ['“It has always been done this way”', 'Of who the leader is', 'Of the position, not the person'] },
      { label: 'Examples', cells: ['Hereditary monarch; tribal chief or village elder', 'Religious prophet; revolutionary leader; leader of a new social movement', 'Police officer, judge, head teacher, tax inspector, MP'] },
      { label: 'Strengths', cells: ['Stable over generations; does not depend on personal qualities', 'Inspires rapid change and great loyalty', 'Predictable and fair in principle; power passes smoothly'] },
      { label: 'Weaknesses', cells: ['Challenged when customs change; can resist useful change', 'Unstable: depends on one person; crisis when the leader dies', 'Rigid “red tape”; questioned if rules seem unfair or are broken'] },
    ],
    labelW: 150, size: 16, headSize: 19,
    foot: { head: 'Ideal types', text: 'Weber’s types are pure models for comparison. He argued rational-legal authority becomes the main type in modern societies.' },
  });
  add('02-strengths-weaknesses', f,
    'A table comparing traditional, charismatic and rational-legal authority: why people obey, examples, strengths and weaknesses. Traditional authority is stable but resists change; charismatic authority inspires but is unstable; rational-legal authority is predictable but can become rigid red tape.',
    'Each type of authority gains legitimacy in a different way, and can lose it in a different way.',
    '## Weber\'s three types of authority');
}

// 03 Routinisation of charisma
{
  const items = [
    { head: 'Charismatic leader', body: 'Followers devoted to exceptional qualities', fill: C.mustard },
    { head: 'Crisis', body: 'The leader fails or dies', fill: C.cream },
    { head: 'Followers organise', body: 'An organisation, rules or a line of succession', fill: C.tealLight },
    { head: 'Lasting authority', body: 'Turned into rules or traditions', fill: C.teal },
  ];
  const c = hchain(118, items, { size: 16, ag: 34 });
  const n = note(118 + c.h + 24, 'The routinisation of charisma', 'Weber’s term for turning charismatic authority into lasting rules, traditions or organisations, often when the leader dies.');
  add('03-routinisation',
    svg(900, Math.round(118 + c.h + 24 + n.h + 24), 'How charisma is made to last', c.svg + n.svg),
    'A chain: a charismatic leader with devoted followers faces a crisis when the leader fails or dies; followers set up an organisation, rules or a line of succession; the authority becomes lasting rules or traditions.',
    'Charisma is unstable, so followers turn it into rules or traditions.',
    '## Weber\'s three types of authority');
}

// 04 Bureaucracy
{
  let s = '';
  const lv = [[450, 1], [450, 2], [450, 4]];
  const bw = 100, bh = 46;
  // pyramid of offices
  const rows = [[1], [2], [4]];
  const pos = [];
  rows.forEach((r, i) => {
    const n = r[0], y = 130 + i * 90, total = n * bw + (n - 1) * 16, x0 = 300 - total / 2;
    pos.push([]);
    for (let k = 0; k < n; k++) { const x = x0 + k * (bw + 16); s += box(x, y, bw, bh, { fill: [C.mustard, C.teal, C.tealLight][i], sw: 2 }) + label(x + bw / 2, y + 29, 'office', { size: 16, anchor: 'middle', weight: 600 }); pos[i].push(x + bw / 2); }
  });
  pos[1].forEach((x) => { s += `<line x1="300" y1="176" x2="${x}" y2="220" stroke="${C.ink}" stroke-width="2.5"/>`; });
  pos[2].forEach((x, k) => { s += `<line x1="${pos[1][k < 2 ? 0 : 1]}" y1="266" x2="${x}" y2="310" stroke="${C.ink}" stroke-width="2.5"/>`; });
  s += label(300, 388, 'each office supervised by the one above', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  s += box(560, 120, 310, 280, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(580, 152, 'Features', { size: 19, weight: 700 });
  s += bullets(580, 188, 276, ['**Hierarchy** of offices', '**Written rules** and procedures', '**Specialisation**: defined areas of work', '**Impersonality**: rules, not feelings', 'Appointment and promotion on **qualifications and merit**'], { size: 16, gap: 8 }).svg;
  const n = note(420, 'The organisational form of rational-legal authority', 'Examples: government departments, large companies, hospitals and schools.');
  add('04-bureaucracy',
    svg(900, Math.round(420 + n.h + 24), 'Bureaucracy', s + n.svg),
    'A pyramid of offices, each supervised by the one above, beside a list of features: hierarchy, written rules, specialisation, impersonality, and appointment on qualifications and merit. Bureaucracy is the organisational form of rational-legal authority, found in government departments, companies, hospitals and schools.',
    'Bureaucracy puts rational-legal authority into practice through rules and a hierarchy of offices.',
    '## Weber\'s three types of authority');
}

// 05 Who really holds power?
{
  const f = cardsFig('Who really holds power?', {
    cards: [
      { head: 'Functionalist: society', fill: C.teal, body: ['Power is used for collective goals: defence, order, welfare', 'Legitimate because of a **value consensus**', '**But:** ignores conflict and self-interest'] },
      { head: 'Marxist: the ruling class', fill: C.tealLight, body: ['Power follows ownership; the state serves owners', 'Authority produced by **ruling class ideology**, e.g. property laws', '**But:** Weber rejected this; governments passed minimum wage and safety laws'] },
      { head: 'Feminist: men', fill: C.cream, body: ['Men hold most formal posts in Parliament, business and religion', 'Traditional authority in families; threat of male violence (Walby)', '**But:** women’s share of posts has grown; liberal feminists stress progress'] },
      { head: 'Pluralist: many groups', fill: C.tealLight, body: ['Parties, **pressure groups**, unions and businesses compete', 'No single group dominates; elections remove governments', '**But:** large businesses have far more resources'] },
    ],
    ncol: 2, size: 16, headSize: 20,
  });
  add('05-who-holds-power', f,
    'Four cards. Functionalists say power serves society through value consensus. Marxists say it serves the ruling class through ideology. Feminists say men dominate formal and informal power. Pluralists say power is spread among competing groups. Each card ends with a criticism.',
    'The perspectives disagree about whether authority in the UK is genuinely legitimate.',
    '## Perspectives on power and authority');
}

// 06 Worked item: Ashgrove Mosque
{
  let s = '';
  s += box(30, 108, 840, 96, { fill: C.panel, sw: 2.5 }) + label(48, 136, 'Item (fictional): Ashgrove Mosque', { size: 16, weight: 700, fill: C.muted });
  s += para(48, 164, 800, 'The imam is respected for his knowledge and personal kindness. The finance committee follows a written constitution and elects its treasurer every three years.', { size: 17 }).svg;
  s += arrow(240, 208, 240, 240, { w: 3 }) + arrow(660, 208, 660, 240, { w: 3 });
  const r = cardRow(246, [
    { head: 'The imam', fill: C.mustard, sub: 'Charismatic authority; informal power', body: ['People follow him for his **personal qualities**', 'No rule obliges anyone to follow his advice'] },
    { head: 'The treasurer', fill: C.teal, sub: 'Rational-legal authority; formal power', body: ['Elected under a **written constitution**', 'Members obey the role, not the person', 'A new treasurer inherits the same authority'] },
  ], { size: 17, headSize: 21 });
  s += r.svg;
  const n = note(246 + r.h + 18, 'What makes the answer work', 'Name the type, link it to a detail in the item, and explain why it fits.');
  add('06-worked-item',
    svg(900, Math.round(246 + r.h + 18 + n.h + 24), 'Applying Weber to an item', s + n.svg),
    'A fictional item about a mosque. The imam’s influence is charismatic and informal, because people follow his personal qualities and no rule obliges them. The treasurer holds rational-legal, formal authority, because she is elected under a written constitution and a successor would inherit the same authority.',
    'Name the type, link it to the item, and explain why it fits.',
    '## Worked example: applying Weber to an item');
}
