// Board-neutral redraw of a GCSE / IGCSE straight-line picture (4x + 3y = 12 from its axis
// intercepts) first drawn for Cambridge 0580 and reused on OCR and OxfordAQA pages. Same numbers;
// the "Extended" tier pill is gone.
import { C, svg, t } from '../style.mjs';

export const slug = 'mathematics-coordinates-and-drawing-linear-graphs';
const W = 900;
const GRID = '#d6e0de', RUST = '#b5602e';
const pill = (x, y, w, s, fill) => `<rect x="${x}" y="${y}" width="${w}" height="40" rx="20" fill="${fill}"/>` + t(x + w / 2, y + 28, s, { size: 20, weight: 700, fill: '#ffffff', anchor: 'middle' });

function intercepts() {
  const o = [];
  const u = 64, ox = 330, oy = 540; // x -2..7, y -5..6
  const X = (v) => ox + v * u, Y = (v) => oy - v * u;
  o.push(`<rect x="${X(-2)}" y="${Y(6)}" width="${9 * u}" height="${11 * u}" fill="#ffffff"/>`);
  for (let v = -2; v <= 7; v++) o.push(`<line x1="${X(v)}" y1="${Y(6)}" x2="${X(v)}" y2="${Y(-5)}" stroke="${GRID}" stroke-width="1.5"/>`);
  for (let v = -5; v <= 6; v++) o.push(`<line x1="${X(-2)}" y1="${Y(v)}" x2="${X(7)}" y2="${Y(v)}" stroke="${GRID}" stroke-width="1.5"/>`);
  o.push(`<line x1="${X(-2)}" y1="${oy}" x2="${X(7.3)}" y2="${oy}" stroke="${C.ink}" stroke-width="3.5"/><polygon points="${X(7.3) + 22},${oy} ${X(7.3)},${oy - 11} ${X(7.3)},${oy + 11}" fill="${C.ink}"/>`);
  o.push(`<line x1="${ox}" y1="${Y(-5)}" x2="${ox}" y2="${Y(6.3)}" stroke="${C.ink}" stroke-width="3.5"/><polygon points="${ox},${Y(6.3) - 22} ${ox - 11},${Y(6.3)} ${ox + 11},${Y(6.3)}" fill="${C.ink}"/>`);
  o.push(t(X(7.3) + 26, oy + 30, 'x', { size: 23, weight: 700, italic: true }), t(ox + 18, Y(6.3) - 6, 'y', { size: 23, weight: 700, italic: true }));
  for (let v = -2; v <= 7; v++) if (v) o.push(t(X(v), oy + 30, v < 0 ? `−${-v}` : String(v), { size: 19, fill: C.ink, anchor: 'middle' }));
  for (let v = -5; v <= 6; v++) if (v) o.push(t(ox - 18, Y(v) + 7, v < 0 ? `−${-v}` : String(v), { size: 19, fill: C.ink, anchor: 'end' }));
  o.push(t(ox - 12, oy + 30, 'O', { size: 19, weight: 700, anchor: 'end' }));
  const yAt = (x) => (12 - 4 * x) / 3;
  o.push(`<line x1="${X(-0.75)}" y1="${Y(yAt(-0.75))}" x2="${X(6.5)}" y2="${Y(yAt(6.5))}" stroke="${C.tealDark}" stroke-width="5"/>`);
  o.push(`<circle cx="${X(0)}" cy="${Y(4)}" r="13" fill="${RUST}"/><circle cx="${X(3)}" cy="${Y(0)}" r="13" fill="${RUST}"/><circle cx="${X(6)}" cy="${Y(-4)}" r="13" fill="${C.olive}"/>`);
  o.push(t(X(0) + 24, Y(4) - 14, 'x = 0: (0, 4)', { size: 21, weight: 700, fill: RUST }));
  o.push(t(X(3) + 24, Y(0) - 22, 'y = 0: (3, 0)', { size: 21, weight: 700, fill: RUST }));
  o.push(t(X(6) - 24, Y(-4) + 42, 'check: (6, −4)', { size: 21, weight: 700, fill: C.olive, anchor: 'end' }));
  o.push(pill(170, 890, 260, '3y = 12, so y = 4', RUST));
  o.push(pill(170, 940, 260, '4x = 12, so x = 3', RUST));
  o.push(pill(470, 890, 300, '24 + 3y = 12, y = −4', C.olive));
  return svg(W, 1005, 'Draw 4x + 3y = 12', o.join('\n'), 'Use x = 0, then y = 0, then a check');
}

export const figures = [
  { name: '06-axis-intercepts', after: '### Linear graphs', svg: intercepts(),
    alt: 'The line 4x + 3y = 12 is drawn through (0, 4) and (3, 0), found by putting x = 0 then y = 0, with a check point (6, -4). All three points are on one line.',
    caption: 'For x and y on the same side, set x = 0 and y = 0 to find the axis crossing points, then check a third point.' },
];
