import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-geography-oceans-coastal-margins-ocean-management-futures-revision-notes';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// 01 Tragedy of the commons loop
{
  const cx = 450, cy = 400, R = 210;
  const nodes = [
    [-90, 'Open to all', ['a high-seas fish stock']],
    [0, 'Each user gains', ['from taking more']],
    [90, 'Cost is shared', ['depletion falls on everyone']],
    [180, 'Collapse for all', ['without agreed limits']],
  ];
  let b = '';
  const pos = (a) => [cx + R * Math.cos((a * Math.PI) / 180), cy + R * Math.sin((a * Math.PI) / 180)];
  // arcs between nodes
  for (let i = 0; i < 3; i++) {
    const a1 = nodes[i][0] + 30, a2 = nodes[(i + 1) % 4][0] - 30 + (i === 3 ? 360 : 0);
    const [x1, y1] = pos(a1), [x2, y2] = pos(a2);
    b += `<path d="M${x1},${y1} A${R},${R} 0 0 1 ${x2},${y2}" fill="none" stroke="${i === 3 ? C.rust : C.ink}" stroke-width="4" marker-end="url(#${i === 3 ? 'ahR' : 'ah'})"${i === 3 ? ' stroke-dasharray="10 7"' : ''}/>`;
  }
  nodes.forEach(([a, h, s], i) => {
    const [x, y] = pos(a), w = 240, hgt = 84;
    const fill = i === 3 ? C.cream : C.panel, edge = i === 3 ? C.rust : C.panelEdge;
    b += panel(x - w / 2, y - hgt / 2, w, hgt, fill, edge) + t(x, y - 6, h, { size: 20, weight: 700, anchor: 'middle', fill: i === 3 ? C.rust : C.ink }) +
      t(x, y + 22, s[0], { size: 15, anchor: 'middle', fill: C.muted });
  });
  b += `<circle cx="${cx}" cy="${cy}" r="92" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="3"/>` +
    t(cx, cy - 18, 'Break the chain:', { size: 17, weight: 700, anchor: 'middle' }) +
    t(cx, cy + 8, 'agreed limits', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) +
    t(cx, cy + 32, '(quotas, MPAs)', { size: 15, anchor: 'middle', fill: C.ink });
  add('01-tragedy-of-the-commons',
    svg(900, 680, 'The tragedy of the commons at sea', b),
    'A chain around a circle: a high-seas fish stock is open to all, each user gains from taking more, the cost of depletion is shared by everyone, and without agreed limits the stock collapses for all. In the centre, agreed limits such as quotas and marine protected areas break the chain.',
    'Without agreed limits, each user\'s rational choice leads to collapse for all.',
    '## Key ideas');
}

// 02 UNCLOS zones
{
  const L = 140; // baseline x
  const xs = { b: L, ts: 200, cz: 270, eez: 640, cs: 760 };
  const top = 170, bot = 330;
  let b = `<rect x="30" y="${top}" width="${L - 30}" height="${bot - top}" fill="#d8e3c6" stroke="${C.ink}" stroke-width="3"/>` +
    t((30 + L) / 2, (top + bot) / 2 + 6, 'LAND', { size: 18, weight: 700, anchor: 'middle', fill: C.muted }) +
    `<rect x="${L}" y="${top}" width="${xs.ts - L}" height="${bot - top}" fill="${C.tealDark}" opacity="0.9"/>` +
    `<rect x="${xs.ts}" y="${top}" width="${xs.cz - xs.ts}" height="${bot - top}" fill="${C.teal}"/>` +
    `<rect x="${xs.cz}" y="${top}" width="${xs.eez - xs.cz}" height="${bot - top}" fill="${C.tealLight}"/>` +
    `<rect x="${xs.eez}" y="${top}" width="${870 - xs.eez}" height="${bot - top}" fill="#ffffff"/>` +
    `<rect x="30" y="${top}" width="840" height="${bot - top}" fill="none" stroke="${C.ink}" stroke-width="3"/>` +
    [xs.ts, xs.cz, xs.eez].map((x) => `<line x1="${x}" y1="${top}" x2="${x}" y2="${bot}" stroke="${C.ink}" stroke-width="2.5"/>`).join('') +
    `<line x1="${L}" y1="${top - 30}" x2="${L}" y2="${bot + 20}" stroke="${C.rust}" stroke-width="4"/>` + t(L, top - 38, 'baseline', { size: 16, weight: 700, anchor: 'middle', fill: C.rust }) +
    t(xs.ts, top - 10, '12', { size: 16, weight: 700, anchor: 'middle' }) + t(xs.cz, top - 10, '24', { size: 16, weight: 700, anchor: 'middle' }) + t(xs.eez, top - 10, '200 nautical miles', { size: 16, weight: 700, anchor: 'middle' }) +
    `<text x="${(L + xs.ts) / 2 + 6}" y="${bot - 12}" font-size="16" font-weight="700" fill="#ffffff" transform="rotate(-90 ${(L + xs.ts) / 2 + 6} ${bot - 12})">Territorial sea</text>` +
    `<text x="${(xs.ts + xs.cz) / 2 + 6}" y="${bot - 12}" font-size="16" font-weight="700" fill="${C.ink}" transform="rotate(-90 ${(xs.ts + xs.cz) / 2 + 6} ${bot - 12})">Contiguous</text>` +
    t((xs.cz + xs.eez) / 2, (top + bot) / 2 - 4, 'Exclusive economic zone', { size: 21, weight: 700, anchor: 'middle' }) +
    t((xs.cz + xs.eez) / 2, (top + bot) / 2 + 22, '(EEZ)', { size: 17, anchor: 'middle', fill: C.tealDark, weight: 600 }) +
    t((xs.eez + 870) / 2, (top + bot) / 2 + 6, 'High seas', { size: 21, weight: 700, anchor: 'middle' });
  // seabed profile with continental shelf
  const sb = 360;
  b += `<path d="M30,${sb} L${xs.cs},${sb + 10} Q${xs.cs + 30},${sb + 12} ${xs.cs + 50},${sb + 60} L870,${sb + 70} L870,${sb + 90} L30,${sb + 90} Z" fill="${C.rock}" stroke="${C.ink}" stroke-width="2.5"/>` +
    t(400, sb + 52, 'continental shelf: can extend beyond 200 nm where the shelf continues', { size: 15, weight: 600, anchor: 'middle', fill: C.ink }) +
    t(830, sb + 86, 'deep seabed', { size: 15, weight: 600, anchor: 'end', fill: C.ink });
  // rights table
  const rows = [
    ['Territorial sea', 'sovereignty; foreign ships keep a right of innocent passage', C.tealDark, '#ffffff'],
    ['Contiguous zone', 'limited control, e.g. customs and immigration', C.teal, C.ink],
    ['EEZ', 'rights over fish, oil, gas and minerals; others keep freedom of navigation', C.tealLight, C.ink],
    ['Continental shelf', 'seabed resources, if backed by scientific evidence', C.rock, C.ink],
    ['High seas', 'open to all; deep seabed is common heritage of humankind (ISA)', '#ffffff', C.ink],
  ];
  rows.forEach(([z, r, f, tf], i) => {
    const y = 480 + i * 56;
    b += `<rect x="30" y="${y}" width="200" height="48" rx="8" fill="${f}" stroke="${C.ink}" stroke-width="2"/>` + t(130, y + 30, z, { size: 17, weight: 700, anchor: 'middle', fill: tf }) +
      t(248, y + 30, r, { size: 16 });
  });
  b += t(450, 785, 'Zones not to scale. Small islands can generate large EEZs, so they matter in disputes.', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  add('02-unclos-zones',
    svg(900, 810, 'UNCLOS: who controls which sea', b, 'measured from the coastal baseline'),
    'A strip of sea from the coastal baseline: territorial sea to 12 nautical miles, contiguous zone to 24, exclusive economic zone to 200, then high seas, with the continental shelf able to extend beyond 200 nautical miles. A table lists the coastal state\'s rights in each zone.',
    'Rights shrink with distance from the baseline: sovereignty, then limited control, then resources only.',
    '### UNCLOS zones');
}

// 03 Grand Banks cod collapse chain
{
  let b = '';
  const causes = [
    ['Industrial trawlers', 'greatly increased catches'],
    ['Stock estimates', 'proved too optimistic'],
    ['Political pressure', 'to keep quotas high'],
  ];
  b += t(165, 135, 'Causes', { size: 19, weight: 700, anchor: 'middle', fill: C.muted });
  causes.forEach(([h, s], i) => {
    const y = 150 + i * 110;
    b += panel(30, y, 270, 92) + t(165, y + 38, h, { size: 19, weight: 700, anchor: 'middle' }) + t(165, y + 66, s, { size: 16, anchor: 'middle', fill: C.muted }) +
      arrow(302, y + 46, 352, 305, { w: 3 });
  });
  b += panel(360, 230, 230, 150, C.cream, C.olive) + t(475, 272, 'Catches above', { size: 19, weight: 700, anchor: 'middle' }) +
    t(475, 298, 'maximum sustainable', { size: 19, weight: 700, anchor: 'middle' }) + t(475, 324, 'yield', { size: 19, weight: 700, anchor: 'middle' }) +
    t(475, 356, 'stock is depleted', { size: 15, anchor: 'middle', fill: C.muted });
  b += arrow(592, 305, 628, 305, { w: 4.5 });
  b += panel(632, 200, 238, 210, '#ffffff', C.rust) + t(751, 240, '1992', { size: 30, weight: 700, anchor: 'middle', fill: C.rust }) +
    t(751, 272, 'moratorium on', { size: 18, weight: 700, anchor: 'middle' }) + t(751, 296, 'northern cod', { size: 18, weight: 700, anchor: 'middle' }) +
    tl(751, 332, ['tens of thousands lose', 'work in fishing and', 'processing'], { size: 15, anchor: 'middle', fill: C.muted }, 19);
  b += arrow(751, 412, 751, 452, { w: 4 });
  b += panel(632, 456, 238, 70, C.tealLight, C.tealDark) + t(751, 498, 'Recovery is slow', { size: 19, weight: 700, anchor: 'middle' });
  b += panel(30, 560, 840, 110, C.cream, C.olive) + t(55, 596, 'Lesson', { size: 19, weight: 700 }) +
    t(55, 624, 'Scientific uncertainty, pressure to keep quotas high and slow ecosystem response', { size: 17 }) +
    t(55, 650, 'can turn overfishing into collapse, even under national control.', { size: 17 });
  add('03-grand-banks-cod-collapse',
    svg(900, 690, 'Collapse of the Grand Banks cod fishery', b, 'off Newfoundland, Canada'),
    'Three causes, industrial trawlers increasing catches, over-optimistic stock estimates and political pressure to keep quotas high, lead to catches above maximum sustainable yield. This ends in the 1992 moratorium on northern cod, with tens of thousands losing work, and slow recovery.',
    'Overfishing, optimistic science and political pressure turned depletion into collapse.',
    '### Collapse of the Grand Banks cod fishery, Canada');
}

// 04 Great Barrier Reef zoning and threats that cross boundaries
{
  let b = panel(30, 110, 560, 560);
  // coast on left, park as strip
  b += `<path d="M40,120 L170,120 Q150,250 190,360 Q230,470 270,660 L40,660 Z" fill="#d8e3c6" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>` +
    t(95, 300, 'LAND', { size: 18, weight: 700, anchor: 'middle', fill: C.muted }) +
    t(100, 330, 'farmland', { size: 15, anchor: 'middle', fill: C.muted });
  // zones as bands (schematic)
  const zone = (d, fill, op = 1) => `<path d="${d}" fill="${fill}" opacity="${op}" stroke="${C.ink}" stroke-width="2"/>`;
  b += zone('M170,120 L330,120 Q320,250 360,360 Q400,470 440,660 L270,660 Q230,470 190,360 Q150,250 170,120 Z', C.tealLight) +
    zone('M330,120 L470,120 Q460,250 500,360 Q530,470 560,660 L440,660 Q400,470 360,360 Q320,250 330,120 Z', C.teal) +
    zone('M300,180 L420,180 L440,300 L320,300 Z', C.grass, 0.85) +
    zone('M380,400 L500,400 L520,520 L400,520 Z', C.grass, 0.85) +
    zone('M300,560 L370,560 L385,645 L315,645 Z', C.grass, 0.85);
  b += t(370, 245, 'green zone', { size: 15, weight: 700, anchor: 'middle', fill: '#ffffff' }) + t(450, 465, 'green zone', { size: 15, weight: 700, anchor: 'middle', fill: '#ffffff' });
  // runoff arrows from land
  b += arrow(150, 420, 270, 445, { color: C.olive, w: 4, marker: 'ahO' }) + arrow(160, 500, 290, 520, { color: C.olive, w: 4, marker: 'ahO' }) +
    tl(48, 455, ['runoff'], { size: 15, weight: 700, fill: C.olive });
  // warming
  b += path('M540,150 q8,10 0,20 q-8,10 0,20 q8,10 0,20', { stroke: C.rust, w: 4 }) + path('M565,150 q8,10 0,20 q-8,10 0,20 q8,10 0,20', { stroke: C.rust, w: 4 }) +
    t(555, 235, 'warm', { size: 15, weight: 700, anchor: 'middle', fill: C.rust }) + t(555, 252, 'water', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
  // legend
  const key = (y, fill, h, s, op = 1) => `<rect x="620" y="${y}" width="40" height="34" rx="6" fill="${fill}" opacity="${op}" stroke="${C.ink}" stroke-width="2"/>` +
    t(675, y + 16, h, { size: 17, weight: 700 }) + t(675, y + 36, s, { size: 15, fill: C.muted });
  b += panel(605, 110, 265, 300) + t(737, 145, 'Zoning', { size: 20, weight: 700, anchor: 'middle' }) +
    key(170, C.tealLight, 'General use', 'some areas') +
    key(240, C.teal, 'Restricted', 'fishing limited') +
    key(310, C.grass, 'No-take green', 'roughly a third', 0.85) +
    t(737, 385, 'since rezoning in 2004', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  b += panel(605, 430, 265, 240, '#ffffff', C.rust) + t(737, 465, 'Crosses the', { size: 19, weight: 700, anchor: 'middle', fill: C.rust }) +
    t(737, 489, 'boundaries', { size: 19, weight: 700, anchor: 'middle', fill: C.rust }) +
    t(625, 530, '•', { size: 16, weight: 700 }) + tl(642, 530, ['warming water:', 'repeated mass', 'bleaching'], { size: 16 }, 22) +
    t(625, 610, '•', { size: 16, weight: 700 }) + tl(642, 610, ['pollution running', 'off farmland'], { size: 16 }, 22);
  b += t(310, 690, 'Schematic, not to scale', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  add('04-great-barrier-reef-zoning',
    svg(900, 710, 'Great Barrier Reef: zoning and its limits', b),
    'A schematic of the Great Barrier Reef Marine Park beside the coast, divided into general-use areas, areas where fishing is restricted and no-take green zones, which cover roughly a third of the park since 2004. Warm water and runoff from farmland cross the zone boundaries.',
    'Zoning manages use inside the park but cannot stop warming water or farm runoff.',
    '### Great Barrier Reef Marine Park, Australia');
}
