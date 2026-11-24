// Board-neutral redraws of nine A-level gene-technology figures shared by AQA, OCR, OxfordAQA and
// Edexcel IAL pages. The old pictures carried "All boards" / "OCR only" pills and a terminology pill
// naming boards ("VNTR (AQA) / STR (OCR, Edexcel)"). Content and numbers are unchanged.
import { C, svg, panel, t, tl, arrow, path } from '../style.mjs';

export const slug = 'biology-genetic-technology';
const W = 900;
const RUST = '#c0643a', SLATE = '#4a5a78', NAVY = '#2e6f8e', GREEN = '#4f8a3a';
const PL = '#ddebe9', PLE = C.tealDark, GE = C.cream, GEE = C.olive, ST = '#f3d9c8';
const markers = `<defs><marker id="ahRu" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="18" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${RUST}"/></marker>
<marker id="ahBig" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="26" markerHeight="26" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${C.ink}"/></marker></defs>`;
const S = (w, h, title, body, sub) => svg(w, h, title, markers + body, sub);
const arrowRu = (x1, y1, x2, y2, w = 3.5) => arrow(x1, y1, x2, y2, { color: RUST, w, marker: 'ahRu' });
const box = (x, y, s, { fill = '#ffffff', edge = C.ink, w = 44, h = 44, size = 22, color = C.ink, weight = 700, sw = 2.5 } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${fill}" stroke="${edge}" stroke-width="${sw}"/>` +
  t(x + w / 2, y + h / 2 + size * 0.36, s, { size, weight, fill: color, anchor: 'middle' });

// ---------- 1. Restriction enzyme and sticky ends ----------
function sticky() {
  const o = [];
  const dy = -60, Y = (y) => y + dy;
  const head = (x, y, s) => t(x, Y(y), s, { size: 23, weight: 700, fill: C.tealDark });
  // step 1
  o.push(head(30, 195, '1 Enzyme finds its site'));
  const top = 'TGAATTCA', bot = 'ACTTAAGT';
  const x0 = 245, step = 50, ty = Y(236), by = Y(298);
  for (let i = 0; i < 8; i++) {
    o.push(`<line x1="${x0 + i * step + 22}" y1="${ty + 44}" x2="${x0 + i * step + 22}" y2="${by}" stroke="${SLATE}" stroke-width="2"/>`);
    o.push(box(x0 + i * step, ty, top[i]), box(x0 + i * step, by, bot[i]));
  }
  o.push(`<rect x="${x0 + step - 6}" y="${ty - 8}" width="${6 * step + 8}" height="${by + 52 - ty}" rx="12" fill="none" stroke="${C.olive}" stroke-width="3" stroke-dasharray="10 6"/>`);
  o.push(`<polyline points="${x0 + 2 * step - 3},${ty - 8} ${x0 + 2 * step - 3},${ty + 52} ${x0 + 6 * step + 8},${ty + 52} ${x0 + 6 * step + 8},${by + 52}" fill="none" stroke="${RUST}" stroke-width="4"/>`);
  o.push(t(x0 - 12, ty + 30, '5′', { size: 19, weight: 700, anchor: 'end' }), t(x0 + 8 * step + 2, ty + 30, '3′', { size: 19, weight: 700 }));
  o.push(t(x0 - 12, by + 30, '3′', { size: 19, weight: 700, anchor: 'end' }), t(x0 + 8 * step + 2, by + 30, '5′', { size: 19, weight: 700 }));
  o.push(t(448, Y(214), 'GAATTC: same 5′ to 3′ on both strands', { size: 19, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(450, Y(382), 'Cuts after G in each strand', { size: 21, weight: 700, fill: RUST, anchor: 'middle' }));
  // step 2
  o.push(head(30, 441, '2 Staggered cut: sticky ends'));
  const t2 = Y(482), b2 = Y(540);
  ['T', 'G'].forEach((c, i) => o.push(box(168 + i * 52, t2, c, { w: 46, h: 44 })));
  'ACTTAA'.split('').forEach((c, i) => o.push(box(168 + i * 52, b2, c, i > 1 ? { w: 46, fill: ST, edge: RUST } : { w: 46 })));
  'AATTCA'.split('').forEach((c, i) => o.push(box(420 + i * 52, t2, c, i < 4 ? { w: 46, fill: ST, edge: RUST } : { w: 46 })));
  ['G', 'T'].forEach((c, i) => o.push(box(628 + i * 52, b2, c, { w: 46 })));
  o.push(arrowRu(522, Y(452), 522, Y(478)));
  o.push(t(522, Y(455), 'sticky end', { size: 21, weight: 700, fill: RUST, anchor: 'middle' }));
  o.push(arrowRu(374, Y(626), 374, Y(592)));
  o.push(t(374, Y(658), 'sticky end', { size: 21, weight: 700, fill: RUST, anchor: 'middle' }));
  // steps 3 and 4
  const joined = (x, sealed) => {
    const a = Y(752), b = Y(810);
    for (let i = 0; i < 8; i++) {
      const xi = x + i * 51.5;
      const ann = i >= 2 && i <= 5;
      o.push(`<line x1="${xi + 23}" y1="${a + 44}" x2="${xi + 23}" y2="${b}" stroke="${SLATE}" stroke-width="2"${ann && !sealed ? ' stroke-dasharray="4 3"' : ''}/>`);
      const topGene = i >= 2, botGene = i >= 6;
      o.push(box(xi, a, top[i], { w: 46, fill: topGene ? GE : PL, edge: topGene ? GEE : PLE }));
      o.push(box(xi, b, bot[i], { w: 46, fill: botGene ? GE : PL, edge: botGene ? GEE : PLE }));
    }
    const col = sealed ? C.ink : RUST;
    o.push(`<rect x="${x + 2 * 51.5 - 5}" y="${a - 4}" width="5" height="52" fill="${col}"/>`);
    o.push(`<rect x="${x + 6 * 51.5 - 5}" y="${b - 4}" width="5" height="52" fill="${col}"/>`);
  };
  o.push(head(30, 721, '3 Ends anneal'), head(466, 721, '4 Ligase seals'));
  joined(18, false); joined(466, true);
  o.push(t(226, Y(893), 'H bonds + two nicks', { size: 21, weight: 700, fill: RUST, anchor: 'middle' }));
  o.push(t(672, Y(893), 'Phosphodiester bonds', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(`<rect x="28" y="${Y(924)}" width="22" height="22" rx="5" fill="${PL}" stroke="${PLE}" stroke-width="2.5"/>`, t(62, Y(942), 'plasmid DNA', { size: 19 }));
  o.push(`<rect x="292" y="${Y(924)}" width="22" height="22" rx="5" fill="${GE}" stroke="${GEE}" stroke-width="2.5"/>`, t(326, Y(942), 'gene DNA', { size: 19 }));
  o.push(t(500, Y(942), 'Nick = break in sugar-phosphate', { size: 19 }));
  return S(W, 915, 'Restriction enzyme: cut, anneal, join', o.join('\n'));
}

// ---------- 2. Recombinant plasmid ----------
function plasmid() {
  const o = [];
  const dy = -60, Y = (y) => y + dy;
  const arc = (cx, cy, r, a1, a2) => {
    const p = (a) => [cx + r * Math.cos((a * Math.PI) / 180), cy + r * Math.sin((a * Math.PI) / 180)].map((v) => v.toFixed(1)).join(' ');
    return `M${p(a1)} A${r} ${r} 0 ${Math.abs(a2 - a1) > 180 ? 1 : 0} 1 ${p(a2)}`;
  };
  // cut plasmid
  o.push(path(arc(230, Y(292), 85, -76, 256), { stroke: C.tealDark, w: 13 }).replace('stroke-linecap="round"', 'stroke-linecap="butt"'));
  for (const a of [-76, 256]) o.push(`<circle cx="${(230 + 85 * Math.cos((a * Math.PI) / 180)).toFixed(1)}" cy="${(Y(292) + 85 * Math.sin((a * Math.PI) / 180)).toFixed(1)}" r="8" fill="${RUST}"/>`);
  o.push(t(230, Y(300), '4700 bp', { size: 23, weight: 700, anchor: 'middle' }));
  o.push(t(230, Y(429), 'Plasmid cut once', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(`<rect x="590" y="${Y(268)}" width="184" height="44" rx="8" fill="${GE}" stroke="${GEE}" stroke-width="3"/>`);
  o.push(`<circle cx="590" cy="${Y(290)}" r="8" fill="${RUST}"/><circle cx="774" cy="${Y(290)}" r="8" fill="${RUST}"/>`);
  o.push(t(682, Y(299), '1150 bp', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(682, Y(429), 'Gene, same enzyme', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(450, Y(472), '+ DNA ligase', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(arrow(450, Y(492), 450, Y(544), { w: 6, marker: 'ahBig' }));
  // recombinant plasmid
  const cx = 450, cy = Y(810), r = 130;
  const g = (1150 / 5850) * 360; // gene arc in proportion
  const g1 = -90 - g / 2, g2 = -90 + g / 2;
  o.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${C.tealDark}" stroke-width="16"/>`);
  o.push(path(arc(cx, cy, r, g1, g2), { stroke: C.olive, w: 16 }));
  o.push(path(arc(cx, cy, r, 100, 158), { stroke: NAVY, w: 22 }));
  const pt = (a, rr) => [cx + rr * Math.cos((a * Math.PI) / 180), cy + rr * Math.sin((a * Math.PI) / 180)];
  const [px, py] = pt(g1, r + 22), [qx, qy] = pt(g2, r + 22);
  o.push(`<path d="M${px.toFixed(1)} ${py.toFixed(1)} v-24 h28" fill="none" stroke="${RUST}" stroke-width="4"/><path d="M${(px + 26).toFixed(1)} ${(py - 33).toFixed(1)} l12 9 l-12 9 z" fill="${RUST}"/>`);
  o.push(t(px - 30, py - 50, 'Promoter', { size: 21, weight: 700, fill: RUST, anchor: 'middle' }));
  o.push(`<path d="M${qx.toFixed(1)} ${qy.toFixed(1)} v-26 M${(qx - 18).toFixed(1)} ${(qy - 26).toFixed(1)} h36" fill="none" stroke="${C.ink}" stroke-width="4"/>`);
  o.push(t(qx + 30, qy - 18, 'Terminator', { size: 21, weight: 700 }));
  o.push(t(cx, cy - 72, 'Gene', { size: 22, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(cx, cy - 4, '5850 bp', { size: 25, weight: 700, anchor: 'middle' }));
  o.push(t(cx, cy + 32, '4700 + 1150', { size: 21, fill: C.muted, anchor: 'middle' }));
  o.push(t(345, Y(978), 'Marker gene:', { size: 20, weight: 700, fill: NAVY, anchor: 'end' }));
  o.push(t(345, Y(1006), 'antibiotic resistance', { size: 20, fill: NAVY, anchor: 'end' }));
  o.push(tl(616, Y(919), ['Plasmid copies itself', 'when host divides'], { size: 19, fill: C.muted }, 26));
  o.push(panel(40, Y(1030), 820, 66, '#ffffff', C.ink));
  o.push(t(450, Y(1073), 'Promoter and terminator must work in the host', { size: 22, weight: 700, anchor: 'middle' }));
  return S(W, 1060, 'Building a recombinant plasmid', o.join('\n'));
}

// ---------- 3. Selecting transformed bacteria ----------
function selecting() {
  const o = [];
  const dy = -50, Y = (y) => y + dy;
  // deterministic colony positions (hex grid inside r = 148)
  const pts = [];
  for (let row = -12; row <= 12; row++) for (let col = -12; col <= 12; col++) {
    const x = (col + (row % 2 ? 0.5 : 0)) * 13.2, y = row * 11.6;
    if (x * x + y * y <= 146 * 146) pts.push([x, y]);
  }
  let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const order = pts.map((p) => [rnd(), p]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);
  const all = order.slice(0, 312), kept = all.filter((_, i) => i % 7 === 3).slice(0, 41);
  const L = [235, Y(400)], R = [665, Y(400)];
  o.push(`<circle cx="${L[0]}" cy="${L[1]}" r="170" fill="${C.cream}" stroke="${C.ink}" stroke-width="3.5"/><circle cx="${L[0]}" cy="${L[1]}" r="158" fill="none" stroke="#cfd6d6" stroke-width="2.5"/>`);
  o.push(`<circle cx="${R[0]}" cy="${R[1]}" r="170" fill="#d9ebd6" stroke="${C.ink}" stroke-width="3.5"/><circle cx="${R[0]}" cy="${R[1]}" r="158" fill="none" stroke="#c4d3d3" stroke-width="2.5"/>`);
  for (const [x, y] of all) o.push(`<circle cx="${(L[0] + x).toFixed(1)}" cy="${(L[1] + y).toFixed(1)}" r="5" fill="#fbf4d8" stroke="${C.olive}" stroke-width="1.6"/>`);
  for (const [x, y] of kept) o.push(`<circle cx="${(R[0] + x).toFixed(1)}" cy="${(R[1] + y).toFixed(1)}" r="5.5" fill="#ffffff" stroke="${C.tealDark}" stroke-width="2.4"/>`);
  o.push(arrow(408, Y(400), 492, Y(400), { w: 5, marker: 'ahBig' }));
  o.push(t(450, Y(378), 'replica', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(t(235, Y(219), 'Nutrient agar', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(665, Y(219), 'Agar + antibiotic', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(235, Y(639), '312 colonies', { size: 26, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(235, Y(675), 'all bacteria grow', { size: 20, anchor: 'middle' }));
  o.push(t(665, Y(639), '41 colonies', { size: 26, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(665, Y(675), 'only those with the plasmid', { size: 20, anchor: 'middle' }));
  o.push(panel(120, Y(718), 660, 100, C.cream, C.olive));
  o.push(t(450, Y(762), '41 ÷ 312 × 100 = 13.1% transformed', { size: 24, weight: 700, anchor: 'middle' }));
  o.push(t(450, Y(799), '271 colonies took up no plasmid', { size: 20, fill: C.muted, anchor: 'middle' }));
  o.push(t(40, Y(878), 'Or: marker gene for GFP', { size: 22, weight: 700, fill: C.tealDark }));
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4, c = [80, Y(940)];
    o.push(`<line x1="${(c[0] + 38 * Math.cos(a)).toFixed(1)}" y1="${(c[1] + 38 * Math.sin(a)).toFixed(1)}" x2="${(c[0] + 50 * Math.cos(a)).toFixed(1)}" y2="${(c[1] + 50 * Math.sin(a)).toFixed(1)}" stroke="${GREEN}" stroke-width="3"/>`);
  }
  o.push(`<circle cx="80" cy="${Y(940)}" r="28" fill="#c8eab4" stroke="${GREEN}" stroke-width="3"/>`);
  o.push(t(80, Y(947), 'GFP', { size: 17, weight: 700, fill: '#2e5a22', anchor: 'middle' }));
  o.push(t(160, Y(935), 'Transformed colonies glow', { size: 21, weight: 700 }));
  o.push(t(160, Y(966), 'under UV (blue) light', { size: 20 }));
  return S(W, 960, 'Which bacteria took up the plasmid?', o.join('\n'));
}

// ---------- 4. Three ways to get a gene ----------
function threeWays() {
  const o = [];
  const dy = -40, Y = (y) => y + dy;
  const head = (y, s) => t(30, Y(y), s, { size: 23, weight: 700, fill: C.tealDark });
  const rule = (y) => `<line x1="30" y1="${Y(y)}" x2="870" y2="${Y(y)}" stroke="#c9d3d3" stroke-width="2.5"/>`;
  o.push(head(195, '1 Cut out with restriction enzymes'));
  const segs = [[60, 120, 0], [180, 80, 1], [260, 110, 0], [370, 80, 1], [450, 120, 0]];
  for (const [x, w, intron] of segs) o.push(`<rect x="${x}" y="${Y(232)}" width="${w}" height="46" rx="6" fill="${intron ? '#e0e3ea' : PL}" stroke="${intron ? SLATE : PLE}" stroke-width="2.5"/>`);
  o.push(t(120, Y(308), 'exon', { size: 19, anchor: 'middle' }), t(220, Y(308), 'intron', { size: 19, fill: SLATE, anchor: 'middle' }));
  o.push(arrow(638, Y(256), 702, Y(256), { w: 4 }));
  const small = [[710, 40, 0], [750, 30, 1], [780, 36, 0], [816, 30, 1], [846, 40, 0]];
  for (const [x, w, intron] of small) o.push(`<rect x="${x}" y="${Y(232)}" width="${w}" height="46" rx="6" fill="${intron ? '#e0e3ea' : PL}" stroke="${intron ? SLATE : PLE}" stroke-width="2.5"/>`);
  o.push(t(715, Y(322), 'still has introns', { size: 21, weight: 700, fill: RUST, anchor: 'middle' }));
  o.push(t(715, Y(350), 'bacteria cannot cut them out', { size: 19, fill: RUST, anchor: 'middle' }));
  o.push(rule(380));
  o.push(head(423, '2 Make cDNA from mRNA'));
  const row = (y, seq, fill, edge, l, r, lab, labCol) => {
    seq.split('').forEach((c, i) => o.push(box(150 + i * 40, Y(y), c, { w: 36, h: 40, size: 20, fill, edge, sw: 2 })));
    o.push(t(20, Y(y) + 28, l, { size: 20, weight: 700 }), t(754, Y(y) + 28, r, { size: 20, weight: 700 }));
    o.push(t(20, Y(y) + 64, lab, { size: 21, weight: 700, fill: labCol }));
  };
  row(470, 'AUGCCGAAGGUCUAA', '#f6d6d2', '#b5402e', '5′', '3′', 'mRNA', '#b5402e');
  o.push(arrow(450, Y(520), 450, Y(576), { color: RUST, w: 4, marker: 'ahRu' }), t(470, Y(553), 'reverse transcriptase', { size: 21, weight: 700, fill: RUST }));
  row(582, 'TACGGCTTCCAGATT', PL, PLE, '3′', '5′', 'cDNA', C.tealDark);
  o.push(arrow(450, Y(632), 450, Y(688), { color: C.tealDark, w: 4, marker: 'ahT' }), t(470, Y(665), 'DNA polymerase', { size: 21, weight: 700, fill: C.tealDark }));
  row(694, 'ATGCCGAAGGTCTAA', GE, GEE, '5′', '3′', 'cDNA', C.olive);
  o.push(t(450, Y(781), 'No introns. Second strand = mRNA code, T for U', { size: 19, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(rule(800));
  o.push(head(845, '3 Build it in a gene machine'));
  o.push(panel(60, Y(874), 220, 100, '#ffffff', C.ink));
  o.push(t(170, Y(912), 'Known', { size: 22, weight: 700, anchor: 'middle' }), t(170, Y(944), 'base sequence', { size: 20, anchor: 'middle' }));
  o.push(arrow(282, Y(924), 366, Y(924), { w: 5, marker: 'ahBig' }));
  o.push(panel(370, Y(874), 200, 100, PL, PLE));
  o.push(t(470, Y(916), 'Gene machine', { size: 21, weight: 700, anchor: 'middle' }), t(470, Y(948), 'joins nucleotides', { size: 19, anchor: 'middle' }));
  o.push(arrow(572, Y(924), 656, Y(924), { w: 5, marker: 'ahBig' }));
  o.push(panel(660, Y(894), 200, 60, GE, GEE));
  o.push(t(760, Y(932), 'new gene', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(450, Y(1030), 'No cells, mRNA or introns needed', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  return S(W, 1030, 'Three ways to get the gene', o.join('\n'));
}

// ---------- 5. PCR cycle ----------
function pcr() {
  const o = [];
  // temperature trace
  const gx = 120, gb = 330, T = (c) => 330 - (c - 40) * 2.85;
  o.push(arrow(gx, gb, gx, 132), arrow(gx, gb, 866, gb));
  for (const [c, col] of [[95, RUST], [72, C.olive], [60, C.tealDark]]) {
    o.push(`<line x1="${gx}" y1="${T(c)}" x2="850" y2="${T(c)}" stroke="#c9d6d6" stroke-width="2" stroke-dasharray="6 5"/>`);
    o.push(t(gx - 10, T(c) + 7, String(c), { size: 20, weight: 700, fill: col, anchor: 'end' }));
  }
  o.push(t(24, 180, '°C', { size: 19, weight: 700 }));
  o.push(path(`M${gx} 300 L176 ${T(95)} L254 ${T(95)} L294 ${T(60)} L370 ${T(60)} L410 ${T(72)} L486 ${T(72)} L532 ${T(95)} L602 ${T(95)} L650 ${T(60)} L720 ${T(60)} L766 ${T(72)} L840 ${T(72)}`, { w: 4 }));
  o.push(`<line x1="176" y1="${T(95)}" x2="254" y2="${T(95)}" stroke="${RUST}" stroke-width="8" stroke-linecap="round"/>`);
  o.push(`<line x1="294" y1="${T(60)}" x2="370" y2="${T(60)}" stroke="${C.tealDark}" stroke-width="8" stroke-linecap="round"/>`);
  o.push(`<line x1="410" y1="${T(72)}" x2="486" y2="${T(72)}" stroke="${C.olive}" stroke-width="8" stroke-linecap="round"/>`);
  o.push(t(485, 369, 'Time: cycle 1, then cycle 2', { size: 19, fill: C.muted, anchor: 'middle' }));
  // three panels
  const P = [[30, RUST, '1 Denature', '95 °C'], [315, C.tealDark, '2 Anneal', '~60 °C'], [600, C.olive, '3 Extend', '72 °C']];
  for (const [x, col, h, temp] of P) {
    o.push(panel(x, 400, 270, 330, '#ffffff', col));
    o.push(t(x + 135, 440, h, { size: 25, weight: 700, fill: col, anchor: 'middle' }));
    o.push(t(x + 135, 472, temp, { size: 19, weight: 700, anchor: 'middle' }));
  }
  const strand = (x1, x2, y) => `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${C.ink}" stroke-width="5"/>`;
  // denature
  o.push(strand(55, 275, 497), strand(55, 275, 527));
  for (let x = 70; x <= 265; x += 24) o.push(`<line x1="${x}" y1="${497}" x2="${x}" y2="${527}" stroke="${SLATE}" stroke-width="2"/>`);
  o.push(t(165, 561, 'H bonds break', { size: 19, weight: 700, fill: RUST, anchor: 'middle' }));
  o.push(arrowRu(165, 576, 165, 604, 4));
  o.push(strand(55, 275, 615), strand(55, 275, 664));
  o.push(t(55, 603, '5′', { size: 18, weight: 700 }), t(275, 603, '3′', { size: 18, weight: 700, anchor: 'end' }));
  o.push(t(55, 696, '3′', { size: 18, weight: 700 }), t(275, 696, '5′', { size: 18, weight: 700, anchor: 'end' }));
  // anneal
  o.push(strand(340, 560, 530), strand(340, 560, 620));
  o.push(t(340, 517, '5′', { size: 18, weight: 700 }), t(560, 517, '3′', { size: 18, weight: 700, anchor: 'end' }));
  o.push(t(340, 652, '3′', { size: 18, weight: 700 }), t(560, 652, '5′', { size: 18, weight: 700, anchor: 'end' }));
  const primer = (x1, x2, y, col, len = 30) => {
    const dir = Math.sign(x2 - x1);
    return `<line x1="${x1}" y1="${y}" x2="${x2 - dir * len}" y2="${y}" stroke="${col}" stroke-width="5"/><polygon points="${x2},${y} ${x2 - dir * len},${y - 15} ${x2 - dir * len},${y + 15}" fill="${col}"/>`;
  };
  o.push(primer(560, 470, 543, C.olive), primer(340, 430, 607, C.olive));
  o.push(t(450, 676, 'Primers bind', { size: 19, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(450, 706, 'complementary ends', { size: 19, anchor: 'middle' }));
  // extend
  o.push(strand(625, 845, 530), strand(625, 845, 620));
  o.push(t(625, 517, '5′', { size: 18, weight: 700 }), t(845, 517, '3′', { size: 18, weight: 700, anchor: 'end' }));
  o.push(t(625, 652, '3′', { size: 18, weight: 700 }), t(845, 652, '5′', { size: 18, weight: 700, anchor: 'end' }));
  o.push(primer(845, 625, 543, C.tealDark, 34), primer(625, 845, 607, C.tealDark, 34));
  o.push(t(735, 676, 'Taq adds nucleotides', { size: 19, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(735, 706, 'to 3′ ends of primers', { size: 19, anchor: 'middle' }));
  o.push(t(450, 780, '1 molecule becomes 2', { size: 22, weight: 700, anchor: 'middle' }));
  // bar chart
  o.push(t(30, 840, 'Copies double each cycle (start with 4)', { size: 22, weight: 700, fill: C.tealDark }));
  const base = 1058;
  o.push(`<line x1="90" y1="${base}" x2="862" y2="${base}" stroke="${C.ink}" stroke-width="3"/>`);
  for (let n = 0; n <= 6; n++) {
    const v = 4 * 2 ** n, h = (v / 256) * 158, x = 145 + n * 108;
    o.push(`<rect x="${x - 36}" y="${base - h}" width="72" height="${h}" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/>`);
    o.push(t(x, base - h - 10, String(v), { size: 20, weight: 700, anchor: 'middle' }));
    o.push(t(x, base + 30, String(n), { size: 20, anchor: 'middle' }));
  }
  o.push(t(475, 1128, 'Number of cycles', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(475, 1170, '4 × 2⁶ = 256', { size: 23, weight: 700, anchor: 'middle' }));
  return S(W, 1210, 'One PCR cycle', o.join('\n'));
}

// ---------- 6. Gel electrophoresis ----------
function gel() {
  const o = [];
  const dy = -90, Y = (y) => y + dy;
  const yb = (bp) => Y(404) + 114 * Math.log2(6000 / bp);
  o.push(`<rect x="20" y="${Y(250)}" width="860" height="708" rx="14" fill="#e7edf5" stroke="${C.ink}" stroke-width="3.5"/>`);
  const lanes = [[170, 'Ladder'], [360, 'Uncut'], [550, 'Linear cut'], [740, 'Circle cut']];
  for (const [x, h] of lanes) {
    o.push(t(x, Y(235), h, { size: 22, weight: 700, anchor: 'middle' }));
    o.push(`<rect x="${x - 50}" y="${Y(270)}" width="100" height="20" rx="4" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`);
  }
  o.push(t(850, Y(290), '−', { size: 32, weight: 700, fill: RUST, anchor: 'middle' }));
  o.push(t(850, Y(941), '+', { size: 32, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  const band = (x, bp, col, lab, side = 'right') => {
    o.push(`<rect x="${x - 50}" y="${yb(bp) - 6}" width="100" height="12" rx="4" fill="${col}"/>`);
    if (side === 'right') o.push(t(x + 58, yb(bp) + 8, lab, { size: 20, weight: 700 }));
    else o.push(t(x - 58, yb(bp) + 8, lab, { size: 20, weight: 700, anchor: 'end' }));
  };
  for (const bp of [6000, 3000, 1500, 1000, 500, 250]) band(170, bp, SLATE, String(bp), 'left');
  band(360, 6000, C.tealDark, '6000');
  for (const bp of [3300, 1500, 1200]) band(550, bp, C.tealDark, String(bp));
  band(740, 2700, C.tealDark, '2700'); band(740, 2300, C.tealDark, '2300');
  o.push(`<line x1="265" y1="${Y(340)}" x2="265" y2="${Y(895)}" stroke="${C.tealDark}" stroke-width="4"/>`);
  o.push(`<polygon points="265,${Y(926)} 248,${Y(892)} 282,${Y(892)}" fill="${C.tealDark}"/>`);
  o.push(t(450, Y(998), 'DNA is negative: wells at −, runs to +', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(450, Y(1034), 'Smaller fragments go further (sizes in bp)', { size: 20, weight: 700, fill: C.muted, anchor: 'middle' }));
  o.push(t(450, Y(1080), 'Line cut n times: n + 1 pieces. Circle cut n times: n pieces.', { size: 20, weight: 700, fill: C.olive, anchor: 'middle' }));
  return S(W, 1020, 'Gel electrophoresis', o.join('\n'));
}

// ---------- 7. DNA profile ----------
function profile() {
  const o = [];
  const dy = -30, Y = (y) => y + dy;
  const yk = (kb) => Y(327) + 209 * Math.log(9 / kb);
  o.push(t(450, Y(170), 'Each band is a repeat region of DNA (VNTR or STR)', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(`<rect x="20" y="${Y(240)}" width="860" height="515" rx="14" fill="#e7edf5" stroke="${C.ink}" stroke-width="3.5"/>`);
  for (const kb of [9.0, 6.5, 5.0, 4.0, 3.5, 2.5, 2.0, 1.5]) {
    o.push(`<line x1="70" y1="${yk(kb)}" x2="875" y2="${yk(kb)}" stroke="#c6d2e0" stroke-width="1.8" stroke-dasharray="5 5"/>`);
    o.push(t(28, yk(kb) + 7, kb.toFixed(1), { size: 19, fill: SLATE }));
  }
  const GOLD = C.olive, TEAL = C.tealDark;
  const lanes = [
    [220, 'Mother', [[9.0, TEAL], [5.0, TEAL], [4.0, TEAL], [2.0, TEAL]]],
    [410, 'Child', [[9.0, TEAL], [6.5, GOLD], [5.0, TEAL], [3.5, GOLD], [2.0, TEAL]]],
    [600, 'Man A', [[9.0, SLATE], [6.5, GOLD], [3.5, GOLD], [1.5, SLATE]]],
    [790, 'Man B', [[6.5, GOLD], [4.0, SLATE], [2.5, SLATE], [1.5, SLATE]]],
  ];
  for (const [x, h, bands] of lanes) {
    o.push(t(x, Y(225), h, { size: 22, weight: 700, anchor: 'middle' }));
    o.push(`<rect x="${x - 60}" y="${Y(256)}" width="120" height="20" rx="4" fill="#ffffff" stroke="${C.ink}" stroke-width="2.5"/>`);
    for (const [kb, col] of bands) o.push(`<rect x="${x - 50}" y="${yk(kb) - 7}" width="100" height="14" rx="3" fill="${col}"/>`);
  }
  o.push(`<rect x="740" y="${yk(3.5) - 10}" width="100" height="20" rx="3" fill="none" stroke="${RUST}" stroke-width="2.5" stroke-dasharray="6 4"/>`);
  o.push(t(876, Y(787), 'kb', { size: 19, fill: C.muted, anchor: 'end' }));
  o.push(t(450, Y(834), 'Gold: child’s bands not from mother, so from father', { size: 21, weight: 700, fill: GOLD, anchor: 'middle' }));
  o.push(t(450, Y(878), 'Man A has both gold bands: could be father', { size: 21, weight: 700, fill: TEAL, anchor: 'middle' }));
  o.push(t(450, Y(920), 'Man B lacks 3.5 (dashed): excluded', { size: 21, weight: 700, fill: RUST, anchor: 'middle' }));
  o.push(t(450, Y(972), 'Chance match: 0.1×0.05×0.2×0.08×0.125 = 1 in 100 000', { size: 19, fill: C.muted, anchor: 'middle' }));
  return S(W, 980, 'DNA profile: who is the father?', o.join('\n'));
}

// ---------- 8. Sanger sequencing ----------
function sanger() {
  const o = [];
  const dy = -40, Y = (y) => y + dy;
  const COL = { G: [C.cream, C.olive, C.olive], A: ['#dcebd2', GREEN, GREEN], T: ['#f6d6d2', '#b5402e', '#b5402e'], C: ['#d6e7ef', NAVY, NAVY] };
  o.push(t(20, Y(194), 'Template', { size: 21, weight: 700 }));
  'CTAAGCGATTCG'.split('').forEach((c, i) => o.push(box(170 + i * 50, Y(206), c, { w: 44, h: 40 })));
  o.push(t(162, Y(234), '3′', { size: 19, weight: 700, anchor: 'end' }), t(774, Y(234), '5′', { size: 19, weight: 700 }));
  o.push(t(20, Y(287), 'New strands', { size: 21, weight: 700, fill: C.tealDark }));
  const seq = 'GATTCGCTAAGC';
  for (let n = 1; n <= 12; n++) {
    const y = Y(304 + (n - 1) * 46);
    o.push(t(150, y + 28, String(n), { size: 19, fill: SLATE, anchor: 'end' }));
    for (let i = 0; i < n; i++) {
      const last = i === n - 1, c = seq[i];
      o.push(box(170 + i * 50, y, c, last ? { w: 44, h: 40, fill: COL[c][0], edge: COL[c][1], color: COL[c][2], sw: 3 } : { w: 44, h: 40, edge: '#5f9c95', color: SLATE, weight: 400, sw: 1.8 }));
    }
  }
  o.push(t(815, Y(328), 'read', { size: 19, weight: 700, fill: RUST, anchor: 'middle' }), t(815, Y(355), 'order', { size: 19, weight: 700, fill: RUST, anchor: 'middle' }));
  o.push(`<line x1="820" y1="${Y(372)}" x2="820" y2="${Y(800)}" stroke="${RUST}" stroke-width="4"/><polygon points="820,${Y(832)} 803,${Y(798)} 837,${Y(798)}" fill="${RUST}"/>`);
  o.push(t(450, Y(879), 'Coloured last base: dideoxynucleotide, chain stops', { size: 20, weight: 700, anchor: 'middle' }));
  o.push(t(450, Y(921), 'Read last bases, shortest to longest', { size: 20, anchor: 'middle' }));
  seq.split('').forEach((c, i) => o.push(box(170 + i * 50, Y(936), c, { w: 44, h: 44, fill: COL[c][0], edge: COL[c][1], color: COL[c][2], sw: 3 })));
  o.push(t(450, Y(1025), 'New strand 5′ GATTCGCTAAGC 3′', { size: 23, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  return S(W, 1020, 'Sanger sequencing', o.join('\n'));
}

// ---------- 9. SCNT cloning ----------
function scnt() {
  const o = [];
  const dy = -40, Y = (y) => y + dy;
  const egg = (x, y, nucleus) => `<circle cx="${x}" cy="${Y(y)}" r="70" fill="${C.cream}" stroke="${C.olive}" stroke-width="3.5"/>` + nucleus;
  o.push(`<circle cx="190" cy="${Y(230)}" r="70" fill="${PL}" stroke="${C.tealDark}" stroke-width="3.5"/><circle cx="190" cy="${Y(230)}" r="25" fill="${C.tealDark}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(t(190, Y(339), 'Body cell', { size: 22, weight: 700, anchor: 'middle' }), t(190, Y(369), 'diploid nucleus', { size: 20, anchor: 'middle' }));
  o.push(egg(700, 230, `<circle cx="700" cy="${Y(230)}" r="25" fill="${C.olive}" stroke="${C.ink}" stroke-width="2.5"/>`));
  o.push(t(700, Y(339), 'Egg from donor', { size: 22, weight: 700, anchor: 'middle' }), t(700, Y(369), 'own nucleus', { size: 20, anchor: 'middle' }));
  o.push(arrowRu(700, Y(384), 700, Y(440), 6));
  o.push(t(660, Y(419), 'remove nucleus', { size: 20, weight: 700, fill: RUST, anchor: 'end' }));
  o.push(egg(700, 520, `<circle cx="700" cy="${Y(520)}" r="24" fill="none" stroke="${SLATE}" stroke-width="2.5" stroke-dasharray="5 4"/>`));
  o.push(t(700, Y(624), 'Enucleated egg', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(`<polyline points="190,${Y(394)} 190,${Y(520)} 600,${Y(520)}" fill="none" stroke="${C.ink}" stroke-width="4"/>`, arrow(560, Y(520), 618, Y(520), { w: 4 }));
  o.push(tl(210, Y(469), ['body nucleus', 'moved in'], { size: 20, weight: 700 }, 30));
  o.push(arrow(700, Y(642), 700, Y(700), { w: 6, marker: 'ahBig' }));
  o.push(t(660, Y(684), 'electric pulse', { size: 20, weight: 700, anchor: 'end' }));
  o.push(egg(700, 770, `<circle cx="700" cy="${Y(770)}" r="25" fill="${C.tealDark}" stroke="${C.ink}" stroke-width="2.5"/>`));
  o.push(t(700, Y(861), 'Egg + body nucleus', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(arrow(632, Y(770), 428, Y(770), { color: C.tealDark, w: 5, marker: 'ahT' }));
  o.push(t(530, Y(743), 'divides', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  for (const [x, y] of [[340, 745], [380, 745], [340, 790], [380, 790]]) o.push(`<circle cx="${x}" cy="${Y(y)}" r="21" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  o.push(`<circle cx="360" cy="${Y(760)}" r="21" fill="${C.teal}" stroke="${C.tealDark}" stroke-width="2.5"/>`);
  o.push(t(360, Y(861), 'Early embryo', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(arrow(310, Y(770), 206, Y(770), { color: C.tealDark, w: 5, marker: 'ahT' }));
  o.push(`<rect x="28" y="${Y(724)}" width="172" height="92" rx="24" fill="#ffffff" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(t(114, Y(764), 'Surrogate', { size: 22, weight: 700, anchor: 'middle' }), t(114, Y(796), 'mother', { size: 22, weight: 700, anchor: 'middle' }));
  o.push(t(450, Y(924), 'Clone nuclear DNA = body-cell donor', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(30, Y(989), 'How often it works (trial)', { size: 23, weight: 700, fill: C.tealDark }));
  const bars = [['reconstructed eggs', 150], ['embryos', 60], ['pregnancies', 12], ['births', 5], ['alive at 1 year', 3]];
  bars.forEach(([lab, v], i) => {
    const y = Y(1010 + i * 46), w = (v / 150) * 440, last = i === 4;
    o.push(t(300, y + 27, lab, { size: 19, anchor: 'end' }));
    o.push(`<rect x="316" y="${y}" width="${w}" height="38" fill="${last ? C.olive : C.teal}" stroke="${last ? C.olive : C.tealDark}" stroke-width="2.5"/>`);
    o.push(t(316 + w + 12, y + 28, String(v), { size: 21, weight: 700 }));
  });
  o.push(t(450, Y(1274), '3 ÷ 150 × 100 = 2% give a surviving animal', { size: 23, weight: 700, anchor: 'middle' }));
  return S(W, 1260, 'Cloning an adult: SCNT', o.join('\n'));
}

export const figures = [
  { name: '01-restriction-sticky-ends', after: '## 3.4.10.1 Principles', svg: sticky(),
    alt: 'Four steps show a DNA duplex with the palindromic site GAATTC. The enzyme cuts after the G in each strand, leaving AATT single-stranded sticky ends. Plasmid and gene ends cut with the same enzyme anneal by hydrogen bonds, and DNA ligase then forms phosphodiester bonds across the two nicks.',
    caption: 'Cutting both DNA molecules with the same enzyme gives matching sticky ends, and ligase seals the backbone.' },
  { name: '02-recombinant-plasmid', after: '## 3.4.10.1 Principles', svg: plasmid(),
    alt: 'A plasmid of 4700 bp is cut once and a 1150 bp gene cut with the same enzyme is ligated in to give a 5850 bp recombinant plasmid. The gene arc is drawn in proportion to its size. A promoter and terminator flank the gene and an antibiotic-resistance marker gene is on the vector.',
    caption: 'A recombinant plasmid carries the gene with a working promoter and terminator, plus a marker gene.' },
  { name: '03-selecting-transformed-bacteria', after: '## 3.4.10.1 Principles', svg: selecting(),
    alt: 'Two plates have the same colony positions. On nutrient agar 312 colonies grow; on agar with antibiotic only 41 grow, the ones that took up the plasmid with the resistance marker. 41/312 is 13.1 percent. GFP is the alternative marker, glowing under UV.',
    caption: 'Only bacteria carrying the plasmid survive on antibiotic agar, so 41 of 312 colonies (13.1%) were transformed.' },
  { name: '04-three-ways-to-get-a-gene', after: '## 3.4.10.1 Principles', svg: threeWays(),
    alt: 'Three routes are shown. Restriction enzymes cut the gene from the genome but it keeps its introns. Reverse transcriptase copies mRNA to cDNA and DNA polymerase makes the second strand, giving a gene with no introns. A gene machine builds the gene from a known base sequence.',
    caption: 'Restriction cutting keeps introns, whereas cDNA and machine-made genes have none.' },
  { name: '05-pcr-cycle', after: '## 3.4.10.1 Principles', svg: pcr(),
    alt: 'A temperature trace shows 95 C, about 60 C and 72 C plateaus. Three panels show one cycle: heat separates the strands, primers anneal to the 3 prime end of each template, and Taq polymerase extends each primer 5 prime to 3 prime. A bar chart shows copies doubling each cycle, from 4 to 256 in 6 cycles.',
    caption: 'Each PCR cycle denatures, anneals and extends, doubling the number of DNA molecules.' },
  { name: '06-gel-electrophoresis', after: '## 3.4.10.1 Principles', svg: gel(),
    alt: 'An agarose gel has wells at the negative end and DNA runs towards the positive electrode. Smaller fragments travel further. Linear 6000 bp DNA cut twice gives 3300, 1500 and 1200 bp bands; a 5000 bp circle cut twice gives 2300 and 2700 bp bands.',
    caption: 'Negatively charged DNA runs to the anode, with smaller fragments travelling further.' },
  { name: '07-dna-profile-paternity', after: '### Answers', svg: profile(),
    alt: 'Four lanes of band sizes in kb show mother, child and two men. The child has bands 6.5 and 3.5 that the mother lacks, so they come from the father. Man A has both; Man B lacks 3.5 and is excluded. Five independent loci with chances 0.1, 0.05, 0.2, 0.08 and 0.125 give a chance match of 1 in 100 000.',
    caption: 'Bands the child lacks from the mother must come from the father: Man A fits, Man B is excluded.' },
  { name: '08-sanger-sequencing', after: '### DNA ligase', svg: sanger(),
    alt: 'The template is copied by DNA polymerase. Strands of every length from 1 to 12 stop at a labelled dideoxynucleotide that lacks a 3 prime OH. Reading the last base from shortest to longest gives G A T T C G C T A A G C, the new strand 5 prime to 3 prime, complementary to the template.',
    caption: 'Chain-terminating nucleotides give fragments of every length, and the last bases read shortest to longest spell the new strand.' },
  { name: '09-scnt-cloning', after: '### Animals: pharming', svg: scnt(),
    alt: 'A body cell nucleus is moved into a donor egg whose own nucleus has been removed, using an electric pulse. The egg divides to an early embryo that is implanted in a surrogate mother. The clone has the nuclear DNA of the body-cell donor. In a trial 150 eggs gave 60 embryos, 12 pregnancies, 5 births and 3 survivors, 2 percent.',
    caption: 'SCNT puts an adult body-cell nucleus into an enucleated egg, but only about 2% of reconstructed eggs give a surviving animal.' },
];
