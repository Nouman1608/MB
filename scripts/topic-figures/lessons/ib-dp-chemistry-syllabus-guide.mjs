import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-chemistry-syllabus-guide';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- IB syllabus-guide kit: the same helpers are inlined in every IB "Syllabus Guide" figure file so the set looks alike ----
const SL = C.teal, HL = C.mustard, HLONLY = C.cream;
const cw = (size, weight = 400) => size * (weight >= 600 ? 0.585 : 0.54);
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
function pairedBars(rows, { y = 150, max, x0 = 40, labelW = 290, bx = 350, bw = 440, unit = ' h', rowGap = 10 } = {}) {
  const sc = bw / max;
  let b = '', yy = y;
  for (const r of rows) {
    const labLines = wrap(r.label, labelW, 18, 700);
    const subLines = r.sub ? wrap(r.sub, labelW, 15) : [];
    const noteLines = r.note ? wrap(r.note, labelW, 15, 600) : [];
    const textH = labLines.length * 22 + subLines.length * 19 + noteLines.length * 19;
    const h = Math.max(70, textH + 22);
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
    b += t(x + 90, yy + 34, s.title, { size: 20, weight: 700 });
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
    let ty = yy + 28;
    lt.forEach((s) => { b += t(lx + 18, ty, s, { size: 19, weight: 700 }); ty += 23; });
    if (r.hlOnly) b += hlTag(lx + lw - hlTagW() - 12, yy + 10);
    ll.forEach((s) => { b += t(lx + 18, ty, s, { size: 16, fill: C.muted }); ty += 21; });
    ty = yy + 28;
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
      let cwid = tw(it.t, size, 500) + 26 + pill;
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

// 01 Course map: two strands, six components
{
  let b = '';
  b += box(30, 112, 412, 78, { fill: C.tealLight, edge: C.tealDark, rx: 14 }) + t(236, 144, 'STRUCTURE', { size: 21, weight: 700, anchor: 'middle', fill: C.tealDark }) +
    t(236, 172, 'what is matter built from and how is it arranged?', { size: 15, anchor: 'middle', fill: C.ink, italic: true });
  b += box(458, 112, 412, 78, { fill: C.cream, edge: C.olive, rx: 14 }) + t(664, 144, 'REACTIVITY', { size: 21, weight: 700, anchor: 'middle', fill: C.olive }) +
    t(664, 172, 'why and how does matter change?', { size: 15, anchor: 'middle', fill: C.ink, italic: true });
  const g = themeChips([
    { title: 'Structure 1', sub: 'Models of the particulate nature of matter', items: [{ t: '1.1 Particulate nature of matter' }, { t: '1.2 The nuclear atom' }, { t: '1.3 Electron configurations' }, { t: '1.4 Counting particles by mass: the mole' }, { t: '1.5 Ideal gases' }] },
    { title: 'Reactivity 1', sub: 'What drives chemical reactions?', subColor: C.olive, items: [{ t: '1.1 Measuring enthalpy change' }, { t: '1.2 Energy cycles in reactions' }, { t: '1.3 Energy from fuels' }, { t: '1.4 Entropy and spontaneity', hl: 'only' }] },
    { title: 'Structure 2', sub: 'Models of bonding and structure', items: [{ t: '2.1 The ionic model' }, { t: '2.2 The covalent model' }, { t: '2.3 The metallic model' }, { t: '2.4 From models to materials' }] },
    { title: 'Reactivity 2', sub: 'How much, how fast and how far?', subColor: C.olive, items: [{ t: '2.1 How much? Amount of change' }, { t: '2.2 How fast? Rate of change' }, { t: '2.3 How far? Extent of change' }] },
    { title: 'Structure 3', sub: 'Classification of matter', items: [{ t: '3.1 The periodic table' }, { t: '3.2 Functional groups' }] },
    { title: 'Reactivity 3', sub: 'What are the mechanisms of chemical change?', subColor: C.olive, items: [{ t: '3.1 Proton transfer (acid-base)' }, { t: '3.2 Electron transfer (redox)', hl: 'part' }, { t: '3.3 Electron sharing (radicals)' }, { t: '3.4 Electron-pair sharing', hl: 'part' }] },
  ], { y: 206, size: 15, titleSize: 19 });
  b += g.body;
  const ky = g.bottom + 36;
  b += hlKey(40, ky, 'HL only', 'additional higher level content inside a sub-topic');
  add('01-structure-reactivity-map',
    svg(900, ky + 30, 'Two strands, six components', b),
    'Structure 1 to 3 sit in one column and Reactivity 1 to 3 in the other, each with its numbered sub-topics. Reactivity 1.4, entropy and spontaneity, is HL only; Reactivity 3.2 and 3.4 contain additional higher level content.',
    'Structure asks what matter is made of; Reactivity asks why and how it changes.',
    '## Reading the Structure / Reactivity split');
}

// 02 Teaching hours by component
{
  let b = legendSLHL(200, 128);
  const r = pairedBars([
    { label: 'Structure 1', sub: 'Particulate nature of matter', sl: 17, hl: 21 },
    { label: 'Structure 2', sub: 'Bonding and structure', sl: 20, hl: 30 },
    { label: 'Structure 3', sub: 'Classification of matter', sl: 16, hl: 31 },
    { label: 'Reactivity 1', sub: 'What drives chemical reactions?', sl: 12, hl: 22 },
    { label: 'Reactivity 2', sub: 'How much, how fast and how far?', sl: 21, hl: 31 },
    { label: 'Reactivity 3', sub: 'Mechanisms of chemical change', sl: 24, hl: 45, note: 'largest component at SL and HL' },
  ], { y: 152, max: 45 });
  b += r.body;
  const y = r.bottom + 34;
  const s = stackBars([
    { label: 'SL', segs: [{ v: 110, fill: SL, text: 'syllabus content 110 h' }, { v: 40, fill: C.sand, text: '40 h' }] },
    { label: 'HL', segs: [{ v: 180, fill: HL, text: 'syllabus content 180 h' }, { v: 60, fill: C.sand, text: '60 h' }] },
  ], { y: y + 58, max: 240, x0: 50, labelW: 60, bw: 740, h: 46, gap: 18 });
  const ph = s.bottom + 52 - y;
  b += box(26, y, 848, ph, { rx: 14 }) + t(46, y + 36, 'Teaching time', { size: 21, weight: 700 }) + t(200, y + 36, 'syllabus content + experimental programme', { size: 17, fill: C.muted });
  b += s.body;
  b += swatches([{ fill: C.sand, label: 'experimental programme: practical work, collaborative sciences project, scientific investigation' }], 50, s.bottom + 34, { size: 15 }).body;
  add('02-teaching-hours-by-component',
    svg(900, y + ph + 24, 'DP Chemistry: teaching hours by component', b, 'Recommended hours, first assessment 2025'),
    'Paired bars of recommended hours: Structure 1 17 SL and 21 HL, Structure 2 20 and 30, Structure 3 16 and 31, Reactivity 1 12 and 22, Reactivity 2 21 and 31, Reactivity 3 24 and 45. Syllabus content totals 110 hours at SL and 180 at HL, plus a 40-hour or 60-hour experimental programme.',
    'Reactivity 3, on mechanisms, is the largest component at both levels.',
    '## Reactivity 3 -- What are the mechanisms of chemical change? (24 hours SL / 45 hours HL)');
}

// 03 Reactivity draws on Structure
{
  let b = '';
  const left = (y, h, title, sub) => box(40, y, 330, h, { fill: C.tealLight, edge: C.tealDark, rx: 12 }) + t(60, y + 32, title, { size: 19, weight: 700 }) + (sub ? t(60, y + 56, sub, { size: 16, fill: C.muted }) : '');
  b += t(205, 130, 'Structure', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(695, 130, 'Reactivity', { size: 20, weight: 700, anchor: 'middle', fill: C.olive });
  b += left(150, 74, 'Structure 1', 'particle behaviour');
  b += left(260, 74, 'Structure 1.3', 'electron configurations');
  b += left(350, 74, 'Structure 2', 'bonding models');
  b += left(440, 74, 'Structure 3', 'periodic trends');
  // right boxes
  b += box(530, 150, 330, 74, { fill: C.cream, edge: C.olive, rx: 12, dash: '7 5' }) + t(550, 182, 'Reactivity 1.4', { size: 19, weight: 700 }) + t(550, 206, 'entropy and spontaneity', { size: 16, fill: C.muted }) + hlTag(764, 162);
  b += box(530, 260, 330, 254, { fill: C.cream, edge: C.olive, rx: 12 }) + t(550, 292, 'Reactivity 3', { size: 19, weight: 700 }) + t(550, 316, 'mechanisms of chemical change', { size: 16, fill: C.muted });
  ['proton transfer', 'electron transfer', 'electron sharing', 'electron-pair sharing'].forEach((s, i) => { b += chip(552, 336 + i * 42, 286, 34, s, { fill: '#fff', edge: C.olive, size: 16, weight: 600 }); });
  b += arrow(374, 187, 524, 187, { w: 3.5, color: C.olive, marker: 'ahO' });
  [297, 387, 477].forEach((y) => { b += arrow(374, y, 524, y, { w: 3.5, color: C.olive, marker: 'ahO' }); });
  b += t(449, 176, 'expects', { size: 15, weight: 600, fill: C.olive, anchor: 'middle' });
  [286, 376, 466].forEach((y) => { b += t(449, y, 'needed for', { size: 15, weight: 600, fill: C.olive, anchor: 'middle' }); });
  // habit
  b += box(40, 546, 820, 92, { fill: C.panel, edge: C.panelEdge, rx: 14 });
  b += t(450, 580, 'Revision habit for every new reaction type in Reactivity 3:', { size: 17, weight: 600, anchor: 'middle', fill: C.muted });
  b += t(450, 614, '“What bonding model explains this mechanism?”', { size: 21, weight: 700, anchor: 'middle' });
  add('03-reactivity-draws-on-structure',
    svg(900, 668, 'Reactivity draws on Structure', b),
    'Arrows run from Structure to Reactivity: particle behaviour from Structure 1 feeds entropy and spontaneity (Reactivity 1.4, HL only), and electron configurations, bonding models and periodic trends feed the four mechanism types of Reactivity 3. A revision habit below asks what bonding model explains each mechanism.',
    'Revise the two strands in parallel and keep crossing between them.',
    '## How to approach it');
}
