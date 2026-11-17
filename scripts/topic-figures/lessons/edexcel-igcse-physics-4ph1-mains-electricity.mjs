import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'edexcel-igcse-physics-4ph1-mains-electricity';
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

const LIVE = C.rust, NEU = C.blue, EARTH = C.grass;
const fuseSym = (x, y, { blown = false } = {}) => rect(x - 28, y - 11, 56, 22, { fill: C.cream, stroke: C.ink, sw: 2.5, rx: 3 }) + (blown ? ln(x - 28, y, x - 8, y, { w: 2.5 }) + ln(x + 8, y, x + 28, y, { w: 2.5 }) + path(`M${x - 6},${y - 6} l4,4 l-3,3 M${x + 6},${y + 6} l-4,-4 l3,-3`, { stroke: C.rust, w: 2 }) : ln(x - 28, y, x + 28, y, { w: 2.5 }));
const earthSym = (x, y, col = EARTH) => ln(x, y, x, y + 14, { c: col, w: 3.5 }) + ln(x - 18, y + 14, x + 18, y + 14, { c: col, w: 3.5 }) + ln(x - 11, y + 22, x + 11, y + 22, { c: col, w: 3 }) + ln(x - 5, y + 30, x + 5, y + 30, { c: col, w: 2.5 });
const heaterEl = (x, y, w) => path(`M${x},${y} ` + Array.from({ length: 8 }, (_, i) => `l${w / 16},-12 l${w / 16},12`).join(' '), { stroke: C.rust, w: 3 });
const flow = (x1, y1, x2, y2, col, mk) => arrow(x1, y1, x2, y2, { w: 3.5, color: col, marker: mk });

// 01 Live, neutral, earth
{
  const cx = 560, top = 170, bot = 410;
  const body = panel(30, 110, 840, 400) +
    rect(cx, top, 260, bot - top, { fill: '#e3e6e6', stroke: C.ink, sw: 4, rx: 10 }) + t(cx + 130, top - 14, 'metal case', { size: 16, weight: 700, anchor: 'middle' }) +
    heaterEl(cx + 60, 290, 140) + t(cx + 130, 330, 'heating element', { size: 15, anchor: 'middle', fill: C.muted }) +
    wire([[90, 220], [cx + 60, 220], [cx + 60, 290]], { c: LIVE, w: 4 }) + fuseSym(330, 220) + t(330, 200, 'fuse', { size: 15, anchor: 'middle', weight: 600 }) +
    wire([[90, 360], [cx + 200, 360], [cx + 200, 290]], { c: NEU, w: 4 }) +
    wire([[cx, 260], [470, 260], [470, 395]], { c: EARTH, w: 4 }) + dot(cx, 260, 6, EARTH) + earthSym(470, 395) +
    t(70, 226, 'live', { size: 17, weight: 700, fill: LIVE, anchor: 'end' }) + t(70, 366, 'neutral', { size: 17, weight: 700, fill: NEU, anchor: 'end' }) + t(495, 418, 'earth', { size: 17, weight: 700, fill: EARTH }) +
    flow(150, 205, 230, 205, LIVE, 'ahR') + flow(230, 377, 150, 377, NEU, 'ah') +
    t(190, 196, 'current in', { size: 15, fill: LIVE, anchor: 'middle', weight: 600 }) + t(190, 400, 'current back', { size: 15, fill: NEU, anchor: 'middle', weight: 600 }) +
    t(380, 300, 'no current', { size: 15, fill: EARTH, weight: 600, anchor: 'end' }) + t(380, 318, 'when working', { size: 15, fill: EARTH, weight: 600, anchor: 'end' }) +
    tl(55, 470, ['Live: carries the alternating voltage.   Neutral: completes the circuit, close to 0 V.', 'Earth: connects a metal case to the ground.'].map((s) => s), { size: 16 }, 24) +
    panel(30, 525, 840, 60, C.cream, C.olive) + t(450, 562, 'The danger: a large current through a person, e.g. if the live wire touches something they hold.', { size: 16, weight: 600, anchor: 'middle' });
  add('01-live-neutral-earth', svg(900, 605, 'How an appliance connects to the mains', body),
    'An appliance with a metal case. Current flows in through the live wire, which contains the fuse, through the heating element and back through the neutral wire. The earth wire joins the metal case to the ground and carries no current in normal use.',
    'Live in, neutral back; the earth wire carries current only when there is a fault.',
    '## How appliances are connected');
}

// 02 Earthing in a fault
{
  const step = (x, n, title, art, note) => panel(x, 110, 270, 420) + badge(x + 28, 140, 16, n, n === '3' ? C.mustard : C.cream) + t(x + 52, 146, title, { size: 17, weight: 700 }) + art + para(x + 18, 420, note, 236, { size: 15 }, 20);
  const box = (x) => rect(x + 130, 200, 110, 150, { fill: '#e3e6e6', stroke: C.ink, sw: 3.5, rx: 8 });
  const s1 = box(30) + wire([[50, 230], [215, 230]], { c: LIVE, w: 4 }) + fuseSym(110, 230) + path('M215,230 l12,0', { stroke: LIVE, w: 4 }) + circ(229, 230, 6, { fill: C.mustard, stroke: C.rust, sw: 2 }) +
    wire([[160, 300], [110, 300], [110, 370]], { c: EARTH, w: 4 }) + earthSym(110, 370) + t(185, 380, 'live touches', { size: 15, weight: 600, fill: LIVE, anchor: 'middle' }) + t(185, 398, 'the case', { size: 15, weight: 600, fill: LIVE, anchor: 'middle' });
  const s2 = box(315) + wire([[335, 230], [510, 230]], { c: LIVE, w: 6 }) + fuseSym(395, 230) + wire([[445, 300], [395, 300], [395, 370]], { c: EARTH, w: 6 }) + earthSym(395, 370) +
    flow(345, 214, 375, 214, LIVE, 'ahR') + flow(470, 250, 470, 290, LIVE, 'ahR') + flow(425, 286, 405, 286, EARTH, 'ahO') + flow(395, 320, 395, 355, EARTH, 'ahO') +
    t(500, 380, 'large current', { size: 15, weight: 600, fill: LIVE, anchor: 'end' }) + t(500, 398, 'to earth', { size: 15, weight: 600, fill: LIVE, anchor: 'end' });
  const s3 = box(600) + wire([[620, 230], [650, 230]], { c: LIVE, w: 4 }) + fuseSym(680, 230, { blown: true }) + wire([[710, 230], [800, 230]], { c: '#9aa5a5', w: 4 }) + wire([[730, 300], [680, 300], [680, 370]], { c: EARTH, w: 4 }) + earthSym(680, 370) +
    t(680, 205, 'fuse melts', { size: 15, weight: 700, fill: C.rust, anchor: 'middle' }) + t(785, 380, 'case safe', { size: 15, weight: 600, fill: C.tealDark, anchor: 'end' });
  const body = step(30, '1', 'Fault', s1, 'The live wire comes loose and touches the metal case.') +
    step(315, '2', 'Low-resistance path', s2, 'A large current flows through the case and earth wire to the ground, not through a person.') +
    step(600, '3', 'Supply cut off', s3, 'The large current blows the fuse (or trips the breaker), disconnecting the live wire.') +
    panel(30, 545, 840, 60, C.cream, C.olive) + t(450, 582, 'The earth wire does not "absorb" the current: it gives a low-resistance path, then the fuse blows.', { size: 16, weight: 600, anchor: 'middle' });
  add('02-earthing-in-a-fault', svg(900, 625, 'Earthing: what happens in a fault', body),
    'Three steps. The live wire touches the metal case. A large current flows through the case and the low-resistance earth wire to the ground rather than through a person. The large current melts the fuse, disconnecting the live wire.',
    'Earthing gives the fault current an easy path, and that large current blows the fuse.',
    '## The five safety features');
}

// 03 Fuse vs circuit breaker, double insulation, live side
{
  const dbl = panel(30, 110, 270, 360) + t(165, 146, 'Double insulation', { size: 18, weight: 700, anchor: 'middle' }) +
    rect(70, 175, 190, 130, { fill: C.tealLight, stroke: C.ink, sw: 3, rx: 22 }) + rect(110, 210, 110, 60, { fill: C.cream, stroke: C.olive, sw: 2, rx: 6 }) + t(165, 246, 'live parts', { size: 15, anchor: 'middle', weight: 600 }) + t(165, 325, 'insulating (plastic) case', { size: 15, anchor: 'middle', fill: C.muted }) +
    rect(140, 345, 50, 50, { fill: 'none', stroke: C.ink, sw: 3 }) + rect(152, 357, 26, 26, { fill: 'none', stroke: C.ink, sw: 3 }) +
    para(48, 425, 'No touchable metal part can become live: no earth wire needed.', 230, { size: 15 }, 20);
  const fu = panel(315, 110, 270, 360) + t(450, 146, 'Fuse', { size: 18, weight: 700, anchor: 'middle' }) +
    fuseSym(400, 210) + t(400, 245, 'normal', { size: 15, anchor: 'middle', fill: C.muted }) + fuseSym(500, 210, { blown: true }) + t(500, 245, 'melted', { size: 15, anchor: 'middle', fill: C.rust, weight: 600 }) +
    para(333, 290, 'Thin wire heats and melts when the current exceeds its rating. Must be replaced.', 236, { size: 15 }, 20);
  const cb = panel(600, 110, 270, 360) + t(735, 146, 'Circuit breaker', { size: 18, weight: 700, anchor: 'middle' }) +
    sSwitch(680, 210, { closed: true }) + t(680, 245, 'normal', { size: 15, anchor: 'middle', fill: C.muted }) + sSwitch(790, 210) + t(790, 245, 'tripped', { size: 15, anchor: 'middle', fill: C.rust, weight: 600 }) +
    para(618, 290, 'Automatic switch opens when the current is too large. Can be reset; generally faster.', 236, { size: 15 }, 20);
  const live = panel(30, 485, 840, 175) + t(55, 520, 'Fuses and circuit breakers go in the LIVE side', { size: 18, weight: 700 }) +
    wire([[60, 570], [400, 570]], { c: LIVE, w: 4 }) + fuseSym(200, 570, { blown: true }) + wire([[60, 630], [400, 630]], { c: NEU, w: 4 }) + rect(400, 552, 90, 96, { fill: '#e3e6e6', stroke: C.ink, sw: 3, rx: 6 }) +
    t(50, 575, 'L', { size: 16, weight: 700, fill: LIVE, anchor: 'end' }) + t(50, 635, 'N', { size: 16, weight: 700, fill: NEU, anchor: 'end' }) +
    para(520, 565, 'Once it breaks the circuit, the appliance is cut off from the high voltage. In the neutral it would stop the current but leave the appliance live.', 330, { size: 15 }, 20);
  add('03-fuse-breaker-double-insulation', svg(900, 680, 'Fuses, circuit breakers and double insulation', dbl + fu + cb + live),
    'Double insulation: live parts inside an insulating case, with the square-in-a-square symbol and no earth wire. A fuse melts when the current is too large and must be replaced; a circuit breaker trips open and can be reset. Both go in the live side.',
    'Each safety feature protects in its own way; fuses and breakers always go in the live wire.',
    '## The five safety features');
}

// 04 Heating effect
{
  let ions = ''; for (let i = 0; i < 8; i++) for (let j = 0; j < 3; j++) { const x = 120 + i * 85, y = 210 + j * 75; ions += path(`M${x - 22},${y} l-6,0 M${x + 22},${y} l6,0`, { stroke: C.rust, w: 2 }) + circ(x, y, 18, { fill: C.cream, stroke: C.olive, sw: 2.5 }) + t(x, y + 6, '+', { size: 18, weight: 700, anchor: 'middle', fill: C.olive }); }
  const el = (x, y) => circ(x, y, 8, { fill: C.tealLight, stroke: C.tealDark, sw: 2 });
  const path1 = path('M60,262 L150,262 L205,232 L262,262 L340,290 L400,262 L460,232 L540,262 L620,290 L700,262 L790,262', { stroke: C.tealDark, w: 2.5, extra: 'stroke-dasharray="6 5"' });
  const body = panel(30, 110, 840, 330) + rect(50, 170, 800, 210, { fill: '#e9edf1', stroke: C.ink, sw: 2.5, rx: 10 }) + ions + path1 + el(150, 262) + el(400, 262) + el(620, 290) +
    arrow(770, 262, 830, 262, { w: 3, color: C.tealDark, marker: 'ahT' }) + t(450, 160, 'metal resistor', { size: 16, weight: 700, anchor: 'middle' }) +
    t(205, 412, 'electron collides with an ion', { size: 15, weight: 600, fill: C.tealDark, anchor: 'middle' }) + t(650, 412, 'ions vibrate more: temperature rises', { size: 15, weight: 600, fill: C.rust, anchor: 'middle' }) +
    card(30, 455, 410, 170, 'Useful', 'Kettles, toasters, heaters, irons, immersion heaters, hairdryers, electric showers: elements of high-resistance wire. Also how a fuse works.', { fill: C.cream, edge: C.olive, tfill: C.olive, size: 15 }) +
    card(460, 455, 410, 170, 'Wasteful', 'Heating in cables, so cables are low-resistance copper. A cable carrying too large a current becomes hot.', { fill: '#f6e3d6', edge: C.rust, tfill: C.rust, size: 15 });
  add('04-why-current-heats-a-resistor', svg(900, 645, 'Why a current heats a resistor', body),
    'Electrons drifting through a metal resistor collide with the positive ions of the metal and transfer energy to them, so the ions vibrate more and the temperature rises. This is useful in heating elements and fuses and wasteful in cables.',
    'Electron–ion collisions make the ions vibrate more: electrical energy becomes thermal energy.',
    '## Why a current heats a resistor (2.3)');
}

// 05 Fuse selection on a number line
{
  const x0 = 80, sc = 55; // 1 A = 55 px
  const X = (a) => x0 + a * sc;
  const line = (y, cur, lab, pick) => {
    let s = ln(X(0), y, X(14), y, { w: 3 }) + [0, 5, 10].map((a) => ln(X(a), y, X(a), y + 8, { w: 2 }) + t(X(a), y + 28, `${a} A`, { size: 15, anchor: 'middle', fill: C.muted })).join('');
    s += [3, 5, 13].map((r) => { const ch = r === pick; return rect(X(r) - 26, y - 62, 52, 32, { fill: ch ? C.mustard : C.panel, stroke: ch ? C.olive : C.ink, sw: 2.5, rx: 6 }) + t(X(r), y - 40, `${r} A`, { size: 16, weight: 700, anchor: 'middle' }) + ln(X(r), y - 30, X(r), y, { w: 2, dash: '4 4', c: ch ? C.olive : C.ink }); }).join('');
    s += circ(X(cur), y, 8, { fill: C.rust, stroke: C.ink, sw: 2 }) + t(X(cur), y + 52, lab, { size: 16, weight: 700, fill: C.rust, anchor: 'middle' });
    return s;
  };
  const body = panel(30, 110, 840, 220) + t(55, 146, 'Hairdryer: 1.4 kW, 230 V', { size: 18, weight: 700 }) + t(845, 146, 'I = 1400 ÷ 230 = 6.1 A', { size: 18, weight: 700, anchor: 'end', fill: C.tealDark }) +
    line(240, 6.1, '6.1 A', 13) + t(845, 300, '3 A and 5 A would blow: choose 13 A', { size: 16, weight: 600, anchor: 'end' }) +
    panel(30, 345, 840, 220) + t(55, 381, 'Lamp: 60 W, 230 V', { size: 18, weight: 700 }) + t(845, 381, 'I = 60 ÷ 230 = 0.26 A', { size: 18, weight: 700, anchor: 'end', fill: C.tealDark }) +
    line(475, 0.26, '0.26 A', 3) + t(845, 535, 'choose 3 A, the smallest rating above 0.26 A', { size: 16, weight: 600, anchor: 'end' }) +
    panel(30, 580, 840, 82, C.cream, C.olive) + t(450, 614, 'Rule: the smallest rating ABOVE the normal current.', { size: 17, weight: 700, anchor: 'middle' }) +
    t(450, 642, 'Too high: a fault current might not blow it. Equal to the current: it blows in normal use.', { size: 16, anchor: 'middle' });
  add('05-fuse-selection', svg(900, 680, 'Choosing the right fuse', body),
    'Two number lines with 3 A, 5 A and 13 A fuses. A 1.4 kW, 230 V hairdryer takes 6.1 A, so the 13 A fuse is chosen. A 60 W, 230 V lamp takes 0.26 A, so the 3 A fuse is chosen.',
    'Work out I = P ÷ V, then pick the smallest fuse rating above it.',
    '## Power and fuse selection (2.4)');
}

// 06 Energy worked example
{
  const body = panel(30, 110, 300, 250) + rect(80, 160, 200, 120, { fill: '#e3e6e6', stroke: C.ink, sw: 3, rx: 10 }) + heaterEl(110, 225, 140) + t(180, 300, 'electric heater', { size: 16, weight: 700, anchor: 'middle' }) +
    t(180, 330, '8.7 A from 230 V, 2.0 hours', { size: 15, anchor: 'middle', fill: C.muted }) +
    steps(350, 110, 520, [
      ['Convert the time first', { weight: 700 }],
      ['t = 2.0 × 3600 = 7200 s'],
      ['E = I × V × t', { weight: 700 }],
      ['= 8.7 × 230 × 7200', { dx: 22 }],
      ['= 14 407 200 J', { dx: 22 }],
      ['≈ 1.4 × 10⁷ J (14 MJ)', { dx: 22, weight: 700, fill: C.tealDark }],
    ], { lh: 38, size: 19 }) +
    t(450, 400, 'E in J, I in A, V in V, t in s. Give large answers in standard form or MJ.', { size: 16, anchor: 'middle', fill: C.muted });
  add('06-energy-worked-example', svg(900, 425, 'Worked example: energy from the mains', body),
    'A heater takes 8.7 A from 230 V for 2.0 hours. The time is 7200 s, so E = 8.7 × 230 × 7200 = 14 407 200 J, about 1.4 × 10⁷ J.',
    'Convert hours to seconds, then E = I × V × t.',
    '## Energy transferred (2.5)');
}

// 07 a.c. vs d.c.
{
  const g = (y, title, col, fn, note) => {
    const gx = 120, gy = y + 128, w = 620;
    let d = ''; for (let i = 0; i <= w; i += 2) d += `${i ? 'L' : 'M'}${gx + i},${(gy - fn(i / w) * 70).toFixed(1)} `;
    return panel(30, y, 840, 210) + t(55, y + 34, title, { size: 18, weight: 700, fill: col }) +
      arrow(gx, gy + 72, gx, gy - 78, { w: 2.5 }) + arrow(gx, gy, gx + w + 30, gy, { w: 2.5 }) + t(gx + w + 30, gy + 26, 'time', { size: 16, weight: 600, anchor: 'end' }) + t(gx - 12, gy + 6, '0', { size: 16, anchor: 'end' }) +
      `<text x="${gx - 40}" y="${gy}" font-size="16" font-weight="600" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 ${gx - 40} ${gy})">voltage</text>` +
      path(d, { stroke: col, w: 4 }) + t(855, y + 34, note, { size: 15, anchor: 'end', fill: C.muted });
  };
  const body = g(110, 'd.c. from a cell or battery: one direction only', C.tealDark, () => 0.75, 'horizontal line') +
    g(335, 'a.c. from the mains: repeatedly reverses direction', C.rust, (u) => Math.sin(2 * Math.PI * 2.5 * u) * 0.9, 'positive, negative, positive ...') +
    panel(30, 560, 840, 60, C.cream, C.olive) + t(450, 597, 'a.c. changes direction continually; d.c. flows in one direction only.', { size: 17, weight: 700, anchor: 'middle' });
  add('07-ac-and-dc', svg(900, 640, 'Direct and alternating current', body),
    'Two voltage–time graphs. d.c. from a cell or battery is a horizontal line. a.c. from the mains is a wave that goes positive, then negative, then positive again.',
    'd.c. flows one way; mains a.c. keeps reversing direction.',
    '## a.c. and d.c. (2.6)');
}
