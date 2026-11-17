import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-geography-food-health-future-health-and-food-security-and-sustainability-revision-notes';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// 01 How the pressures work: six cause -> effect chains
{
  const rows = [
    ['food', 'Animal products', ['meat (esp. beef) needs more land,', 'water and feed per calorie'], ['rising meat demand multiplies', 'pressure on land']],
    ['food', 'Climate change', ['heat stress, changing rainfall,', 'more frequent extremes'], ['lower staple yields in many warm', 'regions; uneven, widens inequality']],
    ['food', 'Biofuels', ['land and crops (e.g. maize for', 'ethanol) used for fuel'], ['competes with food; one factor in', 'the 2007–2008 price spikes']],
    ['food', 'Conflict', ['2022 invasion of Ukraine disrupted', 'Black Sea grain and fertiliser'], ['world prices rose, hitting', 'import-dependent N. Africa, Middle East']],
    ['health', 'Antimicrobial resistance', ['antibiotics overused or misused', 'in people and livestock'], ['bacteria evolve resistance; common', 'infections harder to treat']],
    ['health', 'Ageing', ['longer lives'], ['more dementia, heart disease and', 'diabetes; growing care costs']],
  ];
  const y0 = 125, rh = 100;
  let b =
    t(130, 128, 'Pressure', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) +
    t(401, 128, 'How it works', { size: 17, weight: 700, anchor: 'middle', fill: C.muted }) +
    t(721, 128, 'Result', { size: 17, weight: 700, anchor: 'middle', fill: C.muted });
  const wrap = (str, n) => { const o = ['']; for (const w of str.split(' ')) { const c = o[o.length - 1]; if (c && (c + ' ' + w).length > n) o.push(w); else o[o.length - 1] = c ? c + ' ' + w : w; } return o; };
  rows.forEach(([kind, head, how, res], i) => {
    const y = y0 + 18 + i * (rh + 10);
    const food = kind === 'food';
    const hw = wrap(how.join(' '), 31), rs = wrap(res.join(' '), 33);
    const mid = (n) => y + rh / 2 + 6 - ((n - 1) * 21) / 2;
    b += `<rect x="30" y="${y}" width="200" height="${rh}" rx="12" fill="${food ? C.cream : C.tealLight}" stroke="${food ? C.olive : C.tealDark}" stroke-width="2.5"/>` +
      t(46, y + 24, food ? 'FOOD' : 'HEALTH', { size: 15, weight: 700, fill: food ? C.olive : C.tealDark }) +
      tl(46, y + 54, head.length > 16 ? ['Antimicrobial', 'resistance'] : [head], { size: 19, weight: 700 }, 23) +
      panel(262, y, 278, rh) + tl(276, mid(hw.length), hw, { size: 16 }, 21) +
      panel(572, y, 298, rh) + tl(586, mid(rs.length), rs, { size: 16, weight: 600 }, 21) +
      arrow(232, y + rh / 2, 258, y + rh / 2, { w: 3.5 }) + arrow(542, y + rh / 2, 568, y + rh / 2, { w: 3.5 });
  });
  add('01-how-pressures-work',
    svg(900, 830, 'How the pressures work', b),
    'Six cause-and-effect chains. Meat needs more land, water and feed per calorie; climate change lowers staple yields unevenly; biofuels compete with food; the 2022 invasion of Ukraine disrupted Black Sea exports and raised world prices; antibiotic overuse drives resistance; longer lives raise chronic disease and care costs.',
    'Each pressure works through a different chain, but all squeeze food or health systems.',
    '### How the pressures work');
}

// 02 Food loss vs food waste along the supply chain
{
  const st = ['Farm', 'Harvest', 'Storage and transport', 'Retail', 'Consumer'];
  const xs = [30, 196, 362, 528, 694], w = 140, y = 200;
  let b = '';
  b += `<rect x="184" y="150" width="334" height="200" rx="16" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5" stroke-dasharray="9 6"/>` +
    `<rect x="520" y="150" width="340" height="200" rx="16" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2.5" stroke-dasharray="9 6"/>` +
    t(352, 178, 'FOOD LOSS', { size: 19, weight: 700, anchor: 'middle', fill: C.olive }) +
    t(693, 178, 'FOOD WASTE', { size: 19, weight: 700, anchor: 'middle', fill: C.tealDark });
  st.forEach((s, i) => {
    b += `<rect x="${xs[i]}" y="${y}" width="${w}" height="80" rx="12" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>` +
      tl(xs[i] + w / 2, s.length > 12 ? y + 36 : y + 47, s.length > 12 ? ['Storage and', 'transport'] : [s], { size: 18, weight: 700, anchor: 'middle' }, 22);
    if (i < 4) b += arrow(xs[i] + w + 1, y + 40, xs[i + 1] - 2, y + 40, { w: 3 });
  });
  b += t(352, 325, 'poor storage, pests', { size: 16, anchor: 'middle', fill: C.muted }) +
    t(693, 325, 'at retail and consumer level', { size: 16, anchor: 'middle', fill: C.muted });
  const card = (x, head, where, fix, fill, edge) => panel(x, 380, 410, 230, fill, edge) +
    t(x + 24, 418, head, { size: 21, weight: 700 }) + tl(x + 24, 452, where, { size: 17 }, 23) +
    t(x + 24, 530, 'Response:', { size: 17, weight: 700 }) + tl(x + 24, 556, fix, { size: 17, fill: C.muted }, 23);
  b += card(30, 'Lower-income countries', ['most is lost after harvest through', 'poor storage and transport'], ['storage and cold chains'], C.cream, C.olive) +
    card(460, 'Higher-income countries', ['more is wasted by retailers', 'and consumers'], ['labelling, redistribution and', 'behaviour change'], C.tealLight, C.tealDark);
  b += t(450, 650, 'FAO (2011): roughly a third of food produced for people is lost or wasted.', { size: 18, weight: 700, anchor: 'middle' });
  add('02-food-loss-and-waste',
    svg(900, 680, 'Food loss or food waste?', b),
    'A food supply chain from farm to consumer. Food loss happens between harvest and retail through poor storage and pests; food waste happens at retail and consumer level. In lower-income countries most is lost after harvest, needing storage and cold chains; in higher-income countries more is wasted, needing labelling, redistribution and behaviour change.',
    'Where food goes missing in the chain decides the right response.',
    '### Key terms');
}

// 03 Technology options: benefit vs catch
{
  const opts = [
    ['Precision agriculture', 'satellite data, sensors, targeted fertiliser', 'cuts waste of inputs', 'costly for small farmers'],
    ['Drought- or flood-tolerant varieties', '', 'improve resilience', 'must reach farmers at affordable prices'],
    ['Vertical farming', '', 'uses little land and water', 'high energy costs; suits high-value crops, not staples'],
  ];
  let b =
    t(460, 140, '+ Benefit', { size: 19, weight: 700, fill: C.tealDark }) + t(680, 140, '− Catch', { size: 19, weight: 700, fill: C.rust });
  opts.forEach(([name, how, plus, minus], i) => {
    const y = 160 + i * 150;
    b += panel(30, y, 840, 132) +
      tl(56, how ? y + 50 : y + 60, name.length > 22 ? ['Drought- or flood-', 'tolerant varieties'] : [name], { size: 21, weight: 700 }, 26) +
      (how ? tl(56, y + 82, ['satellite data, sensors,', 'targeted fertiliser'], { size: 16, fill: C.muted }, 20) : '') +
      `<rect x="445" y="${y + 18}" width="200" height="96" rx="10" fill="${C.tealLight}" stroke="${C.tealDark}" stroke-width="2"/>` +
      `<rect x="662" y="${y + 18}" width="192" height="96" rx="10" fill="${C.cream}" stroke="${C.rust}" stroke-width="2"/>`;
    const wrap = (s, n) => { const o = ['']; for (const w of s.split(' ')) { const c = o[o.length - 1]; if (c && (c + ' ' + w).length > n) o.push(w); else o[o.length - 1] = c ? c + ' ' + w : w; } return o; };
    const pl = wrap(plus, 18), mi = wrap(minus, 18);
    b += tl(545, y + 66 - (pl.length - 1) * 11, pl, { size: 17, anchor: 'middle', weight: 600 }, 22) +
      tl(758, y + 66 - (mi.length - 1) * 11, mi, { size: 16, anchor: 'middle', weight: 600 }, 21);
  });
  b += panel(30, 620, 840, 70, C.cream, C.olive) +
    t(450, 662, 'Do not treat technology as automatically sustainable: ask who can afford it.', { size: 18, weight: 700, anchor: 'middle' });
  add('03-technology-options',
    svg(900, 710, 'Technology options: benefit and catch', b),
    'Three technology options with a benefit and a catch each. Precision agriculture cuts waste of inputs but is costly for small farmers. Drought- or flood-tolerant varieties improve resilience but must reach farmers at affordable prices. Vertical farming uses little land and water but has high energy costs and suits high-value crops rather than staples.',
    'Every technology fix has a catch, often about cost and who can use it.',
    '### Technology options to evaluate');
}

// 04 Ethiopia PSNP
{
  let b = '';
  const node = (x, y, w, h, head, lines, fill = C.panel, edge = C.panelEdge) => panel(x, y, w, h, fill, edge) +
    t(x + w / 2, y + 36, head, { size: 20, weight: 700, anchor: 'middle' }) + tl(x + w / 2, y + 66, lines, { size: 16, anchor: 'middle', fill: C.muted }, 21);
  b += node(30, 130, 260, 150, 'Rural households', ['chronically', 'food-insecure'], C.tealLight, C.tealDark);
  b += node(610, 130, 260, 150, 'Community work', ['soil and water conservation,', 'terracing, roads'], C.tealLight, C.tealDark);
  b += arrow(292, 175, 606, 175, { w: 4.5 }) + t(450, 162, 'work on projects', { size: 17, weight: 600, anchor: 'middle' });
  b += arrow(606, 240, 292, 240, { w: 4.5, color: C.olive, marker: 'ahO' }) + t(450, 268, 'food or cash', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  b += arrow(160, 282, 160, 330, { w: 4 });
  b += node(30, 335, 400, 130, 'Predictable support', ['replaces repeated emergency appeals;', 'protects household assets in drought'], C.cream, C.olive);
  b += arrow(432, 400, 466, 400, { w: 4 });
  b += node(470, 335, 400, 130, 'Builds resilience', ['often cited as a large-scale example'], C.teal, C.tealDark);
  b += panel(30, 495, 840, 130, '#ffffff', C.rust) + t(55, 532, 'Limits', { size: 20, weight: 700, fill: C.rust }) +
    tl(55, 566, ['• depends on donor funding', '• cannot by itself overcome conflict or extreme drought'], { size: 18 }, 28);
  add('04-ethiopia-safety-net',
    svg(900, 650, "Ethiopia's Productive Safety Net Programme", b, 'launched 2005'),
    'Flow of the programme: chronically food-insecure rural households work on community projects such as soil and water conservation, terracing and roads, and receive food or cash. Predictable support replaces emergency appeals and protects assets in drought, building resilience. Limits: it depends on donor funding and cannot overcome conflict or extreme drought alone.',
    'Predictable food or cash for work builds resilience, but relies on donors.',
    "### Case study: Ethiopia's Productive Safety Net Programme");
}
