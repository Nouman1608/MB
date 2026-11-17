import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-practical-issues';
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

// 01 Practical vs ethical; time, cost, access
{
  let s = '';
  s += box(30, 112, 840, 70, { fill: C.tealLight, sw: 2 }) + label(450, 145, 'Sociologists choose the best method they can actually carry out', { size: 19, weight: 700, anchor: 'middle' }) + label(450, 170, 'A brilliant design that cannot be completed produces no data', { size: 16, anchor: 'middle', fill: C.muted });
  const r = cardRow(206, [
    { head: 'Time', fill: C.teal, body: 'Designing, gaining access, collecting, transcribing, analysing' },
    { head: 'Cost', fill: C.cream, body: 'Researchers, travel, printing, equipment, transcription, incentives' },
    { head: 'Access', fill: C.tealLight, body: 'Reaching the people, places or documents needed' },
  ], { size: 17, headSize: 22 });
  s += r.svg;
  const y = 206 + r.h + 30;
  s += box(30, y, 404, 120, { fill: C.panel, sw: 2.5 }) + label(232, y + 40, 'Practical issues', { size: 21, weight: 700, anchor: 'middle' }) + label(232, y + 76, 'Can the research be done?', { size: 19, anchor: 'middle', fill: C.tealDark, weight: 600 });
  s += box(466, y, 404, 120, { fill: C.panel, sw: 2.5 }) + label(668, y + 40, 'Ethical issues', { size: 21, weight: 700, anchor: 'middle' }) + label(668, y + 76, 'Should it be done this way?', { size: 19, anchor: 'middle', fill: C.olive, weight: 600 });
  s += label(450, y + 68, '≠', { size: 34, weight: 700, anchor: 'middle', fill: C.rust });
  s += label(450, y + 150, 'Keep the two separate in answers', { size: 17, weight: 700, anchor: 'middle', fill: C.rust });
  add('01-why-practical-issues',
    svg(900, y + 176, 'Why practical issues matter', s),
    'Sociologists choose the best method they can carry out. Three practical issues: time for designing, collecting and analysing; cost of researchers, travel and equipment; and access to people, places or documents. Practical issues ask whether research can be done; ethical issues ask whether it should be done that way.',
    'Practical issues ask “can it be done?”; ethical issues ask “should it be done this way?”',
    '## Why practical issues matter');
}

// 02 Time ladder
{
  let s = '';
  const rows = [
    ['Secondary data', 'Using official exam statistics', 1],
    ['Closed-question questionnaire', 'Survey of attitudes to marriage across age groups', 1],
    ['Structured interview', 'A household survey on income', 2],
    ['Unstructured interview', 'Experiences of women convicted of crimes', 3],
    ['Participant observation', 'Ball’s three years at Beachside Comprehensive', 4],
    ['Longitudinal study', 'Following the same pupils from age 11 to 25', 4],
  ];
  const lab = ['', 'Low', 'Moderate', 'High', 'Very high'];
  rows.forEach(([m, e, lv], i) => {
    const y = 128 + i * 72;
    s += label(30, y + 26, m, { size: 18, weight: 700 }) + label(30, y + 50, e, { size: 15.5, fill: C.muted });
    s += `<rect x="470" y="${y + 10}" width="${lv * 80}" height="40" rx="6" fill="${[C.tealLight, C.tealLight, C.teal, C.cream, C.mustard][lv]}" stroke="${C.ink}" stroke-width="2"/>` + label(470 + lv * 80 + 12, y + 37, lab[lv], { size: 17, weight: 700 });
  });
  s += label(470, 116, 'Time demand', { size: 17, weight: 700, fill: C.tealDark });
  const y = 128 + 6 * 72 + 10;
  s += `<line x1="30" y1="${y}" x2="870" y2="${y}" stroke="${C.panelEdge}" stroke-width="2"/>`;
  const n = note(y + 16, 'The trade-off', 'Methods with high validity, such as participant observation, usually take the most time. A short deadline may push a researcher to a questionnaire: more reliability and a larger sample, but less depth.');
  add('02-time-demand',
    svg(900, Math.round(y + 16 + n.h + 24), 'How much time does each method take?', s + n.svg),
    'Six methods ranked by time demand: secondary data and closed questionnaires are low, structured interviews moderate, unstructured interviews high, and participant observation and longitudinal studies very high, each with an example such as Ball’s three years at Beachside. Below, the trade-off between validity and time.',
    'The methods that give the most depth usually take the most time.',
    '## Time');
}

// 03 Cost
{
  let s = '';
  const L = headPanel(30, 108, 404, 330, 'What costs money', { fill: C.cream, size: 20 });
  s += L.svg + bullets(52, 192, 360, ['Paying researchers and interviewers', 'Travel to sites or homes', 'Printing and postage', 'Recording equipment, software, secure storage', 'Transcription services', 'Incentives such as vouchers'], { size: 17, gap: 10 }).svg;
  const R = headPanel(466, 108, 404, 330, 'Who pays, and their influence', { fill: C.teal, size: 20 });
  s += R.svg + bullets(488, 192, 360, ['Universities, government departments, charities, businesses', '**Funding bodies** may influence the topic, timescale or method', 'A government department may fund research on a policy it wants evaluated; a charity on the issue it campaigns about'], { size: 17, gap: 12 }).svg;
  const r = cardRow(462, [
    { head: 'Big budget', fill: C.tealLight, body: 'Large-scale surveys with a team: Townsend’s questionnaires to over 2,000 households' },
    { head: 'Small budget', fill: C.tealLight, body: 'A few interviews, one observation setting, or secondary data, which are often free' },
  ], { size: 17, headSize: 19, gap: 30 });
  s += r.svg;
  const n = note(462 + r.h + 16, 'The trade-off', 'A cheaper method may mean a smaller or less representative sample.');
  add('03-cost',
    svg(900, Math.round(462 + r.h + 16 + n.h + 24), 'Cost: what it buys and who pays', s + n.svg),
    'Left: research costs include paying researchers, travel, printing, equipment, transcription and incentives. Right: universities, government, charities and businesses pay, and funders may influence topic, timescale or method. Below, a big budget allows large surveys such as Townsend’s; a small one means a few interviews or secondary data.',
    'Money decides the scale of a study, and funders can shape what is studied.',
    '## Cost');
}

// 04 Access barriers and solutions
{
  const f = versusFig('Access: barriers and ways round them', {
    left: { head: 'Barriers', fill: C.cream, items: ['**Closed institutions:** schools, prisons, hospitals (e.g. Carlen’s interviewees in prison or youth custody)', '**Private settings:** family life behind closed doors', '**Hidden or deviant groups** avoid researchers', '**Powerful groups** can refuse and protect their privacy', '**No sampling frame**, e.g. people sleeping rough', '**The researcher’s age, sex, ethnicity, class and accent**'] },
    right: { head: 'Ways round them', fill: C.teal, items: ['Work through a trusted **gatekeeper**', '**Snowball sampling:** participants introduce others', 'Spend time building trust first', 'Offer **confidentiality** and **anonymity**', 'Choose a less intrusive method, such as an anonymous online questionnaire', 'Use secondary sources when direct access is impossible'] },
    foot: { head: 'Access is more than permission', text: 'It also covers trust, safety and finding the people at all.' },
  });
  add('04-access', f,
    'Two panels. Barriers to access: closed institutions, private settings, hidden or deviant groups, powerful groups, no sampling frame, and the researcher’s own characteristics. Ways round them: gatekeepers, snowball sampling, building trust, confidentiality and anonymity, less intrusive methods and secondary sources.',
    'Access means reaching, finding and gaining the trust of the people you need.',
    '## Access');
}

// 05 Gatekeeper
{
  let s = '';
  const person = (x, y, f = C.teal, r = 15) => `<circle cx="${x}" cy="${y - r * 1.9}" r="${r * 0.62}" fill="${f}" stroke="${C.ink}" stroke-width="2.2"/><path d="M${x - r},${y} Q${x - r},${y - r * 1.2} ${x},${y - r * 1.2} Q${x + r},${y - r * 1.2} ${x + r},${y} Z" fill="${f}" stroke="${C.ink}" stroke-width="2.2"/>`;
  s += person(110, 260, C.tealLight, 22) + label(110, 366, 'Researcher', { size: 18, weight: 700, anchor: 'middle' });
  s += `<rect x="370" y="150" width="30" height="190" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/><rect x="500" y="150" width="30" height="190" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += person(450, 260, C.mustard, 22) + label(450, 366, 'Gatekeeper', { size: 18, weight: 700, anchor: 'middle' });
  s += label(450, 136, 'head teacher, prison governor, youth worker, gang leader', { size: 15.5, anchor: 'middle', fill: C.muted, italic: true });
  s += `<rect x="610" y="160" width="260" height="180" rx="16" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`;
  [[660, 230], [720, 220], [780, 235], [690, 300], [760, 305], [830, 290]].forEach(([x, y], k) => { s += person(x, y, k < 2 ? C.teal : C.panel, 13); });
  s += label(740, 366, 'The group or setting', { size: 18, weight: 700, anchor: 'middle' });
  s += arrow(150, 230, 400, 230, { w: 4 }) + arrow(500, 230, 640, 230, { w: 4 });
  const r = cardRow(400, [
    { head: 'Can open doors', fill: C.teal, body: 'Makes contact and trust possible' },
    { head: 'Can restrict', fill: C.cream, body: 'Limits what the researcher sees' },
    { head: 'Can steer', fill: C.cream, body: 'Towards people who give a good impression' },
  ], { size: 17, headSize: 19 });
  s += r.svg;
  s += `<circle cx="520" cy="${400 + r.h + 30}" r="9" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>` + label(536, 400 + r.h + 36, 'people the gatekeeper steers you towards', { size: 15.5, fill: C.muted });
  add('05-gatekeeper',
    svg(900, Math.round(400 + r.h + 60), 'Gatekeepers', s),
    'A researcher reaches a group only through a gatekeeper standing in a doorway, such as a head teacher, prison governor, youth worker or gang leader. The gatekeeper can open doors, but can also restrict what the researcher sees and steer them towards people who give a good impression.',
    'Gatekeepers make access possible, but can shape who and what the researcher sees.',
    '## Access');
}

// 06 Worked example: gangs
{
  const rows = [
    ['Time', C.teal, 'Gaining trust could take months; participant observation means long periods with the group, often in the evenings'],
    ['Cost', C.cream, 'Funding for a long project and the researcher’s time; transcription adds expense'],
    ['Access', C.tealLight, 'No sampling frame; distrust of outsiders and fear of police; age or background may block acceptance; a youth worker as gatekeeper; snowball sampling'],
  ];
  let s = label(450, 96, 'Area: young people who are members of street gangs', { size: 19, anchor: 'middle', fill: C.muted });
  let y = 120;
  rows.forEach(([h, f, b]) => {
    const bp = para(0, 0, 590, b, { size: 17 }), rh = Math.max(78, bp.h + 30);
    s += box(30, y, 200, rh, { fill: f, sw: 2.5 }) + label(130, y + rh / 2 + 7, h, { size: 20, weight: 700, anchor: 'middle' });
    s += box(244, y, 626, rh, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + vcenter(260, y, rh, 594, b, { size: 17 });
    y += rh + 10;
  });
  s += arrow(450, y + 2, 450, y + 30, { w: 3.5 });
  s += box(30, y + 36, 840, 110, { fill: C.mustard, sw: 2.5 }) + label(50, y + 68, 'Judgement', { size: 19, weight: 700 }) + para(50, y + 96, 800, 'A small number of unstructured interviews arranged through youth services: a less representative sample, in exchange for a workable study.', { size: 17 }).svg;
  add('06-worked-example',
    svg(900, Math.round(y + 36 + 110 + 24), 'Practical issues for a specific area', s),
    'For research on young people in street gangs: time, because trust and observation take months; cost, because a long project and transcription need funding; access, because there is no sampling frame and members distrust outsiders, though a youth worker and snowball sampling could help. The judgement is a few unstructured interviews through youth services.',
    'Raise time, cost and access for the specific topic, then justify a workable choice.',
    '## Worked example: practical issues for a specific area');
}
