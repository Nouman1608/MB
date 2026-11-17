import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-different-types-of-data';
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

// 01 Usefulness checklist
{
  let s = '';
  s += box(300, 112, 300, 76, { fill: C.mustard, sw: 3 }) + label(450, 146, 'Useful for what?', { size: 23, weight: 700, anchor: 'middle' }) + label(450, 172, 'start from the research aim', { size: 16, anchor: 'middle' });
  const items = [
    ['Purpose', 'Collected for this aim, or for another one?'],
    ['Validity', 'A true picture of what it claims to show?'],
    ['Reliability', 'Would the same method give the same figures again?'],
    ['Representativeness', 'Who is included, and who is missing?'],
    ['Definitions', 'How were terms like “poverty” or “crime” defined?'],
    ['Source and bias', 'Who produced it? Do they have an interest in the result?'],
    ['Date', 'Are the data still relevant?'],
  ];
  const y0 = 214;
  items.forEach(([h, b], i) => {
    const col = i < 4 ? 0 : 1, row = i < 4 ? i : i - 4;
    const x = 30 + col * 430, y = y0 + row * 94;
    s += box(x, y, 410, 84, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + badge(x + 34, y + 42, 18, String(i + 1), C.cream);
    s += label(x + 64, y + 30, h, { size: 18, weight: 700 }) + para(x + 64, y + 54, 334, b, { size: 15, fill: C.muted }).svg;
  });
  s += box(460, y0 + 3 * 94, 410, 84, { fill: C.cream, edge: C.olive, sw: 2 }) + para(476, y0 + 3 * 94 + 36, 380, 'Short answer: use 2 or 3. Extended answer: use most of them.', { size: 16, weight: 600 }).svg;
  add('01-usefulness-checklist',
    svg(900, y0 + 4 * 94 + 14, 'Testing any data for usefulness', s),
    'A central question, useful for what, sits above seven checks: purpose, validity, reliability, representativeness, definitions, source and bias, and date. A note says to use two or three in a short answer and most in an extended one.',
    'Data are never simply useful: judge them against the research aim with these seven checks.',
    '## What "usefulness" means');
}

// 02 Quantitative vs qualitative
{
  const f = versusFig('Numbers or words?', {
    left: { head: 'Quantitative data', fill: C.teal, sub: 'Percentages, rates, averages, counts', items: ['**+** Show patterns and trends clearly', '**+** Allow comparison between groups', '**+** Standard collection, so usually **reliable**', '**+** Large data sets can represent whole populations', '**–** Show what and how many, not **why**', '**–** Turning experience into numbers can lose meaning, so lower **validity**', '**–** Depend on the collector’s definitions'] },
    right: { head: 'Qualitative data', fill: C.cream, sub: 'Transcripts, field notes, diaries, letters, media content', items: ['**+** Meanings, motives and feelings in people’s own words', '**+** Depth and context, so **validity** tends to be high', '**+** Can uncover unexpected issues', '**–** Hard to compare or count', '**–** Small samples, so may not be **representative**', '**–** Researcher’s interpretation risks **bias** and selective use', '**–** Documents may be written for an audience'] },
    foot: { head: 'Example: divorce', text: 'A divorce rate shows whether divorce has become more common; it says little about how it feels to go through one.' },
  });
  add('02-quantitative-qualitative', f,
    'Two panels. Quantitative data show patterns, allow comparison and are usually reliable, but show what rather than why and may lose meaning. Qualitative data give meanings and depth with high validity, but are hard to compare, come from small samples and risk researcher bias. A divorce example shows each is useful for a different aim.',
    'Quantitative data favour reliability and comparison; qualitative data favour validity and meaning.',
    '## Qualitative data');
}

// 03 How official statistics are produced
{
  let s = '';
  const L = headPanel(30, 108, 330, 412, 'By registration', { fill: C.teal, size: 21 });
  s += L.svg + bullets(50, 196, 290, ['Births', 'Marriages', 'Deaths'], { size: 18 }).svg;
  s += para(50, 320, 290, 'Must be legally recorded', { size: 17, weight: 700 }).svg;
  s += box(50, 350, 290, 88, { fill: C.tealLight, sw: 2 }) + label(195, 388, 'Generally seen', { size: 18, weight: 700, anchor: 'middle' }) + label(195, 414, 'as accurate', { size: 18, weight: 700, anchor: 'middle' });
  const R = headPanel(390, 108, 480, 412, 'By decisions of people', { fill: C.cream, size: 21 });
  s += R.svg;
  const chain = [['Victim notices', 'a crime'], ['Chooses', 'to report it'], ['Police decide', 'to record it']];
  chain.forEach(([a, b], i) => {
    const x = 408 + i * 154;
    s += box(x, 186, 136, 70, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(x + 68, 214, a, { size: 16, weight: 700, anchor: 'middle' }) + label(x + 68, 238, b, { size: 15, anchor: 'middle' });
    if (i < 2) s += arrow(x + 138, 221, x + 152, 221, { w: 3 });
  });
  s += label(410, 286, 'Recorded crime', { size: 16, weight: 700, fill: C.olive }) + label(870 - 18, 286, 'missing crimes = the dark figure', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  s += box(408, 302, 444, 64, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(426, 330, 'Head teacher decides', { size: 16, weight: 700 }) + label(426, 352, 'to exclude a pupil', { size: 15 }) + label(838, 342, 'Exclusion figures', { size: 16, weight: 700, anchor: 'end', fill: C.olive });
  s += box(408, 396, 444, 104, { fill: C.mustard, sw: 2 }) + label(630, 430, 'Interactionists: social constructs', { size: 18, weight: 700, anchor: 'middle' }) + para(630, 460, 400, 'They show how producers behave as well as what they count', { size: 15, anchor: 'middle' }).svg;
  const n = note(538, 'Strengths and limitations', ['**Strengths:** often national; collected regularly, so trends can be tracked; free and quick; large scale with standard procedures', '**Limitations:** government definitions can change and break trends; some events unrecorded; may be presented to suit the government; rarely explain causes']);
  add('03-official-statistics-production',
    svg(900, Math.round(538 + n.h + 24), 'How official statistics are produced', s + n.svg),
    'Left: births, marriages and deaths must be legally registered, so these statistics are generally seen as accurate. Right: recorded crime depends on a victim noticing, choosing to report and police deciding to record, and exclusion figures depend on head teachers, so interactionists see these as social constructs. Below, strengths and limitations of official statistics.',
    'Registered events are counted fairly accurately; figures that rest on people’s decisions are social constructs.',
    '## Official statistics');
}

// 04 Official vs non-official
{
  const f = versusFig('Official and non-official statistics', {
    left: { head: 'Official', fill: C.teal, sub: 'Government and its agencies, mainly the ONS', items: ['**+** Often national coverage, collected regularly', '**+** Usually free to the sociologist', '**–** Definitions set by government and can change', '**–** May be presented to suit the government of the day'] },
    right: { head: 'Non-official', fill: C.cream, sub: 'Universities, charities, pressure groups, think tanks, polling companies, businesses', items: ['**+** Can study topics government does not, or define them differently', '**+** Can challenge the official picture (Townsend’s relative deprivation measure)', '**–** Often smaller samples; methods less consistent over time', '**–** The producer may have an interest in the result'] },
    foot: { head: 'Always ask', text: 'Who paid for and published the data, and might they want a particular result? Non-official does not mean unreliable.' },
  });
  add('04-official-non-official', f,
    'Two panels. Official statistics come from government, often have national coverage and are free, but definitions can change and presentation may suit the government. Non-official statistics come from universities, charities and businesses; they can study neglected topics and challenge official pictures, as Townsend did, but samples may be smaller and producers may have an interest in the result.',
    'Both kinds can be biased; ask who produced the data and why.',
    '## Non-official statistics');
}

// 05 Assessing a source: annotated card
{
  let s = '';
  s += box(200, 112, 500, 150, { fill: C.panel, sw: 3 }) + label(220, 142, 'The source (fictional)', { size: 15, weight: 700, fill: C.muted });
  s += para(220, 170, 460, 'A charity campaigning against youth homelessness surveys **300 young people using its hostels**. **70%** left home after arguments with a parent or step-parent.', { size: 17 }).svg;
  const tags = [
    ['Type', 'Non-official, quantitative', C.tealLight],
    ['Useful for', 'Showing a common reason among these hostel users', C.teal],
    ['Representativeness', 'Only hostel users: young people on friends’ sofas are missing', C.cream],
    ['Bias', 'The charity has an interest in showing family breakdown as a cause; may affect question wording', C.cream],
    ['Validity', 'A tick-box reason may simplify complex situations; interviews could add depth', C.cream],
  ];
  let y = 290;
  tags.forEach(([h, b, f], i) => {
    const bp = para(0, 0, 610, b, { size: 16 }), hh = Math.max(56, bp.h + 26);
    s += box(30, y, 200, hh, { fill: f, sw: 2 }) + label(130, y + hh / 2 + 6, h, { size: 17, weight: 700, anchor: 'middle' });
    s += box(240, y, 630, hh, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + vcenter(256, y, hh, 600, b, { size: 16 });
    y += hh + 8;
  });
  s += arrow(450, 266, 450, 286, { w: 3 });
  s += box(30, y + 8, 840, 100, { fill: C.mustard }) + label(50, y + 38, 'Judgement', { size: 18, weight: 700 }) + para(50, y + 64, 800, 'Useful evidence of a pattern among hostel users, but not proof of the main cause of youth homelessness in general.', { size: 16 }).svg;
  add('05-assessing-a-source',
    svg(900, Math.round(y + 8 + 100 + 24), 'Assessing a source, step by step', s),
    'A fictional charity survey of 300 hostel users finds 70% left home after family arguments. Labelled checks follow: it is non-official quantitative data, useful for showing a common reason among hostel users, unrepresentative of young people elsewhere, possibly biased by the charity’s interest, and simplified by tick boxes. The judgement: useful evidence of a pattern, not proof of the main cause.',
    'Work through type, use, representativeness, bias and validity, then judge fitness for purpose.',
    '## Worked example: assessing a source');
}
