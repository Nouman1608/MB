// Board-neutral redraws of three GCSE / IGCSE probability pictures (tree without replacement,
// conditional probability from a Venn diagram and from a two-way table) first drawn for Cambridge
// IGCSE and reused on AQA, OCR and OxfordAQA pages. Same numbers; the "Extended" tier pill is gone.
import { C, svg, t } from '../style.mjs';

export const slug = 'mathematics-probability';
const W = 900;
const RED = '#c0392b', BLUE = '#2b5a9a', PALE = '#b5d3cf', LIGHT = '#dce9e7', GOLD = '#d4b02e', TINT = '#edf2f2';

const pill = (cx, y, w, s, fill) => `<rect x="${cx - w / 2}" y="${y}" width="${w}" height="40" rx="20" fill="${fill}"/>` + t(cx, y + 28, s, { size: 20, weight: 700, fill: '#ffffff', anchor: 'middle' });

// ---------- 03 Tree without replacement ----------
function tree() {
  const o = [];
  const sx = 120, sy = 380, r1 = [330, 214], b1 = [330, 548];
  const ends = [[580, 160, 'R', 'RR 5/14'], [580, 268, 'B', 'RB 15/56'], [580, 494, 'R', 'BR 15/56'], [580, 602, 'B', 'BB 3/28']];
  const line = (a, b, hl) => `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${hl ? C.olive : C.ink}" stroke-width="${hl ? 5 : 3}"/>`;
  o.push(line([sx, sy], r1, true), line([sx, sy], b1, false));
  o.push(line(r1, ends[0], true), line(r1, ends[1], false), line(b1, ends[2], false), line(b1, ends[3], false));
  const node = (x, y, l) => `<circle cx="${x}" cy="${y}" r="19" fill="${l === 'R' ? RED : BLUE}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x, y + 7, l, { size: 19, weight: 700, fill: '#ffffff', anchor: 'middle' });
  o.push(node(...r1, 'R'), node(...b1, 'B'));
  ends.forEach(([x, y, l, s], i) => { o.push(node(x, y, l)); o.push(t(x + 36, y + 8, s, { size: 22, weight: 700, fill: i === 0 ? C.olive : C.ink })); });
  o.push(t(sx, sy + 46, 'Start', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(t(330, 132, '1st draw', { size: 19, fill: C.muted, anchor: 'middle' }), t(580, 112, '2nd draw', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(t(206, 290, '5/8', { size: 21, weight: 700, anchor: 'middle' }), t(206, 492, '3/8', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(450, 168, '4/7', { size: 21, weight: 700, anchor: 'middle' }), t(450, 280, '3/7', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(450, 504, '5/7', { size: 21, weight: 700, anchor: 'middle' }), t(450, 616, '2/7', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(310, 180, '4 red, 3 blue left', { size: 19, weight: 700, fill: C.tealDark, anchor: 'end' }));
  o.push(t(310, 616, '5 red, 2 blue left', { size: 19, weight: 700, fill: C.tealDark, anchor: 'end' }));
  o.push(pill(390, 664, 420, 'Both red: 5/8 × 4/7 = 5/14', C.olive));
  o.push(t(390, 750, 'Second branches change', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(390, 782, 'Seven counters left, not eight', { size: 20, fill: C.muted, anchor: 'middle' }));
  return svg(W, 855, 'Tree diagram: counter kept out', `<g transform="translate(60 40)">${o.join('\n')}</g>`, 'Bag: 5 red, 3 blue. Draw two, no replacing.');
}

// ---------- 04 Conditional Venn ----------
function venn() {
  const o = [];
  o.push(`<rect x="100" y="120" width="700" height="410" rx="8" fill="#ffffff" stroke="${C.ink}" stroke-width="3.5"/>`);
  const fx = 345, sx = 545, cy = 320, r = 150;
  o.push(`<defs><clipPath id="clF"><circle cx="${fx}" cy="${cy}" r="${r}"/></clipPath></defs>`);
  o.push(`<circle cx="${fx}" cy="${cy}" r="${r}" fill="${PALE}"/>`);
  o.push(`<circle cx="${sx}" cy="${cy}" r="${r}" fill="${GOLD}" clip-path="url(#clF)"/>`);
  o.push(`<circle cx="${sx}" cy="${cy}" r="${r}" fill="none" stroke="${C.muted}" stroke-width="3" stroke-dasharray="8 7"/>`);
  o.push(`<circle cx="${fx}" cy="${cy}" r="${r}" fill="none" stroke="${C.tealDark}" stroke-width="5"/>`);
  o.push(t(fx - 110, 156, 'French', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }), t(sx + 120, 156, 'Spanish', { size: 22, weight: 700, fill: C.muted, anchor: 'middle' }));
  o.push(t(fx - 80, cy + 12, '12', { size: 36, weight: 700, anchor: 'middle' }), t(445, cy + 12, '6', { size: 36, weight: 700, anchor: 'middle' }), t(sx + 80, cy + 12, '8', { size: 36, weight: 700, fill: C.muted, anchor: 'middle' }));
  o.push(t(770, 510, '14', { size: 30, weight: 700, fill: C.muted, anchor: 'end' }));
  o.push(pill(450, 556, 300, 'All French: 18 students', C.tealDark));
  o.push(pill(450, 606, 310, 'Spanish too: 6 of the 18', C.olive));
  o.push(t(450, 692, 'Chance = 6/18 = 1/3', { size: 30, weight: 700, anchor: 'middle' }));
  o.push(t(450, 730, 'Not 6 out of 40', { size: 21, weight: 700, fill: C.rust, anchor: 'middle' }));
  return svg(W, 760, 'Given French: use only French', o.join('\n'), '40 students. One studies French. Spanish too?');
}

// ---------- 05 Conditional table ----------
function table() {
  const o = [];
  const x0 = 210, y0 = 170, cw = 160, rh = 92;
  const cols = ['Walk', 'Bus', 'Total'], rows = ['Boys', 'Girls', 'Total'];
  const vals = [[14, 16, 30], [18, 12, 30], [32, 28, 60]];
  cols.forEach((c, j) => o.push(t(x0 + (j + 0.5) * cw, y0 - 16, c, { size: 22, weight: 700, anchor: 'middle' })));
  rows.forEach((r, i) => o.push(t(x0 - 16, y0 + (i + 0.5) * rh + 8, r, { size: 22, weight: 700, anchor: 'end' })));
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
    let fill = i === 2 || j === 2 ? TINT : '#ffffff';
    if (j === 0) fill = i === 1 ? GOLD : i === 2 ? PALE : LIGHT;
    const bold = j === 0 && i >= 1;
    o.push(`<rect x="${x0 + j * cw}" y="${y0 + i * rh}" width="${cw}" height="${rh}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`);
    o.push(t(x0 + (j + 0.5) * cw, y0 + (i + 0.5) * rh + 11, String(vals[i][j]), { size: 32, weight: bold ? 700 : 400, anchor: 'middle' }));
  }
  o.push(`<rect x="${x0}" y="${y0}" width="${cw}" height="${3 * rh}" fill="none" stroke="${C.tealDark}" stroke-width="6"/>`);
  o.push(pill(450, 500, 270, 'Walkers: 32 students', C.tealDark));
  o.push(pill(450, 550, 220, 'Girls who walk: 18', C.olive));
  o.push(t(450, 636, 'Chance = 18/32 = 9/16', { size: 30, weight: 700, anchor: 'middle' }));
  return svg(W, 670, 'Given a walker: one column', o.join('\n'), '60 students. A walker is chosen. A girl?');
}

export const figures = [
  { name: '03-tree-without-replacement', after: '## Combined events and tree diagrams (P6, P8)', svg: tree(),
    alt: 'Same bag, first counter not replaced. After a red, 4 red and 3 blue remain (4/7, 3/7); after a blue, 5 red and 2 blue remain (5/7, 2/7). Both red is 5/8 x 4/7 = 5/14.',
    caption: 'Without replacement the second branches change because the bag has one fewer counter.' },
  { name: '04-conditional-venn', after: '## Conditional probability (P9) -- Higher tier only', svg: venn(),
    alt: 'Venn diagram of 40 students: 12 French only, 6 both, 8 Spanish only, 14 neither. Given French, the sample space is the 18 in the French circle; 6 also study Spanish, so 6/18 = 1/3.',
    caption: 'Given a condition, only the part of the diagram that satisfies it counts.' },
  { name: '05-conditional-table', after: '## Conditional probability (P9) -- Higher tier only', svg: table(),
    alt: 'Two-way table of 60 students: boys 14 walk and 16 bus, girls 18 walk and 12 bus. Given a walker, use the walk column total 32; 18 are girls, so 18/32 = 9/16.',
    caption: 'From a table, the given condition picks one row or column as the whole sample space.' },
];
