import { C, svg, panel, t as t0, tl as tl0, arrow, path, badge as badge0 } from '../style.mjs';

// house minimum text size is 15: clamp every label drawn in this file
const MIN = 15;
const t = (x, y, s, o = {}) => t0(x, y, s, { ...o, size: Math.max(MIN, o.size || 18) });
const tl = (x, y, lines, opts = {}, lh = Math.max(MIN, opts.size || 18) * 1.3) => lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');
const badge = (cx, cy, r, label, fill = C.mustard) => { const sz = Math.max(MIN, r); return `<circle cx="${cx}" cy="${cy}" r="${Math.max(r, sz * 0.85)}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + sz * 0.36, label, { size: sz, weight: 700, anchor: 'middle' }); };

export const slug = 'cambridge-igcse-environmental-management-0680-marine-aquaculture';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// ---- local helpers (kept in this file; style.mjs is shared) ----
const esc = (s) => String(s).replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, '&amp;').replace(/</g, '&lt;');
// wrap text to a pixel width (approximate Inter metrics)
const wrap = (s, w, size = 17, bold = false) => {
  size = Math.max(MIN, size);
  const max = Math.max(4, Math.floor(w / (size * (bold ? 0.57 : 0.53))));
  const out = [''];
  for (const word of String(s).split(' ')) {
    const cur = out[out.length - 1];
    if (cur && (cur + ' ' + word).length > max) out.push(word); else out[out.length - 1] = cur ? cur + ' ' + word : word;
  }
  return out;
};
// text block wrapped to width; returns {svg, h}
const para = (x, y, s, w, opts = {}) => {
  const size = opts.size || 17, lh = opts.lh || Math.round(size * 1.32);
  const lines = wrap(s, w, size, (opts.weight || 400) >= 600);
  return { svg: tl(x, y, lines, opts, lh), h: lines.length * lh, n: lines.length };
};
// card: panel with bold title and wrapped body; body text starts below title
const card = (x, y, w, h, title, body, o = {}) => {
  const fill = o.fill || C.panel, edge = o.edge || C.panelEdge, ts = o.ts || 20, bs = o.bs || 16.5, pad = o.pad || 18;
  const anchor = o.center ? 'middle' : 'start', tx = o.center ? x + w / 2 : x + pad;
  let s = panel(x, y, w, h, fill, edge);
  let cy = y + pad + ts * 0.85 + (o.top || 0);
  if (title) { const tt = wrap(title, w - 2 * pad, ts, true); s += tl(tx, cy, tt, { size: ts, weight: 700, anchor, fill: o.tfill || C.ink }, ts * 1.25); cy += (tt.length - 1) * ts * 1.25 + bs * 1.55; }
  if (body) { const bl = Array.isArray(body) ? body : wrap(body, w - 2 * pad, bs); s += tl(tx, cy, bl, { size: bs, anchor, fill: o.bfill || C.muted }, bs * 1.32); }
  return s;
};
const pill = (x, y, w, h, label, o = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${o.fill || C.cream}" stroke="${o.edge || C.olive}" stroke-width="2.5"/>` +
  t(x + w / 2, y + h / 2 + (o.size || 17) * 0.36, label, { size: o.size || 17, weight: o.weight || 700, anchor: 'middle', fill: o.color || C.ink });
const rrect = (x, y, w, h, fill, edge = C.ink, sw = 2.5, rx = 10) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const circ = (cx, cy, r, fill, edge = C.ink, sw = 2.5) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const line = (x1, y1, x2, y2, o = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.color || C.ink}" stroke-width="${o.w || 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const sun = (cx, cy, r = 22) => { let s = ''; for (let i = 0; i < 8; i++) { const a = (i * Math.PI) / 4; s += line(cx + Math.cos(a) * (r + 6), cy + Math.sin(a) * (r + 6), cx + Math.cos(a) * (r + 15), cy + Math.sin(a) * (r + 15), { color: C.olive, w: 3 }); } return s + circ(cx, cy, r, C.mustard, C.olive, 2.5); };
const cloud = (cx, cy, s = 1, fill = '#ffffff') => `<path d="M${cx - 60 * s},${cy + 20 * s} Q${cx - 80 * s},${cy + 20 * s} ${cx - 78 * s},${cy} Q${cx - 76 * s},${cy - 22 * s} ${cx - 50 * s},${cy - 18 * s} Q${cx - 40 * s},${cy - 48 * s} ${cx - 5 * s},${cy - 42 * s} Q${cx + 25 * s},${cy - 60 * s} ${cx + 45 * s},${cy - 25 * s} Q${cx + 80 * s},${cy - 25 * s} ${cx + 78 * s},${cy + 2 * s} Q${cx + 80 * s},${cy + 20 * s} ${cx + 60 * s},${cy + 20 * s} Z" fill="${fill}" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
const rain = (x, y, n = 4, gap = 18, len = 18, color = C.blue) => { let s = ''; for (let i = 0; i < n; i++) s += line(x + i * gap, y + (i % 2) * 8, x + i * gap - 5, y + (i % 2) * 8 + len, { color, w: 2.5 }); return s; };
const house = (x, y, s = 1, roof = C.rust) => `<rect x="${x}" y="${y}" width="${30 * s}" height="${24 * s}" fill="#ffffff" stroke="${C.ink}" stroke-width="2.2"/><path d="M${x - 3 * s},${y} L${x + 15 * s},${y - 13 * s} L${x + 33 * s},${y} Z" fill="${roof}" stroke="${C.ink}" stroke-width="2"/>`;
const tree = (x, y, s = 1, fill = C.grass) => `<rect x="${x - 3 * s}" y="${y - 18 * s}" width="${6 * s}" height="${18 * s}" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="1.8"/><circle cx="${x}" cy="${y - 30 * s}" r="${16 * s}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
const person = (x, y, s = 1, fill = C.tealDark) => `<circle cx="${x}" cy="${y - 34 * s}" r="${7 * s}" fill="${fill}"/><path d="M${x - 9 * s},${y} L${x - 9 * s},${y - 16 * s} Q${x - 9 * s},${y - 25 * s} ${x},${y - 25 * s} Q${x + 9 * s},${y - 25 * s} ${x + 9 * s},${y - 16 * s} L${x + 9 * s},${y} Z" fill="${fill}"/>`;
const factory = (x, y, s = 1) => `<path d="M${x},${y} L${x},${y - 30 * s} L${x + 20 * s},${y - 42 * s} L${x + 20 * s},${y - 30 * s} L${x + 40 * s},${y - 42 * s} L${x + 40 * s},${y - 30 * s} L${x + 60 * s},${y - 42 * s} L${x + 60 * s},${y} Z" fill="#ffffff" stroke="${C.ink}" stroke-width="2.2" stroke-linejoin="round"/><rect x="${x + 45 * s}" y="${y - 66 * s}" width="${9 * s}" height="${30 * s}" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
// vertical flow of boxes with arrows between; items: [title, body]
const flowDown = (x, y, w, hs, gap, items, o = {}) => {
  let s = '', cy = y;
  items.forEach((it, i) => {
    const h = Array.isArray(hs) ? hs[i] : hs;
    s += card(x, cy, w, h, it[0], it[1], { ...o, ...(it[2] || {}) });
    if (i < items.length - 1) s += arrow(x + w / 2, cy + h + 3, x + w / 2, cy + h + gap - 4, { w: 3.5 });
    cy += h + gap;
  });
  return s;
};
// horizontal flow of boxes
const flowRight = (x, y, ws, h, gap, items, o = {}) => {
  let s = '', cx = x;
  items.forEach((it, i) => {
    const w = Array.isArray(ws) ? ws[i] : ws;
    s += card(cx, y, w, h, it[0], it[1], { ...o, ...(it[2] || {}) });
    if (i < items.length - 1) s += arrow(cx + w + 3, y + h / 2, cx + w + gap - 4, y + h / 2, { w: 3.5 });
    cx += w + gap;
  });
  return s;
};
// label with a soft white backing so it reads over lines
const tag = (x, y, s, o = {}) => { const size = Math.max(MIN, o.size || 15), w = String(s).length * size * ((o.weight || 700) >= 600 ? 0.6 : 0.55) + 12; const x0 = o.anchor === 'middle' ? x - w / 2 : o.anchor === 'end' ? x - w + 6 : x - 6; return `<rect x="${x0}" y="${y - size * 0.95}" width="${w}" height="${size * 1.35}" rx="5" fill="${o.bg || '#ffffff'}" opacity="${o.op || 0.92}"/>` + t(x, y, s, { size, weight: o.weight || 700, anchor: o.anchor || 'start', fill: o.fill || C.ink }); };
// bulleted list, each item wrapped to width w; returns {svg, h}
const bullets = (x, y, items, w, o = {}) => {
  const size = Math.max(MIN, o.size || 16.5), lh = o.lh || Math.round(size * 1.3), gap = o.gap ?? 8; let s = '', yy = y;
  for (const it of items) { const ls = wrap(it, w - 18, size); s += t(x, yy, o.mark || '•', { size: o.mark ? size + 3 : size, fill: o.bullet || o.fill || C.ink, weight: 700 }) + tl(x + 16, yy, ls, { size, fill: o.fill || C.ink }, lh); yy += ls.length * lh + gap; }
  return { svg: s, h: yy - y };
};
const turbine = (x, y, s = 1) => `<line x1="${x}" y1="${y}" x2="${x}" y2="${y - 60 * s}" stroke="${C.ink}" stroke-width="${3 * s}"/>` + [0, 120, 240].map((a) => { const r = (a - 90) * Math.PI / 180; return `<line x1="${x}" y1="${y - 60 * s}" x2="${x + Math.cos(r) * 30 * s}" y2="${y - 60 * s + Math.sin(r) * 30 * s}" stroke="${C.ink}" stroke-width="${3.5 * s}" stroke-linecap="round"/>`; }).join('') + `<circle cx="${x}" cy="${y - 60 * s}" r="${4 * s}" fill="${C.mustard}" stroke="${C.ink}" stroke-width="1.5"/>`;
// curved or multi-point arrow along an SVG path
const carrow = (d, o = {}) => `<path d="${d}" fill="none" stroke="${o.color || C.ink}" stroke-width="${o.w || 3.5}" stroke-linejoin="round" stroke-linecap="round" marker-end="url(#${o.marker || 'ah'})"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
// horizontal bar chart helper: axis box with ticks; returns svg
const hbar = (x, y, w, h, fill, edge = C.ink) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${edge}" stroke-width="2"/>`;
// ---- end helpers ----

const H2 = {
  exp: '## Exploitation of marine species (3.4.1)',
  def: '## Defining marine aquaculture (3.4.2)',
  imp: '## Impacts of marine aquaculture (3.4.3)',
  man: '## Managing the harvest of marine species (3.4.4)',
  quota: '## Worked example: a quota calculation',
};
const fish = (x, y, s = 1, fill = C.blue, dir = 1) => `<path d="M${x - 16 * s * dir},${y} Q${x},${y - 10 * s} ${x + 14 * s * dir},${y} Q${x},${y + 10 * s} ${x - 16 * s * dir},${y} Z M${x + 12 * s * dir},${y} L${x + 24 * s * dir},${y - 8 * s} L${x + 24 * s * dir},${y + 8 * s} Z" fill="${fill}" stroke="${C.ink}" stroke-width="1.6" stroke-linejoin="round"/>`;
const wave = (x1, x2, y, col = C.tealDark) => { let d = `M${x1},${y}`; for (let x = x1; x < x2; x += 40) d += ` q10,-7 20,0 q10,7 20,0`; return path(d, { stroke: col, w: 2.5 }); };

// 01 How overfishing leads to collapse
{
  let b = '';
  b += panel(30, 110, 300, 470, C.cream, C.olive);
  b += t(180, 148, 'Causes', { size: 21, weight: 700, anchor: 'middle', fill: C.olive });
  const causes = ['rising demand from a growing population', 'larger, more powerful boats', 'sonar to locate shoals', 'huge nets'];
  causes.forEach((c, i) => { b += rrect(50, 170 + i * 98, 260, 82, '#ffffff', C.olive, 2, 10); b += tl(180, 170 + i * 98 + (wrap(c, 230, 17).length > 1 ? 36 : 47), wrap(c, 230, 17), { size: 17, anchor: 'middle' }, 22); });
  b += arrow(334, 345, 372, 345, { w: 6 });
  const steps = [['Fish caught faster than the population replaces itself', C.panel], ['Too many breeding adults removed', C.panel], ['Fewer young produced', C.panel], ['Catches fall year after year', '#fbf1ea'], ['Stock can collapse', C.rust]];
  steps.forEach(([s, f], i) => {
    const y = 110 + i * 96;
    b += rrect(380, y, 490, 76, f, i >= 3 ? C.rust : C.panelEdge, 2.5, 12);
    { const L = wrap(s, 440, 18, true); b += tl(625, y + (L.length > 1 ? 32 : 45), L, { size: 18, weight: 700, anchor: 'middle', fill: i === 4 ? '#ffffff' : C.ink }, 23); }
    if (i < 4) b += arrow(625, y + 79, 625, y + 92, { w: 3.5 });
  });
  b += t(450, 620, 'Overharvesting is the same idea for other marine species, such as shellfish or seaweeds.', { size: 16.5, anchor: 'middle', fill: C.muted });
  add('01-overfishing-collapse',
    svg(900, 645, 'How overfishing leads to collapse', b),
    'Rising demand, larger boats, sonar and huge nets let fishers catch fish faster than the population replaces itself. Too many breeding adults are removed, fewer young are produced, catches fall year after year and the stock can collapse.',
    'Remove too many breeding adults and fewer young replace them, until the stock collapses.',
    H2.exp);
}

// 02 Target species and bycatch
{
  let b = '';
  b += `<rect x="30" y="110" width="840" height="400" rx="14" fill="${C.tealLight}"/>` + wave(30, 870, 130);
  // net
  b += `<path d="M120,170 L780,170 L650,470 L250,470 Z" fill="#ffffff" fill-opacity="0.35" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  for (let i = 1; i < 8; i++) { const x1 = 120 + i * 82.5, x2 = 250 + i * 50; b += line(x1, 170, x2, 470, { color: C.muted, w: 1.5 }); }
  for (let j = 1; j < 5; j++) { const y = 170 + j * 60, f = j / 5; b += line(120 + 130 * f, y, 780 - 130 * f, y, { color: C.muted, w: 1.5 }); }
  // target fish
  [[250, 230], [330, 260], [420, 225], [300, 320], [390, 330], [470, 290]].forEach(([x, y]) => (b += fish(x, y, 1.6, C.blue)));
  b += tag(360, 390, 'target species', { size: 18, anchor: 'middle', fill: C.blue });
  // bycatch
  b += fish(580, 230, 0.9, C.rock) + fish(620, 255, 0.9, C.rock);
  b += `<ellipse cx="610" cy="330" rx="34" ry="24" fill="${C.grass}" stroke="${C.ink}" stroke-width="2"/>` + circ(650, 322, 10, C.grass);
  b += `<path d="M520,400 Q555,375 600,392 L620,382 L612,400 Q560,418 520,400 Z" fill="${C.muted}" stroke="${C.ink}" stroke-width="2"/>`;
  b += tag(615, 445, 'bycatch', { size: 18, anchor: 'middle', fill: C.rust });
  b += t(860, 160, 'schematic', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  b += card(30, 530, 410, 160, 'Target species', 'The ones fishers intend to catch. The largest, oldest fish go first, so average size falls and more fish are caught before they have bred.', { fill: '#eef5f4', edge: C.blue, tfill: C.blue, bfill: C.ink, ts: 20, bs: 17 });
  b += card(460, 530, 410, 160, 'Bycatch', 'Caught unintentionally: non-target fish, juveniles, turtles, dolphins, sharks and seabirds. Much is thrown back dead or dying, so unfished species decline.', { fill: '#fbf1ea', edge: C.rust, tfill: C.rust, bfill: C.ink, ts: 20, bs: 17 });
  add('02-target-bycatch',
    svg(900, 715, 'Target species and bycatch', b),
    'A net holds the target fish and bycatch such as small non-target fish, a turtle and a dolphin. Heavy fishing removes the largest, oldest target fish, so average size falls; bycatch of non-target fish, juveniles, turtles, dolphins, sharks and seabirds is often thrown back dead or dying.',
    'Fishing harms both the target species and the bycatch caught alongside it.',
    H2.exp);
}

// 03 Food chain effects
{
  let b = '';
  const chain = (x, head, levels, note) => {
    let s = panel(x, 110, 410, 530) + t(x + 205, 148, head, { size: 20, weight: 700, anchor: 'middle' }) + t(x + 205, 174, 'arrows point from food to feeder', { size: 16, anchor: 'middle', fill: C.muted });
    levels.forEach(([lab, sub, eff, col, hit], i) => {
      const y = 196 + i * 146;
      s += rrect(x + 30, y, 350, 106, hit ? C.cream : '#ffffff', col, 3, 12);
      s += t(x + 50, y + 34, lab, { size: 18.5, weight: 700 }) + (sub ? t(x + 50, y + 60, sub, { size: 16, fill: C.muted }) : '');
      s += t(x + 50, y + (sub ? 88 : 66), eff, { size: 17, weight: 700, fill: col });
      if (i < levels.length - 1) s += arrow(x + 205, y + 144, x + 205, y + 112, { w: 3.5 });
    });
    if (note) s += tl(x + 205, 520, note, { size: 16.5, anchor: 'middle', fill: C.muted, italic: true }, 22);
    return s;
  };
  b += chain(30, 'A prey fish is overfished', [['Predators', 'seabirds, seals, larger fish', '↓ less food, numbers fall', C.rust, false], ['Prey fish', '', '↓ overfished', C.rust, true]], ['fewer prey means', 'fewer predators']);
  b += chain(460, 'A predator is overfished', [['Predator fish', '', '↓ overfished', C.rust, true], ['Its prey', '', '↑ can increase', C.tealDark, false], ['The prey’s own food', '', '↓ may be overgrazed', C.rust, false]]);
  b += panel(30, 660, 840, 70, C.cream, C.olive) + t(450, 702, 'Species are linked in food webs, so effects spread beyond the fished species.', { size: 18, weight: 700, anchor: 'middle' });
  add('03-food-chain-effects',
    svg(900, 755, 'Overfishing ripples through food chains', b),
    'Two food chains. When a prey fish is overfished, its predators such as seabirds, seals and larger fish have less food and decline. When a predator is overfished, its prey can increase and may overgraze their own food.',
    'Overfishing one species changes the numbers of the species above and below it.',
    H2.exp);
}

// 04 Three forms of marine aquaculture
{
  let b = '';
  const sy = 240, by = 470;
  b += `<rect x="30" y="${sy}" width="840" height="${by - sy}" fill="${C.teal}"/>` + `<path d="M30,${by} L870,${by} L870,${by + 40} L30,${by + 40} Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2.5"/>`;
  // coast with ponds on the left
  b += `<path d="M30,180 L300,180 L330,${sy} L330,${by} L30,${by} Z" fill="#d8e3c6" stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
  b += `<rect x="55" y="198" width="100" height="40" rx="6" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/><rect x="175" y="198" width="100" height="40" rx="6" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += path('M95,222 q8,-10 16,0 q-4,6 -16,0 M215,222 q8,-10 16,0 q-4,6 -16,0', { stroke: C.rust, w: 3 });
  // cages
  for (const cx of [430, 540]) { b += `<rect x="${cx - 45}" y="${sy - 8}" width="90" height="14" rx="6" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>` + `<path d="M${cx - 42},${sy + 6} L${cx - 42},${sy + 130} Q${cx},${sy + 150} ${cx + 42},${sy + 130} L${cx + 42},${sy + 6}" fill="#ffffff" fill-opacity="0.25" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="6 4"/>`; b += fish(cx - 10, sy + 60, 1, C.blue) + fish(cx + 12, sy + 100, 1, C.blue, -1); }
  // seaweed lines
  b += line(660, sy - 2, 850, sy - 2, { w: 3 }) + circ(660, sy - 6, 9, C.mustard) + circ(850, sy - 6, 9, C.mustard);
  for (let x = 680; x <= 830; x += 30) b += path(`M${x},${sy} q-10,30 0,60 q10,30 0,60`, { stroke: C.grass, w: 6 });
  b += line(755, sy + 125, 755, by, { w: 2, dash: '6 5' });
  b += wave(330, 870, sy);
  b += t(165, 140, 'Crustaceans', { size: 20, weight: 700, anchor: 'middle' }) + t(165, 164, 'e.g. shrimps or prawns in coastal ponds', { size: 15.5, anchor: 'middle', fill: C.muted });
  b += t(485, 140, 'Fish', { size: 20, weight: 700, anchor: 'middle' }) + t(485, 164, 'floating net cages', { size: 15.5, anchor: 'middle', fill: C.muted }) + t(485, 184, 'in sheltered bays', { size: 15.5, anchor: 'middle', fill: C.muted });
  b += t(755, 140, 'Seaweeds', { size: 20, weight: 700, anchor: 'middle' }) + t(755, 164, 'grown on ropes or', { size: 15.5, anchor: 'middle', fill: C.muted }) + t(755, 184, 'lines in the sea', { size: 15.5, anchor: 'middle', fill: C.muted });
  b += t(860, by + 28, 'schematic, not to scale', { size: 15, anchor: 'end', fill: C.ink, italic: true });
  b += panel(30, 530, 840, 150, C.cream, C.olive);
  b += t(60, 568, 'Marine aquaculture = farming marine species in CAPTIVITY', { size: 20, weight: 700 });
  b += t(60, 596, 'limited to fish, crustaceans and seaweeds. In captivity they are:', { size: 17 });
  ['contained', 'fed if necessary', 'protected from predators', 'harvested at market size'].forEach((s, i) => (b += pill(60 + [0, 134, 308, 537][i], 614, [120, 160, 215, 230][i], 44, s, { fill: '#ffffff', size: 15.5 })));
  add('04-three-forms',
    svg(900, 705, 'Three forms of marine aquaculture', b),
    'A coastal cross-section, not to scale. Crustaceans such as shrimps or prawns are raised in coastal ponds; fish are kept in floating net cages in a sheltered bay; seaweeds are grown on ropes or lines in the sea. In captivity the organisms are contained, fed if necessary, protected from predators and harvested at market size.',
    'Marine aquaculture farms fish, crustaceans and seaweeds in captivity.',
    H2.def);
}

// 05 Eight impacts around a fish cage
{
  let b = '';
  b += t(450, 128, 'Two benefits', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += pill(40, 144, 400, 46, '+ less exploitation of wild fisheries', { fill: C.tealLight, edge: C.tealDark, size: 16.5 }) + pill(460, 144, 400, 46, '+ more food for people, year-round', { fill: C.tealLight, edge: C.tealDark, size: 16.5 });
  const sy = 270, by = 490;
  b += `<rect x="30" y="${sy}" width="840" height="${by - sy}" fill="${C.teal}"/>` + `<rect x="30" y="${by}" width="840" height="34" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>` + wave(30, 870, sy);
  b += t(450, 225, 'Six concerns', { size: 19, weight: 700, anchor: 'middle', fill: C.rust });
  // cage
  const cx = 400;
  b += `<rect x="${cx - 110}" y="${sy - 9}" width="220" height="16" rx="7" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>` + `<path d="M${cx - 105},${sy + 7} L${cx - 105},${sy + 140} Q${cx},${sy + 165} ${cx + 105},${sy + 140} L${cx + 105},${sy + 7}" fill="#ffffff" fill-opacity="0.3" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="6 4"/>`;
  [[340, 320], [390, 345], [450, 315], [360, 380], [430, 385], [400, 300]].forEach(([x, y], i) => (b += fish(x, y, 1.1, C.blue, i % 2 ? -1 : 1)));
  for (let i = 0; i < 6; i++) b += circ(372 + i * 9, 332 + (i % 2) * 8, 2.5, C.rust, C.rust, 1);
  // tear and escapee
  b += path(`M${cx + 105},${sy + 70} l12,8 l-8,10 l10,8`, { stroke: C.rust, w: 3.5 }) + fish(cx + 165, sy + 92, 1.1, C.blue) + fish(cx + 220, sy + 118, 1.1, C.rock);
  // waste falling
  for (let i = 0; i < 9; i++) b += circ(cx - 70 + i * 18, sy + 175 + (i % 3) * 12, 3.5, C.olive, C.olive, 1);
  b += `<ellipse cx="${cx}" cy="${by + 2}" rx="120" ry="10" fill="${C.olive}" opacity="0.6"/>`;
  // feed boat
  b += `<path d="M640,${sy - 6} L800,${sy - 6} L780,${sy + 18} L660,${sy + 18} Z" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/><rect x="700" y="${sy - 34}" width="50" height="28" fill="#ffffff" stroke="${C.ink}" stroke-width="2.2"/><rect x="752" y="${sy - 28}" width="10" height="22" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="1.8"/>`;
  // badges
  const bd = [[1, cx + 140, sy + 55], [2, cx - 20, sy + 330 - 250 + 30 - 60 + 60], [3, cx - 160, sy + 160], [4, cx + 120, by - 10], [5, 765, sy - 55], [6, 625, sy - 40]];
  bd[1] = [2, cx - 140, sy + 58];
  bd[5] = [6, 600, sy - 40];
  b += line(cx - 123, sy + 58, cx - 32, sy + 62, { w: 2, dash: '4 4' });
  b += `<path d="M660,${sy - 6} L662,${sy - 26} L688,${sy - 26} L690,${sy - 6} Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="2"/>` + t(675, sy - 34, 'feed', { size: 15, weight: 700, anchor: 'middle' });
  bd.forEach(([n, x, y]) => (b += badge(x, y, 17, String(n), C.mustard)));
  b += fish(cx - 200, sy + 175, 1.1, C.rock, -1) + fish(cx - 150, sy + 200, 1.1, C.rock);
  const key = [
    ['Risk of escape', 'escaped fish compete with wild fish and may breed with them'],
    ['Risk of disease', 'close packing spreads disease and parasites, which can pass to wild fish'],
    ['Local food webs', 'waste feed attracts some species; cages and chemicals change the habitat'],
    ['Nutrient enrichment', 'uneaten feed and faeces: algal blooms and low oxygen below cages'],
    ['Energy usage', 'pumps, aeration, boats, feed making, refrigerated transport'],
    ['Food for farmed fish', 'pellets made partly from wild-caught fish'],
  ];
  key.forEach(([h, d], i) => {
    const x = 30 + (i % 2) * 430, y = 545 + Math.floor(i / 2) * 92;
    b += badge(x + 20, y + 22, 16, String(i + 1), C.mustard) + t(x + 46, y + 28, h, { size: 18, weight: 700 }) + tl(x + 46, y + 52, wrap(d, 370, 15.5), { size: 15.5, fill: C.muted }, 19);
  });
  b += panel(30, 830, 840, 70, '#eef5f4', C.tealDark);
  b += t(450, 860, 'Contrast: seaweeds need no feed and take up nutrients as they grow,', { size: 17, weight: 600, anchor: 'middle' }) + t(450, 884, 'so seaweed farms avoid several of these concerns.', { size: 17, weight: 600, anchor: 'middle' });
  add('05-eight-impacts',
    svg(900, 920, 'Eight impacts of marine aquaculture', b),
    'A cross-section of a floating fish cage. Two benefits: less exploitation of wild fisheries and more food. Six numbered concerns: fish escaping through a torn net, disease spreading among crowded fish, wild fish attracted to waste feed, feed and faeces enriching the water below, energy used by boats and pumps, and feed pellets made partly from wild-caught fish. Seaweed farms need no feed and avoid several concerns.',
    'Aquaculture brings two benefits and six concerns; seaweed farming avoids several of the concerns.',
    H2.imp);
}

// 06 Management strategies grouped
{
  let b = '';
  const rows = [
    ['Gear', 'how caught', C.tealLight, C.tealDark, [['Limits on boat and net size', 'less caught each trip'], ['Larger mesh size', 'young fish swim through and breed'], ['Pole and line', 'one at a time: little bycatch']]],
    ['Amount', 'how much', C.cream, C.olive, [['Quotas', 'maximum mass of a species per year, shared between countries or boats']]],
    ['Time', 'when', '#eef5f4', C.tealDark, [['Closed seasons', 'no fishing, usually in the breeding season'], ['Limited fishing days', 'cuts total fishing effort']]],
    ['Place', 'where', '#fbf6e2', C.olive, [['Protected areas', 'fishing banned or restricted; populations recover and spill over']]],
    ['Rules', 'laws, agreements', '#fbf1ea', C.rust, [['Conservation laws', 'protect species, ban damaging methods; fines'], ['International agreements', 'shared limits, then implementation and monitoring']]],
  ];
  let y = 110;
  for (const [g1, g2, fill, edge, items] of rows) {
    const rh = items.length === 3 ? 108 : 86;
    b += `<rect x="30" y="${y}" width="150" height="${rh}" rx="12" fill="${edge}"/>` + t(105, y + rh / 2 - 2, g1, { size: 20, weight: 700, anchor: 'middle', fill: '#ffffff' }) + t(105, y + rh / 2 + 22, g2, { size: 15.5, anchor: 'middle', fill: '#ffffff' });
    const n = items.length, gap = 12, w = (870 - 194 - (n - 1) * gap) / n;
    items.forEach(([h, d], i) => {
      const x = 194 + i * (w + gap);
      b += `<rect x="${x}" y="${y}" width="${w}" height="${rh}" rx="12" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>`;
      const hl = wrap(h, w - 28, 17, true);
      b += tl(x + 14, y + 30, hl, { size: 17, weight: 700 }, 21) + tl(x + 14, y + 30 + hl.length * 21 + 2, wrap(d, w - 28, 15.5), { size: 15.5, fill: C.muted }, 19);
    });
    y += rh + 12;
  }
  b += t(450, y + 22, 'Closed seasons are about time; protected areas are about place.', { size: 17, weight: 600, anchor: 'middle' });
  add('06-harvest-strategies',
    svg(900, y + 50, 'Nine ways to manage the harvest', b),
    'The nine strategies grouped by what they control. Gear: limits on boat and net size, larger mesh size, pole and line. Amount: quotas. Time: closed seasons and limited fishing days. Place: protected areas. Rules: conservation laws and international agreements with implementation and monitoring.',
    'Harvest controls limit the gear, the amount, the time, the place, or set the rules.',
    H2.man);
}

// 07 Quota worked example
{
  let b = '';
  const step = (x, w, big, small, fill, edge) => rrect(x, 130, w, 120, fill, edge, 3, 14) + t(x + w / 2, 182, big, { size: 26, weight: 700, anchor: 'middle' }) + t(x + w / 2, 216, small, { size: 16.5, anchor: 'middle', fill: C.muted });
  b += step(30, 240, '180,000 t', 'estimated stock', C.tealLight, C.tealDark);
  b += step(330, 240, '27,000 t', 'total quota', C.cream, C.olive);
  b += step(630, 240, '300 t', 'quota per boat', C.mustard, C.olive);
  b += arrow(274, 190, 326, 190, { w: 4 }) + arrow(574, 190, 626, 190, { w: 4 });
  b += t(300, 280, '× 15 ÷ 100', { size: 18, weight: 700, anchor: 'middle' }) + t(600, 280, '÷ 90 boats', { size: 18, weight: 700, anchor: 'middle' });
  // stock bar
  b += t(30, 335, 'The quota is 15% of the stock', { size: 18, weight: 700 });
  b += `<rect x="30" y="350" width="840" height="46" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/><rect x="30" y="350" width="${840 * 0.15}" height="46" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`;
  b += t(30 + 63, 380, '15%', { size: 17, weight: 700, anchor: 'middle' }) + t(500, 380, '85% left to breed and grow', { size: 17, weight: 600, anchor: 'middle', fill: C.tealDark });
  b += t(870, 425, 'invented figures', { size: 15, anchor: 'end', fill: C.muted, italic: true });
  b += panel(30, 440, 840, 150, '#fbf1ea', C.rust);
  b += t(60, 478, 'Why the quota could still fail', { size: 20, weight: 700, fill: C.rust });
  b += bullets(60, 512, ['boats may land more than their quota illegally', 'undersized or over-quota fish may be discarded at sea and die', 'the stock estimate itself may be wrong'], 780, { size: 17.5 }).svg;
  add('07-quota-worked-example',
    svg(900, 615, 'Worked example: setting a quota', b),
    'A stock of 180,000 tonnes with a 15% limit gives a total quota of 27,000 tonnes; shared between 90 boats that is 300 tonnes each. A bar shows 15% caught and 85% left. The quota could still fail through illegal landings, discards that die, or a wrong stock estimate.',
    '15% of 180,000 t is 27,000 t, or 300 t per boat, but only if catches are honest and the estimate is right.',
    H2.quota);
}
