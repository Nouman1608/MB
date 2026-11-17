import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-design-criterion-b-developing-ideas';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

const wrap = (s, n) => { const out = ['']; for (const w of s.split(' ')) { if ((out[out.length - 1] + ' ' + w).trim().length > n) out.push(w); else out[out.length - 1] = (out[out.length - 1] + ' ' + w).trim(); } return out; };
const box = (x, y, w, h, fill = C.panel, edge = C.ink, sw = 2.2, rx = 10) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>`;
const chip = (x, y, w, h, s, fill, { size = 17, weight = 700, edge = C.ink, color = C.ink } = {}) =>
  box(x, y, w, h, fill, edge) + t(x + w / 2, y + h / 2 + size * 0.35, s, { size, weight, anchor: 'middle', fill: color });
const lowTop = (x, y, w, h, kind, title, lines, lh = 22) => {
  const top = kind === 'top';
  return panel(x, y, w, h, top ? '#eaf3f1' : '#fbeee6', top ? C.tealDark : C.rust) +
    t(x + 22, y + 36, (top ? '✓ ' : '✗ ') + title, { size: 19, weight: 700, fill: top ? C.tealDark : C.rust }) + tl(x + 22, y + 66, lines, { size: 16, fill: C.ink }, lh);
};

// 01 Anatomy of a specification point
{
  const cols = [
    ['Requirement', ['what it must', 'do or be'], 'Holds a load', C.mustard],
    ['Measurable target', ['number + unit, range', 'or yes/no condition'], '6 kg, deflection 5 mm or less', C.teal],
    ['Reason', ['finding from your', 'Criterion A research'], 'three pots of wet soil, plus a safety margin', C.tealLight],
    ['How it will be tested', ['the extra fourth', 'column'], 'load test with weights', C.cream],
  ];
  let b = t(450, 130, 'Specification point 4 for the balcony planter', { size: 19, weight: 600, anchor: 'middle', fill: C.muted });
  cols.forEach(([h, d, ex, f], i) => {
    const x = 30 + i * 213, w = 200;
    b += box(x, 150, w, 106, f, C.ink, 2.5, 12) + t(x + w / 2, 182, h, { size: 18, weight: 700, anchor: 'middle' }) + tl(x + w / 2, 210, d, { size: 15, anchor: 'middle', fill: C.ink }, 20);
    const el = wrap(ex, 18);
    b += box(x, 268, w, 108, C.panel, C.panelEdge, 2.2, 12) + tl(x + w / 2, 322 - (el.length - 1) * 11.5 + 6, el, { size: 17, anchor: 'middle', weight: 600 }, 23);
  });
  b += path('M736,380 L736,425', { stroke: C.olive, w: 3.5, extra: 'marker-end="url(#ahO)"' });
  b += panel(560, 430, 310, 92, '#eaf3f1', C.tealDark) + t(715, 468, 'feeds Criterion D', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(715, 496, 'tests come straight from here', { size: 16, anchor: 'middle', fill: C.muted });
  b += lowTop(30, 430, 510, 92, 'low', '“It must be strong.”', ['no target, so nothing can be tested']);
  b += t(450, 560, 'Check every category: function, user and ergonomics, size, materials, weight or load,', { size: 16, anchor: 'middle', fill: C.muted }) +
    t(450, 584, 'safety, aesthetics, cost, sustainability and environment, time to make.', { size: 16, anchor: 'middle', fill: C.muted });
  add('01-specification-point-anatomy',
    svg(900, 610, 'Anatomy of a specification point', b),
    'A specification point has a requirement, a measurable target and a reason from research, plus a column for how it will be tested. Example: the planter must hold 6 kg with 5 mm or less deflection, because of three pots of wet soil plus a safety margin, tested with weights. A point like “It must be strong” has no target and cannot be tested.',
    'Requirement, measurable target and reason, plus a test that Criterion D will use.',
    '## 1. Writing a design specification');
}

// 02 Worked project: the balcony planter and its key limits
{
  let b = panel(30, 110, 840, 470);
  // front view of railing with posts 500 mm apart
  const s = 0.9, py = 470, x0 = 120; // px per mm
  b += t(60, 148, 'Front view', { size: 18, weight: 700 }) + t(500, 148, 'Side view', { size: 18, weight: 700 });
  const pW = 500 * s * 0.75; // posts gap drawn 337
  b += box(x0 - 14, 210, 14, 300, C.rock, C.ink, 2) + box(x0 + pW, 210, 14, 300, C.rock, C.ink, 2) + box(x0 - 14, 200, pW + 28, 14, C.rock, C.ink, 2);
  const tw = 450 * 0.75 * 0.9; // trough 304
  const tx = x0 + (pW - tw) / 2;
  b += box(tx, 230, tw, 70, C.cream, C.olive, 2.5, 4);
  [0, 1, 2].forEach((k) => { const cx = tx + tw / 6 + k * (tw / 3); b += `<path d="M${cx - 30},${232} L${cx + 30},${232} L${cx + 24},${290} L${cx - 24},${290} Z" fill="${C.rust}" opacity="0.85" stroke="${C.ink}" stroke-width="2"/>` + path(`M${cx},232 l-10,-26 M${cx},232 l0,-32 M${cx},232 l12,-24`, { stroke: C.grass, w: 3 }); });
  b += path(`M${x0},${py} L${x0 + pW},${py}`, { w: 2, extra: 'marker-end="url(#ah)" marker-start="url(#ah)"' }) + t(x0 + pW / 2, py + 26, '500 mm between posts', { size: 16, anchor: 'middle', weight: 600 });
  b += path(`M${tx},${330} L${tx + tw},${330}`, { w: 2, stroke: C.olive, extra: 'marker-end="url(#ahO)" marker-start="url(#ahO)"' }) + t(x0 + pW / 2, 356, 'length 450 mm or less', { size: 16, anchor: 'middle', weight: 600, fill: C.olive });
  b += t(x0 + pW / 2, 402, 'three 90 mm pots', { size: 16, anchor: 'middle', fill: C.muted });
  // side view
  const rx = 640;
  b += box(rx - 12, 200, 24, 310, C.rock, C.ink, 2) + box(rx - 22, 196, 44, 18, C.rock, C.ink, 2);
  b += box(rx + 22, 228, 160, 70, C.cream, C.olive, 2.5, 4) + box(rx - 30, 192, 8, 46, '#7d8592', C.ink, 2) + box(rx + 22, 192, 8, 46, '#7d8592', C.ink, 2) + box(rx - 30, 186, 60, 10, '#7d8592', C.ink, 2);
  b += t(rx - 40, 182, 'clamp', { size: 15, anchor: 'end', fill: C.muted, weight: 600 });
  b += path(`M${rx - 22},176 L${rx + 22},176`, { w: 2, extra: 'marker-end="url(#ah)" marker-start="url(#ah)"' });
  b += t(rx + 30, 168, 'top rail 40–60 mm', { size: 15, weight: 600 });
  b += path(`M${rx},330 L${rx + 182},330`, { w: 2, stroke: C.olive, extra: 'marker-end="url(#ahO)" marker-start="url(#ahO)"' }) + t(rx + 100, 356, 'projects 180 mm', { size: 16, anchor: 'middle', weight: 600, fill: C.olive }) + t(rx + 100, 378, 'or less', { size: 16, anchor: 'middle', weight: 600, fill: C.olive });
  b += t(rx + 30, 440, 'measured rail: 48 mm', { size: 16, fill: C.muted }) + t(rx + 30, 464, 'no drilling allowed', { size: 16, fill: C.rust, weight: 700 });
  b += panel(30, 600, 840, 74, C.cream, C.olive) + t(450, 645, 'Brief: hold three herb pots on the balcony railing without drilling.', { size: 18, weight: 700, anchor: 'middle' });
  add('02-planter-project-limits',
    svg(900, 700, 'The worked project: a balcony planter', b),
    'Front and side views of a planter on a balcony railing. Railing posts are 500 mm apart, so the planter holding three 90 mm pots is at most 450 mm long. In side view it clamps over a top rail 40 to 60 mm wide (measured at 48 mm) without drilling and projects no more than 180 mm.',
    'The client’s measured balcony sets the planter’s size and fixing limits.',
    '## Worked project used in this guide');
}

// 03 A genuine range of ideas
{
  let b = lowTop(30, 110, 840, 150, 'low', 'Not a range: one idea, three colours', []);
  ['#b5d3cf', '#d4b02e', '#b5602e'].forEach((c, i) => { const x = 120 + i * 250; b += `<path d="M${x},180 L${x + 160},180 L${x + 145},240 L${x + 15},240 Z" fill="${c}" stroke="${C.ink}" stroke-width="2.5"/>`; });
  b += panel(30, 280, 840, 396, '#eaf3f1', C.tealDark) + t(52, 318, '✓ A genuine range: different material, fixing and structure', { size: 19, weight: 700, fill: C.tealDark });
  const ideas = [
    ['A', 'Metal trough', ['aluminium sheet,', 'folded'], ['two hooks bent', 'over the rail'], ['single trough']],
    ['B', 'Clamp-on shelf', ['exterior', 'plywood'], ['two screw clamps', 'grip the rail'], ['slotted shelf']],
    ['C', 'Felt pockets', ['recycled', 'PET felt'], ['strap looped', 'round the rail'], ['three stitched', 'pockets']],
  ];
  ideas.forEach(([L, name, mat, fix, str], i) => {
    const x = 55 + i * 272;
    b += box(x, 340, 250, 316, C.panel, C.ink, 2.2, 12) + badge(x + 36, 378, 22, L, i === 1 ? C.mustard : C.cream) + t(x + 70, 385, name, { size: 19, weight: 700 });
    [['material', mat], ['fixing', fix], ['structure', str]].forEach(([k, v], j) => {
      const y = 430 + j * 82;
      b += t(x + 20, y, k, { size: 15, weight: 700, fill: C.tealDark }) + tl(x + 20, y + 24, v, { size: 17 }, 22);
    });
  });
  add('03-range-of-ideas',
    svg(900, 706, 'What counts as a range of ideas', b),
    'Three copies of the same trough in three colours count as one idea. A genuine range for the planter: idea A, a folded aluminium trough with hooks over the rail; idea B, an exterior-plywood shelf gripped by two screw clamps; idea C, recycled PET felt pockets hung from a strap.',
    'Ideas form a range only if they solve the problem in different ways.',
    '## 2. Generating a range of feasible ideas');
}

// 04 Generate, then check feasibility
{
  let b = t(60, 135, 'Generate', { size: 21, weight: 700 });
  const m = [['Annotated sketching', 'notes link features to spec points'], ['Mind map', 'branch into fixings, materials, forms'], ['Morphological chart', 'functions down the side, options across'], ['SCAMPER', 'change part of an existing product']];
  m.forEach(([h, d], i) => {
    const y = 152 + i * 86;
    b += box(30, y, 400, 74, C.panel, C.panelEdge, 2.2, 12) + t(50, y + 32, h, { size: 18, weight: 700 }) + t(50, y + 56, d, { size: 15, fill: C.muted });
    b += arrow(432, y + 37, 478, 290 + (i - 1.5) * 26, { w: 2.5 });
  });
  b += t(495, 135, 'Feasible? Check all five', { size: 21, weight: 700 });
  const checks = ['skills', 'tools', 'materials', 'time', 'budget'];
  b += path('M490,152 L860,152 L800,480 L550,480 Z', { fill: C.tealLight, stroke: C.tealDark, w: 2.5 });
  checks.forEach((c, i) => { b += chip(575, 166 + i * 60, 210, 46, '✓ ' + c, C.panel, { size: 17, edge: C.tealDark }); });
  b += arrow(675, 484, 675, 520, { w: 3.5, color: C.tealDark, marker: 'ahT' });
  b += panel(30, 528, 840, 110, C.cream, C.olive) + t(55, 566, 'Say so in the annotation:', { size: 18, weight: 700 }) +
    t(55, 600, '“Needs sheet-metal folding – school has a folding bar, so feasible.”', { size: 18, italic: true });
  add('04-generate-and-check-feasibility',
    svg(900, 665, 'Generate ideas, then check feasibility', b),
    'Four ways to generate ideas, annotated sketching, mind maps, morphological charts and SCAMPER, feed a funnel that checks each idea against skills, tools, materials, time and budget. The result is written into the annotation, for example noting that the school has a folding bar for sheet metal.',
    'An idea is feasible only if it can really be made with what is available.',
    '## 2. Generating a range of feasible ideas');
}

// 05 Weighted decision matrix as stacked bars
{
  const crit = [['Holds pots', 3, [5, 5, 4]], ['Fits rail', 3, [3, 5, 2]], ['Holds 6 kg', 2, [5, 4, 2]], ['Weather', 2, [4, 3, 3]], ['Cost', 1, [2, 4, 5]], ['Fitting time', 1, [4, 3, 5]], ['Sustainability', 1, [2, 3, 5]]];
  const cols = [C.tealDark, C.teal, C.mustard, C.cream, C.rust, '#e2c97a', C.tealLight];
  const x0 = 140, sc = 10.5; // px per point
  let b = panel(30, 110, 840, 360);
  ['A', 'B', 'C'].forEach((L, i) => {
    const y = 140 + i * 100;
    let x = x0, tot = 0;
    b += t(70, y + 44, 'Idea ' + L, { size: 19, weight: 700, anchor: 'middle' });
    crit.forEach(([n, w, sc3], k) => {
      const v = w * sc3[i]; tot += v;
      b += `<rect x="${x}" y="${y + 12}" width="${v * sc}" height="50" fill="${cols[k]}" stroke="${C.ink}" stroke-width="1.5"/>`;
      if (v * sc > 36) b += t(x + (v * sc) / 2, y + 43, String(v), { size: 15, weight: 600, anchor: 'middle', fill: k === 0 || k === 4 ? '#fff' : C.ink });
      x += v * sc;
    });
    b += t(x + 12, y + 45, `${tot}`, { size: 24, weight: 700, fill: i === 1 ? C.olive : C.ink });
  });
  b += `<line x1="${x0 + 65 * sc}" y1="130" x2="${x0 + 65 * sc}" y2="440" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 5"/>` + t(x0 + 65 * sc - 6, 456, 'max 65', { size: 15, anchor: 'end', fill: C.muted });
  b += t(x0, 456, 'weighted points (weight × score 1–5)', { size: 15, fill: C.muted });
  // legend
  crit.forEach(([n, w], k) => {
    const col = k % 4, row = Math.floor(k / 4);
    const x = 40 + col * 210, y = 500 + row * 34;
    b += `<rect x="${x}" y="${y - 15}" width="20" height="20" fill="${cols[k]}" stroke="${C.ink}" stroke-width="1.5"/>` + t(x + 28, y, `${n} (×${w})`, { size: 16 });
  });
  b += panel(30, 580, 840, 100, C.cream, C.olive) + t(55, 616, 'Idea B: 15 + 15 + 8 + 6 + 4 + 3 + 3 = 54', { size: 19, weight: 700 }) +
    t(55, 648, 'The matrix supports the choice; the written comparison still has to explain it.', { size: 17, fill: C.muted });
  add('05-weighted-decision-matrix',
    svg(900, 705, 'Weighted decision matrix: A 50, B 54, C 43', b),
    'Stacked bars show each idea’s weighted points for seven specification criteria, with weights 3, 3, 2, 2, 1, 1 and 1. Idea A totals 50, idea B 54 and idea C 43, out of a maximum of 65. Idea B’s working is 15 + 15 + 8 + 6 + 4 + 3 + 3 = 54.',
    'Weight times score, added up: B leads, but the total still needs a written justification.',
    '## 3. Choosing and justifying the design');
}

// 06 Writing the justification
{
  const moves = [
    ['Choose, with the score', 'B: 54 of 65, ahead of A (50) and C (43)', C.mustard],
    ['Name the spec points', 'clamps grip any rail 40–60 mm (spec 2)', C.cream],
    ['Compare with rejected ideas', 'A’s hooks suit one rail width; C’s felt sagged under 2 kg (spec 4)', C.cream],
    ['Include client feedback', 'Ms Adeyemi preferred B and asked for a darker stain', C.cream],
    ['Admit the weakness, plan development', 'weather resistance (3) → exterior varnish, stainless screws', C.tealLight],
  ];
  let b = '';
  moves.forEach(([h, d, f], i) => {
    const y = 110 + i * 102;
    b += panel(30, y, 840, 88) + badge(78, y + 44, 24, String(i + 1), f);
    b += t(122, y + 37, h, { size: 20, weight: 700 }) + t(122, y + 66, d, { size: 17, fill: C.muted });
    if (i < 4) b += arrow(78, y + 70, 78, y + 100, { w: 2.5 });
  });
  b += t(450, 638, 'Then show development: e.g. test a clamp in card, move pot holes to spread the load.', { size: 17, anchor: 'middle', weight: 600, fill: C.tealDark });
  add('06-justifying-the-choice',
    svg(900, 665, 'Five moves in a strong justification', b),
    'Five steps of a justification for the planter: state the choice and score (B, 54 of 65), name the specification points it meets, compare with the rejected ideas A and C, include the client’s feedback, and admit B’s weakness in weather resistance with a plan to use exterior varnish and stainless screws.',
    'A justification compares ideas against named specification points, then plans development.',
    '## 3. Choosing and justifying the design');
}

// 07 Third-angle vs first-angle layout
{
  const view = (x, y, w, h, label, fill) => box(x, y, w, h, fill, C.ink, 2.5, 4) + t(x + w / 2, y + h / 2 + 6, label, { size: 17, weight: 700, anchor: 'middle' });
  let b = panel(30, 110, 410, 400) + t(235, 150, 'Third angle', { size: 22, weight: 700, anchor: 'middle' });
  // third: plan above front, right end view to the right
  b += view(60, 180, 230, 100, 'Plan', C.tealLight) + view(60, 300, 230, 70, 'Front view', C.cream) + view(310, 300, 100, 70, 'End', C.teal);
  b += tl(60, 410, ['plan sits ABOVE the front view', 'right-hand end view sits', 'to the RIGHT'], { size: 16 }, 22);
  b += panel(460, 110, 410, 400) + t(665, 150, 'First angle', { size: 22, weight: 700, anchor: 'middle' });
  b += view(490, 180, 230, 70, 'Front view', C.cream) + view(740, 180, 100, 70, 'End', C.teal) + view(490, 270, 230, 100, 'Plan', C.tealLight);
  b += tl(490, 410, ['plan sits BELOW the front view', 'view from the LEFT sits', 'to the right'], { size: 16 }, 22);
  b += t(235, 488, 'used in the planter example', { size: 15, anchor: 'middle', fill: C.olive, weight: 600, italic: true });
  b += panel(30, 530, 840, 104, C.cream, C.olive) + t(55, 566, 'On every planning drawing:', { size: 18, weight: 700 }) +
    t(55, 596, 'projection symbol, scale, key dimensions, and “All dimensions in mm”', { size: 17 }) + t(55, 620, 'written once in the title block', { size: 17 });
  add('07-third-and-first-angle',
    svg(900, 660, 'Orthographic layouts: third and first angle', b),
    'Two layouts of the same three views. In third-angle projection the plan sits above the front view and the right-hand end view sits to its right. In first-angle projection the plan sits below the front view and the view from the left sits to its right. Every drawing needs the projection symbol, a scale, key dimensions and a note that all dimensions are in mm.',
    'Where the plan sits tells you which projection method was used.',
    '## 4. Presenting the solution: planning drawings and diagrams');
}

// 08 Choosing a scale
{
  const k = 1.25; // px per mm on paper
  const sheet = (x, y, scale, ok) => {
    const W = 297 * k, H = 210 * k;
    let o = `<rect x="${x}" y="${y}" width="${W}" height="${H}" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>` +
      `<rect x="${x + 10 * k}" y="${y + 10 * k}" width="${277 * k}" height="${190 * k}" fill="none" stroke="${C.muted}" stroke-width="1.8" stroke-dasharray="7 5"/>`;
    const L = (450 / scale) * k, D = (180 / scale) * k, Hh = (120 / scale) * k, g = 20 * k;
    const ox = x + 10 * k, oy = y + 10 * k;
    const col = ok ? C.tealLight : C.cream, edge = ok ? C.tealDark : C.rust;
    o += box(ox, oy, L, D, col, edge, 2, 2) + box(ox, oy + D + g, L, Hh, col, edge, 2, 2) + box(ox + L + g, oy + D + g, D, Hh, col, edge, 2, 2);
    if (!ok) o += `<line x1="${x + 287 * k}" y1="${y - 6}" x2="${x + 287 * k}" y2="${y + H + 6}" stroke="${C.rust}" stroke-width="3"/>` + tl(x + 297 * k + 8, y + 30, ['edge of', 'usable', 'area'], { size: 15, fill: C.rust, weight: 600 }, 18);
    o += t(ox + L / 2, oy + D / 2 + 6, 'plan', { size: 15, anchor: 'middle', fill: C.muted }) + (ok ? '' : t(ox + L / 2, oy + D + g + Hh / 2 + 6, 'front', { size: 15, anchor: 'middle', fill: C.muted }) + t(ox + L + g + D / 2 + 22, oy + D + g + Hh / 2 + 6, 'end', { size: 15, anchor: 'middle', fill: C.muted }));
    return o;
  };
  let b = panel(30, 110, 840, 330) + t(55, 146, 'Scale 1:2', { size: 22, weight: 700, fill: C.rust });
  b += sheet(55, 165, 2, false);
  b += tl(560, 190, ['Width needed', '= 225 + 20 + 90', '= 335 mm'], { size: 18, weight: 600 }, 26);
  b += t(560, 290, 'usable width 277 mm', { size: 17, fill: C.muted }) + t(560, 330, '✗ does not fit', { size: 21, weight: 700, fill: C.rust });
  b += panel(30, 460, 840, 330) + t(55, 496, 'Scale 1:5', { size: 22, weight: 700, fill: C.tealDark });
  b += sheet(55, 515, 5, true);
  b += tl(560, 540, ['Width = 90 + 20 + 36 = 146 mm', 'Height = 24 + 20 + 36 = 80 mm'], { size: 17, weight: 600 }, 28);
  b += t(560, 620, 'usable area 277 × 190 mm', { size: 17, fill: C.muted }) + t(560, 660, '✓ fits', { size: 21, weight: 700, fill: C.tealDark });
  b += tl(560, 700, ['90 mm pot hole: drawn 18 mm,', 'dimensioned as 90'], { size: 16, fill: C.muted }, 22);
  b += t(450, 820, 'A4 landscape, 10 mm border, 20 mm between views; planter 450 × 180 × 120 mm', { size: 16, anchor: 'middle', fill: C.muted });
  add('08-choosing-a-scale',
    svg(900, 845, 'Choosing a scale for an A4 sheet', b),
    'Two A4 landscape sheets with a dashed 277 by 190 mm usable area. At 1:2 the front, plan and end views of the 450 by 180 by 120 mm planter need 335 mm of width and run off the sheet. At 1:5 they need 146 by 80 mm and fit, so a 90 mm pot hole is drawn 18 mm across.',
    'Work out the space the views need at each scale before you start drawing.',
    '## 4. Presenting the solution: planning drawings and diagrams');
}
