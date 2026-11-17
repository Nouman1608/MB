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

export const slug = 'cambridge-igcse-physics-0625-electrical-safety-cambridge-igcse-physics';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const LIVE = C.rust, NEU = C.blue, EAR = C.grass;
// appliance box with a heating element between live and neutral terminals
const appliance = (x, y, w, h, fill, label) => rect(x, y, w, h, fill, C.ink, 3, 10) + t(x + w / 2, y + h + 26, label, { size: 17, anchor: 'middle', fill: C.muted, weight: 600 });

// 01 Three wires
{
  const sx = 120, ax = 560;
  let s = rect(60, 170, 120, 260, C.cream, C.ink, 3, 10) + t(120, 300, 'mains', { size: 19, weight: 700, anchor: 'middle' }) + t(120, 324, 'supply', { size: 19, weight: 700, anchor: 'middle' });
  s += rect(ax, 160, 260, 280, '#d9dee3', C.ink, 4, 12) + t(ax + 130, 470, 'appliance with a metal case', { size: 17, anchor: 'middle', fill: C.muted, weight: 600 });
  s += rect(ax + 60, 210, 140, 130, C.panel, C.ink, 2.5, 8) + t(ax + 130, 262, 'working', { size: 17, anchor: 'middle' }) + t(ax + 130, 284, 'parts', { size: 17, anchor: 'middle' });
  s += W(180, 220, ax + 60, 220, LIVE, 5) + W(180, 320, ax + 60, 320, NEU, 5) + W(180, 400, ax, 400, EAR, 5) + dot(ax, 400, 7, EAR);
  s += t(370, 190, 'LIVE (line): high p.d.', { size: 19, weight: 700, anchor: 'middle', fill: LIVE }) + t(370, 308, 'NEUTRAL: close to 0 V', { size: 19, weight: 700, anchor: 'middle', fill: NEU }) + t(370, 388, 'EARTH: 0 V, to the case', { size: 19, weight: 700, anchor: 'middle', fill: EAR });
  s += cs.fuse(300, 220, 0, 30) + t(300, 252, 'fuse', { size: 16, anchor: 'middle' });
  s += cs.switchClosed(450, 220, 0, 30) + t(450, 252, 'switch', { size: 16, anchor: 'middle' });
  s += t(370, 432, 'carries current only when there is a fault', { size: 16, anchor: 'middle', fill: EAR });
  add('01-live-neutral-earth',
    svg(900, 610, 'Live, neutral and earth',
      panel(30, 110, 840, 390) + s +
      note(30, 520, 840, 64, ['The danger is the live wire: touch it while in contact with earth and current flows through you.'], { size: 18, fill: C.cream })),
    'A mains supply connected to an appliance with a metal case. The live wire, at a high p.d., runs through a fuse and a switch to the working parts; the neutral wire, close to 0 V, completes the circuit; the earth wire, at 0 V, connects to the metal case and carries current only when there is a fault.',
    'Fuse and switch sit in the live wire; the earth wire joins the metal case to the ground.',
    '## The three wires');
}

// 02 Switch in live vs neutral
{
  const sc = (L, inLive) => {
    const ly = 210, ny = 330, x0 = L + 30, x1 = L + 380;
    let s = rect(x0, 180, 60, 180, C.cream, C.ink, 3, 8) + t(x0 + 30, 276, 'supply', { size: 15, anchor: 'middle', weight: 600 });
    s += rect(x1 - 90, 180, 90, 180, C.panel, C.ink, 3, 8) + t(x1 - 45, 268, 'lamp', { size: 16, anchor: 'middle' }) + t(x1 - 45, 290, 'holder', { size: 16, anchor: 'middle' });
    const lc = inLive ? C.muted : LIVE;
    s += W(x0 + 60, ly, L + 160, ly, LIVE, 5) + W(L + 220, ly, x1 - 90, ly, inLive ? C.muted : LIVE, 5);
    s += W(x0 + 60, ny, L + 160, ny, NEU, 5) + W(L + 220, ny, x1 - 90, ny, NEU, 5);
    if (inLive) { s += W(L + 160, ny, L + 220, ny, NEU, 5) + circ(L + 160, ly, 5, C.panel, C.ink, 2.5) + circ(L + 220, ly, 5, C.panel, C.ink, 2.5) + W(L + 164, ly - 4, L + 214, ly - 32, C.ink, 4); }
    else { s += W(L + 160, ly, L + 220, ly, LIVE, 5) + circ(L + 160, ny, 5, C.panel, C.ink, 2.5) + circ(L + 220, ny, 5, C.panel, C.ink, 2.5) + W(L + 164, ny - 4, L + 214, ny - 32, C.ink, 4); }
    s += t(L + 120, ly - 14, 'live', { size: 16, weight: 700, fill: LIVE, anchor: 'middle' }) + t(L + 120, ny + 30, 'neutral', { size: 16, weight: 700, fill: NEU, anchor: 'middle' });
    s += t(L + 190, inLive ? ly + 40 : ny - 46, 'switch OFF', { size: 16, weight: 700, anchor: 'middle' });
    if (!inLive) s += rect(x1 - 92, 178, 94, 184, 'none', LIVE, 4, 8).replace('stroke-width="4"', 'stroke-width="4" stroke-dasharray="8 6"');
    return s;
  };
  add('02-switch-in-live-wire',
    svg(900, 620, 'Why the switch goes in the live wire',
      panel(30, 110, 410, 480) + t(235, 148, 'Switch in LIVE: correct', { size: 20, weight: 700, anchor: 'middle', fill: C.tealDark }) + sc(30, true) +
      note(50, 420, 370, 150, ['Off = disconnected from', 'the high p.d. Parts beyond', 'the switch are safe to touch.'], { size: 17, fill: C.tealLight, edge: C.tealDark, lh: 26 }) +
      panel(460, 110, 410, 480) + t(665, 148, 'Switch in NEUTRAL: unsafe', { size: 20, weight: 700, anchor: 'middle', fill: LIVE }) + sc(460, false) +
      note(480, 420, 370, 150, ['Off: the lamp goes out, but', 'its parts are still connected', 'to the live wire. Shock risk.'], { size: 17, fill: C.cream, edge: LIVE, lh: 26 })),
    'Two circuits with the switch off. With the switch in the live wire, the lamp holder is cut off from the high p.d. and is safe. With the switch in the neutral wire, the lamp goes out but the holder is still connected to the live wire, so it can still give a shock.',
    'Both switch positions turn the lamp off, but only a live-wire switch makes it safe.',
    '## Why the switch goes in the live wire');
}

// 03 Overloading an extension lead
{
  const apps = [['kettle', '2.5 kW', '10.9 A'], ['heater', '2.0 kW', '8.7 A'], ['iron', '1.2 kW', '5.2 A']];
  let s = rect(60, 200, 520, 70, '#ffffff', C.ink, 3, 14) + t(320, 300, 'extension lead designed for 13 A', { size: 18, anchor: 'middle', weight: 600 });
  apps.forEach(([n, p, i], k) => { const x = 140 + k * 170; s += rect(x - 32, 214, 64, 42, C.tealLight, C.ink, 2.5, 6) + W(x, 214, x, 150, C.ink, 4); s += t(x, 140, `${n} ${p}`, { size: 17, weight: 700, anchor: 'middle' }) + t(x, 240, i, { size: 17, weight: 700, anchor: 'middle', fill: C.rust }); });
  s += W(60, 235, 30, 235, C.ink, 5);
  const calcB = calc(610, 140, 260, 'Currents add', ['I = P / V on 230 V', '10.9 + 8.7 + 5.2', ['= 24.8 A', 700, C.rust], ['far above 13 A', 700, C.rust]], { lh: 32 });
  add('03-overloading',
    svg(900, 580, 'Overloading: currents in parallel add',
      panel(30, 110, 840, 440) + s + calcB.s +
      tl(60, 370, ['Too much current → the cable and sockets overheat', '→ insulation melts, exposing wires → fire'], { size: 19, weight: 600 }, 30) +
      note(60, 450, 780, 76, ['Other hazards: damaged insulation (shock, short circuit), cables that', 'overheat or are coiled up, and damp conditions (impure water conducts).'], { size: 17, lh: 25, fill: C.tealLight, edge: C.tealDark })),
    'A kettle (2.5 kW, 10.9 A), a heater (2.0 kW, 8.7 A) and an iron (1.2 kW, 5.2 A) plugged into one extension lead designed for 13 A on 230 V. The currents add to 24.8 A, so the cable overheats, its insulation can melt and a fire can start.',
    'Each appliance adds its own current; too many on one lead overheats the cable.',
    '## The four hazards');
}

// 04 Choosing a fuse
{
  const X = (a) => 80 + a * 52; // 0..14 A
  let s = W(X(0), 300, X(14.3), 300, C.ink, 3) + arrow(X(14), 300, X(14.6), 300, { w: 3 });
  for (let a = 0; a <= 14; a++) s += W(X(a), 300, X(a), a % 5 === 0 ? 312 : 307, C.ink, 2) ;
  [0, 5, 10].forEach((a) => { s += t(X(a), 334, String(a), { size: 16, anchor: 'middle', fill: C.muted }); });
  s += t(X(14.4), 334, 'current / A', { size: 16, anchor: 'end', fill: C.muted });
  [[3, '3 A'], [5, '5 A'], [13, '13 A']].forEach(([a, l]) => { s += rect(X(a) - 30, 240, 60, 34, C.cream, C.olive, 2.5, 8) + t(X(a), 263, l, { size: 17, weight: 700, anchor: 'middle' }) + W(X(a), 274, X(a), 300, C.olive, 2.5); });
  const mark = (a, lbl, y, col) => `<path d="M${X(a)},${y} l-9,-14 l18,0 z" fill="${col}"/>` + W(X(a), 300, X(a), y, col, 2.5).replace('stroke-linecap="round"', 'stroke-dasharray="5 4"') + t(X(a), y + 26, lbl, { size: 17, weight: 700, anchor: 'middle', fill: col });
  s += mark(2.8, 'drill 2.8 A', 380, C.tealDark) + mark(5.2, 'hair dryer 5.2 A', 430, C.rust);
  const a = calc(30, 500, 410, '(a) 1.2 kW hair dryer', ['I = 1200 / 230 = 5.2 A', '5 A is below 5.2 A: would blow', ['→ 13 A fuse', 700, C.rust]], { lh: 32 });
  const b = calc(460, 500, 410, '(b) 650 W drill', ['I = 650 / 230 = 2.8 A', '3 A is the smallest above 2.8 A', ['→ 3 A fuse', 700, C.rust]], { lh: 32 });
  add('04-choosing-a-fuse',
    svg(900, 500 + a.h + 30, 'Choosing a fuse: smallest rating above the current',
      panel(30, 110, 840, 370) + t(60, 160, 'Available fuses: 3 A, 5 A, 13 A (230 V supply)', { size: 19, weight: 600 }) + s + a.s + b.s),
    'A current scale from 0 to 14 A with fuse ratings of 3 A, 5 A and 13 A. A 650 W drill draws 2.8 A, so the 3 A fuse is chosen; a 1.2 kW hair dryer draws 5.2 A, above 5 A, so it needs the 13 A fuse.',
    'Calculate I = P/V, then pick the smallest rating just above it.',
    '## Fuses');
}

// 05 Fuse vs trip switch, and a trip setting
{
  const X = (a) => 80 + a * 22; // 0..34 A
  let s = W(X(0), 470, X(34), 470, C.ink, 3) + arrow(X(33.5), 470, X(35), 470, { w: 3 });
  [0, 10, 20, 30].forEach((a) => { s += W(X(a), 470, X(a), 480, C.ink, 2) + t(X(a), 502, String(a), { size: 16, anchor: 'middle', fill: C.muted }); });
  s += t(X(34.5), 455, 'current / A', { size: 16, anchor: 'end', fill: C.muted });
  [[6, '6 A'], [20, '20 A'], [32, '32 A']].forEach(([a, l]) => { s += rect(X(a) - 30, 412, 60, 34, a === 20 ? C.mustard : C.cream, C.olive, 2.5, 8) + t(X(a), 435, l, { size: 17, weight: 700, anchor: 'middle' }) + W(X(a), 446, X(a), 470, C.olive, 2.5); });
  s += `<path d="M${X(17.4)},530 l-9,14 l18,0 z" fill="${C.rust}"/>` + t(X(17.4), 566, '4.0 kW ÷ 230 V = 17.4 A  →  choose 20 A', { size: 18, weight: 700, anchor: 'middle', fill: C.rust });
  const col = (x, title, rows, fill, edge) => `<rect x="${x}" y="110" width="410" height="230" rx="14" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` + t(x + 205, 148, title, { size: 21, weight: 700, anchor: 'middle' }) + tl(x + 24, 190, rows, { size: 18 }, 32);
  add('05-fuse-vs-trip-switch',
    svg(900, 600, 'Fuse or trip switch',
      col(30, 'Fuse', ['• thin wire in the live wire', '• current above rating: wire', '   heats and melts', '• must be replaced after the', '   fault is repaired'], C.cream, C.olive) +
      col(460, 'Trip switch (circuit breaker)', ['• automatic switch in the live wire', '• current above setting: switch', '   opens (trips)', '• reset by hand once the fault', '   is fixed; nothing to replace'], C.tealLight, C.tealDark) +
      panel(30, 360, 840, 220) + t(60, 396, 'Setting: just above the normal maximum current', { size: 19, weight: 700 }) + s),
    'A fuse is a thin wire in the live wire that melts when the current exceeds its rating and must be replaced; a trip switch opens when the current exceeds its setting and is reset by hand. A 4.0 kW circuit on 230 V carries 17.4 A, so from 6 A, 20 A and 32 A the 20 A setting is chosen.',
    'Both cut off the live supply when the current is too large; a trip switch can be reset.',
    '## Trip switches');
}

// 06 Earthing a metal case
{
  const cx = 110, cy = 170, cw = 280, ch = 260;
  let s = rect(cx, cy, cw, ch, '#d9dee3', C.ink, 4, 12) + t(cx + cw / 2, cy + ch + 28, 'metal case', { size: 17, anchor: 'middle', weight: 600, fill: C.muted });
  s += W(30, 200, cx + 120, 200, LIVE, 5) + path(`M${cx + 120},200 q40,10 30,60 l40,30`, { stroke: LIVE, w: 5 }) + dot(cx + 190, 290, 8, LIVE) + t(cx + 20, 380, 'loose live wire', { size: 16, weight: 700, fill: LIVE }) + t(cx + 20, 400, 'touches the case', { size: 16, weight: 700, fill: LIVE });
  s += cs.fuse(70, 200, 0, 28);
  s += W(cx + cw, 400, cx + cw + 30, 400, EAR, 5) + W(cx + cw + 30, 400, cx + cw + 30, 460, EAR, 5) + cs.earth(cx + cw + 30, 460).replace(/stroke="#1e2a44"/g, `stroke="${EAR}"`);
  s += t(cx + cw + 30, 515, 'earth', { size: 16, weight: 700, fill: EAR, anchor: 'middle' });
  s += cur(cx + cw - 40, 400, 'r', C.rust, 10) + W(cx + 200, 300, cx + cw - 50, 400, C.rust, 3).replace('stroke-linecap="round"', 'stroke-dasharray="7 6"');
  const steps = ['Fault: live wire touches the metal case', 'Large current: live → case → earth wire → ground', 'Current above the fuse rating: fuse melts (or trip opens)', 'Appliance disconnected from the live supply', 'Case no longer at high p.d.: safe to touch'];
  let st = '';
  steps.forEach((x, i) => { const y = 140 + i * 82; st += badge(500, y + 28, 18, String(i + 1), i === 2 ? C.mustard : C.cream) + tl(530, y + 22, wrap(x, 30), { size: 17, weight: i === 4 ? 700 : 400 }, 22); });
  add('06-earthing-chain',
    svg(900, 610, 'How earthing protects you',
      panel(30, 110, 430, 470) + s + panel(470, 110, 400, 470) + st),
    'A loose live wire touches the metal case of an appliance. A large current flows from the live wire through the case and the earth wire to the ground, the fuse in the live wire melts, the appliance is disconnected and the case is safe to touch.',
    'Fault, large current to earth, fuse melts, live disconnected.',
    '## Earthing a metal casing');
}

// 07 Double insulation
{
  let s = rect(80, 170, 330, 240, '#f7f2e2', C.ink, 4, 30) + rect(130, 220, 230, 140, C.panel, C.ink, 2.5, 14) + t(245, 296, 'insulated live parts', { size: 16, anchor: 'middle' });
  s += t(245, 440, 'plastic (non-conducting) case', { size: 17, anchor: 'middle', weight: 600, fill: C.muted });
  s += W(30, 250, 130, 250, LIVE, 5) + W(30, 330, 130, 330, NEU, 5) + cs.fuse(60, 250, 0, 24);
  s += t(60, 230, 'fuse', { size: 16, anchor: 'middle', weight: 700 }) + t(245, 470, 'no earth wire', { size: 17, weight: 700, fill: EAR, anchor: 'middle' });
  add('07-double-insulation',
    svg(900, 520, 'Double insulation: no earth wire needed',
      panel(30, 110, 430, 380) + s +
      note(480, 120, 390, 170, ['The case cannot become live,', 'even if a wire comes loose,', 'so no earth wire is needed.'], { size: 18, fill: C.tealLight, edge: C.tealDark, lh: 28 }) +
      note(480, 310, 390, 180, ['The fuse is still there.', 'It protects the circuit and', 'the cabling, melting if a short', 'circuit makes the current too large.'], { size: 18, fill: C.cream, lh: 28 })),
    'A double-insulated appliance has a plastic, non-conducting case around insulated live parts and only live and neutral wires, with no earth wire. A fuse in the live wire remains to protect the circuit and the cabling.',
    'A non-conducting case cannot become live; the fuse protects the circuit and cabling.',
    '## Double insulation');
}
