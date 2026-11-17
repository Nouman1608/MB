import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'igcse-cambridge-pakistan-studies-natural-resources';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (kept in this file so style.mjs stays shared and untouched) ----
const X = (s) => String(s).replace(/&(?!amp;|lt;|gt;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const GW = { ' ': .28, a: .55, b: .6, c: .55, d: .6, e: .57, f: .35, g: .6, h: .59, i: .25, j: .25, k: .53, l: .25, m: .88, n: .59, o: .59, p: .6, q: .6, r: .38, s: .5, t: .36, u: .59, v: .53, w: .79, x: .52, y: .53, z: .52, I: .28, M: .85, W: .95, '.': .27, ',': .27, ';': .27, ':': .27, '(': .35, ')': .35, "'": .25, '’': .25, '‘': .25, '"': .4, '–': .6, '—': 1, '-': .4, '/': .38, '•': .4, '%': .8, '&': .7 };
const tw = (s, size, weight = 400) => [...String(s)].reduce((a, ch) => a + (GW[ch] ?? (/[A-Z]/.test(ch) ? .68 : /[0-9]/.test(ch) ? .6 : .6)), 0) * size * (weight >= 600 ? 1.06 : 1);
const wrap = (s, width, size, weight) => {
  const out = [];
  for (const p of String(s).split('\n')) {
    let line = '';
    for (const w of p.split(' ')) { const c = line ? line + ' ' + w : w; if (line && tw(c, size, weight) > width) { out.push(line); line = w; } else line = c; }
    out.push(line);
  }
  return out;
};
const T = (x, y, s, o = {}) => t(x, y, X(s), o);
// wrapped paragraph, y = first baseline; returns {s, h}
const para = (x, y, s, width, o = {}) => {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32);
  const L = wrap(s, width, size, o.weight || 400);
  return { s: L.map((l, i) => T(x, y + i * lh, l, o)).join(''), h: L.length * lh, n: L.length };
};
const R = (x, y, w, h, fill = C.panel, edge = C.panelEdge, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 12}" fill="${fill}" stroke="${edge}" stroke-width="${o.sw ?? 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
// card: title + body (string or array; bullets) -> {s, h}. Fixed height via o.h.
const card = (x, y, w, o = {}) => {
  const { title, body, fill = C.panel, edge = C.panelEdge, ts = 20, bs = 17, tfill = C.ink, bfill = C.muted, pad = 18, align = 'start', bullets = false, sub } = o;
  let inner = '', cy = y + pad - 2;
  const tx = align === 'middle' ? x + w / 2 : x + pad, iw = w - 2 * pad;
  if (title) { const p = para(tx, cy + ts * 0.85, title, iw, { size: ts, weight: 700, fill: tfill, anchor: align }); inner += p.s; cy += p.h + 2; }
  if (sub) { const p = para(tx, cy + 15 * 0.85, sub, iw, { size: 15, fill: o.subfill || C.muted, anchor: align, weight: 600 }); inner += p.s; cy += p.h + 2; }
  if (body) {
    if (title || sub) cy += 4;
    const items = Array.isArray(body) ? body : [body];
    for (const it of items) {
      if (bullets) { const p = para(tx + 16, cy + bs * 0.85, it, iw - 16, { size: bs, fill: bfill }); inner += T(tx, cy + bs * 0.85, '•', { size: bs, fill: bfill, weight: 700 }) + p.s; cy += p.h + 3; }
      else { const p = para(tx, cy + bs * 0.85, it, iw, { size: bs, fill: bfill, anchor: align }); inner += p.s; cy += p.h + 3; }
    }
  }
  const h = o.h || Math.round(cy - y + pad - 6);
  return { s: R(x, y, w, h, fill, edge, o) + inner, h };
};
const cardH = (w, o) => card(0, 0, w, o).h;
// vertical timeline: items [{d, title, body, hi}] -> {s, h}
const timeline = (x, y, w, items, o = {}) => {
  const dw = o.dw || 130, gap = o.gap || 14, cx = x + dw / 2;
  let s = '', cy = y; const mids = [];
  for (const it of items) {
    const c = card(x + dw + 22, cy, w - dw - 22, { title: it.title, body: it.body, ts: o.ts || 19, bs: o.bs || 16, fill: it.hi ? C.cream : C.panel, edge: it.hi ? C.olive : C.panelEdge, bullets: it.bullets });
    const ph = 40, py = cy + Math.min(c.h / 2, 34) - ph / 2;
    s += c.s; mids.push([py, ph, it]);
    cy += c.h + gap;
  }
  const line = `<line x1="${cx}" y1="${y + 10}" x2="${cx}" y2="${cy - gap - 10}" stroke="${C.ink}" stroke-width="4"/>`;
  const pills = mids.map(([py, ph, it]) => R(x, py, dw, ph, it.hi ? C.mustard : C.cream, C.ink, { rx: 20, sw: 2.5 }) + T(cx, py + 27, it.d, { size: tw(it.d, 19, 700) > dw - 14 ? 16 : 19, weight: 700, anchor: 'middle' }) +
    `<line x1="${x + dw}" y1="${py + ph / 2}" x2="${x + dw + 22}" y2="${py + ph / 2}" stroke="${C.ink}" stroke-width="2.5"/>`).join('');
  return { s: line + s + pills, h: cy - gap - y };
};
// grid table: cols [{label, w}], rows [[cells]] -> {s, h}
const grid = (x, y, cols, rows, o = {}) => {
  const size = o.size || 16, hs = o.hs || 17, pad = 12, lh = Math.round(size * 1.32);
  const W = cols.reduce((a, c) => a + c.w, 0);
  const hh = Math.max(...cols.map((c) => wrap(c.label, c.w - 2 * pad, hs, 700).length)) * Math.round(hs * 1.3) + 22;
  let s = '', cy = y + hh, body = '';
  const head = cols.map((c, i) => { const xx = x + cols.slice(0, i).reduce((a, k) => a + k.w, 0); return para(xx + pad, y + 15 + hs * 0.85, c.label, c.w - 2 * pad, { size: hs, weight: 700 }).s; }).join('');
  rows.forEach((r, ri) => {
    const cells = r.map((cell, i) => wrap(cell, cols[i].w - 2 * pad, size, i === 0 && o.firstBold !== false ? 700 : 400));
    const rh = Math.max(...cells.map((L) => L.length)) * lh + 20;
    const hi = o.hiRows && o.hiRows.includes(ri);
    body += `<rect x="${x}" y="${cy}" width="${W}" height="${rh}" fill="${hi ? C.cream : ri % 2 ? C.tealLight : C.panel}"/>`;
    cells.forEach((L, i) => { const xx = x + cols.slice(0, i).reduce((a, k) => a + k.w, 0); body += L.map((l, k) => T(xx + pad, cy + 12 + size * 0.85 + k * lh, l, { size, weight: i === 0 && o.firstBold !== false ? 700 : 400, fill: i === 0 ? C.ink : C.ink })).join(''); });
    body += `<line x1="${x}" y1="${cy}" x2="${x + W}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="1.5"/>`;
    cy += rh;
  });
  let vx = x; const vl = cols.slice(0, -1).map((c) => { vx += c.w; return `<line x1="${vx}" y1="${y}" x2="${vx}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="1.5"/>`; }).join('');
  s = `<rect x="${x}" y="${y}" width="${W}" height="${cy - y}" rx="12" fill="${C.panel}"/>` + `<path d="M${x},${y + hh} L${x},${y + 12} Q${x},${y} ${x + 12},${y} L${x + W - 12},${y} Q${x + W},${y} ${x + W},${y + 12} L${x + W},${y + hh} Z" fill="${C.teal}"/>` +
    body + vl + head + `<rect x="${x}" y="${y}" width="${W}" height="${cy - y}" rx="12" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  return { s, h: cy - y };
};
// elbow connector with arrow head: points [[x,y],...]
const elbow = (pts, o = {}) => path('M' + pts.map((p) => p.join(',')).join(' L'), { stroke: o.color || C.ink, w: o.w || 3.5, extra: `marker-end="url(#${o.marker || 'ah'})"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}` });
const note = (x, y, w, s, o = {}) => card(x, y, w, { body: s, fill: C.cream, edge: C.olive, bfill: C.ink, bs: o.bs || 17, title: o.title, ts: o.ts || 19, ...o });
// ---- end helpers ----

// 01 Four themes introduced in Section 2
{
  const cx = 450, cy = 330;
  const th = [
    ['Developing country', 'Problems and opportunities of being a developing country'],
    ['Environment', 'Effects on, and conservation of, the environment'],
    ['Sustainable development', 'Using a resource without running it down'],
    ['Feasibility studies', 'Their importance in judging a plan'],
  ];
  const w = 330, h = Math.max(...th.map(([a, c]) => cardH(w, { title: a, body: c, bs: 16 })));
  const pos = [[30, 112], [540, 112], [30, 548 - h], [540, 548 - h]];
  let b = '';
  pos.forEach(([x, y], i) => {
    b += `<line x1="${x < cx ? x + w : x}" y1="${y + h / 2}" x2="${cx}" y2="${cy}" stroke="${C.panelEdge}" stroke-width="4"/>`;
    b += card(x, y, w, { title: th[i][0], body: th[i][1], bs: 16, h, fill: C.tealLight, edge: C.tealDark, bfill: C.ink }).s;
  });
  b += `<circle cx="${cx}" cy="${cy}" r="96" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + T(cx, cy - 14, 'Section 2', { size: 19, weight: 700, anchor: 'middle' }) + T(cx, cy + 12, 'Natural', { size: 22, weight: 700, anchor: 'middle' }) + T(cx, cy + 38, 'resources', { size: 22, weight: 700, anchor: 'middle' });
  const n = note(30, 570, 840, 'These four themes run through every Paper 2 section, but Section 2 introduces them most explicitly: “sustainability” is in its title.');
  add('01-four-themes',
    svg(900, 570 + n.h + 30, 'Four themes that start in Section 2', b + n.s),
    'Section 2, Natural resources, sits at the centre of four linked themes: the problems and opportunities of a developing country, effects on and conservation of the environment, sustainable development, and feasibility studies.',
    'Section 2 is where Paper 2’s four recurring themes are introduced.',
    '## Where this fits in 0448');
}

// 02 How the four parts connect
{
  const w = 250, h = 104;
  const nodes = {
    a: [325, 318, '(a) Water', 'Dams, barrages, supply and quality'],
    b: [30, 130, '(b) Forests', 'Deforestation'],
    c: [30, 470, '(c) Minerals', 'Extraction needs water'],
    d: [620, 470, '(d) Fish', 'Inland fish farming needs water'],
  };
  let b = '';
  const nd = (k, f, e) => { const [x, y, ti, s] = nodes[k]; return card(x, y, w, { title: ti, body: s, h, fill: f, edge: e, bfill: C.ink, ts: 21 }).s; };
  b += nd('a', C.teal, C.tealDark) + nd('b', C.cream, C.olive) + nd('c', C.panel, C.ink) + nd('d', C.panel, C.ink);
  b += elbow([[155, 238], [155, 370], [317, 370]], { w: 4, color: C.rust, marker: 'ahR' });
  b += tl(170, 266, ['speeds up silting of dams', 'and barrages, so their', 'storage capacity falls'], { size: 16, weight: 700, fill: C.rust }, 21);
  b += arrow(340, 424, 290, 466, { w: 4, color: C.tealDark, marker: 'ahT' }) + arrow(560, 424, 610, 466, { w: 4, color: C.tealDark, marker: 'ahT' });
  b += T(450, 474, 'water supply and quality', { size: 16, weight: 700, fill: C.tealDark, anchor: 'middle' });
  b += card(620, 130, w, { title: 'Deforestation effects', body: ['Soil erosion', 'Silting', 'Flooding'], bullets: true, h: 140, fill: '#f6e3d6', edge: C.rust, bfill: C.ink, ts: 19 }).s + arrow(284, 182, 612, 182, { w: 4, color: C.rust, marker: 'ahR' }) + T(448, 170, 'causes', { size: 16, weight: 700, fill: C.rust, anchor: 'middle' });
  const n = note(30, 600, 840, 'Every part feeds the “developing country” theme: each resource is an opportunity for development and a risk of environmental damage if managed poorly.');
  add('02-how-the-parts-connect',
    svg(900, 600 + n.h + 30, 'One section, four connected resources', b + n.s),
    'Water sits at the centre. Deforestation causes soil erosion, silting and flooding and speeds up the silting of dams and barrages, reducing their storage. Mineral extraction and inland fish farming both depend on water supply and quality.',
    'Linking the four resources turns separate lists into one argument about sustainability.',
    '## Syllabus coverage');
}

// 03 One revision frame for all four resources
{
  const g = grid(30, 112, [{ label: 'Resource', w: 132 }, { label: 'Used for', w: 176 }, { label: 'What damages it', w: 176 }, { label: 'Towards sustainable use', w: 180 }, { label: 'Name a located example', w: 176 }], [
    ['Water', 'Agriculture, industry and domestic supply', 'Pollution; supply problems; disputes that lead to conflict', 'Solutions to supply problems; the Indus Waters Treaty', 'Mangla, Tarbela and Warsak dams; two barrages'],
    ['Forests', 'A resource for development', 'Human activity reducing their extent; deforestation', 'Plantations in the Indus Plain; afforestation of slopes and plateaux', 'A named plantation area'],
    ['Minerals', 'Limestone, gypsum, rock salt and their uses', 'Environmental problems of extraction', 'Weigh benefits against damage; reserves', 'A named mineral and its extraction site'],
    ['Fish', 'Marine and inland catches; fish farms', 'Problems facing the industry', 'Better fishing methods and processing', 'A named port on the Balochistan or Sindh coast'],
  ], { size: 15, hs: 16 });
  add('03-revision-frame',
    svg(900, 112 + g.h + 30, 'One revision frame for all four resources', g.s),
    'A table with one row each for water, forests, minerals and fish, and columns for what the resource is used for, what damages it, what would make its use sustainable, and a named, located example to learn.',
    'Ask the same three questions of every resource, then add a named place.',
    '## How to approach it');
}

// 04 Identify vs evaluate
{
  const w = 410;
  const i1 = { title: '“Identify”', sub: 'wants a named location or fact', body: ['Short and precise', 'Example: name a dam or a fishing port'], bullets: true, fill: C.tealLight, edge: C.tealDark, bfill: C.ink, ts: 24, subfill: C.tealDark };
  const e1 = { title: '“Evaluate”', sub: 'wants the cost weighed against the benefit', body: ['Example: mineral extraction', 'Set the environmental cost against the development benefit', 'Do not simply list them side by side', 'End with a judgement'], bullets: true, fill: C.cream, edge: C.olive, bfill: C.ink, ts: 24, subfill: C.olive };
  const h = Math.max(cardH(w, i1), cardH(w, e1));
  let b = card(30, 112, w, { ...i1, h }).s + card(460, 112, w, { ...e1, h }).s;
  const y = 112 + h + 30;
  b += `<line x1="200" y1="${y + 36}" x2="700" y2="${y + 36}" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>` + `<path d="M450,${y + 40} L432,${y + 76} L468,${y + 76} Z" fill="${C.ink}"/>`;
  b += R(140, y - 14, 160, 44, '#f6e3d6', C.rust) + T(220, y + 15, 'cost', { size: 18, weight: 700, anchor: 'middle' });
  b += R(600, y - 14, 160, 44, C.tealLight, C.tealDark) + T(680, y + 15, 'benefit', { size: 18, weight: 700, anchor: 'middle' });
  b += T(450, y + 108, 'Vague answers without named places lose marks, even when the explanation is sound.', { size: 17, weight: 600, anchor: 'middle', fill: C.muted });
  add('04-identify-vs-evaluate',
    svg(900, y + 132, 'Two command words, two kinds of answer', b),
    'Two cards compare command words. “Identify” wants a named location or fact. “Evaluate” wants an environmental cost weighed against a development benefit, shown as a balance, and a judgement rather than a list.',
    'Identify names; evaluate weighs and judges.',
    '## How to approach it');
}

// 05 Paper 2 structure
{
  let b = '';
  const stats = [['1 h 30 min', 'time'], ['75 marks', 'total'], ['50%', 'of the qualification']];
  stats.forEach(([a, c], i) => { const x = 30 + i * 285; b += R(x, 112, 270, 86, C.panel, C.ink) + T(x + 135, 152, a, { size: 26, weight: 700, anchor: 'middle' }) + T(x + 135, 182, c, { size: 16, anchor: 'middle', fill: C.muted }); });
  const y = 230;
  b += T(30, y, 'Answer three questions from a choice of five', { size: 20, weight: 700 });
  for (let i = 0; i < 5; i++) { const x = 30 + i * 172, on = i < 3; b += R(x, y + 16, 156, 60, on ? C.mustard : C.panel, on ? C.ink : C.panelEdge, { dash: on ? '' : '6 5' }) + T(x + 78, y + 54, `Q${i + 1}${on ? ' ✓' : ''}`, { size: 19, weight: 700, anchor: 'middle', fill: on ? C.ink : C.muted }); }
  const y2 = y + 116;
  b += T(30, y2, 'Each question: 25 marks in four parts, built around maps, graphs, tables and photographs', { size: 18, weight: 700 });
  const parts = [['(a)', C.panel], ['(b)', C.panel], ['(c)', C.panel], ['(d)', C.cream]];
  parts.forEach(([p, f], i) => { const x = 30 + i * 214; b += R(x, y2 + 16, 198, 64, f, i === 3 ? C.olive : C.panelEdge) + T(x + 99, y2 + 56, p, { size: 22, weight: 700, anchor: 'middle' }); if (i < 3) b += arrow(x + 200, y2 + 48, x + 212, y2 + 48, { w: 3 }); });
  const n = note(30, y2 + 100, 840, 'Part (d) tests analysis and evaluation: finish every topic by practising a judgement, such as how sustainable a resource or policy is, with evidence for and against.');
  add('05-paper-2-structure',
    svg(900, y2 + 100 + n.h + 30, 'How Paper 2 is examined', b + n.s),
    'Paper 2 lasts 1 hour 30 minutes, is worth 75 marks and 50% of the qualification. Candidates answer three of five questions, each worth 25 marks in four parts, (a) to (d), built around maps, graphs, tables and photographs. Part (d) tests analysis and evaluation.',
    'Three questions, four parts each, ending with an evaluation in part (d).',
    '## How is this section examined?');
}
