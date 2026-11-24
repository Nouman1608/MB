import { C, svg, t, tl, arrow, path } from '../style.mjs';

// Replacement for figure 17-h (D-493). The original image was labelled "Sea at least 26.5 °C";
// the 0680 syllabus (6.2.1) gives ocean temperature of at least 27 °C and ocean depth of at least 60 m.
// A new file name (-v2) is used because the uploader skips names already live on img.marlbridge.com.
export const slug = 'cambridge-igcse-environmental-management-natural-hazards-study-guide';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const SKY = '#eaf2f5', SEA = '#a2c8d8', LAND = '#b89a70', CLOUD_EDGE = '#9fb3bd';
const line = (x1, y1, x2, y2, o = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.color || C.ink}" stroke-width="${o.w || 2.5}" stroke-linecap="round"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const ell = (cx, cy, rx, ry, fill, edge, sw = 3, dash = '') => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const sun = (cx, cy, r = 17) => {
  let s = '';
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4;
    s += line(cx + Math.cos(a) * (r + 7), cy + Math.sin(a) * (r + 7), cx + Math.cos(a) * (r + 17), cy + Math.sin(a) * (r + 17), { color: C.olive, w: 3 });
  }
  return s + `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${C.mustard}" stroke="${C.olive}" stroke-width="2.5"/>`;
};
// Archimedean spiral seen from above (the storm's rotation)
const spiral = (cx, cy, turns = 2.4, rMax = 66) => {
  const n = 160, pts = [];
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * turns * 2 * Math.PI, r = 6 + ((rMax - 6) * i) / n;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
  }
  return path(`M${pts.join(' L')}`, { stroke: C.tealDark, w: 5 });
};

{
  const W = 900, H = 760;
  let b = '';
  // sky
  b += `<rect x="40" y="120" width="820" height="440" fill="${SKY}"/>`;
  // sea and land
  b += `<rect x="40" y="560" width="560" height="150" fill="${SEA}" stroke="${C.ink}" stroke-width="3"/>`;
  b += `<rect x="600" y="560" width="260" height="150" fill="${LAND}" stroke="${C.ink}" stroke-width="3"/>`;
  b += sun(100, 612);
  b += tl(150, 618, ['Sea at least 27 °C,', 'at least 60 m deep'], { size: 20, weight: 700 }, 30);
  b += tl(730, 600, ['Land:', 'storm', 'weakens'], { size: 20, weight: 700, anchor: 'middle' }, 32);
  // cloud towers either side of the eye, with the anvil on top
  b += ell(175, 430, 90, 125, '#ffffff', CLOUD_EDGE);
  b += ell(445, 430, 90, 125, '#ffffff', CLOUD_EDGE);
  b += ell(310, 310, 230, 42, '#ffffff', CLOUD_EDGE);
  b += `<rect x="266" y="337" width="88" height="20" fill="${SKY}"/>`; // the eye: clear air down the middle
  b += t(310, 450, 'Eye', { size: 18, weight: 700, anchor: 'middle' });
  // rising warm moist air and outflow at the top
  b += arrow(175, 545, 175, 350, { color: C.rust, w: 6, marker: 'ahR' });
  b += arrow(445, 545, 445, 350, { color: C.rust, w: 6, marker: 'ahR' });
  b += arrow(210, 277, 108, 250, { color: C.rust, w: 4, marker: 'ahR' });
  b += arrow(410, 277, 512, 250, { color: C.rust, w: 4, marker: 'ahR' });
  // warm moist air drawn in over the sea surface
  b += arrow(58, 540, 122, 540, { color: C.rust, w: 4, marker: 'ahR' });
  b += arrow(562, 540, 498, 540, { color: C.rust, w: 4, marker: 'ahR' });
  b += tl(52, 170, ['Warm moist air rises,', 'condenses, releases heat'], { size: 20, weight: 700, fill: C.rust }, 32);
  // spin, seen from above
  b += spiral(735, 236);
  b += tl(735, 345, ['Spins: away from', 'the equator'], { size: 20, weight: 700, anchor: 'middle' }, 32);
  // track towards land, where the storm weakens
  b += arrow(580, 400, 650, 482, { w: 3.5 });
  b += ell(735, 500, 70, 40, 'none', CLOUD_EDGE, 3.5, '9 7');

  add(
    '17-h-cyclone-formation-v2',
    svg(W, H, 'Where a cyclone gets its energy', b),
    'A side view of a tropical cyclone over warm sea with a calm eye. Warm moist air from sea that is at least 27 degrees Celsius and at least 60 metres deep rises, cools and condenses, releasing heat that drives the storm. A spiral from above shows the spin that needs distance from the equator. Over land the storm loses its energy supply and weakens.',
    'A cyclone feeds on warm sea water and weakens over land or colder water.',
    '### Management',
  );
}
