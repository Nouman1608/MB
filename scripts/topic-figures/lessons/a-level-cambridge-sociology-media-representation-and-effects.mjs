import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-cambridge-sociology-media-representation-and-effects';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- Local layout helpers (sociology figures: wrapped text, tables, flows, cards) ----
const esc = (s) => String(s).replace(/&(?![a-z]+;|#\d+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const CW = 0.515, CWB = 0.56; // average glyph width / font size for Inter (regular, bold)
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
    if (it.body) s += para(x + w / 2, yy, w - 24, it.body, { size, anchor: 'middle', fill: it.head ? C.muted : C.ink }).svg;
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

// 01 Moral panic sequence (Cohen)
add('01-moral-panic',
  flowFig('How a moral panic develops', {
    sub: 'Cohen, Folk Devils and Moral Panics (1972): Mods and Rockers, 1964',
    steps: [
      { head: 'An event involving a group', body: 'Mods and Rockers in English seaside towns.' },
      { head: 'Exaggerated, sensational reporting', body: 'The media distort and dramatise what happened.' },
      { head: 'Folk devils', body: 'The group is labelled as a threat to society.' },
      { head: 'Public concern', body: 'The reporting provokes widespread concern.' },
      { head: 'Harsher control', body: 'The reaction leads to tighter control of the group.', fill: C.cream, edge: C.olive },
    ],
    foot: { head: 'Targets can be any group', text: 'Class (welfare claimants), gender (single mothers), ethnicity (migrants), age (youth subcultures, online gaming). Hall et al. (1978) linked a panic about “mugging” to the racialisation of crime and a crisis of hegemony.' },
  }),
  'Five steps of a moral panic from Cohen’s study of Mods and Rockers: an event, exaggerated sensational reporting, the group becomes folk devils, public concern spreads and harsher control follows. Panics can target class, gender, ethnic and age groups.',
  'Sensational reporting turns a group into folk devils and triggers harsher control.',
  '## What are moral panics?');

// 02 How each effects model sees the audience (mini schematics)
{
  const P = (x, y, head, sub, art, txt) => panel(x, y, 410, 300) + label(x + 22, y + 38, head, { size: 21, weight: 700 }) + label(x + 22, y + 62, sub, { size: 16, fill: C.tealDark, weight: 600 }) + art + para(x + 22, y + 248, 366, txt, { size: 16, fill: C.muted }).svg;
  const media = (x, y) => `<rect x="${x}" y="${y}" width="86" height="50" rx="8" fill="${C.ink}"/>` + label(x + 43, y + 31, 'Media', { size: 17, weight: 700, anchor: 'middle', fill: '#ffffff' });
  const person = (x, y, f = C.cream, r = 13) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>`;
  // hypodermic
  const a1 = (x, y) => media(x + 30, y + 120) + [100, 140, 180, 220].map((yy) => arrow(x + 120, y + 145, x + 280, y + yy - 10, { w: 3 }) + person(x + 300, y + yy - 10)).join('') + label(x + 330, y + 195, 'passive', { size: 16, fill: C.muted, italic: true });
  // two-step
  const a2 = (x, y) => media(x + 20, y + 120) + arrow(x + 110, y + 145, x + 170, y + 145, { w: 3 }) + person(x + 195, y + 145, C.mustard, 20) + label(x + 195, y + 190, 'opinion', { size: 15, anchor: 'middle', weight: 600 }) + label(x + 195, y + 208, 'leader', { size: 15, anchor: 'middle', weight: 600 }) +
    [100, 145, 190].map((yy) => arrow(x + 218, y + 145, x + 320, y + yy, { w: 3 }) + person(x + 340, y + yy)).join('');
  // uses and gratifications
  const needs = ['diversion', 'relationships', 'identity', 'surveillance'];
  const a3 = (x, y) => person(x + 70, y + 155, C.teal, 24) + label(x + 70, y + 200, 'active user', { size: 15, anchor: 'middle', weight: 600 }) +
    needs.map((n, i) => { const yy = y + 95 + i * 36; return arrow(x + 100, y + 155, x + 200, yy, { w: 2.5, color: C.tealDark, marker: 'ahT' }) + `<rect x="${x + 205}" y="${yy - 15}" width="170" height="30" rx="8" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` + label(x + 290, yy + 6, n, { size: 15, anchor: 'middle' }); }).join('');
  // cultural effects: drip over time
  const a4 = (x, y) => media(x + 20, y + 85) + [0, 1, 2, 3, 4, 5].map((i) => `<circle cx="${x + 130 + i * 38}" cy="${y + 110}" r="7" fill="${C.olive}"/>`).join('') +
    arrow(x + 130, y + 150, x + 360, y + 150, { w: 3, color: C.olive, marker: 'ahO' }) + label(x + 245, y + 175, 'repeated messages over time', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 }) +
    `<rect x="${x + 110}" y="${y + 190}" width="270" height="34" rx="8" fill="${C.cream}" stroke="${C.olive}" stroke-width="2"/>` + label(x + 245, y + 213, 'attitudes and “common sense”', { size: 15, anchor: 'middle', weight: 600 });
  const n = note(770, 'Normative model', 'Media shape norms of what is acceptable, especially where other socialising agencies are weak.');
  add('02-effects-models',
    svg(900, Math.round(770 + n.h + 24), 'How the effects models see the audience',
      P(30, 110, 'Hypodermic syringe', 'direct effect', a1(30, 110), 'Messages injected into a passive audience. Bandura’s Bobo doll (1961, 1963).') +
      P(460, 110, 'Two-step flow', 'indirect', a2(460, 110), 'Opinion leaders interpret messages for others. Katz and Lazarsfeld (1955).') +
      P(30, 440, 'Uses and gratifications', 'active audience', a3(30, 440), 'Audiences use media to meet needs. Blumler and McQuail (1968).') +
      P(460, 440, 'Cultural effects', 'slow, long-term', a4(460, 440), 'Repeated messages shape attitudes. Gerbner; Glasgow University Media Group.') + n.svg),
    'Four schematics. Hypodermic syringe: media inject messages straight into a passive audience. Two-step flow: messages pass through an opinion leader to others. Uses and gratifications: an active user chooses media for diversion, relationships, identity and surveillance. Cultural effects: repeated messages over time shape attitudes. The normative model is noted below.',
    'Models differ on whether the audience is passive, guided, active or slowly shaped.',
    '## Which models of media effects are there?');
}

// 03 Encoding/decoding
{
  const enc = `<rect x="30" y="250" width="200" height="90" rx="14" fill="${C.ink}"/>` + label(130, 290, 'Producers', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' }) + label(130, 316, 'encode a meaning', { size: 16, anchor: 'middle', fill: '#ffffff' });
  const prog = `<rect x="300" y="250" width="200" height="90" rx="14" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` + label(400, 290, 'One programme', { size: 20, weight: 700, anchor: 'middle' }) + label(400, 316, 'the same text', { size: 16, anchor: 'middle' });
  const rd = [['Dominant reading', 'accepts the intended meaning', C.teal], ['Negotiated reading', 'accepts it in part', C.tealLight], ['Oppositional reading', 'rejects it', C.cream]];
  let s = enc + arrow(234, 295, 294, 295, { w: 4 }) + prog;
  rd.forEach(([h, b, f], i) => {
    const y = 120 + i * 130;
    s += arrow(504, 295, 580, y + 45, { w: 3.5 }) + `<rect x="586" y="${y}" width="284" height="90" rx="12" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/>` + label(728, y + 38, h, { size: 19, weight: 700, anchor: 'middle' }) + label(728, y + 64, b, { size: 16, anchor: 'middle' });
  });
  s += label(728, 500, 'audiences decode', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  const n = note(528, 'Evidence', 'Hall (1973) and Morley’s The Nationwide Audience (1980): audiences read the same programme in different ways, supporting active-audience views.');
  add('03-encoding-decoding',
    svg(900, Math.round(528 + n.h + 24), 'Encoding and decoding', s + n.svg),
    'Producers encode a meaning in a programme; audiences then decode it in a dominant reading that accepts the meaning, a negotiated reading that accepts it in part, or an oppositional reading that rejects it.',
    'The same programme can be read in dominant, negotiated or oppositional ways.',
    '## Which models of media effects are there?');
}

// 04 Violent media debate
add('04-violent-media',
  versusFig('Does violent media cause violence?', {
    left: { head: 'Arguments for', items: [
      '**Bandura:** children copied aggression they had watched',
      '**Newson Report (1994):** violent videos could harm children',
      'Repeated exposure may **desensitise**'] },
    right: { head: 'Arguments against', items: [
      '**Charlton, St Helena:** television arrived in 1995 with no rise in children’s anti-social behaviour',
      '**Gauntlett (1998):** effects research treats children as inadequate, uses artificial methods and ignores meaning',
      '**Buckingham (1993):** children are media-literate and tell fiction from reality'] },
  }),
  'Arguments that violent media cause violence (Bandura’s experiments, the Newson Report, desensitisation) set against arguments that they do not (Charlton’s St Helena study, Gauntlett’s critique of effects research, Buckingham’s media-literate children).',
  'Laboratory evidence of imitation is challenged by natural studies and active-audience research.',
  '## Does violent media cause violent behaviour?');

// 05 Deviance amplification spiral
{
  const cx = 450, cy = 360, R = 175;
  const nodes = [
    ['Deviance', C.cream], ['Media attention', C.mustard], ['Police reaction', C.teal], ['More deviance', C.cream],
  ];
  const ang = [-90, 0, 90, 180].map((a) => (a * Math.PI) / 180);
  let s = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${C.panelEdge}" stroke-width="2"/>`;
  // curved arrows between nodes
  for (let i = 0; i < 4; i++) {
    const g = [0.62, 0.3, 0.62, 0.3], a1 = ang[i] + g[i], a2 = ang[(i + 1) % 4] - g[(i + 1) % 4] - 0.06 + (i === 3 ? 2 * Math.PI : 0);
    const x1 = cx + R * Math.cos(a1), y1 = cy + R * Math.sin(a1), x2 = cx + R * Math.cos(a2), y2 = cy + R * Math.sin(a2);
    s += `<path d="M${x1},${y1} A${R},${R} 0 0 1 ${x2},${y2}" fill="none" stroke="${C.rust}" stroke-width="${3 + i}" marker-end="url(#ahR)"/>`;
  }
  nodes.forEach(([h, f], i) => {
    const x = cx + R * Math.cos(ang[i]), y = cy + R * Math.sin(ang[i]);
    s += `<rect x="${x - 95}" y="${y - 30}" width="190" height="60" rx="12" fill="${f}" stroke="${C.ink}" stroke-width="3"/>` + label(x, y + 7, h, { size: 19, weight: 700, anchor: 'middle' });
  });
  s += label(cx, cy - 6, 'Each turn', { size: 19, weight: 700, anchor: 'middle', fill: C.rust }) + label(cx, cy + 20, 'is bigger', { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
  s += label(cx, 128, 'Wilkins (1964); Young, The Drugtakers (1971)', { size: 17, anchor: 'middle', fill: C.muted, italic: true });
  const r = cardRow(594, [
    { head: 'Moral panics', fill: C.tealLight, body: 'Cohen (1972); Hall et al. (1978).' },
    { head: 'Copycat crime', fill: C.tealLight, body: 'Offending may be glamorised and imitated.' },
    { head: 'Fear of crime', fill: C.tealLight, body: 'Gerbner: heavy viewers overestimate their risk of victimisation.' },
  ]);
  add('05-deviance-amplification',
    svg(900, Math.round(594 + r.h + 24), 'The deviance amplification spiral', s + r.svg),
    'A cycle: deviance attracts media attention, which prompts police reaction, which produces more deviance and more media attention, with each turn bigger. Below, three further media effects on crime: moral panics, copycat crime and fear of crime.',
    'Media attention and police reaction can increase the deviance they report.',
    '## How does the media affect crime?');
}
