// Board-neutral redraws of five A-level nucleic-acid figures shared by AQA, OCR, OxfordAQA, Edexcel
// and Cambridge pages. The old pictures carried board badges ("Cambridge 9700 and AQA",
// "Lagging strand and ligase: Cambridge 9700", "Mutation types: Cambridge 9700", "AQA names",
// "AQA and OCR"). The badges are gone; the content they sat on is correct for every board and stays.
import { C, svg, panel, t, arrow, path } from '../style.mjs';

export const slug = 'biology-nucleic-acids-and-protein-synthesis';
const W = 900;
const RUST = '#c0643a', SLATE = '#4a5a78', NAVY = '#1e2a44';
const BASE = { A: C.teal, T: C.cream, G: '#c9d3ea', C: '#f0c8b0', U: '#e2d6ec' };
const markers = `<defs><marker id="ahBig" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="30" markerHeight="30" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${C.ink}"/></marker>
<marker id="ahBigT" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="30" markerHeight="30" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${C.tealDark}"/></marker>
<marker id="ahRu" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="18" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${RUST}"/></marker></defs>`;
const S = (w, h, title, body, sub) => svg(w, h, title, markers + body, sub);
const base = (x, y, c, { w = 46, h = 46, size = 22, edge = C.ink, sw = 2.2, dash = '' } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${BASE[c]}" stroke="${edge}" stroke-width="${sw}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>` +
  t(x + w / 2, y + h / 2 + size * 0.36, c, { size, weight: 700, anchor: 'middle' });
const dotted = (x, y1, y2) => `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="${C.ink}" stroke-width="2.5" stroke-dasharray="3 5"/>`;
const leader = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${SLATE}" stroke-width="2"/><circle cx="${x2}" cy="${y2}" r="4.5" fill="${SLATE}"/>`;

// ---------- 4. Replication fork ----------
function fork() {
  const o = [];
  // geometry: fork point F, two arms going up-left and down-left
  const F = [600, 470];
  const up = [100, 120], dn = [100, 820];
  const uv = [(up[0] - F[0]), (up[1] - F[1])], ul = Math.hypot(...uv), uu = [uv[0] / ul, uv[1] / ul];
  const dv = [(dn[0] - F[0]), (dn[1] - F[1])], dl = Math.hypot(...dv), du = [dv[0] / dl, dv[1] / dl];
  const nU = [uu[1], -uu[0]], nD = [-du[1], du[0]]; // normals pointing to the inside (towards new strand)
  const at = (u, d, n, off) => [F[0] + u[0] * d + n[0] * off, F[1] + u[1] * d + n[1] * off];
  const seg = (a, b, col, w) => `<line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${b[0].toFixed(1)}" y2="${b[1].toFixed(1)}" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>`;
  // old templates
  o.push(seg(F, up, NAVY, 7), seg(F, dn, NAVY, 7));
  // leading strand (upper arm): continuous from 5' end far away to near fork
  const off = 26;
  for (let d = 30; d < 560; d += 26) o.push(seg(at(uu, d, nU, 0), at(uu, d, nU, off), SLATE, 2));
  o.push(seg(at(uu, 110, nU, off), at(uu, 600, nU, off), C.olive, 6));
  // lagging strand fragments (lower arm): newest fragment near the fork, older ones further out
  const frags = [[100, 222], [262, 420], [428, 600]];
  for (let d = 20; d < 600; d += 26) if (frags.some(([a, b]) => d >= a && d <= b)) o.push(seg(at(du, d, nD, 0), at(du, d, nD, off), SLATE, 2));
  for (const [a, b] of frags) o.push(seg(at(du, a, nD, off), at(du, b, nD, off), C.olive, 6));
  o.push(`<polygon points="${at(du, 600, nD, off).map((v) => v.toFixed(1)).join(',')} ${at(du, 580, nD, off - 10).map((v) => v.toFixed(1)).join(',')} ${at(du, 580, nD, off + 10).map((v) => v.toFixed(1)).join(',')}" fill="${C.olive}"/>`);
  // parent duplex to the right
  o.push(seg([F[0], F[1] - 12], [862, F[1] - 12], NAVY, 7), seg([F[0], F[1] + 12], [862, F[1] + 12], NAVY, 7));
  for (let x = 650; x < 860; x += 22) o.push(seg([x, F[1] - 10], [x, F[1] + 10], SLATE, 2));
  // helicase
  o.push(`<polygon points="${F[0] - 32},${F[1] - 50} ${F[0] + 40},${F[1]} ${F[0] - 32},${F[1] + 50}" fill="${C.teal}" stroke="${C.ink}" stroke-width="3"/>`);
  // polymerases and ligase
  const blob = (p, r) => `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="${r}" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>`;
  const pLead = at(uu, 110, nU, off + 8), pLag = at(du, 240, nD, off + 6), lig = at(du, 424, nD, off + 4);
  o.push(blob(pLead, 32), blob(pLag, 32), blob(lig, 26));
  // end labels
  o.push(t(118, 106, '3′', { size: 21, weight: 700, anchor: 'middle' }), t(48, 176, '5′', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(t(48, 776, '3′', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }), t(128, 858, '5′', { size: 21, weight: 700, anchor: 'middle' }));
  o.push(t(850, 440, '5′', { size: 21, weight: 700, anchor: 'middle' }), t(850, 520, '3′', { size: 21, weight: 700, anchor: 'middle' }));
  // labels
  o.push(t(480, 190, 'leading strand', { size: 22, weight: 700, fill: C.olive }), t(480, 220, 'continuous, toward fork', { size: 20 }));
  o.push(leader(560, 234, ...at(uu, 380, nU, off / 2)));
  o.push(t(650, 289, 'helicase', { size: 22, weight: 700 }), t(650, 320, 'breaks H bonds', { size: 20 }));
  o.push(leader(698, 334, F[0] + 12, F[1] - 40));
  o.push(t(40, 440, 'DNA polymerase', { size: 22, weight: 700 }), t(40, 471, 'adds nucleotides', { size: 20 }), t(40, 502, 'at the 3′ end', { size: 20 }));
  o.push(leader(260, 470, pLead[0] - 8, pLead[1] + 26), leader(200, 516, pLag[0] - 22, pLag[1] - 20));
  o.push(t(40, 624, 'ligase joins', { size: 22, weight: 700 }), t(40, 655, 'the fragments', { size: 20 }));
  o.push(leader(186, 662, lig[0] - 10, lig[1] + 6));
  o.push(t(418, 799, 'lagging strand', { size: 22, weight: 700, fill: C.olive }), t(418, 830, 'fragments, away from fork', { size: 20 }));
  o.push(leader(548, 770, ...at(du, 520, nD, off / 2)));
  o.push(arrow(650, 620, 852, 620, { color: C.tealDark, w: 5, marker: 'ahBigT' }));
  o.push(t(750, 668, 'fork moves', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  // key
  o.push(`<line x1="40" y1="926" x2="100" y2="926" stroke="${NAVY}" stroke-width="7" stroke-linecap="round"/>`, t(114, 933, 'old template', { size: 20 }));
  o.push(`<line x1="360" y1="926" x2="420" y2="926" stroke="${C.olive}" stroke-width="7" stroke-linecap="round"/>`, t(434, 933, 'new strand', { size: 20 }));
  o.push(t(450, 983, 'New strands grow 5′ → 3′ only', { size: 24, weight: 700, anchor: 'middle' }));
  return S(W, 1020, 'DNA replication fork', o.join('\n'), 'Schematic: fork opens to the right');
}

// ---------- 5. Meselson and Stahl ----------
function meselson() {
  const o = [];
  const dy = -30, Y = (y) => y + dy;
  const tube = (x, top, w, h, bands, sw = 3) => {
    const r = w / 2, id = `tb${x}${top}`.replace(/\./g, '');
    const d = `M${x - r} ${top} V${top + h - r} A${r} ${r} 0 0 0 ${x + r} ${top + h - r} V${top}`;
    let s = `<clipPath id="${id}"><path d="${d} Z"/></clipPath><path d="${d}" fill="#eef6f8"/>`;
    s += `<g clip-path="url(#${id})">` + bands.map(([y0, hh, col]) => `<rect x="${x - r}" y="${top + y0}" width="${w}" height="${hh}" fill="${col}"/>`).join('') + '</g>';
    s += `<path d="${d}" fill="none" stroke="${C.ink}" stroke-width="${sw}"/><line x1="${x - r - 8}" y1="${top}" x2="${x + r + 8}" y2="${top}" stroke="${C.ink}" stroke-width="${sw}"/>`;
    return s;
  };
  const HEAVY = NAVY, MID = '#4f8189', LIGHT = '#d4b02e';
  const heads = [[150, 'Start', `<tspan font-size="65%" dy="-0.6em">15</tspan><tspan dy="0.39em">N DNA</tspan>`], [450, 'Gen 1', `grown in <tspan font-size="65%" dy="-0.6em">14</tspan><tspan dy="0.39em">N</tspan>`], [750, 'Gen 2', `grown in <tspan font-size="65%" dy="-0.6em">14</tspan><tspan dy="0.39em">N</tspan>`]];
  for (const [x, h, s] of heads) { o.push(t(x, Y(189), h, { size: 26, weight: 700, anchor: 'middle' })); o.push(t(x, Y(221), s, { size: 20, fill: C.muted, anchor: 'middle' })); }
  o.push(tube(150, Y(240), 90, 230, [[140, 38, HEAVY]]), tube(450, Y(240), 90, 230, [[76, 38, MID]]), tube(750, Y(240), 90, 230, [[20, 26, LIGHT], [84, 26, MID]]));
  const strand = (x, y, col) => `<line x1="${x}" y1="${y}" x2="${x + 72}" y2="${y}" stroke="${col}" stroke-width="6" stroke-linecap="round"/>`;
  o.push(strand(114, Y(512), HEAVY), strand(114, Y(528), HEAVY));
  o.push(strand(414, Y(512), HEAVY), strand(414, Y(528), LIGHT), strand(414, Y(554), HEAVY), strand(414, Y(570), LIGHT));
  o.push(strand(660, Y(512), HEAVY), strand(660, Y(528), LIGHT), strand(660, Y(554), HEAVY), strand(660, Y(570), LIGHT));
  o.push(strand(760, Y(512), LIGHT), strand(760, Y(528), LIGHT), strand(760, Y(554), LIGHT), strand(760, Y(570), LIGHT));
  o.push(`<line x1="40" y1="${Y(650)}" x2="90" y2="${Y(650)}" stroke="${HEAVY}" stroke-width="6" stroke-linecap="round"/>`);
  o.push(t(102, Y(658), `<tspan font-size="65%" dy="-0.6em">15</tspan><tspan dy="0.39em">N (heavy) strand</tspan>`, { size: 20 }));
  o.push(`<line x1="400" y1="${Y(650)}" x2="450" y2="${Y(650)}" stroke="${LIGHT}" stroke-width="6" stroke-linecap="round"/>`);
  o.push(t(462, Y(658), `<tspan font-size="65%" dy="-0.6em">14</tspan><tspan dy="0.39em">N (light) strand</tspan>`, { size: 20 }));
  o.push(t(40, Y(698), 'Observed: Gen 1 one middle band; Gen 2 middle + light', { size: 21, weight: 700 }));
  // model grid
  o.push(panel(30, Y(725), 840, 500, '#ffffff', C.ink));
  o.push(t(450, Y(767), 'Which model fits?', { size: 24, weight: 700, anchor: 'middle' }));
  o.push(t(380, Y(808), 'Gen 1', { size: 21, weight: 700, anchor: 'middle' }), t(512, Y(808), 'Gen 2', { size: 21, weight: 700, anchor: 'middle' }));
  const tick = (x, y) => `<path d="M${x - 18} ${y} l12 14 l24 -30" fill="none" stroke="${C.tealDark}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`;
  const cross = (x, y) => `<path d="M${x - 15} ${y - 15} l30 30 M${x + 15} ${y - 15} l-30 30" fill="none" stroke="${RUST}" stroke-width="5" stroke-linecap="round"/>`;
  const rows = [
    ['Semi-conservative', [[24, 38, MID]], [[18, 12, LIGHT], [32, 26, MID]], [1, 1], 'fits both', C.tealDark],
    ['Conservative', [[18, 20, LIGHT], [38, 26, HEAVY]], [[10, 28, LIGHT], [38, 20, HEAVY]], [0, 0], 'ruled out at Gen 1', RUST],
    ['Dispersive', [[24, 38, MID]], [[20, 38, MID]], [1, 0], 'ruled out at Gen 2', RUST],
  ];
  rows.forEach(([name, g1, g2, ok, verdict, col], i) => {
    const top = Y(830 + i * 126);
    o.push(t(50, top + 68, name, { size: 21, weight: 700 }));
    o.push(tube(380, top, 56, 108, g1, 2.5), tube(512, top, 56, 108, g2, 2.5));
    o.push(ok[0] ? tick(446, top + 60) : cross(446, top + 54), ok[1] ? tick(578, top + 60) : cross(578, top + 54));
    o.push(t(626, top + 60, verdict, { size: 20, weight: 700, fill: col }));
  });
  return S(W, 1230, 'Testing how DNA is copied', o.join('\n'), 'Schematic density gradients');
}

// ---------- 6. Transcription and splicing ----------
function transcription() {
  const o = [];
  const step = 52, gapX = 14;
  const xs = []; // 15 positions, grouped in triplets
  for (let i = 0; i < 15; i++) xs.push(40 + i * step + Math.floor(i / 3) * gapX);
  // polymerase
  o.push(`<rect x="445" y="150" width="190" height="420" rx="56" fill="#dfeceb" stroke="${C.tealDark}" stroke-width="3"/>`);
  o.push(t(540, 140, 'RNA polymerase', { size: 22, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(t(42, 152, 'non-transcribed strand (5′ → 3′)', { size: 20, weight: 700 }));
  o.push(t(42, 318, 'template strand (3′ → 5′)', { size: 20, weight: 700 }));
  o.push(t(42, 568, 'mRNA (5′ → 3′)', { size: 20, weight: 700, fill: C.tealDark }));
  const nt = 'ATGTTCGGCAACTAA', tp = 'TACAAGCCGTTGATT', mr = 'AUGUUCGGC';
  for (let i = 0; i < 15; i++) {
    const x = xs[i];
    if (i < 9) {
      o.push(base(x, 172, nt[i]));
      o.push(dotted(x + 23, 380, 480));
      o.push(base(x, 480, mr[i]));
    } else {
      o.push(base(x, 256, nt[i]));
      o.push(dotted(x + 23, 302, 334));
    }
    o.push(base(x, 334, tp[i]));
  }
  // free nucleotide
  o.push(base(540, 590, 'A', { dash: '5 4' }));
  o.push(arrow(563, 586, 563, 532, { w: 4 }));
  o.push(t(602, 621, 'free RNA nucleotide', { size: 20 }));
  o.push(arrow(464, 660, 578, 660, { color: C.tealDark, w: 5, marker: 'ahBigT' }));
  o.push(t(520, 696, 'moves this way', { size: 20, weight: 700, fill: C.tealDark, anchor: 'middle' }));
  o.push(`<line x1="30" y1="740" x2="870" y2="740" stroke="#c9d3d3" stroke-width="2.5"/>`);
  // splicing (drawn at 4 nt per px)
  o.push(t(450, 778, 'Eukaryotes: splicing', { size: 26, weight: 700, anchor: 'middle' }));
  o.push(t(40, 828, 'primary transcript: 3,180 nt', { size: 21, weight: 700 }));
  const segs = [[75, 1], [105, 0], [88, 1], [90, 0], [75, 1], [153, 0], [82, 1], [59.5, 0], [67.5, 1]];
  let x = 40;
  for (const [w, ex] of segs) {
    o.push(`<rect x="${x}" y="848" width="${w}" height="56" fill="${ex ? C.tealDark : C.cream}" stroke="${C.ink}" stroke-width="2"${ex ? '' : ' stroke-dasharray="5 4"'}/>`);
    x += w;
  }
  o.push(`<rect x="40" y="848" width="${x - 40}" height="56" fill="none" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(`<line x1="77" y1="906" x2="77" y2="918" stroke="${C.ink}" stroke-width="2"/><line x1="167" y1="906" x2="167" y2="918" stroke="${C.ink}" stroke-width="2"/>`);
  o.push(t(77, 942, 'exon', { size: 21, weight: 700, fill: C.tealDark, anchor: 'middle' }), t(167, 942, 'intron', { size: 21, weight: 700, fill: C.olive, anchor: 'middle' }));
  o.push(arrow(445, 960, 445, 1024, { w: 5, marker: 'ahBig' }));
  o.push(t(466, 990, 'introns removed,', { size: 20 }), t(466, 1018, 'exons joined', { size: 20 }));
  x = 40;
  for (const [w, ex] of segs.filter((s) => s[1])) { o.push(`<rect x="${x}" y="1040" width="${w}" height="56" fill="${C.tealDark}" stroke="${C.ink}" stroke-width="2"/>`); x += w; }
  o.push(`<rect x="40" y="1040" width="${x - 40}" height="56" fill="none" stroke="${C.ink}" stroke-width="3"/>`);
  o.push(t(40, 1128, 'mRNA: 1,550 nt', { size: 21, weight: 700 }));
  o.push(arrow(440, 1068, 814, 1068, { color: C.tealDark, w: 4, marker: 'ahBigT' }));
  for (const yy of [[1000, 1050], [1096, 1150]]) o.push(`<path d="M690 ${yy[0]} V${yy[1]} M706 ${yy[0]} V${yy[1]}" stroke="${C.ink}" stroke-width="5"/>`);
  o.push(t(668, 1128, 'nucleus', { size: 20, fill: C.muted, anchor: 'end' }), t(730, 1128, 'cytoplasm', { size: 20, fill: C.muted }));
  o.push(t(698, 1186, 'nuclear pore', { size: 20, anchor: 'middle' }));
  return S(W, 1215, 'From gene to mRNA', o.join('\n'), 'Schematic: transcription in the nucleus');
}

// ---------- 8. Gene mutations ----------
function mutations() {
  const o = [];
  const AA = (x, y, s, { fill = '#ffffff', edge = C.ink, w = 100 } = {}) =>
    `<rect x="${x}" y="${y}" width="${w}" height="42" rx="8" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>` + t(x + w / 2, y + 29, s, { size: 20, weight: 700, anchor: 'middle' });
  const CH = C.mustard;
  const rows = [
    ['Original', '', 'AUG UUC GGC AAC GAU CAA UAA', ['Met', 'Phe', 'Gly', 'Asn', 'Asp', 'Gln', 'STOP'], [], null],
    ['Substitution (1)', 'same amino acid: code is degenerate', 'AUG UUC GGU AAC GAU CAA UAA', ['Met', 'Phe', 'Gly', 'Asn', 'Asp', 'Gln', 'STOP'], [], [8, 'base changed']],
    ['Substitution (2)', 'one amino acid changed', 'AUG UUG GGC AAC GAU CAA UAA', ['Met', 'Leu', 'Gly', 'Asn', 'Asp', 'Gln', 'STOP'], [1], [5, 'base changed']],
    ['Deletion', 'frame shift: later amino acids change', 'AUG UUC GCA ACG AUC AAU AA', ['Met', 'Phe', 'Ala', 'Thr', 'Ile', 'Asn', '–'], [2, 3, 4, 5], [6, 'G deleted', true]],
    ['Insertion', 'frame shift: later amino acids change', 'AUG UUC AGG CAA CGA UCA AUA A', ['Met', 'Phe', 'Arg', 'Gln', 'Arg', 'Ser', 'Ile', '–'], [2, 3, 4, 5, 6], [6, 'A inserted']],
  ];
  const dy = -30;
  rows.forEach(([h, note, seq, aas, changed, mark], r) => {
    const y = 170 + dy + r * 200;
    o.push(t(30, y, h, { size: 23, weight: 700, fill: r === 0 ? C.tealDark : C.ink }));
    if (note) o.push(t(870, y, note, { size: 19, fill: C.muted, anchor: 'end' }));
    const codons = seq.split(' ');
    let bi = 0;
    codons.forEach((cd, ci) => {
      cd.split('').forEach((b, k) => {
        const x = 30 + ci * 114 + k * 28, by = y + 46;
        const hit = mark && !mark[2] && bi === mark[0];
        o.push(`<rect x="${x}" y="${by}" width="26" height="40" rx="6" fill="${BASE[b]}" stroke="${hit ? RUST : C.ink}" stroke-width="${hit ? 3.5 : 2}"/>`);
        o.push(t(x + 13, by + 27, b, { size: 19, weight: 700, anchor: 'middle' }));
        bi++;
      });
    });
    if (mark) {
      const k = mark[0], mx = 30 + Math.floor(k / 3) * 114 + (k % 3) * 28 + (mark[2] ? 0 : 13);
      o.push(`<polygon points="${mx - 10},${y + 26} ${mx + 10},${y + 26} ${mx},${y + 38}" fill="${RUST}"/>`);
      o.push(t(mx + 20, y + 32, mark[1], { size: 20, weight: 700, fill: RUST }));
    }
    aas.forEach((a, i) => {
      const last = a === '–' && aas.length === 8;
      const fill = a === 'STOP' ? '#f2dccc' : a === '–' ? '#efefef' : changed.includes(i) ? CH : '#ffffff';
      o.push(AA(30 + i * 114, y + 96, a, { fill, w: last ? 30 : 100 }));
    });
  });
  o.push(`<rect x="30" y="${1140 + dy}" width="36" height="28" rx="6" fill="${CH}" stroke="${C.ink}" stroke-width="2.5"/>`);
  o.push(t(80, 1161 + dy, 'amino acid changed from original', { size: 20 }));
  return S(W, 1170, 'Gene mutations', o.join('\n'), 'Effect on the mRNA reading frame');
}

// ---------- 9. ATP and ADP ----------
function atp() {
  const o = [];
  const adenosine = (x, y) => {
    const hex = [];
    for (let i = 0; i < 6; i++) { const a = (Math.PI / 3) * i + Math.PI / 6; hex.push(`${(x + 28 * Math.cos(a)).toFixed(1)},${(y + 28 * Math.sin(a)).toFixed(1)}`); }
    const pent = (cx, cy, r) => { const p = []; for (let i = 0; i < 5; i++) { const a = -Math.PI / 2 + (2 * Math.PI * i) / 5; p.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`); } return p.join(' '); };
    return `<polygon points="${pent(x + 44, y + 2, 28)}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` +
      `<polygon points="${hex.join(' ')}" fill="${C.teal}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x, y + 9, 'A', { size: 26, weight: 700, anchor: 'middle' }) +
      `<line x1="${x + 70}" y1="${y}" x2="${x + 104}" y2="${y}" stroke="${C.ink}" stroke-width="4"/>` +
      `<polygon points="${pent(x + 128, y + 4, 38)}" fill="#dfeceb" stroke="${C.ink}" stroke-width="2.5"/>`;
  };
  const P = (x, y, s = 'P') => `<circle cx="${x}" cy="${y}" r="24" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x, y + 7, s, { size: 19, weight: 700, anchor: 'middle' });
  const y1 = 216, y2 = 572;
  o.push(`<path d="M60 172 v-12 H254 v12" fill="none" stroke="${SLATE}" stroke-width="2"/>`, t(157, 150, 'adenosine', { size: 20, fill: SLATE, anchor: 'middle' }));
  o.push(adenosine(86, y1));
  o.push(`<line x1="250" y1="${y1}" x2="400" y2="${y1}" stroke="${C.ink}" stroke-width="4"/>`, P(298, y1), P(360, y1), P(422, y1));
  o.push(t(108, 298, 'adenine', { size: 20, anchor: 'middle' }), t(214, 298, 'ribose', { size: 20, anchor: 'middle' }), t(362, 290, '3 phosphates', { size: 20, anchor: 'middle' }));
  o.push(t(678, 232, 'ATP', { size: 36, weight: 700, anchor: 'middle' }));
  // hydrolysis
  o.push(`<line x1="300" y1="340" x2="300" y2="440" stroke="${C.ink}" stroke-width="5"/><polygon points="300,478 280,438 320,438" fill="${C.ink}"/>`);
  o.push(t(336, 360, 'hydrolysis', { size: 23, weight: 700 }), t(336, 391, 'ATP hydrolase', { size: 20 }));
  o.push(`<path d="M148 350 C138 366 132 376 132 386 a16 16 0 0 0 32 0 C164 376 158 366 148 350 z" fill="#d6e7ef" stroke="${C.ink}" stroke-width="2"/>`);
  o.push(t(182, 390, `+ H<tspan font-size="70%" dy="0.3em">2</tspan><tspan dy="-0.3em">O</tspan>`, { size: 21, weight: 700 }));
  // condensation
  o.push(`<line x1="560" y1="470" x2="560" y2="374" stroke="${C.tealDark}" stroke-width="5"/><polygon points="560,334 540,374 580,374" fill="${C.tealDark}"/>`);
  o.push(t(596, 360, 'condensation', { size: 23, weight: 700, fill: C.tealDark }), t(596, 391, 'ATP synthase', { size: 20 }));
  o.push(t(596, 422, 'respiration or', { size: 20 }), t(596, 450, 'photosynthesis', { size: 20 }));
  // ADP + Pi
  o.push(adenosine(86, y2));
  o.push(`<line x1="250" y1="${y2}" x2="340" y2="${y2}" stroke="${C.ink}" stroke-width="4"/>`, P(298, y2), P(360, y2));
  o.push(`<circle cx="458" cy="${y2}" r="24" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + t(458, y2 + 7, `P<tspan font-size="65%" dy="0.3em">i</tspan>`, { size: 19, weight: 700, anchor: 'middle' }));
  o.push(t(458, 634, 'inorganic phosphate', { size: 20, anchor: 'middle' }));
  o.push(t(682, 582, 'ADP', { size: 36, weight: 700, anchor: 'middle' }));
  o.push(panel(30, 710, 840, 170, C.cream, C.olive));
  o.push(t(450, 756, 'Hydrolysis releases energy: 30.5 kJ per mole', { size: 23, weight: 700, anchor: 'middle' }));
  o.push(t(450, 801, 'coupled to a reaction needing 14.0 kJ per mole', { size: 21, anchor: 'middle' }));
  o.push(t(450, 848, 'net: 30.5 − 14.0 = 16.5 kJ per mole released', { size: 22, weight: 700, anchor: 'middle' }));
  return S(W, 915, 'ATP', o.join('\n'), 'Schematic: a nucleotide with three phosphates');
}

export const figures = [
  { name: '04-replication-fork', after: '### Worked example 3: transcription', svg: fork(),
    alt: 'A replication fork opens to the right. Helicase at the fork breaks hydrogen bonds so both parent strands act as templates. DNA polymerase adds nucleotides only to the 3′ end, so each new strand grows 5′ to 3′. The leading strand is built continuously towards the fork; the lagging strand is built away from the fork in short fragments that DNA ligase joins. Every daughter duplex has one old and one new strand.',
    caption: 'New strands grow 5′ to 3′ only, so one strand is built continuously and the other in fragments.' },
  { name: '05-meselson-stahl', after: '## 2.1.3(e) Semi-conservative replication', svg: meselson(),
    alt: 'Density-gradient tubes show DNA bands. The start sample has one heavy band. After one generation in light nitrogen there is a single intermediate band; after two generations there are equal intermediate and light bands. A grid of predictions shows semi-conservative replication fits both results, conservative replication is ruled out at generation 1 and dispersive replication at generation 2.',
    caption: 'Only semi-conservative replication predicts both the generation 1 and generation 2 bands.' },
  { name: '06-transcription-splicing', after: '## mRNA and tRNA', svg: transcription(),
    alt: 'RNA polymerase copies the template strand into mRNA using complementary base pairing with A pairing to U. Example: template TAC AAG CCG TTG ATT gives AUG UUC GGC AAC UAA, which matches the non-transcribed strand with U for T. In eukaryotes a 3,180 nucleotide primary transcript has its four introns removed and the exons joined to give a 1,550 nucleotide mRNA, which leaves the nucleus through a nuclear pore.',
    caption: 'mRNA is a copy of the template strand; in eukaryotes the introns are removed before mRNA leaves the nucleus.' },
  { name: '08-gene-mutations', after: '## Gene expression compared', svg: mutations(),
    alt: 'The mRNA AUG UUC GGC AAC GAU CAA UAA codes Met Phe Gly Asn Asp Gln then stop. A substitution that changes GGC to GGU still codes Gly because the code is degenerate. A substitution that changes UUC to UUG changes Phe to Leu. Deleting one base or inserting one base shifts the reading frame so every later amino acid changes.',
    caption: 'A substitution changes at most one amino acid; a deletion or insertion shifts the reading frame.' },
  { name: '09-atp-adp', after: '## The three types of RNA', svg: atp(),
    alt: 'ATP is made of adenine, the sugar ribose and three phosphate groups; adenine plus ribose is adenosine. Hydrolysis with water splits ATP into ADP, which has two phosphates, and an inorganic phosphate Pi, releasing energy. Condensation of ADP and Pi resynthesises ATP in respiration or photosynthesis. Example: releasing 30.5 kilojoules per mole coupled to a reaction needing 14.0 gives a net 16.5.',
    caption: 'ATP is hydrolysed to ADP and Pi to release energy, and resynthesised by condensation.' },
];
