import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-mathematics-applications-and-interpretation-syllabus-guide';
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

// Shared layout for the two DP mathematics syllabus guides
function strandHours(rows, subtitle) {
  let b = legendSLHL(200, 128);
  const r = pairedBars(rows, { y: 152, max: 55 });
  b += r.body;
  const y = r.bottom + 34;
  const s = stackBars([
    { label: 'SL', segs: [{ v: 120, fill: SL, text: 'content strands 120 h' }, { v: 30, fill: C.sand, text: '30 h' }] },
    { label: 'HL', segs: [{ v: 210, fill: HL, text: 'content strands 210 h' }, { v: 30, fill: C.sand, text: '30 h' }] },
  ], { y: y + 58, max: 240, x0: 50, labelW: 60, bw: 740, h: 46, gap: 18 });
  const ph = s.bottom + 52 - y;
  b += box(26, y, 848, ph, { rx: 14 }) + t(46, y + 36, 'Teaching time', { size: 21, weight: 700 }) + t(200, y + 36, 'content strands + toolkit and exploration', { size: 17, fill: C.muted });
  b += s.body;
  b += swatches([{ fill: C.sand, label: 'toolkit and mathematical exploration: 30 hours at both levels' }], 50, s.bottom + 34, { size: 15 }).body;
  return { body: b, h: y + ph + 24 };
}
function assessment(papers) {
  let b = '';
  const w = 200, gap = 13.33;
  papers.forEach((p, i) => {
    const x = 30 + i * (w + gap);
    b += box(x, 112, w, 188, { fill: p.hlOnly ? '#fbf6e2' : C.panel, edge: p.hlOnly ? C.olive : C.panelEdge, rx: 14, dash: p.hlOnly ? '7 5' : '' });
    b += t(x + w / 2, 146, p.name, { size: 21, weight: 700, anchor: 'middle' });
    if (p.hlOnly) b += hlTag(x + w / 2 - hlTagW() / 2, 156);
    const tf = p.tech === 'no' ? '#fbeee6' : p.tech === 'yes' ? C.tealLight : C.bg;
    const te = p.tech === 'no' ? C.rust : p.tech === 'yes' ? C.tealDark : C.panelEdge;
    b += box(x + 14, 188, w - 28, 34, { fill: tf, edge: te, rx: 17, sw: 2 }) + t(x + w / 2, 210, p.techText, { size: 15, weight: 700, anchor: 'middle', fill: p.tech === 'no' ? C.rust : p.tech === 'yes' ? C.tealDark : C.muted });
    b += tl(x + w / 2, 246, p.lines.flatMap((l) => wrap(l, w - 24, 15)), { size: 15, anchor: 'middle', fill: C.muted }, 19);
  });
  const fills = [C.cream, C.sand, C.mustard, C.tealLight];
  const seg = (k) => papers.map((p, i) => ({ v: p[k], fill: fills[i], text: p[k] ? `${p.short} ${p[k]}%` : '' }));
  const y = 320;
  const s = stackBars([{ label: 'SL', segs: seg('sl') }, { label: 'HL', segs: seg('hl') }], { y: y + 54, max: 100, x0: 50, labelW: 60, bw: 740, h: 50, gap: 18 });
  b += box(26, y, 848, s.bottom - y + 26, { rx: 14 }) + t(46, y + 34, 'Share of the final grade', { size: 20, weight: 700 }) + s.body;
  return { body: b, h: s.bottom + 56 };
}
function toolkit(tip) {
  let b = t(46, 140, 'The 30 hours at both SL and HL', { size: 20, weight: 700 });
  const sc = 800 / 30;
  b += `<rect x="50" y="158" width="${15 * sc}" height="64" fill="${C.teal}" stroke="${C.ink}" stroke-width="2"/>`;
  b += `<defs><pattern id="hatch" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="12" height="12" fill="${C.mustard}"/><line x1="0" y1="0" x2="0" y2="12" stroke="${C.cream}" stroke-width="5"/></pattern></defs>`;
  b += `<rect x="${50 + 15 * sc}" y="158" width="${15 * sc}" height="64" fill="url(#hatch)" stroke="${C.ink}" stroke-width="2"/>`;
  b += t(50 + 7.5 * sc, 197, 'toolkit', { size: 18, weight: 700, anchor: 'middle' });
  b += box(50 + 22.5 * sc - 90, 174, 180, 32, { fill: '#fff', edge: C.olive, rx: 8, sw: 2 }) + t(50 + 22.5 * sc, 196, 'up to 15 h', { size: 17, weight: 700, anchor: 'middle' });
  b += box(30, 246, 410, 166, { fill: C.tealLight, edge: C.tealDark, rx: 14 }) + t(50, 280, 'Toolkit', { size: 20, weight: 700 });
  b += tl(50, 308, ['time within the taught hours for', 'inquiry, modelling and technology', 'skills that transfer across strands,', 'not tied to one strand'], { size: 16 }, 22);
  b += box(460, 246, 410, 166, { fill: C.cream, edge: C.olive, rx: 14 }) + t(480, 280, 'Exploration', { size: 20, weight: 700 }) + t(850, 280, '20% SL · 20% HL', { size: 15, weight: 700, anchor: 'end', fill: C.olive });
  b += tl(480, 308, ['internally assessed investigation,', 'compulsory at both levels, into an', 'area of mathematics you choose'], { size: 16 }, 22);
  b += tl(480, 382, wrap(tip, 370, 15, 600), { size: 15, weight: 600, fill: C.olive }, 19);
  b += t(450, 446, 'Six assessment objectives apply across every strand', { size: 19, weight: 700, anchor: 'middle' });
  const ob = [['knowledge and understanding', 'problem solving', 'communication and interpretation'], ['technology', 'reasoning', 'inquiry approaches']];
  ob.forEach((row, r) => { row.forEach((o, k) => { b += chip([30, 300, 560][k], 464 + r * 50, [255, 245, 310][k], 40, o, { fill: C.panel, edge: C.tealDark, size: 16 }); }); });
  return { body: b, h: 590 };
}

// 01 Strand hours
{
  const f = strandHours([
    { label: 'Number and algebra', sl: 16, hl: 29, note: 'smallest strand at SL', noteColor: C.muted },
    { label: 'Functions', sl: 31, hl: 42, note: '2nd largest at SL, 3rd at HL', noteColor: C.olive },
    { label: 'Geometry and trigonometry', sl: 18, hl: 46, note: '2nd largest at HL', noteColor: C.olive },
    { label: 'Statistics and probability', sl: 36, hl: 52, note: 'largest at SL and HL', noteColor: C.olive },
    { label: 'Calculus', sl: 19, hl: 41 },
  ]);
  add('01-strand-hours',
    svg(900, f.h, 'Applications and Interpretation: hours by strand', f.body, 'Recommended hours, first assessment 2021'),
    'Paired SL and HL bars: number and algebra 16 and 29, functions 31 and 42, geometry and trigonometry 18 and 46, statistics and probability 36 and 52, calculus 19 and 41. The strands total 120 hours at SL and 210 at HL, plus 30 hours of toolkit and exploration at both levels.',
    'Statistics leads at both levels; at HL geometry and trigonometry overtakes functions.',
    '## Calculus (19 hours SL / 41 hours HL)');
}

// 02 Assessment
{
  const a = assessment([
    { name: 'Paper 1', short: 'P1', sl: 40, hl: 30, tech: 'yes', techText: 'technology allowed', lines: ['compulsory', 'short-response questions'] },
    { name: 'Paper 2', short: 'P2', sl: 40, hl: 30, tech: 'yes', techText: 'technology allowed', lines: ['compulsory', 'extended-response questions'] },
    { name: 'Paper 3', short: 'P3', sl: 0, hl: 20, hlOnly: true, tech: 'yes', techText: 'technology allowed', lines: ['two extended', 'problem-solving questions'] },
    { name: 'Exploration', short: 'IA', sl: 20, hl: 20, tech: 'na', techText: 'internal assessment', lines: ['your own', 'mathematical investigation'] },
  ]);
  add('02-assessment',
    svg(900, a.h, 'Four components and their weightings', a.body),
    'Paper 1, short-response questions, is worth 40% at SL and 30% at HL; Paper 2, extended-response questions, 40% and 30%; Paper 3, HL only, 20%; and the exploration, the internal assessment, 20% at both levels. Technology is allowed throughout every paper.',
    'Every paper allows technology, so practise with your own calculator all course.',
    '## Assessment structure');
}

// 03 Toolkit and exploration
{
  const k = toolkit('A real dataset or context is a natural choice, but not a requirement.');
  add('03-toolkit-and-exploration',
    svg(900, k.h, 'Toolkit, exploration and shared objectives', k.body),
    'The 30 hours at both levels are shared between the toolkit and the exploration, which takes up to 15 hours. The toolkit builds inquiry, modelling and technology skills; the exploration is a compulsory internally assessed investigation worth 20%. Six assessment objectives apply across all strands.',
    'Up to half of the 30 hours goes on the exploration itself.',
    '## Toolkit and exploration (30 hours, both SL and HL)');
}
