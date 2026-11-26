// Board-specific replacements for the five-cause market-failure picture
// (igcse-economics-the-allocation-of-resources--03-causes-of-market-failure), which lists the Cambridge
// causes (public goods, merit and demerit goods, external costs and benefits, abuse of monopoly power,
// factor immobility). A-level lists below are the ones the pages quote from the specification:
//  OxfordAQA 9640 (3.1.5.1): public goods, positive and negative externalities, merit and demerit goods,
//   monopoly and other market imperfections, inequality of income and wealth.
//  AQA 7136 (3.1.8.2, page wording): public goods, positive and negative externalities, merit and demerit
//   goods, monopoly and other market imperfections, inequality in the distribution of income and wealth.
import { C, svg, panel, t, path } from '../style.mjs';

export const slug = 'economics-market-failure-causes-a-level';
export const figures = [];

const icons = {
  public: (x, y) => // street light
    `<polygon points="${x - 44},${y + 40} ${x - 14},${y - 12} ${x + 14},${y - 12} ${x + 44},${y + 40}" fill="${C.cream}"/>` +
    `<rect x="${x - 6}" y="${y - 20}" width="12" height="60" fill="${C.ink}"/>` +
    `<rect x="${x - 22}" y="${y - 44}" width="44" height="24" rx="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` +
    `<line x1="${x - 56}" y1="${y + 40}" x2="${x + 56}" y2="${y + 40}" stroke="${C.ink}" stroke-width="3"/>`,
  extern: (x, y) => // factory with smoke
    `<rect x="${x - 50}" y="${y - 10}" width="86" height="50" rx="6" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>` +
    `<rect x="${x - 40}" y="${y - 36}" width="14" height="28" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>` +
    `<rect x="${x - 16}" y="${y - 28}" width="14" height="20" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>` +
    [0, 1, 2].map((i) => `<rect x="${x - 40 + i * 25}" y="${y + 14}" width="14" height="12" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>`).join('') +
    `<circle cx="${x + 28}" cy="${y - 34}" r="11" fill="#fff" stroke="${C.ink}" stroke-width="3"/><circle cx="${x + 44}" cy="${y - 42}" r="13" fill="#fff" stroke="${C.ink}" stroke-width="3"/><circle cx="${x + 46}" cy="${y - 24}" r="10" fill="#fff" stroke="${C.ink}" stroke-width="3"/>`,
  merit: (x, y) => // medical cross and cigarette
    `<circle cx="${x - 32}" cy="${y + 10}" r="22" fill="#fff" stroke="${C.ink}" stroke-width="3"/>` +
    `<rect x="${x - 38}" y="${y - 2}" width="12" height="24" fill="${C.rust}"/><rect x="${x - 44}" y="${y + 4}" width="24" height="12" fill="${C.rust}"/>` +
    `<rect x="${x + 4}" y="${y + 4}" width="56" height="12" rx="2" fill="#fff" stroke="${C.ink}" stroke-width="3"/><rect x="${x + 46}" y="${y + 4}" width="14" height="12" fill="${C.mustard}" stroke="${C.ink}" stroke-width="3"/>` +
    path(`M${x + 20},${y - 6} q8,-10 0,-20 q-8,-10 0,-20`, { w: 2.5, stroke: C.muted }),
  monopoly: (x, y) => // shop with rising price arrow
    `<rect x="${x - 44}" y="${y - 18}" width="76" height="24" rx="8" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>` +
    `<rect x="${x - 38}" y="${y + 6}" width="64" height="38" fill="#fff" stroke="${C.ink}" stroke-width="3"/><rect x="${x - 18}" y="${y + 20}" width="24" height="24" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>` +
    `<line x1="${x + 52}" y1="${y + 30}" x2="${x + 52}" y2="${y - 36}" stroke="${C.rust}" stroke-width="5"/><polygon points="${x + 40},${y - 30} ${x + 52},${y - 50} ${x + 64},${y - 30}" fill="${C.rust}"/>`,
  inequal: (x, y) => // unequal piles of coins
    [0, 1, 2, 3, 4].map((i) => `<ellipse cx="${x - 36}" cy="${y + 36 - i * 13}" rx="22" ry="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`).join('') +
    [0].map((i) => `<ellipse cx="${x + 34}" cy="${y + 36 - i * 13}" rx="22" ry="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2.5"/>`).join('') +
    `<line x1="${x - 66}" y1="${y + 46}" x2="${x + 66}" y2="${y + 46}" stroke="${C.ink}" stroke-width="3"/>`,
};

function causes(name, rows, alt, caption, after) {
  const W = 900, H = 1060, rh = 150, gap = 20, y0 = 130;
  let b = '';
  rows.forEach(([icon, title, sub, tsize], i) => {
    const y = y0 + i * (rh + gap);
    b += panel(30, y, 840, rh, '#ffffff', C.ink);
    b += icons[icon](130, y + rh / 2 - 4);
    b += t(240, y + 68, title, { size: tsize || 24, weight: 700 });
    b += t(240, y + 104, sub, { size: 18, fill: C.muted });
  });
  const ry = y0 + 5 * (rh + gap) + 6;
  b += `<rect x="30" y="${ry}" width="840" height="64" rx="14" fill="${C.ink}"/>` + t(450, ry + 41, 'Result: resources are misallocated', { size: 22, weight: 700, fill: '#ffffff', anchor: 'middle' });
  figures.push({ name, svg: svg(W, H, 'Why markets can fail', b, 'Five causes in the specification list'), alt, caption, after });
}

causes('01-oxfordaqa-a-level-causes', [
  ['public', 'Public goods', 'Non-rival and non-excludable'],
  ['extern', 'Positive and negative externalities', 'Private and social costs or benefits differ'],
  ['merit', 'Merit and demerit goods', 'People buy too little or too much'],
  ['monopoly', 'Monopoly and other market imperfections', 'Market power can push price above cost'],
  ['inequal', 'Inequality of income and wealth', 'Allocation follows income, not need'],
], 'Five small pictures show the causes of market failure in the specification list: public goods, positive and negative externalities, merit and demerit goods, monopoly and other market imperfections, and inequality of income and wealth. The result is that resources are misallocated.',
'The specification lists five causes of market failure.', 'OxfordAQA A Level market failure pages');

causes('02-aqa-a-level-causes', [
  ['public', 'Public goods', 'Non-excludability means no payment'],
  ['extern', 'Positive and negative externalities', 'Third-party costs or benefits ignored'],
  ['merit', 'Merit and demerit goods', 'Benefits or harms underestimated'],
  ['monopoly', 'Monopoly and other imperfections', 'Price above marginal cost, immobile resources, poor information'],
  ['inequal', 'Inequality in the distribution of income and wealth', 'Allocation follows income, not need', 21],
], 'Five small pictures show the causes of market failure in the specification list: public goods, positive and negative externalities, merit and demerit goods, monopoly and other market imperfections (including immobile resources), and inequality in the distribution of income and wealth. The result is that resources are misallocated.',
'The specification lists five causes of market failure; immobile resources sit under monopoly and other imperfections.', 'AQA A Level market failure pages');
