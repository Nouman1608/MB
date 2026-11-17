import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-environmental-systems-and-societies-assessment-revision-notes';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

// 01 SL vs HL weightings as stacked bars
{
  const x0 = 180, W = 650, sc = (p) => (W * p) / 100;
  const bar = (y, lvl, parts, ext, int, hrs) => {
    let b = t(60, y + 52, lvl, { size: 30, weight: 700 });
    let x = x0;
    parts.forEach(([name, pct, time, fill]) => {
      const w = sc(pct);
      b += `<rect x="${x}" y="${y}" width="${w}" height="84" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` +
        t(x + w / 2, y + 32, name, { size: 18, weight: 700, anchor: 'middle' }) +
        t(x + w / 2, y + 58, `${pct}%`, { size: 22, weight: 700, anchor: 'middle' }) +
        t(x + w / 2, y + 112, time, { size: 16, anchor: 'middle', fill: C.muted });
      x += w;
    });
    const e = sc(ext);
    b += path(`M${x0},${y + 132} l0,12 l${e},0 l0,-12`, { stroke: C.tealDark, w: 3 }) +
      t(x0 + e / 2, y + 168, `External (written papers) ${ext}% · ${hrs}`, { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark }) +
      path(`M${x0 + e + 4},${y + 132} l0,12 l${sc(int) - 4},0 l0,-12`, { stroke: C.olive, w: 3 }) +
      t(x0 + e + sc(int) / 2, y + 168, `Internal ${int}%`, { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
    return b;
  };
  const body = panel(30, 110, 840, 470) +
    bar(140, 'SL', [['Paper 1', 25, '1 hour', C.tealLight], ['Paper 2', 50, '2 hours', C.teal], ['IA', 25, '10 teaching h', C.mustard]], 75, 25, '3 h') +
    bar(360, 'HL', [['Paper 1', 30, '2 hours', C.tealLight], ['Paper 2', 50, '2 h 30 min', C.teal], ['IA', 20, '10 teaching h', C.mustard]], 80, 20, '4 h 30 min') +
    panel(30, 600, 840, 120, C.cream, C.olive) +
    t(55, 638, 'HL: Paper 1 is longer (2 h) and worth more (30%), so the IA drops to 20%.', { size: 18, weight: 700 }) +
    t(55, 668, 'The investigation and its criteria are the same at both levels:', { size: 17, fill: C.muted }) +
    t(55, 694, 'a written report of up to 3,000 words.', { size: 17, fill: C.muted });
  add('01-sl-hl-weightings',
    svg(900, 740, 'ESS assessment: SL vs HL', body),
    'Two stacked bars. SL: Paper 1 25% (1 hour), Paper 2 50% (2 hours), internal assessment 25%, so 75% external and 25% internal. HL: Paper 1 30% (2 hours), Paper 2 50% (2 hours 30 minutes), internal assessment 20%, so 80% external and 20% internal.',
    'Paper 2 is 50% at both levels; HL shifts weight from the IA to a longer Paper 1.',
    '## SL vs HL weightings');
}

// 02 The IA research process
{
  const steps = [
    ['1', 'Research question', 'Formulate a focused question suited to the issue'],
    ['2', 'Methodology', 'Justify and apply a method giving reliable data'],
    ['3', 'Data', 'Process and present it (basic statistics if relevant)'],
    ['4', 'Conclusions', 'Reach evidence-based conclusions from the data'],
    ['5', 'Evaluation', 'Strengths, limitations and specific, feasible improvements'],
  ];
  const rh = 84, y0 = 120;
  let b = '';
  steps.forEach(([n, head, sub], i) => {
    const y = y0 + i * (rh + 14);
    b += panel(30, y, 540, rh, i === 4 ? C.cream : C.panel, i === 4 ? C.olive : C.panelEdge) +
      badge(76, y + rh / 2, 22, n, i === 4 ? C.mustard : C.cream) +
      t(115, y + 35, head, { size: 21, weight: 700 }) + t(115, y + 62, sub, { size: 16, fill: C.muted });
    if (i < 4) b += arrow(76, y + rh + 1, 76, y + rh + 13, { w: 3 });
  });
  const chip = (y, head, sub, fill = C.tealLight) => `<rect x="590" y="${y}" width="280" height="96" rx="12" fill="${fill}" stroke="${C.tealDark}" stroke-width="2.5"/>` +
    t(730, y + 40, head, { size: 22, weight: 700, anchor: 'middle' }) + tl(730, y + 66, sub, { size: 15, anchor: 'middle', fill: C.muted }, 18);
  b += chip(120, 'Up to 3,000 words', ['a written report']) +
    chip(232, 'About 10 hours', ['of teaching time']) +
    chip(344, 'Open-ended', ['your own research question;', 'fieldwork common, not required']) +
    `<rect x="590" y="456" width="280" height="152" rx="12" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>` +
    t(730, 490, 'Integrate both strands', { size: 19, weight: 700, anchor: 'middle' }) +
    tl(730, 518, ['link a measured', 'environmental change to', 'its social, economic or', 'policy implications'], { size: 15, anchor: 'middle', fill: C.muted }, 19);
  add('02-ia-research-process',
    svg(900, 640, 'The individual investigation', b),
    'Five steps the investigation is graded across: a focused research question, a justified methodology giving reliable data, processing and presenting data, evidence-based conclusions, and evaluation with feasible improvements. Side notes: up to 3,000 words, about 10 hours, open-ended, and integrating scientific and societal dimensions.',
    'The IA is graded across the whole research process, and strong ones link science to society.',
    '## The internal assessment in more depth');
}

// 03 Command-term staircase
{
  const lv = [
    ['Lower', ['state', 'identify', 'outline'], C.tealLight],
    ['Middle', ['explain', 'compare', 'suggest'], C.teal],
    ['Top', ['evaluate', 'discuss', 'to what extent'], C.mustard],
  ];
  const base = 560, stepW = 270, stepH = 120;
  let b = '';
  lv.forEach(([name, terms, fill], i) => {
    const x = 30 + i * (stepW + 15), h = stepH * (i + 1) + 40, y = base - h;
    b += `<rect x="${x}" y="${y}" width="${stepW}" height="${h}" rx="12" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` +
      t(x + stepW / 2, y + 38, name, { size: 22, weight: 700, anchor: 'middle' }) +
      tl(x + stepW / 2, y + 74, terms, { size: 19, anchor: 'middle', weight: 600 }, 28);
  });
  b += arrow(60, 230, 250, 230, { w: 4, color: C.olive, marker: 'ahO' }) +
    t(60, 210, 'demand rises', { size: 18, weight: 700, fill: C.olive }) +
    tl(30 + 2 * 285 + 135, 390, ['a reasoned', 'judgement weighing', 'perspectives or', 'evidence'], { size: 17, anchor: 'middle', fill: C.ink, italic: true }, 23);
  b += panel(30, 585, 840, 120, C.cream, C.olive) +
    t(55, 622, 'ESS combines scientific and societal content, so at the top:', { size: 18, weight: 700 }) +
    t(55, 652, 'weigh both strands, e.g. a policy\'s scientific effectiveness', { size: 17, fill: C.muted }) +
    t(55, 678, 'and its social/economic feasibility.', { size: 17, fill: C.muted });
  add('03-command-term-levels',
    svg(900, 725, 'Command terms: three levels of demand', b),
    'A three-step staircase of command terms. Lower: state, identify, outline. Middle: explain, compare, suggest. Top: evaluate, discuss, to what extent, which need a reasoned judgement weighing perspectives or evidence.',
    'The higher the command term, the more an ESS answer must weigh science and society together.',
    '## Command terms across the papers');
}

// 04 Dual nature (Venn)
{
  const cy = 380;
  let b = `<circle cx="340" cy="${cy}" r="200" fill="${C.teal}" opacity="0.55" stroke="${C.tealDark}" stroke-width="3"/>` +
    `<circle cx="560" cy="${cy}" r="200" fill="${C.cream}" opacity="0.75" stroke="${C.olive}" stroke-width="3"/>` +
    `<circle cx="340" cy="${cy}" r="200" fill="none" stroke="${C.tealDark}" stroke-width="3"/>` +
    t(240, 158, 'Sciences', { size: 24, weight: 700, anchor: 'middle', fill: C.tealDark }) +
    tl(245, 330, ['measurement', 'data analysis', 'experimental', 'design'], { size: 18, anchor: 'middle' }, 26) +
    t(660, 158, 'Individuals and societies', { size: 24, weight: 700, anchor: 'middle', fill: C.olive }) +
    tl(655, 330, ['policy', 'ethics', 'economics', 'human systems'], { size: 18, anchor: 'middle' }, 26) +
    t(450, 320, 'ESS', { size: 34, weight: 700, anchor: 'middle' }) +
    tl(450, 360, ['Paper 1', 'Paper 2', 'IA'], { size: 18, anchor: 'middle', weight: 600 }, 26) +
    t(450, 470, 'side by side', { size: 16, anchor: 'middle', fill: C.muted, italic: true });
  b += panel(30, 600, 840, 110, C.cream, C.olive) +
    t(55, 638, 'ESS can count as a sciences subject, an individuals-and-societies', { size: 18, weight: 700 }) +
    t(55, 664, 'subject, or both, which frees up an extra subject choice.', { size: 18, weight: 700 }) +
    t(55, 692, 'So every paper is built to be defensible as either.', { size: 17, fill: C.muted });
  add('04-dual-nature',
    svg(900, 730, 'Why both strands appear in every paper', b),
    'Overlapping circles: sciences (measurement, data analysis, experimental design) and individuals and societies (policy, ethics, economics, human systems). ESS sits in the overlap, with Paper 1, Paper 2 and the IA drawing on both.',
    'ESS papers mix scientific and societal analysis rather than splitting them into separate papers.',
    '## Why ESS\'s dual nature shapes its assessment structure');
}
