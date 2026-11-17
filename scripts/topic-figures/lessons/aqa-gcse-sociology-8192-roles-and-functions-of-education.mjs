import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-roles-and-functions-of-education';
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

// 01 Three functions, three perspectives
{
  const f = compareFig('Three functions, three judgements', {
    cols: [{ head: 'Serving the economy', fill: C.teal }, { head: 'Social mobility', fill: C.tealLight }, { head: 'Social cohesion', fill: C.cream }],
    rows: [
      { label: 'How it works', cells: ['Skills and qualifications; **role allocation** sorts people into jobs', 'Qualifications let anyone move up: **intergenerational** mobility; depends on meritocracy', 'Shared norms and values bind people together'] },
      { label: 'Example', cells: ['Apprenticeships, T Levels; education or training to 18', 'First in the family to go to university', 'Assemblies, uniforms, team sports; fundamental British values'] },
      { label: 'Marxist', cells: ['Serves capitalism: workers who accept their place', 'A **myth of meritocracy**: middle-class advantages reproduce class', 'Ruling-class values: cohesion means accepting inequality'] },
      { label: 'Feminist', cells: ['Girls and boys steered to different subjects and pay', 'Girls outperform boys, but women meet the **glass ceiling**', 'Shared culture has reflected men’s interests'] },
    ],
    labelW: 130, size: 16, headSize: 18,
  });
  add('01-three-functions', f,
    'A grid of the three functions. Serving the economy works through skills and role allocation; social mobility through qualifications and meritocracy; social cohesion through shared norms and values. Rows give an example of each, then the Marxist and feminist judgement, such as the myth of meritocracy and the glass ceiling.',
    'For each function, show how it works and how each perspective judges it.',
    '## The three functions in depth');
}

// 02 Durkheim: five ideas
{
  const f = cardsFig('Durkheim: transmitting norms and values', {
    sub: 'Moral Education (1925)',
    cards: [
      { head: 'Welding individuals into a whole', fill: C.teal, body: 'Education turns “a mass of individuals” into “a united whole”' },
      { head: 'History', fill: C.tealLight, body: 'Links the individual to society, building commitment to the group' },
      { head: 'Cooperation', fill: C.tealLight, body: 'Children learn to cooperate with people who are neither kin nor friends' },
      { head: 'Rules and discipline', fill: C.cream, body: 'Strictly enforced rules teach self-discipline: misbehaviour damages society' },
      { head: 'Society in miniature', fill: C.mustard, body: 'Children practise living by impersonal rules; schools also give the specialist skills industrial societies need' },
      { head: 'Evaluation', fill: C.panel, body: ['Marxists: ruling-class norms', 'Diverse societies: whose values are shared?', 'Pupils may reject them (Willis’s lads)'] },
    ],
    ncol: 2, size: 16, headSize: 19, badges: false,
  });
  add('02-durkheim', f,
    'Five cards set out Durkheim’s ideas: education welds individuals into a united whole, history links individuals to society, school teaches cooperation with non-kin, strict rules teach self-discipline, and the school is a society in miniature. A sixth card gives evaluation: ruling-class norms, diverse societies, and pupils such as Willis’s lads rejecting school values.',
    'For Durkheim, school turns a mass of individuals into a united whole.',
    '## Durkheim on education');
}

// 03 Durkheim vs Parsons
{
  const f = versusFig('Durkheim and Parsons compared', {
    sub: 'Both functionalists: school passes on shared values',
    left: { head: 'Durkheim', fill: C.teal, items: ['Emphasises **cohesion** and **moral discipline**', 'Shared history and cooperation', 'School as society in miniature'] },
    right: { head: 'Parsons', fill: C.cream, items: ['Emphasises **meritocracy**, **achieved status** and **selection**', 'School as a bridge from particularistic to universalistic standards', '“The school class as a social system” (1961)'] },
    foot: { head: 'Criticisms from the specification', text: ['“The values of the education system may simply be those of the ruling elite”', '“Equality of opportunity is an illusion in an unequal society where wealth and privilege are more important than individual merit”'] },
  });
  add('03-durkheim-parsons', f,
    'Two panels. Durkheim emphasises cohesion, moral discipline and the school as society in miniature. Parsons emphasises meritocracy, achieved status, selection and the school as a bridge to universalistic standards. Below, two criticisms quoted in the specification.',
    'Cohesion and discipline: Durkheim. Meritocracy and universalistic standards: Parsons.',
    '## Parsons on education');
}

// 04 Types of school
{
  let s = '';
  s += box(30, 112, 410, 74, { fill: C.tealLight, sw: 2 }) + label(50, 142, 'Primary', { size: 19, weight: 700 }) + label(50, 168, 'usually 4 or 5 to 11; may be infant and junior', { size: 15.5 });
  s += arrow(444, 149, 456, 149, { w: 3 });
  s += box(460, 112, 410, 74, { fill: C.teal, sw: 2 }) + label(480, 142, 'Secondary', { size: 19, weight: 700 }) + label(480, 168, 'usually 11 to 16 or 18', { size: 15.5 });
  s += label(450, 222, 'Who funds and controls the school?', { size: 19, weight: 700, anchor: 'middle' });
  const L = headPanel(30, 240, 540, 420, 'State-funded: free to attend', { fill: C.teal, size: 20 });
  const R = headPanel(590, 240, 280, 420, 'Private (independent)', { fill: C.cream, size: 20 });
  s += L.svg + R.svg;
  const st = [
    ['Community schools', 'Run by local authorities'],
    ['Academies and free schools', 'Independent of local authority control; free schools set up by groups such as charities or parents'],
    ['Grammar schools', 'Selective: admit pupils by an entrance test'],
    ['Faith schools', 'A religious character (can also be private)'],
  ];
  let y = 310;
  st.forEach(([h, b]) => {
    const bp = para(0, 0, 480, b, { size: 15.5 }), hh = 34 + bp.h + 14;
    s += box(48, y, 504, hh, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(64, y + 26, h, { size: 17, weight: 700 }) + para(64, y + 50, 480, b, { size: 15.5, fill: C.muted }).svg;
    y += hh + 10;
  });
  s += bullets(608, 314, 244, ['Funded mainly by **fees**', 'Not required to follow the National Curriculum', 'The oldest and most famous often called “public schools”', '**Marxists:** reproduce elite advantage through resources, cultural capital and networks'], { size: 16, gap: 10 }).svg;
  const n = note(680, 'Common mistake', 'Academies are state-funded; they are not private schools.');
  add('04-types-of-school',
    svg(900, Math.round(680 + n.h + 24), 'Types of school', s + n.svg),
    'Primary schools take ages 4 or 5 to 11 and secondary schools 11 to 16 or 18. State-funded schools are free and include community schools, academies and free schools, selective grammar schools and faith schools. Private schools are fee-paying and need not follow the National Curriculum; Marxists say they reproduce elite advantage.',
    'Sort schools by age, then by who funds and controls them.',
    '## Types of school');
}

// 05 Home schooling vs de-schooling
{
  const f = versusFig('Home schooling or de-schooling?', {
    left: { head: 'Home schooling', fill: C.teal, sub: 'Moves education out of school, but keeps a planned education', items: ['Legal in England: “regular attendance at school or otherwise”', 'Reasons: bullying, special educational needs, beliefs, unhappy with local schools', 'Questions: less secondary socialisation with peers? How far can the state check?', 'Depends on parents’ time, money and education: a **class** link'] },
    right: { head: 'De-schooling', fill: C.cream, sub: 'Rejects formal schooling itself', items: ['Illich, Deschooling Society (1971): replace schools, do not reform them', 'Schools teach pupils to confuse being taught with learning', 'And to depend on institutions', '**Learning webs:** networks to share skills and resources and learn what you choose'] },
    foot: { head: 'The key difference', text: 'Home schooling changes where education happens; de-schooling is a critique of the institution of school.' },
  });
  add('05-home-de-schooling', f,
    'Two panels. Home schooling is legal in England and keeps a planned education outside school, chosen for reasons such as bullying or beliefs, and depends on parents’ resources. De-schooling, from Illich, rejects schools, which he said teach pupils to confuse being taught with learning, and proposes learning webs.',
    'Home schooling moves education out of school; de-schooling rejects school itself.',
    '## Alternative forms of educational provision');
}
