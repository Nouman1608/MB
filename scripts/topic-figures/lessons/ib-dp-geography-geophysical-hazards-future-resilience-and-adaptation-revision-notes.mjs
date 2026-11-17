import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-geography-geophysical-hazards-future-resilience-and-adaptation-revision-notes';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// 01 How structural measures work
{
  const G = 590; // ground
  const bx = 60, bw = 220, floors = 4, fh = 95, top = G - 40 - floors * fh;
  let bld = `<rect x="${bx}" y="${top}" width="${bw}" height="${floors * fh}" fill="#ffffff" stroke="${C.ink}" stroke-width="3.5"/>`;
  for (let f = 1; f < floors; f++) bld += `<line x1="${bx}" y1="${top + f * fh}" x2="${bx + bw}" y2="${top + f * fh}" stroke="${C.ink}" stroke-width="3"/>`;
  // cross-bracing in two bays
  bld += [0, 2].map((f) => `<line x1="${bx}" y1="${top + f * fh}" x2="${bx + bw / 2}" y2="${top + (f + 1) * fh}" stroke="${C.blue}" stroke-width="4"/><line x1="${bx + bw / 2}" y1="${top + f * fh}" x2="${bx}" y2="${top + (f + 1) * fh}" stroke="${C.blue}" stroke-width="4"/>`).join('');
  // damper in a bay
  bld += [1, 3].map((f) => { const y = top + f * fh + fh / 2; return `<line x1="${bx + bw / 2 + 10}" y1="${y}" x2="${bx + bw - 10}" y2="${y}" stroke="${C.muted}" stroke-width="4"/><rect x="${bx + bw * 0.75 - 22}" y="${y - 12}" width="44" height="24" rx="5" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`; }).join('');
  bld += `<line x1="${bx + bw / 2}" y1="${top}" x2="${bx + bw / 2}" y2="${G - 40}" stroke="${C.ink}" stroke-width="3"/>`;
  // wrapped column (retrofit) on right edge
  bld += `<rect x="${bx + bw - 14}" y="${top}" width="14" height="${floors * fh}" fill="${C.rust}" opacity="0.85"/>` +
    [0, 1, 2, 3, 4, 5, 6, 7].map((k) => `<line x1="${bx + bw - 16}" y1="${top + 20 + k * 46}" x2="${bx + bw + 2}" y2="${top + 30 + k * 46}" stroke="${C.ink}" stroke-width="2"/>`).join('');
  // base slab + bearings
  bld += `<rect x="${bx - 10}" y="${G - 40}" width="${bw + 20}" height="14" fill="${C.muted}" stroke="${C.ink}" stroke-width="2.5"/>` +
    [bx + 20, bx + bw / 2 - 20, bx + bw - 60].map((x) => `<rect x="${x}" y="${G - 26}" width="40" height="26" rx="4" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` +
      [0, 1, 2].map((k) => `<line x1="${x + 3}" y1="${G - 20 + k * 7}" x2="${x + 37}" y2="${G - 20 + k * 7}" stroke="${C.tealDark}" stroke-width="2"/>`).join('')).join('');
  const ground = `<rect x="40" y="${G}" width="500" height="50" fill="${C.rock}"/><line x1="40" y1="${G}" x2="540" y2="${G}" stroke="${C.ink}" stroke-width="3"/>` +
    arrow(150, G + 30, 70, G + 30, { w: 3, color: C.rust, marker: 'ahR' }) + arrow(350, G + 30, 430, G + 30, { w: 3, color: C.rust, marker: 'ahR' }) +
    t(250, G + 36, 'ground shaking', { size: 15, weight: 600, anchor: 'middle', fill: C.rust });
  const call = (x1, y1, x2, y, head, sub) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y - 6}" stroke="${C.ink}" stroke-width="2"/>` + `<circle cx="${x1}" cy="${y1}" r="4" fill="${C.ink}"/>` +
    t(x2 + 6, y, head, { size: 17, weight: 700 }) + tl(x2 + 6, y + 21, sub, { size: 15, fill: C.muted }, 18);
  let b = panel(30, 110, 520, 590) + bld + ground +
    call(bx + bw / 4, top + fh / 2 - 20, 330, 140, 'Cross-bracing', ['spreads energy so', 'the frame flexes']) +
    call(bx + bw * 0.75 + 22, top + fh * 1.5, 330, 250, 'Dampers', ['absorb energy']) +
    call(bx + bw, top + fh * 2.6, 330, 350, 'Retrofitting', ['e.g. wrapping', 'concrete columns']) +
    call(bx + bw - 40, G - 14, 330, 480, 'Base isolation', ['flexible bearings', 'absorb movement']);
  // side panels
  const twr = `<rect x="600" y="340" width="250" height="40" fill="${C.teal}"/>` +
    path('M600,340 q20,-40 50,-30 q-14,8 -8,30 z', { fill: C.teal, stroke: C.tealDark, w: 3 }) +
    `<rect x="740" y="250" width="70" height="130" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/>` +
    [285, 320, 350].map((y) => `<line x1="740" y1="${y}" x2="810" y2="${y}" stroke="${C.ink}" stroke-width="2"/>`).join('') +
    `<rect x="736" y="240" width="78" height="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>` +
    [755, 775, 795].map((x) => `<circle cx="${x}" cy="232" r="6" fill="${C.ink}"/>`).join('') +
    arrow(660, 320, 730, 320, { color: C.tealDark, w: 4, marker: 'ahT' });
  b += panel(570, 110, 300, 290) + t(720, 145, 'Tsunami defences', { size: 19, weight: 700, anchor: 'middle' }) +
    tl(588, 180, ['sea walls block waves;', 'towers give refuge where', 'high ground is far away'], { size: 15, fill: C.muted }, 19) + twr;
  const lava = `<path d="M590,640 Q640,560 700,600 Q740,625 760,605 L760,680 L590,680 Z" fill="${C.rust}" stroke="${C.ink}" stroke-width="2.5"/>` +
    `<rect x="775" y="560" width="80" height="120" fill="${C.teal}"/>` + t(815, 668, 'harbour', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 }) +
    [0, 1, 2].map((k) => path(`M${700 + k * 22},548 q4,22 -4,44`, { stroke: C.blue, w: 3, extra: 'stroke-dasharray="5 5"' })).join('') +
    t(722, 538, 'seawater', { size: 15, anchor: 'middle', fill: C.blue, weight: 600 });
  b += panel(570, 420, 300, 280) + t(720, 455, 'Lava diversion', { size: 19, weight: 700, anchor: 'middle' }) +
    tl(588, 485, ['Heimaey, Iceland, 1973:', 'pumped seawater slowed it'], { size: 15, fill: C.muted }, 19) + lava;
  add('01-structural-measures',
    svg(900, 720, 'How structural measures work', b),
    'A building on flexible base-isolation bearings, with cross-bracing, dampers and a wrapped, retrofitted column, above shaking ground. Side panels show a tsunami sea wall and vertical evacuation tower, and seawater being pumped onto lava to protect a harbour as at Heimaey in 1973.',
    'Structural measures absorb, spread or block hazard energy before it reaches people.',
    '### How structural measures work');
}

// 02 Parametric insurance and pooled risk
{
  let b = '';
  const step = (x, n, head, lines, fill = C.panel, edge = C.panelEdge) => panel(x, 130, 250, 170, fill, edge) + badge(x + 34, 168, 20, n, C.cream) +
    t(x + 66, 175, head, { size: 20, weight: 700 }) + tl(x + 22, 218, lines, { size: 16, fill: C.muted }, 22);
  b += step(30, '1', 'Trigger', ['a measured value is reached,', 'e.g. a given magnitude', 'near a city']) +
    step(325, '2', 'Automatic', ['the policy pays out', 'automatically']) +
    step(620, '3', 'Fast cash', ['money for recovery', 'arrives quickly'], C.cream, C.olive);
  b += arrow(282, 215, 320, 215, { w: 4 }) + arrow(577, 215, 615, 215, { w: 4 });
  // pool
  const cx = 450, cy = 470;
  b += panel(30, 330, 840, 290) + t(60, 368, 'Pooling risk between governments', { size: 20, weight: 700 }) +
    t(60, 394, 'e.g. the Caribbean Catastrophe Risk Insurance Facility', { size: 16, fill: C.muted }) +
    `<circle cx="${cx}" cy="${cy + 20}" r="62" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` +
    t(cx, cy + 14, 'shared', { size: 18, weight: 700, anchor: 'middle' }) + t(cx, cy + 36, 'pool', { size: 18, weight: 700, anchor: 'middle' });
  const govs = [[200, 470], [300, 560], [600, 560], [700, 470]];
  govs.forEach(([x, y], i) => {
    b += `<circle cx="${x}" cy="${y}" r="32" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5"/>` + t(x, y + 6, `Gov ${String.fromCharCode(65 + i)}`, { size: 15, weight: 700, anchor: 'middle' });
    const dx = cx - x, dy = cy + 20 - y, L = Math.hypot(dx, dy);
    b += `<line x1="${x + (dx / L) * 36}" y1="${y + (dy / L) * 36}" x2="${cx - (dx / L) * 66}" y2="${cy + 20 - (dy / L) * 66}" stroke="${C.ink}" stroke-width="3" stroke-dasharray="7 5"/>`;
  });
  b += tl(60, 450, ['risk shared', 'between', 'governments'], { size: 15, fill: C.muted }, 19);
  b += panel(30, 640, 840, 76, '#ffffff', C.rust) +
    t(55, 672, 'Limits: insurance helps recovery but does not reduce physical damage,', { size: 17, weight: 600 }) +
    t(55, 698, 'and it is often unaffordable for the poorest.', { size: 17, weight: 600 });
  add('02-parametric-insurance',
    svg(900, 740, 'Parametric insurance: paying out on a trigger', b),
    'Three steps: a measured trigger such as a given magnitude near a city is reached, the policy pays out automatically, and fast cash arrives for recovery. Below, several governments pay into a shared pool, as in the Caribbean Catastrophe Risk Insurance Facility. Insurance helps recovery but does not reduce physical damage and is often unaffordable for the poorest.',
    'A measured trigger, not a damage claim, releases the money, so cash arrives fast.',
    '### Finance and insurance');
}

// 03 Sendai Framework
{
  let b = '';
  b += `<rect x="30" y="120" width="250" height="76" rx="12" fill="#ffffff" stroke="${C.panelEdge}" stroke-width="2.5"/>` +
    t(155, 152, 'Hyogo Framework', { size: 18, weight: 700, anchor: 'middle', fill: C.muted }) + t(155, 178, '(earlier)', { size: 15, anchor: 'middle', fill: C.muted }) +
    arrow(282, 158, 330, 158, { w: 4 }) +
    `<rect x="335" y="120" width="535" height="76" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` +
    t(602, 152, 'Sendai Framework 2015–2030', { size: 21, weight: 700, anchor: 'middle' }) + t(602, 178, 'adopted by UN member states in 2015; voluntary', { size: 15, anchor: 'middle', fill: C.muted });
  const pr = [
    ['1', 'Understanding', 'disaster risk'],
    ['2', 'Strengthening', 'disaster risk governance'],
    ['3', 'Investing in DRR', 'for resilience'],
    ['4', 'Enhancing preparedness', 'and "build back better"'],
  ];
  pr.forEach(([n, a, c], i) => {
    const x = 30 + i * 212, y = 225;
    b += panel(x, y, 200, 170, i === 2 ? C.tealLight : C.panel, i === 2 ? C.tealDark : C.panelEdge) + badge(x + 100, y + 40, 22, n, i === 2 ? C.mustard : C.cream) +
      tl(x + 100, y + 96, a.length > 16 ? ['Enhancing', 'preparedness'] : [a], { size: 18, weight: 700, anchor: 'middle' }, 22) +
      tl(x + 100, y + (a.length > 16 ? 142 : 122), c.length > 18 ? c.replace('disaster risk governance', 'disaster risk|governance').replace('and "build back better"', 'and "build back|better"').split('|') : [c], { size: 15, anchor: 'middle', fill: C.muted }, 19);
  });
  // shift arrow: before vs after
  const y = 470;
  b += t(450, 440, 'The shift it asks for', { size: 20, weight: 700, anchor: 'middle' });
  b += `<line x1="60" y1="${y + 40}" x2="840" y2="${y + 40}" stroke="${C.ink}" stroke-width="3"/>` +
    `<line x1="450" y1="${y + 15}" x2="450" y2="${y + 65}" stroke="${C.rust}" stroke-width="5"/>` + t(450, y + 90, 'disaster', { size: 17, weight: 700, anchor: 'middle', fill: C.rust }) +
    `<rect x="60" y="${y + 105}" width="370" height="64" rx="12" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/>` +
    t(245, y + 132, 'Reduce risk before', { size: 19, weight: 700, anchor: 'middle' }) + t(245, y + 156, 'attention shifts here', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 }) +
    `<rect x="470" y="${y + 105}" width="370" height="64" rx="12" fill="#ffffff" stroke="${C.panelEdge}" stroke-width="2.5"/>` +
    t(655, y + 132, 'Manage the disaster after', { size: 19, weight: 700, anchor: 'middle', fill: C.muted }) + t(655, y + 156, 'the earlier focus', { size: 15, anchor: 'middle', fill: C.muted });
  b += panel(30, 670, 840, 64, C.cream, C.olive) +
    t(450, 709, 'Voluntary: progress depends on national action and funding.', { size: 18, weight: 700, anchor: 'middle' });
  add('03-sendai-framework',
    svg(900, 750, 'The Sendai Framework 2015–2030', b),
    'The Sendai Framework, adopted in 2015 after the Hyogo Framework, has four priorities: understanding disaster risk, strengthening disaster risk governance, investing in disaster risk reduction for resilience, and enhancing preparedness and building back better. It shifts attention from managing disasters afterwards to reducing risk beforehand.',
    'Sendai moves the focus from responding after disasters to reducing risk before them.',
    '## The international framework');
}

// 04 Indian Ocean warning chain and the last mile
{
  const nodes = [
    ['Seismic sensors', '', C.tealLight, C.tealDark],
    ['Sea-level gauges', '', C.tealLight, C.tealDark],
    ['National warning centres', '', C.tealLight, C.tealDark],
  ];
  let b = t(270, 140, 'Detection: much better since 2004', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  nodes.forEach(([h, s, f, e], i) => {
    const y = 160 + i * 130;
    b += panel(60, y, 420, 100, f, e) + t(270, y + 58, h, { size: 21, weight: 700, anchor: 'middle' });
    if (i < 2) b += arrow(270, y + 102, 270, y + 126, { w: 4 });
  });
  b += arrow(482, 470, 560, 470, { w: 5, color: C.rust, marker: 'ahR' });
  b += `<rect x="565" y="200" width="305" height="360" rx="14" fill="${C.cream}" stroke="${C.rust}" stroke-width="3" stroke-dasharray="10 7"/>` +
    t(717, 240, 'The "last mile"', { size: 22, weight: 700, anchor: 'middle', fill: C.rust }) +
    tl(717, 275, ['warnings still have to', 'reach remote coastal', 'villages in time'], { size: 17, anchor: 'middle' }, 23) +
    t(717, 375, 'depends on', { size: 16, anchor: 'middle', fill: C.muted, italic: true }) +
    `<rect x="590" y="392" width="255" height="56" rx="10" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + t(717, 427, 'local communication', { size: 18, weight: 600, anchor: 'middle' }) +
    `<rect x="590" y="460" width="255" height="56" rx="10" fill="#ffffff" stroke="${C.ink}" stroke-width="2"/>` + t(717, 495, 'education', { size: 18, weight: 600, anchor: 'middle' });
  b += panel(30, 590, 840, 100) +
    t(55, 628, '2004: no regional warning system; the tsunami killed people', { size: 18, weight: 700 }) +
    t(55, 656, 'in many countries hours after the earthquake. A regional system was set up afterwards.', { size: 17, fill: C.muted });
  add('04-tsunami-warning-last-mile',
    svg(900, 710, 'Indian Ocean warnings and the last mile', b),
    'The regional warning chain set up after 2004: seismic sensors, sea-level gauges and national warning centres. A final dashed box shows the last mile, where warnings must still reach remote coastal villages through local communication and education.',
    'Sensors are not enough: a warning only works if it reaches the last village.',
    '### Indian Ocean tsunami warning system');
}
