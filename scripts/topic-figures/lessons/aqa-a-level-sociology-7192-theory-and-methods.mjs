import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-a-level-sociology-7192-theory-and-methods';
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

// 01 Methods and sources: primary/secondary x quantitative/qualitative
{
  let s = '';
  const x0 = 180, cw = 336, g = 18, y0 = 152, RH = [206, 150], RY = [y0 + 6, y0 + 6 + 206 + 80];
  s += `<rect x="${x0}" y="108" width="${cw}" height="38" rx="10" fill="${C.teal}"/>` + t(x0 + cw / 2, 134, 'Quantitative', { size: 19, weight: 700, anchor: 'middle' });
  s += `<rect x="${x0 + cw + g}" y="108" width="${cw}" height="38" rx="10" fill="${C.cream}"/>` + t(x0 + cw + g + cw / 2, 134, 'Qualitative', { size: 19, weight: 700, anchor: 'middle' });
  [['Primary', ''], ['Secondary', '']].forEach(([l, d], j) => {
    const yy = RY[j], rh = RH[j];
    s += `<rect x="30" y="${yy}" width="140" height="${rh}" rx="10" fill="${C.tealLight}"/>` + t(100, yy + rh / 2 + 7, l, { size: 19, weight: 700, anchor: 'middle' });
  });
  const cells = [
    [['Questionnaires', 'large samples, reliable; low validity'], ['Structured interviews', 'standardised; interviewer bias'], ['Laboratory experiments', 'control, cause and effect; artificial']],
    [['Unstructured interviews', 'rapport, depth; small samples'], ['Participant observation', 'natural behaviour, verstehen; going native']],
    [['Official statistics', 'large scale, trends; socially constructed, dark figures']],
    [['Documents (usually)', 'access to the past, cheap; judge by Scott’s four criteria']],
  ];
  cells.forEach((list, k) => {
    const i = k % 2, j = Math.floor(k / 2), x = x0 + i * (cw + g), yy = RY[j], rh = RH[j];
    s += `<rect x="${x}" y="${yy}" width="${cw}" height="${rh}" rx="12" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5"/>`;
    const gap = list.length === 3 ? 62 : 70;
    let ty = yy + (rh - (list.length - 1) * gap - 40) / 2 + 18;
    if (k === 1) ty = yy + 26;
    list.forEach(([m, d]) => { s += t(x + 18, ty, m, { size: 18, weight: 700 }) + para(x + 18, ty + 23, cw - 36, d, { size: 15, fill: C.muted }).svg; ty += gap; });
  });
  // strip for methods listed only as primary
  const py = RY[0] + RH[0] + 14;
  s += `<rect x="${x0}" y="${py}" width="${2 * cw + g}" height="48" rx="24" fill="${C.sand}" stroke="${C.olive}" stroke-width="2" stroke-dasharray="7 5"/>` + t(x0 + cw + g / 2, py + 31, 'Also primary: non-participant observation, field experiments', { size: 17, anchor: 'middle', weight: 600 });
  let y = RY[1] + RH[1] + 22;
  const n = note(y, 'Scott (1990): four criteria for documents', 'Authenticity, credibility, representativeness and meaning.');
  s += n.svg; y += n.h;
  add('01-methods-map', svg(900, y + 26, 'Methods and sources of data', s),
    'A two-by-two grid. Primary quantitative: questionnaires, structured interviews, laboratory experiments. Primary qualitative: unstructured interviews and participant observation. Secondary quantitative: official statistics. Secondary qualitative: documents. Each has a strength and a limitation.',
    'Every method sits somewhere on the primary/secondary and quantitative/qualitative grid.',
    '## How do research methods and sources of data compare? (points 1–3)');
}

// 02 Positivism and interpretivism
{
  add('02-positivism-interpretivism', versusFig('Positivism and interpretivism', {
    left: { head: 'Positivism', sub: 'Comte; Durkheim', items: ['Society is an objective reality of **social facts**, external to the individual and constraining behaviour', 'Use scientific, quantitative methods to discover causal laws', '**Durkheim, Suicide (1897):** official statistics show suicide varies with integration and regulation'] },
    right: { head: 'Interpretivism', sub: 'Weber’s verstehen', items: ['People act on the meanings they give to situations', 'Understand those meanings with qualitative methods', '**Atkinson (1978):** suicide statistics are coroners’ interpretations', '**Douglas (1967):** study the meanings behind suicidal acts'] },
  }),
    'Positivists such as Durkheim see society as social facts studied with quantitative methods, as in his study of suicide rates. Interpretivists, following Weber, study meanings with qualitative methods; Atkinson and Douglas reinterpret suicide.',
    'The two approaches study suicide in opposite ways.',
    '## What is the difference between positivism and interpretivism? (point 4)');
}

// 03 Theoretical, practical, ethical
{
  let s = '', y = 104;
  const r = cardRow(y, [
    { head: 'Theoretical', body: ['Positivists favour reliable, quantitative methods', 'Interpretivists favour valid, qualitative ones', 'Perspective shapes which questions seem important'], fill: C.teal },
    { head: 'Practical', body: ['Time and money', 'Funding bodies’ requirements', 'Access', 'The researcher’s characteristics and skills'], fill: C.tealLight },
    { head: 'Ethical', body: ['BSA Statement of Ethical Practice: informed consent, confidentiality, avoiding harm, care with vulnerable groups', 'Covert methods raise deception'], fill: C.cream },
  ], { size: 16 });
  s += r.svg; y += r.h;
  const cw = (840 - 32) / 3;
  [0, 1, 2].forEach((i) => s += arrow(30 + i * (cw + 16) + cw / 2, y + 6, 450 + (i - 1) * 120, y + 50));
  y += 56;
  s += `<rect x="220" y="${y}" width="460" height="60" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(450, y + 38, 'Choice of topic, method and conduct', { size: 20, weight: 700, anchor: 'middle' });
  y += 60;
  add('03-tpe-factors', svg(900, y + 26, 'What shapes research choices?', s),
    'Theoretical, practical and ethical considerations all feed into the choice of topic, the choice of method and the conduct of research.',
    'Theory, practicalities and ethics together shape how research is done.',
    '## What shapes the choice of topic and method? (point 5)');
}

// 04 Map of sociological theories
{
  let s = '', y = 104;
  const r = cardRow(y, [
    { head: 'Consensus', sub: 'structural', body: ['**Functionalism:** society as a system of interrelated parts based on shared values', 'Durkheim; Parsons; Merton (manifest and latent functions)'], fill: C.teal },
    { head: 'Conflict', sub: 'structural, or mainly conflict', body: ['**Marxism:** class conflict; ideology legitimates exploitation (Marx; Althusser; Gramsci)', '**Feminism:** patriarchy; liberal, radical, Marxist and difference feminisms (Oakley; Walby)'], fill: C.cream },
    { head: 'Social action', sub: 'meanings and interaction', body: ['**Symbolic interactionism:** people create society through shared meanings (Mead; Blumer)', '**Phenomenology / ethnomethodology:** how people make sense of the world (Schutz; Garfinkel)'], fill: C.tealLight },
  ], { size: 16 });
  s += r.svg; y += r.h + 18;
  s += `<rect x="30" y="${y}" width="840" height="64" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + t(450, y + 28, 'Structuration (Giddens, 1984)', { size: 20, weight: 700, anchor: 'middle' }) + t(450, y + 52, 'bridges structure and action: each reproduces the other', { size: 17, anchor: 'middle' });
  y += 64;
  add('04-theory-map', svg(900, y + 26, 'Consensus, conflict and social action', s),
    'Three groups of theory: consensus (functionalism), conflict (Marxism and feminism) and social action (symbolic interactionism, phenomenology and ethnomethodology), with Giddens’ structuration theory bridging structure and action.',
    'Structural theories start from society; social action theories start from meanings.',
    '## What are consensus, conflict, structural and social action theories? (point 6)');
}

// 05 Modernity, post-modernity, late modernity
{
  let s = '', y = 104;
  s += `<rect x="150" y="${y}" width="600" height="92" rx="14" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>` + t(450, y + 34, 'Modernity', { size: 22, weight: 700, anchor: 'middle' }) + para(450, y + 62, 560, 'nation state, capitalism, rationality, science, progress; grand narratives such as functionalism and Marxism', { size: 16, anchor: 'middle' }).svg;
  y += 92;
  s += arrow(330, y + 6, 230, y + 56) + arrow(570, y + 6, 670, y + 56);
  y += 62;
  const r = cardRow(y, [
    { head: 'Post-modernity', sub: 'modernity has ended', body: ['**Lyotard (1979):** "incredulity towards meta-narratives"', '**Baudrillard:** media signs create hyperreality', 'Fragmented, media-saturated, based on consumer choice and identity'], fill: C.cream },
    { head: 'Late modernity', sub: 'modernity continues', body: ['**Giddens:** late or "high" modernity marked by reflexivity', '**Beck (1986):** a risk society preoccupied with manufactured risks'], fill: C.tealLight },
  ], { size: 16 });
  s += r.svg; y += r.h;
  add('05-modernity', svg(900, y + 26, 'Has modernity ended?', s),
    'Modernity, marked by the nation state, capitalism, science and grand narratives, leads to two views: postmodernists Lyotard and Baudrillard say it has ended, while late modernists Giddens and Beck say it continues in a new form.',
    'Postmodernists see a break with modernity; late modernists see it intensifying.',
    '## What are modernity and post-modernity? (point 7)');
}

// 06 Is sociology a science?
{
  add('06-science', compareFig('Is sociology a science?', {
    cols: [{ head: 'Position', fill: C.tealLight }],
    labelW: 220, size: 17,
    rows: [
      { label: 'Positivists', fill: C.teal, cells: ['Yes: sociology can and should follow the logic of the natural sciences.'] },
      { label: 'Realists: Keat and Urry; Sayer', fill: C.teal, cells: ['Yes: like meteorology, it studies **open systems** but can still seek underlying causes.'] },
      { label: 'Popper (1934)', fill: C.cream, cells: ['Science is defined by **falsification**; Marxism is unfalsifiable.'] },
      { label: 'Kuhn (1962)', fill: C.cream, cells: ['Science works within **paradigms**; sociology is "pre-paradigmatic" because sociologists disagree on fundamentals.'] },
      { label: 'Interpretivists', fill: C.panel, cells: ['No: sociology studies meaningful action, so natural-science methods are inappropriate.'] },
    ],
  }),
    'Five positions on whether sociology is a science: positivists and realists say yes, Popper defines science by falsification, Kuhn calls sociology pre-paradigmatic, and interpretivists say natural-science methods do not fit.',
    'The answer depends on how science itself is defined.',
    '## Is sociology a science? (point 8)');
}

// 07 Values
{
  let s = '', y = 120;
  s += `<line x1="60" y1="${y}" x2="840" y2="${y}" stroke="${C.ink}" stroke-width="3.5" marker-end="url(#ah)" marker-start="url(#ah)"/>`;
  s += label(60, y - 14, 'value-free is possible', { size: 16, weight: 600, fill: C.muted }) + label(840, y - 14, 'research should take sides', { size: 16, weight: 600, fill: C.muted, anchor: 'end' });
  y += 22;
  const r = cardRow(y, [
    { head: 'Classical positivists', sub: 'Comte; Durkheim', body: 'Sociology could be objective and should guide society.', fill: C.teal },
    { head: 'Weber', sub: 'a middle position', body: 'Values shape topic choice and interpretation; be value-free in data collection.', fill: C.mustard },
    { head: 'Committed sociology', sub: 'Becker (1967); Gouldner (1962)', body: 'Side with the underdog; claims of value freedom often hid support for the powerful. Feminists: serve women’s interests.', fill: C.cream },
  ], { size: 16 });
  s += r.svg; y += r.h;
  add('07-values', svg(900, y + 26, 'Can sociology be value-free?', s),
    'A spectrum from classical positivists, who thought sociology could be objective, through Weber, who kept values out of data collection only, to committed sociologists Becker, Gouldner and feminists, who argue research should take sides.',
    'Views range from full objectivity to openly committed research.',
    '## Can sociology be value-free? (point 10)');
}
