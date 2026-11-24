// Board-neutral redraws of three inheritance figures. Mitosis/meiosis is used on AQA and OCR GCSE pages
// (old picture: "Extended" tier badge); the other two are used on AQA, OCR and OxfordAQA A-level pages
// (old pictures: "OCR only" and "AQA, OxfordAQA" pills). Content and numbers are unchanged; the bird
// ZW cross is kept as general content without a board label.
import { C, svg, panel, t } from '../style.mjs';

export const slug = 'biology-inheritance';
const W = 900;
const TEAL = '#6fa7a0', GOLD = C.mustard, NAVY = '#1e2a44', SLATE = '#4a5a78';
const supT = (s) => `<tspan font-size="65%" dy="-0.6em">${s}</tspan><tspan dy="0.39em">​</tspan>`;
const markers = `<defs><marker id="ahN" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="26" markerHeight="26" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${NAVY}"/></marker></defs>`;
const S = (w, h, title, body, sub) => svg(w, h, title, markers + body, sub);

// ---------- 4. Mitosis vs meiosis ----------
function mitosisMeiosis() {
  const o = [];
  const dy = -40, Y = (y) => y + dy;
  const rod = (x, y, h, col, w = 18) => `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="${w / 2}" fill="${col}" stroke="${NAVY}" stroke-width="2.5"/>`;
  const cell = (cx, cy, r, rods, sc = 1) => {
    let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#ffffff" stroke="${NAVY}" stroke-width="3.5"/>`;
    const gap = 26 * sc, n = rods.length, x0 = cx - ((n - 1) * gap) / 2;
    rods.forEach(([h, col], i) => { s += rod(x0 + i * gap, cy, h * sc, col, 18 * sc); });
    return s;
  };
  const four = [[70, TEAL], [70, GOLD], [42, TEAL], [42, GOLD]];
  o.push(cell(450, Y(250), 102, four));
  o.push(t(580, Y(230), 'Same-length rods', { size: 21, fill: C.muted }), t(580, Y(260), 'form a pair', { size: 21, fill: C.muted }));
  o.push(t(450, Y(371), 'diploid parent cell', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(`<line x1="390" y1="${Y(400)}" x2="236" y2="${Y(444)}" stroke="${NAVY}" stroke-width="3.5" marker-end="url(#ahN)"/>`);
  o.push(`<line x1="510" y1="${Y(400)}" x2="664" y2="${Y(444)}" stroke="${NAVY}" stroke-width="3.5" marker-end="url(#ahN)"/>`);
  o.push(`<rect x="106" y="${Y(464)}" width="240" height="56" rx="28" fill="#dfeceb" stroke="${NAVY}" stroke-width="2.5"/>`, t(226, Y(502), 'Mitosis', { size: 26, weight: 700, anchor: 'middle' }));
  o.push(`<rect x="556" y="${Y(464)}" width="240" height="56" rx="28" fill="${C.cream}" stroke="${NAVY}" stroke-width="2.5"/>`, t(676, Y(502), 'Meiosis', { size: 26, weight: 700, anchor: 'middle' }));
  o.push(`<line x1="450" y1="${Y(540)}" x2="450" y2="${Y(880)}" stroke="#c9d3d3" stroke-width="2.5" stroke-dasharray="3 7"/>`);
  o.push(cell(121, Y(638), 78, four, 0.8), cell(331, Y(638), 78, four, 0.8));
  o.push(t(226, Y(759), '2 identical cells', { size: 24, weight: 700, anchor: 'middle' }), t(226, Y(793), 'still 4 chromosomes', { size: 21, anchor: 'middle' }));
  const halves = [[[70, TEAL], [42, TEAL]], [[70, GOLD], [42, GOLD]], [[70, TEAL], [42, GOLD]], [[70, GOLD], [42, TEAL]]];
  [[570, 604], [780, 604], [570, 733], [780, 733]].forEach(([x, y], i) => o.push(cell(x, Y(y), 56, halves[i], 0.75)));
  o.push(t(676, Y(817), '4 different cells', { size: 24, weight: 700, anchor: 'middle' }), t(676, Y(852), 'only 2 chromosomes each', { size: 21, anchor: 'middle' }));
  o.push(t(245, Y(916), 'Growth, repair,', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }), t(245, Y(948), 'replacement,', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }), t(245, Y(980), 'asexual reproduction', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(676, Y(916), 'Makes gametes', { size: 22, weight: 700, fill: C.olive, anchor: 'middle' }), t(676, Y(948), 'Halves the number:', { size: 22, weight: 700, fill: C.olive, anchor: 'middle' }), t(676, Y(980), 'diploid to haploid', { size: 22, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(panel(30, Y(1016), 840, 214, '#ffffff', NAVY));
  o.push(t(450, Y(1056), 'Fertilisation restores the number', { size: 23, weight: 700, anchor: 'middle' }));
  o.push(cell(140, Y(1130), 44, halves[2], 0.6), t(210, Y(1137), '+', { size: 30, weight: 700, anchor: 'middle' }), cell(280, Y(1130), 44, halves[3], 0.6));
  o.push(t(210, Y(1196), 'gametes', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(`<line x1="344" y1="${Y(1130)}" x2="470" y2="${Y(1130)}" stroke="${NAVY}" stroke-width="3.5" marker-end="url(#ahN)"/>`);
  o.push(cell(545, Y(1130), 58, four, 0.6), t(545, Y(1214), 'zygote', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(t(780, Y(1115), '23 + 23', { size: 26, weight: 700, anchor: 'middle' }), t(780, Y(1152), '= 46', { size: 26, weight: 700, anchor: 'middle' }), t(780, Y(1190), 'in humans', { size: 19, fill: C.muted, anchor: 'middle' }));
  return S(W, 1220, 'Mitosis or meiosis?', o.join('\n'), 'Example cell with 4 chromosomes');
}

// ---------- 9. Continuous variation ----------
function continuous() {
  const o = [];
  const binom = (n) => { const r = [1]; for (let k = 1; k <= n; k++) r.push((r[k - 1] * (n - k + 1)) / k); return r; };
  const rows = [[1, 290, 2], [2, 500, 2], [3, 710, 2], [5, 920, 5]];
  o.push(t(450, 92, 'count the capital letters (alleles that add 1 unit)', { size: 20, fill: C.muted, anchor: 'middle' }));
  const bw = 58;
  for (const [g, yb, _] of rows) {
    const vals = binom(2 * g), max = Math.max(...vals), H = 120;
    const n = vals.length, x0 = 550 - (n * bw) / 2;
    o.push(t(40, yb - 82, `${g} gene${g > 1 ? 's' : ''}`, { size: 26, weight: 700 }), t(40, yb - 48, `${n} classes`, { size: 20, fill: C.muted }));
    const tops = [];
    vals.forEach((v, i) => {
      const h = (v / max) * H, x = x0 + i * bw;
      o.push(`<rect x="${x + 2}" y="${(yb - h).toFixed(1)}" width="${bw - 4}" height="${h.toFixed(1)}" fill="${TEAL}" stroke="${NAVY}" stroke-width="2.5"/>`);
      tops.push(`${(x + bw / 2).toFixed(1)},${(yb - h).toFixed(1)}`);
      if (g < 5) o.push(t(x + bw / 2, yb - h - 10, String(v), { size: 20, weight: 700, anchor: 'middle' }));
    });
    o.push(`<line x1="${x0 - 12}" y1="${yb}" x2="${x0 + n * bw + 12}" y2="${yb}" stroke="${NAVY}" stroke-width="3"/>`);
    if (g >= 3) o.push(`<polyline points="${tops.join(' ')}" fill="none" stroke="${C.olive}" stroke-width="4" stroke-linejoin="round"/>`);
  }
  o.push(t(450, 1000, 'n genes → 2n + 1 classes', { size: 29, weight: 700, anchor: 'middle' }));
  o.push(t(450, 1044, 'more genes + environment → a smooth bell-shaped curve', { size: 21, anchor: 'middle' }));
  o.push(t(450, 1084, 'gold line joins the tops of the bars', { size: 19, fill: C.muted, anchor: 'middle' }));
  return S(W, 1115, 'Many genes give continuous variation', o.join('\n'));
}

// ---------- 4. Sex linkage ----------
function sexLinkage() {
  const o = [];
  const pill = (cx, cy, s) => `<rect x="${cx - 45}" y="${cy - 24}" width="90" height="48" rx="24" fill="#ffffff" stroke="${NAVY}" stroke-width="2.5"/>` + t(cx, cy + 9, s, { size: 24, weight: 700, anchor: 'middle' });
  const H = supT('H'), h = supT('h');
  o.push(t(235, 214, 'mother’s eggs', { size: 20, fill: C.muted, anchor: 'middle' }));
  o.push(pill(440, 208, `X${H}`), pill(660, 208, `X${h}`));
  o.push(t(40, 294, 'father’s', { size: 20, fill: C.muted }), t(40, 324, 'sperm', { size: 20, fill: C.muted }));
  o.push(pill(244, 314, `X${H}`), pill(244, 444, 'Y'));
  const cells = [[330, 250, '#b5d3cf', `X${H}X${H}`, 'unaffected girl'], [550, 250, '#e3e7ef', `X${h}X${H}`, 'carrier girl'], [330, 380, '#b5d3cf', `X${H}Y`, 'unaffected boy'], [550, 380, C.cream, `X${h}Y`, 'affected boy']];
  for (const [x, y, f, g, lab] of cells) {
    o.push(`<rect x="${x}" y="${y}" width="220" height="130" fill="${f}" stroke="${NAVY}" stroke-width="2.5"/>`);
    o.push(t(x + 110, y + 52, g, { size: 25, weight: 700, anchor: 'middle' }), t(x + 110, y + 99, lab, { size: 20, anchor: 'middle' }));
  }
  o.push(`<rect x="550" y="380" width="220" height="130" fill="none" stroke="${NAVY}" stroke-width="5"/>`);
  [[150, '1/4', 'children affected'], [450, '1/2', 'sons affected'], [750, '0', 'daughters affected']].forEach(([x, big, lab]) => {
    o.push(t(x, 600, big, { size: 44, weight: 700, fill: C.tealDark, anchor: 'middle' }), t(x, 640, lab, { size: 22, anchor: 'middle' }));
  });
  o.push(`<line x1="40" y1="700" x2="860" y2="700" stroke="#c9d6d4" stroke-width="2.5"/>`);
  o.push(t(450, 748, 'Birds: ZW system (females ZW)', { size: 23, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(450, 794, `non-barred male Z${supT('b')}Z${supT('b')}<tspan dx="0.3em">×</tspan> barred female Z${supT('B')}W`, { size: 22, anchor: 'middle' }));
  o.push(panel(40, 824, 390, 100, '#b5d3cf', NAVY), panel(470, 824, 390, 100, C.cream, NAVY));
  o.push(t(235, 868, `Z${supT('B')}Z${supT('b')}<tspan dx="0.3em">sons</tspan>`, { size: 24, weight: 700, anchor: 'middle' }), t(235, 904, 'all barred', { size: 20, anchor: 'middle' }));
  o.push(t(665, 868, `Z${supT('b')}W daughters`, { size: 24, weight: 700, anchor: 'middle' }), t(665, 904, 'all non-barred', { size: 20, anchor: 'middle' }));
  return S(W, 960, 'X-linked recessive: haemophilia', o.join('\n'), `carrier mother X${H}X${h} × unaffected father X${H}Y`);
}

export const figures = [
  { name: '04-mitosis-vs-meiosis', after: '### Worked example 5: probability', svg: mitosisMeiosis(),
    alt: 'A diploid cell with four chromosomes (two pairs) divides by mitosis into two identical cells with four chromosomes each, or by meiosis into four different cells with two chromosomes each. Fertilisation joins two haploid gametes to restore the diploid number; in humans 23 + 23 = 46.',
    caption: 'Mitosis keeps the chromosome number; meiosis halves it, and fertilisation restores it.' },
  { name: '09-continuous-variation', after: '## Multiple alleles', svg: continuous(),
    alt: 'Histograms count the additive alleles in offspring of heterozygous parents: one gene gives 1:2:1, two genes 1:4:6:4:1, three genes 1:6:15:20:15:6:1 and five genes eleven classes. With more genes the bars approach a bell-shaped curve; n genes give 2n + 1 classes.',
    caption: 'More genes, plus environment, turn separate steps into a smooth bell-shaped curve.' },
  { name: '04-sex-linkage', after: '## Sex linkage', svg: sexLinkage(),
    alt: 'A carrier mother XHXh and unaffected father XHY give an unaffected girl, a carrier girl, an unaffected boy and an affected boy. One child in four is affected, half the sons and no daughters. In birds, a non-barred male ZbZb crossed with a barred female ZBW gives barred sons and non-barred daughters.',
    caption: 'A son has one X, so one recessive allele shows; the father passes his Y to sons.' },
];
