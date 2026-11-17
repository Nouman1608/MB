// Topic figures for cambridge-igcse-environmental-management-0680-earthquakes-and-volcanoes
import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

// ---- local helpers (kept inside this lesson file on purpose) ----
const esc = (s) => String(s).replace(/&(?![a-z#0-9]+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const tw = (s, size, weight = 400) => String(s).replace(/&[a-z#0-9]+;/g, 'x').length * size * (weight >= 600 ? 0.575 : 0.535);
const wrap = (s, size, width, weight = 400) => {
  const lines = [''];
  for (const w of String(s).split(' ')) {
    const cur = lines[lines.length - 1];
    const cand = cur ? cur + ' ' + w : w;
    if (cur && tw(cand, size, weight) > width) lines.push(w); else lines[lines.length - 1] = cand;
  }
  return lines;
};
// wrapped paragraph; returns svg string. ph() gives its height.
const para = (x, y, s, width, o = {}) => {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32);
  return tl(x, y, wrap(s, size, width, o.weight).map(esc), { ...o, size }, lh);
};
const ph = (s, width, o = {}) => { const size = o.size || 17, lh = o.lh || Math.round(size * 1.32); return wrap(s, size, width, o.weight).length * lh; };
// card: optional title + body text (string, or array of strings = separate paragraphs/bullets)
const cardLayout = (w, o) => {
  const pad = o.pad ?? 18, ts = o.tsize || 20, bs = o.bsize || 17, inner = w - 2 * pad;
  const tLines = o.title ? wrap(o.title, ts, inner, 700) : [];
  const body = o.body == null ? [] : Array.isArray(o.body) ? o.body : [o.body];
  const blh = Math.round(bs * 1.32), tlh = Math.round(ts * 1.25);
  const bLines = body.map((b) => wrap((o.bullet ? '• ' : '') + b, bs, inner - (o.bullet ? 0 : 0), o.bweight));
  const contentH = tLines.length * tlh + (tLines.length && body.length ? 8 : 0) + bLines.reduce((a, l) => a + l.length * blh, 0) + Math.max(0, body.length - 1) * (o.gap ?? 6);
  return { pad, ts, bs, inner, tLines, bLines, blh, tlh, contentH, h: contentH + 2 * pad - 4 + (o.top || 0) };
};
const cardH = (w, o) => cardLayout(w, o).h;
const card = (x, y, w, o = {}) => {
  const L = cardLayout(w, o);
  const h = o.h || L.h;
  const anchor = o.center ? 'middle' : 'start';
  const tx = o.center ? x + w / 2 : x + L.pad;
  let yy = y + (o.top || 0) + L.pad + L.ts * 0.78 + (o.vcenter === false ? 0 : (h - L.h) / 2);
  if (!o.title) yy = yy - L.ts * 0.78 + L.bs * 0.78;
  let s = o.noBox ? '' : `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 12}" fill="${o.fill || C.panel}" stroke="${o.edge || C.panelEdge}" stroke-width="${o.ew ?? 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
  L.tLines.forEach((ln) => { s += t(tx, yy, esc(ln), { size: L.ts, weight: 700, fill: o.tfill || C.ink, anchor }); yy += L.tlh; });
  if (L.tLines.length && L.bLines.length) yy += 8;
  L.bLines.forEach((lines, i) => { lines.forEach((ln) => { s += t(tx, yy, esc(ln), { size: L.bs, fill: o.bfill || C.ink, anchor, weight: o.bweight || 400 }); yy += L.blh; }); yy += o.gap ?? 6; });
  return s;
};
// rounded tag sized to its text
const tag = (x, y, s, o = {}) => {
  const size = o.size || 16, w = tw(s, size, o.weight || 600) + 24, h = size + 14;
  const x0 = o.anchor === 'middle' ? x - w / 2 : o.anchor === 'end' ? x - w : x;
  return `<rect x="${x0}" y="${y - h / 2}" width="${w}" height="${h}" rx="${h / 2}" fill="${o.fill || C.cream}" stroke="${o.edge || C.olive}" stroke-width="2"/>` + t(x0 + w / 2, y + size * 0.36, esc(s), { size, weight: o.weight || 600, anchor: 'middle', fill: o.color || C.ink });
};
// curved arrow (quadratic)
const carrow = (x1, y1, cx, cy, x2, y2, { color = C.ink, w = 3.5, marker = 'ah', dash = '' } = {}) =>
  `<path d="M${x1},${y1} Q${cx},${cy} ${x2},${y2}" fill="none" stroke="${color}" stroke-width="${w}" marker-end="url(#${marker})"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
// poly-line arrow through points
const parrow = (pts, { color = C.ink, w = 3.5, marker = 'ah', dash = '' } = {}) =>
  `<polyline points="${pts.map((p) => p.join(',')).join(' ')}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linejoin="round" marker-end="url(#${marker})"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const notToScale = (x, y, anchor = 'end') => t(x, y, 'Not to scale', { size: 15, italic: true, fill: C.muted, anchor });
// simple chart frame: returns {svg, X, Y}
const chart = (x0, y0, w, h, { xmin, xmax, ymin, ymax, xticks, yticks, xlabel, ylabel, xfmt = (v) => v, yfmt = (v) => v, grid = true }) => {
  const X = (v) => x0 + ((v - xmin) / (xmax - xmin)) * w;
  const Y = (v) => y0 + h - ((v - ymin) / (ymax - ymin)) * h;
  let s = `<rect x="${x0}" y="${y0}" width="${w}" height="${h}" fill="${C.panel}"/>`;
  for (const v of yticks) s += (grid ? `<line x1="${x0}" y1="${Y(v)}" x2="${x0 + w}" y2="${Y(v)}" stroke="${C.panelEdge}" stroke-width="1.5"/>` : '') + `<line x1="${x0 - 7}" y1="${Y(v)}" x2="${x0}" y2="${Y(v)}" stroke="${C.ink}" stroke-width="2"/>` + t(x0 - 12, Y(v) + 6, yfmt(v), { size: 16, anchor: 'end' });
  for (const v of xticks) s += `<line x1="${X(v)}" y1="${y0 + h}" x2="${X(v)}" y2="${y0 + h + 7}" stroke="${C.ink}" stroke-width="2"/>` + t(X(v), y0 + h + 28, xfmt(v), { size: 16, anchor: 'middle' });
  s += `<path d="M${x0},${y0} L${x0},${y0 + h} L${x0 + w},${y0 + h}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  if (xlabel) s += t(x0 + w / 2, y0 + h + 60, esc(xlabel), { size: 17, weight: 600, anchor: 'middle' });
  if (ylabel) s += `<text x="0" y="0" transform="translate(${x0 - 62},${y0 + h / 2}) rotate(-90)" font-size="17" font-weight="600" fill="${C.ink}" text-anchor="middle">${esc(ylabel)}</text>`;
  return { svg: s, X, Y };
};
const dot = (x, y, r = 7, fill = C.tealDark) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
const line = (x1, y1, x2, y2, color = C.ink, w = 2.5, dash = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const rect = (x, y, w, h, fill, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 0}" fill="${fill}"${o.stroke ? ` stroke="${o.stroke}" stroke-width="${o.sw ?? 2.5}"` : ''}${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}${o.op ? ` opacity="${o.op}"` : ''}/>`;
const tree = (x, y, s = 1) => `<rect x="${x - 4 * s}" y="${y - 22 * s}" width="${8 * s}" height="${22 * s}" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/><circle cx="${x}" cy="${y - 38 * s}" r="${22 * s}" fill="${C.grass}" stroke="${C.ink}" stroke-width="2.5"/>`;
const cloud = (cx, cy, w, h, fill = C.tealLight) => {
  const rx = w / 2, ry = h / 2;
  return `<path d="M${cx - rx},${cy + ry} Q${cx - rx - ry * 0.9},${cy + ry} ${cx - rx},${cy} Q${cx - rx + 5},${cy - ry * 1.2} ${cx - rx * 0.45},${cy - ry * 0.85} Q${cx - rx * 0.2},${cy - ry * 1.9} ${cx + rx * 0.25},${cy - ry * 1.1} Q${cx + rx * 0.75},${cy - ry * 1.6} ${cx + rx * 0.85},${cy - ry * 0.3} Q${cx + rx + ry * 0.9},${cy - ry * 0.2} ${cx + rx},${cy + ry} Z" fill="${fill}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
};

export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

export const slug = 'cambridge-igcse-environmental-management-0680-earthquakes-and-volcanoes';

// 01 Three layers of the Earth
{
  const cx = 275, cy = 420, R = 240;
  let s = panel(30, 110, 840, 610);
  s += `<clipPath id="half"><rect x="30" y="110" width="840" height="610"/></clipPath>`;
  s += `<g clip-path="url(#half)"><circle cx="${cx}" cy="${cy}" r="${R}" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="3"/><circle cx="${cx}" cy="${cy}" r="${R - 14}" fill="${C.cream}" stroke="${C.ink}" stroke-width="2"/><circle cx="${cx}" cy="${cy}" r="${R * 0.46}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/></g>`;
  s += t(cx, cy + 8, 'core', { size: 20, weight: 700, anchor: 'middle' }) + t(cx, cy - 175, 'mantle', { size: 20, weight: 700, anchor: 'middle' });
  const lab = (x1, y1, y, head, body, fill = C.ink) => line(x1, y1, 520, y, C.ink, 2) + `<circle cx="${x1}" cy="${y1}" r="5" fill="${C.ink}"/>` + t(530, y + 6, head, { size: 21, weight: 700, fill }) + para(530, y + 32, body, 320, { size: 16, fill: C.muted });
  s += lab(cx + R * 0.68, cy - R * 0.72, 170, 'Crust', 'the thin, rigid outer layer');
  s += lab(cx + 175, cy - 40, 330, 'Mantle', 'thick layer of hot rock that moves very slowly');
  s += lab(cx + 60, cy + 60, 480, 'Core', 'very hot, dense centre, mainly iron and nickel; its heat drives movement in the mantle');
  s += t(50, 700, 'Crust drawn thicker than it is.', { size: 15, italic: true, fill: C.muted });
  // crust types
  const y0 = 750;
  s += panel(30, y0, 410, 170) + panel(460, y0, 410, 170);
  s += rect(60, y0 + 50, 350, 26, C.teal) + rect(60, y0 + 76, 350, 22, C.rockDark, { stroke: C.ink, sw: 2 }) + t(235, y0 + 68, 'ocean', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
  s += rect(490, y0 + 34, 350, 64, C.rock, { stroke: C.ink, sw: 2 });
  s += t(54, y0 + 130, 'Oceanic crust', { size: 19, weight: 700 }) + t(54, y0 + 154, 'thinner and denser', { size: 16, fill: C.muted });
  s += t(484, y0 + 130, 'Continental crust', { size: 19, weight: 700 }) + t(484, y0 + 154, 'thicker and less dense', { size: 16, fill: C.muted });
  add('01-earth-structure',
    svg(900, y0 + 200, 'Three layers of the Earth', s),
    'Cut-away of the Earth showing a thin rigid crust, a thick mantle of slowly moving hot rock and a very hot dense core of iron and nickel. Below, oceanic crust is drawn thinner and denser than continental crust.',
    'Crust, mantle and core: heat from the core drives movement in the mantle.',
    '## Structure of the Earth (6.1.1) and the continents (6.1.2)');
}

// 02 Hotspot volcano chain
{
  const P = 330; // plate top
  let s = panel(30, 110, 840, 450);
  s += rect(32, P + 40, 836, 188, C.cream) + rect(32, P, 836, 40, C.rockDark, { stroke: C.ink, sw: 2.5 }) + rect(32, 270, 836, 60, C.teal);
  s += t(60, P + 26, 'plate', { size: 16, weight: 700, fill: C.panel });
  s += t(60, 300, 'ocean', { size: 16, weight: 600, fill: C.tealDark });
  // plume
  s += `<path d="M200,${P + 228} C190,${P + 150} 170,${P + 90} 210,${P + 40} L270,${P + 40} C310,${P + 90} 290,${P + 150} 280,${P + 228} Z" fill="${C.rust}" opacity="0.85"/>`;
  s += t(300, P + 160, 'hot plume of mantle rock rises', { size: 16, weight: 700 });
  s += t(300, P + 180, 'and melts through the plate', { size: 16, weight: 700 });
  // volcanoes: active over plume at x 240, older ones to the right (plate moves right)
  const vol = (x, h, act) => `<path d="M${x - h * 1.1},${P} L${x - 12},${P - h} L${x + 12},${P - h} L${x + h * 1.1},${P} Z" fill="${act ? C.rock : C.rockDark}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` + (act ? path(`M${x},${P} L${x},${P + 40}`, { stroke: C.rust, w: 8 }) + `<path d="M${x - 10},${P - h} q10,-26 20,0" fill="${C.rust}"/>` : '');
  s += vol(240, 110, true) + vol(450, 80, false) + vol(620, 55, false) + vol(770, 30, false);
  s += t(240, 150, 'active volcano', { size: 17, weight: 700, anchor: 'middle' }) + t(240, 170, 'over the hotspot', { size: 16, anchor: 'middle', fill: C.muted });
  s += t(610, 170, 'extinct volcanoes, older with distance', { size: 16, weight: 600, anchor: 'middle' });
  s += arrow(500, 236, 800, 236, { w: 4, color: C.olive, marker: 'ahO' }) + t(650, 260, 'older', { size: 15, anchor: 'middle', fill: C.olive, weight: 700 });
  s += arrow(520, P + 90, 760, P + 90, { w: 6 }) + t(640, P + 120, 'plate moves over the hotspot', { size: 17, weight: 700, anchor: 'middle' });
  s += notToScale(858, 548);
  const tip = { title: 'Describing a distribution', body: ['Pattern: narrow linear belts along plate boundaries.', 'Named location: the Ring of Fire around the Pacific Ocean; a belt down the middle of the Atlantic Ocean.', 'Exception: hotspot volcanoes far from any boundary, such as the Hawaiian Islands.'], tsize: 19, bsize: 16, fill: C.cream, edge: C.olive, gap: 4 };
  s += card(30, 580, 840, tip);
  add('02-hotspot-chain',
    svg(900, 580 + cardH(840, tip) + 30, 'A hotspot builds a chain of volcanoes', s),
    'Cross-section of an ocean plate moving over a fixed plume of hot mantle rock. An active volcano sits over the plume; extinct volcanoes further along the direction of plate movement get older and lower with distance. Below: how to describe a distribution with a pattern, named locations and the hotspot exception.',
    'Most volcanoes follow plate boundaries; hotspots are the exception.',
    '## Distribution of earthquakes and volcanoes (6.1.3)');
}

// 03 Convection currents and three boundaries
{
  let s = panel(30, 110, 840, 250);
  s += rect(32, 160, 836, 28, C.rockDark, { stroke: C.ink, sw: 2 }) + rect(448, 160, 4, 28, C.rust);
  s += rect(32, 188, 836, 140, C.cream);
  const cell = (cx, dir) => { const rx = 165, ry = 34, cy = 236; const sw = dir > 0 ? 0 : 1; return `<path d="M${cx + dir * rx},${cy} A${rx},${ry} 0 0 ${sw} ${cx - dir * rx},${cy}" fill="none" stroke="${C.rust}" stroke-width="4" marker-end="url(#ahR)"/><path d="M${cx - dir * rx},${cy} A${rx},${ry} 0 0 ${sw} ${cx + dir * rx},${cy}" fill="none" stroke="${C.rust}" stroke-width="4" marker-end="url(#ahR)"/>`; };
  s += cell(260, 1) + cell(640, -1);
  s += arrow(400, 148, 300, 148, { w: 4 }) + arrow(500, 148, 600, 148, { w: 4 }) + t(450, 140, 'plates dragged', { size: 15, weight: 600, anchor: 'middle' });
  s += t(450, 296, 'hot rock rises', { size: 16, weight: 700, anchor: 'middle', fill: C.rust }) + t(450, 316, '(less dense)', { size: 15, anchor: 'middle', fill: C.muted });
  s += t(60, 296, 'cools and sinks', { size: 16, weight: 700, fill: C.rust }) + t(840, 296, 'cools and sinks', { size: 16, weight: 700, fill: C.rust, anchor: 'end' });
  s += t(450, 350, 'heat from the core', { size: 16, weight: 600, anchor: 'middle' }) + arrow(450, 352, 450, 352);
  s += t(54, 180, 'plate', { size: 15, weight: 700, fill: C.panel });
  const rows = [
    ['Divergent (constructive)', 'Plates move apart; magma rises into the gap and forms new crust.', 'Volcanic activity and earthquakes', 'Mid-Atlantic Ridge, Iceland', 'div'],
    ['Convergent (destructive)', 'Plates move together; the denser oceanic plate is subducted beneath the other plate and melts.', 'Earthquakes and a line of volcanoes', 'Andes, Japan', 'con'],
    ['Conservative', 'Plates slide past each other; friction locks them until stress is suddenly released.', 'Earthquakes only, no volcanoes', 'San Andreas Fault, California', 'cons'],
  ];
  let y = 380;
  rows.forEach(([head, what, haz, ex, k]) => {
    const h = 190;
    s += panel(30, y, 840, h);
    const x0 = 50, w = 300, top = y + (k === 'con' ? 96 : 70);
    if (k === 'div') {
      s += rect(x0, top, w, 70, C.cream) + rect(x0, top, 135, 30, C.rockDark, { stroke: C.ink, sw: 2 }) + rect(x0 + 165, top, 135, 30, C.rockDark, { stroke: C.ink, sw: 2 });
      s += `<path d="M${x0 + 135},${top + 70} L${x0 + 140},${top + 2} L${x0 + 160},${top + 2} L${x0 + 165},${top + 70} Z" fill="${C.rust}"/>` + arrow(x0 + 100, top - 20, x0 + 30, top - 20, { w: 3.5 }) + arrow(x0 + 200, top - 20, x0 + 270, top - 20, { w: 3.5 }) + t(x0 + 172, top + 58, 'magma', { size: 15, weight: 700, fill: C.rust });
    }
    if (k === 'con') {
      s += rect(x0, top, w, 80, C.cream) + rect(x0, top + 10, w, 0, C.teal);
      s += `<path d="M${x0},${top} L${x0 + 170},${top} L${x0 + 250},${top + 70} L${x0 + 226},${top + 80} L${x0 + 155},${top + 22} L${x0},${top + 22} Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
      s += `<path d="M${x0 + 175},${top} L${x0 + w},${top} L${x0 + w},${top + 36} L${x0 + 205},${top + 36} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2"/>`;
      s += `<path d="M${x0 + 220},${top} L${x0 + 240},${top - 38} L${x0 + 252},${top - 38} L${x0 + 272},${top} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M${x0 + 246},${top - 36} L${x0 + 236},${top + 60}`, { stroke: C.rust, w: 4 });
      s += arrow(x0 + 20, top - 20, x0 + 100, top - 20, { w: 3.5 }) + arrow(x0 + w - 4, top - 54, x0 + w - 4, top - 54) + t(x0 + 40, top + 52, 'oceanic', { size: 15, weight: 600 }) + t(x0 + w - 10, top + 28, 'continental', { size: 14.5, weight: 600, anchor: 'end' }).replace('font-size="14.5"', 'font-size="15"');
    }
    if (k === 'cons') {
      s += rect(x0, top - 20, w, 50, C.rock, { stroke: C.ink, sw: 2 }) + rect(x0, top + 30, w, 50, C.rockDark, { stroke: C.ink, sw: 2 }) + line(x0, top + 30, x0 + w, top + 30, C.rust, 4, '10 6');
      s += arrow(x0 + 220, top + 5, x0 + 80, top + 5, { w: 4 }) + arrow(x0 + 80, top + 55, x0 + 220, top + 55, { w: 4, color: C.panel });
      s += t(x0 + w, top + 100, 'seen from above', { size: 15, italic: true, fill: C.muted, anchor: 'end' });
    }
    s += t(x0, y + 36, head, { size: 21, weight: 700 });
    s += para(390, y + 40, what, 460, { size: 16 });
    s += t(390, y + 40 + ph(what, 460, { size: 16 }) + 14, haz, { size: 17, weight: 700, fill: C.rust });
    s += t(390, y + 40 + ph(what, 460, { size: 16 }) + 42, 'e.g. ' + ex, { size: 16, weight: 600, fill: C.tealDark });
    y += h + 14;
  });
  s = s.replace(/<line x1="(\d+)" y1="(\d+)" x2="\1" y2="\2"[^>]*\/>/g, '');
  add('03-plate-boundaries',
    svg(900, y + 16, 'Convection currents and plate boundaries', s),
    'Top: convection currents in the mantle; hot rock rises, spreads, cools and sinks, dragging the plates above. Below, three boundaries: divergent, where plates move apart and magma forms new crust; convergent, where the denser oceanic plate is subducted and a line of volcanoes forms; conservative, where plates slide past and cause earthquakes only.',
    'Movement, process, hazard: subduction at convergent boundaries gives earthquakes and a line of volcanoes.',
    '## Convection currents and plate boundaries (6.1.4)');
}

// 04 Earthquake features and magnitude
{
  const G = 200;
  let s = panel(30, 110, 840, 400);
  s += rect(32, G, 836, 298, C.rock) + line(32, G, 868, G, C.ink, 3);
  const fx = 330, fy = 330;
  [35, 70, 105].forEach((r) => { s += `<circle cx="${fx}" cy="${fy}" r="${r}" fill="none" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="8 6"/>`; });
  s += `<path d="M${fx},${fy - 16} l5,11 12,1 -9,8 3,12 -11,-6 -11,6 3,-12 -9,-8 12,-1 z" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
  s += line(fx, fy - 18, fx, G, C.ink, 2, '4 5') + `<circle cx="${fx}" cy="${G}" r="9" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>`;
  [[150, 'h'], [210, 'h'], [270, 'h']].forEach(([x]) => { s += rect(x, G - 30, 30, 30, C.panel, { stroke: C.ink, sw: 2 }) + `<path d="M${x - 4},${G - 30} L${x + 15},${G - 46} L${x + 34},${G - 30} Z" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>`; });
  s += line(fx + 10, G - 4, 560, 134, C.ink, 2) + t(570, 140, 'Epicentre', { size: 20, weight: 700, fill: C.rust }) + t(570, 161, 'on the surface directly above the focus;', { size: 15, fill: C.muted }) + t(570, 179, 'shaking usually strongest', { size: 15, fill: C.muted });
  s += line(fx + 20, fy, 560, fy + 50, C.ink, 2) + t(570, fy + 42, 'Focus', { size: 20, weight: 700 }) + t(570, fy + 66, 'the point underground where', { size: 15, fill: C.muted }) + t(570, fy + 84, 'the rock slips', { size: 15, fill: C.muted });
  s += t(570, 268, 'Seismic waves', { size: 20, weight: 700, fill: C.olive }) + t(570, 292, 'stored energy released when', { size: 15, fill: C.muted }) + t(570, 310, 'locked rock suddenly slips', { size: 15, fill: C.muted }) + line(fx + 96, fy - 40, 562, 276, C.ink, 2);
  s += t(54, 488, 'A shallow focus usually does more damage: waves lose less energy before they arrive.', { size: 15, fill: C.ink, weight: 600 });
  // magnitude
  s += t(450, 560, 'Moment Magnitude Scale: each whole step ≈ 32 times more energy', { size: 19, weight: 700, anchor: 'middle' });
  const ms = [['6.0', 1], ['7.0', 32], ['8.0', 1024]];
  ms.forEach(([m, e], i) => { const x = 110 + i * 280; s += card(x, 585, 160, { title: 'M ' + m, tsize: 24, center: true, h: 64, fill: i === 2 ? C.rock : C.panel, edge: C.ink }); if (i < 2) s += arrow(x + 166, 617, x + 274, 617, { w: 4, color: C.rust, marker: 'ahR' }) + t(x + 220, 605, '×32', { size: 18, weight: 700, anchor: 'middle', fill: C.rust }); });
  s += t(450, 690, '32 × 32 = 1,024: one magnitude 8.0 ≈ the energy of a thousand magnitude 6.0 earthquakes', { size: 16, anchor: 'middle', fill: C.muted });
  s += notToScale(858, 498);
  add('04-earthquake-features',
    svg(900, 720, 'Focus, epicentre and magnitude', s),
    'Cross-section with the focus underground, seismic waves spreading out from it, and the epicentre on the surface directly above where shaking is strongest. Below, a magnitude 6.0, 7.0 and 8.0 earthquake are linked by steps of about 32 times more energy, so 8.0 releases about 1,000 times the energy of 6.0.',
    'The focus is underground, the epicentre above it; each magnitude step is about 32 times the energy.',
    '## Features of earthquakes (6.1.5)');
}

// 05 Features of a volcanic eruption
{
  const G = 520;
  let s = panel(30, 110, 840, 500);
  s += rect(32, G, 836, 88, C.cream) + line(32, G, 868, G, C.ink, 3);
  s += `<path d="M180,${G} L400,300 L470,300 L700,${G} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  s += `<ellipse cx="435" cy="${G + 52}" rx="90" ry="26" fill="${C.rust}" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M435,${G + 28} L435,302`, { stroke: C.rust, w: 14 });
  s += t(560, G + 60, 'magma underground', { size: 16, weight: 700 });
  s += `<path d="M470,300 Q520,360 560,420 Q585,460 640,${G - 6}" fill="none" stroke="${C.rust}" stroke-width="12" stroke-linecap="round"/>` + t(660, 430, 'lava: magma at', { size: 16, weight: 700 }) + t(660, 450, 'the surface', { size: 16, weight: 700 });
  s += cloud(430, 200, 230, 70, C.rockDark) + t(430, 212, 'ash', { size: 18, weight: 700, anchor: 'middle', fill: C.panel });
  s += `<path d="M380,320 Q300,400 200,${G - 8} L330,${G - 8} Q370,430 400,330 Z" fill="${C.muted}" opacity="0.55"/>` + t(50, G + 30, 'pyroclastic flow:', { size: 16, weight: 700 }) + t(50, G + 50, 'hot gas, ash and rock', { size: 16 }) + t(50, G + 70, 'rushing downslope', { size: 16 }) + line(120, G + 12, 250, G - 30, C.ink, 2);
  [[300, 250], [560, 240], [600, 290]].forEach(([x, y]) => { s += `<circle cx="${x}" cy="${y}" r="10" fill="${C.ink}"/>`; });
  s += carrow(470, 290, 540, 220, 588, 280, { w: 2.5, dash: '5 5' }) + t(620, 250, 'volcanic bombs', { size: 16, weight: 700 });
  s += t(640, 150, 'gases: water vapour,', { size: 16, weight: 700 }) + t(640, 170, 'carbon dioxide,', { size: 16, weight: 700 }) + t(640, 190, 'sulfur dioxide', { size: 16, weight: 700 });
  s += arrow(560, 196, 628, 168, { w: 2.5 });
  [[760, 230], [790, 260], [820, 230], [800, 300], [770, 290], [830, 280]].forEach(([x, y]) => { s += line(x, y, x - 6, y + 22, C.blue, 3); });
  s += t(800, 340, 'acid rain', { size: 16, weight: 700, anchor: 'middle', fill: C.blue });
  s += notToScale(858, 598);
  add('05-eruption-features',
    svg(900, 640, 'Features of a volcanic eruption', s),
    'Cross-section of an erupting volcano: magma rises from underground and pours out as lava; an ash cloud rises above the crater; volcanic bombs are thrown out; a pyroclastic flow of hot gas, ash and rock rushes downslope; gases including sulfur dioxide drift away and fall as acid rain.',
    'Magma underground becomes lava at the surface; ash, gases, bombs and pyroclastic flows are the other features.',
    '## Features of volcanic eruptions (6.1.6)');
}

// 06 Management before, during and after
{
  let s = '';
  const cols = [
    ['Before', C.tealLight, C.tealDark, [['Monitoring and warning', 'volcanic signs allow evacuation; quakes cannot be predicted precisely'], ['Land use zoning', 'keeps key buildings off faults, slopes and lava routes'], ['Structure of buildings', 'cross-bracing, flexible foundations, shock absorbers'], ['Disaster preparation', 'plans, drills, supplies, rescue teams']]],
    ['During', C.cream, C.olive, [['Evacuation', 'removes people from danger; roads may be blocked']]],
    ['After', C.rock, C.ink, [['Rebuilding', 'restores homes and services; slow and costly'], ['International aid', 'money, rescue teams, medical care; may arrive late']]],
  ];
  const cw = 270, gx = 15;
  // timeline
  s += rect(30, 120, 840, 40, C.panel, { stroke: C.panelEdge, rx: 20 });
  s += `<path d="M${30 + cw + gx / 2 - 6},112 l12,22 -10,0 14,34 -30,-40 12,0 z" fill="${C.rust}" stroke="${C.ink}" stroke-width="1.5"/>`;
  cols.forEach(([head, fill, edge], i) => { s += t(30 + i * (cw + gx) + cw / 2, 147, head, { size: 20, weight: 700, anchor: 'middle', fill: edge === C.ink ? C.ink : edge }); });
  let maxY = 0;
  const ch = (x, it) => cardH(cw, { title: it[0], body: it[1], tsize: 18, bsize: 15, pad: 14 });
  const sh = ['Shelters (during and after)', 'safe space, food and water; overcrowding can spread disease'];
  const shy = 180 + ch(0, cols[1][3][0]) + 12;
  const shH = cardH(2 * cw + gx, { title: sh[0], body: sh[1], tsize: 18, bsize: 15, pad: 14 });
  s += card(30 + cw + gx, shy, 2 * cw + gx, { title: sh[0], body: sh[1], tsize: 18, bsize: 15, pad: 14, fill: C.panel, edge: C.olive, dash: '8 6' });
  cols.forEach(([head, fill, edge, items], i) => {
    const x = 30 + i * (cw + gx); let y = i === 2 ? shy + shH + 12 : 180;
    items.forEach((it) => { const h = ch(x, it); s += card(x, y, cw, { title: it[0], body: it[1], tsize: 18, bsize: 15, pad: 14, h, fill, edge }); y += h + 12; });
    maxY = Math.max(maxY, y);
  });
  add('06-management-stages',
    svg(900, maxY + 20, 'Managing earthquakes and eruptions by stage', s),
    'Three columns on a timeline around the event. Before: monitoring and warning, land use zoning, the structure of buildings and disaster preparation. During: evacuation. After: rebuilding and international aid. Shelters span both during and after. Each card gives a benefit or limitation.',
    'Sort strategies into before, during and after, then weigh each one.',
    '## Managing the impacts (6.1.8 and 6.1.9)');
}

// 07 Opportunities provided by volcanoes
{
  const G = 470;
  let s = panel(30, 110, 840, 480);
  s += rect(32, G, 836, 118, C.cream) + line(32, G, 868, G, C.ink, 3);
  s += `<path d="M150,${G} L390,220 L450,220 L700,${G} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  // fields on lower slopes
  s += `<path d="M150,${G} L230,${G - 84} L300,${G - 84} L300,${G} Z" fill="${C.grass}" opacity="0.75"/>`;
  [175, 200, 225, 250, 275].forEach((x) => { s += path(`M${x},${G - 4} l0,-18 M${x},${G - 14} l-6,-8 M${x},${G - 14} l6,-8`, { stroke: C.ink, w: 1.8 }); });
  // geothermal
  s += rect(740, G - 60, 90, 60, C.panel, { stroke: C.ink, sw: 2.5 }) + path(`M770,${G - 62} q-10,-20 0,-40 q10,-20 0,-40`, { stroke: C.muted, w: 3 }) + path(`M785,${G} L785,${G + 60}`, { stroke: C.rust, w: 5 });
  s += rect(700, G + 60, 160, 20, C.rust, { op: 0.6 }) + t(860, G + 104, 'hot rock heats water', { size: 15, anchor: 'end', weight: 600 });
  // quarry
  s += `<path d="M560,${G - 112} L600,${G - 112} L620,${G - 70} L580,${G - 70} Z" fill="${C.panel}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="6 4"/>`;
  // tourists at crater
  s += `<circle cx="470" cy="208" r="6" fill="${C.ink}"/>` + line(470, 214, 470, 232, C.ink, 3);
  // labels
  s += t(150, 400 - 20, '', {});
  const L = (x, y, n, head, body, lx, ly) => badge(x, y, 17, n, C.mustard) + line(x, y, lx, ly, C.ink, 2) ;
  s += badge(225, 330, 17, '1') + t(60, 160, '', {});
  s += line(225, 347, 240, G - 70, C.ink, 2) + badge(590, 300, 17, '3') + line(590, 317, 590, G - 112, C.ink, 2) + badge(690, 330, 17, '4') + line(704, 340, 740, G - 40, C.ink, 2) + badge(510, 180, 17, '5') + line(498, 190, 476, 206, C.ink, 2) + badge(330, 520, 17, '2') + line(330, 503, 380, G - 20, C.ink, 2);
  s += `<circle cx="385" cy="${G - 28}" r="7" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/><circle cx="405" cy="${G - 40}" r="6" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`;
  s += notToScale(858, 140);
  const items = [['1', 'Fertile soils', 'weathered ash and lava release minerals: high farm yields'], ['2', 'Minerals', 'sulfur and some metal ores deposited near volcanoes'], ['3', 'Building materials', 'rocks such as basalt quarried for construction'], ['4', 'Geothermal power', 'steam from heated underground water turns turbines; Iceland uses it widely'], ['5', 'Tourism', 'craters, hot springs and geysers bring visitors and jobs']];
  let y = 610;
  items.forEach(([n, a, b], i) => { const x = 30 + (i % 2) * 430, yy = y + Math.floor(i / 2) * 78; s += badge(x + 20, yy + 26, 17, n) + t(x + 48, yy + 24, a, { size: 18, weight: 700 }) + t(x + 48, yy + 48, b.length > 46 ? b.slice(0, b.lastIndexOf(' ', 46)) : b, { size: 15, fill: C.muted }) + (b.length > 46 ? t(x + 48, yy + 66, b.slice(b.lastIndexOf(' ', 46) + 1), { size: 15, fill: C.muted }) : ''); });
  add('07-opportunities',
    svg(900, 610 + 3 * 78 + 10, 'Why people live near volcanoes', s),
    'A volcano landscape numbered 1 to 5: fields on fertile lower slopes, mineral deposits such as sulfur, a quarry for basalt, a geothermal power station using water heated by hot rock, and tourists at the crater. A key explains each opportunity.',
    'Fertile soils, minerals, building stone, geothermal power and tourism can outweigh the risk.',
    '## Opportunities provided by volcanoes (6.1.10)');
}
