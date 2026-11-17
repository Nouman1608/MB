import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

// ---- local helpers (physics) ----
const W = (x1, y1, x2, y2, c = C.ink, w = 3) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
const poly = (pts, c = C.ink, w = 3, fill = 'none') => `<polyline points="${pts.map((p) => p.join(',')).join(' ')}" fill="${fill}" stroke="${c}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"/>`;
const rect = (x, y, w, h, fill = C.panel, edge = C.ink, sw = 3, rx = 0) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const circ = (cx, cy, r, fill = C.panel, edge = C.ink, sw = 3) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const dot = (x, y, r = 5, c = C.ink) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
const rot = (x, y, deg, s) => (deg ? `<g transform="rotate(${deg} ${x} ${y})">${s}</g>` : s);
// wrap text to lines of max n chars
const wrap = (s, n) => { const L = []; let cur = ''; for (const w of s.split(' ')) { if ((cur + ' ' + w).trim().length > n) { L.push(cur); cur = w; } else cur = (cur + ' ' + w).trim(); } if (cur) L.push(cur); return L; };
// boxed note: cream or teal
const note = (x, y, w, h, lines, { fill = C.cream, edge = C.olive, size = 18, weight = 600, color = C.ink, lh = 25, anchor = 'middle' } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` +
  tl(anchor === 'middle' ? x + w / 2 : x + 18, y + h / 2 - ((lines.length - 1) * lh) / 2 + size * 0.35, lines, { size, weight, fill: color, anchor }, lh);
// calculation box: title + lines (monospace-free, Inter)
const calc = (x, y, w, title, lines, { lh = 30, size = 19, fill = C.tealLight, edge = C.tealDark } = {}) => {
  const h = 58 + lines.length * lh;
  return { h, s: `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` + t(x + 20, y + 36, title, { size: 20, weight: 700, fill: C.tealDark }) +
    lines.map((l, i) => { const s0 = typeof l === 'string' ? l : l[0]; const ind = s0.length - s0.trimStart().length; return typeof l === 'string' ? t(x + 20 + ind * 10, y + 70 + i * lh, s0.trim(), { size }) : t(x + 20 + ind * 10, y + 70 + i * lh, s0.trim(), { size, weight: l[1] || 700, fill: l[2] || C.ink }); }).join('') };
};

// ---- circuit symbols: centred at (x,y), horizontal span 2*hw, rotate 90 for vertical ----
// each returns svg incl. its own short leads to x-hw..x+hw. Default hw = 35.
const cs = {
  cell: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 5, y) + W(x + 7, y, x + hw, y) + W(x - 5, y - 24, x - 5, y + 24, C.ink, 3) + W(x + 7, y - 12, x + 7, y + 12, C.ink, 7)),
  battery: (x, y, deg = 0, hw = 50) => rot(x, y, deg, W(x - hw, y, x - 22, y) + W(x + 24, y, x + hw, y) + W(x - 22, y - 24, x - 22, y + 24) + W(x - 10, y - 12, x - 10, y + 12, C.ink, 7) + W(x + 12, y - 24, x + 12, y + 24) + W(x + 24, y - 12, x + 24, y + 12, C.ink, 7) + W(x - 10, y, x + 12, y, C.ink, 2.5).replace('/>', ' stroke-dasharray="3 4"/>')),
  resistor: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 26, y) + W(x + 26, y, x + hw, y) + rect(x - 26, y - 11, 52, 22)),
  varres: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 26, y) + W(x + 26, y, x + hw, y) + rect(x - 26, y - 11, 52, 22) + arrow(x - 26, y + 24, x + 26, y - 26, { w: 2.5 })),
  thermistor: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 26, y) + W(x + 26, y, x + hw, y) + rect(x - 26, y - 11, 52, 22) + poly([[x - 38, y + 22], [x - 24, y + 22], [x + 26, y - 24]], C.ink, 2.5)),
  ldr: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 26, y) + W(x + 26, y, x + hw, y) + rect(x - 26, y - 11, 52, 22) + arrow(x - 30, y - 46, x - 10, y - 18, { w: 2.5 }) + arrow(x - 6, y - 46, x + 14, y - 18, { w: 2.5 })),
  fuse: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 26, y) + W(x + 26, y, x + hw, y) + rect(x - 26, y - 10, 52, 20) + W(x - 26, y, x + 26, y, C.ink, 2.5)),
  heater: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 30, y) + W(x + 30, y, x + hw, y) + rect(x - 30, y - 11, 60, 22) + [-15, 0, 15].map((d) => W(x + d, y - 11, x + d, y + 11, C.ink, 2.5)).join('')),
  lamp: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 18, y) + W(x + 18, y, x + hw, y)) + circ(x, y, 18) + W(x - 12.7, y - 12.7, x + 12.7, y + 12.7, C.ink, 2.5) + W(x - 12.7, y + 12.7, x + 12.7, y - 12.7, C.ink, 2.5),
  meter: (x, y, letter, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 19, y) + W(x + 19, y, x + hw, y)) + circ(x, y, 19) + t(x, y + 7, letter, { size: 20, weight: 700, anchor: 'middle' }),
  ammeter: (x, y, deg = 0, hw = 35) => cs.meter(x, y, 'A', deg, hw),
  voltmeter: (x, y, deg = 0, hw = 35) => cs.meter(x, y, 'V', deg, hw),
  motor: (x, y, deg = 0, hw = 35) => cs.meter(x, y, 'M', deg, hw),
  gen: (x, y, deg = 0, hw = 35) => cs.meter(x, y, 'G', deg, hw),
  ac: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 19, y) + W(x + 19, y, x + hw, y)) + circ(x, y, 19) + path(`M${x - 10},${y} q5,-10 10,0 q5,10 10,0`, { w: 2.5 }),
  switchOpen: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 20, y) + W(x + 20, y, x + hw, y) + circ(x - 20, y, 4, C.panel, C.ink, 2.5) + circ(x + 20, y, 4, C.panel, C.ink, 2.5) + W(x - 17, y - 3, x + 18, y - 22)),
  switchClosed: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x - 20, y) + W(x + 20, y, x + hw, y) + circ(x - 20, y, 4, C.panel, C.ink, 2.5) + circ(x + 20, y, 4, C.panel, C.ink, 2.5) + W(x - 17, y - 2, x + 17, y - 2)),
  diode: (x, y, deg = 0, hw = 35) => rot(x, y, deg, W(x - hw, y, x + hw, y) + `<path d="M${x - 13},${y - 15} L${x + 13},${y} L${x - 13},${y + 15} Z" fill="${C.panel}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` + W(x + 13, y - 15, x + 13, y + 15)),
  led: (x, y, deg = 0, hw = 35) => rot(x, y, deg, cs.diode(x, y, 0, hw) + arrow(x + 2, y - 20, x + 18, y - 40, { w: 2.5 }) + arrow(x + 14, y - 16, x + 30, y - 36, { w: 2.5 })),
  earth: (x, y) => W(x, y, x, y + 16) + W(x - 18, y + 16, x + 18, y + 16) + W(x - 11, y + 24, x + 11, y + 24) + W(x - 5, y + 32, x + 5, y + 32),
};
// wire path through points (orthogonal)
const wire = (pts, c = C.ink, w = 3) => poly(pts, c, w);
// junction dot
const jn = (x, y) => dot(x, y, 6);

// ---- graph axes ----
// returns {s, X(v), Y(v)}; origin at (x0, y0) bottom-left; width w, height h; xmax, ymax; ticks arrays
const axes = (x0, y0, w, h, { xmax, ymax, xmin = 0, ymin = 0, xt = [], yt = [], xl = '', yl = '', grid = true, size = 16, xfmt = (v) => v, yfmt = (v) => v } = {}) => {
  const X = (v) => x0 + ((v - xmin) / (xmax - xmin)) * w, Y = (v) => y0 - ((v - ymin) / (ymax - ymin)) * h;
  let s = '';
  if (grid) { s += xt.map((v) => W(X(v), y0, X(v), y0 - h, '#dde5e3', 1.5)).join('') + yt.map((v) => W(x0, Y(v), x0 + w, Y(v), '#dde5e3', 1.5)).join(''); }
  const yz = ymin < 0 ? Y(0) : y0;
  s += arrow(x0, y0 + (ymin < 0 ? 0 : 0), x0, y0 - h - 22, { w: 2.5 }) + arrow(x0, yz, x0 + w + 22, yz, { w: 2.5 });
  s += xt.map((v) => W(X(v), yz, X(v), yz + 7, C.ink, 2) + t(X(v), yz + 27, xfmt(v), { size, anchor: 'middle', fill: C.muted })).join('');
  s += yt.map((v) => W(x0 - 7, Y(v), x0, Y(v), C.ink, 2) + t(x0 - 12, Y(v) + 6, yfmt(v), { size, anchor: 'end', fill: C.muted })).join('');
  if (xl) s += t(x0 + w / 2, yz + 58, xl, { size: 18, anchor: 'middle', weight: 600 });
  if (yl) s += `<text x="${x0 - 62}" y="${y0 - h / 2}" font-size="18" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${x0 - 62} ${y0 - h / 2})">${yl}</text>`;
  return { s, X, Y };
};
// sine wave path from x1 to x2 about y0, amplitude a, wavelength lam, phase
const sine = (x1, x2, y0, a, lam, ph = 0, step = 3) => { let d = ''; for (let x = x1; x <= x2 + 0.01; x += step) d += (d ? 'L' : 'M') + x.toFixed(1) + ',' + (y0 - a * Math.sin(((x - x1) / lam) * 2 * Math.PI + ph)).toFixed(1); return d; };
// double-headed dimension arrow with label
const dim = (x1, y1, x2, y2, label, { color = C.ink, lx, ly, size = 17, anchor = 'middle', weight = 700 } = {}) => {
  const mk = color === C.tealDark ? 'ahT' : color === C.rust ? 'ahR' : color === C.olive ? 'ahO' : 'ah';
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="2.5" marker-start="url(#${mk})" marker-end="url(#${mk})"/>` + (label ? t(lx ?? (x1 + x2) / 2, ly ?? (y1 + y2) / 2 - 8, label, { size, anchor, weight, fill: color }) : '');
};
// header strip inside a panel
const head = (x, y, w, s, fill = C.teal) => `<rect x="${x}" y="${y}" width="${w}" height="44" rx="12" fill="${fill}"/><rect x="${x}" y="${y + 30}" width="${w}" height="14" fill="${fill}"/>` + t(x + w / 2, y + 30, s, { size: 20, weight: 700, anchor: 'middle' });

// place a symbol on an existing wire: masks the wire under its span first (bg = panel colour)
const put = (sym, x, y, deg = 0, hw = 35, bg = C.panel) => (deg % 180 ? W(x, y - hw + 2, x, y + hw - 2, bg, 9) : W(x - hw + 2, y, x + hw - 2, y, bg, 9)).replace('stroke-linecap="round"', 'stroke-linecap="butt"') + cs[sym](x, y, deg, hw);
// current-direction arrowhead on a wire
const cur = (x, y, dir = 'r', c = C.rust, s = 9) => { const d = { r: [[s, 0], [-s, -s * 0.8], [-s, s * 0.8]], l: [[-s, 0], [s, -s * 0.8], [s, s * 0.8]], u: [[0, -s], [-s * 0.8, s], [s * 0.8, s]], d: [[0, s], [-s * 0.8, -s], [s * 0.8, -s]] }[dir]; return `<path d="M${x + d[0][0]},${y + d[0][1]} L${x + d[1][0]},${y + d[1][1]} L${x + d[2][0]},${y + d[2][1]} Z" fill="${c}"/>`; };
const ext = (x, y, s = 'Extended only') => `<rect x="${x}" y="${y}" width="${s.length * 9.6 + 24}" height="30" rx="15" fill="${C.olive}"/>` + t(x + 12, y + 21, s, { size: 16, weight: 700, fill: '#ffffff' });
const rays = (x, y, r1 = 26, r2 = 40, c = C.mustard) => [0, 45, 90, 135, 180, 225, 270, 315].map((a) => { const q = (a * Math.PI) / 180; return W(x + r1 * Math.cos(q), y + r1 * Math.sin(q), x + r2 * Math.cos(q), y + r2 * Math.sin(q), c, 4); }).join('');

export const slug = 'cambridge-igcse-physics-0625-simple-phenomena-of-magnetism-cambridge-igcse-physics';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const barH = (x, y, w, h, kind) => kind === 'magnet'
  ? rect(x, y, w / 2, h, C.rust, C.ink, 2.5) + rect(x + w / 2, y, w / 2, h, C.tealDark, C.ink, 2.5) + t(x + w / 4, y + h / 2 + 7, 'N', { size: 19, weight: 700, anchor: 'middle', fill: '#ffffff' }) + t(x + 3 * w / 4, y + h / 2 + 7, 'S', { size: 19, weight: 700, anchor: 'middle', fill: '#ffffff' })
  : rect(x, y, w, h, kind === 'iron' ? '#aab2bb' : '#d9b27a', C.ink, 2.5) + t(x + w / 2, y + h / 2 + 6, kind, { size: 16, weight: 700, anchor: 'middle' });
const barV = (x, y, w, h, kind) => kind === 'magnet'
  ? rect(x, y, w, h / 2, C.tealDark, C.ink, 2.5) + rect(x, y + h / 2, w, h / 2, C.rust, C.ink, 2.5) + t(x + w / 2, y + h / 4 + 7, 'S', { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' }) + t(x + w / 2, y + 3 * h / 4 + 7, 'N', { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' })
  : rect(x, y, w, h, '#aab2bb', C.ink, 2.5) + t(x + w / 2, y + h / 2 + 6, 'iron', { size: 15, weight: 700, anchor: 'middle' }).replace('<text', `<text transform="rotate(-90 ${x + w / 2} ${y + h / 2})"`);
const card = (x, y, w, h, title, fill = C.panel) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${fill}" stroke="${C.panelEdge}" stroke-width="2.5"/>` + (title ? t(x + 20, y + 34, title, { size: 19, weight: 700 }) : '');

// 01 Identifying a magnet
{
  let s = card(30, 110, 410, 190, 'Magnet and magnet', C.tealLight) + barH(60, 170, 150, 36, 'magnet') + barH(260, 170, 150, 36, 'magnet') +
    t(235, 245, 'unlike poles attract,', { size: 16, anchor: 'middle' }) + t(235, 270, 'like poles REPEL', { size: 16, anchor: 'middle', weight: 700, fill: C.rust });
  s += card(460, 110, 410, 190, 'Magnet and unmagnetised iron', C.cream) + barH(490, 170, 150, 36, 'magnet') + barH(690, 170, 150, 36, 'iron') +
    t(665, 245, 'attracted at EITHER pole,', { size: 16, anchor: 'middle' }) + t(665, 270, 'never repelled', { size: 16, anchor: 'middle', weight: 700 });
  s += card(30, 315, 840, 90, '', '#ffffff') + t(450, 352, 'Attraction happens in both cases, so it is not proof.', { size: 18, weight: 700, anchor: 'middle' }) + t(450, 384, 'Only repulsion proves that both objects are magnets.', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  s += card(30, 420, 840, 260, 'End of X to the middle of Y (brass already ruled out: attracted by neither)');
  s += barV(205, 470, 36, 110, 'magnet') + barH(110, 580, 226, 30, 'iron') + t(223, 640, 'strong attraction:', { size: 16, anchor: 'middle', weight: 700, fill: C.tealDark }) + t(223, 662, 'X is the magnet', { size: 16, anchor: 'middle', weight: 700, fill: C.tealDark });
  s += t(170, 500, 'X', { size: 20, weight: 700, anchor: 'end' }) + t(100, 600, 'Y', { size: 20, weight: 700, anchor: 'end' });
  s += barV(645, 470, 36, 110, 'iron') + barH(540, 582, 246, 30, 'magnet') + t(663, 640, 'little or no attraction:', { size: 16, anchor: 'middle', weight: 700, fill: C.rust }) + t(663, 662, 'Y is the magnet (weak middle)', { size: 16, anchor: 'middle', weight: 700, fill: C.rust });
  s += t(610, 500, 'X', { size: 20, weight: 700, anchor: 'end' }) + t(530, 602, 'Y', { size: 20, weight: 700, anchor: 'end' });
  add('01-identifying-a-magnet',
    svg(900, 710, 'Attraction is not proof of a magnet', s),
    'Two magnets attract with unlike poles and repel with like poles; a magnet attracts unmagnetised iron at either pole and never repels it, so only repulsion proves both are magnets. Touching the end of bar X to the middle of bar Y: strong attraction means X is the magnet; little or none means Y is the magnet, because a magnet\'s middle has almost no magnetic effect.',
    'Only repulsion proves both are magnets; the end-to-middle test separates magnet from iron.',
    '## Poles and forces');
}

// 02 Soft iron vs steel chains
{
  const nail = (x, y, fill) => rect(x - 6, y, 12, 48, fill, C.ink, 2, 3);
  const side = (x, title, fill, kept, l1, l2) => {
    let s = card(x, 110, 410, 470, title, fill === '#aab2bb' ? C.tealLight : C.cream);
    s += t(x + 110, 175, 'magnet in place', { size: 15, anchor: 'middle', fill: C.muted }) + t(x + 300, 175, 'magnet removed', { size: 15, anchor: 'middle', fill: C.muted });
    s += rect(x + 70, 190, 80, 34, C.rust, C.ink, 2.5) + t(x + 110, 214, 'N', { size: 18, weight: 700, anchor: 'middle', fill: '#ffffff' });
    for (let i = 0; i < 4; i++) s += nail(x + 110, 226 + i * 50, fill);
    if (kept) { for (let i = 0; i < 3; i++) s += nail(x + 300, 226 + i * 50, fill);  }
    else { s += [[260, 470], [300, 480], [330, 465], [285, 455]].map(([dx, yy], i) => `<rect x="${x + dx - 24}" y="${yy}" width="48" height="12" rx="3" fill="${fill}" stroke="${C.ink}" stroke-width="2" transform="rotate(${i * 9 - 10} ${x + dx} ${yy + 6})"/>`).join(''); s += W(x + 230, 485, x + 380, 485, C.ink, 3); }
    return s + t(x + 205, 530, l1, { size: 17, weight: 700, anchor: 'middle' }) + t(x + 205, 556, l2, { size: 16, anchor: 'middle', fill: C.muted });
  };
  add('02-soft-iron-vs-steel',
    svg(900, 610, 'Temporary and permanent magnets',
      side(30, 'Soft-iron nails: temporary', '#aab2bb', false, 'magnetised easily; chain falls apart', 'use: electromagnet, relay, transformer core') +
      side(460, 'Steel pins: permanent', '#d9dee3', true, 'harder to magnetise; stay magnetised', 'use: compass needle, loudspeaker, motor')),
    'Left: a chain of soft-iron nails hangs from a magnet and falls apart as soon as the magnet is removed, because soft iron is a temporary magnet. Right: a chain of steel pins stays partly stuck together after the magnet is removed, because steel keeps its magnetism.',
    'Soft iron when the magnetism must switch off; steel when it must stay.',
    '## Temporary and permanent magnets');
}

// 03 Plotting compass vs iron filings
{
  const mag = (x, y) => barH(x, y, 180, 40, 'magnet');
  let a = mag(130, 300);
  const comp = (x, y, ang) => circ(x, y, 15, '#ffffff', C.ink, 2) + `<g transform="rotate(${ang} ${x} ${y})"><path d="M${x + 12},${y} L${x},${y - 4} L${x},${y + 4} Z" fill="${C.rust}"/><path d="M${x - 12},${y} L${x},${y - 4} L${x},${y + 4} Z" fill="${C.ink}"/></g>`;
  [[108, 282, -140], [150, 238, -55], [220, 222, 0], [290, 238, 55], [332, 282, 140]].forEach(([x, y, a0]) => { a += comp(x, y, a0); });
  a += path('M130,300 C140,215 300,215 310,300', { stroke: C.tealDark, w: 2, extra: 'stroke-dasharray="5 5"' });
  a += t(220, 400, 'needle\'s N end shows the', { size: 16, anchor: 'middle' }) + t(220, 422, 'direction: mark, move on, join', { size: 16, anchor: 'middle' });
  let b = mag(560, 300);
  let seed = 5; const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  for (let i = 0; i < 140; i++) { const x = 480 + rnd() * 340, y = 180 + rnd() * 250; if (x > 550 && x < 750 && y > 290 && y < 350) continue; const cx = 650, dxN = x - 560, dxS = x - 740, dy = y - 320; const bx = dxN / Math.pow(dxN * dxN + dy * dy, 1.5) - dxS / Math.pow(dxS * dxS + dy * dy, 1.5), by = dy / Math.pow(dxN * dxN + dy * dy, 1.5) - dy / Math.pow(dxS * dxS + dy * dy, 1.5); const L = Math.hypot(bx, by); b += W(x - 6 * bx / L, y - 6 * by / L, x + 6 * bx / L, y + 6 * by / L, C.ink, 2); }
  b += t(650, 460, 'whole pattern quickly, but', { size: 16, anchor: 'middle' }) + t(650, 484, 'no direction', { size: 16, anchor: 'middle', weight: 700, fill: C.rust });
  add('03-compass-vs-filings',
    svg(900, 600, 'Plotting a magnetic field',
      card(30, 110, 410, 460, 'Plotting compass') + a + card(460, 110, 410, 460, 'Iron filings') + b +
      t(235, 470, 'field direction = direction of', { size: 16, anchor: 'middle', weight: 700, fill: C.tealDark }) + t(235, 494, 'the force on an N pole', { size: 16, anchor: 'middle', weight: 700, fill: C.tealDark })),
    'Left: small plotting compasses around a bar magnet point along the field, their N ends showing its direction from the N pole round to the S pole; marking and joining the positions draws a field line. Right: iron filings show the whole pattern at once but give no direction.',
    'Compasses show direction; filings show only the shape of the pattern.',
    '## Magnetic fields');
}
