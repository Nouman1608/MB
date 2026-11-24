// Board-neutral redraw of the star life-cycle figure first drawn for Cambridge IGCSE 0625 and reused on
// OCR GCSE and AQA GCSE 8463 pages. Same stages and branches; the "Extended" tier pill is removed.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'physics-space-physics';
const W = 900;
const NAVY = C.ink;
const circ = (x, y, r, fill, stroke = NAVY, sw = 2.5, extra = '') => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"${extra}/>`;
const name = (x, y, s, sub) => t(x, y, s, { size: 23, weight: 700 }) + (sub ? t(x, y + 32, sub, { size: 20, fill: C.muted }) : '');

function lifeCycle() {
  const o = [];
  const dy = -10;
  const Y = (v) => v + dy;
  // cloud
  o.push(circ(430, Y(168), 26, '#b9c6d6', '#8a9ab0', 2), circ(462, Y(152), 30, '#b9c6d6', '#8a9ab0', 2), circ(478, Y(180), 22, '#b9c6d6', '#8a9ab0', 2), circ(446, Y(186), 22, '#b9c6d6', '#8a9ab0', 2));
  o.push(t(374, Y(174), 'Gas and dust cloud', { size: 23, weight: 700, anchor: 'end' }));
  o.push(arrow(450, Y(220), 450, Y(272), { w: 3.5 }));
  o.push(circ(450, Y(320), 40, 'none', NAVY, 2.5, ' stroke-dasharray="5 5"'), circ(450, Y(320), 17, '#e3903e'));
  o.push(name(514, Y(318), 'Protostar', 'gravity pulls in, heats up'));
  o.push(arrow(450, Y(368), 450, Y(432), { w: 3.5 }));
  o.push(circ(450, Y(474), 29, '#e9c33a', C.olive, 2.5), name(502, Y(472), 'Stable star', 'gravity in = heat out'));
  o.push(arrow(430, Y(512), 150, Y(628), { w: 3.5 }), arrow(470, Y(512), 512, Y(618), { w: 3.5 }));
  o.push(t(16, Y(590), 'Less massive', { size: 22, weight: 700 }), t(584, Y(590), 'More massive', { size: 22, weight: 700 }));
  o.push(circ(130, Y(698), 47, '#c8553a'), name(200, Y(706), 'Red giant'));
  o.push(circ(520, Y(698), 58, '#9c2d22'), name(602, Y(706), 'Red supergiant'));
  o.push(arrow(130, Y(746), 130, Y(790), { w: 3.5 }), arrow(520, Y(758), 520, Y(792), { w: 3.5 }));
  o.push(circ(130, Y(860), 44, 'none', '#7ea7d8', 9), circ(130, Y(860), 7, '#ffffff', NAVY, 2), name(210, Y(868), 'Planetary nebula'));
  const star = Array.from({ length: 16 }, (_, i) => { const r = i % 2 ? 22 : 58, a = (Math.PI / 8) * i - Math.PI / 2; return `${(518 + r * Math.cos(a)).toFixed(1)},${(Y(860) + r * Math.sin(a)).toFixed(1)}`; }).join(' ');
  o.push(`<polygon points="${star}" fill="#e9c33a" stroke="${C.rust}" stroke-width="2.5"/>`, name(600, Y(868), 'Supernova'));
  o.push(arrow(130, Y(910), 130, Y(992), { w: 3.5 }), circ(130, Y(1018), 11, '#ffffff', NAVY, 2.5), name(166, Y(1026), 'White dwarf'));
  o.push(arrow(510, Y(922), 484, Y(984), { w: 3.5 }), arrow(530, Y(918), 718, Y(990), { w: 3.5 }));
  o.push(circ(480, Y(1018), 9, '#3b4558'), t(480, Y(1080), 'Neutron star', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(circ(720, Y(1018), 24, '#ffffff', C.olive, 3.5), circ(720, Y(1018), 15, '#000000', NAVY, 1), t(720, Y(1080), 'Black hole', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(`<path d="M572 ${Y(820)} H872 V${Y(168)} H530" fill="none" stroke="${C.tealDark}" stroke-width="3" stroke-dasharray="9 6" marker-end="url(#ahT)"/>`);
  o.push(`<text x="852" y="${Y(600)}" font-size="20" fill="${C.tealDark}" text-anchor="middle" transform="rotate(-90 852 ${Y(600)})">may form new stars</text>`);
  return svg(W, 1100, 'Life cycle of a star', o.join('\n'), 'Mass decides the ending');
}

export const figures = [
  { name: '05-star-life-cycle', after: '### Life cycle (listed under "To include")', svg: lifeCycle(),
    alt: 'A cloud of gas and dust collapses into a protostar and becomes a stable star. Less massive stars become red giants, then a planetary nebula with a white dwarf. More massive stars become red supergiants, explode as supernovae and leave a neutron star or black hole. The nebula may form new stars.',
    caption: "A star's mass decides whether it ends as a white dwarf, a neutron star or a black hole." },
];
