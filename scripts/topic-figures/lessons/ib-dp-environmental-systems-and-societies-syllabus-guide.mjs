import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-environmental-systems-and-societies-syllabus-guide';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- IB syllabus-guide kit: the same helpers are inlined in every IB "Syllabus Guide" figure file so the set looks alike ----
const SL = C.teal, HL = C.mustard, HLONLY = C.cream;
const cw = (size, weight = 400) => size * (weight >= 600 ? 0.585 : weight >= 500 ? 0.565 : 0.54);
const tw = (s, size = 17, weight = 400) => String(s).length * cw(size, weight);
function wrap(s, maxW, size = 17, weight = 400) {
  const lim = maxW / cw(size, weight);
  const lines = [''];
  for (const w of String(s).split(' ')) {
    const cur = lines[lines.length - 1];
    const nxt = cur ? cur + ' ' + w : w;
    if (nxt.length > lim && cur) lines.push(w); else lines[lines.length - 1] = nxt;
  }
  return lines;
}
const box = (x, y, w, h, { fill = C.panel, edge = C.panelEdge, sw = 2.5, rx = 10, dash = '' } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const chip = (x, y, w, h, s, { fill = C.tealLight, edge = C.ink, size = 16, weight = 600, color = C.ink, sw = 2, dash = '' } = {}) =>
  box(x, y, w, h, { fill, edge, sw, rx: 9, dash }) + t(x + w / 2, y + h / 2 + size * 0.36, s, { size, weight, anchor: 'middle', fill: color });
const hlTag = (x, y, label = 'HL only') => {
  const w = tw(label, 14, 700) + 16;
  return box(x, y, w, 22, { fill: C.mustard, edge: C.olive, sw: 1.5, rx: 11 }) + t(x + w / 2, y + 16, label, { size: 14, weight: 700, anchor: 'middle' });
};
const hlTagW = (label = 'HL only') => tw(label, 14, 700) + 16;
// Legend: SL / HL swatches
function legendSLHL(x, y, { sl = 'Standard Level (SL)', hl = 'Higher Level (HL)' } = {}) {
  return box(x, y - 15, 30, 18, { fill: SL, edge: C.tealDark, sw: 2, rx: 4 }) + t(x + 40, y, sl, { size: 17, weight: 600 }) +
    box(x + 70 + tw(sl, 17, 600), y - 15, 30, 18, { fill: HL, edge: C.olive, sw: 2, rx: 4 }) + t(x + 110 + tw(sl, 17, 600), y, hl, { size: 17, weight: 600 });
}
// Paired SL/HL horizontal bars. rows: {label, sub, sl, hl, slText, hlText, note, noteColor, hlOnly}
function pairedBars(rows, { y = 150, max, x0 = 40, labelW = 290, bx = 350, bw = 440, unit = ' h', rowGap = 10, minH = 70 } = {}) {
  const sc = bw / max;
  let b = '', yy = y;
  for (const r of rows) {
    const labLines = wrap(r.label, labelW, 18, 700);
    const subLines = r.sub ? wrap(r.sub, labelW, 15) : [];
    const noteLines = r.note ? wrap(r.note, labelW, 15, 600) : [];
    const textH = labLines.length * 22 + subLines.length * 19 + noteLines.length * 19;
    const h = Math.max(minH, textH + 22);
    b += box(x0 - 14, yy, 900 - 2 * (x0 - 14), h, { fill: r.hlOnly ? '#fbf6e2' : C.panel, edge: r.hlOnly ? C.olive : C.panelEdge, sw: 2, dash: r.hlOnly ? '7 5' : '' });
    let ty = yy + (h - textH) / 2 + 16;
    labLines.forEach((l) => { b += t(x0, ty, l, { size: 18, weight: 700 }); ty += 22; });
    subLines.forEach((l) => { b += t(x0, ty - 2, l, { size: 15, fill: C.muted }); ty += 19; });
    noteLines.forEach((l) => { b += t(x0, ty - 2, l, { size: 15, weight: 600, fill: r.noteColor || C.tealDark }); ty += 19; });
    const by = yy + h / 2 - 25;
    const bar = (v, yb, fill, edge, txt) => {
      if (v === null || v === undefined || v === 0) return t(bx + 4, yb + 17, txt || 'not studied at SL', { size: 15, fill: C.muted, italic: true });
      const w = v * sc;
      return box(bx, yb, w, 22, { fill, edge, sw: 2, rx: 4 }) + t(bx + w + 8, yb + 17, txt || `${v}${unit}`, { size: 16, weight: 700 });
    };
    b += bar(r.sl, by, SL, C.tealDark, r.slText) + bar(r.hl, by + 28, HL, C.olive, r.hlText);
    yy += h + rowGap;
  }
  return { body: b, bottom: yy - rowGap };
}
// Stacked horizontal bars (e.g. SL and HL teaching time, or weightings). bars: [{label, sub, segs:[{v, fill, text}]}]
function stackBars(bars, { y = 160, x0 = 40, labelW = 110, bw = 700, max, h = 56, gap = 34, unit = '' } = {}) {
  const bx = x0 + labelW, sc = bw / max;
  let b = '', yy = y;
  for (const bar of bars) {
    b += t(x0, yy + h / 2 + 2, bar.label, { size: 20, weight: 700 });
    if (bar.sub) b += t(x0, yy + h / 2 + 22, bar.sub, { size: 15, fill: C.muted });
    let x = bx;
    for (const s of bar.segs) {
      if (!s.v) continue;
      const w = s.v * sc;
      b += `<rect x="${x}" y="${yy}" width="${w}" height="${h}" fill="${s.fill}" stroke="${C.ink}" stroke-width="2"/>`;
      const txt = s.text ?? `${s.v}${unit}`;
      if (tw(txt, 17, 700) + 8 < w) b += t(x + w / 2, yy + h / 2 + 6, txt, { size: 17, weight: 700, anchor: 'middle', fill: s.color || C.ink });
      x += w;
    }
    if (bar.total) b += t(x + 10, yy + h / 2 + 6, bar.total, { size: 17, weight: 700, fill: C.muted });
    yy += h + gap;
  }
  return { body: b, bottom: yy - gap };
}
// Swatch legend in rows. items: [{fill, label}]
function swatches(items, x, y, { maxW = 820, size = 16 } = {}) {
  let b = '', xx = x, yy = y;
  for (const it of items) {
    const w = 34 + tw(it.label, size, 600) + 26;
    if (xx + w > x + maxW && xx > x) { xx = x; yy += 30; }
    b += box(xx, yy - 15, 24, 18, { fill: it.fill, edge: C.ink, sw: 1.5, rx: 3, dash: it.dash || '' }) + t(xx + 32, yy, it.label, { size, weight: 600 });
    xx += w;
  }
  return { body: b, bottom: yy };
}
// Grid of panels each holding a list of items; items {t, hl:'only'|'part'}
function themeGrid(panels, { x = 30, y = 120, w = 840, cols = 2, gap = 16, itemSize = 16, titleSize = 20 } = {}) {
  const pw = (w - gap * (cols - 1)) / cols;
  const layouts = panels.map((p) => {
    const titleLines = wrap(p.title, pw - 40, titleSize, 700);
    const items = p.items.map((it) => {
      const tagW = it.hl ? hlTagW(it.hl === 'only' ? 'HL only' : '+HL') + 8 : 0;
      return { ...it, lines: wrap(it.t, pw - 52 - tagW, itemSize, 500), tagW };
    });
    const h = 22 + titleLines.length * (titleSize + 4) + (p.sub ? 22 : 0) + 12 + items.reduce((a, it) => a + it.lines.length * (itemSize + 5) + 12, 0) + 8;
    return { p, titleLines, items, h };
  });
  let b = '', yy = y;
  for (let r = 0; r < layouts.length; r += cols) {
    const row = layouts.slice(r, r + cols);
    const rh = Math.max(...row.map((l) => l.h));
    row.forEach((l, k) => {
      const px = x + k * (pw + gap);
      b += box(px, yy, pw, rh, { fill: l.p.fill || C.panel, edge: l.p.edge || C.panelEdge, rx: 14 });
      let ty = yy + 30;
      l.titleLines.forEach((s) => { b += t(px + 18, ty, s, { size: titleSize, weight: 700, fill: l.p.titleColor || C.ink }); ty += titleSize + 4; });
      if (l.p.sub) { b += t(px + 18, ty - 2, l.p.sub, { size: 16, weight: 600, fill: C.tealDark }); ty += 22; }
      ty += 6;
      l.items.forEach((it) => {
        const ih = it.lines.length * (itemSize + 5) + 6;
        b += box(px + 12, ty - 2, pw - 24, ih, { fill: it.hl === 'only' ? C.cream : C.bg, edge: it.hl === 'only' ? C.olive : C.panelEdge, sw: 1.5, rx: 7, dash: it.hl === 'only' ? '6 4' : '' });
        it.lines.forEach((s, i) => { b += t(px + 22, ty + 17 + i * (itemSize + 5), s, { size: itemSize, weight: 500 }); });
        if (it.hl) b += hlTag(px + pw - 20 - it.tagW + 8, ty + (ih - 22) / 2 - 1, it.hl === 'only' ? 'HL only' : '+HL');
        ty += ih + 6;
      });
    });
    yy += rh + gap;
  }
  return { body: b, bottom: yy - gap };
}
// Vertical numbered flow. steps: [{title, text}]
function flowSteps(steps, { x = 30, y = 120, w = 840, gap = 22, fills = [] } = {}) {
  let b = '', yy = y;
  steps.forEach((s, i) => {
    const lines = s.text ? wrap(s.text, w - 130, 17) : [];
    const h = Math.max(78, 46 + lines.length * 23 + 10);
    b += box(x, yy, w, h, { fill: fills[i] || C.panel, edge: C.panelEdge, rx: 14 });
    b += badge(x + 46, yy + h / 2, 22, String(i + 1), i === steps.length - 1 ? C.mustard : C.cream);
    b += t(x + 90, lines.length ? yy + 34 : yy + h / 2 + 7, s.title, { size: 20, weight: 700 });
    b += tl(x + 90, yy + 60, lines, { size: 17, fill: C.muted }, 23);
    if (i < steps.length - 1) b += arrow(x + 46, yy + h + 1, x + 46, yy + h + gap - 1, { w: 3 });
    yy += h + gap;
  });
  return { body: b, bottom: yy - gap };
}
// Left box -> right box mapping rows. rows: [{l:{title, lines}, r:{title, lines}, hlOnly}]
function mapRows(rows, { y = 150, lx = 30, lw = 380, rx = 520, rw = 350, gap = 16, headL, headR } = {}) {
  let b = '', yy = y;
  if (headL) { b += t(lx + lw / 2, yy, headL, { size: 18, weight: 700, anchor: 'middle', fill: C.tealDark }); }
  if (headR) { b += t(rx + rw / 2, yy, headR, { size: 18, weight: 700, anchor: 'middle', fill: C.olive }); }
  if (headL || headR) yy += 18;
  for (const r of rows) {
    const ll = (r.l.lines || []).flatMap((s) => wrap(s, lw - 36, 16));
    const rl = (r.r.lines || []).flatMap((s) => wrap(s, rw - 36, 16));
    const lt = wrap(r.l.title, lw - 36 - (r.hlOnly ? hlTagW() + 6 : 0), 19, 700);
    const rt = wrap(r.r.title, rw - 36, 19, 700);
    const h = Math.max(lt.length * 23 + ll.length * 21, rt.length * 23 + rl.length * 21) + 30;
    const fillL = r.hlOnly ? '#fbf6e2' : C.panel, edgeL = r.hlOnly ? C.olive : C.panelEdge;
    b += box(lx, yy, lw, h, { fill: fillL, edge: edgeL, rx: 12, dash: r.hlOnly ? '7 5' : '' });
    b += box(rx, yy, rw, h, { fill: r.r.fill || C.cream, edge: C.olive, rx: 12 });
    const lH = lt.length * 23 + ll.length * 21, rH = rt.length * 23 + rl.length * 21;
    let ty = yy + (h - lH) / 2 + 19;
    lt.forEach((s) => { b += t(lx + 18, ty, s, { size: 19, weight: 700 }); ty += 23; });
    if (r.hlOnly) b += hlTag(lx + lw - hlTagW() - 12, yy + 10);
    ll.forEach((s) => { b += t(lx + 18, ty, s, { size: 16, fill: C.muted }); ty += 21; });
    ty = yy + (h - rH) / 2 + 19;
    rt.forEach((s) => { b += t(rx + 18, ty, s, { size: 19, weight: 700 }); ty += 23; });
    rl.forEach((s) => { b += t(rx + 18, ty, s, { size: 16, fill: C.muted }); ty += 21; });
    b += arrow(lx + lw + 6, yy + h / 2, rx - 8, yy + h / 2, { w: 3.5, color: C.olive, marker: 'ahO' });
    yy += h + gap;
  }
  return { body: b, bottom: yy - gap };
}
// Footer note line(s) centred
const footNote = (y, s, opts = {}) => wrap(s, 820, opts.size || 17, opts.weight || 400).map((l, i) => t(450, y + i * 23, l, { size: 17, fill: C.muted, anchor: 'middle', ...opts })).join('');
// ---- end kit ----
// Grid of panels holding flowing chips; items {t, hl:'only'|'part'}. HL-only chips are cream, dashed, with an HL pill.
function themeChips(panels, { x = 30, y = 120, w = 840, cols = 2, gap = 16, size = 16, titleSize = 20, chipH = 34 } = {}) {
  const pw = (w - gap * (cols - 1)) / cols;
  const lay = panels.map((p) => {
    const titleLines = wrap(p.title, pw - 36, titleSize, 700);
    const subLines = p.sub ? wrap(p.sub, pw - 36, 16, 600) : [];
    let cx = 0, rowsN = 1; const pos = [];
    for (const it of p.items) {
      const pill = it.hl ? hlTagW(it.hl === 'only' ? 'HL' : '+HL') + 6 : 0;
      let cwid = tw(it.t, size, 500) + 30 + pill;
      const maxc = pw - 32;
      let lines = [it.t];
      if (cwid > maxc) { lines = wrap(it.t, maxc - 26 - pill, size, 500); cwid = maxc; }
      const ch = chipH + (lines.length - 1) * (size + 4);
      if (cx + cwid > maxc && cx > 0) { cx = 0; rowsN++; }
      pos.push({ it, lines, cwid, ch, pill, row: rowsN - 1, cx });
      cx += cwid + 10;
    }
    // row heights
    const rowH = [];
    pos.forEach((q) => { rowH[q.row] = Math.max(rowH[q.row] || 0, q.ch); });
    const head = 18 + titleLines.length * (titleSize + 5) + subLines.length * 21 + 8;
    const h = head + rowH.reduce((a, v) => a + v + 10, 0) + 8;
    return { p, titleLines, subLines, pos, rowH, head, h };
  });
  let b = '', yy = y;
  for (let r = 0; r < lay.length; r += cols) {
    const row = lay.slice(r, r + cols);
    const rh = Math.max(...row.map((l) => l.h));
    row.forEach((l, k) => {
      const px = x + k * (pw + gap);
      b += box(px, yy, pw, rh, { fill: l.p.fill || C.panel, edge: l.p.edge || C.panelEdge, rx: 14 });
      let ty = yy + 18 + titleSize;
      l.titleLines.forEach((s) => { b += t(px + 16, ty, s, { size: titleSize, weight: 700, fill: l.p.titleColor || C.ink }); ty += titleSize + 5; });
      l.subLines.forEach((s) => { b += t(px + 16, ty - 2, s, { size: 16, weight: 600, fill: l.p.subColor || C.tealDark }); ty += 21; });
      const rowY = []; let acc = yy + l.head + 4;
      l.rowH.forEach((v, i) => { rowY[i] = acc; acc += v + 10; });
      l.pos.forEach((q) => {
        const cx = px + 16 + q.cx, cy = rowY[q.row];
        const only = q.it.hl === 'only';
        b += box(cx, cy, q.cwid, q.ch, { fill: only ? C.cream : (l.p.chipFill || C.tealLight), edge: only ? C.olive : C.tealDark, sw: 1.8, rx: 8, dash: only ? '6 4' : '' });
        let tx = cx + 13;
        if (q.it.hl) { const lab = only ? 'HL' : '+HL'; b += box(tx - 4, cy + (q.ch - 22) / 2, hlTagW(lab), 22, { fill: C.mustard, edge: C.olive, sw: 1.5, rx: 11 }) + t(tx - 4 + hlTagW(lab) / 2, cy + (q.ch - 22) / 2 + 16, lab, { size: 14, weight: 700, anchor: 'middle' }); tx += q.pill; }
        q.lines.forEach((s, i) => { b += t(tx, cy + chipH / 2 + size * 0.36 + i * (size + 4), s, { size, weight: 500 }); });
      });
    });
    yy += rh + gap;
  }
  return { body: b, bottom: yy - gap };
}
// HL key line
function hlKey(x, y, onlyText = 'HL-only sub-topic (not examined at SL)', partText) {
  let b = box(x, y - 17, 70, 26, { fill: C.cream, edge: C.olive, sw: 1.8, rx: 8, dash: '6 4' }) + box(x + 6, y - 15, hlTagW('HL'), 22, { fill: C.mustard, edge: C.olive, sw: 1.5, rx: 11 }) + t(x + 6 + hlTagW('HL') / 2, y + 1, 'HL', { size: 14, weight: 700, anchor: 'middle' });
  b += t(x + 82, y + 1, onlyText, { size: 16, weight: 600 });
  if (partText) {
    const x2 = x + 120 + tw(onlyText, 16, 600);
    b += box(x2, y - 15, hlTagW('+HL'), 22, { fill: C.mustard, edge: C.olive, sw: 1.5, rx: 11 }) + t(x2 + hlTagW('+HL') / 2, y + 1, '+HL', { size: 14, weight: 700, anchor: 'middle' });
    b += t(x2 + hlTagW('+HL') + 10, y + 1, partText, { size: 16, weight: 600 });
  }
  return b;
}
// Standard "how the hours are split" figure body: comps [{label, sl, hl, fill, color}], totals text
function hoursSplit(comps, { y = 130, slTotal, hlTotal, note } = {}) {
  const segs = (k) => comps.map((c) => ({ v: c[k], fill: c.fill, text: c[k] ? String(c[k]) : '', color: c.color }));
  const s = stackBars([
    { label: 'SL', segs: segs('sl'), total: slTotal },
    { label: 'HL', segs: segs('hl'), total: hlTotal },
  ], { y: y + 24, max: 240, x0: 50, labelW: 60, bw: 680, h: 60, gap: 30 });
  let b = box(26, y, 848, s.bottom - y + 24, { rx: 14 }) + s.body;
  const lg = swatches(comps.map((c) => ({ fill: c.fill, label: c.label })), 50, s.bottom + 66, { size: 16 });
  b += lg.body;
  let bottom = lg.bottom;
  if (note) { b += footNote(bottom + 44, note); bottom += 44 + (wrap(note, 820, 17).length - 1) * 23; }
  return { body: b, bottom };
}

// 01 Teaching hours by topic
{
  let b = legendSLHL(200, 128);
  const r = pairedBars([
    { label: 'Topic 1 Foundations', sl: 16, hl: 16, note: 'same at both levels' },
    { label: 'Topic 2 Ecology', sl: 22, hl: 35, note: '+13 at HL', noteColor: C.olive },
    { label: 'Topic 3 Biodiversity and conservation', sl: 13, hl: 26, note: '+13 at HL', noteColor: C.olive },
    { label: 'Topic 4 Water', sl: 12, hl: 25, note: '+13 at HL', noteColor: C.olive },
    { label: 'Topic 5 Land', sl: 8, hl: 15 },
    { label: 'Topic 6 Atmosphere and climate change', sl: 10, hl: 23, note: '+13 at HL', noteColor: C.olive },
    { label: 'Topic 7 Natural resources', sl: 10, hl: 18 },
    { label: 'Topic 8 Human populations and urban systems', sl: 9, hl: 15 },
    { label: 'Lens a: Environmental law', sl: 0, hl: 5, slText: 'HL only', hlOnly: true },
    { label: 'Lens b: Environmental and ecological economics', sl: 0, hl: 7, slText: 'HL only', hlOnly: true },
    { label: 'Lens c: Environmental ethics', sl: 0, hl: 5, slText: 'HL only', hlOnly: true },
  ], { y: 152, max: 35, minH: 62, rowGap: 7 });
  b += r.body;
  const y = r.bottom + 30;
  const s = stackBars([
    { label: 'SL', segs: [{ v: 100, fill: SL, text: 'syllabus content 100 h' }, { v: 50, fill: C.sand, text: '50 h' }] },
    { label: 'HL', segs: [{ v: 190, fill: HL, text: 'syllabus content 190 h' }, { v: 50, fill: C.sand, text: '50 h' }] },
  ], { y: y + 58, max: 240, x0: 50, labelW: 60, bw: 740, h: 46, gap: 18 });
  const ph = s.bottom + 52 - y;
  b += box(26, y, 848, ph, { rx: 14 }) + t(46, y + 36, 'Teaching time', { size: 21, weight: 700 }) + t(200, y + 36, 'syllabus content + experimental programme', { size: 17, fill: C.muted });
  b += s.body;
  b += swatches([{ fill: C.sand, label: 'experimental programme: 50 hours at both levels' }], 50, s.bottom + 34, { size: 15 }).body;
  add('01-teaching-hours-by-topic',
    svg(900, y + ph + 24, 'DP ESS: teaching hours by topic', b, 'Recommended hours, first assessment 2026'),
    'Paired SL and HL bars for each topic: Foundations 16 at both levels, Ecology 22 and 35, Biodiversity and conservation 13 and 26, Water 12 and 25, Land 8 and 15, Atmosphere and climate change 10 and 23, Natural resources 10 and 18, Human populations and urban systems 9 and 15, plus HL-only lenses of 5, 7 and 5 hours. Content totals 100 hours at SL and 190 at HL, with a 50-hour experimental programme at both levels.',
    'Topics 2, 3, 4 and 6 each gain 13 hours at HL: that is where HL depth sits.',
    '## How to approach it');
}

// 02 Topic 1 concepts run through every topic
{
  let b = '';
  const concepts = [['Perspectives', '3 h'], ['Systems', '5 h'], ['Sustainability', '8 h']];
  b += box(30, 112, 840, 64, { fill: C.cream, edge: C.olive, rx: 14 }) + t(450, 152, 'Topic 1 Foundations (16 hours, both levels)', { size: 21, weight: 700, anchor: 'middle' });
  const topics = ['2 Ecology', '3 Biodiversity', '4 Water', '5 Land', '6 Atmosphere', '7 Resources', '8 Populations'];
  const x0 = 238, cwid = 86, gap = 4;
  topics.forEach((s, i) => {
    const x = x0 + i * (cwid + gap);
    b += box(x, 200, cwid, 330, { fill: C.panel, edge: C.panelEdge, rx: 10 });
    const [n, ...rest] = s.split(' ');
    b += t(x + cwid / 2, 228, `Topic ${n}`, { size: 15, weight: 700, anchor: 'middle' }) + t(x + cwid / 2, 248, rest.join(' '), { size: 15, anchor: 'middle', fill: C.muted });
  });
  concepts.forEach(([c, h], i) => {
    const y = 300 + i * 80;
    b += box(40, y - 28, 190, 56, { fill: [C.tealLight, C.teal, C.mustard][i], edge: C.ink, sw: 2, rx: 10 }) + t(135, y - 2, c, { size: 18, weight: 700, anchor: 'middle' }) + t(135, y + 18, h, { size: 15, anchor: 'middle' });
    b += `<line x1="232" y1="${y}" x2="860" y2="${y}" stroke="${C.tealDark}" stroke-width="5" stroke-dasharray="2 0"/>`;
    topics.forEach((_, k) => { b += `<circle cx="${x0 + k * (cwid + gap) + cwid / 2}" cy="${y}" r="9" fill="#fff" stroke="${C.tealDark}" stroke-width="3"/>`; });
  });
  b += box(30, 556, 840, 160, { rx: 14 });
  b += t(52, 588, 'Vocabulary to thread through answers on every topic:', { size: 17, weight: 700 });
  const vocab = ['carrying capacity', 'ecological footprint', 'environmental value systems', 'positive / negative feedback'];
  let vx = 52, vy = 608;
  vocab.forEach((v) => { const w = tw(v, 16, 600) + 28; if (vx + w > 850) { vx = 52; vy += 48; } b += chip(vx, vy, w, 38, v, { fill: C.tealLight, edge: C.tealDark, size: 16 }); vx += w + 12; });
  b += footNote(750, 'Threaded through every topic, Topic 1 turns description into analysis.', { weight: 600, fill: C.ink });
  add('02-foundations-threaded',
    svg(900, 778, 'Three concepts, revisited throughout', b),
    'The three Topic 1 concepts, perspectives (3 hours), systems (5 hours) and sustainability (8 hours), run as lines through Topics 2 to 8. Below, the vocabulary to use in every answer: carrying capacity, ecological footprint, environmental value systems and positive or negative feedback.',
    'Topic 1 is the framework for every later topic, not a warm-up.',
    '## Why Topic 1 gets disproportionate attention');
}

// 03 One issue, three HL lenses
{
  let b = '';
  b += `<ellipse cx="450" cy="200" rx="230" ry="62" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
  b += t(450, 192, 'a core-topic issue', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 }) + t(450, 220, 'e.g. water scarcity', { size: 21, weight: 700, anchor: 'middle' });
  const lens = [
    ['Legal lens', 'Environmental law', '5 h', ['How legal frameworks address', 'the issue at local, national', 'and international scale']],
    ['Economic lens', 'Environmental and', '7 h', ['How economic tools and', 'models, including valuing', 'ecosystem services, shape', 'decisions'], 'ecological economics'],
    ['Ethical lens', 'Environmental ethics', '5 h', ['Which value systems and', 'ethical positions shape', 'responses to the issue']],
  ];
  lens.forEach(([name, topic, h, lines, topic2], i) => {
    const x = 30 + i * 287, w = 266;
    b += arrow(450 + (i - 1) * 150, 264, x + w / 2, 318, { w: 3.5, color: C.olive, marker: 'ahO' });
    b += box(x, 324, w, 236, { fill: '#fbf6e2', edge: C.olive, rx: 14, dash: '7 5' });
    b += hlTag(x + w - hlTagW() - 12, 336);
    b += t(x + 18, 372, name, { size: 21, weight: 700 });
    b += t(x + 18, 398, topic, { size: 16, weight: 600, fill: C.olive });
    let ly = 420;
    if (topic2) { b += t(x + 18, 418, topic2, { size: 16, weight: 600, fill: C.olive }); ly = 440; }
    b += t(x + 18, ly + 2, h, { size: 16, weight: 600, fill: C.muted });
    b += tl(x + 18, ly + 36, lines, { size: 16 }, 22);
  });
  b += box(30, 584, 840, 70, { rx: 14 }) + t(450, 626, 'Standing question: what would a legal, economic and ethical analysis look like?', { size: 18, weight: 700, anchor: 'middle' });
  add('03-three-hl-lenses',
    svg(900, 680, 'One issue, three HL lenses', b),
    'A core-topic issue such as water scarcity branches to three HL-only lenses: environmental law (5 hours), environmental and ecological economics (7 hours) and environmental ethics (5 hours), each asking a different question of the same issue.',
    'HL lenses re-read content you already know; revise them topic by topic.',
    '## The HL-only lenses');
}

// 04 Experimental programme and the individual investigation
{
  let b = '';
  b += t(450, 140, 'Experimental programme: 50 hours, SL and HL', { size: 20, weight: 700, anchor: 'middle' });
  const s = stackBars([{ label: '', segs: [{ v: 30, fill: C.teal, text: '30 h' }, { v: 10, fill: C.cream, text: '10 h' }, { v: 10, fill: C.mustard, text: '10 h' }] }], { y: 160, max: 50, x0: 50, labelW: 0, bw: 800, h: 60 });
  b += s.body;
  b += t(610, 244, 'collaborative project', { size: 15, weight: 600, anchor: 'middle' }) + t(610, 263, 'not separately graded', { size: 15, weight: 600, anchor: 'middle', fill: C.rust });
  b += t(770, 244, 'scientific', { size: 15, weight: 600, anchor: 'middle' }) + t(770, 263, 'investigation', { size: 15, weight: 600, anchor: 'middle' });
  b += t(290, 244, 'practical work', { size: 15, weight: 600, anchor: 'middle' });
  b += arrow(450, 272, 450, 310, { w: 3.5 }) + t(462, 298, 'builds data-handling and investigative skills for', { size: 15, fill: C.muted });
  b += box(30, 316, 840, 72, { fill: C.tealLight, edge: C.tealDark, rx: 14 }) + t(450, 350, 'Individual investigation (internally assessed)', { size: 21, weight: 700, anchor: 'middle' }) + t(450, 374, 'written up as an evidence-based report capped at 3,000 words', { size: 16, anchor: 'middle', fill: C.muted });
  const f = flowSteps([
    { title: 'Draft a clear, testable research question early', text: 'and check it against the assessment criteria before collecting data' },
    { title: 'Gather and analyse data to answer it' },
    { title: 'Write the evidence-based report', text: 'within the 3,000-word cap' },
  ], { y: 414, gap: 20 });
  b += f.body;
  add('04-investigation-route',
    svg(900, f.bottom + 30, 'From practical hours to the investigation', b),
    'A 50-hour bar split into practical work (30 hours), the collaborative sciences project (10 hours, not separately graded) and scientific investigation (10 hours). It feeds the internally assessed individual investigation: draft a testable research question early and check it against the criteria, gather and analyse data, then write an evidence-based report of up to 3,000 words.',
    'A focused research question, set early, saves more marks than any rescue later.',
    '## The experimental programme');
}
