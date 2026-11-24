// Board-neutral redraws of four GCSE waves figures (measuring a wave, sonar, lens focus, lens image).
// Same content and numbers as the earlier set, with the tier pills ("Core", "Extended") removed.
import { C, svg, panel, t, arrow, path } from '../style.mjs';

export const slug = 'physics-waves';
const W = 900;
const WATER = '#d3e6ec', LENS = '#dde9e6';

// ---------- 01 Measuring a wave ----------
function measuring() {
  const o = [];
  const x0 = 110, mid = 250, A = 70, sx = 700; // sx px per metre
  const X = (d) => x0 + d * sx;
  const pts = []; for (let i = 0; i <= 270; i++) { const d = (0.9 * i) / 270; pts.push(`${X(d).toFixed(1)} ${(mid - A * Math.sin((2 * Math.PI * d) / 0.4)).toFixed(1)}`); }
  o.push(`<line x1="${x0}" y1="${mid}" x2="${X(0.92)}" y2="${mid}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(`<line x1="${x0}" y1="${mid - 110}" x2="${x0}" y2="${mid + 110}" stroke="${C.ink}" stroke-width="2.5"/>`);
  const ry = mid + A + 66; // distance ruler below the wave
  o.push(`<line x1="${x0}" y1="${ry}" x2="${X(0.9)}" y2="${ry}" stroke="${C.ink}" stroke-width="2.5"/>`);
  for (const d of [0, 0.2, 0.4, 0.6, 0.8]) o.push(`<line x1="${X(d)}" y1="${ry - 7}" x2="${X(d)}" y2="${ry + 7}" stroke="${C.ink}" stroke-width="2"/>`);
  o.push(path('M' + pts.join(' L'), { stroke: C.tealDark, w: 4.5 }));
  for (const [d, s] of [[0, '0.0'], [0.2, '0.2'], [0.4, '0.4'], [0.6, '0.6'], [0.8, '0.8']]) o.push(t(X(d), ry + 28, s, { size: 17, fill: C.muted, anchor: 'middle' }));
  for (const d of [0.1, 0.5]) o.push(`<circle cx="${X(d)}" cy="${mid - A}" r="8" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`, `<line x1="${X(d)}" y1="${mid - A - 10}" x2="${X(d)}" y2="${mid - A - 28}" stroke="${C.olive}" stroke-width="1.5" stroke-dasharray="3 3"/>`);
  o.push(`<line x1="${X(0.1) + 4}" y1="${mid - A - 34}" x2="${X(0.5) - 4}" y2="${mid - A - 34}" stroke="${C.olive}" stroke-width="3.5" marker-start="url(#ahO)" marker-end="url(#ahO)"/>`);
  o.push(t(X(0.3), mid - A - 48, 'wavelength λ = 0.40 m', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(arrow(X(0.9) + 26, mid, X(0.9) + 26, mid - A + 4, { w: 3.5 }));
  o.push(t(X(0.9) + 40, mid - A / 2 + 6, 'amplitude', { size: 20, weight: 700 }));
  o.push(t(X(0.9), mid - A - 20, 'crest', { size: 18, fill: C.muted, anchor: 'middle' }));
  o.push(t(X(0.3), mid + A + 30, 'trough', { size: 18, fill: C.muted, anchor: 'middle' }));
  o.push(`<text transform="translate(${x0 - 18} ${mid}) rotate(-90)" font-size="17" fill="${C.muted}" text-anchor="middle">displacement</text>`);
  o.push(t(X(0.9) + 14, ry + 6, 'distance (m)', { size: 17, fill: C.muted }));
  const y = 470;
  o.push(panel(40, y, 820, 300));
  o.push(`<line x1="450" y1="${y + 30}" x2="450" y2="${y + 270}" stroke="${C.panelEdge}" stroke-width="2.5"/>`);
  o.push(t(70, y + 46, 'Wave speed', { size: 20, weight: 700 }));
  o.push(t(70, y + 112, 'v = f × λ', { size: 32, weight: 700, fill: C.tealDark }));
  o.push(t(70, y + 176, '= 5 × 0.40', { size: 26, weight: 700 }));
  o.push(t(70, y + 232, '= 2.0 m/s', { size: 28, weight: 700, fill: C.olive }));
  o.push(t(490, y + 46, 'Frequency', { size: 20, weight: 700 }));
  o.push(t(490, y + 100, 'f = 5 Hz', { size: 26, weight: 700, fill: C.tealDark }));
  o.push(t(490, y + 134, '5 waves each second', { size: 18, fill: C.muted }));
  o.push(t(490, y + 190, 'Period', { size: 20, weight: 700 }));
  o.push(t(490, y + 236, 'T = 1 ÷ 5 = 0.2 s', { size: 26, weight: 700, fill: C.tealDark }));
  return svg(W, y + 340, 'Measuring a wave', o.join('\n'), 'Wavelength, amplitude, frequency');
}

// ---------- 05 Lens focus ----------
function lensFocus() {
  const o = [];
  // converging
  const ax = 230, lx = 470, fx = 640;
  o.push(t(60, 134, 'Converging lens', { size: 21, weight: 700 }));
  o.push(`<line x1="40" y1="${ax}" x2="860" y2="${ax}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="8 7"/>`);
  o.push(`<path d="M${lx} ${ax - 110} Q${lx + 22} ${ax} ${lx} ${ax + 110} Q${lx - 22} ${ax} ${lx} ${ax - 110} Z" fill="${LENS}" stroke="${C.tealDark}" stroke-width="3"/>`);
  for (const dy of [-80, 0, 80]) {
    o.push(`<line x1="60" y1="${ax + dy}" x2="${lx}" y2="${ax + dy}" stroke="${C.olive}" stroke-width="3"/>`);
    const ex = fx + 60, ey = ax + (dy ? (-dy * 60) / (fx - lx) : 0);
    o.push(`<line x1="${lx}" y1="${ax + dy}" x2="${ex}" y2="${ey}" stroke="${C.olive}" stroke-width="3"/>`);
  }
  o.push(`<circle cx="${fx}" cy="${ax}" r="9" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>`, t(fx, ax + 36, 'F', { size: 21, weight: 700, fill: C.rust, anchor: 'middle' }));
  o.push(`<line x1="${lx + 8}" y1="${ax + 140}" x2="${fx - 8}" y2="${ax + 140}" stroke="${C.rust}" stroke-width="3.5" marker-start="url(#ahR)" marker-end="url(#ahR)"/>`);
  o.push(t((lx + fx) / 2, ax + 172, 'focal length', { size: 19, weight: 700, fill: C.rust, anchor: 'middle' }));
  // diverging
  const ay = 600, dfx = 300;
  o.push(t(60, 470, 'Diverging lens', { size: 21, weight: 700 }));
  o.push(`<line x1="40" y1="${ay}" x2="860" y2="${ay}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="8 7"/>`);
  o.push(`<path d="M${lx - 24} ${ay - 112} H${lx + 24} Q${lx + 6} ${ay} ${lx + 24} ${ay + 112} H${lx - 24} Q${lx - 6} ${ay} ${lx - 24} ${ay - 112} Z" fill="${LENS}" stroke="${C.tealDark}" stroke-width="3"/>`);
  for (const dy of [-80, 0, 80]) {
    o.push(`<line x1="60" y1="${ay + dy}" x2="${lx}" y2="${ay + dy}" stroke="${C.olive}" stroke-width="3"/>`);
    const slope = dy / (lx - dfx), ex = 720;
    o.push(`<line x1="${lx}" y1="${ay + dy}" x2="${ex}" y2="${ay + dy + slope * (ex - lx)}" stroke="${C.olive}" stroke-width="3"/>`);
    if (dy) o.push(`<line x1="${dfx}" y1="${ay}" x2="${lx}" y2="${ay + dy}" stroke="${C.olive}" stroke-width="2.2" stroke-dasharray="7 6"/>`);
  }
  o.push(`<circle cx="${dfx}" cy="${ay}" r="9" fill="${C.rust}" stroke="${C.ink}" stroke-width="2"/>`, t(dfx, ay + 38, 'F', { size: 21, weight: 700, fill: C.rust, anchor: 'middle' }));
  o.push(t(60, 790, 'dashed: traced back, not real rays', { size: 18, fill: C.muted }));
  return svg(W, 820, 'Focal length and principal focus', o.join('\n'), 'Parallel rays enter each lens');
}

// ---------- 06 Lens image ----------
function lensImage() {
  const o = [];
  const ax = 300, lx = 450, f = 120, u = 300, v = 200, ho = 64, hi = (ho * v) / u;
  o.push(`<line x1="60" y1="${ax}" x2="840" y2="${ax}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(`<path d="M${lx} ${ax - 140} Q${lx + 26} ${ax} ${lx} ${ax + 140} Q${lx - 26} ${ax} ${lx} ${ax - 140} Z" fill="${LENS}" stroke="${C.tealDark}" stroke-width="3"/>`);
  for (const [d, s] of [[-2 * f, '2F'], [-f, 'F'], [f, 'F'], [2 * f, '2F']]) {
    o.push(`<line x1="${lx + d}" y1="${ax - 9}" x2="${lx + d}" y2="${ax + 9}" stroke="${C.ink}" stroke-width="2.5"/>`);
    o.push(t(lx + d, d < 0 ? ax + 36 : ax - 18, s, { size: 19, weight: 700, anchor: 'middle' }));
  }
  const ox = lx - u, ix = lx + v;
  o.push(arrow(ox, ax, ox, ax - ho, { w: 5 }));
  o.push(t(ox, ax - ho - 16, 'object', { size: 19, weight: 700, anchor: 'middle' }));
  o.push(path(`M${ox} ${ax - ho} H${lx} L${ix} ${ax + hi}`, { stroke: C.olive, w: 3 }));
  o.push(`<line x1="${ox}" y1="${ax - ho}" x2="${ix}" y2="${ax + hi}" stroke="${C.rust}" stroke-width="3"/>`);
  o.push(arrow(ix, ax, ix, ax + hi, { color: C.tealDark, w: 5, marker: 'ahT' }));
  o.push(`<circle cx="${ix}" cy="${ax + hi}" r="6" fill="${C.mustard}" stroke="${C.ink}" stroke-width="2"/>`);
  o.push(t(ix, ax + hi + 34, 'image', { size: 19, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  const y = 480;
  o.push(panel(40, y, 820, 170, '#fff', C.ink));
  o.push(t(70, y + 44, 'The image is:', { size: 21, weight: 700 }));
  ['real', 'inverted', 'diminished'].forEach((s, i) => {
    const cx = 170 + i * 280;
    o.push(`<rect x="${cx - 120}" y="${y + 74}" width="240" height="60" rx="30" fill="${LENS}" stroke="${C.tealDark}" stroke-width="2.5"/>`);
    o.push(t(cx, y + 112, s, { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  });
  return svg(W, y + 200, 'Image from a converging lens', o.join('\n'), 'Object beyond 2F');
}

// ---------- 08 Sonar ----------
function sonar() {
  const o = [];
  const top = 230, bed = 700;
  o.push(`<rect x="40" y="${top}" width="820" height="${bed - top}" fill="${WATER}"/>`);
  o.push(`<line x1="40" y1="${top}" x2="860" y2="${top}" stroke="${C.tealDark}" stroke-width="3"/>`);
  o.push(`<rect x="40" y="${bed}" width="820" height="36" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/>`);
  o.push(t(840, bed + 25, 'sea bed', { size: 18, weight: 700, fill: '#fff', anchor: 'end' }));
  o.push(`<path d="M150 ${top - 40} H360 L330 ${top + 6} H180 Z" fill="${C.ink}"/>`, `<rect x="210" y="${top - 80}" width="70" height="40" fill="#fff" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(arrow(230, top + 14, 230, bed - 6, { color: C.olive, w: 6, marker: 'ahO' }));
  o.push(arrow(300, bed - 6, 300, top + 14, { color: C.tealDark, w: 6, marker: 'ahT' }));
  o.push(t(210, 360, 'pulse', { size: 20, weight: 700, fill: C.olive, anchor: 'end' }));
  o.push(t(320, 360, 'echo', { size: 20, weight: 700, fill: C.tealDark }));
  o.push(`<line x1="640" y1="${top + 4}" x2="640" y2="${bed - 4}" stroke="${C.ink}" stroke-width="3" marker-start="url(#ah)" marker-end="url(#ah)"/>`);
  o.push(t(664, 460, 'depth', { size: 22, weight: 700 }), t(664, 490, '= 300 m', { size: 22, weight: 700, fill: C.olive }));
  const y = 760;
  o.push(panel(40, y, 820, 200, '#fff', C.ink));
  o.push(t(70, y + 44, 'Speed in sea water: 1500 m/s', { size: 20 }));
  o.push(t(70, y + 82, 'Echo time: 0.40 s', { size: 20 }));
  o.push(t(70, y + 120, 'Distance there and back = 1500 × 0.40 = 600 m', { size: 20 }));
  o.push(t(70, y + 166, 'depth = 600 ÷ 2 = 300 m', { size: 23, weight: 700, fill: C.tealDark }));
  return svg(W, y + 230, 'Sonar: how deep is the sea?', o.join('\n'), 'Time the echo from the sea bed');
}

export const figures = [
  { name: '01-measuring-a-wave', after: '## What you must be able to do', svg: measuring(),
    alt: 'A sine graph of displacement against distance marks wavelength between two crests (0.40 m) and amplitude from rest position to crest. With f = 5 Hz, v = f x wavelength = 2.0 m/s and the period is 0.2 s.',
    caption: 'Wavelength is crest to crest; amplitude is from the middle to a crest; v = f x wavelength.' },
  { name: '08-sonar', after: '### Worked example 5: ultrasound in tissue', svg: sonar(),
    alt: 'A pulse goes down and the echo returns in 0.40 s at 1500 m/s: 600 m there and back, so the depth is 300 m.',
    caption: 'Depth = speed x time / 2, because the pulse travels there and back.' },
  { name: '06-lens-image', after: '## Lenses (4.6.2.5)', svg: lensImage(),
    alt: 'To-scale ray diagram with f = 120 and object at 300: image forms at 200, real, inverted and diminished.',
    caption: 'An object beyond 2F gives a real, inverted, diminished image.' },
  { name: '05-lens-focus', after: '## Lenses (4.6.2.5)', svg: lensFocus(),
    alt: 'Parallel rays meet at the principal focus after a converging lens. After a diverging lens they spread out and appear to come from a principal focus on the incoming side.',
    caption: 'A converging lens brings parallel rays to a focus; a diverging lens spreads them as if from a focus.' },
];
