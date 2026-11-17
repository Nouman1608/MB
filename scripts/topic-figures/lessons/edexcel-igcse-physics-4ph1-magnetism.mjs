import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-magnetism';
export const figures = [];

// ---- local helpers (kept in this file; shared style lives in ../style.mjs) ----
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });
const ln = (x1, y1, x2, y2, { c = C.ink, w = 3, dash = '', cap = 'round' } = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="${cap}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const rect = (x, y, w, h, { fill = 'none', stroke = C.ink, sw = 3, rx = 0, extra = '' } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${extra}/>`;
const circ = (cx, cy, r, { fill = C.panel, stroke = C.ink, sw = 3 } = {}) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
// word-wrap to roughly n characters per line
const wrap = (s, n) => { const out = ['']; for (const w of s.split(' ')) { const cur = out[out.length - 1]; if (cur && (cur + ' ' + w).length > n) out.push(w); else out[out.length - 1] = cur ? cur + ' ' + w : w; } return out; };
// text block that wraps to a pixel width
const para = (x, y, s, width, opts = {}, lh) => { const size = opts.size || 18; const lines = Array.isArray(s) ? s : wrap(s, Math.floor(width / (size * 0.54))); return tl(x, y, lines, opts, lh || size * 1.32); };
const nLines = (s, width, size = 18) => (Array.isArray(s) ? s.length : wrap(s, Math.floor(width / (size * 0.54))).length);
// card: panel with a bold title and wrapped body
const card = (x, y, w, h, title, body, { fill = C.panel, edge = C.panelEdge, size = 17, tsize = 21, tfill = C.ink, bfill = C.muted, pad = 22 } = {}) =>
  panel(x, y, w, h, fill, edge) + (title ? t(x + pad, y + pad + tsize * 0.8, title, { size: tsize, weight: 700, fill: tfill }) : '') +
  (body ? para(x + pad, y + pad + (title ? tsize * 0.8 + size * 1.55 : size), body, w - 2 * pad, { size, fill: bfill }) : '');
// axes with arrowheads; origin at (x0, y0) bottom-left; labels with units
const axes = (x0, y0, w, h, xlab, ylab, { size = 17 } = {}) =>
  arrow(x0, y0, x0 + w, y0, { w: 3 }) + arrow(x0, y0, x0, y0 - h, { w: 3 }) +
  t(x0 + w, y0 + 34, xlab, { size, anchor: 'end', weight: 600 }) +
  `<text x="${x0 - 22}" y="${y0 - h / 2}" font-size="${size}" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${x0 - 22} ${y0 - h / 2})">${ylab}</text>`;
// ---- circuit symbols (centred at x, y; horizontal unless v = true). bg masks the wire under a gap. ----
const rot = (x, y, v, s) => (v ? `<g transform="rotate(90 ${x} ${y})">${s}</g>` : s);
const sCell = (x, y, { v = false, bg = C.panel } = {}) => rot(x, y, v,
  rect(x - 8, y - 26, 16, 52, { fill: bg, stroke: 'none', sw: 0 }) + ln(x - 7, y - 24, x - 7, y + 24, { w: 3, cap: 'butt' }) + ln(x + 7, y - 12, x + 7, y + 12, { w: 7, cap: 'butt' }));
const sBattery = (x, y, { v = false, bg = C.panel } = {}) => rot(x, y, v,
  rect(x - 26, y - 26, 52, 52, { fill: bg, stroke: 'none', sw: 0 }) + ln(x - 21, y - 24, x - 21, y + 24, { w: 3, cap: 'butt' }) + ln(x - 7, y - 12, x - 7, y + 12, { w: 7, cap: 'butt' }) +
  ln(x + 7, y - 24, x + 7, y + 24, { w: 3, cap: 'butt' }) + ln(x + 21, y - 12, x + 21, y + 12, { w: 7, cap: 'butt' }));
const sRes = (x, y, { v = false, fill = C.panel } = {}) => rot(x, y, v, rect(x - 30, y - 12, 60, 24, { fill, sw: 3 }));
const sLamp = (x, y, { v = false, bg = C.panel } = {}) => rot(x, y, v, circ(x, y, 18, { fill: bg }) + ln(x - 12.7, y - 12.7, x + 12.7, y + 12.7) + ln(x - 12.7, y + 12.7, x + 12.7, y - 12.7));
const sMeter = (x, y, letter, { bg = C.panel } = {}) => circ(x, y, 19, { fill: bg }) + t(x, y + 7, letter, { size: 20, weight: 700, anchor: 'middle' });
const sSwitch = (x, y, { v = false, bg = C.panel, closed = false } = {}) => rot(x, y, v,
  rect(x - 24, y - 8, 48, 16, { fill: bg, stroke: 'none', sw: 0 }) + circ(x - 20, y, 4, { fill: C.ink, sw: 0 }) + circ(x + 20, y, 4, { fill: C.ink, sw: 0 }) +
  (closed ? ln(x - 20, y, x + 20, y) : ln(x - 20, y, x + 18, y - 20)));
const wire = (pts, { c = C.ink, w = 3 } = {}) => `<polyline points="${pts.map((p) => p.join(',')).join(' ')}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linejoin="round"/>`;
const dot = (x, y, r = 5, fill = C.ink) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`;
// worked-example box: lines of [text, opts]
const steps = (x, y, w, rows, { fill = C.cream, edge = C.olive, lh = 34, size = 19, pad = 24 } = {}) =>
  panel(x, y, w, rows.length * lh + pad * 1.4, fill, edge) + rows.map((r, i) => {
    const [s, o = {}] = Array.isArray(r) ? r : [r];
    return t(x + pad + (o.dx || 0), y + pad + size * 0.9 + i * lh, s, { size, ...o });
  }).join('');
// ---- end helpers ----
// bullet list: lines starting with a non-breaking space are continuation lines, indented
const blist = (x, y, lines, opts = {}, lh = 24) => lines.map((s, i) => (s.startsWith(' ') ? t(x + 14, y + i * lh, s.trim(), opts) : t(x, y + i * lh, s, opts))).join('');

// field-line tracer: charges [{x,y,q}], start point; follows +field until it hits a sink or leaves the box
const trace = (charges, x, y, box, stopR = 8, step = 2, max = 3000) => {
  const pts = [[x, y]];
  for (let k = 0; k < max; k++) {
    let ex = 0, ey = 0;
    for (const c of charges) { const dx = x - c.x, dy = y - c.y, r2 = dx * dx + dy * dy, r = Math.sqrt(r2); ex += (c.q * dx) / (r2 * r); ey += (c.q * dy) / (r2 * r); }
    const m = Math.hypot(ex, ey); if (!m) break;
    x += (step * ex) / m; y += (step * ey) / m; pts.push([x, y]);
    if (x < box[0] || x > box[2] || y < box[1] || y > box[3]) break;
    if (charges.some((c) => c.q < 0 && Math.hypot(x - c.x, y - c.y) < stopR)) break;
  }
  return pts;
};
const poly = (pts, col = C.tealDark, w = 2.5) => `<polyline points="${pts.map((p) => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ')}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linejoin="round"/>`;
const midArrow = (pts, f = 0.5, col = C.tealDark) => { const i = Math.max(1, Math.min(pts.length - 2, Math.floor(pts.length * f))); const [a, b] = [pts[i - 1], pts[i + 1]]; const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1; const ux = (b[0] - a[0]) / L, uy = (b[1] - a[1]) / L; const [x, y] = pts[i]; return arrow(x - ux * 8, y - uy * 8, x + ux * 6, y + uy * 6, { w: 0.1, color: col, marker: 'ahT' }); };
const barMag = (x, y, w, h, nLeft = true) => rect(x, y, w / 2, h, { fill: nLeft ? C.rust : C.tealDark, sw: 2.5 }) + rect(x + w / 2, y, w / 2, h, { fill: nLeft ? C.tealDark : C.rust, sw: 2.5 }) +
  t(x + w / 4, y + h / 2 + 8, nLeft ? 'N' : 'S', { size: 22, weight: 700, anchor: 'middle', fill: '#ffffff' }) + t(x + (3 * w) / 4, y + h / 2 + 8, nLeft ? 'S' : 'N', { size: 22, weight: 700, anchor: 'middle', fill: '#ffffff' });

// 01 Field of a bar magnet with the drawing rules
{
  const cx = 330, cy = 360, half = 110, mh = 50;
  const ch = [{ x: cx - half + 22, y: cy, q: 1 }, { x: cx + half - 22, y: cy, q: -1 }];
  const box = [-3000, -3000, 4000, 4000];
  let lines = '';
  [80, 105, 130, 150, 210, 230, 255, 280].forEach((ang) => {
    const a = (ang * Math.PI) / 180;
    const pts = trace(ch, ch[0].x + 6 * Math.cos(a), ch[0].y + 6 * Math.sin(a), box, 5, 2, 8000);
    const vis = pts.filter((p) => p[0] > 20 && p[0] < 640 && p[1] > 100 && p[1] < 620);
    const k1 = pts.findIndex((p) => Math.hypot(p[0] - ch[0].x, p[1] - ch[0].y) > 95); const ends = Math.hypot(pts[pts.length - 1][0] - ch[1].x, pts[pts.length - 1][1] - ch[1].y) < 10; const k2 = ends ? pts.length - 1 - pts.slice().reverse().findIndex((p) => Math.hypot(p[0] - ch[1].x, p[1] - ch[1].y) > 95) : -1;
    lines += poly(pts) + (k1 > 0 ? midArrow(pts, k1 / pts.length) : '') + (k2 > 0 && Math.abs(k2 - k1) > 40 ? midArrow(pts, k2 / pts.length) : '');
  });
  const needle = (x, y) => { let ex = 0, ey = 0; for (const c of ch) { const dx = x - c.x, dy = y - c.y, r = Math.hypot(dx, dy); ex += (c.q * dx) / r ** 3; ey += (c.q * dy) / r ** 3; } const m = Math.hypot(ex, ey), ux = ex / m, uy = ey / m; return circ(x, y, 17, { fill: '#ffffff', stroke: C.ink, sw: 2 }) + ln(x - ux * 12, y - uy * 12, x, y, { c: C.ink, w: 4 }) + ln(x, y, x + ux * 12, y + uy * 12, { c: C.rust, w: 4 }); };
  const body = panel(30, 110, 600, 500) + `<g clip-path="url(#clipA)">${lines}</g>` + `<clipPath id="clipA"><rect x="32" y="112" width="596" height="496" rx="12"/></clipPath>` +
    rect(cx - half, cy - mh / 2, 2 * half, mh, { fill: '#ffffff', stroke: 'none', sw: 0 }) + barMag(cx - half, cy - mh / 2, 2 * half, mh) +
    needle(cx, cy - 120) + needle(cx - 200, cy + 110) +
    rect(45, 568, 570, 32, { fill: '#ffffff', stroke: 'none', sw: 0 }) + t(330, 590, 'Plotting compass: its red N end points along the field line.', { size: 15, anchor: 'middle', fill: C.rust, weight: 600 }) +
    card(650, 110, 220, 500, 'Drawing rules', '', { tfill: C.tealDark }) +
    blist(670, 180, ['• Arrows from N', '  to S outside', '  the magnet', '• Lines never cross', '• Closer lines =', '  stronger field', '  (crowded at', '  the poles)', '• Smooth curves', '  that meet the', '  ends of the', '  magnet'].map((s) => s.replace(/^  /, '   ')), { size: 17 }, 30);
  add('01-bar-magnet-field-lines', svg(900, 635, 'Field lines round a bar magnet', body),
    'Curved field lines leave the N pole and enter the S pole of a bar magnet, crowded together at the poles and spreading out further away. Two plotting compasses line up with the field, their N ends pointing along the arrows. A list gives the rules for drawing field lines.',
    'Field lines run from N to S, never cross, and crowd together where the field is strong.',
    '## Magnetic field lines');
}

// 02 Producing a uniform field
{
  const L = 250, R = 650, yN = 200, yS = 420;
  const ch = []; for (let x = L; x <= R; x += 8) { ch.push({ x, y: yN + 22, q: 1 }); ch.push({ x, y: yS - 22, q: -1 }); }
  let lines = '';
  for (let x = L - 40; x <= R + 40; x += 40) { const pts = trace(ch, Math.min(Math.max(x, L - 10), R + 10), yN + 24, [40, 120, 860, 520], 6, 2, 1500); lines += poly(pts) + midArrow(pts, 0.5); }
  const body = panel(30, 110, 840, 420) + `<clipPath id="clipB"><rect x="32" y="112" width="836" height="416" rx="12"/></clipPath><g clip-path="url(#clipB)">${lines}</g>` +
    rect(L - 10, yN - 30, R - L + 20, 50, { fill: C.rust, sw: 2.5 }) + t(450, yN + 3, 'N', { size: 22, weight: 700, anchor: 'middle', fill: '#ffffff' }) +
    rect(L - 10, yS - 20, R - L + 20, 50, { fill: C.tealDark, sw: 2.5 }) + t(450, yS + 13, 'S', { size: 22, weight: 700, anchor: 'middle', fill: '#ffffff' }) +
    rect(330, yN + 40, 240, yS - yN - 80, { fill: 'none', stroke: C.olive, sw: 2.5, rx: 6, extra: 'stroke-dasharray="8 6"' }) +
    t(450, 150, 'dashed box: uniform field in the central region', { size: 16, weight: 700, fill: C.olive, anchor: 'middle' }) +
    t(55, 505, 'lines bulge at the edges', { size: 16, weight: 700, fill: C.rust }) +
    card(30, 545, 410, 150, 'Set-up', 'Two flat magnets with large pole faces, parallel, with opposite poles facing across a small gap.', { size: 16 }) +
    card(460, 545, 410, 150, 'Bigger uniform region', 'A smaller gap and wider pole faces. Shown by straight, parallel, equally spaced lines.', { size: 16 });
  add('02-uniform-field-two-magnets', svg(900, 720, 'Producing a uniform magnetic field', body),
    'Two flat magnets placed parallel with a north face above a south face. In the central part of the gap the field lines are straight, parallel and equally spaced, pointing from N to S; near the edges they bulge outwards.',
    'Opposite flat poles facing across a small gap give a uniform field in the middle.',
    '## Producing a uniform field (6.7)');
}

// 03 Is it a magnet? materials and the repulsion test
{
  const chipRow = (y, items, ok) => items.map((s, i) => rect(55 + i * 135, y, 125, 40, { fill: ok ? C.tealLight : '#f6e3d6', stroke: ok ? C.tealDark : C.rust, sw: 2, rx: 8 }) + t(117 + i * 135, y + 26, s, { size: 16, weight: 600, anchor: 'middle' })).join('');
  const bar = (x, y, lab) => rect(x, y, 150, 40, { fill: '#c9d0d0', sw: 2.5 }) + t(x + 75, y + 27, lab, { size: 15, anchor: 'middle', weight: 600 });
  const test = (y, title, a, b, verdict, col) => panel(30, y, 840, 120) + t(55, y + 34, title, { size: 17, weight: 700 }) +
    barMag(60, y + 55, 150, 40) + bar(330, y + 55, 'test bar') + t(245, y + 82, a, { size: 22, weight: 700, anchor: 'middle', fill: col }) +
    t(510, y + 72, b, { size: 16 }) + t(510, y + 96, verdict, { size: 16, weight: 700, fill: col });
  const body = panel(30, 110, 840, 200) + t(55, 146, 'Magnetic: attracted by a magnet (common magnetic metals)', { size: 17, weight: 700, fill: C.tealDark }) + chipRow(160, ['iron', 'steel', 'nickel', 'cobalt'], true) +
    t(55, 236, 'Non-magnetic: a magnet has no effect', { size: 17, weight: 700, fill: C.rust }) + chipRow(250, ['copper', 'aluminium', 'brass', 'wood', 'plastic', 'glass'], false) +
    test(325, 'Bring each end of the test bar up to each pole of a known magnet', '← →', 'Repelled by either pole:', 'it IS a magnet (like poles repel)', C.rust) +
    test(460, 'Example: a steel bar is attracted to both ends of a bar magnet', '→ ←', 'Attraction only: the magnet induces an', 'unlike pole in the near end. Not a magnet.', C.tealDark) +
    panel(30, 595, 840, 60, C.cream, C.olive) + t(450, 632, 'Attraction cannot prove an object is a magnet. Only repulsion can.', { size: 17, weight: 700, anchor: 'middle' });
  add('03-repulsion-test', svg(900, 675, 'Is it a magnet? Only repulsion proves it', body),
    'Iron, steel, nickel and cobalt are magnetic; copper, aluminium, brass, wood, plastic and glass are not. A test bar repelled by either pole of a known magnet is a magnet. A steel bar attracted to both ends is not, because the magnet induces an unlike pole in its nearer end.',
    'A magnet attracts unmagnetised iron too, so only repulsion proves a magnet.',
    '## Forces between magnets and magnetic substances');
}
