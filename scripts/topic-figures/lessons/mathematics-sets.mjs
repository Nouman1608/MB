// Board-neutral redraws of two Venn-diagram figures used on OxfordAQA IGCSE and Edexcel IGCSE maths pages.
// The old pictures carried an "Extended" tier pill; every element and count is unchanged.
import { C, svg, panel, t } from '../style.mjs';

export const slug = 'mathematics-sets';
const W = 900;
const RUST = '#c0643a', NAVY = '#1e2a44', SLATE = '#4a5a78', EDGE = '#c9d6d4';

// ---------- 5. Three-set Venn ----------
function threeSet() {
  const o = [];
  o.push(`<rect x="20" y="130" width="860" height="760" rx="10" fill="#ffffff" stroke="${NAVY}" stroke-width="3.5"/>`);
  const B = [330, 365], Ch = [570, 365], P = [450, 575], r = 190;
  const id = (n) => `cl${n}`;
  o.push(`<defs><clipPath id="${id('B')}"><circle cx="${B[0]}" cy="${B[1]}" r="${r}"/></clipPath><clipPath id="${id('C')}"><circle cx="${Ch[0]}" cy="${Ch[1]}" r="${r}"/></clipPath><clipPath id="${id('P')}"><circle cx="${P[0]}" cy="${P[1]}" r="${r}"/></clipPath></defs>`);
  o.push(`<circle cx="${B[0]}" cy="${B[1]}" r="${r}" fill="#bcd8d5"/>`, `<circle cx="${Ch[0]}" cy="${Ch[1]}" r="${r}" fill="${C.cream}"/>`, `<circle cx="${P[0]}" cy="${P[1]}" r="${r}" fill="#f0ddd0"/>`);
  o.push(`<g clip-path="url(#${id('B')})"><circle cx="${Ch[0]}" cy="${Ch[1]}" r="${r}" fill="#d2e2aa"/><circle cx="${P[0]}" cy="${P[1]}" r="${r}" fill="#b4d6d0"/></g>`);
  o.push(`<g clip-path="url(#${id('C')})"><circle cx="${P[0]}" cy="${P[1]}" r="${r}" fill="#ecd6a6"/></g>`);
  o.push(`<g clip-path="url(#${id('B')})"><g clip-path="url(#${id('C')})"><circle cx="${P[0]}" cy="${P[1]}" r="${r}" fill="#e8bfb1"/></g></g>`);
  for (const c of [B, Ch, P]) o.push(`<circle cx="${c[0]}" cy="${c[1]}" r="${r}" fill="none" stroke="${NAVY}" stroke-width="3.5"/>`);
  const n = (x, y, s, col = NAVY) => t(x, y + 11, s, { size: 31, weight: 700, fill: col, anchor: 'middle' });
  o.push(n(240, 330, '9'), n(660, 330, '10'), n(450, 300, '10'), n(450, 425, '2', RUST), n(348, 505, '7'), n(550, 505, '8'), n(450, 665, '9'), n(810, 830, '5'));
  o.push(t(60, 185, 'Biology 28', { size: 22, weight: 700, fill: C.tealDark }), t(840, 185, 'Chemistry 30', { size: 22, weight: 700, fill: C.olive, anchor: 'end' }), t(60, 815, 'Physics 26', { size: 22, weight: 700, fill: RUST }));
  o.push(t(36, 867, 'ℰ = 60', { size: 21, weight: 700, fill: SLATE }));
  o.push(`<rect x="258" y="920" width="384" height="44" rx="22" fill="${C.tealDark}"/>`, t(450, 950, 'All eight regions add to 60', { size: 21, weight: 700, fill: '#ffffff', anchor: 'middle' }));
  return svg(W, 990, 'Three sets: eight regions', o.join('\n'), 'Fill the centre first');
}

// ---------- 4. Subset or not ----------
function subset() {
  const o = [];
  const big = (s, col = C.tealDark) => ({ size: 34, weight: 700, fill: col });
  const ring = (x, y, r, col) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${col}" stroke-width="3.5"/>`;
  const num = (x, y, s, col = NAVY) => t(x, y + 9, s, { size: 25, weight: 700, fill: col, anchor: 'middle' });
  const lab = (x, y, s, col) => t(x, y, s, { size: 20, weight: 700, fill: col, anchor: 'middle' });
  // panel 1
  o.push(panel(20, 100, 860, 270, '#ffffff', EDGE));
  o.push(t(50, 222, 'A ⊆ B', big()), t(50, 276, 'every A is in B', { size: 20, fill: C.muted }));
  o.push(ring(600, 235, 116, C.tealDark), ring(600, 235, 60, C.olive));
  o.push(lab(500, 147, 'B', C.tealDark), lab(530, 194, 'A', C.olive));
  o.push(num(580, 235, '2'), num(622, 235, '4'), num(560, 310, '1'), num(650, 306, '3'));
  // panel 2
  o.push(panel(20, 390, 860, 270, '#ffffff', EDGE));
  o.push(t(50, 512, 'A ⊈ B', big()), t(50, 566, 'one A is not in B', { size: 20, fill: C.muted }), t(50, 616, '6 ∈ A, but 6 ∉ B', { size: 20, weight: 700, fill: RUST }));
  o.push(ring(490, 525, 100, C.olive), ring(650, 525, 100, C.tealDark));
  o.push(lab(440, 414, 'A', C.olive), lab(700, 414, 'B', C.tealDark));
  o.push(`<circle cx="430" cy="525" r="26" fill="none" stroke="${RUST}" stroke-width="3.5"/>`, num(430, 525, '6', RUST));
  o.push(num(570, 525, '2'), num(690, 495, '3'), num(700, 565, '4'), num(660, 605, '1'));
  // panel 3
  o.push(panel(20, 680, 860, 290, '#ffffff', EDGE));
  o.push(t(50, 822, 'A ∩ B = ∅', big()), t(50, 876, 'no shared elements', { size: 20, fill: C.muted }));
  o.push(ring(520, 815, 95, C.olive), ring(740, 815, 95, C.tealDark));
  o.push(lab(520, 704, 'A', C.olive), lab(740, 704, 'B', C.tealDark));
  o.push(num(490, 815, '1'), num(550, 815, '3'), num(710, 815, '2'), num(770, 815, '4'));
  return svg(W, 990, 'Subset or not?', o.join('\n'));
}

export const figures = [
  { name: '04-subset-or-not', after: '## Set notation in brief', svg: subset(),
    alt: 'Three Venn diagrams. A circle for {2, 4} sits wholly inside a circle for {1, 2, 3, 4}, so A ⊆ B. A = {2, 6} overlaps B but 6 is outside B, so A ⊈ B. Two separate circles show A ∩ B = ∅.',
    caption: 'A is a subset of B only if no element of A lies outside B.' },
  { name: '05-three-set-venn', after: '### Answers', svg: threeSet(),
    alt: 'A three-circle Venn diagram of 60 students with all eight regions filled: 9, 10, 9 only; 10, 8, 7 for pairs; 2 for all three; 5 for none. Circle totals are 28, 30 and 26.',
    caption: 'Fill the centre first; the eight regions then add to 60.' },
];
