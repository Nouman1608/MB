// Board-neutral redraws of eight A Level Maths "sequences and series" pictures used on Edexcel IAL,
// AQA, OCR and OxfordAQA pages. Same maths as before; board pills and the "A Level only (not AS)"
// course-stage pill are gone.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'mathematics-series';
const W = 900;
const ROW = '#f5e3d9'; // light rust panel

const line = (x1, y1, x2, y2, { color = C.ink, w = 2.5, dash = '' } = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const dot = (x, y, r = 8, fill = '#fff', edge = C.ink, w = 2.5) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${edge}" stroke-width="${w}"/>`;
const pill = (x, y, w, h, s, fill = C.cream, edge = C.olive, size = 22) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` +
  t(x + w / 2, y + h / 2 + size * 0.36, s, { size, weight: 700, anchor: 'middle' });
const sub = (s) => `<tspan baseline-shift="sub" font-size="70%">${s}</tspan>`;
const sup = (s) => `<tspan baseline-shift="super" font-size="70%">${s}</tspan>`;
const scale = (d0, d1, p0, p1) => (v) => p0 + ((v - d0) * (p1 - p0)) / (d1 - d0);
const poly = (pts, o) => path('M' + pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L'), o);

// ---------- 1. AP vs GP ----------
function apVsGp() {
  const out = [];
  const bars = (y, h, title, terms, maxV, eq) => {
    out.push(panel(30, y, 840, h));
    out.push(t(60, y + 46, title, { size: 24, weight: 700 }));
    const base = y + 290, top = y + 100, sc = (base - top) / maxV;
    out.push(line(50, base, 850, base, { w: 3 }));
    terms.forEach((v, i) => {
      const x = 80 + i * 125, bw = 84;
      const prev = i ? terms[i - 1] : v;
      out.push(`<rect x="${x}" y="${base - v * sc}" width="${bw}" height="${v * sc}" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
      out.push(`<rect x="${x}" y="${base - prev * sc}" width="${bw}" height="${prev * sc}" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/>`);
      out.push(t(x + bw / 2, base - v * sc - 12, String(v), { size: 21, weight: 700, anchor: 'middle' }));
    });
    out.push(pill(210, base + 30, 480, 56, eq));
  };
  bars(150, 400, 'Arithmetic: add d = 3 each time', [5, 8, 11, 14, 17, 20], 20 * 1.1, '2b = a + c: 2 × 11 = 8 + 14');
  bars(570, 400, 'Geometric: multiply by r = 2 each time', [3, 6, 12, 24, 48, 96], 96 * 1.05, 'b² = ac: 12² = 6 × 24');
  out.push(`<rect x="120" y="998" width="30" height="30" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/>`, t(162, 1021, 'previous term', { size: 21 }));
  out.push(`<rect x="430" y="998" width="30" height="30" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`, t(472, 1021, 'amount added', { size: 21 }));
  return svg(W, 1060, 'Same step, or same multiplier?', out.join('\n'), 'Arithmetic and geometric progressions');
}

// ---------- 2. AP sum pairing ----------
function apPairing() {
  const out = [];
  out.push(t(72, 214, '7', { size: 20, weight: 700, anchor: 'middle' }));
  out.push(t(72, 282, '∑', { size: 58, weight: 700, anchor: 'middle' }));
  out.push(t(72, 322, 'r = 1', { size: 18, anchor: 'middle' }));
  out.push(t(122, 266, '(4r − 1) = 3 + 7 + 11 + … + 27', { size: 28, weight: 700 }));
  out.push(t(W / 2, 368, 'every column adds up to a + l = 30', { size: 23, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  const fwd = [3, 7, 11, 15, 19, 23, 27];
  const base = 780, sc = 388 / 30;
  out.push(line(60, base, 840, base, { w: 3 }));
  fwd.forEach((v, i) => {
    const x = 70 + i * 108, bw = 96, back = fwd[6 - i];
    out.push(`<rect x="${x}" y="${base - v * sc}" width="${bw}" height="${v * sc}" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/>`);
    out.push(`<rect x="${x}" y="${base - 30 * sc}" width="${bw}" height="${back * sc}" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
    out.push(t(x + bw / 2, base - (v * sc) / 2 + 8, String(v), { size: 21, weight: 700, anchor: 'middle' }));
    out.push(t(x + bw / 2, base - 30 * sc + (back * sc) / 2 + 8, String(back), { size: 21, weight: 700, anchor: 'middle' }));
  });
  out.push(`<rect x="110" y="818" width="30" height="30" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/>`, t(152, 841, 'terms forwards', { size: 21 }));
  out.push(`<rect x="470" y="818" width="30" height="30" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`, t(512, 841, 'terms backwards', { size: 21 }));
  out.push(pill(110, 880, 680, 64, '2S = 7 × 30 = 210, so S = 105', C.cream, C.olive, 25));
  out.push(pill(110, 966, 680, 64, `S${sub('n')} = ½n(a + l) = ½ × 7 × (3 + 27)`, C.tealLight, C.tealDark, 23));
  return svg(W, 1070, 'Adding an arithmetic series', out.join('\n'), 'Write it forwards and backwards');
}

// ---------- 3. GP sum to infinity ----------
function gpSumInf() {
  const out = [];
  const X = scale(0, 20, 120, 830), Y = scale(0, 250, 650, 199);
  out.push(arrow(120, 650, 848, 650, { w: 3 }), arrow(120, 650, 120, 168, { w: 3 }));
  [0, 5, 10, 15, 20].forEach((v) => out.push(line(X(v), 650, X(v), 660), t(X(v), 690, String(v), { size: 19, anchor: 'middle' })));
  [0, 50, 100, 150, 200, 250].forEach((v) => out.push(line(110, Y(v), 120, Y(v)), t(104, Y(v) + 7, String(v), { size: 19, anchor: 'end' })));
  out.push(t(475, 732, 'n (number of terms added)', { size: 20, weight: 700, anchor: 'middle' }));
  out.push(`<text x="40" y="410" font-size="22" font-weight="700" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 40 410)">S${sub('n')}</text>`);
  out.push(line(120, Y(243), 848, Y(243), { color: C.olive, w: 3, dash: '14 8' }));
  out.push(t(835, Y(243) - 14, 'S∞ = 243', { size: 22, weight: 700, fill: C.olive, anchor: 'end' }));
  const S = [...Array(20)].map((_, i) => 243 * (1 - Math.pow(2 / 3, i + 1)));
  out.push(poly(S.map((v, i) => [X(i + 1), Y(v)]), { stroke: '#7bb3aa', w: 3.5 }));
  out.push(line(X(5), Y(243), X(5), Y(211), { color: C.rust, w: 3 }));
  out.push(t(X(5) - 12, Y(227) + 7, 'gap 32', { size: 20, weight: 700, fill: C.rust, anchor: 'end' }));
  S.forEach((v, i) => out.push(i === 4 ? dot(X(5), Y(v), 11, C.mustard, C.ink, 3) : dot(X(i + 1), Y(v), 7.5, '#fff', C.tealDark, 2.5)));
  out.push(t(X(5) + 22, Y(211) + 36, `S${sub('5')} = 211`, { size: 20, weight: 700 }));
  out.push(pill(90, 840, 720, 66, 'a = 81, r = 2/3: S∞ = 81 ÷ (1 − 2/3) = 243', C.cream, C.olive, 23));
  out.push(pill(90, 926, 720, 66, `gap = 243(2/3)${sup('n')} is below 1 from n = 14`, C.tealLight, C.tealDark, 23));
  return svg(W, 1030, 'Why a sum to infinity exists', out.join('\n'), `Each new term is smaller, so S${sub('n')} levels off`);
}

// ---------- 4. GP convergence ----------
function gpConvergence() {
  const out = [];
  const box = (x, y, r, conv) => {
    const fill = conv ? C.tealLight : ROW, edge = conv ? C.tealDark : C.rust;
    out.push(panel(x, y, 410, 400, fill, edge));
    out.push(t(x + 20, y + 44, `r = ${r < 0 ? '−' + Math.abs(r) : r}`, { size: 26, weight: 700 }));
    out.push(t(x + 390, y + 44, conv ? 'converges' : 'diverges', { size: 23, weight: 700, fill: edge, anchor: 'end' }));
    out.push(t(x + 20, y + 78, conv ? 'S∞ exists' : 'no S∞', { size: 21, fill: C.muted }));
    const axisY = conv ? y + 240 : y + 240, u = 40;
    out.push(line(x + 18, axisY, x + 392, axisY, { w: 2.5 }));
    for (let k = 0; k < 8; k++) {
      const v = Math.pow(r, k), px = x + 36 + k * 48.5, py = axisY - v * u;
      out.push(line(px, axisY, px, py, { color: edge, w: 4 }));
      out.push(dot(px, py, 7, '#fff', edge, 3));
    }
  };
  box(30, 150, 0.6, true); box(460, 150, -0.6, true);
  box(30, 570, 1.2, false); box(460, 570, -1.2, false);
  // number line
  out.push(panel(30, 990, 840, 220, '#fff', C.ink));
  out.push(t(W / 2, 1032, '|r| &lt; 1 means convergent', { size: 25, weight: 700, anchor: 'middle' }));
  const N = scale(-2, 2, 90, 810), ly = 1090;
  out.push(line(N(-2), ly, N(2), ly, { color: C.muted, w: 2.5 }));
  [-2, -1, 0, 1, 2].forEach((v) => out.push(line(N(v), ly - 10, N(v), ly + 10, { w: 2.5 }), t(N(v), ly - 22, v < 0 ? '−' + -v : String(v), { size: 19, anchor: 'middle' })));
  out.push(line(N(-1), ly, N(1), ly, { color: C.tealDark, w: 10 }));
  out.push(dot(N(-1), ly, 10, '#fff', C.tealDark, 4), dot(N(1), ly, 10, '#fff', C.tealDark, 4));
  for (const v of [-0.6, 0.6]) out.push(dot(N(v), ly, 9, C.tealDark, C.ink, 2.5), t(N(v), ly + 42, v < 0 ? '−0.6' : '0.6', { size: 19, weight: 700, anchor: 'middle' }));
  for (const v of [-1.2, 1.2]) out.push(dot(N(v), ly, 9, C.rust, C.ink, 2.5), t(N(v), ly + 42, v < 0 ? '−1.2' : '1.2', { size: 19, weight: 700, anchor: 'middle' }));
  out.push(t(W / 2, 1180, 'open circles: r = −1 and r = 1 are not allowed', { size: 19, fill: C.muted, anchor: 'middle' }));
  return svg(W, 1235, 'When does a sum to infinity exist?', out.join('\n'), 'Terms of a geometric series with a = 1');
}

// ---------- 5. Sequence behaviour ----------
function seqBehaviour() {
  const out = [];
  const plotPanel = (y, h, title, n, vals, ymin, ymax, ticks, opts = {}) => {
    out.push(panel(30, y, 840, h));
    out.push(t(60, y + 42, title, { size: 22, weight: 700 }));
    const ax = 150, top = y + (opts.top || 90), bot = y + h - 70;
    const X = scale(1, n, 197, 765), Y = scale(ymin, ymax, bot - 22, top);
    out.push(arrow(ax, bot, 828, bot, { w: 3 }), arrow(ax, bot, ax, top - 30, { w: 3 }));
    for (let i = 1; i <= n; i++) out.push(line(X(i), bot, X(i), bot + 8), t(X(i), bot + 32, String(i), { size: 18, anchor: 'middle' }));
    ticks.forEach((v) => out.push(line(ax - 8, Y(v), ax, Y(v)), t(ax - 14, Y(v) + 6, v < 0 ? '−' + -v : String(v), { size: 18, anchor: 'end' })));
    out.push(poly(vals.map((v, i) => [X(i + 1), Y(v)]), { stroke: '#a9cfc9', w: 2.5, extra: 'stroke-dasharray="8 6"' }));
    vals.forEach((v, i) => out.push(dot(X(i + 1), Y(v), 9, (opts.hi || []).includes(i + 1) ? C.mustard : '#fff', C.ink, 2.5)));
    return { X, Y, bot, top };
  };
  // 1: n^2 - 8n
  const v1 = [...Array(8)].map((_, i) => (i + 1) ** 2 - 8 * (i + 1));
  const p1 = plotPanel(150, 300, `Decreasing, then increasing: u${sub('n')} = n${sup('2')} − 8n`, 8, v1, -24, 0, [0, -8, -16], { hi: [4], top: 110 });
  out.push(t(p1.X(2.5), 230, 'decreasing', { size: 22, weight: 700, fill: C.rust, anchor: 'middle' }));
  out.push(t(p1.X(6.5), 230, 'increasing', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  out.push(t(p1.X(4.4), p1.Y(-16) + 36, `least term u${sub('4')} = −16`, { size: 20, weight: 700, anchor: 'middle' }));
  // 2: periodic
  const cyc = [3, -0.5, 2 / 3];
  const v2 = [...Array(9)].map((_, i) => cyc[i % 3]);
  const p2 = plotPanel(470, 300, `Periodic: x${sub('n+1')} = 1/(1 − x${sub('n')}), x${sub('1')} = 3`, 9, v2, -0.5, 3, [0, 1, 2, 3], { hi: [1, 2, 3], top: 120 });
  out.push(t(p2.X(5.4), 562, 'repeats every 3 terms', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  // 3: (3n-1)/(n+2)
  const v3 = [...Array(10)].map((_, i) => (3 * (i + 1) - 1) / (i + 3));
  const p3 = plotPanel(790, 300, `Increasing to a limit: u${sub('n')} = (3n − 1)/(n + 2)`, 10, v3, 0, 3, [0, 1, 2, 3], { top: 100 });
  out.push(line(150, p3.Y(3), 810, p3.Y(3), { color: C.olive, w: 3, dash: '16 9' }));
  out.push(t(808, p3.Y(3) - 12, 'limit 3, never reached', { size: 20, weight: 700, fill: C.olive, anchor: 'end' }));
  return svg(W, 1120, 'How a sequence can behave', out.join('\n'), 'Three types from the lessons');
}

// ---------- 6. Recurrence cobweb ----------
function cobweb() {
  const out = [];
  const X = scale(0, 24, 130, 770), Y = scale(0, 24, 838, 198);
  out.push(arrow(130, 838, 790, 838, { w: 3 }), arrow(130, 838, 130, 180, { w: 3 }));
  [0, 5, 10, 15, 20].forEach((v) => out.push(line(X(v), 838, X(v), 848), t(X(v), 878, String(v), { size: 19, anchor: 'middle' })));
  [5, 10, 15, 20].forEach((v) => out.push(line(120, Y(v), 130, Y(v)), t(112, Y(v) + 7, String(v), { size: 19, anchor: 'end' })));
  out.push(t(450, 925, `x${sub('n')}`, { size: 22, weight: 700, anchor: 'middle' }));
  out.push(`<text x="44" y="520" font-size="22" font-weight="700" fill="${C.ink}" text-anchor="middle" transform="rotate(-90 44 520)">x${sub('n+1')}</text>`);
  out.push(line(X(0), Y(0), X(24), Y(24), { w: 3 }));
  out.push(line(X(0), Y(8), X(24), Y(0.6 * 24 + 8), { color: C.tealDark, w: 4.5 }));
  out.push(t(148, Y(15) + 6 - 60, 'y = 0.6x + 8', { size: 21, weight: 700, fill: C.tealDark }));
  out.push(t(684, Y(15) - 50 + 60, 'y = x', { size: 21, weight: 700 }));
  out.push(line(130, Y(20), X(20), Y(20), { color: C.olive, w: 2.5, dash: '10 7' }), line(X(20), Y(20), X(20), 838, { color: C.olive, w: 2.5, dash: '10 7' }));
  // cobweb path
  let x = 5;
  const xs = [5];
  const pts = [[X(5), Y(5)]];
  for (let k = 0; k < 7; k++) {
    const y = 0.6 * x + 8;
    pts.push([X(x), Y(y)], [X(y), Y(y)]);
    x = y; xs.push(x);
  }
  out.push(poly(pts, { stroke: C.rust, w: 3 }));
  xs.slice(0, 4).forEach((v, i) => {
    out.push(dot(X(v), Y(v), 9, C.mustard, C.ink, 2.5));
    out.push(t(X(v) + 14, Y(v) + 36, `x${sub(String(i + 1))}`, { size: 21, weight: 700 }));
  });
  out.push(dot(X(20), Y(20), 12, '#fff', C.olive, 4));
  out.push(t(X(20) - 26, Y(20) - 20, 'L = 20', { size: 22, weight: 700, fill: C.olive, anchor: 'end' }));
  out.push(pill(60, 960, 780, 64, `x${sub('2')} = 11, x${sub('3')} = 14.6, x${sub('4')} = 16.76, …`, C.cream, C.olive, 22));
  out.push(pill(60, 1044, 780, 64, 'limit: L = 0.6L + 8, so L = 20', C.tealLight, C.tealDark, 22));
  return svg(W, 1140, 'Where does a recurrence settle?', out.join('\n'), `Cobweb for x${sub('n+1')} = 0.6x${sub('n')} + 8, x${sub('1')} = 5`);
}

// ---------- 7. Pascal and binomial ----------
function pascal() {
  const out = [];
  const rows = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1]];
  const pos = (n, k) => [450 + (k - n / 2) * 96, 196 + n * 60];
  // arrows 4 and 6 -> 10
  const [tx, ty] = pos(5, 2);
  for (const k of [1, 2]) {
    const [sx, sy] = pos(4, k);
    const a = Math.atan2(ty - sy, tx - sx);
    out.push(arrow(sx + 30 * Math.cos(a), sy + 30 * Math.sin(a), tx - 32 * Math.cos(a), ty - 32 * Math.sin(a), { color: C.olive, marker: 'ahO', w: 3.5 }));
  }
  rows.forEach((r, n) => {
    out.push(t(40, 196 + n * 60 + 7, `n = ${n}`, { size: 19, fill: C.muted }));
    r.forEach((v, k) => {
      const [x, y] = pos(n, k);
      let fill = '#fff', edge = C.ink, w = 2.5;
      if (n === 5) { fill = C.tealLight; edge = C.tealDark; }
      if (n === 5 && k === 2) { fill = C.teal; edge = C.ink; w = 4.5; }
      if (n === 4 && (k === 1 || k === 2)) { fill = C.cream; edge = C.olive; }
      out.push(dot(x, y, 27, fill, edge, w), t(x, y + 7, String(v), { size: 20, weight: 700, anchor: 'middle' }));
    });
  });
  out.push(t(W / 2, 626, 'each entry = sum of the two above: 4 + 6 = 10', { size: 22, weight: 700, fill: C.olive, anchor: 'middle' }));
  out.push(t(60, 704, `Row 5 gives the terms of (4 + 3x)${sup('5')}:`, { size: 22, weight: 700 }));
  const terms = [1024, 3840, 5760, 4320, 1620, 243], lbl = [`x${sup('0')}`, 'x', `x${sup('2')}`, `x${sup('3')}`, `x${sup('4')}`, `x${sup('5')}`];
  const base = 960, sc = 190 / 5760;
  out.push(line(50, base, 850, base, { w: 3 }));
  terms.forEach((v, i) => {
    const x = 70 + i * 134, bw = 100;
    const [f, e] = i % 2 ? [C.cream, C.olive] : [C.teal, C.tealDark];
    out.push(`<rect x="${x}" y="${base - v * sc}" width="${bw}" height="${v * sc}" fill="${f}" stroke="${e}" stroke-width="2.5"/>`);
    out.push(t(x + bw / 2, base - v * sc - 12, String(v), { size: 21, weight: 700, anchor: 'middle' }));
    out.push(t(x + bw / 2, base + 34, lbl[i], { size: 20, weight: 700, anchor: 'middle' }));
  });
  out.push(pill(100, 1030, 700, 64, `x = 1: all six add to 7${sup('5')} = 16 807`, C.cream, C.olive, 25));
  return svg(W, 1130, 'Where binomial coefficients come from', out.join('\n'), `Pascal’s triangle and (4 + 3x)${sup('5')}`);
}

// ---------- 8. Binomial validity ----------
function binomialValidity() {
  const out = [];
  const X = scale(-0.6, 0.4, 120, 830), Y = scale(-1, 4.5, 650, 168);
  out.push(`<rect x="${X(-1 / 3)}" y="168" width="${X(1 / 3) - X(-1 / 3)}" height="${650 - 168}" fill="${C.tealLight}"/>`);
  out.push(line(X(-1 / 3), 168, X(-1 / 3), 650, { color: C.tealDark, w: 2.5, dash: '9 6' }), line(X(1 / 3), 168, X(1 / 3), 650, { color: C.tealDark, w: 2.5, dash: '9 6' }));
  out.push(arrow(120, 650, 848, 650, { w: 3 }), arrow(120, 650, 120, 150, { w: 3 }));
  [-0.6, -0.4, -0.2, 0, 0.2, 0.4].forEach((v) => out.push(line(X(v), 650, X(v), 660), t(X(v), 692, v < 0 ? '−' + (-v).toFixed(1) : v === 0 ? '0' : v.toFixed(1), { size: 19, anchor: 'middle' })));
  [-1, 0, 1, 2, 3, 4].forEach((v) => out.push(line(110, Y(v), 120, Y(v)), t(104, Y(v) + 7, v < 0 ? '−1' : String(v), { size: 19, anchor: 'end' })));
  out.push(t(475, 732, 'x', { size: 22, weight: 700, anchor: 'middle' }));
  const clip = `<clipPath id="plot"><rect x="120" y="168" width="710" height="482"/></clipPath>`;
  out.push(clip);
  const ex = [], se = [];
  for (let x = -0.6; x <= 0.4001; x += 0.002) {
    if (x < 0.332) ex.push([X(x), Y(Math.pow(1 - 3 * x, -0.5))]);
    se.push([X(x), Y(1 + 1.5 * x + (27 / 8) * x * x + (135 / 16) * x ** 3)]);
  }
  out.push(`<g clip-path="url(#plot)">${poly(se, { stroke: C.rust, w: 4.5 })}${poly(ex, { stroke: C.tealDark, w: 4.5 })}</g>`);
  out.push(t((X(-1 / 3) + X(1 / 3)) / 2, 206, 'valid: |x| &lt; 1/3', { size: 23, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  out.push(t(X(-1 / 3) - 8, 592, 'x = −1/3', { size: 19, fill: C.tealDark, anchor: 'end' }));
  out.push(t(X(1 / 3) + 10, 592, 'x = 1/3', { size: 19, fill: C.tealDark }));
  out.push(line(100, 792, 160, 792, { color: C.tealDark, w: 5 }), t(176, 799, `exact: (1 − 3x)${sup('−1/2')}`, { size: 20 }));
  out.push(line(100, 836, 160, 836, { color: C.rust, w: 5 }), t(176, 843, `series to x${sup('3')}: 1 + 3x/2 + 27x${sup('2')}/8 + 135x${sup('3')}/16`, { size: 20 }));
  out.push(pill(90, 884, 720, 64, '|−3x| &lt; 1 gives |x| &lt; 1/3', C.cream, C.olive, 25));
  return svg(W, 985, 'How far can you trust the series?', out.join('\n'), `Expansion of (1 − 3x)${sup('−1/2')}`);
}

export const figures = [
  { name: '04-gp-convergence', after: '### Proof of the finite sum', svg: gpConvergence(),
    alt: 'Four stem plots of the first eight terms of a geometric series with first term 1. For r = 0.6 and r = minus 0.6 the terms shrink to zero (convergent). For r = 1.2 and r = minus 1.2 they grow (divergent). A number line shows convergence exactly when r is between minus 1 and 1.',
    caption: 'A geometric series has a sum to infinity only when |r| < 1.' },
  { name: '03-gp-sum-to-infinity', after: '### Proof of the sum formula', svg: gpSumInf(),
    alt: 'A graph of the partial sums of 81 + 54 + 36 + ... (first term 81, ratio 2/3) for n = 1 to 20. The points rise then flatten towards a dashed line at 243, the sum to infinity. At n = 5 the sum is 211, a gap of 32. The gap 243(2/3)^n first drops below 1 at n = 14.',
    caption: 'Partial sums of a convergent geometric series level off at S_infinity = a/(1 - r).' },
  { name: '08-binomial-validity', after: '## 4.5 The binomial expansion', svg: binomialValidity(),
    alt: 'A graph of y = (1 - 3x)^(-1/2) with its series up to x cubed, 1 + 3x/2 + 27x^2/8 + 135x^3/16. A shaded band shows the range of validity, x between minus one third and one third. The series matches near zero but the curves separate outside the band and near the asymptote at x = 1/3.',
    caption: 'The series for a rational power only represents the function when |bx/a| < 1.' },
  { name: '07-pascal-binomial', after: '## 4.5 The binomial expansion', svg: pascal(),
    alt: 'Pascal’s triangle for n = 0 to 6, each entry the sum of the two above; row 5 (1, 5, 10, 10, 5, 1) is highlighted and 10 is shown as 4 + 6. Below, a bar chart of the six terms of (4 + 3x)^5: 1024, 3840x, 5760x^2, 4320x^3, 1620x^4, 243x^5. At x = 1 they add to 7^5 = 16807.',
    caption: 'Row n of Pascal’s triangle gives the binomial coefficients; the terms of (4 + 3x)^5 sum to 7^5 at x = 1.' },
  { name: '02-ap-sum-pairing', after: '### Sigma notation', svg: apPairing(),
    alt: 'The series 3 + 7 + 11 + 15 + 19 + 23 + 27, written as the sum from r = 1 to 7 of (4r minus 1), is drawn as seven columns. Each column stacks a term on the term in the reversed order and every column totals 30, the first term plus the last. Seven columns of 30 give twice the sum, 210, so the sum is 105.',
    caption: 'Pairing each term with its reverse shows why S_n = half n times (a + l).' },
  { name: '01-ap-vs-gp', after: '### Proof of the finite sum', svg: apVsGp(),
    alt: 'Two bar charts of six terms each. The arithmetic progression 5, 8, 11, 14, 17, 20 adds 3 each time, so the added amount on top of each bar is the same height every time. The geometric progression 3, 6, 12, 24, 48, 96 doubles each time, so the added amount grows. Three consecutive terms satisfy 2b = a + c for an arithmetic progression (8, 11, 14) and b squared = ac for a geometric one (6, 12, 24).',
    caption: 'An arithmetic progression adds the same amount each time; a geometric progression multiplies by the same ratio.' },
  { name: '06-recurrence-cobweb', after: '## 4.1 Sequences', svg: cobweb(),
    alt: 'A cobweb diagram for x_(n+1) = 0.6x_n + 8 with x_1 = 5. The lines y = 0.6x + 8 and y = x are drawn. The path steps from 5 through 11, 14.6 and 16.76 and closes in on where the lines cross at L = 20, found by solving L = 0.6L + 8.',
    caption: 'A recurrence settles at the limit L where L = f(L); the cobweb shows the terms closing in on it.' },
  { name: '05-sequence-behaviour', after: '## 4.3 Increasing, decreasing and periodic sequences', svg: seqBehaviour(),
    alt: 'Three plots of terms against n. u_n = n squared minus 8n falls to its least value, minus 16 at n = 4, then rises. The recurrence x_(n+1) = 1/(1 - x_n) with x_1 = 3 gives 3, minus one half, two thirds, then repeats every three terms. u_n = (3n - 1)/(n + 2) increases for ever but stays below the limit 3.',
    caption: 'Sequences can decrease then increase, repeat in a cycle, or climb towards a limit.' },
];
