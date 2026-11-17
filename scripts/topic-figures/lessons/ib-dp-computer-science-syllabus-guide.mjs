import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-computer-science-syllabus-guide';
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

// 01 Teaching hours by sub-topic
{
  let b = legendSLHL(200, 128);
  b += t(40, 172, 'Theme A: Concepts of computer science', { size: 18, weight: 700, fill: C.tealDark });
  const ra = pairedBars([
    { label: 'A.1 Computer fundamentals', sl: 11, hl: 18 },
    { label: 'A.2 Networks', sl: 11, hl: 18 },
    { label: 'A.3 Databases', sl: 11, hl: 18 },
    { label: 'A.4 Machine learning', sl: 5, hl: 18, note: 'more than triples at HL' },
  ], { y: 186, max: 42, rowGap: 8 });
  b += ra.body;
  const yb = ra.bottom + 40;
  b += t(40, yb, 'Theme B: Computational thinking and problem-solving', { size: 18, weight: 700, fill: C.tealDark });
  const rb = pairedBars([
    { label: 'B.1 Computational thinking', sl: 5, hl: 5 },
    { label: 'B.2 Programming', sl: 40, hl: 42, note: 'largest sub-topic at SL' },
    { label: 'B.3 Object oriented programming', sl: 7, hl: 23 },
    { label: 'B.4 Abstract data types', sl: 0, hl: 23, slText: 'not studied at SL (0 h)', hlOnly: true, note: 'HL only', noteColor: C.olive },
  ], { y: yb + 14, max: 42, rowGap: 8 });
  b += rb.body;
  add('01-hours-by-sub-topic',
    svg(900, rb.bottom + 30, 'DP Computer Science: hours by sub-topic', b, 'Recommended hours, first assessment 2027'),
    'Paired SL and HL bars for each sub-topic. Theme A: computer fundamentals, networks and databases 11 SL and 18 HL each, machine learning 5 and 18. Theme B: computational thinking 5 and 5, programming 40 and 42, object oriented programming 7 and 23, abstract data types 0 and 23 (HL only).',
    'Programming dominates SL; OOP and abstract data types make most of the HL gap.',
    '## Theme B -- Computational thinking and problem-solving (52 hours SL / 93 hours HL)');
}

// 02 Where the teaching time goes
{
  const fA = C.teal, fB = C.tealDark, fCase = C.cream, fIA = C.mustard, fCol = C.sand;
  let b = '';
  const s = stackBars([
    { label: 'SL', segs: [{ v: 38, fill: fA, text: '38' }, { v: 52, fill: fB, text: '52', color: '#fff' }, { v: 15, fill: fCase, text: '15' }, { v: 35, fill: fIA, text: '35' }, { v: 10, fill: fCol, text: '10' }], total: '150 h' },
    { label: 'HL', segs: [{ v: 72, fill: fA, text: '72' }, { v: 93, fill: fB, text: '93', color: '#fff' }, { v: 30, fill: fCase, text: '30' }, { v: 35, fill: fIA, text: '35' }, { v: 10, fill: fCol, text: '10' }], total: '240 h' },
  ], { y: 140, max: 240, x0: 50, labelW: 60, bw: 700, h: 56, gap: 30 });
  b += box(26, 112, 848, s.bottom - 112 + 30, { rx: 14 }) + s.body;
  // brackets for syllabus content
  const sc = 700 / 240, bx = 110;
  const brace = (y, v, label) => path(`M${bx},${y} l0,10 l${v * sc},0 l0,-10`, { stroke: C.ink, w: 2 }) + t(bx + (v * sc) / 2, y + 32, label, { size: 16, weight: 600, anchor: 'middle' });
  b += brace(s.bottom + 44, 105, 'syllabus content: 105 h at SL');
  b += brace(s.bottom + 100, 195, 'syllabus content: 195 h at HL');
  const lg = swatches([
    { fill: fA, label: 'Theme A' }, { fill: fB, label: 'Theme B' }, { fill: fCase, label: 'Case study' },
    { fill: fIA, label: 'Computational solution (IA)' }, { fill: fCol, label: 'Collaborative sciences project' },
  ], 50, s.bottom + 186, { size: 16 });
  b += lg.body;
  b += footNote(lg.bottom + 42, 'The internal assessment and the collaborative project take the same hours at both levels.');
  add('02-teaching-time-split',
    svg(900, lg.bottom + 70, 'Where the teaching time goes', b, 'Hours at SL and HL'),
    'Two stacked bars. SL, 150 hours: Theme A 38, Theme B 52, case study 15, computational solution internal assessment 35, collaborative sciences project 10. HL, 240 hours: Theme A 72, Theme B 93, case study 30, then the same 35 and 10. Syllabus content is 105 hours at SL and 195 at HL.',
    'The extra HL time all goes to syllabus content; the IA and project stay the same.',
    '## Internal assessment and collaborative sciences project');
}

// 03 Which paper tests which theme
{
  let b = '';
  b += box(40, 120, 420, 120, { rx: 12 }) + t(60, 152, 'Theme A', { size: 20, weight: 700 }) + t(60, 176, 'Concepts of computer science', { size: 16, fill: C.muted }) +
    t(60, 210, 'A.1 Computer fundamentals · A.2 Networks', { size: 15 }) + t(60, 230, 'A.3 Databases · A.4 Machine learning', { size: 15 });
  b += box(40, 256, 420, 92, { fill: C.cream, edge: C.olive, rx: 12 }) + t(60, 288, 'Case study', { size: 20, weight: 700 }) + t(60, 312, 'published in advance; changes between', { size: 15, fill: C.muted }) + t(60, 332, 'exam cycles, so check your session’s version', { size: 15, fill: C.muted });
  b += box(560, 160, 300, 148, { fill: C.mustard, edge: C.olive, rx: 14 }) + t(710, 206, 'Paper 1', { size: 24, weight: 700, anchor: 'middle' }) + tl(710, 238, ['conceptual recall and', 'applied understanding', 'of systems'], { size: 16, anchor: 'middle' }, 21);
  b += arrow(464, 180, 554, 214, { w: 3.5, color: C.olive, marker: 'ahO' }) + arrow(464, 302, 554, 262, { w: 3.5, color: C.olive, marker: 'ahO' });
  b += box(40, 384, 420, 140, { rx: 12 }) + t(60, 416, 'Theme B', { size: 20, weight: 700 }) + t(60, 440, 'Computational thinking and problem-solving', { size: 16, fill: C.muted }) +
    t(60, 474, 'B.1 Computational thinking · B.2 Programming', { size: 15 }) + t(60, 494, 'B.3 OOP · B.4 Abstract data types', { size: 15 }) + hlTag(60 + tw('B.3 OOP · B.4 Abstract data types', 15, 500) + 10, 499 - 16);
  b += box(560, 384, 300, 140, { fill: C.mustard, edge: C.olive, rx: 14 }) + t(710, 424, 'Paper 2', { size: 24, weight: 700, anchor: 'middle' }) + tl(710, 454, ['OOP at both levels;', 'abstract data types HL only;', 'code that actually runs'], { size: 16, anchor: 'middle' }, 21);
  b += arrow(464, 454, 554, 454, { w: 3.5, color: C.olive, marker: 'ahO' });
  // IA
  b += box(40, 560, 820, 170, { fill: C.tealLight, edge: C.tealDark, rx: 14 });
  b += t(60, 594, 'Internal assessment: the computational solution', { size: 20, weight: 700 }) + t(840, 594, '35 h, SL and HL', { size: 17, weight: 600, anchor: 'end', fill: C.tealDark });
  b += t(60, 620, 'A real-world problem of the student’s own choosing, solved with the B.1 process:', { size: 16, fill: C.muted });
  const st = ['specify', 'decompose', 'abstract', 'test and evaluate'];
  let x = 70;
  st.forEach((s, i) => { const w = tw(s, 17, 700) + 44; b += chip(x, 646, w, 50, s, { fill: '#fff', edge: C.tealDark, size: 17, weight: 700 }); if (i < st.length - 1) b += arrow(x + w + 6, 671, x + w + 46, 671, { w: 3, color: C.tealDark, marker: 'ahT' }); x += w + 52; });
  b += footNote(766, 'Revise the two themes separately, alternating between them week by week.', { weight: 600, fill: C.ink });
  add('03-papers-and-themes',
    svg(900, 800, 'Which paper tests which theme', b),
    'Theme A and the pre-released case study feed Paper 1, which tests conceptual recall and applied understanding of systems. Theme B feeds Paper 2, with object oriented programming at both levels and abstract data types at HL only. The internal assessment, a computational solution worth 35 hours at both levels, applies the specify, decompose, abstract, test and evaluate process.',
    'Know which theme a paper tests, and you know what to revise for it.',
    '## How to approach it');
}
