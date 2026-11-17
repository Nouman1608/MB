import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-physics-syllabus-guide';
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

// 01 Course map with HL-only sub-topics
{
  const g = themeChips([
    { title: 'A  Space, time and motion', items: [{ t: 'A.1 Kinematics' }, { t: 'A.2 Forces and momentum' }, { t: 'A.3 Work, energy and power' }, { t: 'A.4 Rigid body mechanics', hl: 'only' }, { t: 'A.5 Galilean and special relativity', hl: 'only' }] },
    { title: 'B  The particulate nature of matter', items: [{ t: 'B.1 Thermal energy transfers' }, { t: 'B.2 Greenhouse effect' }, { t: 'B.3 Gas laws' }, { t: 'B.4 Thermodynamics', hl: 'only' }, { t: 'B.5 Current and circuits' }] },
    { title: 'C  Wave behaviour', items: [{ t: 'C.1 Simple harmonic motion' }, { t: 'C.2 Wave model' }, { t: 'C.3 Wave phenomena' }, { t: 'C.4 Standing waves and resonance' }, { t: 'C.5 Doppler effect' }] },
    { title: 'D  Fields', items: [{ t: 'D.1 Gravitational fields' }, { t: 'D.2 Electric and magnetic fields' }, { t: 'D.3 Motion in electromagnetic fields' }, { t: 'D.4 Induction', hl: 'only' }] },
    { title: 'E  Nuclear and quantum physics', items: [{ t: 'E.1 Structure of the atom' }, { t: 'E.2 Quantum physics', hl: 'only' }, { t: 'E.3 Radioactive decay' }, { t: 'E.4 Fission' }, { t: 'E.5 Fusion and stars' }] },
  ], { y: 150, cols: 1, size: 16 });
  let b = hlKey(250, 124, 'HL-only sub-topic (not part of SL)');
  b += g.body;
  b += footNote(g.bottom + 34, 'HL extensions also run inside other sub-topics.', { fill: C.muted });
  add('01-course-map-hl-only',
    svg(900, g.bottom + 60, 'The five themes and their sub-topics', b),
    'Five theme panels list sub-topics A.1 to E.5. Five are HL only: A.4 rigid body mechanics, A.5 Galilean and special relativity, B.4 thermodynamics, D.4 induction and E.2 quantum physics.',
    'HL-only content clusters where the core models become more abstract.',
    '## Why HL-only content clusters where it does');
}

// 02 Teaching hours by theme
{
  let b = legendSLHL(200, 128);
  const r = pairedBars([
    { label: 'Theme A', sub: 'Space, time and motion', sl: 27, hl: 42 },
    { label: 'Theme B', sub: 'The particulate nature of matter', sl: 24, hl: 32 },
    { label: 'Theme C', sub: 'Wave behaviour', sl: 17, hl: 29 },
    { label: 'Theme D', sub: 'Fields', sl: 19, hl: 38 },
    { label: 'Theme E', sub: 'Nuclear and quantum physics', sl: 23, hl: 39 },
  ], { y: 152, max: 42 });
  b += r.body;
  const y = r.bottom + 34;
  const s = stackBars([
    { label: 'SL', segs: [{ v: 110, fill: SL, text: 'five themes' }, { v: 40, fill: C.sand, text: '40 h' }], total: '150 h' },
    { label: 'HL', segs: [{ v: 180, fill: HL, text: 'five themes' }, { v: 60, fill: C.sand, text: '60 h' }], total: '240 h' },
  ], { y: y + 58, max: 240, x0: 50, labelW: 60, bw: 680, h: 46, gap: 18 });
  const ph = s.bottom + 52 - y;
  b += box(26, y, 848, ph, { rx: 14 }) + t(46, y + 36, 'Total teaching time', { size: 21, weight: 700 }) + t(256, y + 36, 'five themes + experimental programme', { size: 17, fill: C.muted });
  b += s.body;
  b += swatches([{ fill: C.sand, label: 'experimental programme: practical work, collaborative sciences project, scientific investigation' }], 50, s.bottom + 34, { size: 15 }).body;
  add('02-teaching-hours-by-theme',
    svg(900, y + ph + 24, 'DP Physics: teaching hours by theme', b, 'Recommended hours, first assessment 2025'),
    'Paired bars of recommended hours: Theme A 27 SL and 42 HL, Theme B 24 and 32, Theme C 17 and 29, Theme D 19 and 38, Theme E 23 and 39. Total teaching time is 150 hours at SL and 240 at HL, including a 40-hour or 60-hour experimental programme.',
    'Theme A is the largest at both levels; Theme D gains the most hours at HL.',
    '## Theme E -- Nuclear and quantum physics (23 hours SL / 39 hours HL)');
}

// 03 The experimental programme as a parallel strand
{
  let b = box(30, 112, 840, 64, { fill: C.sand, edge: C.olive, rx: 14 }) + t(450, 152, 'Experimental programme: 40 hours SL / 60 hours HL', { size: 21, weight: 700, anchor: 'middle' });
  const parts = [['Practical work', 'hands-on'], ['Collaborative', 'sciences project', 'shared with other', 'group 4 subjects'], ['Scientific', 'investigation', 'internally assessed']];
  parts.forEach((p, i) => {
    const x = 30 + i * 288;
    b += box(x, 200, 264, 130, { rx: 14 }) + t(x + 132, 236, p[0], { size: 19, weight: 700, anchor: 'middle' });
    if (p.length === 2) b += t(x + 132, 262, p[1], { size: 16, fill: C.muted, anchor: 'middle' });
    else b += t(x + 132, 260, p[1], { size: 19, weight: 700, anchor: 'middle' }) + tl(x + 132, 288, p.slice(2), { size: 16, fill: C.muted, anchor: 'middle' }, 21);
    b += arrow(x + 132, 334, x + 132, 368, { w: 3 });
  });
  b += box(30, 374, 840, 150, { fill: C.tealLight, edge: C.tealDark, rx: 14 }) + t(450, 408, 'Practical skills it builds', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark });
  // skills as three chips laid out
  const sk = [['designing a fair test', 220], ['identifying and reducing sources of uncertainty', 360], ['interpreting unfamiliar data', 220]];
  let sx = 450 - (sk.reduce((a, [, w]) => a + w, 0) + 20) / 2;
  sk.forEach(([s, w]) => { const lines = wrap(s, w - 20, 16, 600); b += box(sx, 428, w - 10, 70, { fill: '#fff', edge: C.tealDark, rx: 10, sw: 2 }) + tl(sx + (w - 10) / 2, 468 - (lines.length - 1) * 10, lines, { size: 16, weight: 600, anchor: 'middle' }, 20); sx += w; });
  b += arrow(300, 528, 230, 566, { w: 3.5, color: C.olive, marker: 'ahO' }) + arrow(600, 528, 670, 566, { w: 3.5, color: C.olive, marker: 'ahO' });
  b += box(40, 572, 380, 92, { fill: C.cream, edge: C.olive, rx: 14 }) + t(230, 608, 'Written papers', { size: 20, weight: 700, anchor: 'middle' }) + t(230, 636, 'including the data-based paper', { size: 16, fill: C.muted, anchor: 'middle' });
  b += box(480, 572, 380, 92, { fill: C.cream, edge: C.olive, rx: 14 }) + t(670, 608, 'Internal assessment', { size: 20, weight: 700, anchor: 'middle' }) + t(670, 636, 'the scientific investigation', { size: 16, fill: C.muted, anchor: 'middle' });
  b += footNote(700, 'A parallel strand through the whole course, not an add-on to the five themes.', { weight: 600, fill: C.ink });
  add('03-experimental-programme',
    svg(900, 730, 'The experimental programme', b),
    'The 40-hour SL or 60-hour HL experimental programme is made up of practical work, a collaborative sciences project shared with other group 4 subjects and an internally assessed scientific investigation. It builds three skills, designing a fair test, reducing uncertainty and interpreting unfamiliar data, which are examined in the written papers and the internal assessment.',
    'The practical skills are examined twice: in the papers and in the investigation.',
    '## The experimental programme');
}

// 04 Command-term ladder
{
  const steps = [
    ['state / define', 'a precise recalled fact'],
    ['describe', 'an accurate account of a pattern or process, without explanation'],
    ['explain', 'a reasoned account of why it happens, often backed by a named law or principle'],
    ['evaluate / discuss', 'weigh the strength of a model, method or conclusion, including its limitations'],
  ];
  let b = '';
  const x0 = 40, sw = 205, base = 530, sh = 92;
  steps.forEach(([term, def], i) => {
    const x = x0 + i * sw, top = base - (i + 1) * sh;
    const fill = [C.tealLight, C.teal, C.cream, C.mustard][i];
    b += `<rect x="${x}" y="${top}" width="${sw}" height="${base - top}" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += t(x + sw / 2, top + 32, term, { size: 19, weight: 700, anchor: 'middle' });
    const lines = wrap(def, sw - 26, 15);
    b += tl(x + sw / 2, top + 58, lines, { size: 15, anchor: 'middle', fill: C.ink }, 19);
  });
  b += arrow(x0, base + 30, x0 + 4 * sw, base + 30, { w: 3.5 }) + t(x0 + 2 * sw, base + 58, 'rising demand of the question', { size: 17, weight: 600, anchor: 'middle', fill: C.muted });
  // pitfall
  b += box(40, base + 80, 820, 108, { fill: '#fbeee6', edge: C.rust, rx: 14 });
  b += t(64, base + 114, 'Common error with “explain”', { size: 19, weight: 700, fill: C.rust });
  b += tl(64, base + 142, ['Stating and applying a formula is not enough: full marks typically also need', 'the physical reasoning the formula represents, not just the calculation.'], { size: 17 }, 23);
  add('04-command-term-ladder',
    svg(900, base + 210, 'Command terms: a rising ladder', b),
    'Four steps of rising demand: state or define asks for a precise recalled fact; describe for an account of a pattern or process without explanation; explain for a reasoned account of why, often backed by a named law; evaluate or discuss for weighing a model, method or conclusion, including limitations. A warning notes that explain needs the physical reasoning behind a formula, not just the calculation.',
    'Each command term asks for more than the one below it.',
    '## Command terms across the five themes');
}
