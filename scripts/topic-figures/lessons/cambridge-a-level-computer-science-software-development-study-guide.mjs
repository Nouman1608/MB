// Corrected test-data figure (9618 terms: extreme = smallest/largest accepted; boundary = each side of a limit).
// Replaces the older --04-sd-test-data image, which labelled 13 and 19 "boundary" and 12 and 20 only "abnormal".
import { C, svg, t } from '../style.mjs';

export const slug = 'cambridge-a-level-computer-science-software-development-study-guide';

const W = 900;
const y = 330; // number line
const x0 = 70, step = 63; // 10 .. 22
const X = (n) => x0 + (n - 10) * step;
const R = 24;

function dot(n) {
  const style = {
    13: [C.mustard, C.olive, C.ink], 19: [C.mustard, C.olive, C.ink],
    14: [C.tealDark, C.tealDark, '#ffffff'], 18: [C.tealDark, C.tealDark, '#ffffff'],
    15: [C.tealLight, C.tealDark, C.ink], 16: [C.tealLight, C.tealDark, C.ink], 17: [C.tealLight, C.tealDark, C.ink],
    12: ['#f6d9cc', C.rust, C.ink], 20: ['#f6d9cc', C.rust, C.ink],
  }[n] || ['#ffffff', C.ink, C.muted];
  return `<circle cx="${X(n)}" cy="${y}" r="${R}" fill="${style[0]}" stroke="${style[1]}" stroke-width="3"/>` +
    t(X(n), y + 7, String(n), { size: 19, weight: 700, fill: style[2], anchor: 'middle' });
}

// bracket over a boundary pair (a, b): drawn above the line
const pair = (a, b, label) => {
  const xa = X(a) - R + 2, xb = X(b) + R - 2, yb = y - 46;
  return `<path d="M${xa} ${yb + 12} V${yb} H${xb} V${yb + 12}" fill="none" stroke="${C.rust}" stroke-width="3"/>` +
    t((xa + xb) / 2, yb - 12, label, { size: 17, weight: 700, fill: C.rust, anchor: 'middle' });
};
const tick = (n, len, label, color) =>
  `<line x1="${X(n)}" y1="${y + R}" x2="${X(n)}" y2="${y + R + len}" stroke="${color}" stroke-width="3"/>` +
  t(X(n), y + R + len + 24, label, { size: 18, weight: 700, fill: color, anchor: 'middle' });

const chip = (x, w, label) =>
  `<rect x="${x}" y="560" width="${w}" height="50" rx="10" fill="#f6d9cc" stroke="${C.rust}" stroke-width="2.5" stroke-dasharray="7 5"/>` +
  t(x + w / 2, 592, label, { size: 19, weight: 700, fill: C.ink, anchor: 'middle' });

const body = [
  // accepted range
  `<path d="M${X(13)} 196 V184 H${X(19)} V196" fill="none" stroke="${C.tealDark}" stroke-width="3"/>`,
  t((X(13) + X(19)) / 2, 170, 'accepted: 13 to 19', { size: 19, weight: 700, fill: C.tealDark, anchor: 'middle' }),
  `<line x1="40" y1="${y}" x2="${W - 40}" y2="${y}" stroke="${C.ink}" stroke-width="3"/>`,
  pair(12, 13, 'boundary pair'),
  pair(19, 20, 'boundary pair'),
  ...Array.from({ length: 13 }, (_, i) => dot(10 + i)),
  tick(13, 22, 'extreme', C.olive), tick(19, 22, 'extreme', C.olive),
  tick(14, 78, 'normal', C.tealDark), tick(18, 78, 'normal', C.tealDark),
  tick(12, 78, 'rejected', C.rust), tick(20, 78, 'rejected', C.rust),
  t(60, 592, 'abnormal:', { size: 19, weight: 700, fill: C.rust }),
  chip(190, 110, '−5'), chip(320, 110, '30'), chip(450, 130, '“ten”'),
  t(W / 2, 660, 'Extreme data is always accepted. Abnormal data is not "extreme".', { size: 17, fill: C.muted, anchor: 'middle' }),
].join('\n');

export const figures = [
  {
    name: '04-sd-test-data-v2',
    after: '### Test data',
    svg: svg(W, 700, 'Test data for ages 13 to 19', body, 'Input accepts whole numbers 13 to 19 inclusive'),
    alt: 'A number line from 10 to 22 for an age input that accepts 13 to 19. 14 and 18 are normal. 13 and 19, the smallest and largest accepted values, are extreme. The boundary pairs are 12 and 13, and 19 and 20: the last value accepted and the first rejected on each side. Minus 5, 30 and the word ten are abnormal.',
    caption: 'Normal, extreme, boundary and abnormal test data for an input accepting ages 13 to 19.',
  },
];
