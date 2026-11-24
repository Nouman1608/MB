// Board-neutral redraws of seven A-level exchange-surface figures shared by AQA, OCR, OxfordAQA and
// Cambridge pages. The old pictures carried board badges ("OxfordAQA", "AQA, OCR", "AQA, OxfordAQA",
// "Cambridge 9700 values", "Cambridge 9700 worked example"). The badges are gone; every value stays.
// "Water potential" in the cholera figure is kept: every page using it is A level.
import { C, svg, panel, t, arrow, path } from '../style.mjs';

export const slug = 'biology-gas-exchange';
const W = 900;
const RUST = '#c0643a', SLATE = '#4a5a78', NAVY = '#1e2a44', BLOOD = '#f5e4dc', BLUE = '#4a8db0';
const markers = `<defs>
<marker id="ahBig" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="30" markerHeight="30" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${C.ink}"/></marker>
<marker id="ahBigT" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="30" markerHeight="30" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${C.tealDark}"/></marker>
<marker id="ahBigR" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="30" markerHeight="30" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${RUST}"/></marker>
<marker id="ahBigO" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="30" markerHeight="30" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${C.olive}"/></marker>
<marker id="ahT2" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="20" markerHeight="20" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${C.tealDark}"/></marker>
</defs>`;
const S = (w, h, title, body, sub) => svg(w, h, title, markers + body, sub);
const sub2 = (s) => s.replace(/_(\d)/g, '<tspan font-size="70%" dy="0.3em">$1</tspan><tspan dy="-0.3em">​</tspan>');
const num = (x, y, n, r = 19) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${NAVY}"/>` + t(x, y + 7, String(n), { size: 19, weight: 700, fill: '#ffffff', anchor: 'middle' });
const leader = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${NAVY}" stroke-width="2.5"/><circle cx="${x2}" cy="${y2}" r="5" fill="${NAVY}"/>`;
const ionC = (x, y, fill, r = 12) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${fill === C.mustard ? C.olive : '#5a2a14'}" stroke-width="2.2"/>`;
const hexG = (x, y, r = 13) => {
  const p = []; for (let i = 0; i < 6; i++) { const a = (Math.PI / 3) * i; p.push(`${(x + r * Math.cos(a)).toFixed(1)},${(y + r * Math.sin(a)).toFixed(1)}`); }
  return `<polygon points="${p.join(' ')}" fill="#6fa7a0" stroke="${C.tealDark}" stroke-width="2"/>`;
};

// ---------- 3. Alveolar gradients ----------
function gradients() {
  const o = [];
  const dy = -40, Y = (y) => y + dy;
  const x0 = 130, x1 = 850, Yk = (k) => Y(640) - k * 31.5;
  for (const k of [5, 10]) o.push(`<line x1="${x0}" y1="${Yk(k)}" x2="${x1}" y2="${Yk(k)}" stroke="#c9d6d4" stroke-width="2"/>`);
  o.push(`<line x1="${x0}" y1="${Y(190)}" x2="${x0}" y2="${Yk(0)}" stroke="${NAVY}" stroke-width="3.5"/><line x1="${x0}" y1="${Yk(0)}" x2="${x1}" y2="${Yk(0)}" stroke="${NAVY}" stroke-width="3.5"/>`);
  for (const k of [0, 5, 10]) o.push(t(x0 - 14, Yk(k) + 7, String(k), { size: 19, anchor: 'end' }));
  o.push(t(60, Y(418), 'kPa', { size: 19, anchor: 'middle' }));
  o.push(`<line x1="${x0}" y1="${Yk(13.3)}" x2="${x1}" y2="${Yk(13.3)}" stroke="${RUST}" stroke-width="2.5" stroke-dasharray="9 6"/>`);
  o.push(`<line x1="${x0}" y1="${Yk(5.3)}" x2="${x1}" y2="${Yk(5.3)}" stroke="${C.tealDark}" stroke-width="2.5" stroke-dasharray="9 6"/>`);
  // blood O2: 5.3 -> 13.1 (exponential approach)
  const o2 = [], co2 = [];
  const kk = 3.65;
  for (let i = 0; i <= 100; i++) {
    const f = i / 100, x = x0 + f * (x1 - x0);
    o2.push(`${x.toFixed(1)},${Yk(13.3 - 8.0 * Math.exp(-kk * f)).toFixed(1)}`); // 5.3 at start, 13.1 at end
    co2.push(`${x.toFixed(1)},${Yk(5.3 + 0.8 * Math.exp(-kk * f)).toFixed(1)}`);
  }
  o.push(`<polyline points="${o2.join(' ')}" fill="none" stroke="${RUST}" stroke-width="5"/>`);
  o.push(`<polyline points="${co2.join(' ')}" fill="none" stroke="${C.tealDark}" stroke-width="5"/>`);
  o.push(t(432, Y(203), sub2('Alveolar air O_2 13.3'), { size: 21, weight: 700, fill: RUST }));
  o.push(t(430, Y(304), sub2('Blood O_2'), { size: 21, weight: 700, fill: RUST }));
  const mid = (Yk(5.3) + Yk(13.3)) / 2;
  o.push(arrow(180, mid, 180, Yk(13.3) + 2, { w: 3.5 }), arrow(180, mid, 180, Yk(5.3) - 2, { w: 3.5 }));
  o.push(t(196, Y(527), 'Gap 8.0 kPa', { size: 21, weight: 700, fill: RUST }));
  o.push(arrow(808, Y(274), 808, Yk(13.1) + 6, { w: 3 }));
  o.push(t(838, Y(306), 'Gap at end: 0.2 kPa', { size: 21, weight: 700, anchor: 'end' }));
  o.push(t(460, Y(457), sub2('Alveolar air CO_2 5.3'), { size: 21, weight: 700, fill: C.tealDark }));
  o.push(t(460, Y(505), sub2('Blood CO_2: starts at 6.1'), { size: 21, weight: 700, fill: C.tealDark }));
  o.push(t(130, Y(683), 'Start of capillary', { size: 21, weight: 700 }), t(850, Y(683), 'End', { size: 21, weight: 700, anchor: 'end' }));
  o.push(arrow(378, Y(720), 734, Y(720), { w: 5, marker: 'ahBig' }));
  o.push(t(450, Y(764), 'Blood flow', { size: 20, fill: C.muted, anchor: 'middle' }));
  o.push(t(450, Y(812), 'Fresh blood and fresh air restore the gradient', { size: 21, weight: 700, anchor: 'middle' }));
  return S(W, 810, 'Gradients along a capillary', o.join('\n'), 'Partial pressure (kPa), alveolar air vs blood');
}

// ---------- 4. Surface area to volume ----------
function saVol() {
  const o = [];
  const dy = -45, Y = (y) => y + dy;
  const cube = (x, yb, s) => {
    const d = s * 0.4;
    return `<path d="M${x} ${yb - s} l${d} ${-d * 0.75} h${s} l${-d} ${d * 0.75} z" fill="#b5d3cf" stroke="${C.ink}" stroke-width="2.5"/>` +
      `<path d="M${x + s} ${yb - s} l${d} ${-d * 0.75} v${s} l${-d} ${d * 0.75} z" fill="#72aca7" stroke="${C.ink}" stroke-width="2.5"/>` +
      `<rect x="${x}" y="${yb - s}" width="${s}" height="${s}" fill="#dfeceb" stroke="${C.ink}" stroke-width="2.5"/>`;
  };
  o.push(cube(60, Y(420), 44), cube(230, Y(420), 88), cube(430, Y(420), 176));
  o.push(t(82, Y(459), '1 cm', { size: 20, fill: C.muted, anchor: 'middle' }), t(274, Y(459), '2 cm', { size: 20, fill: C.muted, anchor: 'middle' }), t(518, Y(459), '4 cm', { size: 20, fill: C.muted, anchor: 'middle' }));
  o.push(t(82, Y(509), '6/1 = 6', { size: 27, weight: 700, fill: C.tealDark, anchor: 'middle' }), t(274, Y(509), '6/2 = 3', { size: 27, weight: 700, fill: C.tealDark, anchor: 'middle' }), t(518, Y(509), '6/4 = 1.5', { size: 27, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(450, Y(558), 'Surface area : volume', { size: 21, fill: C.muted, anchor: 'middle' }));
  o.push(`<line x1="40" y1="${Y(600)}" x2="860" y2="${Y(600)}" stroke="#c9d6d4" stroke-width="2.5"/>`);
  o.push(t(450, Y(648), 'Fit it in the chest: alveoli', { size: 24, weight: 700, anchor: 'middle' }));
  o.push(`<circle cx="110" cy="${Y(772)}" r="48" fill="#dfeceb" stroke="${C.tealDark}" stroke-width="5"/>`);
  o.push(t(110, Y(779), '0.2 mm', { size: 18, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(110, Y(860), `1.26 × 10<tspan font-size="65%" dy="-0.6em">−7</tspan><tspan dy="0.39em" dx="0.28em">m</tspan><tspan font-size="65%" dy="-0.6em">2</tspan>`, { size: 20, anchor: 'middle' }));
  o.push(t(235, Y(780), '×', { size: 34, weight: 700, anchor: 'middle' }));
  for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) o.push(`<circle cx="${296 + c * 30}" cy="${Y(724 + r * 31)}" r="13" fill="#dfeceb" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  o.push(t(356, Y(860), `4.5 × 10<tspan font-size="65%" dy="-0.6em">8</tspan><tspan dy="0.39em" dx="0.28em">alveoli</tspan>`, { size: 20, anchor: 'middle' }));
  o.push(t(555, Y(780), '=', { size: 34, weight: 700, anchor: 'middle' }));
  o.push(panel(610, Y(714), 250, 110, C.cream, C.olive));
  o.push(t(735, Y(783), `56.5 m<tspan font-size="65%" dy="-0.6em">2</tspan>`, { size: 38, weight: 700, anchor: 'middle' }));
  o.push(t(735, Y(860), 'lung exchange area', { size: 20, fill: C.muted, anchor: 'middle' }));
  return S(W, 850, 'Big bodies, small surface', o.join('\n'), 'Surface area to volume ratio falls as size rises');
}

// ---------- 5. Fish counter-current ----------
function fish() {
  const o = [];
  const dy = -30, Y = (y) => y + dy;
  const shade = (v) => ({ 83: ['#4f8189', '#ffffff'], 67: ['#6f9c98', '#ffffff'], 50: ['#93b3b0', C.ink], 33: ['#b5cbc8', C.ink], 17: ['#d6e3e1', C.ink] })[v];
  const block = (y0, title, water, blood, counter, verdict, vcol) => {
    o.push(t(450, Y(y0), title, { size: 27, weight: 700, anchor: 'middle' }));
    o.push(arrow(128, Y(y0 + 98), 734, Y(y0 + 98), { color: C.tealDark, w: 4, marker: 'ahBigT' }));
    o.push(t(430, Y(y0 + 84), 'Water flow', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
    [water, blood].forEach((row, r) => row.forEach((v, i) => {
      const [f, tc] = shade(v);
      o.push(`<rect x="${140 + i * 120}" y="${Y(y0 + 110 + r * 106)}" width="114" height="90" fill="${f}" stroke="${NAVY}" stroke-width="2.5"/>`);
      o.push(t(197 + i * 120, Y(y0 + 165 + r * 106), String(v), { size: 26, weight: 700, fill: tc, anchor: 'middle' }));
    }));
    o.push(t(112, Y(y0 + 164), 'Water', { size: 22, weight: 700, fill: C.tealDark, anchor: 'end' }), t(112, Y(y0 + 270), 'Blood', { size: 22, weight: 700, fill: RUST, anchor: 'end' }));
    if (counter) o.push(arrow(734, Y(y0 + 328), 128, Y(y0 + 328), { color: RUST, w: 4, marker: 'ahBigR' }));
    else o.push(arrow(128, Y(y0 + 328), 734, Y(y0 + 328), { color: RUST, w: 4, marker: 'ahBigR' }));
    o.push(t(430, Y(y0 + 372), 'Blood flow', { size: 20, weight: 700, fill: RUST, anchor: 'middle' }));
    o.push(t(450, Y(y0 + 429), verdict, { size: 23, weight: 700, fill: vcol, anchor: 'middle' }));
  };
  block(178, 'Parallel flow', [50, 50, 50, 50, 50], [50, 50, 50, 50, 50], false, 'Blood ends at 50%: gradient lost', RUST);
  block(668, 'Counter-current flow', [83, 67, 50, 33, 17], [83, 67, 50, 33, 17], true, 'Blood ends at 83%: gradient kept', C.tealDark);
  o.push(t(450, Y(1138), 'Water in at 100% each time', { size: 20, fill: C.muted, anchor: 'middle' }));
  return S(W, 1135, 'Why fish gills use counter-current flow', o.join('\n'), 'Oxygen saturation (%) in a gill lamella, 5-segment model');
}

// ---------- 6. Insect tracheae ----------
function insect() {
  const o = [];
  const dy = -20, Y = (y) => y + dy;
  o.push(`<rect x="60" y="${Y(260)}" width="780" height="378" rx="50" fill="#ffffff" stroke="${NAVY}" stroke-width="3.5"/>`);
  const TR = C.tealDark;
  o.push(`<line x1="200" y1="${Y(330)}" x2="700" y2="${Y(330)}" stroke="${TR}" stroke-width="11"/>`);
  for (const x of [200, 450, 700]) {
    o.push(`<line x1="${x}" y1="${Y(258)}" x2="${x}" y2="${Y(440)}" stroke="${TR}" stroke-width="8"/>`);
    o.push(path(`M${x} ${Y(335)} C${x - 10} ${Y(390)} ${x - 50} ${Y(410)} ${x - 86} ${Y(440)}`, { stroke: TR, w: 6 }));
    o.push(path(`M${x} ${Y(335)} C${x + 10} ${Y(390)} ${x + 50} ${Y(410)} ${x + 86} ${Y(440)}`, { stroke: TR, w: 6 }));
    for (const dx of [-86, 0, 86]) {
      o.push(`<line x1="${x + dx}" y1="${Y(440)}" x2="${x + dx}" y2="${Y(528)}" stroke="#6fa7a0" stroke-width="3"/>`);
      o.push(`<ellipse cx="${x + dx}" cy="${Y(565)}" rx="32" ry="37" fill="#e38b6d" stroke="#c0643a" stroke-width="2.5"/>`);
    }
    o.push(`<rect x="${x - 19}" y="${Y(246)}" width="38" height="22" rx="6" fill="${C.mustard}" stroke="${C.olive}" stroke-width="2.5"/>`);
    o.push(arrow(x, Y(170), x, Y(240), { color: TR, w: 5, marker: 'ahBigT' }));
  }
  o.push(t(474, Y(216), sub2('O_2 in'), { size: 22, weight: 700, fill: TR }));
  o.push(num(255, Y(211), 1), num(230, Y(296), 2), num(390, Y(495), 3), num(364, Y(572), 4));
  o.push(arrow(58, Y(720), 226, Y(720), { color: C.olive, w: 4, marker: 'ahBigO' }), arrow(842, Y(720), 674, Y(720), { color: C.olive, w: 4, marker: 'ahBigO' }));
  o.push(t(450, Y(728), 'Abdomen squeezes', { size: 22, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(450, Y(770), '(larger or active insects)', { size: 20, fill: C.muted, anchor: 'middle' }));
  o.push(panel(30, Y(810), 840, 214, '#ffffff', NAVY));
  ['Spiracle: air enters', 'Trachea: air tube to the tissues', 'Tracheole: thin end tube', sub2('Muscle cell: takes O_2 directly')].forEach((s, i) => {
    o.push(num(70, Y(850 + i * 44), i + 1), t(106, Y(857 + i * 44), s, { size: 21, weight: 700 }));
  });
  return S(W, 1030, 'Insect tracheal system', o.join('\n'), 'Air goes straight to the tissues');
}

// ---------- 7. Ileum villus ----------
function villus() {
  const o = [];
  const dy = -30, Y = (y) => y + dy;
  const cx = 450, L = 316, R = 584, top = Y(152), bot = Y(700), rOut = 134, rIn = 108;
  // outer epithelium shape (U), inner lumen
  o.push(`<path d="M${L} ${bot} V${top + rOut} A${rOut} ${rOut} 0 0 1 ${R} ${top + rOut} V${bot} H${R - 26} V${top + rOut} A${rIn} ${rIn} 0 0 0 ${L + 26} ${top + rOut} V${bot} Z" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="3"/>`);
  // cell boundaries
  for (let y = top + rOut + 10; y < bot; y += 34) o.push(`<line x1="${L}" y1="${y}" x2="${L + 26}" y2="${y}" stroke="${C.tealDark}" stroke-width="2"/><line x1="${R - 26}" y1="${y}" x2="${R}" y2="${y}" stroke="${C.tealDark}" stroke-width="2"/>`);
  for (let a = 200; a <= 340; a += 23.3) {
    const r1 = rIn, r2 = rOut, ar = (a * Math.PI) / 180;
    o.push(`<line x1="${(cx + r1 * Math.cos(ar)).toFixed(1)}" y1="${(top + rOut + r1 * Math.sin(ar)).toFixed(1)}" x2="${(cx + r2 * Math.cos(ar)).toFixed(1)}" y2="${(top + rOut + r2 * Math.sin(ar)).toFixed(1)}" stroke="${C.tealDark}" stroke-width="2"/>`);
  }
  // microvilli
  for (let y = top + rOut + 6; y < bot; y += 15) o.push(`<line x1="${L - 18}" y1="${y}" x2="${L}" y2="${y}" stroke="${C.tealDark}" stroke-width="2.5"/><line x1="${R}" y1="${y}" x2="${R + 18}" y2="${y}" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  for (let a = 182; a <= 358; a += 8) {
    const ar = (a * Math.PI) / 180;
    o.push(`<line x1="${(cx + rOut * Math.cos(ar)).toFixed(1)}" y1="${(top + rOut + rOut * Math.sin(ar)).toFixed(1)}" x2="${(cx + (rOut + 18) * Math.cos(ar)).toFixed(1)}" y2="${(top + rOut + (rOut + 18) * Math.sin(ar)).toFixed(1)}" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  }
  // inner white
  // capillaries
  const wavy = (x) => {
    let d = `M${x} ${Y(300)}`;
    for (let y = Y(300); y < Y(690); y += 40) d += ` q 22 20 0 40`;
    return d;
  };
  for (const x of [382, 518]) {
    o.push(path(wavy(x), { stroke: '#c0643a', w: 30 }), path(wavy(x), { stroke: '#f6dcd2', w: 24 }));
    for (const yy of [310, 430, 590]) o.push(`<ellipse cx="${x}" cy="${Y(yy)}" rx="9" ry="6" fill="#e07a5f"/>`);
    o.push(`<line x1="${x}" y1="${Y(706)}" x2="${x}" y2="${Y(740)}" stroke="#c0643a" stroke-width="3" marker-end="url(#ahBigR)"/>`);
  }
  // lacteal
  o.push(`<rect x="424" y="${Y(255)}" width="52" height="470" rx="26" fill="${C.cream}" stroke="${C.olive}" stroke-width="4"/>`);
  for (const [x, yy] of [[449, 320], [440, 380], [458, 440], [444, 510], [456, 580], [450, 638]]) o.push(`<circle cx="${x}" cy="${Y(yy)}" r="7" fill="${C.mustard}" stroke="${C.olive}" stroke-width="1.5"/>`);
  // labels
  o.push(num(60, Y(330), 1), t(92, Y(337), 'Microvilli', { size: 22, weight: 700 }), leader(152, Y(352), 298, Y(400)));
  o.push(num(60, Y(540), 2), t(92, Y(547), 'Epithelium', { size: 22, weight: 700 }), t(92, Y(579), 'one cell thick', { size: 20, fill: C.muted }), leader(152, Y(598), 324, Y(640)));
  o.push(num(640, Y(400), 3), t(672, Y(407), 'Capillaries', { size: 22, weight: 700 }), leader(660, Y(420), 526, Y(480)));
  o.push(num(640, Y(300), 4), t(672, Y(307), 'Lacteal', { size: 22, weight: 700 }), leader(660, Y(320), 466, Y(358)));
  o.push(t(450, Y(810), 'Blood and lymph carry products away', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(panel(130, Y(850), 640, 130, '#ffffff', NAVY));
  o.push(t(450, Y(904), 'Villus area = 20 × its footprint', { size: 24, weight: 700, anchor: 'middle' }));
  o.push(t(450, Y(945), '(model: r 0.10 mm, height 1.0 mm)', { size: 19, fill: C.muted, anchor: 'middle' }));
  return S(W, 980, 'Inside a villus', o.join('\n'), 'The ileum wall is built for absorption');
}

// ---------- 8. Co-transport of glucose ----------
function cotransport() {
  const o = [];
  const dy = 0, Y = (y) => y + dy;
  o.push(ionC(560, 135, C.mustard), t(582, 143, 'Na⁺', { size: 21, weight: 700 }));
  o.push(hexG(690, 135), t(712, 143, 'Glucose', { size: 21, weight: 700 }));
  o.push(`<rect x="40" y="${Y(180)}" width="820" height="110" fill="#e1eeee"/>`);
  o.push(`<rect x="40" y="${Y(290)}" width="820" height="320" fill="#dfeae6"/>`);
  o.push(`<rect x="40" y="${Y(610)}" width="820" height="160" fill="${BLOOD}"/>`);
  o.push(`<rect x="40" y="${Y(278)}" width="820" height="24" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  o.push(`<rect x="40" y="${Y(598)}" width="820" height="24" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  o.push(t(60, Y(215), 'Lumen of gut', { size: 21, weight: 700, fill: SLATE }));
  o.push(t(840, Y(338), 'Epithelial cell', { size: 21, weight: 700, fill: C.tealDark, anchor: 'end' }));
  o.push(t(840, Y(668), 'Blood', { size: 21, weight: 700, fill: RUST, anchor: 'end' }));
  // lumen ions
  [[130, 262], [200, 262], [470, 262], [500, 235], [640, 240], [700, 262], [820, 257], [340, 180]].forEach(([x, y]) => o.push(ionC(x, Y(y), C.mustard)));
  [[270, 240], [400, 180], [580, 262], [760, 225]].forEach(([x, y]) => o.push(hexG(x, Y(y))));
  // co-transporter
  o.push(`<rect x="330" y="${Y(254)}" width="80" height="72" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>`);
  o.push(arrow(370, Y(194), 370, Y(248), { color: C.olive, w: 4, marker: 'ahBigO' }), arrow(370, Y(332), 370, Y(382), { color: C.olive, w: 4, marker: 'ahBigO' }));
  // cell contents: few Na, many glucose
  [[120, 380], [230, 430], [345, 400]].forEach(([x, y]) => o.push(ionC(x, Y(y), C.mustard)));
  [[330, 420], [395, 400], [470, 380], [600, 400], [530, 450], [400, 490], [660, 500], [430, 555], [550, 540]].forEach(([x, y]) => o.push(hexG(x, Y(y))));
  // pump
  o.push(`<rect x="130" y="${Y(574)}" width="90" height="72" rx="14" fill="#ffffff" stroke="${NAVY}" stroke-width="3"/>`);
  o.push(t(175, Y(618), 'Pump', { size: 19, weight: 700, anchor: 'middle' }));
  o.push(arrow(175, Y(640), 175, Y(708), { w: 4, marker: 'ahBig' }));
  // facilitated diffusion channel
  o.push(`<rect x="610" y="${Y(574)}" width="80" height="72" rx="14" fill="${C.cream}" stroke="${C.olive}" stroke-width="3"/>`);
  o.push(arrow(650, Y(640), 650, Y(708), { color: C.tealDark, w: 4, marker: 'ahBigT' }));
  // blood contents
  [[120, 690], [200, 730], [300, 700], [500, 730]].forEach(([x, y]) => o.push(ionC(x, Y(y), C.mustard)));
  [[540, 740], [780, 724]].forEach(([x, y]) => o.push(hexG(x, Y(y))));
  o.push(num(250, Y(627), 1), num(110, Y(450), 2), num(500, Y(197), 3), num(710, Y(627), 4));
  o.push(panel(30, Y(800), 840, 214, '#ffffff', NAVY));
  ['Pump: Na⁺ out of cell (uses ATP)', 'Na⁺ inside cell stays low', 'Na⁺ re-enters with glucose', 'Glucose leaves by facilitated diffusion to blood'].forEach((s, i) => {
    o.push(num(70, Y(840 + i * 44), i + 1), t(106, Y(847 + i * 44), s, { size: 21, weight: 700 }));
  });
  return S(W, 1040, 'Absorbing glucose with sodium', o.join('\n'), 'Co-transport in an ileum epithelial cell');
}

// ---------- 9. Cholera toxin ----------
function cholera() {
  const o = [];
  const dy = -40, Y = (y) => y + dy;
  o.push(`<rect x="40" y="${Y(170)}" width="820" height="280" fill="#e1eeee"/>`);
  o.push(`<rect x="40" y="${Y(450)}" width="820" height="210" fill="#dfeae6"/>`);
  o.push(`<rect x="40" y="${Y(660)}" width="820" height="90" fill="${BLOOD}"/>`);
  o.push(`<rect x="40" y="${Y(450)}" width="820" height="40" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  o.push(t(60, Y(205), 'Gut lumen', { size: 21, weight: 700, fill: SLATE }));
  o.push(t(60, Y(529), 'Epithelial cells', { size: 21, weight: 700, fill: C.tealDark }));
  o.push(t(60, Y(719), 'Blood', { size: 21, weight: 700, fill: RUST }));
  o.push(t(60, Y(409), 'Watery diarrhoea', { size: 26, weight: 700, fill: RUST }));
  // vibrio and toxin
  o.push(`<ellipse cx="170" cy="${Y(282)}" rx="56" ry="22" transform="rotate(-18 170 ${Y(282)})" fill="#c0643a" stroke="#7a3a1c" stroke-width="2.5"/>`);
  o.push(t(170, Y(334), 'Vibrio', { size: 19, weight: 700, fill: RUST, anchor: 'middle' }));
  o.push(arrow(234, Y(276), 330, Y(344), { color: RUST, w: 3.5, marker: 'ahBigR' }));
  o.push(`<rect x="352" y="${Y(352)}" width="40" height="40" transform="rotate(-25 372 ${Y(372)})" fill="${C.cream}" stroke="${C.olive}" stroke-width="2.5"/>`);
  o.push(t(375, Y(423), 'Toxin', { size: 19, weight: 700, fill: C.olive, anchor: 'middle' }));
  // channel
  o.push(`<rect x="400" y="${Y(436)}" width="70" height="68" rx="12" fill="#ffffff" stroke="${NAVY}" stroke-width="3"/>`);
  o.push(t(435, Y(478), 'Open', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(arrow(435, Y(540), 435, Y(508), { color: RUST, w: 4, marker: 'ahBigR' }), arrow(435, Y(432), 435, Y(378), { color: RUST, w: 4, marker: 'ahBigR' }));
  o.push(ionC(435, Y(560), '#c0643a', 12));
  // water arrows
  for (const x of [540, 640, 740, 820]) {
    o.push(arrow(x, Y(530), x, Y(384), { color: C.tealDark, w: 3, marker: 'ahT2' }));
    o.push(`<ellipse cx="${x}" cy="${Y(358)}" rx="9" ry="13" fill="#e8f2f8" stroke="${BLUE}" stroke-width="2.5"/>`);
  }
  [[560, 250], [640, 284], [718, 250]].forEach(([x, y]) => o.push(ionC(x, Y(y), '#c0643a')));
  [[600, 225], [680, 215], [770, 270]].forEach(([x, y]) => o.push(ionC(x, Y(y), C.mustard)));
  o.push(num(519, Y(558), 1), num(560, Y(330), 2), num(850, Y(360), 3, 18));
  // key
  o.push(ionC(80, Y(780), '#c0643a'), t(104, Y(788), 'Cl⁻', { size: 21, weight: 700 }));
  o.push(ionC(190, Y(780), C.mustard), t(214, Y(788), 'Na⁺', { size: 21, weight: 700 }));
  o.push(`<ellipse cx="310" cy="${Y(780)}" rx="9" ry="13" fill="#e8f2f8" stroke="${BLUE}" stroke-width="2.5"/>`, t(332, Y(788), 'Water', { size: 21, weight: 700 }));
  o.push(panel(30, Y(820), 840, 170, '#ffffff', NAVY));
  ['Toxin keeps Cl⁻ channels open: Cl⁻ into lumen', 'Na⁺ follows: lumen water potential falls', 'Water leaves tissue by osmosis'].forEach((s, i) => {
    o.push(num(70, Y(861 + i * 48), i + 1), t(106, Y(869 + i * 48), s, { size: 22, weight: 700 }));
  });
  return S(W, 970, 'How cholera causes diarrhoea', o.join('\n'), 'Chloride out, then water out');
}

export const figures = [
  { name: '03-alveolar-gradients', after: '## Gas exchange: comparing four systems', svg: gradients(),
    alt: 'Graph of partial pressure along an alveolar capillary. Alveolar oxygen is 13.3 kPa. Blood oxygen rises from 5.3 to 13.1 kPa, so the gap shrinks from 8.0 to 0.2 kPa. Blood carbon dioxide starts at 6.1 kPa against 5.3 kPa in the air, a gap of 0.8 kPa.',
    caption: 'The oxygen gradient is steep when blood arrives and almost gone by the end of the capillary.' },
  { name: '04-surface-area-volume', after: '## The exchange-surface principle', svg: saVol(),
    alt: 'Cubes of side 1, 2 and 4 cm have surface area to volume ratios of 6, 3 and 1.5, so the ratio falls as size rises. One alveolus of diameter 0.2 mm has area 1.26 x 10^-7 m2; multiplied by 4.5 x 10^8 alveoli this gives 56.5 m2.',
    caption: 'Larger bodies have less surface per unit volume, so lungs divide the surface into hundreds of millions of tiny sacs.' },
  { name: '05-fish-countercurrent', after: '## Gas exchange: comparing four systems', svg: fish(),
    alt: 'Two panels compare parallel flow with counter-current flow in a five-segment model of a gill lamella. With parallel flow, water and blood both settle at 50 percent oxygen saturation. With counter-current flow, blood leaves at 83 percent because the water is always at higher saturation than the adjacent blood.',
    caption: 'Opposite flows keep a gradient along the whole lamella, so more oxygen is taken up.' },
  { name: '06-insect-tracheae', after: '## Gas exchange: comparing four systems', svg: insect(),
    alt: 'Cross-section of an insect. Air enters through spiracles, passes along tracheae and ends in fine tracheoles beside muscle cells, delivering oxygen directly. The abdomen squeezing helps move air in larger or active insects.',
    caption: 'Insects deliver air straight to the tissues through tracheae and tracheoles.' },
  { name: '07-ileum-villus', after: '### Lipids', svg: villus(),
    alt: 'A finger-shaped villus lined by one layer of epithelial cells with microvilli. Inside are blood capillaries and a central lacteal. A model villus with radius 0.10 mm and height 1.0 mm has a curved area 20 times its footprint.',
    caption: 'Villi and microvilli give a huge surface; capillaries and the lacteal carry absorbed products away.' },
  { name: '08-cotransport-glucose', after: '### Absorption of glucose and amino acids', svg: cotransport(),
    alt: 'An ileum epithelial cell with gut lumen above and blood below. A pump in the blood-side membrane moves sodium ions out using ATP, keeping sodium low inside the cell. Sodium ions re-enter through a co-transporter carrying glucose, which builds up and leaves into blood by facilitated diffusion.',
    caption: 'Sodium ions pumped out of the cell drive glucose in through a co-transporter.' },
  { name: '09-cholera-toxin', after: '## 3.2.3.1 Cholera', svg: cholera(),
    alt: 'A gut epithelial cell with an open chloride channel. Chloride ions move out into the lumen and sodium ions follow, lowering the lumen water potential. Water leaves the tissue by osmosis into the lumen, causing watery diarrhoea.',
    caption: 'Cholera toxin keeps chloride channels open, so ions then water flood into the gut.' },
];
