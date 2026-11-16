import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'cambridge-o-level-geography-coasts';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// 01 Constructive vs destructive waves
{
  const row = (y, kind) => {
    const con = kind === 'con';
    const rise = con ? 70 : 165, base = y + 265, x1 = 50, x2 = 560;
    const ys = (x) => base - (rise * (x - x1)) / (x2 - x1);
    const SL = y + 215;
    const xi = x1 + ((base - SL) * (x2 - x1)) / rise; // waterline
    const L = Math.hypot(x2 - x1, rise), nx = (x2 - x1) / L, ny = -rise / L; // unit vector up-slope
    const px = ny, py = -nx; // normal pointing up/out of the beach (px<0? flip if needed)
    const nX = -px < 0 ? px : -px, nY = -Math.abs(py);
    const along = (d, off) => [xi + d * nx + off * Math.abs(ny) * -1 * 0, 0];
    const pt = (d, off) => { const x = xi + d * nx, yy = ys(x); return [x + off * (rise / L) * -1 * -1 * 0, yy - off]; };
    const swLen = con ? 130 : 60, bwLen = con ? 60 : 130;
    const d0 = con ? -40 : 15;
    const [s1x, s1y] = pt(d0, 20), [s2x, s2y] = pt(d0 + swLen, 20);
    const [b1x, b1y] = pt(d0 + bwLen, 52), [b2x, b2y] = pt(d0, 52);
    return panel(30, y, 840, 290) +
      `<path d="M32,${SL} L${xi},${SL} L${x1},${base} L32,${base} Z" fill="${C.teal}"/>` +
      `<path d="M${x1},${base} L${x2},${ys(x2)} L${x2},${y + 278} L${x1},${y + 278} Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` +
      (con
        ? path(`M60,${SL} q30,-20 60,0 q30,-20 60,0 q30,-20 60,0`, { stroke: C.tealDark, w: 4, fill: C.teal })
        : path(`M70,${SL} C70,${SL - 50} 105,${SL - 85} 145,${SL - 72} C122,${SL - 62} 122,${SL - 36} 150,${SL - 26} L158,${SL} Z`, { stroke: C.tealDark, w: 4, fill: C.teal })) +
      arrow(s1x, s1y, s2x, s2y, { color: C.tealDark, w: con ? 10 : 4, marker: 'ahT' }) +
      arrow(b1x, b1y, b2x, b2y, { color: C.rust, w: con ? 4 : 10, marker: 'ahR' }) +
      t(60, y + 40, con ? 'Constructive wave' : 'Destructive wave', { size: 24, weight: 700 }) +
      t(60, y + 68, con ? 'swash stronger than backwash' : 'backwash stronger than swash', { size: 18, fill: con ? C.tealDark : C.rust, weight: 600 }) +
      tl(600, y + 110, con
        ? ['• Low height', '• Fewer per minute', '• Deposit material', '• Gentle, wide beach']
        : ['• High height', '• More per minute', '• Remove material', '   and erode cliffs', '• Steep, narrow beach'], { size: 19 }, 30);
  };
  const legend = `<line x1="80" y1="${790}" x2="140" y2="${790}" stroke="${C.tealDark}" stroke-width="8" marker-end="url(#ahT)"/>` + t(155, 797, 'swash (up the beach)', { size: 18 }) +
    `<line x1="430" y1="${790}" x2="490" y2="${790}" stroke="${C.rust}" stroke-width="8" marker-end="url(#ahR)"/>` + t(505, 797, 'backwash (back to the sea)', { size: 18 }) +
    t(450, 832, 'Arrow thickness shows which flow is stronger', { size: 17, fill: C.muted, anchor: 'middle' });
  add('01-constructive-destructive-waves',
    svg(900, 860, 'Constructive and destructive waves', row(110, 'con') + row(420, 'des') + legend),
    'Two beach cross-sections. A low constructive wave has a strong swash and weak backwash and builds a gentle, wide beach. A high destructive wave has a weak swash and strong backwash, removes material and leaves a steep, narrow beach.',
    'Which flow is stronger, swash or backwash, decides whether a wave builds or removes a beach.',
    '## Waves: the energy behind coastal processes');
}

// 02 Four processes of marine erosion
{
  const card = (x, y, title, lines, art) => panel(x, y, 410, 300) + t(x + 24, y + 40, title, { size: 23, weight: 700 }) + art + tl(x + 24, y + 228, lines, { size: 17, fill: C.muted }, 23);
  const cliff = (x, y) => `<path d="M${x + 250},${y + 60} L${x + 380},${y + 60} L${x + 380},${y + 190} L${x + 270},${y + 190} L${x + 262},${y + 150} L${x + 255},${y + 110} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  const sea = (x, y) => `<rect x="${x + 20}" y="${y + 120}" width="250" height="70" fill="${C.teal}"/>`;
  const hyd = (x, y) => sea(x, y) + cliff(x, y) +
    path(`M${x + 262},${y + 140} l40,-6 l12,8 l28,-4`, { stroke: C.rust, w: 4 }) +
    arrow(x + 90, y + 145, x + 240, y + 145, { color: C.tealDark, w: 8, marker: 'ahT' }) +
    t(x + 300, y + 112, 'air forced', { size: 15, fill: C.rust, weight: 600 }) + t(x + 300, y + 130, 'into crack', { size: 15, fill: C.rust, weight: 600 });
  const abr = (x, y) => sea(x, y) + cliff(x, y) +
    [[130, 150], [175, 138], [215, 160]].map(([a, b]) => `<circle cx="${x + a}" cy="${y + b}" r="11" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2.5"/>`).join('') +
    arrow(x + 70, y + 150, x + 112, y + 150, { color: C.tealDark, w: 5, marker: 'ahT' }) + arrow(x + 228, y + 158, x + 252, y + 158, { w: 3.5 });
  const att = (x, y) => `<rect x="${x + 20}" y="${y + 60}" width="370" height="130" rx="10" fill="${C.tealLight}"/>` +
    `<path d="M${x + 60},${y + 95} l40,-10 l22,30 l-12,34 l-44,4 l-16,-30 z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="3"/>` +
    `<path d="M${x + 160},${y + 90} l36,6 l8,36 l-30,22 l-30,-16 z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="3"/>` +
    t(x + 140, y + 125, '⟷', { size: 22, anchor: 'middle', weight: 700 }) +
    arrow(x + 225, y + 125, x + 275, y + 125, { w: 4 }) +
    `<circle cx="${x + 305}" cy="${y + 112}" r="15" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="3"/><circle cx="${x + 345}" cy="${y + 140}" r="13" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="3"/>`;
  const sol = (x, y) => sea(x, y) + `<path d="M${x + 250},${y + 60} L${x + 380},${y + 60} L${x + 380},${y + 190} L${x + 262},${y + 190} L${x + 250},${y + 120} Z" fill="#ffffff" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` +
    t(x + 315, y + 100, 'chalk /', { size: 15, anchor: 'middle', fill: C.muted }) + t(x + 315, y + 118, 'limestone', { size: 15, anchor: 'middle', fill: C.muted }) +
    [[225, 140], [200, 160], [175, 145], [150, 168], [130, 150]].map(([a, b], i) => `<circle cx="${x + a}" cy="${y + b}" r="${5 - i * 0.5}" fill="${C.olive}"/>`).join('');
  add('02-marine-erosion-processes',
    svg(900, 760, 'Four ways the sea erodes the coast',
      card(30, 110, 'Hydraulic action', ['Force of the water; air compressed', 'in cracks blasts rock apart.'], hyd(30, 110)) +
      card(460, 110, 'Abrasion', ['Waves hurl sand and pebbles at', 'the cliff and wear it away.'], abr(460, 110)) +
      card(30, 430, 'Attrition', ['Rocks knock together and become', 'smaller and more rounded.'], att(30, 430)) +
      card(460, 430, 'Solution', ['Sea water dissolves soluble', 'rock such as chalk and limestone.'], sol(460, 430))),
    'Four panels. Hydraulic action: waves force air into a crack in the cliff. Abrasion: waves throw pebbles at the cliff. Attrition: two angular rocks collide and become smaller rounded pebbles. Solution: sea water dissolves chalk or limestone.',
    'Hydraulic action, abrasion, attrition and solution: the four processes of marine erosion.',
    '## The work of the sea');
}

// 03 Longshore drift (plan view)
{
  let zig = '', x = 110;
  const yTop = 270, yBot = 360;
  for (let i = 0; i < 6; i++) {
    zig += arrow(x, yBot, x + 95, yTop, { color: C.tealDark, w: 4.5, marker: 'ahT' });
    zig += arrow(x + 95, yTop, x + 95, yBot, { color: C.rust, w: 4.5, marker: 'ahR' });
    x += 105;
  }
  const crests = [0, 1, 2, 3].map((i) => `<line x1="${60 + i * 160}" y1="${620}" x2="${260 + i * 160}" y2="${420}" stroke="${C.tealDark}" stroke-width="3" stroke-dasharray="10 8" opacity="0.8"/>`).join('');
  add('03-longshore-drift',
    svg(900, 760, 'Longshore drift',
      `<rect x="30" y="110" width="840" height="130" fill="#d8e3c6"/>` + t(450, 180, 'LAND', { size: 22, weight: 700, anchor: 'middle', fill: C.muted }) +
      `<rect x="30" y="240" width="840" height="140" fill="${C.sand}"/>` + t(860, 262, 'BEACH', { size: 17, weight: 700, anchor: 'end', fill: C.olive }) +
      `<rect x="30" y="380" width="840" height="270" fill="${C.teal}"/>` + t(860, 640, 'SEA', { size: 17, weight: 700, anchor: 'end', fill: C.tealDark }) +
      `<line x1="30" y1="380" x2="870" y2="380" stroke="${C.ink}" stroke-width="3"/>` + crests + zig +
      `<circle cx="110" cy="360" r="9" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2.5"/>` +
      arrow(120, 590, 250, 460, { w: 5 }) + t(95, 615, 'prevailing wind and waves', { size: 18, weight: 600 }) +
      t(450, 440, 'wave crests approach at an angle', { size: 17, fill: C.ink, anchor: 'middle', italic: true }) +
      arrow(150, 222, 760, 222, { w: 5, color: C.olive, marker: 'ahO' }) + t(455, 210, 'net movement of sediment along the coast', { size: 19, weight: 700, anchor: 'middle', fill: C.olive }) +
      `<line x1="80" y1="700" x2="140" y2="700" stroke="${C.tealDark}" stroke-width="5" marker-end="url(#ahT)"/>` + t(152, 707, 'swash: up the beach at the angle of the waves', { size: 17 }) +
      `<line x1="80" y1="735" x2="140" y2="735" stroke="${C.rust}" stroke-width="5" marker-end="url(#ahR)"/>` + t(152, 742, 'backwash: straight down the slope under gravity', { size: 17 })),
    'Plan view of a beach. Waves approach at an angle driven by the prevailing wind. A pebble is carried up the beach diagonally by the swash and dragged straight back down by the backwash, so it zig-zags along the coast.',
    'Swash at an angle, backwash straight down: the zig-zag that moves sediment along the coast.',
    '## The work of the sea');
}

// 04 Headland erosion sequence
{
  const rowH = 128, x0 = 50;
  const steps = [
    ['1', 'Crack', 'Hydraulic action and abrasion attack a weakness (a joint or fault) at the base of the headland.'],
    ['2', 'Cave', 'The crack is widened and deepened into a cave.'],
    ['3', 'Arch', 'Caves on both sides of the headland erode right through it.'],
    ['4', 'Stack', 'The arch roof is weakened by weathering and collapses, leaving a stack.'],
    ['5', 'Stump', 'The stack is undercut and collapses into a stump, covered at high tide.'],
  ];
  let body = '';
  steps.forEach(([n, name, desc], i) => {
    const y = 110 + i * (rowH + 12);
    body += panel(30, y, 840, rowH);
    const sea = y + 100, top = y + 22;
    body += `<rect x="${x0}" y="${sea}" width="300" height="${rowH - 102}" fill="${C.teal}"/>`;
    const head = (x1, x2, tp = top) => `<path d="M${x1},${sea} L${x1 + 8},${tp} L${x2 - 8},${tp} L${x2},${sea} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
    if (i === 0) body += head(110, 300) + path(`M205,${sea} l-6,-14 l8,-10 l-4,-14`, { stroke: C.rust, w: 4 });
    if (i === 1) body += head(110, 300) + `<path d="M180,${sea} Q205,${sea - 50} 230,${sea} Z" fill="${C.ink}" opacity="0.75"/>`;
    if (i === 2) body += head(110, 300) + `<path d="M165,${sea} L165,${sea - 30} Q205,${sea - 70} 245,${sea - 30} L245,${sea} Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>`;
    if (i === 3) body += head(110, 195) + head(240, 300, top + 6) + `<circle cx="215" cy="${sea - 6}" r="7" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/><circle cx="228" cy="${sea - 5}" r="5" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`;
    if (i === 4) body += head(110, 195) + `<path d="M245,${sea} L250,${sea - 16} L290,${sea - 16} L295,${sea} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="3"/>` +
      `<line x1="${x0}" y1="${sea - 22}" x2="350" y2="${sea - 22}" stroke="${C.tealDark}" stroke-width="2.5" stroke-dasharray="8 6"/>` + t(345, sea - 28, 'high tide', { size: 14, fill: C.tealDark, anchor: 'end' });
    body += `<line x1="${x0}" y1="${sea}" x2="350" y2="${sea}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
    body += badge(395, y + rowH / 2, 24, n, i === 2 ? C.mustard : C.cream);
    body += t(440, y + 46, name, { size: 23, weight: 700 });
    const words = desc.split(' '); const lines = ['']; for (const w of words) { if ((lines[lines.length - 1] + ' ' + w).length > 38) lines.push(w); else lines[lines.length - 1] = (lines[lines.length - 1] + ' ' + w).trim(); }
    body += tl(440, y + 76, lines, { size: 17, fill: C.muted }, 22);
  });
  add('04-cave-arch-stack-stump',
    svg(900, 820, 'Crack, cave, arch, stack, stump', body),
    'Five front views of a headland. 1: a crack at the base. 2: the crack widens into a cave. 3: caves meet to form an arch. 4: the arch roof collapses, leaving a stack. 5: the stack is eroded into a stump covered at high tide.',
    'Erosion of a headland follows one sequence from crack to stump.',
    '## The work of the sea');
}

// 05 Spit formation (plan view)
{
  const land = `<path d="M30,110 L870,110 L870,175 Q620,185 500,230 Q450,265 445,330 L30,330 Z" fill="#d8e3c6" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  const river = path('M830,110 Q826,145 812,178', { stroke: C.blue, w: 7 });
  const marsh = `<path d="M470,300 Q520,250 620,232 Q720,222 760,262 Q700,296 470,304 Z" fill="#a9c48f" stroke="${C.grass}" stroke-width="2.5"/>` +
    [500, 540, 580, 620, 660, 700].map((x) => path(`M${x},${292 - (x - 500) * 0.08} l6,-12 m0,12 l6,-10`, { stroke: C.grass, w: 2 })).join('');
  const spitD = 'M440,322 L735,316 Q795,312 800,262';
  const spit = path(spitD, { stroke: C.ink, w: 34 }) + path(spitD, { stroke: C.sand, w: 27 });
  let ld = '';
  for (let i = 0; i < 4; i++) { const x = 90 + i * 85; ld += arrow(x, 372, x + 40, 344, { color: C.tealDark, w: 3, marker: 'ahT' }) + arrow(x + 40, 344, x + 40, 372, { color: C.rust, w: 3, marker: 'ahR' }); }
  add('05-spit-formation',
    svg(900, 700, 'How a spit forms',
      `<rect x="30" y="110" width="840" height="560" fill="${C.teal}"/>` +
      `<path d="M445,330 Q450,265 500,230 Q620,185 870,175 L870,300 Q800,330 445,330 Z" fill="${C.tealLight}"/>` +
      land + river + marsh + spit + ld +
      t(180, 220, 'LAND', { size: 22, weight: 700, fill: C.muted }) +
      t(812, 145, 'river', { size: 16, fill: C.blue, weight: 600, anchor: 'end' }) +
      arrow(70, 410, 420, 410, { w: 5, color: C.olive, marker: 'ahO' }) + t(70, 440, 'longshore drift carries sediment', { size: 18, weight: 700, fill: C.olive }) +
      t(70, 462, 'along the coast', { size: 18, weight: 700, fill: C.olive }) +
      t(420, 280, 'coast changes', { size: 16, anchor: 'end' }) + t(420, 299, 'direction here', { size: 16, anchor: 'end' }) +
      t(600, 365, 'SPIT: sand and shingle deposited', { size: 18, weight: 700, anchor: 'middle' }) + t(600, 386, 'out into open water', { size: 18, weight: 700, anchor: 'middle' }) +
      t(810, 240, 'hook', { size: 18, weight: 700 }) +
      t(612, 268, 'salt marsh', { size: 17, weight: 700, anchor: 'middle', fill: '#3d5f2a' }) +
      t(705, 224, 'sheltered water: mud settles', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 }) +
      arrow(150, 620, 260, 510, { w: 5 }) + t(130, 648, 'prevailing wind and waves', { size: 17, weight: 600 }) +
      arrow(860, 610, 815, 300, { w: 4, dash: '10 7' }) + t(860, 640, 'a change in wind or wave', { size: 17, anchor: 'end', weight: 600 }) + t(860, 660, 'direction curves the end', { size: 17, anchor: 'end', weight: 600 })),
    'Plan view of a coastline that bends inland at a river mouth. Longshore drift carries sediment east past the bend, where it is deposited as a long narrow spit. A change in wind direction curves the end into a hook. Salt marsh forms in the sheltered water behind the spit.',
    'A spit grows where longshore drift meets a bend in the coast; its end can curve into a hook.',
    '## Depositional landforms in more detail');
}

// 06 Sand dune succession
{
  const g = 440; // ground line
  const prof = `M30,${g + 20} L150,${g + 20} L270,${g} Q300,${g - 22} 330,${g} Q345,${g - 18} 365,${g} L380,${g} Q440,${g - 90} 500,${g} L510,${g} Q580,${g - 150} 650,${g} L660,${g} Q760,${g - 110} 870,${g - 40}`;
  const tuft = (x, y) => path(`M${x},${y} l-6,-14 M${x},${y} l0,-17 M${x},${y} l6,-14`, { stroke: C.grass, w: 2.2 });
  const onQ = (a, c, b, h, n, yEnd = g, from = 0.15, to = 0.85) => { let o = ''; for (let i = 0; i < n; i++) { const u = from + ((to - from) * i) / Math.max(1, n - 1); const x = (1 - u) ** 2 * a + 2 * (1 - u) * u * c + u * u * b; const y = (1 - u) ** 2 * g + 2 * (1 - u) * u * (g - h) + u * u * yEnd; o += tuft(x, y + 1); } return o; };
  const labels = [[315, 'embryo', 'dunes'], [440, 'fore', 'dunes'], [580, 'yellow', 'dunes'], [765, 'grey', 'dunes']];
  add('06-sand-dune-succession',
    svg(900, 650, 'Coastal sand dunes: young to old',
      `<rect x="30" y="${g + 20}" width="120" height="120" fill="${C.teal}"/>` + t(90, g + 70, 'sea', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 }) +
      `<path d="${prof} L870,${g + 140} L30,${g + 140} Z" fill="${C.sand}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` +
      `<path d="M660,${g} Q760,${g - 110} 870,${g - 40} L870,${g + 140} L660,${g + 140} Z" fill="#cdc6ad"/>` + path(`M660,${g} Q760,${g - 110} 870,${g - 40}`, { stroke: C.ink, w: 3 }) +
      t(210, g + 50, 'beach', { size: 17, anchor: 'middle', fill: C.olive, weight: 600 }) +
      onQ(270, 300, 330, 22, 1, g, 0.5, 0.5) + onQ(330, 345, 365, 18, 1, g, 0.5, 0.5) + onQ(380, 440, 500, 90, 4) + onQ(510, 580, 650, 150, 7) + onQ(660, 760, 870, 110, 14, g - 40, 0.08, 0.95) +
      labels.map(([x, a, b]) => t(x, 245, a, { size: 19, weight: 700, anchor: 'middle' }) + t(x, 267, b, { size: 17, anchor: 'middle', fill: C.muted })).join('') +
      arrow(40, 300, 200, 300, { w: 5 }) + t(40, 285, 'onshore wind', { size: 17, weight: 600 }) +
      arrow(270, 615, 860, 615, { w: 3.5, color: C.tealDark, marker: 'ahT' }) +
      t(270, 603, 'older, further inland, more vegetation and humus; marram grass binds the sand', { size: 16, fill: C.tealDark, weight: 600 })),
    'Cross-section from the sea inland. Small embryo dunes form near the beach, then taller fore dunes and yellow dunes with marram grass, then lower, older grey dunes with dense vegetation. An onshore wind blows from the sea.',
    'Dunes get older, more vegetated and richer in humus with distance from the beach.',
    '## The work of the wind');
}

// 07 Coral reef types
{
  const ph = 190;
  const sec = (y, title, sub, kind) => {
    const s = y + 80; const fl = y + ph - 20;
    let b = panel(30, y, 840, ph) + t(60, y + 40, title, { size: 23, weight: 700 }) + t(60, y + 66, sub, { size: 16, fill: C.muted });
    b += `<rect x="330" y="${s}" width="520" height="${fl - s}" fill="${C.teal}"/>` + `<line x1="330" y1="${s}" x2="850" y2="${s}" stroke="${C.tealDark}" stroke-width="2.5"/>`;
    const coral = (x1, x2) => `<path d="M${x1},${fl} L${x1 + 8},${s - 2} Q${(x1 + x2) / 2},${s - 12} ${x2 - 8},${s - 2} L${x2},${fl} Z" fill="${C.rust}" opacity="0.85" stroke="${C.ink}" stroke-width="2.5"/>`;
    const island = (x1, x2, h) => `<path d="M${x1},${fl} Q${(x1 + x2) / 2},${s - h} ${x2},${fl} Z" fill="#a9c48f" stroke="${C.ink}" stroke-width="3"/>`;
    if (kind === 'f') b += coral(560, 690) + island(400, 640, 120) + t(500, s + 40, 'island', { size: 15, anchor: 'middle', weight: 600 }) + t(655, s - 18, 'reef', { size: 15, anchor: 'middle', weight: 700, fill: C.rust });
    if (kind === 'b') b += island(380, 580, 120) + t(480, s + 40, 'island', { size: 15, anchor: 'middle', weight: 600 }) + t(720, s - 18, 'reef', { size: 15, anchor: 'middle', weight: 700, fill: C.rust }) + `<rect x="600" y="${s}" width="80" height="${fl - s}" fill="${C.tealLight}"/>` + coral(680, 760) + t(640, fl - 12, 'lagoon', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
    if (kind === 'a') b += coral(420, 500) + `<rect x="500" y="${s}" width="180" height="${fl - s}" fill="${C.tealLight}"/>` + coral(680, 760) + t(590, s + 32, 'lagoon', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 }) + `<path d="M520,${fl} Q590,${fl - 22} 660,${fl} Z" fill="#a9c48f" opacity="0.5" stroke="${C.ink}" stroke-width="2" stroke-dasharray="6 5"/>`;
    return b;
  };
  const chip = (x, y, w, head, s) => `<rect x="${x}" y="${y}" width="${w}" height="92" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` + t(x + w / 2, y + 38, head, { size: 20, weight: 700, anchor: 'middle' }) + t(x + w / 2, y + 66, s, { size: 15, anchor: 'middle', fill: C.muted });
  const y0 = 110;
  add('07-coral-reef-types',
    svg(900, 900, 'Three types of coral reef',
      sec(y0, 'Fringing reef', 'attached to the shore', 'f') +
      sec(y0 + ph + 16, 'Barrier reef', 'separated from the shore by a lagoon', 'b') +
      sec(y0 + 2 * (ph + 16), 'Atoll', 'a ring of coral around a lagoon', 'a') +
      t(450, y0 + 3 * (ph + 16) + 36, 'Conditions coral needs', { size: 22, weight: 700, anchor: 'middle' }) +
      chip(30, y0 + 3 * (ph + 16) + 56, 200, 'Warm', 'above about 18 °C') +
      chip(243, y0 + 3 * (ph + 16) + 56, 200, 'Shallow, clear', 'sunlight for algae') +
      chip(456, y0 + 3 * (ph + 16) + 56, 200, 'Salty', 'not near river mouths') +
      chip(669, y0 + 3 * (ph + 16) + 56, 201, 'Oxygenated', 'from wave action')),
    'Three cross-sections. A fringing reef is attached to the coast of an island. A barrier reef is separated from the shore by a lagoon. An atoll is a ring of coral around a lagoon where the island has sunk. Below: coral needs warm water above about 18 °C, shallow clear water, salt water and well-oxygenated water.',
    'Fringing, barrier and atoll reefs differ in how far the coral is from the shore.',
    '## Coral reefs and mangrove swamps');
}

// 08 Managing coastal erosion (plan view, cost-benefit)
{
  const yC = 330; // coastline
  const groynes = [330, 410, 490, 570].map((x) => `<path d="M${x},${yC - 40} L${x - 30},${yC - 40} L${x},${yC + 10} Z" fill="#e2c97a" opacity="0.9"/>` + `<line x1="${x}" y1="${yC - 45}" x2="${x}" y2="${yC + 40}" stroke="${C.ink}" stroke-width="6"/>`).join('');
  const houses = [[330, 165], [400, 195], [460, 160], [525, 205], [575, 165], [370, 240], [500, 250]].map(([x, y]) => `<rect x="${x}" y="${y}" width="34" height="28" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/><path d="M${x - 3},${y} L${x + 17},${y - 14} L${x + 37},${y} Z" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>`).join('');
  const boulders = [660, 690, 720, 750, 780, 810, 840].map((x, i) => `<circle cx="${x}" cy="${yC + 4 + (i % 2) * 8}" r="13" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2.5"/>`).join('');
  const oldLines = [0, 1, 2].map((i) => `<path d="M40,${yC - 120 + i * 40} Q160,${yC - 130 + i * 40} 290,${yC - 115 + i * 40}" fill="none" stroke="${C.muted}" stroke-width="2" stroke-dasharray="8 6"/>`).join('');
  add('08-managing-coastal-erosion',
    svg(900, 780, 'Who gets protected? Managing a coastline',
      `<rect x="30" y="110" width="840" height="${yC - 50 - 110}" fill="#d8e3c6"/>` +
      `<rect x="30" y="${yC - 50}" width="840" height="50" fill="${C.sand}"/>` +
      `<rect x="30" y="${yC}" width="840" height="270" fill="${C.teal}"/>` +
      `<line x1="300" y1="110" x2="300" y2="${yC}" stroke="${C.muted}" stroke-width="2" stroke-dasharray="4 6"/><line x1="630" y1="110" x2="630" y2="${yC}" stroke="${C.muted}" stroke-width="2" stroke-dasharray="4 6"/>` +
      oldLines + t(165, 150, 'Farmland', { size: 20, weight: 700, anchor: 'middle' }) + t(165, 172, '(low value)', { size: 16, anchor: 'middle', fill: C.muted }) +
      t(165, 300, 'former cliff lines', { size: 14, anchor: 'middle', fill: C.muted, italic: true }) +
      houses + t(465, 134, 'Town', { size: 20, weight: 700, anchor: 'middle' }) +
      `<line x1="310" y1="${yC - 47}" x2="620" y2="${yC - 47}" stroke="${C.ink}" stroke-width="9"/>` + groynes +
      `<rect x="380" y="${yC + 95}" width="170" height="16" rx="4" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2.5"/>` +
      `<rect x="660" y="160" width="150" height="80" rx="6" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>` + t(735, 195, 'Gas', { size: 17, weight: 700, anchor: 'middle' }) + t(735, 217, 'terminal', { size: 17, weight: 700, anchor: 'middle' }) + boulders +
      arrow(60, yC + 60, 260, yC + 60, { w: 5, color: C.olive, marker: 'ahO' }) + t(60, yC + 88, 'longshore drift', { size: 17, weight: 700, fill: C.olive }) +
      // callouts
      `<line x1="150" y1="${yC + 175}" x2="150" y2="${yC + 105}" stroke="${C.ink}" stroke-width="2.5"/>` + arrow(150, yC + 50, 150, yC - 20, { w: 2.5 }) + t(60, yC + 200, 'Managed retreat', { size: 18, weight: 700, fill: C.tealDark }) + t(60, yC + 222, 'let it erode', { size: 16, fill: C.muted }) +
      arrow(330, yC + 175, 330, yC + 30, { w: 2.5 }) + t(290, yC + 200, 'Groynes', { size: 18, weight: 700 }) + t(290, yC + 222, 'trap sand', { size: 16, fill: C.muted }) +
      arrow(465, yC + 175, 465, yC + 118, { w: 2.5 }) + t(420, yC + 200, 'Offshore', { size: 18, weight: 700 }) + t(420, yC + 222, 'breakwater', { size: 18, weight: 700 }) +
      arrow(600, yC + 175, 600, yC - 40, { w: 2.5 }) + t(565, yC + 200, 'Sea wall', { size: 18, weight: 700 }) +
      arrow(760, yC + 175, 760, yC + 25, { w: 2.5 }) + t(700, yC + 200, 'Rock armour', { size: 18, weight: 700 }) +
      panel(30, 640, 840, 120, C.cream, C.olive) +
      t(60, 680, 'Cost–benefit: defend high-value places, let low-value land retreat.', { size: 19, weight: 700 }) +
      t(60, 712, 'But groynes starve beaches further along the coast of sand,', { size: 17, fill: C.muted }) +
      t(60, 736, 'so erosion can speed up downdrift.', { size: 17, fill: C.muted })),
    'Plan view of a coast with farmland, a town and a gas terminal. The town is protected by a sea wall, groynes that trap sand and an offshore breakwater; the gas terminal by rock armour. The farmland is left to erode by managed retreat, shown by former cliff lines. Longshore drift moves sediment along the coast.',
    'Hard engineering protects high-value places; low-value land may be left to retreat.',
    '## Managing coastal erosion');
}
