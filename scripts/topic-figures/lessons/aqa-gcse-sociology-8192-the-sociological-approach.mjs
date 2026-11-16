import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'aqa-gcse-sociology-8192-the-sociological-approach';
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
const vcenter = (x, yTop, h, w, s, o = {}) => { const size = o.size || 17; const p = para(0, 0, w, s, o); return para(x, yTop + (h - p.h) / 2 + size * 0.95, w, s, o).svg; };

// 01 Values, norms, sanctions and socialisation
{
  let s = '';
  const ch = hchain(108, [
    { head: 'Values', body: 'Shared beliefs about what is important, e.g. honesty, achievement', fill: C.teal },
    { head: 'Norms', body: 'Unwritten rules that put values into practice, e.g. queuing', fill: C.tealLight },
    { head: 'Sanctions', body: 'Rewards and punishments that make people follow norms', fill: C.cream },
  ], { size: 16, ag: 44 });
  s += ch.svg;
  let y = 108 + ch.h + 44;
  s += label(450, y, 'Learned through socialisation, a lifelong process', { size: 20, weight: 700, anchor: 'middle' });
  y += 20;
  s += box(30, y, 300, 170, { fill: C.mustard }) + label(180, y + 40, 'Primary', { size: 21, weight: 700, anchor: 'middle' }) + label(180, y + 66, 'socialisation', { size: 18, anchor: 'middle' });
  s += `<rect x="135" y="${y + 108}" width="90" height="48" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/><path d="M127,${y + 108} L180,${y + 80} L233,${y + 108} Z" fill="${C.rust}" stroke="${C.ink}" stroke-width="2.5"/>` + label(180, y + 140, 'family', { size: 16, weight: 700, anchor: 'middle' });
  s += arrow(336, y + 85, 384, y + 85, { w: 4 });
  s += box(390, y, 480, 170, { fill: C.teal }) + label(630, y + 40, 'Secondary socialisation', { size: 21, weight: 700, anchor: 'middle' });
  ['schools', 'peer groups', 'religion', 'mass media'].forEach((a, i) => { const x = 406 + (i % 2) * 228, yy = y + 62 + Math.floor(i / 2) * 50; s += `<rect x="${x}" y="${yy}" width="216" height="40" rx="20" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + label(x + 108, yy + 26, a, { size: 17, weight: 600, anchor: 'middle' }); });
  y += 190;
  const r = cardRow(y, [
    { head: 'Status: ascribed', fill: C.cream, body: 'Fixed at birth, such as sex or a royal title' },
    { head: 'Status: achieved', fill: C.tealLight, body: 'Earned, such as a qualification' },
    { head: 'Roles', fill: C.panel, body: 'Behaviour expected in a position: parent, pupil, police officer' },
  ], { size: 16, headSize: 18 });
  s += r.svg;
  add('01-values-norms-socialisation',
    svg(900, y + r.h + 24, 'How a society passes on its rules', s),
    'A chain from values, such as honesty, to norms that put them into practice, such as queuing, to sanctions that make people follow them. Below, primary socialisation in the family leads into secondary socialisation through schools, peer groups, religion and mass media, with cards on ascribed and achieved status and roles.',
    'Values become norms, norms are backed by sanctions, and all are learned through socialisation.',
    '## Key terms and concepts');
}

// 02 Consensus vs conflict
{
  add('02-consensus-conflict',
    versusFig('Consensus or conflict?', {
      left: { head: 'Consensus (functionalism)', sub: 'Society rests on shared values', items: ['A **value consensus** holds society together', 'Each institution performs a function, like organs keeping a body alive', 'Order is normal; deviance and conflict are problems to manage', '**+** Explains stability', '**−** Struggles with inequality and rapid change'] },
      right: { head: 'Conflict (Marxism, feminism)', sub: 'Groups have opposing interests', items: ['Powerful groups shape institutions to benefit themselves', 'Marxists: the ruling class; feminists: men', 'Apparent agreement may reflect the ideas of the powerful', '**+** Explains inequality', '**−** Can overstate division; many people share values'] },
      foot: { head: 'Where does interactionism fit?', text: 'Neither label fits neatly: it studies small-scale interaction rather than society as a whole.' },
    }),
    'Two sides. Consensus approaches, mainly functionalism, see society as resting on shared values, with institutions working like organs of a body. Conflict approaches, Marxism and feminism, see powerful groups shaping institutions for their own benefit. Each has a strength and a limitation; interactionism fits neither.',
    'Consensus theories explain order; conflict theories explain inequality.',
    '## Debates within sociology: consensus versus conflict');
}

// 03 Two debates mapped
{
  const x0 = 120, y0 = 140, W = 700, H = 440, cx = x0 + W / 2, cy = y0 + H / 2;
  let s = '';
  s += `<rect x="${x0}" y="${y0}" width="${W / 2}" height="${H}" fill="${C.tealLight}"/><rect x="${cx}" y="${y0}" width="${W / 2}" height="${H}" fill="${C.cream}"/>`;
  s += `<rect x="${x0}" y="${y0}" width="${W}" height="${H}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += `<line x1="${cx}" y1="${y0}" x2="${cx}" y2="${y0 + H}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="6 6"/><line x1="${x0}" y1="${cy}" x2="${x0 + W}" y2="${cy}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="6 6"/>`;
  s += label(x0 + W / 4, y0 - 14, 'CONSENSUS', { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }) + label(x0 + 3 * W / 4, y0 - 14, 'CONFLICT', { size: 18, weight: 700, anchor: 'middle', fill: C.olive });
  s += `<text x="${x0 - 24}" y="${y0 + H / 4}" font-size="18" font-weight="700" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${x0 - 24} ${y0 + H / 4})">STRUCTURE</text>`;
  s += `<text x="${x0 - 24}" y="${y0 + 3 * H / 4}" font-size="18" font-weight="700" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${x0 - 24} ${y0 + 3 * H / 4})">AGENCY</text>`;
  s += label(x0 + 14, cy - 12, 'institutions shape people', { size: 15, fill: C.muted, italic: true }) + label(x0 + 14, cy + 26, 'people interpret and choose', { size: 15, fill: C.muted, italic: true });
  const node = (x, y, h, sub, f) => box(x - 100, y - 36, 200, 72, { fill: f || C.panel }) + label(x, y - 6, h, { size: 20, weight: 700, anchor: 'middle' }) + label(x, y + 20, sub, { size: 15, anchor: 'middle', fill: C.muted });
  s += node(x0 + W / 4, y0 + 78, 'Functionalism', 'shared values');
  s += node(x0 + 3 * W / 4, y0 + 78, 'Marxism', 'ruling class');
  s += node(x0 + 3 * W / 4, y0 + 168, 'Feminism', 'men benefit');
  s += node(cx, y0 + H - 90, 'Interactionism', 'meanings, labels', C.mustard);
  const n = note(y0 + H + 24, null, 'Interactionism sits on the line: it studies small-scale interaction, not society-wide agreement or conflict.');
  add('03-two-debates-map',
    svg(900, Math.round(y0 + H + 24 + n.h + 24), 'Two debates, four perspectives', s + n.svg),
    'A grid with consensus on the left and conflict on the right, structure at the top and agency at the bottom. Functionalism sits in consensus and structure, Marxism in conflict and structure, feminism on the conflict side, and interactionism on the agency side, between consensus and conflict.',
    'Place each perspective on two debates: consensus or conflict, and structure or agency.',
    '## Debates within sociology: consensus versus conflict');
}

// 04 The four perspectives
{
  add('04-four-perspectives',
    cardsFig('The four perspectives at a glance', {
      ncol: 2, size: 16,
      cards: [
        { head: 'Functionalism', fill: C.teal, sub: 'What does each institution do for society?', body: ['Durkheim, Parsons, Merton, Albert Cohen, Davis and Moore, Willmott and Young', '**+** Explains how societies hold together', '**−** Idealised middle-class picture (Parsons); ignores power'] },
        { head: 'Marxism', fill: C.tealLight, sub: 'Bourgeoisie exploit the proletariat', body: ['Bowles and Gintis (schooling), Zaretsky (family)', '**+** Explains persistent class inequality', '**−** Neglects gender and ethnicity; Willis shows pupils resist'] },
        { head: 'Feminism', fill: C.cream, sub: 'Society is patriarchal', body: ['Oakley, Delphy and Leonard, Walby, Heidensohn, Carlen', '**+** Made gender and housework visible', '**−** Generalises about women; feminists disagree on the cause'] },
        { head: 'Interactionism', fill: C.sand, sub: 'Meanings and labels in everyday interaction', body: ['Becker (labelling, master status); Ball (Beachside)', '**+** People actively create social life', '**−** Says less about where labels come from'] },
      ],
    }),
    'Four cards. Functionalism asks what institutions do for society; Marxism sees the bourgeoisie exploiting the proletariat; feminism sees society as patriarchal; interactionism studies meanings and labels. Each lists its writers, a strength and a limitation.',
    'Each perspective asks a different question about society.',
    '## The four perspectives');
}

// 05 Timeline of the three founders
{
  const x0 = 170, x1 = 860, y0 = 140, yr0 = 1815, yr1 = 1925;
  const X = (yr) => x0 + ((yr - yr0) * (x1 - x0)) / (yr1 - yr0);
  let s = '';
  for (let yr = 1820; yr <= 1920; yr += 20) s += `<line x1="${X(yr)}" y1="${y0}" x2="${X(yr)}" y2="${y0 + 470}" stroke="${C.panelEdge}" stroke-width="1.5"/>` + label(X(yr), y0 + 494, String(yr), { size: 16, anchor: 'middle', fill: C.muted });
  const people = [
    ['Marx', 1818, 1883, 'Prussia, then London', C.teal, [[1848, 'Communist Manifesto'], [1849, 'moves to London'], [1867, 'Capital vol. 1']]],
    ['Durkheim', 1858, 1917, 'France', C.cream, [[1895, 'Rules of Sociological Method; first department'], [1897, 'Suicide']]],
    ['Weber', 1864, 1920, 'Germany', C.tealLight, [[1904, 'Protestant Ethic (1904–05)']]],
  ];
  people.forEach(([n, b, d, pl, f, ev], i) => {
    const y = y0 + 30 + i * 150;
    s += label(30, y + 26, n, { size: 21, weight: 700 }) + label(30, y + 50, pl, { size: 15, fill: C.muted });
    s += `<rect x="${X(b)}" y="${y}" width="${X(d) - X(b)}" height="40" rx="20" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += label(X(b) + 14, y + 26, String(b), { size: 15, weight: 700 }) + label(X(d) - 14, y + 26, String(d), { size: 15, weight: 700, anchor: 'end' });
    ev.forEach(([yr]) => { s += `<circle cx="${X(yr)}" cy="${y + 20}" r="7" fill="${C.ink}"/>`; });
    ev.forEach(([yr, txt], j) => { s += `<circle cx="${x0 + 36}" cy="${y + 64 + j * 24}" r="4" fill="${C.tealDark}"/>` + label(x0 + 48, y + 70 + j * 24, `${yr}: ${txt}`, { size: 16, weight: 600, fill: C.tealDark }); });
  });
  add('05-founders-timeline',
    svg(900, y0 + 520, 'Marx, Durkheim and Weber: when and where', s),
    'A timeline from 1820 to 1920. Marx (1818–1883) published the Communist Manifesto in 1848, moved to London in 1849 and published Capital in 1867. Durkheim (1858–1917) in France published The Rules of Sociological Method and set up the first department in 1895, then Suicide in 1897. Weber (1864–1920) in Germany published The Protestant Ethic in 1904–05.',
    'Marx wrote a generation before Durkheim and Weber, in the first industrial capitalist society.',
    '## Durkheim, Marx and Weber in context');
}

// 06 The three founders compared
{
  add('06-founders-compared',
    compareFig('Three founders compared', {
      cols: [{ head: 'Durkheim', fill: C.cream }, { head: 'Marx', fill: C.teal }, { head: 'Weber', fill: C.tealLight }],
      rows: [
        { label: 'Time and place', cells: ['France, Third Republic: industrialisation weakens old ties', '19th-century Britain: first industrial capitalist society', 'Germany: fast industrialisation, big bureaucracies'] },
        { label: 'Central idea', cells: ['What holds society together? Shared norms and values; without them, anomie', 'Class struggle drives change; ruling class ideology', 'Class, status and party; three types of authority'] },
        { label: 'Contribution', cells: ['Study “social facts” scientifically; Suicide used statistics', 'Founded the conflict tradition', 'Understanding meanings; ideas can cause change'] },
        { label: 'Criticism', cells: ['Overstated consensus; suicide statistics are social constructions', 'No revolution in Britain; the middle class grew', 'Marxists: ownership is still the main division'] },
      ],
      size: 16, labelW: 130, headSize: 20,
    }),
    'A table comparing Durkheim, Marx and Weber by time and place, central idea, contribution and criticism. Durkheim asked what holds society together; Marx saw class struggle driving change; Weber added status, party and three types of authority.',
    'Each founder’s ideas reflect the society he lived in.',
    '## Durkheim, Marx and Weber in context');
}

// 07 Ideas change over time
{
  const ev = [
    [1959, 'Parsons', 'Criticised for an idealised middle-class picture of the family'],
    [1977, 'Willis', 'Manual work was relatively easy to get in the 1970s'],
    [1980, 'Halsey and colleagues', 'Studied males only'],
    [1982, 'The Rapoports', 'Predates open acceptance of gay and lesbian households'],
    [1984, 'Murray', 'New Right ideas challenge both traditions'],
    [1990, 'Walby', 'Patriarchy has moved from private to public'],
    [1992, 'Devine', 'Did not find the “privatised instrumentalism” of the 1960s'],
  ];
  const y0 = 120, rh = 76;
  let s = `<line x1="140" y1="${y0}" x2="140" y2="${y0 + ev.length * rh}" stroke="${C.ink}" stroke-width="4" marker-end="url(#ah)"/>`;
  ev.forEach(([yr, n, d], i) => {
    const y = y0 + i * rh + 8;
    s += label(118, y + 36, String(yr), { size: 19, weight: 700, anchor: 'end' }) + `<circle cx="140" cy="${y + 30}" r="9" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
    s += box(166, y, 470, rh - 12, { fill: C.panel, edge: C.panelEdge, sw: 2 }) + label(182, y + 26, n, { size: 18, weight: 700 }) + label(182, y + 50, d, { size: 15, fill: C.muted });
  });
  const band = (i0, i1, x, txt, f) => { const ya = y0 + i0 * rh + 8, yb = y0 + i1 * rh + rh - 4; return box(x, ya, 100, yb - ya, { fill: f, sw: 2 }) + `<text x="${x + 50}" y="${(ya + yb) / 2}" font-size="17" font-weight="700" fill="${C.ink}" text-anchor="middle" dominant-baseline="middle" transform="rotate(-90 ${x + 50} ${(ya + yb) / 2})">${txt}</text>`; };
  s += box(656, y0 + 8, 214, rh - 12, { fill: C.teal, sw: 2 }) ;
  s += label(763, y0 + 36, 'Functionalism', { size: 17, weight: 700, anchor: 'middle' }) + label(763, y0 + 58, 'influential mid-century', { size: 15, anchor: 'middle' });
  s += band(1, 6, 656, 'Conflict and feminist approaches grow', C.cream);
  s += band(4, 6, 770, 'New Right (Murray)', C.sand);
  add('07-ideas-over-time',
    svg(900, y0 + ev.length * rh + 30, 'Sociological ideas change over time', s),
    'A timeline of studies: Parsons 1959, Willis 1977, Halsey and colleagues 1980, the Rapoports 1982, Murray 1984, Walby 1990 and Devine 1992, each with how its time shaped it. Side bands show functionalism influential in the mid-20th century, conflict and feminist approaches growing from the 1970s, and New Right ideas from Murray.',
    'Every study reflects its time, so ask what has changed since it was written.',
    '## How sociological ideas change over time');
}
