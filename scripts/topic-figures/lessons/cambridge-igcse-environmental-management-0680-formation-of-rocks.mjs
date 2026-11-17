// Topic figures for cambridge-igcse-environmental-management-0680-formation-of-rocks
import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

// ---- local helpers (kept inside this lesson file on purpose) ----
const esc = (s) => String(s).replace(/&(?![a-z#0-9]+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const tw = (s, size, weight = 400) => String(s).replace(/&[a-z#0-9]+;/g, 'x').length * size * (weight >= 600 ? 0.575 : 0.535);
const wrap = (s, size, width, weight = 400) => {
  const lines = [''];
  for (const w of String(s).split(' ')) {
    const cur = lines[lines.length - 1];
    const cand = cur ? cur + ' ' + w : w;
    if (cur && tw(cand, size, weight) > width) lines.push(w); else lines[lines.length - 1] = cand;
  }
  return lines;
};
// wrapped paragraph; returns svg string. ph() gives its height.
const para = (x, y, s, width, o = {}) => {
  const size = o.size || 17, lh = o.lh || Math.round(size * 1.32);
  return tl(x, y, wrap(s, size, width, o.weight).map(esc), { ...o, size }, lh);
};
const ph = (s, width, o = {}) => { const size = o.size || 17, lh = o.lh || Math.round(size * 1.32); return wrap(s, size, width, o.weight).length * lh; };
// card: optional title + body text (string, or array of strings = separate paragraphs/bullets)
const cardLayout = (w, o) => {
  const pad = o.pad ?? 18, ts = o.tsize || 20, bs = o.bsize || 17, inner = w - 2 * pad;
  const tLines = o.title ? wrap(o.title, ts, inner, 700) : [];
  const body = o.body == null ? [] : Array.isArray(o.body) ? o.body : [o.body];
  const blh = Math.round(bs * 1.32), tlh = Math.round(ts * 1.25);
  const bLines = body.map((b) => wrap((o.bullet ? '• ' : '') + b, bs, inner - (o.bullet ? 0 : 0), o.bweight));
  const contentH = tLines.length * tlh + (tLines.length && body.length ? 8 : 0) + bLines.reduce((a, l) => a + l.length * blh, 0) + Math.max(0, body.length - 1) * (o.gap ?? 6);
  return { pad, ts, bs, inner, tLines, bLines, blh, tlh, contentH, h: contentH + 2 * pad - 4 + (o.top || 0) };
};
const cardH = (w, o) => cardLayout(w, o).h;
const card = (x, y, w, o = {}) => {
  const L = cardLayout(w, o);
  const h = o.h || L.h;
  const anchor = o.center ? 'middle' : 'start';
  const tx = o.center ? x + w / 2 : x + L.pad;
  let yy = y + (o.top || 0) + L.pad + L.ts * 0.78 + (o.vcenter === false ? 0 : (h - L.h) / 2);
  if (!o.title) yy = yy - L.ts * 0.78 + L.bs * 0.78;
  let s = o.noBox ? '' : `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 12}" fill="${o.fill || C.panel}" stroke="${o.edge || C.panelEdge}" stroke-width="${o.ew ?? 2.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
  L.tLines.forEach((ln) => { s += t(tx, yy, esc(ln), { size: L.ts, weight: 700, fill: o.tfill || C.ink, anchor }); yy += L.tlh; });
  if (L.tLines.length && L.bLines.length) yy += 8;
  L.bLines.forEach((lines, i) => { lines.forEach((ln) => { s += t(tx, yy, esc(ln), { size: L.bs, fill: o.bfill || C.ink, anchor, weight: o.bweight || 400 }); yy += L.blh; }); yy += o.gap ?? 6; });
  return s;
};
// rounded tag sized to its text
const tag = (x, y, s, o = {}) => {
  const size = o.size || 16, w = tw(s, size, o.weight || 600) + 24, h = size + 14;
  const x0 = o.anchor === 'middle' ? x - w / 2 : o.anchor === 'end' ? x - w : x;
  return `<rect x="${x0}" y="${y - h / 2}" width="${w}" height="${h}" rx="${h / 2}" fill="${o.fill || C.cream}" stroke="${o.edge || C.olive}" stroke-width="2"/>` + t(x0 + w / 2, y + size * 0.36, esc(s), { size, weight: o.weight || 600, anchor: 'middle', fill: o.color || C.ink });
};
// curved arrow (quadratic)
const carrow = (x1, y1, cx, cy, x2, y2, { color = C.ink, w = 3.5, marker = 'ah', dash = '' } = {}) =>
  `<path d="M${x1},${y1} Q${cx},${cy} ${x2},${y2}" fill="none" stroke="${color}" stroke-width="${w}" marker-end="url(#${marker})"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
// poly-line arrow through points
const parrow = (pts, { color = C.ink, w = 3.5, marker = 'ah', dash = '' } = {}) =>
  `<polyline points="${pts.map((p) => p.join(',')).join(' ')}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linejoin="round" marker-end="url(#${marker})"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const notToScale = (x, y, anchor = 'end') => t(x, y, 'Not to scale', { size: 15, italic: true, fill: C.muted, anchor });
// simple chart frame: returns {svg, X, Y}
const chart = (x0, y0, w, h, { xmin, xmax, ymin, ymax, xticks, yticks, xlabel, ylabel, xfmt = (v) => v, yfmt = (v) => v, grid = true }) => {
  const X = (v) => x0 + ((v - xmin) / (xmax - xmin)) * w;
  const Y = (v) => y0 + h - ((v - ymin) / (ymax - ymin)) * h;
  let s = `<rect x="${x0}" y="${y0}" width="${w}" height="${h}" fill="${C.panel}"/>`;
  for (const v of yticks) s += (grid ? `<line x1="${x0}" y1="${Y(v)}" x2="${x0 + w}" y2="${Y(v)}" stroke="${C.panelEdge}" stroke-width="1.5"/>` : '') + `<line x1="${x0 - 7}" y1="${Y(v)}" x2="${x0}" y2="${Y(v)}" stroke="${C.ink}" stroke-width="2"/>` + t(x0 - 12, Y(v) + 6, yfmt(v), { size: 16, anchor: 'end' });
  for (const v of xticks) s += `<line x1="${X(v)}" y1="${y0 + h}" x2="${X(v)}" y2="${y0 + h + 7}" stroke="${C.ink}" stroke-width="2"/>` + t(X(v), y0 + h + 28, xfmt(v), { size: 16, anchor: 'middle' });
  s += `<path d="M${x0},${y0} L${x0},${y0 + h} L${x0 + w},${y0 + h}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  if (xlabel) s += t(x0 + w / 2, y0 + h + 60, esc(xlabel), { size: 17, weight: 600, anchor: 'middle' });
  if (ylabel) s += `<text x="0" y="0" transform="translate(${x0 - 62},${y0 + h / 2}) rotate(-90)" font-size="17" font-weight="600" fill="${C.ink}" text-anchor="middle">${esc(ylabel)}</text>`;
  return { svg: s, X, Y };
};
const dot = (x, y, r = 7, fill = C.tealDark) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
const line = (x1, y1, x2, y2, color = C.ink, w = 2.5, dash = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const rect = (x, y, w, h, fill, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 0}" fill="${fill}"${o.stroke ? ` stroke="${o.stroke}" stroke-width="${o.sw ?? 2.5}"` : ''}${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}${o.op ? ` opacity="${o.op}"` : ''}/>`;
const tree = (x, y, s = 1) => `<rect x="${x - 4 * s}" y="${y - 22 * s}" width="${8 * s}" height="${22 * s}" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2"/><circle cx="${x}" cy="${y - 38 * s}" r="${22 * s}" fill="${C.grass}" stroke="${C.ink}" stroke-width="2.5"/>`;
const cloud = (cx, cy, w, h, fill = C.tealLight) => {
  const rx = w / 2, ry = h / 2;
  return `<path d="M${cx - rx},${cy + ry} Q${cx - rx - ry * 0.9},${cy + ry} ${cx - rx},${cy} Q${cx - rx + 5},${cy - ry * 1.2} ${cx - rx * 0.45},${cy - ry * 0.85} Q${cx - rx * 0.2},${cy - ry * 1.9} ${cx + rx * 0.25},${cy - ry * 1.1} Q${cx + rx * 0.75},${cy - ry * 1.6} ${cx + rx * 0.85},${cy - ry * 0.3} Q${cx + rx + ry * 0.9},${cy - ry * 0.2} ${cx + rx},${cy + ry} Z" fill="${fill}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
};

export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });

export const slug = 'cambridge-igcse-environmental-management-0680-formation-of-rocks';

// shared texture helpers
const crystals = (x, y, w, h, n, seed, cols) => { let o = `<clipPath id="cl${seed}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10"/></clipPath><g clip-path="url(#cl${seed})"><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${cols[0]}"/>`; let r = seed; const rnd = () => { r = (r * 9301 + 49297) % 233280; return r / 233280; }; for (let i = 0; i < n; i++) { const cx = x + rnd() * w, cy = y + rnd() * h, s = (w / Math.sqrt(n)) * (0.6 + rnd() * 0.5); o += `<polygon points="${[0, 1, 2, 3, 4].map((k) => { const a = k * 1.256 + rnd() * 0.6; return `${(cx + Math.cos(a) * s * 0.6).toFixed(1)},${(cy + Math.sin(a) * s * 0.6).toFixed(1)}`; }).join(' ')}" fill="${cols[1 + (i % (cols.length - 1))]}" stroke="${C.ink}" stroke-width="1"/>`; } return o + `</g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`; };
const grains = (x, y, w, h, r, seed, fill, gapFill) => { let o = `<clipPath id="gr${seed}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10"/></clipPath><g clip-path="url(#gr${seed})"><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${gapFill}"/>`; for (let yy = y + r * 0.8; yy < y + h + r; yy += r * 1.75) for (let xx = x + ((yy / (r * 1.75)) % 2) * r; xx < x + w + r; xx += r * 2.05) o += `<circle cx="${xx.toFixed(1)}" cy="${yy.toFixed(1)}" r="${r * 0.92}" fill="${fill}" stroke="${C.ink}" stroke-width="1.2"/>`; return o + `</g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`; };

// 01 Granite and basalt
{
  const G = 300;
  let s = panel(30, 110, 840, 400);
  s += rect(32, G, 836, 208, C.rock) + `<path d="M380,${G} L460,190 L500,190 L600,${G} Z" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="2.5"/>` + line(32, G, 868, G, C.ink, 3);
  s += `<path d="M500,192 Q560,250 640,${G - 4} L800,${G - 4} L800,${G}" fill="none" stroke="${C.rust}" stroke-width="10" stroke-linecap="round"/>`;
  s += `<ellipse cx="300" cy="440" rx="170" ry="48" fill="${C.rust}" stroke="${C.ink}" stroke-width="2.5"/>` + path(`M440,420 L480,200`, { stroke: C.rust, w: 12 });
  s += t(300, 446, 'magma cools slowly, deep underground', { size: 16, weight: 700, anchor: 'middle', fill: C.panel });
  s += t(858, G - 50, 'lava cools quickly', { size: 16, weight: 700, fill: C.rust, anchor: 'end' }) + t(858, G - 30, 'at the surface', { size: 16, weight: 700, fill: C.rust, anchor: 'end' });
  s += notToScale(858, 500);
  s += crystals(30, 530, 140, 120, 14, 7, [C.cream, '#ece4d4', C.rock, '#d9c4c0', C.panel]) + t(190, 562, 'Granite', { size: 21, weight: 700 }) + tl(190, 588, ['coarse-grained: large', 'crystals you can see;', 'pale, speckled'], { size: 16 }, 21);
  s += crystals(460, 530, 140, 120, 140, 3, [C.ink, '#3a4256', C.muted, '#2b3346']) + t(620, 562, 'Basalt', { size: 21, weight: 700 }) + tl(620, 588, ['fine-grained: crystals', 'too small to see;', 'dark grey to black'], { size: 16 }, 21);
  s += t(450, 690, 'Both: interlocking crystals, no pore spaces (impermeable), no fossils.', { size: 16, weight: 600, anchor: 'middle', fill: C.muted });
  add('01-granite-basalt',
    svg(900, 715, 'Cooling speed sets crystal size', s),
    'Cross-section of a volcano. Magma deep underground cools slowly and forms granite; lava flowing over the surface cools quickly and forms basalt. Close-ups show granite with large, pale interlocking crystals and basalt with tiny dark crystals.',
    'Slow cooling underground gives coarse granite; fast cooling at the surface gives fine basalt.',
    '## Igneous rocks: crystallisation from molten rock');
}

// 02 Five steps to sedimentary rock
{
  const st = [['Weathering', 'rock broken down in place'], ['Erosion and transportation', 'fragments removed and carried away'], ['Deposition and sedimentation', 'dropped, building up in layers'], ['Compaction', 'weight above squeezes out water'], ['Cementation', 'minerals crystallise and glue particles']];
  let s = '';
  const bw = 160, gx = 10;
  st.forEach(([a, b], i) => {
    const x = 30 + i * (bw + gx + 0.5), y = 110;
    s += panel(x, y, bw, 330);
    const ay = y + 30;
    if (i === 0) s += rect(x + 20, ay + 20, 120, 80, C.rock, { stroke: C.ink, sw: 2.5 }) + path(`M${x + 60},${ay + 20} l10,30 -8,20 M${x + 100},${ay + 20} l-6,40`, { w: 2.5, stroke: C.rust }) + `<circle cx="${x + 40}" cy="${ay + 112}" r="7" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="1.5"/><circle cx="${x + 120}" cy="${ay + 110}" r="5" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="1.5"/>`;
    if (i === 1) s += rect(x + 10, ay + 50, 140, 50, C.teal) + [30, 60, 95, 125].map((dx, k) => `<circle cx="${x + dx}" cy="${ay + 70 + (k % 2) * 12}" r="6" fill="${C.rockDark}" stroke="${C.ink}" stroke-width="1.5"/>`).join('') + arrow(x + 25, ay + 34, x + 135, ay + 34, { w: 3.5, color: C.tealDark, marker: 'ahT' });
    if (i === 2) s += rect(x + 10, ay + 10, 140, 60, C.teal) + [C.sand, C.rock, C.sand].map((f, k) => rect(x + 10, ay + 70 + k * 16, 140, 16, f, { stroke: C.ink, sw: 1.2 })).join('') + arrow(x + 80, ay + 20, x + 80, ay + 62, { w: 3 });
    if (i === 3) s += [C.sand, C.rock, C.sand, C.rock, C.sand].map((f, k) => rect(x + 10, ay + 40 + k * 14, 140, 14, f, { stroke: C.ink, sw: 1.2 })).join('') + arrow(x + 50, ay + 4, x + 50, ay + 34, { w: 3.5 }) + arrow(x + 110, ay + 4, x + 110, ay + 34, { w: 3.5 });
    if (i === 4) s += grains(x + 15, ay + 20, 130, 90, 12, 11 + i, C.sand, C.olive);
    s += badge(x + 26, y + 175, 15, String(i + 1), C.mustard) + tl(x + 48, y + 181, wrap(a, 16, bw - 56, 700), { size: 16, weight: 700 }, 20);
    s += para(x + 14, y + 254, b, bw - 28, { size: 15, fill: C.muted });
    if (i < 4) s += arrow(x + bw + 0, y + 90, x + bw + gx + 0.5, y + 90, { w: 2.5 });
  });
  const tbl = [['Limestone', 'shells and skeletons (calcium carbonate)', 'warm, shallow seas'], ['Sandstone', 'sand grains, mostly quartz', 'rivers, beaches, deserts'], ['Shale', 'very fine clay and silt (mud)', 'calm water: lake beds, deep sea floor']];
  s += t(450, 476, 'Same five steps; different material', { size: 19, weight: 700, anchor: 'middle' });
  tbl.forEach(([a, b, c], i) => { const x = 30 + i * 285; s += card(x, 494, 270, { title: a, body: [b, c], tsize: 18, bsize: 15, h: 112, pad: 14, fill: i === 2 ? C.cream : C.panel, edge: i === 2 ? C.olive : C.panelEdge, gap: 2 }); });
  add('02-sedimentary-sequence',
    svg(900, 636, 'How sedimentary rock forms', s),
    'Five panels in order: weathering breaks rock down in place; erosion and transportation carry fragments away; deposition and sedimentation build layers; compaction squeezes out water; cementation glues the particles together. Below, limestone forms from shells in warm shallow seas, sandstone from sand grains, and shale from fine mud in calm water.',
    'Weathering, erosion, transport, deposition, sedimentation, compaction, cementation: in that order.',
    '## Sedimentary rocks: particles laid down in layers');
}

// 03 Metamorphic pairs
{
  let s = '';
  const row = (y, from, to, agent, fromTex, toTex, note) => {
    let o = panel(30, y, 840, 220);
    o += fromTex + t(130, y + 196, from, { size: 20, weight: 700, anchor: 'middle' });
    o += toTex + t(770, y + 196, to, { size: 20, weight: 700, anchor: 'middle' });
    o += arrow(260, y + 100, 640, y + 100, { w: 6, color: C.rust, marker: 'ahR' }) + t(450, y + 84, agent, { size: 19, weight: 700, anchor: 'middle', fill: C.rust }) + t(450, y + 130, 'no melting', { size: 15, anchor: 'middle', fill: C.muted });
    o += para(290, y + 160, note, 330, { size: 15, fill: C.ink });
    return o;
  };
  const lime = grains(60, 140, 140, 120, 11, 21, C.cream, C.rock) + `<path d="M100,190 q20,-24 40,0 q-20,10 -40,0" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  const marble = crystals(700, 140, 140, 120, 20, 5, [C.panel, '#f3f1ea', '#e8e4da', C.panel]);
  s += row(110, 'Limestone', 'Marble', 'heat', lime, marble, 'Crystals interlock, so marble is harder and impermeable; fossils destroyed; still fizzes with acid.');
  let shale = `<clipPath id="sh1"><rect x="60" y="370" width="140" height="120" rx="10"/></clipPath><g clip-path="url(#sh1)">` + [0, 1, 2, 3, 4, 5, 6, 7].map((k) => rect(60, 370 + k * 15, 140, 15, k % 2 ? C.muted : '#6b7487')).join('') + `</g><rect x="60" y="370" width="140" height="120" rx="10" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  let slate = `<clipPath id="sl1"><rect x="700" y="370" width="140" height="120" rx="10"/></clipPath><g clip-path="url(#sl1)"><rect x="700" y="370" width="140" height="120" fill="#4a5568"/>` + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((k) => line(700, 374 + k * 11, 840, 374 + k * 11, C.ink, 2)).join('') + `</g><rect x="700" y="370" width="140" height="120" rx="10" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
  s += row(340, 'Shale', 'Slate', 'pressure', shale, slate, 'Minerals line up in parallel, so slate splits into thin, flat sheets: used for roofing.');
  s += t(450, 600, 'Learn the pairs: limestone → marble, shale → slate.', { size: 17, weight: 700, anchor: 'middle', fill: C.olive });
  add('03-metamorphic-pairs',
    svg(900, 630, 'Changed without melting', s),
    'Two rows. Limestone, with grains and a fossil, is changed by heat into marble with interlocking crystals. Shale, in fine layers, is changed by pressure into slate, whose minerals line up so it splits into thin sheets. Neither melts.',
    'Heat turns limestone into marble; pressure turns shale into slate.',
    '## Metamorphic rocks: changed without melting');
}

// 04 Rock cycle
{
  let s = '';
  const node = (x, y, w, h, l, sub, f, e = C.ink, tf = C.ink) => card(x, y, w, { title: l, body: sub, tsize: 19, bsize: 15, center: true, h, fill: f, edge: e, pad: 12, tfill: tf, bfill: tf });
  s += node(330, 110, 240, 80, 'Magma or lava', 'molten rock', C.rust, C.ink, C.panel);
  s += node(40, 300, 220, 80, 'Igneous rock', 'granite, basalt', C.rock);
  s += node(640, 300, 220, 80, 'Metamorphic rock', 'marble, slate', C.tealLight, C.tealDark);
  s += node(340, 330, 220, 70, 'Sediment', 'particles in layers', C.sand, C.olive);
  s += node(330, 530, 240, 80, 'Sedimentary rock', 'limestone, sandstone, shale', C.cream, C.olive);
  s += carrow(330, 150, 160, 160, 150, 294, { w: 4, color: C.rust, marker: 'ahR' }) + t(200, 190, 'crystallisation', { size: 17, weight: 700, fill: C.rust, anchor: 'end' });
  s += carrow(750, 296, 740, 160, 576, 150, { w: 4, color: C.rust, marker: 'ahR' }) + t(712, 190, 'melting', { size: 17, weight: 700, fill: C.rust });
  s += arrow(264, 342, 334, 360, { w: 4 }) + arrow(636, 342, 566, 360, { w: 4 });
  s += t(450, 270, 'weathering, erosion,', { size: 16, weight: 700, anchor: 'middle' }) + t(450, 292, 'transportation', { size: 16, weight: 700, anchor: 'middle' });
  s += arrow(450, 404, 450, 524, { w: 4, color: C.olive, marker: 'ahO' });
  s += tl(464, 440, ['deposition, sedimentation,', 'compaction, cementation'], { size: 16, weight: 700, fill: C.olive }, 22);
  s += carrow(574, 585, 860, 600, 800, 388, { w: 4, color: C.tealDark, marker: 'ahT' }) + t(700, 634, 'heat and pressure', { size: 17, weight: 700, fill: C.tealDark, anchor: 'middle' });
  s += t(40, 440, 'Any rock at the surface can', { size: 15, fill: C.muted }) + t(40, 460, 'be weathered; any rock buried', { size: 15, fill: C.muted }) + t(40, 480, 'deeply can be changed by heat', { size: 15, fill: C.muted }) + t(40, 500, 'and pressure.', { size: 15, fill: C.muted });
  add('04-rock-cycle',
    svg(900, 665, 'The rock cycle', s),
    'Rock cycle diagram. Magma or lava crystallises into igneous rock. Igneous and metamorphic rock are weathered, eroded and transported to form sediment, which becomes sedimentary rock through deposition, sedimentation, compaction and cementation. Heat and pressure change sedimentary rock into metamorphic rock, which can melt back into magma.',
    'Read each arrow: out of magma is crystallisation; surface rock to sediment is weathering and erosion.',
    '## The rock cycle as a set of links');
}

// 05 Permeability: why some rocks let water through
{
  let s = '';
  const cards = [
    ['Sandstone', 'Permeable', 'rounded grains leave connected pore spaces', grains(55, 175, 200, 150, 16, 31, C.sand, C.teal), true],
    ['Shale', 'Impermeable', 'pores are tiny and unconnected', grains(345, 175, 200, 150, 4, 32, C.muted, '#6b7487'), false],
    ['Granite', 'Impermeable', 'interlocking crystals leave no pore spaces', crystals(635, 175, 200, 150, 24, 9, [C.cream, '#ece4d4', C.rock, C.panel, '#d9c4c0']), false],
  ];
  cards.forEach(([n, k, why, tex, perm], i) => {
    const x = 30 + i * 290;
    s += panel(x, 110, 260, 330) + t(x + 130, 150, n, { size: 21, weight: 700, anchor: 'middle' }) + tex;
    s += perm ? [80, 130, 180].map((dx) => arrow(x + dx, 182, x + dx, 320, { w: 3.5, color: C.blue, dash: '8 6' })).join('') : [90, 170].map((dx) => path(`M${x + dx},165 l0,16 m-8,-8 l8,8 8,-8`, { stroke: C.blue, w: 3 })).join('') + line(x + 70, 175, x + 190, 175, C.rust, 5);
    s += t(x + 130, 362, k, { size: 20, weight: 700, anchor: 'middle', fill: perm ? C.tealDark : C.rust }) + para(x + 20, 392, why, 220, { size: 16 });
  });
  const def = 'Permeability: the ability of water to pass through the pore spaces of rock and soil.';
  s += card(30, 460, 840, { body: def, bsize: 18, bweight: 700, fill: C.cream, edge: C.olive, center: true });
  s += t(450, 460 + cardH(840, { body: def, bsize: 18, bweight: 700 }) + 30, 'Permeable: limestone, sandstone. Impermeable: granite, basalt, marble, slate, shale.', { size: 16, anchor: 'middle', weight: 600 });
  add('05-permeability',
    svg(900, 460 + cardH(840, { body: def, bsize: 18, bweight: 700 }) + 56, 'Why some rocks let water through', s),
    'Three magnified rock textures. Sandstone has rounded grains with connected pore spaces, so water passes through. Shale has tiny unconnected pores and granite has interlocking crystals, so water cannot pass. Below are the definition of permeability and the classification of the seven named rocks.',
    'Permeable rock needs pore spaces that connect; shale is the sedimentary exception.',
    '## Permeability and why it matters');
}

// 06 Permeability test results
{
  const ch = chart(160, 140, 560, 340, { xmin: 0, xmax: 4, ymin: 0, ymax: 50, xticks: [], yticks: [0, 10, 20, 30, 40, 50], ylabel: 'Water drained in 5 minutes (cm³)' });
  let s = ch.svg;
  [['Sandstone', 42, C.sand], ['Limestone', 30, C.cream], ['Shale', 2, C.muted], ['Granite', 0, C.rock]].forEach(([n, v, f], i) => {
    const cx = ch.X(i + 0.5);
    if (v > 0) s += rect(cx - 50, ch.Y(v), 100, ch.Y(0) - ch.Y(v), f, { stroke: C.ink });
    s += t(cx, ch.Y(v) - 10, String(v), { size: 19, weight: 700, anchor: 'middle' }) + t(cx, 508, n, { size: 17, weight: 700, anchor: 'middle' });
  });
  s += t(ch.X(0.5), 530, '8.4 cm³/min', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 }) + t(ch.X(1.5), 530, '6.0 cm³/min', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
  s += panel(740, 150, 130, 300) + t(752, 182, 'Fair test', { size: 16, weight: 700 }) + para(752, 208, 'same block size; same 100 cm³ of water; repeat three times and take a mean', 110, { size: 15, fill: C.muted });
  s += t(450, 580, 'Invented class data.', { size: 15, italic: true, fill: C.muted, anchor: 'middle' });
  add('06-permeability-test',
    svg(900, 605, 'A permeability test', s),
    'Bar chart of water drained through four rock blocks in 5 minutes: sandstone 42 cm³ (8.4 cm³ per minute), limestone 30 cm³ (6.0 cm³ per minute), shale 2 cm³ and granite 0 cm³. A side note lists how to make the test fair.',
    'Rate = volume ÷ time; connected pores make sandstone the most permeable.',
    '## Worked example 2: a permeability test');
}
