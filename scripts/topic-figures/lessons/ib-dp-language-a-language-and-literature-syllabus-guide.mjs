import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-language-a-language-and-literature-syllabus-guide';
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

// Shared layout for the two DP Language A syllabus guides
const LIT = C.mustard, NONLIT = C.teal;
function areasFigure(material) {
  let b = box(30, 112, 840, 136, { fill: C.cream, edge: C.olive, rx: 14 });
  b += t(450, 142, 'Seven central concepts, across all three areas (not directly assessed)', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  const cs = [['identity', 'culture', 'creativity', 'communication'], ['perspective', 'transformation', 'representation']];
  cs.forEach((row, r) => {
    const ws = row.map((c) => tw(c, 16, 600) + 28);
    let x = 450 - (ws.reduce((a, v) => a + v, 0) + 10 * (row.length - 1)) / 2;
    row.forEach((c, k) => { b += chip(x, 158 + r * 42, ws[k], 34, c, { fill: '#fff', edge: C.olive, size: 16 }); x += ws[k] + 10; });
  });
  const areas = ['Readers, writers and texts', 'Time and space', 'Intertextuality: connecting texts'];
  areas.forEach((a, i) => {
    const ax = 30 + i * 287, w = 266;
    b += box(ax, 268, w, 230, { rx: 14 });
    b += tl(ax + w / 2, 306, wrap(a, w - 30, 19, 700), { size: 19, weight: 700, anchor: 'middle' }, 24);
    b += box(ax + 20, 370, w - 40, 30, { fill: SL, edge: C.tealDark, rx: 6, sw: 2 }) + t(ax + w / 2, 391, '50 hours SL', { size: 16, weight: 700, anchor: 'middle' });
    b += box(ax + 20, 408, w - 40, 30, { fill: HL, edge: C.olive, rx: 6, sw: 2 }) + t(ax + w / 2, 429, '80 hours HL', { size: 16, weight: 700, anchor: 'middle' });
    b += material(ax + 20, 450, w - 40);
  });
  b += box(30, 518, 840, 84, { fill: C.tealLight, edge: C.tealDark, rx: 14 });
  b += t(450, 550, 'Learner portfolio: mandatory, built over two years, used to prepare every component', { size: 17, weight: 700, anchor: 'middle' });
  b += t(450, 578, 'not assessed or moderated, but a school may have to submit it to show authenticity', { size: 16, anchor: 'middle', fill: C.muted });
  b += footNote(636, 'Hours are a recommendation: the areas often overlap in the study of a text.');
  return b;
}
function worksFigure(sl, hl, note) {
  // sl/hl: [orig, transl, free]
  const fills = [C.teal, C.mustard, C.cream];
  let b = '';
  const row = (y, label, counts) => {
    let s = t(40, y + 40, label, { size: 22, weight: 700 });
    const tot = counts.reduce((a, v) => a + v, 0);
    s += t(40, y + 64, `${tot} works`, { size: 16, fill: C.muted });
    let x = 150;
    counts.forEach((n, k) => { for (let j = 0; j < n; j++) { s += `<rect x="${x}" y="${y + 8}" width="44" height="64" rx="5" fill="${fills[k]}" stroke="${C.ink}" stroke-width="2"/>` + `<line x1="${x + 8}" y1="${y + 8}" x2="${x + 8}" y2="${y + 72}" stroke="${C.ink}" stroke-width="1.5"/>`; x += 52; } x += 16; });
    return s;
  };
  b += row(124, 'SL', sl) + row(224, 'HL', hl);
  b += swatches([{ fill: fills[0], label: 'originally written in the language studied (minimum)' }, { fill: fills[1], label: 'studied in translation (minimum)' }, { fill: fills[2], label: 'freely chosen' }], 50, 344, { size: 16 }).body;
  let y = 410;
  if (note) { b += box(30, y - 24 + 14, 840, 24 + wrap(note, 790, 17).length * 23 + 12, { fill: C.panel, rx: 14 }) + tl(54, y + 18, wrap(note, 790, 17), { size: 17 }, 23); y += 24 + wrap(note, 790, 17).length * 23 + 12; }
  return { body: b, h: y + 10 };
}
function assessFigure(cards, legend) {
  let b = '';
  const matH = (c) => c.mats.reduce((a, [, label]) => a + 24 + wrap(label, 346, 16, 600).length * 20, 0);
  const rowH = [0, 1].map((r) => Math.max(...cards.slice(r * 2, r * 2 + 2).map((c) => 82 + matH(c) + (c.note ? 16 + wrap(c.note, 370, 15).length * 19 : 0) + 6)));
  cards.forEach((c, i) => {
    const r = Math.floor(i / 2), x = 30 + (i % 2) * 430, y = 112 + (r ? rowH[0] + 18 : 0), w = 410, h = rowH[r];
    b += box(x, y, w, h, { fill: c.hl ? '#fbf6e2' : C.panel, edge: c.hl ? C.olive : C.panelEdge, rx: 14, dash: c.hl ? '7 5' : '' });
    b += t(x + 20, y + 36, c.title, { size: 21, weight: 700 }) + (c.hl ? hlTag(x + w - hlTagW() - 14, y + 18) : '');
    b += t(x + 20, y + 62, c.kind, { size: 16, weight: 600, fill: C.muted });
    let cy = y + 82;
    c.mats.forEach(([fill, label]) => { const lines = wrap(label, w - 64, 16, 600); b += box(x + 20, cy, w - 40, 14 + lines.length * 20, { fill, edge: C.ink, sw: 1.5, rx: 8 }) + tl(x + 34, cy + 22, lines, { size: 16, weight: 600 }, 20); cy += 24 + lines.length * 20; });
    if (c.note) b += tl(x + 20, cy + 14, wrap(c.note, w - 40, 15), { size: 15, fill: C.muted, italic: true }, 19);
  });
  const lg = swatches(legend, 50, 112 + rowH[0] + 18 + rowH[1] + 34, { size: 16 });
  return { body: b + lg.body, h: lg.bottom + 28 };
}
// 01 Areas of exploration
add('01-areas-of-exploration',
  svg(900, 664, 'Three areas of exploration', areasFigure((x, y, w) => box(x, y, w / 2 - 4, 30, { fill: LIT, edge: C.olive, rx: 6, sw: 1.5 }) + t(x + w / 4 - 2, y + 20, 'literary', { size: 15, weight: 600, anchor: 'middle' }) + box(x + w / 2 + 4, y, w / 2 - 4, 30, { fill: NONLIT, edge: C.tealDark, rx: 6, sw: 1.5 }) + t(x + (3 * w) / 4 + 2, y + 20, 'non-literary', { size: 15, weight: 600, anchor: 'middle' }))),
  'Three areas of exploration, readers, writers and texts; time and space; and intertextuality: connecting texts, each 50 hours at SL and 80 at HL and each drawing on literary and non-literary texts. Seven central concepts run across all three, and the learner portfolio underpins them.',
  'Every area mixes literary works with non-literary texts.',
  '## Central concepts and the learner portfolio');

// 02 Works studied
{
  const w = worksFigure([1, 1, 2], [2, 2, 2], 'Each area must also include non-literary texts equivalent in teaching time to the literary works studied in it, so the works count understates the reading.');
  add('02-works-studied',
    svg(900, w.h, 'Minimum literary works', w.body),
    'SL students study at least 4 literary works: at least 1 originally written in the language studied, at least 1 in translation and 2 freely chosen. HL students study at least 6: 2, 2 and 2. Non-literary texts of equivalent teaching time are added in each area.',
    'SL: at least 4 works; HL: at least 6, plus equal time on non-literary texts.',
    '## Works studied');
}

// 03 What each assessment is set on
{
  const a = assessFigure([
    { title: 'Paper 1', kind: 'guided textual analysis', mats: [[NONLIT, 'unseen non-literary passages']] },
    { title: 'Paper 2', kind: 'comparative essay', mats: [[LIT, 'literary works only']] },
    { title: 'Individual oral', kind: 'connected to a common global issue', mats: [[LIT, 'one literary work'], [NONLIT, 'one non-literary body of work']] },
    { title: 'HL essay', kind: '1,200 to 1,500 words', hl: true, mats: [[LIT, 'a literary work'], [C.panel, 'or'], [NONLIT, 'a non-literary body of work']] },
  ], [{ fill: LIT, label: 'literary material' }, { fill: NONLIT, label: 'non-literary material' }]);
  const b = a.body + footNote(a.h + 4, 'Keep literary and non-literary revision as two separate tracks.', { weight: 600, fill: C.ink });
  add('03-assessment-materials',
    svg(900, a.h + 30, 'What each assessment is set on', b),
    'Paper 1, guided textual analysis, uses unseen non-literary passages. Paper 2, the comparative essay, is set on literary works only. The individual oral connects one literary work and one non-literary body of work to a global issue. The HL essay of 1,200 to 1,500 words can be on a literary work or a non-literary body of work.',
    'Paper 1 is non-literary, Paper 2 is literary: revise them as separate tracks.',
    '## How to approach it');
}
