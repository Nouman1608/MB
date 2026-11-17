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

export const slug = 'cambridge-igcse-physics-0625-light-cambridge-igcse-physics';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const D = Math.PI / 180;
const ray = (x1, y1, x2, y2, c = C.rust, w = 3.5, dash = '') => arrow(x1, y1, x2, y2, { w, color: c, marker: c === C.rust ? 'ahR' : c === C.tealDark ? 'ahT' : c === C.olive ? 'ahO' : 'ah', dash }) ;
const seg = (x1, y1, x2, y2, c = C.rust, w = 3.5, dash = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const normal = (x1, y1, x2, y2) => seg(x1, y1, x2, y2, C.muted, 2, '7 5');
// angle arc centred at (cx,cy) between screen angles a1 -> a2 (radians), with label
const ang = (cx, cy, r, a1, a2, lbl, lx, ly, col = C.ink) => { const p = (a) => `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`; return `<path d="M${p(a1)} A${r},${r} 0 0 ${a2 > a1 ? 1 : 0} ${p(a2)}" fill="none" stroke="${col}" stroke-width="2"/>` + t(lx, ly, lbl, { size: 17, weight: 700, anchor: 'middle', fill: col }); };
const hatch = (x1, y, x2, below = true) => { let s = W(x1, y, x2, y, C.ink, 5); for (let x = x1 + 6; x < x2; x += 16) s += W(x, y + (below ? 3 : -3), x - 10, y + (below ? 15 : -15), C.ink, 1.5); return s; };
const hatchV = (x, y1, y2) => { let s = W(x, y1, x, y2, C.ink, 5); for (let y = y1 + 6; y < y2; y += 16) s += W(x + 3, y, x + 15, y - 10, C.ink, 1.5); return s; };

// 01 Plane mirror
{
  const P = [230, 390], L = 175, i = 65 * D;
  let a = hatch(60, P[1], 400) + normal(P[0], P[1], P[0], 190) + t(P[0], 180, 'normal', { size: 15, anchor: 'middle', fill: C.muted });
  const s1 = [P[0] - L * Math.sin(i), P[1] - L * Math.cos(i)], e1 = [P[0] + L * Math.sin(i), P[1] - L * Math.cos(i)];
  a += ray(s1[0], s1[1], (s1[0] + P[0]) / 2, (s1[1] + P[1]) / 2) + seg((s1[0] + P[0]) / 2, (s1[1] + P[1]) / 2, P[0], P[1]) + ray(P[0], P[1], e1[0], e1[1]);
  a += ang(P[0], P[1], 62, -Math.PI / 2 - i, -Math.PI / 2, '65°', P[0] - 30, P[1] - 72) + ang(P[0], P[1], 62, -Math.PI / 2, -Math.PI / 2 + i, '65°', P[0] + 32, P[1] - 72);
  a += ang(P[0], P[1], 105, Math.PI, Math.PI + 25 * D, '25°', P[0] - 125, P[1] - 14, C.olive);
  a += t(230, 440, 'i = r = 90° − 25° = 65°', { size: 18, weight: 700, anchor: 'middle' }) + t(230, 466, 'angle between the rays = 130°', { size: 17, anchor: 'middle', fill: C.muted });
  // image construction
  const mx = 680, O = [590, 320], I = [770, 320], E = [530, 210];
  const my = O[1] + (E[1] - O[1]) * ((mx - I[0]) / (E[0] - I[0])) * 0 + I[1] + (E[1] - I[1]) * ((mx - I[0]) / (E[0] - I[0])) - I[1];
  let b = hatchV(mx, 175, 410) + dot(O[0], O[1], 7, C.rust) + t(O[0] - 12, O[1] + 6, 'O', { size: 19, weight: 700, anchor: 'end', fill: C.rust }) + circ(I[0], I[1], 7, '#ffffff', C.rust, 2.5) + t(I[0] + 14, I[1] + 6, 'I', { size: 19, weight: 700, fill: C.rust });
  b += seg(O[0], O[1], I[0], I[1], C.muted, 1.5, '5 5') + dim(O[0], O[1] + 40, mx, O[1] + 40, '') + dim(mx, O[1] + 40, I[0], O[1] + 40, '') + t((O[0] + mx) / 2, O[1] + 66, 'd', { size: 17, weight: 700, anchor: 'middle' }) + t((I[0] + mx) / 2, O[1] + 66, 'd', { size: 17, weight: 700, anchor: 'middle' });
  b += seg(I[0], I[1], mx, my, C.rust, 2.5, '8 6') + ray(O[0], O[1], mx, my) + ray(mx, my, E[0] + 10, E[1] + 5) + `<path d="M${E[0] - 22},${E[1] - 2} q14,-14 28,0 q-14,14 -28,0 z" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + dot(E[0] - 8, E[1] - 2, 4) + t(E[0] - 8, E[1] - 18, 'eye', { size: 15, anchor: 'middle', fill: C.muted });
  b += t(680, 440, 'image: same size, same distance', { size: 16, anchor: 'middle', weight: 700 }) + t(680, 462, 'behind, virtual', { size: 16, anchor: 'middle', weight: 700 });
  add('01-plane-mirror',
    svg(900, 620, 'Reflection in a plane mirror',
      panel(30, 110, 410, 380) + t(235, 145, 'Law of reflection', { size: 20, weight: 700, anchor: 'middle' }) + a +
      panel(460, 110, 410, 380) + t(484, 145, 'Locating the image', { size: 20, weight: 700 }) + ext(700, 124) + b +
      note(30, 505, 840, 90, ['1.5 m from the mirror → 3.0 m from the image.', 'Walk 0.5 m closer: 1.0 m from the mirror, 2.0 m from the image.'], { size: 18, lh: 28, fill: C.cream })),
    'Left: a ray strikes a plane mirror at 25° to its surface, so the angle of incidence measured from the normal is 65° and the angle of reflection is also 65°. Right (Extended): the image I of a point O is on the perpendicular line, the same distance d behind the mirror; a dashed line from I to the eye fixes where the real ray reflects.',
    'Measure angles from the normal; the image is as far behind the mirror as the object is in front.',
    '## Reflection at a plane mirror');
}

// 02 Refraction through a block, worked example
{
  const bx = 90, bw = 300, top = 260, bot = 450, i = 50 * D, r = Math.asin(Math.sin(i) / 1.6), P = [170, top];
  const Q = [P[0] + (bot - top) * Math.tan(r), bot];
  let s = rect(bx, top, bw, bot - top, C.tealLight, C.ink, 3, 2) + t(bx + 12, bot - 14, 'plastic, n = 1.60', { size: 16, weight: 700, fill: C.tealDark });
  s += normal(P[0], top - 110, P[0], top + 120) + normal(Q[0], bot - 90, Q[0], bot + 100);
  const S = [P[0] - 135 * Math.sin(i), top - 135 * Math.cos(i)], E = [Q[0] + 135 * Math.sin(i), bot + 135 * Math.cos(i)];
  s += ray(S[0], S[1], (S[0] + P[0]) / 2, (S[1] + P[1]) / 2) + seg((S[0] + P[0]) / 2, (S[1] + P[1]) / 2, P[0], P[1]) + ray(P[0], P[1], (P[0] + Q[0]) / 2, (P[1] + Q[1]) / 2) + seg((P[0] + Q[0]) / 2, (P[1] + Q[1]) / 2, Q[0], Q[1]) + ray(Q[0], Q[1], E[0], E[1]);
  s += seg(P[0], P[1], P[0] + 200 * Math.sin(i), P[1] + 200 * Math.cos(i), C.muted, 1.5, '4 5');
  s += ang(P[0], P[1], 55, -Math.PI / 2 - i, -Math.PI / 2, '', 0, 0) + t(P[0] - 8, P[1] - 80, 'i = 50°', { size: 17, weight: 700, anchor: 'end' }) + ang(P[0], P[1], 50, Math.PI / 2 - r, Math.PI / 2, '', 0, 0) + t(P[0] + 40, P[1] + 40, 'r = 28.6°', { size: 17, weight: 700 });
  s += t(240, 560, 'towards the normal going in, away coming out;', { size: 16, anchor: 'middle', fill: C.muted }) + t(240, 582, 'the ray leaves parallel to the way it entered', { size: 16, anchor: 'middle', fill: C.muted });
  const k = calc(460, 130, 410, 'Worked example 1', ['sin r = sin 50° / 1.60', '= 0.766 / 1.60 = 0.479', ['r = 28.6°  (29°)', 700, C.rust], 'speed = 3.0 × 10⁸ / 1.60', ['= 1.9 × 10⁸ m/s', 700, C.rust], 'sin c = 1 / 1.60 = 0.625', ['c = 38.7°', 700, C.rust]], { lh: 32, size: 18 });
  add('02-refraction-block',
    svg(900, 640, 'Refraction through a block',
      ext(30, 72) + panel(30, 110, 420, 500) + s + k.s +
      note(460, 130 + k.h + 16, 410, 610 - 130 - k.h - 16, ['n = sin i / sin r', 'n = speed in air ÷ speed in material', 'n = 1 / sin c'], { size: 17, lh: 28, fill: C.cream })),
    'A ray in air meets a plastic block of refractive index 1.60 at 50° to the normal, bends towards the normal to 28.6° inside, and leaves parallel to its original direction, shifted sideways. Calculations give r = 28.6°, a speed of 1.9 × 10⁸ m/s in the plastic and a critical angle of 38.7°.',
    'Light bends towards the normal entering a slower material and away from it leaving.',
    '## Refraction and refractive index');
}

// 03 Critical angle and total internal reflection
{
  const n = 1.6, c = Math.asin(1 / n) / D;
  const half = (x, iDeg, title, sub) => {
    const cx = x + 135, cy = 300, R = 105, i = iDeg * D;
    let s = panel(x, 110, 270, 380) + t(x + 135, 145, title, { size: 18, weight: 700, anchor: 'middle' }) + t(x + 135, 470, sub, { size: 16, anchor: 'middle', fill: C.muted });
    s += `<path d="M${cx - R},${cy} A${R},${R} 0 0 0 ${cx + R},${cy} Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>` + normal(cx, cy - 110, cx, cy + 120);
    const S = [cx - (R + 30) * Math.sin(i), cy + (R + 30) * Math.cos(i)];
    s += ray(S[0], S[1], (S[0] + cx) / 2, (S[1] + cy) / 2) + seg((S[0] + cx) / 2, (S[1] + cy) / 2, cx, cy);
    s += ang(cx, cy, 42, Math.PI / 2 + i, Math.PI / 2, `${iDeg === Math.round(c * 10) / 10 ? 'c' : iDeg + '°'}`, cx - 24, cy + 66);
    const refl = [cx + R * Math.sin(i), cy + R * Math.cos(i)];
    if (iDeg < c - 0.1) { const r = Math.asin(n * Math.sin(i)); s += ray(cx, cy, cx + 115 * Math.sin(r), cy - 115 * Math.cos(r)) + ray(cx, cy, refl[0], refl[1], C.rust, 1.6) ; }
    else if (Math.abs(iDeg - c) < 0.2) { s += ray(cx, cy, cx + 125, cy) + ray(cx, cy, refl[0], refl[1], C.rust, 2.2); }
    else s += ray(cx, cy, refl[0], refl[1], C.rust, 3.5);
    return s;
  };
  const cR = Math.round(c * 10) / 10;
  let fib = `<path d="M90,580 L810,580 L810,640 L90,640 Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>`;
  let up = false; const pts = [[90, 610]]; for (let x = 150; x <= 810; x += 90) { pts.push([x, up ? 582 : 638]); up = !up; }
  fib += poly(pts, C.rust, 3) + t(450, 670, 'optical fibre: hits the wall above the critical angle, so it is totally internally reflected again and again', { size: 16, anchor: 'middle', fill: C.muted });
  add('03-critical-angle-tir',
    svg(900, 700, 'Critical angle and total internal reflection',
      half(30, 25, 'Below c', 'refracted out + weak reflection') + half(315, cR, `At c = ${cR}°`, 'refracted ray along the surface') + half(600, 55, 'Above c', 'total internal reflection') +
      ext(30, 515) + t(200, 537, 'plastic of n = 1.60 from worked example 1', { size: 16, fill: C.muted }) + fib),
    'Three semicircular plastic blocks with n = 1.60. A ray inside meeting the flat surface at 25° partly refracts out and partly reflects. At the critical angle, 38.7°, the refracted ray runs along the surface. At 55° there is no refracted ray: total internal reflection. Below, light zigzags along an optical fibre by repeated total internal reflection.',
    'Total internal reflection needs light inside the denser material and an angle above the critical angle.',
    '## Refraction and refractive index');
}

// 04 Converging lens worked example 2
{
  const sc = 26, lx = 450, ay = 340, X = (cm) => lx + cm * sc, Y = (cm) => ay - cm * sc;
  let g = '';
  for (let c = -16; c <= 15; c++) g += W(X(c), Y(4.5), X(c), Y(-3.5), '#e3e9e8', 1);
  for (let c = -3; c <= 4; c++) g += W(X(-16), Y(c), X(15), Y(c), '#e3e9e8', 1);
  g += W(X(-16), ay, X(15), ay, C.ink, 2);
  g += `<path d="M${lx},${Y(4.2)} Q${lx + 22},${ay} ${lx},${Y(-3.2)} Q${lx - 22},${ay} ${lx},${Y(4.2)} Z" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3"/>`;
  [[-5, 'F'], [5, 'F'], [-10, '2F'], [10, '2F']].forEach(([c, l]) => { g += dot(X(c), ay, 5) + t(X(c), ay + 26, l, { size: 16, weight: 700, anchor: 'middle' }); });
  g += arrow(X(-15), ay, X(-15), Y(2) + 4, { w: 4, color: C.tealDark, marker: 'ahT' }) + t(X(-15) - 8, Y(2) - 14, 'object 2.0 cm', { size: 16, weight: 700, fill: C.tealDark });
  g += ray(X(-15), Y(2), X(-6), Y(2)) + seg(X(-6), Y(2), lx, Y(2)) + ray(lx, Y(2), X(10), Y(2) + (10 * sc) * 0.4) + seg(X(10), Y(2) + 4 * sc, X(13), Y(2) + 0.4 * 13 * sc);
  g += ray(X(-15), Y(2), X(-5), Y(2) + (10 / 15) * 2 * sc) + seg(X(-5), Y(2) + (20 / 15) * sc, X(13), Y(2) + (28 / 15) * 2 * sc);
  g += arrow(X(7.5), ay, X(7.5), Y(-1) - 4, { w: 4, color: C.rust, marker: 'ahR' }) + t(X(7.5) + 8, ay - 38, 'image 1.0 cm tall,', { size: 16, weight: 700, fill: C.rust }) + t(X(7.5) + 8, ay - 16, '7.5 cm from the lens', { size: 16, weight: 700, fill: C.rust });
  g += t(X(-15) + 0, ay + 52, '← 15 cm from the lens', { size: 15, fill: C.muted });
  add('04-lens-real-image',
    svg(900, 600, 'Converging lens: object beyond 2F',
      panel(30, 110, 840, 360) + t(60, 140, '1 square = 1 cm;  f = 5.0 cm', { size: 16, fill: C.muted }) + g +
      note(30, 485, 840, 90, ['Parallel ray → through far F;  ray through centre → straight on.', 'Image: real, inverted, diminished (camera, eye).'], { size: 18, lh: 30, fill: C.cream })),
    'Scale ray diagram: a 2.0 cm object 15 cm from a converging lens of focal length 5.0 cm. A ray parallel to the axis refracts through the far principal focus and a ray through the centre goes straight on; they cross 7.5 cm beyond the lens, 1.0 cm below the axis, giving a real, inverted, diminished image.',
    'Two construction rays fix the image: here real, inverted and diminished.',
    '## Thin lenses');
}

// 05 Magnifying glass (Extended)
{
  const sc = 30, lx = 500, ay = 380, X = (cm) => lx + cm * sc, Y = (cm) => ay - cm * sc;
  let g = W(X(-14), ay, X(11), ay, C.ink, 2) + `<path d="M${lx},${Y(4.5)} Q${lx + 24},${ay} ${lx},${Y(-4.5)} Q${lx - 24},${ay} ${lx},${Y(4.5)} Z" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="3"/>`;
  [[-5, 'F'], [5, 'F']].forEach(([c, l]) => { g += dot(X(c), ay, 5) + t(X(c), ay + 26, l, { size: 16, weight: 700, anchor: 'middle' }); });
  g += arrow(X(-3), ay, X(-3), Y(1.2) + 4, { w: 4, color: C.tealDark, marker: 'ahT' }) + t(X(-3), ay + 26, 'object', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 700 });
  // parallel ray
  g += seg(X(-3), Y(1.2), lx, Y(1.2)) + ray(lx, Y(1.2), X(9), Y(1.2) + 0.24 * 9 * sc) + seg(lx, Y(1.2), X(-7.5), Y(3), C.rust, 2.5, '7 6');
  // centre ray
  g += seg(X(-3), Y(1.2), lx, ay) + ray(lx, ay, X(6), ay + 0.4 * 6 * sc) + seg(X(-3), Y(1.2), X(-7.5), Y(3), C.rust, 2.5, '7 6');
  g += arrow(X(-7.5), ay, X(-7.5), Y(3) + 4, { w: 4, color: C.olive, marker: 'ahO' }).replace('stroke-width="4"', 'stroke-width="4" stroke-dasharray="8 5"') + t(X(-7.5), Y(3) - 14, 'virtual image', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  g += t(X(10), ay - 40, 'eye', { size: 16, anchor: 'middle', fill: C.muted });
  add('05-magnifying-glass',
    svg(900, 640, 'Magnifying glass: object inside F',
      ext(30, 72) + panel(30, 110, 840, 400) + g +
      note(30, 525, 410, 92, ['Rays leaving the lens diverge;', 'traced back they meet behind the', 'object: virtual, upright, enlarged.'], { size: 16, lh: 24, fill: C.cream }) +
      note(460, 525, 410, 92, ['Short sight: diverging lens.', 'Long sight: converging lens.'], { size: 17, lh: 28, fill: C.tealLight, edge: C.tealDark })),
    'An object between a converging lens and its principal focus. The ray parallel to the axis refracts through the far focus and the ray through the centre goes straight on; the two rays diverge, and traced back as dashed lines they meet behind the object, giving a virtual, upright, enlarged image. Short sight is corrected with a diverging lens and long sight with a converging lens.',
    'Object closer than F: the image is virtual, upright and enlarged.',
    '## Thin lenses');
}

// 06 Dispersion
{
  const A = [380, 170], B = [240, 450], Cc = [520, 450];
  let s = `<polygon points="${A.join(',')} ${B.join(',')} ${Cc.join(',')}" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  const P = [300, 330];
  s += ray(60, 300, 200, 316, C.ink, 5) + seg(200, 316, P[0], P[1], C.ink, 5) + t(60, 285, 'white light', { size: 18, weight: 700 });
  const cols = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  const Q = [460, 330];
  s += `<polygon points="${P.join(',')} ${Q[0]},${Q[1] - 12} ${Q[0]},${Q[1] + 14}" fill="${C.cream}" stroke="none"/>`;
  cols.forEach((c0, k) => { const y0 = Q[1] - 12 + k * 4.3, y1 = 300 + k * 30; s += seg(Q[0], y0, 790, y1, k === 0 ? C.rust : k === 6 ? C.blue : C.muted, 2.5) + t(800, y1 + 6, c0, { size: 17, weight: k === 0 || k === 6 ? 700 : 400 }); });
  s += t(640, 270, 'red bends least', { size: 16, anchor: 'middle', fill: C.rust, weight: 700 }) + t(640, 530, 'violet bends most', { size: 16, anchor: 'middle', fill: C.blue, weight: 700 });
  add('06-dispersion',
    svg(900, 700, 'Dispersion of white light by a prism',
      panel(30, 110, 840, 450) + s +
      panel(30, 575, 840, 100) + t(60, 612, 'red → violet:  frequency increases, wavelength decreases', { size: 19, weight: 700 }) +
      ext(60, 630) + t(230, 652, 'monochromatic light (one frequency) is refracted but not split', { size: 17 })),
    'White light enters a glass prism and leaves as a spectrum: red bends least and violet most, giving red, orange, yellow, green, blue, indigo and violet. From red to violet the frequency increases and the wavelength decreases.',
    'Each colour refracts by a different amount, so white light splits into a spectrum.',
    '## Dispersion');
}
