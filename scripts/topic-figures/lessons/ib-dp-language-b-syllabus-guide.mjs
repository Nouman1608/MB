import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-language-b-syllabus-guide';
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

// 01 Five prescribed themes
{
  const g = themeChips([
    { title: 'Identities', sub: 'the nature of the self and what it is to be human', items: [{ t: 'lifestyles' }, { t: 'health and well-being' }, { t: 'beliefs and values' }, { t: 'subcultures' }, { t: 'language and identity' }] },
    { title: 'Experiences', sub: 'events, experiences and journeys that shape our lives', items: [{ t: 'leisure activities' }, { t: 'holidays and travel' }, { t: 'life stories' }, { t: 'rites of passage' }, { t: 'customs and traditions' }, { t: 'migration' }] },
    { title: 'Human ingenuity', sub: 'how human creativity and innovation affect our world', items: [{ t: 'entertainment' }, { t: 'artistic expressions' }, { t: 'communication and media' }, { t: 'technology' }, { t: 'scientific innovation' }] },
    { title: 'Social organization', sub: 'how groups of people organize themselves, or are organized', items: [{ t: 'social relationships' }, { t: 'community' }, { t: 'social engagement' }, { t: 'education' }, { t: 'the working world' }, { t: 'law and order' }] },
    { title: 'Sharing the planet', sub: 'challenges and opportunities in the modern world', items: [{ t: 'the environment' }, { t: 'human rights' }, { t: 'peace and conflict' }, { t: 'equality' }, { t: 'globalization' }, { t: 'ethics' }, { t: 'urban and rural environments' }] },
  ], { y: 112, cols: 1, size: 15, titleSize: 20, chipH: 32 });
  let b = g.body + footNote(g.bottom + 34, 'All five are compulsory and appear in unseen Paper 2 texts.', { weight: 600, fill: C.ink });
  add('01-five-themes',
    svg(900, g.bottom + 62, 'Five themes and their recommended topics', b),
    'Five theme panels with their guiding principles and recommended topics: identities, experiences, human ingenuity, social organization and sharing the planet, each with topics such as lifestyles, migration, technology, education and the environment.',
    'Build vocabulary across all five themes, not just the ones you discussed most.',
    '## Sharing the planet');
}

// 02 What differs between SL and HL
{
  let b = '';
  const cols = [[40, 300, 'Feature'], [350, 250, 'SL'], [610, 250, 'HL']];
  b += box(30, 112, 840, 50, { fill: C.ink, edge: C.ink, rx: 10 });
  cols.forEach(([x, , h], i) => { b += t(x + (i ? 125 : 0), 144, h, { size: 19, weight: 700, fill: '#fff', anchor: i ? 'middle' : 'start' }); });
  const rows = [
    ['Paper 1 duration', '1 h 15 min', '1 h 30 min'],
    ['Paper 1 word range', '250 to 400 words', '450 to 600 words'],
    ['Paper 2 listening', '45 min', '1 h'],
    ['Paper 2 reading', '1 h', '1 h'],
    ['Literary works', 'none required', 'two, in the target language'],
    ['Oral stimulus', 'a visual image', 'excerpt from a literary work'],
    ['Oral preparation', '15 min', '20 min'],
  ];
  rows.forEach(([f, s, h], i) => {
    const y = 170 + i * 56, same = s === h;
    b += box(30, y, 840, 48, { fill: i % 2 ? C.panel : C.bg, edge: C.panelEdge, rx: 8, sw: 1.5 });
    b += t(48, y + 31, f, { size: 17, weight: 700 });
    b += box(355, y + 7, 240, 34, { fill: SL, edge: C.tealDark, rx: 7, sw: 1.5 }) + t(475, y + 30, s, { size: 16, weight: 600, anchor: 'middle' });
    b += box(615, y + 7, 240, 34, { fill: same ? SL : HL, edge: same ? C.tealDark : C.olive, rx: 7, sw: 1.5 }) + t(735, y + 30, h, { size: 16, weight: 600, anchor: 'middle' });
  });
  const y2 = 170 + rows.length * 56 + 14;
  b += box(30, y2, 840, 80, { fill: C.tealLight, edge: C.tealDark, rx: 14 });
  b += t(450, y2 + 34, 'The same at both levels: the five themes and the assessment weightings', { size: 18, weight: 700, anchor: 'middle' });
  b += t(450, y2 + 60, 'HL writing tasks also demand more complex language and higher-order thinking', { size: 16, anchor: 'middle', fill: C.muted });
  add('02-sl-hl-differences',
    svg(900, y2 + 106, 'What differs between SL and HL', b),
    'A table comparing SL and HL. Paper 1 lasts 1 hour 15 minutes for 250 to 400 words at SL, and 1 hour 30 minutes for 450 to 600 words at HL. Listening is 45 minutes at SL and 1 hour at HL; reading is 1 hour at both. HL studies two literary works, so its oral stimulus is a literary excerpt rather than a visual image, with 20 rather than 15 minutes of preparation.',
    'Same themes and weightings, different durations, word ranges and oral stimulus.',
    '## What distinguishes SL from HL');
}

// 03 Assessment at a glance
{
  let b = '';
  b += t(46, 140, 'Share of the final grade (SL and HL)', { size: 20, weight: 700 });
  const s = stackBars([{ label: '', segs: [{ v: 25, fill: C.mustard, text: 'Paper 1 writing 25%' }, { v: 25, fill: C.teal, text: 'listening 25%' }, { v: 25, fill: C.teal, text: 'reading 25%' }, { v: 25, fill: C.cream, text: 'oral 25%' }] }], { y: 158, max: 100, x0: 50, labelW: 0, bw: 800, h: 60 });
  b += s.body;
  b += path('M250,226 l0,10 l400,0 l0,-10', { stroke: C.tealDark, w: 2.5 }) + t(450, 260, 'Paper 2, receptive skills: 50%, as much as writing and the oral combined', { size: 16, weight: 600, anchor: 'middle', fill: C.tealDark });
  b += box(26, 290, 848, 204, { rx: 14 });
  b += t(46, 324, 'Paper 2 by raw marks', { size: 20, weight: 700 }) + t(282, 324, 'equal weighting, unequal marks', { size: 17, fill: C.muted });
  const r = stackBars([{ label: '', segs: [{ v: 25, fill: C.teal, text: 'listening: 25 raw marks' }, { v: 40, fill: C.tealDark, text: 'reading: 40 raw marks', color: '#fff' }] }], { y: 344, max: 65, x0: 50, labelW: 0, bw: 800, h: 60 });
  b += r.body;
  b += t(450, 440, 'Reading is nearly two-thirds of Paper 2’s raw marks.', { size: 18, weight: 700, anchor: 'middle' });
  b += t(450, 468, 'A plan built only on the even 25%/25% split under-prepares reading.', { size: 16, anchor: 'middle', fill: C.muted });
  add('03-assessment-weightings',
    svg(900, 520, 'Assessment at a glance', b),
    'A bar of four equal 25% shares: Paper 1 writing, Paper 2 listening, Paper 2 reading and the individual oral, the same at SL and HL. Paper 2 together is 50%. Below, Paper 2 by raw marks: listening 25 and reading 40, so reading is nearly two-thirds of the raw marks.',
    'Equal weightings hide unequal raw marks: reading needs more practice.',
    '## Assessment at a glance');
}

// 04 Paper 1 text types and criteria
{
  let b = t(450, 128, 'One writing task, chosen from three options', { size: 18, weight: 600, anchor: 'middle', fill: C.muted });
  const cats = [['Personal texts', ['blog post', 'diary entry', 'email or letter', 'to a friend']], ['Professional texts', ['formal letter', 'report', 'essay']], ['Mass media texts', ['article', 'interview', 'speech']]];
  cats.forEach(([n, ex], i) => {
    const x = 30 + i * 287, w = 266;
    b += box(x, 148, w, 196, { rx: 14 }) + t(x + w / 2, 184, n, { size: 20, weight: 700, anchor: 'middle' }) + t(x + w / 2, 208, 'for example', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
    b += tl(x + w / 2, 240, ex, { size: 17, anchor: 'middle' }, 24);
  });
  b += t(450, 372, 'Examples are neither prescriptive nor exhaustive: each session’s instructions set the text types.', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  b += t(450, 414, 'Marked against three criteria', { size: 20, weight: 700, anchor: 'middle' });
  const crit = [['Language', C.tealLight, C.tealDark], ['Message', C.tealLight, C.tealDark], ['Conceptual understanding', C.mustard, C.olive]];
  crit.forEach(([c, f, e], i) => { b += chip([40, 300, 560][i], 434, [240, 240, 300][i], 50, c, { fill: f, edge: e, size: 18, weight: 700 }); });
  b += box(30, 506, 840, 70, { fill: '#fbeee6', edge: C.rust, rx: 14 });
  b += t(450, 536, 'Conceptual understanding penalises ignoring the expected text type,', { size: 17, weight: 600, anchor: 'middle', fill: C.rust });
  b += t(450, 560, 'register or audience, even when the language is accurate.', { size: 17, weight: 600, anchor: 'middle', fill: C.rust });
  add('04-paper-1-text-types',
    svg(900, 604, 'Paper 1: text types and criteria', b),
    'Three categories of text type with examples: personal (blog post, diary entry, email or letter to a friend), professional (formal letter, report, essay) and mass media (article, interview, speech). Paper 1 is marked on language, message and conceptual understanding, and the last penalises ignoring text type, register or audience.',
    'Format and register count alongside accurate language.',
    '## How to approach it');
}
