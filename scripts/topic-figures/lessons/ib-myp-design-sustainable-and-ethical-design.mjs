import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-myp-design-sustainable-and-ethical-design';
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

// 01 Life-cycle stages
{
  const st = [['Raw materials', 'mining, felling, drilling'], ['Manufacture', 'shaping, joining, packaging'], ['Distribution', 'transport to shops, users'], ['Use', 'energy, water, repairs'], ['End of life', 'reuse, recycle, landfill']];
  let b = '';
  st.forEach(([h, d], i) => {
    const x = 30 + i * 172, w = 152;
    b += box(x, 170, w, 130, i % 2 ? C.cream : C.tealLight, C.ink, 2.5, 12) + badge(x + w / 2, 170, 20, String(i + 1), C.mustard);
    b += tl(x + w / 2, 222, wrap(h, 12), { size: 18, weight: 700, anchor: 'middle' }, 22) + tl(x + w / 2, 268, wrap(d, 17), { size: 14.5, anchor: 'middle', fill: C.ink }, 18);
    if (i < 4) b += arrow(x + w + 2, 235, x + 170, 235, { w: 3 });
  });
  b += path('M140,308 L140,330 L760,330 L760,308', { w: 3, stroke: C.muted });
  b += t(450, 358, 'cradle to grave: look at all five stages', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  b += path('M794,304 C794,570 106,570 106,310', { w: 4, stroke: C.tealDark, extra: 'stroke-dasharray="12 8" marker-end="url(#ahT)"' });
  b += t(450, 420, 'cradle to cradle:', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) + t(450, 446, 'end-of-life materials become new raw materials', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  b += panel(30, 530, 840, 90, C.cream, C.olive) + t(450, 566, 'Designing for disassembly (screws and clips, not glue; no mixed-material', { size: 17, anchor: 'middle', weight: 600 }) +
    t(450, 592, 'laminates) makes reuse, repair and recycling possible.', { size: 17, anchor: 'middle', weight: 600 });
  add('01-life-cycle-stages',
    svg(900, 645, 'A product’s five life-cycle stages', b, 'impacts happen at every stage, not only when it is made'),
    'Five stages in a row: raw materials, manufacture, distribution, use and end of life. Cradle-to-grave thinking looks at all five; cradle-to-cradle thinking loops end-of-life materials back to become raw materials. Designing for disassembly supports reuse, repair and recycling.',
    'Judge a product across its whole life, and design so materials can come back round.',
    '## Life-cycle thinking');
}

// 02 The 6 Rs
{
  const rs = [['Rethink', 'a better way to meet the need?'], ['Refuse', 'leave out unneeded parts, packaging'], ['Reduce', 'less material, less energy in use'], ['Reuse', 'a second life, as is or repurposed'], ['Repair', 'parts easy to replace, ordinary tools'], ['Recycle', 'single, labelled, separable materials']];
  const cx = 450, cy = 400, R = 225;
  let b = `<ellipse cx="${cx}" cy="${cy}" rx="${R + 40}" ry="${R}" fill="none" stroke="${C.teal}" stroke-width="12"/>`;
  rs.forEach(([h, d], i) => {
    const a = (-90 + i * 60) * Math.PI / 180, x = cx + (R + 40) * Math.cos(a), y = cy + R * Math.sin(a);
    const w = 280, hgt = 84;
    const dis = i >= 3;
    b += box(x - w / 2, y - hgt / 2, w, hgt, dis ? C.cream : C.panel, dis ? C.olive : C.ink, 2.5, 14) + t(x, y - 8, h, { size: 20, weight: 700, anchor: 'middle' }) + t(x, y + 20, d, { size: 14.5, anchor: 'middle', fill: C.muted });
  });
  b += box(cx - 110, cy - 50, 220, 100, '#eaf3f1', C.tealDark, 2.5, 50) + t(cx, cy - 6, 'Improve a', { size: 19, weight: 700, anchor: 'middle' }) + t(cx, cy + 20, 'design', { size: 19, weight: 700, anchor: 'middle' });
  b += t(cx, 690, 'Shaded: the three Rs that design for disassembly supports', { size: 16, anchor: 'middle', fill: C.olive, weight: 600 });
  add('02-six-rs',
    svg(900, 715, 'The 6 Rs checklist', b),
    'Six prompts arranged in a ring: rethink a better way to meet the need, refuse unneeded parts, reduce material and energy, reuse, repair with ordinary tools, and recycle using single labelled materials. Reuse, repair and recycle are supported by designing for disassembly.',
    'Run a design through all six Rs before you settle on it.',
    '## Life-cycle thinking');
}

// 03 Lunchbox comparison per functional unit
{
  const P = [18, 6, 2, 15, 1], S = [45, 10, 3, 36, 1];
  const cols = [C.rust, C.mustard, C.cream, C.teal, C.tealDark];
  const names = ['raw materials', 'manufacture', 'distribution', 'use (washing)', 'end of life'];
  const x0 = 250, k = 5.6;
  let b = panel(30, 110, 840, 290) + t(55, 146, 'Step 1: total energy (MJ)', { size: 19, weight: 700 });
  [['P: polypropylene, 5 years', P, 42], ['S: stainless steel, 12 years', S, 95]].forEach(([n, arr, tot], j) => {
    const y = 170 + j * 80;
    b += tl(235, y + 22, wrap(n, 18), { size: 16, weight: 600, anchor: 'end' }, 20);
    let x = x0;
    arr.forEach((v, i) => { b += `<rect x="${x}" y="${y}" width="${v * k}" height="44" fill="${cols[i]}" stroke="${C.ink}" stroke-width="1.5"/>`; if (v * k > 30) b += t(x + (v * k) / 2, y + 28, String(v), { size: 15, weight: 600, anchor: 'middle', fill: i === 0 || i === 4 ? '#fff' : C.ink }); x += v * k; });
    b += t(x + 10, y + 29, `${tot}`, { size: 22, weight: 700 });
  });
  names.forEach((n, i) => { const x = 60 + i * 162; b += `<rect x="${x}" y="345" width="18" height="18" fill="${cols[i]}" stroke="${C.ink}" stroke-width="1.5"/>` + t(x + 26, 360, n, { size: 15 }); });
  b += t(450, 388, 'Raw materials is the biggest single stage for both designs.', { size: 15, anchor: 'middle', fill: C.rust, weight: 600 });
  b += panel(30, 420, 840, 200, '#eaf3f1', C.tealDark) + t(55, 456, 'Step 2: per functional unit (one year of packed lunches)', { size: 19, weight: 700, fill: C.tealDark });
  const k2 = 40;
  [['P', 8.4, '42 ÷ 5 = 8.4 MJ per year'], ['S', 7.92, '95 ÷ 12 ≈ 7.92 MJ per year']].forEach(([n, v, s], j) => {
    const y = 478 + j * 66;
    b += t(235, y + 30, n, { size: 20, weight: 700, anchor: 'end' });
    b += `<rect x="${x0}" y="${y}" width="${v * k2}" height="44" rx="4" fill="${j ? C.teal : C.cream}" stroke="${C.ink}" stroke-width="2"/>` + t(x0 + v * k2 + 12, y + 29, s, { size: 17, weight: 600 });
  });
  b += panel(30, 640, 840, 90, C.cream, C.olive) + t(55, 676, 'S wins per year only if it really lasts 12 years:', { size: 18, weight: 700 }) +
    t(55, 704, 'a broken, unreplaceable lid wipes out the advantage, so repairability goes in the spec.', { size: 16 });
  add('03-lunchbox-functional-unit',
    svg(900, 755, 'Compare per functional unit', b),
    'Stacked bars of fictional life-cycle energy: a polypropylene lunchbox lasting 5 years totals 42 MJ and a stainless-steel one lasting 12 years totals 95 MJ, with raw materials the largest stage in both. Per year of use, P is 8.4 MJ and S about 7.92 MJ, so S wins only if it lasts the full 12 years.',
    'A higher total can still be the better design once you divide by how long it lasts.',
    '## Life-cycle thinking');
}

// 04 Weighted matrix and sensitivity to weights
{
  const mats = [['Recycled HDPE', [4, 4, 3, 3]], ['FSC timber', [3, 5, 4, 4]], ['Galvanised steel', [5, 2, 4, 2]]];
  const crit = ['Durability outdoors', 'Low embodied energy', 'End-of-life options', 'Cost'];
  const W1 = [3, 2, 2, 1], W2 = [5, 2, 2, 1];
  const cols = [C.tealDark, C.teal, C.cream, C.mustard];
  const total = (s, W) => s.reduce((a, v, i) => a + v * W[i], 0);
  const x0 = 250, k = 9.6;
  const block = (y0, W, title, max) => {
    let o = panel(30, y0, 840, 245) + t(55, y0 + 36, title, { size: 19, weight: 700 });
    const tots = mats.map(([, s]) => total(s, W)); const best = Math.max(...tots);
    mats.forEach(([n, s], j) => {
      const y = y0 + 58 + j * 58;
      o += t(235, y + 28, n, { size: 16, weight: 600, anchor: 'end' });
      let x = x0;
      s.forEach((v, i) => { const w = v * W[i] * k; o += `<rect x="${x}" y="${y}" width="${w}" height="40" fill="${cols[i]}" stroke="${C.ink}" stroke-width="1.5"/>`; if (w > 30) o += t(x + w / 2, y + 26, String(v * W[i]), { size: 15, weight: 600, anchor: 'middle', fill: i === 0 ? '#fff' : C.ink }); x += w; });
      o += t(x + 10, y + 28, String(tots[j]) + (tots[j] === best ? '  ◀ wins' : ''), { size: 19, weight: 700, fill: tots[j] === best ? C.olive : C.ink });
    });
    o += t(845, y0 + 36, `out of ${max}`, { size: 15, anchor: 'end', fill: C.muted });
    return o;
  };
  let b = block(110, W1, 'Weights: durability ×3, energy ×2, end of life ×2, cost ×1', 40);
  b += block(370, W2, 'Change durability to ×5', 50);
  crit.forEach((n, i) => { const x = 50 + i * 210; b += `<rect x="${x}" y="633" width="18" height="18" fill="${cols[i]}" stroke="${C.ink}" stroke-width="1.5"/>` + t(x + 26, 648, n, { size: 15 }); });
  b += panel(30, 670, 840, 70, C.cream, C.olive) + t(450, 712, 'Justify the weights from the client’s need: the numbers do not decide for you.', { size: 17, weight: 700, anchor: 'middle' });
  add('04-materials-matrix-weights',
    svg(900, 765, 'Choosing a planter material: weights matter', b),
    'Stacked bars of a fictional weighted matrix for an outdoor planter. With durability weighted ×3, FSC timber scores 31 out of 40, ahead of recycled HDPE and galvanised steel on 29 each. With durability weighted ×5, steel scores 39 and wins, with timber and HDPE on 37.',
    'Change one weight and the winner changes, so the weights must be justified.',
    '## Materials choice');
}

// 05 Ergonomics: stool adjustment range
{
  const x0 = 110, x1 = 820, lo = 360, hi = 520;
  const X = (v) => x0 + ((v - lo) * (x1 - x0)) / (hi - lo);
  let b = panel(30, 110, 840, 360) + t(55, 146, 'Workshop stool, ages 13–16: popliteal height + 25 mm for shoes', { size: 18, weight: 700 });
  const ay = 400;
  b += `<line x1="${x0}" y1="${ay}" x2="${x1}" y2="${ay}" stroke="${C.ink}" stroke-width="2.5"/>`;
  for (let v = 360; v <= 520; v += 20) b += `<line x1="${X(v)}" y1="${ay}" x2="${X(v)}" y2="${ay + 7}" stroke="${C.ink}" stroke-width="2"/>` + t(X(v), ay + 28, String(v), { size: 15, anchor: 'middle', fill: C.muted });
  b += t(465, ay + 54, 'mm', { size: 15, anchor: 'middle', fill: C.muted });
  // body data row
  const row = (y, vals, lab, col) => {
    let o = t(x0 - 10, y + 6, lab, { size: 16, weight: 700, anchor: 'end', fill: C.ink });
    vals.forEach(([v, n]) => { o += `<circle cx="${X(v)}" cy="${y}" r="9" fill="${col}" stroke="${C.ink}" stroke-width="2"/>` + t(X(v), y - 16, `${n}: ${v}`, { size: 15, anchor: 'middle', weight: 600 }); });
    return o;
  };
  b += row(220, [[380, '5th'], [425, '50th'], [470, '95th']], 'knee', C.teal);
  b += row(300, [[405, 'low'], [450, 'fixed'], [495, 'high']], 'seat', C.mustard);
  b += `<rect x="${X(405)}" y="318" width="${X(495) - X(405)}" height="26" rx="6" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2"/>` + t((X(405) + X(495)) / 2, 337, 'adjust 405 → 495 mm: 90 mm range', { size: 15, weight: 700, anchor: 'middle' });
  b += t(x0 - 10, 262, '+25 mm', { size: 15, fill: C.muted, anchor: 'end', weight: 600 });
  b += panel(30, 490, 410, 130, '#fbeee6', C.rust) + t(52, 526, '✗ Fixed 450 mm (50th)', { size: 18, weight: 700, fill: C.rust }) + tl(52, 556, ['small users’ feet dangle;', 'large users’ knees are raised'], { size: 16 }, 22);
  b += panel(460, 490, 410, 130, '#eaf3f1', C.tealDark) + t(482, 526, '✓ Adjustable 405–495 mm', { size: 18, weight: 700, fill: C.tealDark }) + tl(482, 556, ['fits 5th to 95th percentile:', '90% of the target group'], { size: 16 }, 22);
  b += t(450, 650, 'Clearance: 95th percentile. Reach: 5th percentile. Check the data match your audience.', { size: 16, anchor: 'middle', fill: C.muted, weight: 600 });
  add('05-stool-adjustment-range',
    svg(900, 675, 'Ergonomics: data that justify adjustability', b),
    'A millimetre scale shows fictional popliteal heights for 13 to 16 year olds (5th 380, 50th 425, 95th 470 mm). Adding 25 mm for shoes gives seat heights from 405 to 495 mm, a 90 mm adjustment range. A fixed 450 mm stool would leave small users’ feet dangling and large users’ knees raised.',
    'When one fixed size cannot fit the 5th to 95th percentile, design for adjustment.',
    '## Ergonomics');
}

// 06 Data ethics
{
  const pr = [
    ['Data minimisation', 'collect only what the solution needs', 'homework planner: task and due date, not a home address'],
    ['Informed consent', 'plain language, asked before collecting', 'a clear choice, never a pre-ticked box'],
    ['Security', 'passwords, access control, encryption', 'never store passwords as plain text'],
    ['Transparency and control', 'users can see, correct and delete data', ''],
    ['No manipulation', 'no dark patterns', 'hidden cancel buttons, confusing wording, nagging pop-ups'],
  ];
  let b = '';
  pr.forEach(([h, d, e], i) => {
    const y = 110 + i * 100;
    b += panel(30, y, 840, 88) + badge(76, y + 44, 22, String(i + 1), i % 2 ? C.cream : C.tealLight);
    b += t(116, y + 36, h, { size: 19, weight: 700 }) + t(400, y + 36, d, { size: 16 });
    if (e) b += t(116, y + 66, e, { size: 15, fill: C.muted, italic: true });
  });
  b += panel(30, 615, 840, 96, C.cream, C.olive) + t(55, 650, 'Also check: the client’s rules on student data and laws such as GDPR;', { size: 16, weight: 600 }) +
    t(55, 678, 'test with a varied group to catch algorithmic bias.', { size: 16, weight: 600 });
  add('06-data-ethics',
    svg(900, 735, 'Five principles for users’ data', b),
    'Five data-ethics principles for digital design: data minimisation, informed consent asked before collecting, security such as never storing passwords as plain text, transparency and control so users can see, correct and delete their data, and no manipulative dark patterns. Also check local rules and laws such as GDPR, and test with a varied group to catch bias.',
    'The data a digital solution collects is a design decision.',
    '## Ethics of data in digital design');
}

// 07 Impact statements for criterion D
{
  let b = lowTop(30, 110, 840, 92, 'low', 'Weak', ['“My product is eco-friendly.”']);
  b += panel(30, 222, 840, 300, '#eaf3f1', C.tealDark) + t(52, 258, '✓ Stronger: specific and balanced', { size: 19, weight: 700, fill: C.tealDark });
  const parts = [
    ['specific evidence', '“The stand uses 70% recycled aluminium …”', C.teal],
    ['effect on the user', '“… four screws, so the user can replace a broken arm instead of buying a new stand.”', C.cream],
    ['honest limit', '“It still needs energy to recycle at end of life.”', '#f4d9c8'],
  ];
  parts.forEach(([k, q, f], i) => {
    const y = 280 + i * 78;
    b += chip(52, y, 190, 62, k, f, { size: 16 }) + tl(262, y + 28 - (wrap(q, 62).length - 1) * 10, wrap(q, 62), { size: 16, italic: true }, 22);
  });
  b += panel(30, 542, 840, 100, C.cream, C.olive) + t(55, 578, 'Test claims with real users', { size: 18, weight: 700 }) +
    t(55, 608, 'across the size range for ergonomics; with users of different needs for digital work.', { size: 16 });
  add('07-impact-statements',
    svg(900, 665, 'Writing an impact statement for criterion D', b),
    'A weak impact statement just says “My product is eco-friendly.” A stronger one gives specific evidence (70% recycled aluminium), the effect on the user (four screws let a broken arm be replaced) and an honest limit (it still needs energy to recycle). Claims are then tested with real users.',
    'Specific evidence, a real effect on the user, and an honest limitation.',
    '## How this feeds criterion D');
}
