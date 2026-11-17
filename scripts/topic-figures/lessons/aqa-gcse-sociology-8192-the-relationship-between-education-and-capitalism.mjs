import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-the-relationship-between-education-and-capitalism';
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

// 01 Marxist starting point
{
  let s = '';
  s += box(30, 112, 400, 120, { fill: C.mustard, sw: 2.5 }) + label(230, 146, 'Bourgeoisie', { size: 21, weight: 700, anchor: 'middle' }) + para(230, 176, 360, 'own the means of production: factories, land, companies', { size: 16, anchor: 'middle' }).svg;
  s += box(470, 112, 400, 120, { fill: C.tealLight, sw: 2.5 }) + label(670, 146, 'Proletariat', { size: 21, weight: 700, anchor: 'middle' }) + para(670, 176, 360, 'must sell their labour to survive', { size: 16, anchor: 'middle' }).svg;
  s += `<line x1="434" y1="172" x2="466" y2="172" stroke="${C.rust}" stroke-width="4"/>` + label(450, 256, 'An unequal, exploitative relationship: owners profit from work they do not do', { size: 17, anchor: 'middle', fill: C.rust, weight: 600 });
  s += label(450, 300, 'So capitalism needs two things from its institutions', { size: 19, weight: 700, anchor: 'middle' });
  const r = cardRow(318, [
    { head: '1. Workers', fill: C.teal, body: 'A supply of workers with the right skills and attitudes' },
    { head: '2. Acceptance', fill: C.teal, body: 'Workers who accept their position rather than challenge it' },
  ], { size: 17, headSize: 20, gap: 40 });
  s += r.svg;
  const y = 318 + r.h;
  s += arrow(240, y + 6, 400, y + 40, { w: 3.5 }) + arrow(660, y + 6, 500, y + 40, { w: 3.5 });
  s += box(250, y + 46, 400, 70, { fill: C.mustard, sw: 3 }) + label(450, y + 80, 'Education supplies both', { size: 21, weight: 700, anchor: 'middle' }) + label(450, y + 104, 'it serves capitalism, not “society”', { size: 16, anchor: 'middle' });
  add('01-marxist-starting-point',
    svg(900, Math.round(y + 140), 'The Marxist starting point', s),
    'The bourgeoisie own the means of production and the proletariat must sell their labour, an unequal and exploitative relationship. Capitalism therefore needs workers with the right skills and attitudes, and workers who accept their position. Marxists argue education supplies both.',
    'For Marxists, education serves capitalism by supplying willing workers.',
    '## The Marxist starting point');
}

// 02 Five key ideas
{
  const f = flowFig('Bowles and Gintis: five key ideas', {
    sub: 'Schooling in Capitalist America (1976)',
    steps: [
      { head: 'Reproduction of labour power', body: 'Education produces the next generation of workers in the form capitalism needs' },
      { head: 'The correspondence principle', body: 'Social relationships at school mirror those at work: school is a rehearsal for work' },
      { head: 'The kind of worker produced', body: 'Hardworking, docile, obedient, highly motivated, and too divided to challenge management' },
      { head: 'Rejection of meritocracy', body: 'Class background is the most important factor influencing attainment' },
      { head: 'Legitimation: the myth of meritocracy', body: 'Schools claim to reward ability, so those who do badly blame themselves; inequality looks fair', fill: C.cream, edge: C.olive },
    ],
    size: 16,
  });
  add('02-five-key-ideas', f,
    'Five numbered ideas: education reproduces labour power; the correspondence principle makes school a rehearsal for work; it produces a docile, obedient workforce too divided to challenge management; class background, not merit, drives attainment; and the myth of meritocracy makes inequality look fair.',
    'The correspondence principle sits inside a wider argument about reproduction and legitimation.',
    '## Bowles and Gintis: the key ideas');
}

// 03 Hidden curriculum: what gets rewarded, and division
{
  let s = '';
  const L = headPanel(30, 108, 404, 290, 'Rewarded with higher grades', { fill: C.teal, size: 20 });
  const R = headPanel(466, 108, 404, 290, 'Not what was rewarded', { fill: C.cream, size: 20 });
  s += L.svg + R.svg;
  ['Perseverance', 'Dependability', 'Punctuality'].forEach((w, i) => { s += `<rect x="90" y="${190 + i * 58}" width="284" height="44" rx="22" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2"/>` + label(232, 219 + i * 58, w, { size: 18, weight: 700, anchor: 'middle' }); });
  ['Creativity', 'Independence'].forEach((w, i) => { s += `<rect x="526" y="${190 + i * 58}" width="284" height="44" rx="22" fill="${C.panel}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="6 5"/>` + label(668, 219 + i * 58, w, { size: 18, weight: 700, anchor: 'middle', fill: C.muted }); });
  s += para(668, 330, 340, 'Schools reward the personality of a good subordinate worker', { size: 16, anchor: 'middle', fill: C.olive, weight: 600 }).svg;
  const y = 430;
  s += label(450, y, 'Why “too divided to challenge management” matters', { size: 19, weight: 700, anchor: 'middle' });
  const c = hchain(y + 20, [
    { head: 'Ranking, setting, competition', body: 'at school', fill: C.tealLight },
    { head: 'Pupils see each other as rivals', body: 'individuals, not a group', fill: C.cream },
    { head: 'Less collective action', body: 'e.g. trade unions demanding pay', fill: C.cream },
    { head: 'Owners’ authority protected', body: '', fill: C.mustard },
  ], { size: 15.5, ag: 30 });
  s += c.svg;
  const n = note(y + 20 + c.h + 18, 'The hidden curriculum', 'Lessons learned from how school is organised, not from timetabled subjects: lining up, asking permission to leave the room, bells and timetables, accepting detentions.');
  add('03-hidden-curriculum',
    svg(900, Math.round(y + 20 + c.h + 18 + n.h + 24), 'What the hidden curriculum rewards', s + n.svg),
    'Bowles and Gintis found pupils with higher grades showed perseverance, dependability and punctuality rather than creativity or independence. Below, a chain: ranking and competition make pupils rivals, so as adults they are less likely to act collectively, which protects owners’ authority.',
    'School rewards the traits of a good subordinate and keeps workers divided.',
    '## Bowles and Gintis: the key ideas');
}

// 04 Alternative perspectives: how far each accepts it
{
  let s = '';
  s += `<defs><linearGradient id="gacc" x1="0" x2="1"><stop offset="0" stop-color="${C.mustard}"/><stop offset="1" stop-color="${C.tealLight}"/></linearGradient></defs>`;
  s += `<rect x="30" y="120" width="840" height="34" rx="17" fill="url(#gacc)" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += label(40, 110, 'accepts the principle', { size: 16, weight: 700, fill: C.olive }) + label(860, 110, 'challenges it', { size: 16, weight: 700, fill: C.tealDark, anchor: 'end' });
  const rows = [
    ['Bowles and Gintis', 'Marxist', 'School directly produces docile, obedient workers', C.mustard],
    ['Willis', 'Marxist', 'Outcome yes, mechanism no: resistance, not obedience, led the lads to manual work; no direct link', C.cream],
    ['Functionalists', 'Durkheim, Parsons', 'Schools do prepare pupils for work, but selection is fair and benefits everyone', C.teal],
    ['Feminists', '', 'A correspondence with patriarchy too: gendered curriculum steers girls to caring work; the glass ceiling', C.cream],
    ['Interactionists', '', 'Pupils are not empty vessels: they interpret, negotiate and reject school expectations', C.tealLight],
  ];
  let y = 176;
  rows.forEach(([h, sub, b, f]) => {
    const bp = para(0, 0, 560, b, { size: 16 }), rh = Math.max(70, bp.h + 28);
    s += box(30, y, 240, rh, { fill: f, sw: 2.5 }) + label(48, y + (sub ? rh / 2 - 2 : rh / 2 + 7), h, { size: 18, weight: 700 }) + (sub ? label(48, y + rh / 2 + 20, sub, { size: 15.5, fill: C.muted }) : '');
    s += box(282, y, 588, rh, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + vcenter(298, y, rh, 560, b, { size: 16 });
    y += rh + 10;
  });
  const n = note(y + 6, 'Change since the 1970s', ['Based on 1970s American schools; many jobs now value creativity, teamwork and self-motivation', '**Vocationalism:** functionalists see it as meeting economic needs; Marxists say it channels working-class pupils into lower-paid work']);
  add('04-alternative-views',
    svg(900, Math.round(y + 6 + n.h + 24), 'Who accepts the correspondence principle?', s + n.svg),
    'Five views ordered from acceptance to challenge. Bowles and Gintis: school directly produces obedient workers. Willis, also Marxist: resistance, not obedience, led to manual work. Functionalists: schools prepare for work but fairly. Feminists: schools also correspond to patriarchy. Interactionists: pupils are active, not passive. Below, change since the 1970s.',
    'Organise alternative views by how far each accepts the principle.',
    '## Alternative perspectives on the correspondence principle');
}

// 05 Willis: two routes to the same outcome
{
  let s = '';
  s += box(30, 112, 380, 90, { fill: C.mustard, sw: 2.5 }) + label(220, 148, 'Bowles and Gintis', { size: 20, weight: 700, anchor: 'middle' }) + label(220, 176, 'school trains obedience', { size: 16, anchor: 'middle' });
  s += box(490, 112, 380, 90, { fill: C.cream, sw: 2.5 }) + label(680, 148, 'Willis', { size: 20, weight: 700, anchor: 'middle' }) + label(680, 176, 'the lads resist school', { size: 16, anchor: 'middle' });
  s += arrow(220, 206, 220, 246, { w: 3.5 }) + arrow(680, 206, 680, 246, { w: 3.5 });
  s += box(30, 250, 380, 100, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + para(220, 286, 340, 'Docile, obedient workers who accept authority', { size: 17, anchor: 'middle' }).svg;
  s += box(490, 250, 380, 100, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + para(680, 280, 340, 'Neither obedient nor docile: avoid lessons, resist teachers', { size: 17, anchor: 'middle' }).svg;
  s += arrow(260, 354, 410, 410, { w: 3.5 }) + arrow(640, 354, 490, 410, { w: 3.5 });
  s += box(230, 414, 440, 108, { fill: C.teal, sw: 3 }) + label(450, 450, 'Workers capitalism needs', { size: 21, weight: 700, anchor: 'middle' }) + para(450, 478, 400, 'Willis: male-dominated, unskilled or semi-skilled manual work', { size: 15.5, anchor: 'middle' }).svg;
  const n = note(542, 'Willis is a Marxist who disagrees', 'He rejects a direct link between the economy and how schools operate: education is not a particularly successful agency of socialisation and can have unintended consequences. He challenges how the correspondence works, not whether schooling serves capitalism.');
  add('05-willis-two-routes',
    svg(900, Math.round(542 + n.h + 24), 'Willis: a different route to the same place', s + n.svg),
    'Two routes to the same outcome. Bowles and Gintis: school trains obedience, producing docile workers. Willis: the lads resisted school and were neither obedient nor docile, yet still ended up suited to manual work. Willis, also a Marxist, challenges how the correspondence works, not whether schooling serves capitalism.',
    'Capitalism still got its workers, but through resistance rather than obedience.',
    '## Alternative perspectives on the correspondence principle');
}

// 06 12-mark plan
{
  const rows = [
    ['Introduction', 'Define capitalism and the correspondence principle', C.panel],
    ['For (Marxist)', 'Bowles and Gintis: labour power; two or three correspondences; myth of meritocracy', C.mustard],
    ['Partly for', 'Willis: resistance, yet the outcome still suited manual work', C.cream],
    ['Against', 'Functionalists: Durkheim and Parsons: skills, consensus, fair selection', C.teal],
    ['Widening', 'Feminists: schools also serve patriarchy through the gendered curriculum', C.tealLight],
    ['Evaluation', '1970s American evidence; modern jobs value creativity; pupils are active', C.panel],
    ['Judgement', 'Capitalism is one of several interests served, not the only one', C.mustard],
  ];
  let s = label(450, 96, '“Discuss how far sociologists would agree that schools mainly serve the interests of capitalism”', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  rows.forEach(([h, b, f], i) => {
    const y = 120 + i * 72;
    s += box(30, y, 200, 60, { fill: f, sw: 2 }) + label(130, y + 37, h, { size: 18, weight: 700, anchor: 'middle' });
    s += box(244, y, 626, 60, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + vcenter(260, y, 60, 596, b, { size: 16 });
    if (i < rows.length - 1) s += `<line x1="130" y1="${y + 60}" x2="130" y2="${y + 72}" stroke="${C.ink}" stroke-width="2.5"/>`;
  });
  add('06-twelve-mark-plan',
    svg(900, 120 + 7 * 72 + 12, 'Planning a 12-mark answer', s),
    'Seven stacked steps for a 12-mark answer: introduction; the Marxist case from Bowles and Gintis; Willis as partly for; functionalists against; feminists widening the interests served; evaluation of the 1970s evidence; and a judgement that capitalism is one of several interests served.',
    'Weigh Bowles and Gintis against at least three other views, then judge.',
    '## Worked example: planning a 12-mark answer');
}
