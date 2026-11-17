import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-electromagnetism';
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

// 01 Electromagnet construction
{
  const cy = 300;
  const core = rect(200, cy - 40, 420, 80, { fill: C.rock, sw: 3, rx: 4 }) + t(410, cy + 75, '', {});
  const turns = Array.from({ length: 14 }, (_, i) => { const x = 250 + i * 23; return `<ellipse cx="${x}" cy="${cy}" rx="9" ry="52" fill="none" stroke="${C.rust}" stroke-width="4.5"/><ellipse cx="${x}" cy="${cy}" rx="9" ry="52" fill="none" stroke="${C.cream}" stroke-width="1.5"/>`; }).join('');
  const clips = [0, 1, 2].map((i) => path(`M${626 + i * 16},${cy - 20 + i * 18} l22,0 q8,0 8,8 q0,8 -8,8 l-18,0 q-6,0 -6,-5 q0,-5 6,-5 l14,0`, { stroke: C.muted, w: 2.5 })).join('');
  const body = panel(30, 110, 840, 420) + core + turns + clips +
    wire([[250, cy + 52], [250, 470], [380, 470]], { w: 3 }) + wire([[549, cy + 52], [549, 470], [470, 470]], { w: 3 }) + sCell(400, 470) + sSwitch(450, 470) +
    t(400, 510, 'cell', { size: 15, anchor: 'middle', fill: C.muted }) + t(450, 510, 'switch', { size: 15, anchor: 'middle', fill: C.muted }) +
    ln(300, 245, 300, 200, { w: 2 }) + t(300, 190, 'coil of insulated wire', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) +
    ln(600, cy, 600, 200, { w: 2 }) + ln(600, 200, 620, 200, { w: 2 }) + t(625, 196, 'soft iron core', { size: 17, weight: 700 }) +
    t(680, cy + 60, 'iron clips', { size: 15, anchor: 'middle', fill: C.muted }) + t(680, cy + 78, 'attracted', { size: 15, anchor: 'middle', fill: C.muted }) +
    card(30, 550, 270, 135, 'Insulation', 'Stops current taking a short cut between neighbouring turns.', { size: 16, tsize: 19, tfill: C.rust }) +
    card(315, 550, 270, 135, 'Soft iron core', 'Magnetised by induction, adds its own field; loses its magnetism when switched off.', { size: 16, tsize: 19, tfill: C.olive }) +
    card(600, 550, 270, 135, 'Stronger with', 'more turns, a larger current, and the iron core.', { size: 16, tsize: 19, tfill: C.tealDark }) +
    t(450, 718, 'Uses: scrap-metal cranes, relays, electric bells. Main advantage: it can be switched on and off.', { size: 16, anchor: 'middle', fill: C.muted });
  add('01-electromagnet-construction', svg(900, 745, 'Building an electromagnet', body),
    'A coil of insulated wire wound round a soft iron core, connected to a cell through a switch, attracting iron clips. Notes explain the insulation, the soft iron core, and that more turns and a larger current make it stronger.',
    'Insulated coil plus soft iron core: a magnet that switches on and off with the current.',
    '## Electromagnets (6.9P)');
}

// 02 Left-hand rule worked example
{
  const fieldArrows = [170, 260, 640, 730].map((x) => arrow(x, 225, x, 455, { w: 3, color: C.tealDark, marker: 'ahT' })).join('');
  const compass = (x, y) => arrow(x, y, x, y - 36, { w: 2 }) + t(x, y - 44, 'N', { size: 15, weight: 700, anchor: 'middle' }) + arrow(x, y, x, y + 36, { w: 2 }) + t(x, y + 54, 'S', { size: 15, weight: 700, anchor: 'middle' }) +
    arrow(x, y, x + 36, y, { w: 2 }) + t(x + 44, y + 6, 'E', { size: 15, weight: 700 }) + arrow(x, y, x - 36, y, { w: 2 }) + t(x - 56, y + 6, 'W', { size: 15, weight: 700 });
  const body = panel(30, 110, 840, 470) + t(450, 140, 'Seen from above', { size: 17, weight: 600, anchor: 'middle', fill: C.muted }) +
    rect(160, 160, 580, 50, { fill: C.rust, sw: 2.5 }) + t(450, 193, 'N', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' }) +
    rect(160, 470, 580, 50, { fill: C.tealDark, sw: 2.5 }) + t(450, 503, 'S', { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' }) +
    fieldArrows + t(450, 252, 'field: north → south', { size: 16, weight: 700, fill: C.tealDark, anchor: 'middle' }) +
    ln(130, 340, 770, 340, { w: 7 }) + arrow(278, 306, 410, 306, { w: 4, color: C.rust, marker: 'ahR' }) + t(278, 294, 'current: west → east', { size: 16, weight: 700, fill: C.rust }) +
    circ(450, 340, 26, { fill: C.cream, stroke: C.olive, sw: 3.5 }) + ln(432, 322, 468, 358, { c: C.olive, w: 3.5 }) + ln(432, 358, 468, 322, { c: C.olive, w: 3.5 }) +
    t(450, 400, 'force: vertically DOWN', { size: 18, weight: 700, fill: C.olive, anchor: 'middle' }) + t(450, 422, '(into the page, ⊗)', { size: 15, fill: C.olive, anchor: 'middle' }) +
    compass(90, 470) +
    panel(30, 600, 410, 170, C.cream, C.olive) + t(55, 636, 'Left hand', { size: 19, weight: 700 }) +
    tl(55, 666, ['First finger: Field → south', 'seCond finger: Current → east', 'thuMb: Motion (force) → down'], { size: 17 }, 28) +
    panel(460, 600, 410, 170) + t(485, 636, 'Change it', { size: 19, weight: 700 }) +
    tl(485, 666, ['Reverse the current: force up', 'Reverse the field: force up', 'Reverse both: force down again'], { size: 17 }, 28);
  add('02-left-hand-rule-example', svg(900, 790, 'Left-hand rule: which way is the force?', body),
    'A horizontal wire carries current from west to east between magnet poles, with the field pointing horizontally from north to south. By the left-hand rule the force on the wire is vertically downwards; reversing current or field makes it upwards.',
    'Field south, current east: the thumb, and the force, point straight down.',
    '## Worked examples');
}
