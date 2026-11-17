import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'a-level-geography-9696-diurnal-energy-budgets-revision-notes';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// local helpers
const wrap = (s, n) => { const out = ['']; for (const w of s.split(' ')) { const c = out[out.length - 1]; if (c && (c + ' ' + w).length > n) out.push(w); else out[out.length - 1] = c ? c + ' ' + w : w; } return out; };
const wavy = (x, y1, y2, amp = 9, step = 26) => { let d = `M${x},${y1}`; let y = y1, s = 1; while (y - step > y2) { d += ` q${amp * s},${-step / 2} 0,${-step}`; y -= step; s = -s; } return d + ` L${x},${y2}`; };
const label = (x, y, n, head, sub, { fill = C.ink, subFill = C.muted, badgeFill = C.cream } = {}) =>
  badge(x + 16, y - 6, 16, n, badgeFill) + t(x + 40, y, head, { size: 18, weight: 700, fill }) + (sub ? tl(x + 40, y + 22, sub, { size: 15, fill: subFill }, 19) : '');

// 01 Daytime budget
{
  const S = 440; // surface
  const sky = `<rect x="30" y="110" width="840" height="${S - 110}" fill="${C.tealLight}"/>`;
  const ground = `<rect x="30" y="${S}" width="840" height="150" fill="${C.rock}"/><line x1="30" y1="${S}" x2="870" y2="${S}" stroke="${C.ink}" stroke-width="3.5"/>` +
    `<rect x="30" y="${S}" width="840" height="14" fill="${C.grass}" opacity="0.6"/>`;
  const sun = `<circle cx="95" cy="190" r="34" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` +
    [0, 45, 90, 135, 180, 225, 270, 315].map((a) => { const r = (a * Math.PI) / 180; return `<line x1="${95 + 42 * Math.cos(r)}" y1="${190 + 42 * Math.sin(r)}" x2="${95 + 54 * Math.cos(r)}" y2="${190 + 54 * Math.sin(r)}" stroke="${C.olive}" stroke-width="4" stroke-linecap="round"/>`; }).join('');
  const plant = (x) => path(`M${x},${S} q-4,-30 -22,-44 M${x},${S} q2,-34 18,-50 M${x},${S} l0,-36`, { stroke: C.grass, w: 5 });
  const body = sky + ground + sun +
    // 1 incoming
    arrow(125, 232, 205, S - 6, { color: C.olive, w: 12, marker: 'ahO' }) +
    label(150, 170, '1', 'Incoming solar', ['shortwave']) +
    // 2 reflected
    arrow(240, S - 6, 300, 300, { color: C.olive, w: 5, marker: 'ahO' }) +
    label(255, 250, '2', 'Reflected', ['set by albedo']) +
    // 3 ground
    arrow(365, S + 10, 365, S + 120, { w: 6 }) +
    label(385, S + 52, '3', 'Surface absorption', ['heat conducted', 'into the ground']) +
    // 4 sensible
    path(`M520,${S - 6} q-16,-30 0,-60 q16,-30 0,-60`, { stroke: C.rust, w: 5, extra: 'marker-end="url(#ahR)"' }) +
    label(430, 235, '4', 'Sensible heat', ['warms the air', '(conduction,', 'convection)']) +
    // 5 longwave
    path(wavy(650, S - 6, 270), { stroke: C.rust, w: 4, extra: 'marker-end="url(#ahR)"' }) +
    label(560, 165, '5', 'Longwave', ['emitted by surface']) +
    // 6 latent
    plant(790) + `<ellipse cx="835" cy="${S + 4}" rx="30" ry="8" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>` +
    path(`M810,${S - 50} l0,-100`, { stroke: C.tealDark, w: 5, extra: 'stroke-dasharray="10 7" marker-end="url(#ahT)"' }) +
    label(690, 225, '6', 'Latent heat', ['used in', 'evaporation'], { fill: C.tealDark }) +
    t(850, S + 130, 'GROUND', { size: 16, weight: 700, anchor: 'end', fill: C.ink }) +
    t(850, 140, 'AIR', { size: 16, weight: 700, anchor: 'end', fill: C.tealDark }) +
    panel(30, 615, 840, 150, C.cream, C.olive) +
    t(55, 652, 'Energy available at the surface =', { size: 19, weight: 700 }) +
    t(55, 684, '① incoming solar − ② reflected solar − ③ surface absorption', { size: 18 }) +
    t(55, 712, '− ④ sensible heat − ⑤ longwave − ⑥ latent heat (evaporation)', { size: 18 }) +
    t(55, 746, 'Net radiation is positive, so the surface warms into the early afternoon.', { size: 17, weight: 600, fill: C.tealDark });
  add('01-daytime-energy-budget',
    svg(900, 790, 'The daytime energy budget', body),
    'Cross-section of a ground surface by day. Incoming shortwave solar radiation arrives; some is reflected according to albedo, some is conducted into the ground, and the rest leaves as sensible heat to the air, emitted longwave radiation and latent heat used in evaporation. A box gives the six-component equation.',
    'By day the surface gains more than it loses, so net radiation is positive and it warms.',
    '## Daytime budget');
}

// 02 Night-time budget
{
  const S = 440;
  const sky = `<rect x="30" y="110" width="840" height="${S - 110}" fill="${C.ink}"/>`;
  const ground = `<rect x="30" y="${S}" width="840" height="150" fill="${C.rock}"/><line x1="30" y1="${S}" x2="870" y2="${S}" stroke="${C.ink}" stroke-width="3.5"/>` +
    `<rect x="30" y="${S}" width="840" height="14" fill="${C.grass}" opacity="0.6"/>`;
  const moon = `<circle cx="95" cy="185" r="30" fill="${C.cream}"/><circle cx="110" cy="175" r="26" fill="${C.ink}"/>` +
    [[180, 140], [300, 175], [560, 135], [760, 150], [840, 230], [420, 140]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="${C.cream}"/>`).join('');
  const W = { fill: '#ffffff', subFill: C.teal, badgeFill: C.cream };
  const drops = [700, 730, 760, 790, 820].map((x, i) => `<path d="M${x},${S - 18 - (i % 2) * 6} q-7,10 0,14 q7,-4 0,-14 z" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="1.5"/>`).join('');
  const defs = `<defs><marker id="ahC" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="18" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${C.teal}"/></marker></defs>`;
  const body = defs + sky + ground + moon +
    t(95, 250, 'no solar input', { size: 16, weight: 600, fill: C.cream, anchor: 'middle' }) +
    // longwave loss (big)
    path(wavy(260, S - 6, 210, 12, 30), { stroke: C.mustard, w: 7, extra: 'marker-end="url(#ahO)"' }) +
    path(wavy(320, S - 6, 230, 12, 30), { stroke: C.mustard, w: 7, extra: 'marker-end="url(#ahO)"' }) +
    label(345, 300, '−', 'Longwave lost', ['to the sky: the', 'surface cools'], W) +
    // subsurface supply up
    arrow(260, S + 125, 260, S + 14, { w: 6 }) +
    label(285, S + 52, '+', 'Subsurface supply', ['heat conducted up', 'from the ground']) +
    // sensible from air down
    arrow(560, 200, 560, S - 10, { color: C.teal, w: 6, marker: 'ahC' }) +
    label(580, 200, '+', 'Sensible heat', ['from the air'], W) +
    // latent released
    drops + arrow(760, 312, 760, S - 34, { color: C.teal, w: 4, dash: '9 6', marker: 'ahC' }) +
    label(690, 270, '+', 'Latent heat', ['released if dew', 'or fog forms'], W) +
    t(850, S + 130, 'GROUND', { size: 16, weight: 700, anchor: 'end' }) +
    panel(30, 615, 840, 150, C.cream, C.olive) +
    t(55, 652, 'Energy available at the surface =', { size: 19, weight: 700 }) +
    t(55, 684, '− longwave radiation + subsurface supply + sensible heat transfer', { size: 18 }) +
    t(55, 712, '+ latent heat transfer (condensation)', { size: 18 }) +
    t(55, 746, 'Net radiation is negative; the coldest time is usually just before dawn.', { size: 17, weight: 600, fill: C.rust });
  add('02-night-time-energy-budget',
    svg(900, 790, 'The night-time energy budget', body),
    'Cross-section of a ground surface at night with no sun. The surface loses longwave radiation to the sky and cools, partly offset by heat conducted up from the ground, sensible heat from the air and latent heat released when dew or fog forms. A box gives the night-time equation.',
    'With no solar input, longwave loss wins: net radiation is negative and the surface cools until dawn.',
    '## Night-time budget');
}

// 03 Albedo ranges
{
  const halo = (str) => str.replace('<text ', '<text paint-order="stroke" stroke="#ffffff" stroke-width="7" stroke-linejoin="round" ');
  const x0 = 290, x1 = 830, sc = (v) => x0 + ((x1 - x0) * v) / 100;
  const rows = [
    ['Fresh snow', 80, 90, 'often 80–90%'],
    ['Desert sand', 30, 40, 'about 30–40%'],
    ['Grass and crops', 20, 25, 'about 20–25%'],
    ['Forest', 10, 20, 'about 10–20%'],
    ['Asphalt', 0, 10, 'under 10%'],
  ];
  const top = 140, rh = 72;
  let b = panel(30, 110, 840, 560);
  [0, 20, 40, 60, 80, 100].forEach((v) => {
    b += `<line x1="${sc(v)}" y1="${top}" x2="${sc(v)}" y2="${top + rows.length * rh + 72}" stroke="${C.tealLight}" stroke-width="2"/>` +
      t(sc(v), top + rows.length * rh + 98, `${v}%`, { size: 16, anchor: 'middle', fill: C.muted });
  });
  rows.forEach(([name, a, z, note], i) => {
    const y = top + i * rh + 20;
    b += t(60, y + 22, name, { size: 19, weight: 700 });
    const fill = i === 0 ? C.mustard : C.teal;
    if (i === 4) b += `<rect x="${sc(0)}" y="${y}" width="${sc(z) - sc(0)}" height="32" rx="6" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="7 5"/>`;
    else b += `<rect x="${sc(a)}" y="${y}" width="${sc(z) - sc(a)}" height="32" rx="6" fill="${fill}" stroke="${C.ink}" stroke-width="2.5"/>`;
    b += halo(i === 0 ? t(sc(a) - 12, y + 23, note, { size: 16, anchor: 'end', fill: C.muted }) : t(sc(z) + 12, y + 23, note, { size: 16, fill: C.muted }));
  });
  const wy = top + rows.length * rh + 20;
  b += t(60, wy + 22, 'Water', { size: 19, weight: 700 }) +
    halo(t(x0, wy + 22, 'low when the sun is high; much higher at low sun angles', { size: 16, fill: C.muted, italic: true }));
  b += t(450, top + rows.length * rh + 130, 'albedo = share of incoming radiation reflected', { size: 17, weight: 600, anchor: 'middle', fill: C.tealDark });
  b += panel(30, 690, 840, 92, C.cream, C.olive) +
    t(55, 727, 'High albedo: reflects most radiation, heats little (snow).', { size: 18, weight: 600 }) +
    t(55, 757, 'Low albedo: dark, dry surfaces absorb more and heat quickly.', { size: 18, weight: 600 });
  add('03-albedo-ranges',
    svg(900, 800, 'Typical albedo of different surfaces', b),
    'Bar chart of approximate albedo ranges: fresh snow 80 to 90 per cent, desert sand 30 to 40, grass and crops 20 to 25, forest 10 to 20 and asphalt under 10. Water is low when the sun is high and much higher at low sun angles.',
    'Albedo is the reflected share: snow reflects most radiation, asphalt and forest very little.',
    '## Albedo values (approximate)');
}

// 04 Night-time phenomena: valley cross-section + inversion profile
{
  const vf = 560; // valley floor
  const P0 = [40, 250], P1 = [160, 260], P2 = [250, 420];
  const bez = (u) => [0, 1].map((k) => (1 - u) ** 2 * P0[k] + 2 * u * (1 - u) * P1[k] + u * u * P2[k]);
  const valley = `<path d="M40,250 Q160,260 250,420 Q320,${vf} 400,${vf} Q480,${vf} 545,420 Q562,380 580,350 L580,640 L40,640 Z" fill="#d8e3c6" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  const fog = `<rect x="200" y="478" width="380" height="${vf - 478}" fill="#ffffff" opacity="0.95"/><line x1="232" y1="478" x2="560" y2="478" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 5"/>`;
  const grass = [0.25, 0.42, 0.58].map((u) => { const [x, y] = bez(u); return path(`M${x},${y} l-7,-22 M${x},${y} l1,-26 M${x},${y} l9,-20`, { stroke: C.grass, w: 3.5 }) + `<path d="M${x + 1},${y - 34} q-6,10 0,13 q6,-3 0,-13 z" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="1.5"/>`; }).join('');
  let b = panel(30, 110, 560, 560) + `<rect x="40" y="120" width="540" height="540" rx="10" fill="${C.ink}" opacity="0.06"/>` + fog + valley + grass +
    arrow(235, 300, 320, 445, { color: C.blue, w: 5 }) + arrow(540, 385, 500, 470, { color: C.blue, w: 5 }) +
    t(70, 205, 'Dew on grass', { size: 17, weight: 700 }) + t(70, 226, '(frost below 0 °C)', { size: 16, fill: C.muted }) +
    t(240, 262, 'cold, dense air', { size: 16, weight: 600, fill: C.blue }) + t(240, 282, 'drains downhill', { size: 16, weight: 600, fill: C.blue }) +
    t(400, 520, 'radiation fog', { size: 16, weight: 700, anchor: 'middle', fill: C.ink }) +
    t(400, vf + 40, 'Frost hollow:', { size: 17, weight: 700, anchor: 'middle' }) + t(400, vf + 62, 'coldest on the valley floor', { size: 16, anchor: 'middle', fill: C.muted }) +
    t(400, 165, 'clear, calm night', { size: 17, weight: 600, anchor: 'middle', fill: C.muted }) +
    path(wavy(430, 380, 210, 7, 20), { stroke: C.rust, w: 3.5, extra: 'marker-end="url(#ahR)"' }) + t(448, 288, 'longwave', { size: 15, fill: C.rust, weight: 600 }) + t(448, 306, 'loss', { size: 15, fill: C.rust, weight: 600 });
  // inversion profile
  const gx = 640, gy = 600, gw = 210, gh = 360;
  b += panel(610, 110, 260, 560) + t(740, 150, 'Inversion', { size: 20, weight: 700, anchor: 'middle' }) +
    `<rect x="${gx + 2}" y="${gy - 130}" width="${gw - 6}" height="128" fill="${C.teal}" opacity="0.45"/>` +
    arrow(gx, gy, gx, gy - gh, { w: 3 }) + arrow(gx, gy, gx + gw, gy, { w: 3 }) +
    t(gx + gw / 2, gy + 30, 'temperature', { size: 15, anchor: 'middle', fill: C.muted }) +
    `<text x="${gx - 10}" y="${gy - gh / 2}" font-size="15" fill="${C.muted}" text-anchor="middle" transform="rotate(-90 ${gx - 10} ${gy - gh / 2})">height</text>` +
    path(`M${gx + 15},${gy - 2} L${gx + 75},${gy - 130} L${gx + 20},${gy - gh + 40}`, { stroke: C.rust, w: 4.5 }) +
    tl(gx + 90, gy - 170, ['warmer', 'air above'], { size: 15, fill: C.rust, weight: 600 }, 18) +
    tl(gx + 90, gy - 95, ['cold air', 'traps fog', 'and pollution'], { size: 15, weight: 600, fill: C.tealDark }, 18) +
    tl(740, 178, ['air warms with height', 'near the ground'], { size: 15, fill: C.muted, anchor: 'middle' }, 18);
  b += panel(30, 690, 840, 90, C.cream, C.olive) +
    t(55, 726, 'Surfaces cool by longwave loss; air cools to its dew point.', { size: 18, weight: 600 }) +
    t(55, 756, 'Fog and pollution stay trapped until the morning sun warms the surface.', { size: 18, fill: C.muted });
  add('04-night-time-phenomena',
    svg(900, 800, 'Dew, fog, inversions and frost hollows', b),
    'A valley cross-section on a clear, calm night. Dew forms on grass on the slopes, cold dense air drains downhill and collects on the valley floor as a frost hollow, and radiation fog fills the valley bottom. A side graph shows temperature rising with height near the ground in an inversion.',
    'Clear, calm nights bring dew or frost, radiation fog, inversions and frost hollows.',
    '## Night-time phenomena');
}
